import { mergeTests } from '@playwright/test'
import { carsForSaleTest } from './fixtures'

export const test = mergeTests(carsForSaleTest)
