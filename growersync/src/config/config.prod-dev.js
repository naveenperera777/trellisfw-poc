//Production Development Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.growersync.trellisfw.io';
const websiteDomain = 'https://growersync.trellisfw.io:8080';
const metadata = `
eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vZ3Jvd2Vyc3luYy5mcGFkLmlvOjgwODAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiXSwidG9rZW5fZW5kcG9pbnRfYXV0aF9tZXRob2QiOiJ1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Y2xpZW50LWFzc2VydGlvbi10eXBlOmp3dC1iZWFyZXIiLCJncmFudF90eXBlcyI6WyJpbXBsaWNpdCJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJHcm93ZXJTeW5jIiwiY2xpZW50X3VyaSI6Imh0dHBzOi8vZnBhZC5pby8iLCJjb250YWN0cyI6WyJTYW0gTm9lbCA8c2Fub2VsQHB1cmR1ZS5lZHU-Il0sInNvZnR3YXJlX2lkIjoiNzBiNTRjZGYtNmZmYS00M2Q0LTlkMGMtNTkxMDk1ZTgxNzk5IiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1MDc4Mjc4NTR9.osBhP3NdBGcETuIUeliK9OUGWQX36ptqgO5gJtAQfS2BrQzJRx_4oG428ChM76Iqwf1b5VnhHl4bXFcQbceLt5oGD7WJNuBx3hdetJ6NaPy1Ep_-mYbaEUyqp7nzQwzAc9vQRy9BjScLx8HCMQhOycENB_zfjE8QNOoxbhSjHXE
`.trim()

const defaultNewConnectionURL = 'https://api.abcaudits.trellisfw.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}
