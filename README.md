# Playwright E2E Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Robust and scalable End-to-End test automation framework built with **Playwright** and **TypeScript**.
Designed for testing critical UI and API scenarios with high reliability and speed.

---

## Key Features

* **Page Object Model (POM):** Organized and reusable code structure for scalability.
* **Hybrid Testing:** Supports both **UI** (Web) and **API** testing in a single framework.
* **Parallel Execution:** Fully configured for fast test runs across multiple browsers (Chromium, Firefox, WebKit).
* **CI/CD Integration:** Automated pipeline using **GitHub Actions** (runs on push/pull request).
* **Reporting:** Integrated **Playwright HTML Report** (and Allure) for detailed test artifacts (Screenshots, Videos, Traces).
* **Type Safety:** Leveraging TypeScript for compile-time checks and better developer experience.

## Tech Stack

* **Core:** [Playwright](https://playwright.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **CI/CD:** GitHub Actions
* **Package Manager:** npm

## Project Structure

```text
├── .github/workflows   # CI/CD configurations (GitHub Actions)
├── tests               # Test specs (e.g., login.spec.ts, api.spec.ts)
├── pages               # Page Object Models (POM) classes
├── test-data           # Data fixtures for tests
├── playwright.config.ts# Main configuration file
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
