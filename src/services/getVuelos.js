import { VuelosService } from "../services/VuelosService";
import { formatToISO8601 } from "../components/vuelo/Util";

const vuelosService = new VuelosService();

export async function get(props) {
  var raw = JSON.stringify({
    "currencyCode": "USD",
    "originDestinations": props.typeOfFlight === 'Ida y vuelta' ? [
      {
        "id": "1",
        "originLocationCode": "RIO",
        "destinationLocationCode": "MAD",
        "departureDateTimeRange": {
          "date": formatToISO8601(props.departureDate)
        }
      },
      {
        "id": "2",
        "originLocationCode": "MAD",
        "destinationLocationCode": "RIO",
        "departureDateTimeRange": {
          "date": formatToISO8601(props.returnDate)
        }
      } 
    ] : [
      {
        "id": "1",
        "originLocationCode": "RIO",
        "destinationLocationCode": "MAD",
        "departureDateTimeRange": {
          "date": formatToISO8601(props.departureDate)
        }
      },
    ],
    "travelers": [
      {
        "id": "1",
        "travelerType": "ADULT",
        "minItems": 2,
        "maxItems": 20
      }
    ],
    "sources": [
      "GDS"
    ],
    "searchCriteria": {
      "maxFlightOffers": 2,
      "flightFilters": {
        "cabinRestrictions": [
          {
            "cabin": "BUSINESS",
            "coverage": "MOST_SEGMENTS",
            "originDestinationIds": [
              "1"
            ]
          }
        ],
        "carrierRestrictions": {
          "excludedCarrierCodes": [
            "AA",
            "TP",
            "AZ"
          ]
        }
      }
    }
  });

  try {
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