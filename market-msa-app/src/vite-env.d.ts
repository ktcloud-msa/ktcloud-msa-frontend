/// <reference types="vite/client" />

import type { AppRuntimeConfig } from '@libs/runtime-config';

declare global {
  interface Window {
    __APP_CONFIG__?: Partial<AppRuntimeConfig>;
  }
}

export {};
