'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from './ui/breadcrumb'
import Link from 'next/link'

function BreadcrumbHeader() {
	const pathName = usePathname()
	const paths = pathName === '/' ? ['/'] : pathName.split('/')

	return (
		<div className='flex items-center flex-start'>
			<Breadcrumb>
				<BreadcrumbList>
					{paths.map((path, index) => {
						if (path === '') path = '/'
						return (
							<React.Fragment key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink
										href={path}
										asChild
										className='capitalize'>
										<Link href={path}>
											{path === '/' || path === '' ? 'Home' : path}
										</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
							</React.Fragment>
						)
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	)
}

export default BreadcrumbHeader
