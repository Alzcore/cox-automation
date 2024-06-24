import { test as base, mergeTests } from '@playwright/test'
import { carsForSaleTest, allCarsTest } from './fixtures'
import { Constants, constants } from './constants'

type TestFixtures = {
	constants: Constants
}

const baseTest = base.extend<TestFixtures>({
	constants: constants
})

export const test = mergeTests(baseTest, carsForSaleTest, allCarsTest)
