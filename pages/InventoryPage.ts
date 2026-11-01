import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly items: Locator;

  constructor(private page: Page) {
    this.title = page.getByTestId('title');
    this.items = page.getByTestId('inventory-item');
  }
}