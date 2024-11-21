import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  private loginButton = "//button[contains(@class,'primary-btn-sh-outline br_100')]";
  private emailInput = "[name='email']";
  private passwordInput = "[name='password']";
  private submitButton = "(//button[@class='submit_button'])[1]";
  private selectUniversity = "//span[normalize-space(text())='Select']";
  private confirmUniversity = "//span[contains(@class,'anticon anticon-close')]";

  private SwitchBootcamps= "(//div[@class='content_info']/following-sibling::button)[1]";
  private successIndicator = "//h1[contains(text(), 'Dashboard')]"; // Updated selector

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  async clickLoginButton() {
    await this.page.locator(this.loginButton).click();
  }

  async enterEmail(email: string) {
    await this.page.locator(this.emailInput).fill(email);
  }

  async enterPassword(password: string) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async submit() {
    await this.page.locator(this.submitButton).click();
  }

  async clickSelectUniversity() {
    await this.page.locator(this.selectUniversity).click();
  }

  async clickCloseUniversityModal() {
    await this.page.locator(this.confirmUniversity).click();
  }

  async clickSwitchBootcamps() {
    await this.page.locator(this.SwitchBootcamps).click();
  }

  async verifyPageTitle() {
    const titleLocator = this.page.locator(this.successIndicator);

    // Wait for the page to load and the title to be visible
    await this.page.waitForLoadState('networkidle');
    await titleLocator.waitFor({ state: 'visible', timeout: 15000 });

    // Verify the title text matches
    await expect(titleLocator).toHaveText("Dashboard");
  }

  async waitForLoginSuccess() {
    await this.page.locator(this.successIndicator).waitFor({ state: 'visible', timeout: 15000 });
  }
}

