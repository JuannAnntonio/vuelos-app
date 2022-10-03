const tokenURL = "https://test.api.amadeus.com/v1/security/oauth2/token"

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", "DoCADaDFlpifAhLG9JENmnNwNzWf0DgW");
urlencoded.append("client_secret", "VHjjFfVXEGpKHmh1");

export async function getToken() {
  const data = await fetch(tokenURL, {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  })

  const dataJSON = await data.json()

  const { access_token, token_type } = dataJSON

  return { 'Authorization': `${token_type} ${access_token}` }
}