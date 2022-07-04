export class VuelosService {
  getVuelos() {
    return fetch("dataMock/vuelos.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }

  getAirports() {
    return fetch("dataMock/airports.json").then((res) => res.json());
  }
}
