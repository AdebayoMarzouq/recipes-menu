const storeData = (data) => {
  let check = localStorage.getItem('storeData')
  if (check) {
    return JSON.parse(localStorage.getItem('storeData'))
  }
  localStorage.setItem('storeData', JSON.stringify(data))
  return data
}

export default storeData
