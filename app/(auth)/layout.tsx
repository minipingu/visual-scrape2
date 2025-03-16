import Logo from '@/components/Logo'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col items-center h-screen justify-center gap-4'>
			<Logo />
			{children}
		</div>
	)
}

export default AuthLayout
