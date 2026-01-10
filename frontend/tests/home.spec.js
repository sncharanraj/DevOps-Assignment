import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("h1")).toHaveText("DevOps Assignment");
});

test("backend message is displayed", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("p")).not.toHaveText("Loading...");
});
