import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { log } from "util";

test.describe("Login Tests", () => {
  test("Should log in successfully with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Navigate to the application
    await loginPage.navigateTo("/");

    // Perform login steps
    await loginPage.clickLoginButton();
    await loginPage.enterEmail("mitul.das@ts4u.us");
    await loginPage.enterPassword("Mituldas@24");
    await loginPage.submit();

    // Handle university modal
    await loginPage.clickSelectUniversity();
    await loginPage.clickCloseUniversityModal();

    // Wait for login success and verify the page title

    await loginPage.clickSwitchBootcamps();

    await loginPage.clickCloseUniversityModal();


    await loginPage.verifyPageTitle();

  });
});
