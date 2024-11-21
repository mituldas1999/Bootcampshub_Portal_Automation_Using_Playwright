// import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

// const config: PlaywrightTestConfig={
//   testMatch:["tests/"]
// };

// export default config;



//import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Directory containing test files
  testMatch: '**/*.spec.ts', // Match test files with `.spec.ts` pattern
  timeout: 30000, // Test timeout (30 seconds)
  retries: 1, // Retry failed tests once
  use: {
    headless: false, // Run tests in non-headless mode
    baseURL: 'https://staging.bootcampshub.ai/', // Set base URL
    screenshot: 'only-on-failure', // Capture screenshots on failure
    video: 'retain-on-failure', // Record videos on failure
  },
});



