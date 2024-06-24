import { expect } from '@playwright/test'
import { test } from '../main'
import { Makes, makesAndModels } from '../constants'

for (const make of Object.keys(makesAndModels)) {
	test.describe(make, () => {
		const models = Object.keys(makesAndModels[make])
		for (const model of models) {
			test(`Search for ${model}`, async ({
				carsForSaleVisitor,
				allCarsVisitor
			}) => {
				await carsForSaleVisitor.goto()
				await carsForSaleVisitor.searchBar.search(model)

				await expect(allCarsVisitor.heading).toContainText(model)
			})
		}
	})
}
