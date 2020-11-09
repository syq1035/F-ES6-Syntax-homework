const parseData = (input) => {
  const { data, column } = input
  const keys = column.map(item => item.name)
  const output = data.map((item) => {
    const obj = {}
    keys.map((name, index) => {
      obj[name] = item[index]
    })
    return obj
  })
  return output
}
export { parseData };
