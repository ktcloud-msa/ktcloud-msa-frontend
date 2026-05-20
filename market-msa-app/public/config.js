// Default runtime config. Used as-is by local `npm run dev` and the static
// docker image. In Kubernetes this file is overlaid by a ConfigMap mount at
// /usr/share/nginx/html/config.js, so production values live in the Helm
// chart, not here.
window.__APP_CONFIG__ = {
  API_GATEWAY_ENDPOINT: 'http://127.0.0.1:8100/api/v1',
};
