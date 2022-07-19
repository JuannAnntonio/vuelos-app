import {
  VuelosService
} from "../services/VuelosService";
import {
  formatToISO8601
} from "../components/vuelo/Util";

const vuelosService = new VuelosService();


function initTravelers(adults, children) {
  return llenaTravel(0, "ADULT", adults).concat(llenaTravel(adults, "CHILD", children))
}

function llenaTravel(index, label, countPasajeros) {
  let array = [];
  for (let i = 0; i < countPasajeros; i++) {
    array[i] = {
      "id": ++index,
      "travelerType": label
    };
  }
  return array;
}

export async function get(props) {

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
    }, ],
    "travelers": initTravelers(props.adults, props.children),
    "sources": [
      "GDS"
    ],
    "searchCriteria": {
      "maxFlightOffers": 15,
      "flightFilters": {
        "cabinRestrictions": [{
          "cabin": "BUSINESS",
          "coverage": "MOST_SEGMENTS",
          "originDestinationIds": [
            "1"
          ]
        }]
      }
    }
  });

  try {
    console.log("RAW", raw);
    const data = await vuelosService.getToken().then(data => data)
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        ...data
      },
      body: raw,
      redirect: 'follow'
    };
    return vuelosService.getVuelos(requestOptions).then(res => res)

  } catch (error) {
    console.log(error);
  }
}