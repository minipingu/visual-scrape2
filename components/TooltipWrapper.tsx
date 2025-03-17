'use client'

import { ReactNode } from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'

interface Props {
	children: ReactNode
	content: string
	side?: 'top' | 'right' | 'bottom' | 'left'
}

function TooltipWrapper(props: Props) {
	return (
		<TooltipProvider delayDuration={100}>
			<Tooltip>
				<TooltipTrigger asChild>{props.children}</TooltipTrigger>
				<TooltipContent side={props.side}>{props.content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipWrapper
