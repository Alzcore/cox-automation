import { mergeTests } from '@playwright/test'
import { carsForSaleTest, allCarsTest } from './fixtures'

export const test = mergeTests(carsForSaleTest, allCarsTest)
