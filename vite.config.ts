/// <reference types="vitest" />
import { defineConfig } from 'vite';
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * If you are already using Vite, add test property in your Vite config.
 * You'll also need to add a reference to Vitest types using a triple
 * slash directive at the top of your config file.
 *
 * https://vitest.dev/guide/
 */
export default defineConfig({
  plugins: [tsconfigPaths()],

  test: {
    poolOptions: {
      forks: {
        // https://vitest.dev/config/#pooloptions-forks-singlefork
        singleFork: true,
      },
    },
  },
});
