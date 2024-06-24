import { test as base } from '@playwright/test'
import { CarsForSale } from './pages'

type CarsForSaleFixtures = {
	carsForSaleVisitor: CarsForSale
}

export const carsForSaleTest = base.extend<CarsForSaleFixtures>({
	carsForSaleVisitor: async ({ page }, use) => {
		const carsForSalePage = new CarsForSale(page)

		await use(carsForSalePage)
	}
})
