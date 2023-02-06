export default defineEventHandler((event) => {
  const number = Math.ceil((Math.random() * 100) % 5)
  const profile = {
    name: 'Joe',
    gender: 'Male',
    email: `Joe${number}@gmail.com`
  }
  return {
    ok: true,
    data: {
      profile
    }
  }
})
