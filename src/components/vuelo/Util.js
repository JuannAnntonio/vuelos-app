function separateDate(dateString) {
    return dateString.split("T");
}

const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export function formatToISO8601(date) {
  return date.toISOString().split('T')[0]
}

export function formatDateShort(cadena) {
    var [fecha, ] = separateDate(cadena);
    const [, month, day] = fecha.split("-");
    return day + ' ' + meses[month - 1];
}

export function formatDate(cadena) {
    var [fecha, ] = separateDate(cadena);
    const [year, month, day] = fecha.split("-");
    const date = new Date(+year, month - 1, +day);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return date.toLocaleDateString("es-ES", options);
}

export function formatTime(cadena) {
    var [, hora] = separateDate(cadena);
    return hora.substring(0, 5);
}

export function formatTimeHM(cadena) {
    var [, tiempo] = separateDate(cadena);
    var [hora, minutos] = tiempo.substring(0, 5).split("H");
    return hora + ':'+minutos;
}

export function getAirportByIata(airports, iata) {
    let obj = {}
    airports.filter((air, index) => {
        if (air.iata === iata)
            obj = airports[index]
    })
    return obj;
}

export function getAirLineByCode(carriers, code) {
    console.log("carriers",carriers);
    console.log("carriers[code]",carriers[code]);
    return carriers[code];
}

export function getAirCraftByCode(aircrafts, code) {
    console.log("carriers",aircrafts);
    console.log("carriers[code]",aircrafts[code]);
    return aircrafts[code];
}