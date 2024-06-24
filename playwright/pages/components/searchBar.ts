import { Locator, Page } from '@playwright/test'
import { Makes, makesAndModels, modelMakeMap } from '../../constants'

export class SearchBar {
	readonly container: Locator
	readonly make: Locator
	readonly model: Locator
	readonly zipCode: Locator
	readonly searchButton: Locator

	constructor(readonly page: Page) {
		this.container = page.getByTestId('SearchBadge')
		this.make = page.getByLabel('Select A Make')
		this.model = page.getByLabel('Select A Model')
		this.zipCode = page.getByTestId('standardZipInput')
		this.searchButton = page.locator('id=search')
	}

	async search(makeOrModel?: string) {
		if (!makeOrModel) {
			await this.searchButton.click()
			return
		}

		if (makeOrModel in Makes) {
			await this.make.selectOption(makeOrModel)
			await this.page.waitForURL(new RegExp(`/${makeOrModel.toLowerCase()}/`))
			return
		}

		const make = modelMakeMap.get(makeOrModel)
		if (!make) return

		console.log(make)
		if (makeOrModel in makesAndModels[make.toLowerCase()]) {
			await this.make.selectOption(make)
			await this.model.selectOption(makeOrModel)
		}

		await this.searchButton.click()

		await this.page.waitForURL(new RegExp(`/${makeOrModel.toLowerCase()}/`))
	}
}
