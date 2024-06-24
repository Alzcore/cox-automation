import { Locator, Page } from '@playwright/test'

export class AllCars {
	readonly heading: Locator

	constructor(readonly page: Page) {
		this.heading = page.getByTestId('heading')
	}
}
