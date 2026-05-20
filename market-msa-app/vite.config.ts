import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ktcloud-msa/user/' : '/',
  plugins: [TanStackRouterVite()],
  resolve: {
    tsconfigPaths: true,
  },
}));
