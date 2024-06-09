import {defineConfig} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    include: ['test/vitest/**/*.{spec,test}.{js,ts}'],
    reporters: ['verbose'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['html', 'lcov']
    }
  },
});
