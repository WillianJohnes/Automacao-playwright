// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
})

test('Login Com Sucesso @login', async ({ page }) => {
  

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('@Teste123');
  await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check();
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
}); 

test('Login Com Sucesso 1', async ({ page }) => {

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('@Teste123');
  await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check();
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
}); 

test('Login Com Sucesso 2', async ({ page }) => {

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@teste.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('@Teste123');
  await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check();
  await page.screenshot({ path: 'screenshot/screenshot2.png' });
  await page.getByRole('button', { name: 'login' }).click();
}); 

// test.afterEach(async ({ page }) => {}