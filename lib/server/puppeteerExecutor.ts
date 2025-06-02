// lib/server/puppeteerExecutor.ts
import { ExecutionEnvironment } from '@/types/executor'
import { LaunchBrowserTask } from '../workflow/task/LaunchBrowser'

export async function launchBrowser(
	environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
	const puppeteerExtra = (await import('puppeteer-extra')).default
	const StealthPlugin = (await import('puppeteer-extra-plugin-stealth'))
		.default
	puppeteerExtra.use(StealthPlugin())

	const websiteUrl = environment.getInput('Website URL')

	try {
		const browser = await puppeteerExtra.launch({
			headless: 'shell',
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-dev-shm-usage',
				'--disable-web-security',
				'--disable-features=IsolateOrigins,site-per-process',
				'--start-maximized',
			],
		})

		environment.setBrowser(browser)
		const page = await browser.newPage()

		await page.setUserAgent(
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125 Safari/537.36'
		)
		await page.setViewport({ width: 1280, height: 800 })
		await page.goto(websiteUrl, {
			waitUntil: 'domcontentloaded',
			timeout: 60000,
		})
		environment.setPage(page)

		return true
	} catch (err) {
		console.error(err)
		return false
	}
}
