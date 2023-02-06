export default defineEventHandler((event) => {
  const { username } = event.context.params
  const { a, b } = getQuery(event)
  // console.log(a)
  return {
    ok: true,
    data: `hello ${username} ${a} ${b}`
  }
})
