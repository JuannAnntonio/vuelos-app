const tokenURL = "https://test.api.amadeus.com/v1/security/oauth2/token"

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", "DoCADaDFlpifAhLG9JENmnNwNzWf0DgW");
urlencoded.append("client_secret", "VHjjFfVXEGpKHmh1");

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

export class VuelosService {
  getToken() {
    return fetch(tokenURL, requestOptions)
      .then(res => res.json())
      .then(res => {
        const { access_token, token_type } = res
        return { 'Authorization': `${token_type} ${access_token}` }
      })
  }

  getVuelos(reqOpt) {
    return fetch("https://test.api.amadeus.com/v2/shopping/flight-offers", reqOpt)
      .then((res) => res.json())
      .then((d) => d);
  }

  getAirports() {
    return fetch("dataMock/airports.json")
      .then((res) => res.json())
      .then((d) => d.data);
  }
}
