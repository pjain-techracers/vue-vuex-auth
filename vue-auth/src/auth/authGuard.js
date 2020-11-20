export const authGuard = (to, from, next) => {
  const store = require('@/store/index')
  let user = store.default.getters.getUser
  if (user.loggedIn) {
    console.log(user.loggedIn)
    next()
  }
}
