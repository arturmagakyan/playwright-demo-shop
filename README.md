# Playwright E2E Automation Framework

[![Playwright Tests](https://github.com/arturmagakyan/playwright-demo-shop/actions/workflows/playwright.yml/badge.svg)](https://github.com/arturmagakyan/playwright-demo-shop/actions/workflows/playwright.yml)
<br>
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Robust and scalable End-to-End test automation framework built with **Playwright** and **TypeScript**. 
Designed for testing critical UI and API scenarios with high reliability and speed.

---

## Key Features & Architecture

* **Page Object Model (POM):** Organized and reusable code structure for scalability (`LoginPage`, `InventoryPage`, etc.).
* **Custom Fixtures:** Extending Playwright's base `test` object for automatic POM initialization, keeping test files incredibly clean (DRY principle).
* **Global Setup & Auth State:** Optimized execution time. Authentication runs once before the test suite, saving the session state (`.auth/user.json`) so subsequent tests bypass the UI login.
* **Hybrid Testing:** Supports both **UI** (Web) and **API** testing (with network mocking) in a single framework.
* **Parallel Execution:** Fully configured for fast test runs across multiple browsers (Chromium, Firefox, WebKit).
* **CI/CD Integration:** Automated pipeline using **GitHub Actions** (runs on push/pull request) with secret management.
* **Reporting:** Integrated **Playwright HTML Report** for detailed test artifacts (Screenshots, Videos, Traces).

## Tech Stack

* **Core:** [Playwright](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **CI/CD:** GitHub Actions
* **Package Manager:** npm

## Project Structure

```text
├── .github/workflows   # CI/CD configurations (GitHub Actions)
├── pages               # Page Object Models (POM) classes
├── tests               # Test specs (e.g., shop.spec.ts, fast-shop.spec.ts)
├── utils               # Helper functions and types
├── playwright.config.ts# Main configuration file (Browsers, Global Setup)
├── package.json        # Dependencies and scripts
└── README.md           # Documentation