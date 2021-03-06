const toCamelCase = (string) => {
  // Lower cases the string
  return (
    string
      .toLowerCase()
      // Replaces any - or _ characters with a space
      .replace(/[-_]+/g, ' ')
      // Removes any non alphanumeric characters
      .replace(/[^\w\s]/g, '')
      // Uppercases the first character in each group immediately following a space
      // (delimited by spaces)
      .replace(/ (.)/g, function ($1) {
        return $1.toUpperCase()
      })
      // Removes spaces
      .replace(/ /g, '')
  )
}

module.exports = toCamelCase
