import { Page } from '@playwright/test'
import { SearchBar } from '.'

export class CarsForSale {
	readonly searchBar: SearchBar

	constructor(readonly page: Page) {
		this.searchBar = new SearchBar(page)
	}

	async goto() {
		await this.page.goto('cars-for-sale')
	}
}
