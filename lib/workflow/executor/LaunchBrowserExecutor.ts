import { ExecutionEnvironment } from '@/types/executor'
import puppeteer from 'puppeteer'
import { LaunchBrowserTask } from '../task/LaunchBrowser'

export async function LaunchBrowserExecutor(
	environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
	const websiteUrl = environment.getInput('Website URL')

	try {
		console.log('@@WEBSITE URL', websiteUrl)
		const browser = await puppeteer.launch({
			headless: false, // for testing
		})
		environment.setBrowser(browser)
		const page = await browser.newPage()
		await page.goto(websiteUrl)
		environment.setPage(page)
		return true
	} catch (error: any) {
		environment.log.error(error.message)
		return false
	}
}
