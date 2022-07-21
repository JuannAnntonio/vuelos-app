# Vuelos App

Aplicación web que busca ofertas de vuelos en más de 500 aerolíneas para encontrar los vuelos más baratos para un itinerario determinado.

__Aquí tienes la aplicación desplegada en producción:__

* <https://vuelos-app.vercel.app/>

## Vista previa de la demo

![Vuelos App](/public/img/live-demo/live-demo.gif)

## Objetivos de este proyecto

Crear un proyecto para buscar itinerarios de vuelo con distintas aerolíneas acorde a los parametros de busqueda del usuario.

* Implementar los conocimientos adquiridos y prácticas sugeridas a lo largo del Bootcamp de React en [CodigoFacilito.com](https://codigofacilito.com/)

* Comenzar a crear proyectos personales desde 0, decidiendo de manera eficaz las librerías adecuadas para el mismo.

* Adquirir experiencia para resolver las problemáticas que se pueden presentar durante el desarrollo de un proyecto.

## ¿Cómo lo ejecuto en local?

Necesitarás tener instalado y tener acceso a una terminal para seguir los siguientes pasos:

    npm install # instalar las dependencias
    npm start   # levantar el entorno de desarrollo

## API Flight Offers Search de AMADEUS for Developer

### Visión general

La API de búsqueda de ofertas de vuelos busca en más de 500 aerolíneas para encontrar los vuelos más baratos para un itinerario determinado. La API le permite buscar vuelos entre dos ciudades, realizar búsquedas en varias ciudades para itinerarios más largos y acceder a tarifas combinables de ida para ofrecer las opciones más económicas posibles. Para cada itinerario, la API proporciona una lista de ofertas de vuelos con precios, detalles de tarifas, nombres de aerolíneas, franquicias de equipaje y terminales de salida.

    Esta API responde a la pregunta:
    "¿Cuáles son los vuelos más baratos de Madrid a París el 1 de junio?"

## POST ​/shopping​/flight-offers

### Request

    curl --location --request POST 'https://test.api.amadeus.com/v2/shopping/flight-offers' \
      --header 'Content-Type: application/json' \
      --header 'X-HTTP-Method-Override: GET' \
      --data-raw '{
        "currencyCode": "USD",
        "originDestinations": [
          {
            "id": "1",
            "originLocationCode": "BOS",
            "destinationLocationCode": "MAD",
            "departureDateTimeRange": {
              "date": "2022-11-01",
              "time": "10:00:00"
            }
          },
          {
            "id": "2",
            "originLocationCode": "MAD",
            "destinationLocationCode": "BOS",
            "departureDateTimeRange": {
              "date": "2022-11-18",
              "time": "17:00:00"
            }
          }
        ],
        "travelers": [
          {
            "id": "1",
            "travelerType": "ADULT",
            "fareOptions": [
              "STANDARD"
            ]
          },
          {
            "id": "2",
            "travelerType": "CHILD",
            "fareOptions": [
              "STANDARD"
            ]
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
      }'

## Desarrollado con

* [React](https://es.reactjs.org/)

* [PrimeReact](https://www.primefaces.org/primereact/)

## Desplegado en

* [Vercel.com](https://vercel.com/)
