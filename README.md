
# Playwright Automation Setup and Run Guide

This repository contains automation tests using Playwright. Follow the steps below to set up and run the tests.

## Prerequisites

- Node.js (>=14.x)
- npm (Node Package Manager) or Yarn
- A compatible browser (Chromium, Firefox, or WebKit)

---

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git](https://github.com/mituldas1999/Bootcampshub_Portal_Automation_Using_Playwright
   cd your-repo-name
   ```

2. **Install Dependencies**
   Install all required dependencies from `package.json`:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Playwright Browsers**
   Playwright requires browser binaries to run tests. Install them with:
   ```bash
   npx playwright install
   # or
   yarn playwright install
   ```

---

## Running Tests

1. **Run All Tests**
   Execute all tests in the project:
   ```bash
   npx playwright test
   # or
   yarn playwright test
   ```

2. **Run Tests in a Specific File**
   Run tests from a specific file:
   ```bash
   npx playwright test tests/example.spec.js
   # or
   yarn playwright test tests/example.spec.js
   ```

3. **Run Tests in Headed Mode**
   To view the browser while tests are running:
   ```bash
   npx playwright test --headed
   # or
   yarn playwright test --headed
   ```

4. **Run Tests with Debugging**
   Enable debugging mode:
   ```bash
   npx playwright test --debug
   # or
   yarn playwright test --debug
   ```

5. **Generate HTML Report**
   After running tests, generate and view the HTML report:
   ```bash
   npx playwright show-report
   # or
   yarn playwright show-report
   ```

---

## Project Structure

- **`tests/`**: Contains all test files.
- **`playwright.config.js`**: Configuration file for Playwright settings like test timeout, browser options, etc.
- **`package.json`**: Node.js dependencies and scripts.

---

## Scripts

The following scripts are available in `package.json`:

- **Run all tests**
  ```bash
  npm run test
  ```
- **Run tests in headed mode**
  ```bash
  npm run test:headed
  ```
- **Generate report**
  ```bash
  npm run report
  ```

---

## Troubleshooting

- **Ensure Browsers Are Installed**: If tests fail to start, verify that the Playwright browsers are installed:
  ```bash
  npx playwright install
  ```

- **Check Node.js Version**: Make sure you have Node.js >=14.x installed:
  ```bash
  node -v
  ```

- **View Debug Logs**: Run Playwright with debugging logs enabled:
  ```bash
  DEBUG=pw:api npx playwright test
  ```

---

## Learn More

For detailed documentation, visit the [Playwright Official Website](https://playwright.dev/).

---

## License

This project is licensed under the [MIT License](LICENSE).
