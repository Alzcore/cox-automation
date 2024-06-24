import { expect } from '@playwright/test'
import { test } from '../main'

test('Search for Lamborghini', async ({
	carsForSaleVisitor,
	allCarsVisitor
}) => {
	await carsForSaleVisitor.goto()
	await carsForSaleVisitor.searchBar.make.selectOption('Lamborghini')

	await carsForSaleVisitor.searchBar.search.click()

	await carsForSaleVisitor.page.waitForURL(/lamborghini/)

	await expect(allCarsVisitor.heading).toContainText('Lamborghini')
})
