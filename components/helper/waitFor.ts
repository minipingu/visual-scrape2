import { set } from 'date-fns'

export function waitFor(duration = 3000) {
	return new Promise((resolve) => setTimeout(resolve, duration))
}
