import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
	'/sign-in(.*)',
	'/sign-up(.*)',
	'/api/webhooks(.*)', // optional: allow some APIs to be public
])

export default clerkMiddleware((auth, request) => {
	// Only protect non-public routes
	if (!isPublicRoute(request)) {
		auth().protect()
	}
})

// Match only app routes, API routes, and exclude static files/_next
export const config = {
	matcher: [
		'/((?!_next|favicon.ico|.*\\.(?:html?|css|js(?!on)|jpe?g|png|gif|svg|ttf|woff2?|ico|webmanifest|map)).*)',
		'/(api|trpc)(.*)',
	],
}
