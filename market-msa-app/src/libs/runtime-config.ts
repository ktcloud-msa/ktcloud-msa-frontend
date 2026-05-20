export type AppRuntimeConfig = {
  API_GATEWAY_ENDPOINT: string;
};

const FALLBACK: AppRuntimeConfig = {
  API_GATEWAY_ENDPOINT: 'http://127.0.0.1:8100/api/v1',
};

export function getRuntimeConfig(): AppRuntimeConfig {
  if (typeof window === 'undefined') return FALLBACK;
  return { ...FALLBACK, ...(window.__APP_CONFIG__ ?? {}) };
}

export function getApiGatewayEndpoint(): string {
  return getRuntimeConfig().API_GATEWAY_ENDPOINT;
}
