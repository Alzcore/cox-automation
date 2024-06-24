import { test as base } from '@playwright/test'
import { AllCars, CarsForSale } from './pages'

type CarsForSaleFixtures = {
	carsForSaleVisitor: CarsForSale
}

type AllCarsFixtures = {
	allCarsVisitor: AllCars
}

export const carsForSaleTest = base.extend<CarsForSaleFixtures>({
	carsForSaleVisitor: async ({ page }, use) => {
		const carsForSalePage = new CarsForSale(page)

		await use(carsForSalePage)
	}
})

export const allCarsTest = base.extend<AllCarsFixtures>({
	allCarsVisitor: async ({ page }, use) => {
		const allCarsPage = new AllCars(page)

		await use(allCarsPage)
	}
})
