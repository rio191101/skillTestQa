const { test, expect } = require('@playwright/test');


test.describe(() => {

    test.beforeEach(async ({ page }) => {
      await page.goto('https://indonesiaindicator.com');
      // await page.waitForTimeout(20000);
      await page.pause();
    });

    test('TC_001: Verify Home Page Title', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');

    });
    test('TC_002: Verify menu Who We Are Page', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');
    
      await expect.soft(page.locator('xpath=//a[contains(@navigate, "who-we-are") and contains(text(), "Who We Are") and contains(@class, "text-white")]')).toBeVisible();
      await page.locator('xpath=//a[contains(@navigate, "who-we-are") and contains(text(), "Who We Are") and contains(@class, "text-white")]').click();

      await expect(page.locator('xpath=//span[contains(@class, "text-red-600") and contains(text(), "We Are")]')).toBeVisible();
      await expect(page.locator('xpath=//span[contains(@class, "text-red-600") and contains(text(), "We Are")]')).toContainText('We Are');

    });

    test('TC_003: Verify menu Strategic Framework', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');
    
      await expect.soft(page.locator('#navbar').getByText('Strategic Framework')).toBeVisible();
      await page.locator('#navbar').getByText('Strategic Framework').click();
      await expect(page.locator('xpath=//h1[contains(text(), "Strategic Framework")]')).toBeVisible();
      await expect(page.locator('xpath=//h1[contains(text(), "Strategic Framework")]')).toContainText('Strategic Framework');

      await expect.soft(page.locator('xpath=//button[@navigate="geostrategic-inteligence" and contains(text(), "Learn More")]')).toBeVisible();
      await page.locator('xpath=//button[@navigate="geostrategic-inteligence" and contains(text(), "Learn More")]').click();
      await expect(page.locator('xpath=//h2[text()="Geostrategic Intelligence"]')).toBeVisible();
      await expect(page.locator('xpath=//h2[text()="Geostrategic Intelligence"]')).toContainText('Geostrategic Intelligence');


      await expect.soft(page.getByText('Proactive Security Management').first()).toBeVisible();
      await page.getByText('Proactive Security Management').first().click();

      await expect.soft(page.getByText('Comprehensive Geostrategic')).toBeVisible();
      await page.getByText('Comprehensive Geostrategic').click();

      await expect.soft(page.getByText('Optimized Resource Allocation').first()).toBeVisible();
      await page.getByText('Optimized Resource Allocation').first().click();
      

      await expect.soft(page.locator('span').filter({ hasText: /^Optimized Resource Allocation$/ })).toBeVisible();
      await page.locator('span').filter({ hasText: /^Optimized Resource Allocation$/ }).click();

      await expect.soft(page.locator('span').filter({ hasText: /^Proactive Security Management$/ })).toBeVisible();
      await page.locator('span').filter({ hasText: /^Proactive Security Management$/ }).click();

      await expect.soft(page.getByText('Enhanced Decision-Making')).toBeVisible();
      await page.getByText('Enhanced Decision-Making').click();
      
      await expect.soft(page.getByRole('button', { name: 'Comprehensive Country' })).toBeVisible();
      await page.getByRole('button', { name: 'Comprehensive Country' }).click();
      await expect(page.locator('xpath=//h3[text()="Comprehensive Country"]')).toBeVisible();
      await expect(page.locator('xpath=//h3[text()="Comprehensive Country"]')).toContainText('Comprehensive Country');
      
      await expect.soft(page.getByRole('button', { name: 'Conflict Report' })).toBeVisible();
      await page.getByRole('button', { name: 'Conflict Report' }).click();
      await expect(page.locator('xpath=//h3[text()="Conflict Report"]')).toBeVisible();
      await expect(page.locator('xpath=//h3[text()="Conflict Report"]')).toContainText('Conflict Report');
      
      await expect.soft(page.getByRole('button', { name: 'Event Monitoring' })).toBeVisible();
      await page.getByRole('button', { name: 'Event Monitoring' }).click();
      await expect(page.locator('xpath=//h3[text()="Geostrategic Event Monitoring"]')).toBeVisible();
      await expect(page.locator('xpath=//h3[text()="Geostrategic Event Monitoring"]')).toContainText('Geostrategic Event Monitoring');

    });

    test('TC_004: Verify menu Product', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');
    
      await expect.soft(page.locator('#navbar').getByText('Product')).toBeVisible();
      await page.locator('#navbar').getByText('Product').click();

      await expect(page.locator('xpath=//h1[contains(text(), "Product")]')).toBeVisible();
      await expect(page.locator('xpath=//h1[contains(text(), "Product")]')).toContainText('Product');

      await expect.soft(page.getByText('Analytics Level')).toBeVisible();
      await page.getByText('Analytics Level').click();
      await expect(page.getByText('Our advanced analytics tools')).toBeVisible();
      await expect(page.getByText('Our advanced analytics tools')).toContainText('Our advanced analytics tools');

      await expect.soft(page.getByText('Data & Application Level')).toBeVisible();
      await page.getByText('Data & Application Level').click();
      await expect(page.getByText('Our platform integrates')).toBeVisible();
      await expect(page.getByText('Our platform integrates')).toContainText('Our platform integrates');
      
      await expect.soft(page.getByText('Strategic Level')).toBeVisible();
      await page.getByText('Strategic Level').click();
      await expect(page.getByText('Empower top-level decision')).toBeVisible();
      await expect(page.getByText('Empower top-level decision')).toContainText('Empower top-level decision');
    });

    test('TC_005: Verify menu News', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');
    
      await expect.soft(page.locator('#navbar').getByText('News')).toBeVisible();
      await page.locator('#navbar').getByText('News').click();

      await expect(page.locator('xpath=//h1[text()="News"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[text()="News"]')).toContainText('News');
      await expect(page.getByRole('heading', { name: 'Recent News Post' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Recent News Post' })).toContainText('Recent News Post');
      await expect.soft(page.locator('xpath=//button[text()="Read More"]')).toBeVisible();
      await page.locator('xpath=//button[text()="Read More"]').click();
    });
    
    test('TC_006: Verify menu i2 Academy', async ({ page }) => {
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toBeVisible();
      await expect(page.locator('xpath=//h1[@class="title text-white"]')).toContainText('Unlocking Better');
    
      await expect.soft(page.locator('#navbar').getByText('i2 Academy')).toBeVisible();
      await page.locator('#navbar').getByText('i2 Academy').click();

      await expect(page.getByText('By integrating insights')).toBeVisible();
      await expect(page.getByText('By integrating insights')).toContainText('By integrating insights');

      await expect.soft(page.getByRole('button', { name: 'Join Us' })).toBeVisible();
      await page.getByRole('button', { name: 'Join Us' }).click();
      
      await expect.soft(page.getByText('See All')).toBeVisible();
      await page.getByText('See All').click();

    });

    test('TC_007: Negative Test Invalid Navigation', async ({ page }) => {
      await expect(page.locator('text=Invalid Menu')).not.toBeVisible();

      // who we are
      await expect.soft(page.locator('xpath=//a[contains(@navigate, "who-we-are") and contains(text(), "Who We Are") and contains(@class, "text-white")]')).toBeVisible();
      await page.locator('xpath=//a[contains(@navigate, "who-we-are") and contains(text(), "Who We Are") and contains(@class, "text-white")]').click();
      await expect(page.locator('xpath=//h1[contains(text(), "Strategic Framework")]')).not.toBeVisible();

      await expect(page.locator('xpath=//span[contains(@class, "text-red-600") and contains(text(), "We Are")]')).toBeVisible();

      await expect(page.locator('xpath=//h1[text()="News"]')).not.toBeVisible();
      await expect(page.locator('xpath=//h1[contains(text(), "Product")]')).not.toBeVisible();
      await expect(page.locator('xpath=//h1[text()="News"]')).not.toBeVisible();
    });
});