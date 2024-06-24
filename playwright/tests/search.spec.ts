import { expect } from '@playwright/test'
import { test } from '../main'

test('Search for Lamborghini', async ({
	carsForSaleVisitor,
	allCarsVisitor,
	constants
}) => {
	await carsForSaleVisitor.goto()
	const model = constants.makesAndModels.lamborghini.Aventador
	await carsForSaleVisitor.searchBar.search(model)

	await expect(allCarsVisitor.heading).toContainText(model)
})
