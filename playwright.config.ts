import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
	testDir: './playwright/tests',

	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		baseURL: 'https://www.autotrader.com',
		trace: 'on-first-retry',
		testIdAttribute: 'data-cmp'
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},

		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	]
})
