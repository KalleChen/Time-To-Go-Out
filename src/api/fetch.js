import { APP_ID, APP_KEY } from '../constants/envValue'

export default class SpotFetcher {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  getURL (url, params) {
    let newURL = this.baseURL + url + '?$format=JSON'
    params.forEach(param => {
      newURL += '&$' + param.key + '=' + param.value
    })
    return newURL
  }

  getAuthorizationHeader (GMTString) {
    // eslint-disable-next-line
    const ShaObj = new jsSHA('SHA-1', 'TEXT')
    ShaObj.setHMACKey(APP_KEY, 'TEXT')
    ShaObj.update('x-date: ' + GMTString)
    const HMAC = ShaObj.getHMAC('B64')
    return (
      'hmac username="' +
      APP_ID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"'
    )
  }

  getHeaders () {
    const GMTString = new Date().toGMTString()
    return {
      Authorization: this.getAuthorizationHeader(GMTString),
      'X-Date': GMTString,
      'Accept-Encoding': 'gzip'
    }
  }

  getConfig (method) {
    return {
      method,
      headers: this.getHeaders,
      cache: 'no-cache'
    }
  }

  handleResponse (res) {
    console.log(res)
    return res
  }

  async get (url, params) {
    const res = await fetch(this.getURL(url, params), this.getConfig())
    return this.handleResponse(res)
  }
}
