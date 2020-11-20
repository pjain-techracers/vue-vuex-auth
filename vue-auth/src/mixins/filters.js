export default {
  captilizeFirstLetter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  },
  capitalize(value) {
    if (!value) {
      return ''
    }
    return value.toUpperCase()
  },
}
