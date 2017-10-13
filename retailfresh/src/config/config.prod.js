//Production Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.retailfresh.fpad.io';
const websiteDomain = 'https://retailfresh.fpad.io';
const metadata = `
eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly9yZXRhaWxmcmVzaC5mcGFkLmlvL29hdXRoMi9yZWRpcmVjdC5odG1sIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoidXJuOmlldGY6cGFyYW1zOm9hdXRoOmNsaWVudC1hc3NlcnRpb24tdHlwZTpqd3QtYmVhcmVyIiwiZ3JhbnRfdHlwZXMiOlsiaW1wbGljaXQiXSwicmVzcG9uc2VfdHlwZXMiOlsidG9rZW4iLCJpZF90b2tlbiIsImlkX3Rva2VuIHRva2VuIl0sImNsaWVudF9uYW1lIjoiUmV0YWlsRnJlc2giLCJjbGllbnRfdXJpIjoiaHR0cHM6Ly9mcGFkLmlvLyIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwic29mdHdhcmVfaWQiOiJlZjYwYTRmZC1lM2E3LTQ2NGQtOTI1Yy05NGI0MGI3ODRmY2YiLCJyZWdpc3RyYXRpb25fcHJvdmlkZXIiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbSIsImlhdCI6MTUwNzgyMjc3N30.wQdjeLB84ENaAyqpYh_mn__f1JGrscO4IGtbLfmIDo4IkYTBE4xvKMRDNhP7zmwRlxibxaQdVSSD9bJLt5W_K1RBvzDB7MysYN2n7o-B7sTLFR7fCG3u6aKoOVaFSWRHrOOReRS9ZskRn1pmqtw-_rdeeDgCuUuADhLTwNc4qyI
`.trim()

const defaultNewConnectionURL = 'https://api.distributingexcellence.fpad.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}