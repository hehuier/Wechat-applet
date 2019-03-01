import wepy from 'wepy'

export default async function request (options) {
  if (!options.header) {
    options.header = {
      "content-type": "application/x-www-form-urlencoded"
    }
  }
  let response = await wepy.request(options)
  return response
}