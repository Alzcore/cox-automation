import { Locator, Page } from '@playwright/test'

export class SearchBar {
	readonly container: Locator
	readonly make: Locator
	readonly model: Locator
	readonly zipCode: Locator
	readonly search: Locator

	constructor(readonly page: Page) {
		this.container = page.getByTestId('SearchBadge')
		this.make = page.getByLabel('Select A Make')
		this.model = page.getByLabel('Select A Model')
		this.zipCode = page.getByTestId('standardZipInput')
		this.search = page.locator('id=search')
	}
}
