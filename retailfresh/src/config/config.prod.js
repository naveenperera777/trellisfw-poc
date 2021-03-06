//Production Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.retailfresh.fpad.io';
const websiteDomain = 'https://retailfresh.fpad.io';
const metadata = `
eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vcmV0YWlsZnJlc2guZnBhZC5pby9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImltcGxpY2l0Il0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiaWRfdG9rZW4iLCJpZF90b2tlbiB0b2tlbiJdLCJjbGllbnRfbmFtZSI6IlJldGFpbEZyZXNoIiwiY2xpZW50X3VyaSI6Imh0dHBzOi8vZnBhZC5pby8iLCJjb250YWN0cyI6WyJTYW0gTm9lbCA8c2Fub2VsQHB1cmR1ZS5lZHU-Il0sInNvZnR3YXJlX2lkIjoiMjFlODc4MWUtMjlmMS00NjRkLWE4YjAtMTI5ZTI1ZjZlMjdiIiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1MDgyOTQxODV9.v-lzxTI5HIz2dza3mFfQcs7oLJnoQMer19qEss7QYUxNZ8eESfyouHWi34sGAsUGRcoQi8Y5zF3d7OGIJV5eq_b_OXWUSnpw7ci_dZhW8YdolCsinEAqWSVzhHV3lipdM3-5afyAC-EHOpqoy1HxKH8mDzmYHy8WqvlEiCSsTkc
`.trim()

const defaultNewConnectionURL = 'https://api.distributingexcellence.fpad.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}
