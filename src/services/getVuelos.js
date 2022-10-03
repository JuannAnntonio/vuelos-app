import { getToken } from "./getToken";
import { formatToISO8601 } from "../components/vuelo/Util";

const URLSearch = 'https://test.api.amadeus.com/v2/shopping/flight-offers'

function initTravelers(adults, children) {
  return addPassengers(0, "ADULT", adults).concat(addPassengers(adults, "CHILD", children))
}

function addPassengers(index, label, countPasajeros) {
  let array = [];
  for (let i = 0; i < countPasajeros; i++) {
    array[i] = {
      "id": ++index,
      "travelerType": label
    };
  }
  return array;
}

export async function getVuelos(props) {

  let raw = JSON.stringify({
    "currencyCode": "USD",
    "originDestinations": props.typeOfFlight === 'Ida y vuelta' ? [{
      "id": "1",
      "originLocationCode": props.origin.iata,
      "destinationLocationCode": props.destination.iata,
      "departureDateTimeRange": {
        "date": formatToISO8601(props.departureDate)
      }
    },
    {
      "id": "2",
      "originLocationCode": props.destination.iata,
      "destinationLocationCode": props.origin.iata,
      "departureDateTimeRange": {
        "date": formatToISO8601(props.returnDate)
      }
    }
    ] : [{
      "id": "1",
      "originLocationCode": props.origin.iata,
      "destinationLocationCode": props.destination.iata,
      "departureDateTimeRange": {
        "date": formatToISO8601(props.departureDate)
      }
    },],
    "travelers": initTravelers(props.adults, props.children),
    "sources": [
      "GDS"
    ],
    "searchCriteria": {
      "maxFlightOffers": 15
    }
  });

  try {
    const token = await getToken()
    const data = await fetch(URLSearch, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        ...token
      },
      body: raw,
      redirect: 'follow'
    })
    
    const dataJSON = await data.json()

    return dataJSON

  } catch (error) {
    console.log(error);
  }
}