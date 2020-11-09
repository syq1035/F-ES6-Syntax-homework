const inject = (items, sections) => {
  let output  = [...items]
  sections.forEach((section, index) => {
    output.splice(section.index + index, 0, section.content)
  })
  return output
}
export { inject };
