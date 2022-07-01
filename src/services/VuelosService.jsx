
export class VuelosService {

    getVuelos() {
        return fetch('dataMock/vuelos.json').then(res => res.json()).then(d => d.data);
    }

}
    