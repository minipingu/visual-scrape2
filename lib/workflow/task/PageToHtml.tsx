import { TaskParamType, TaskType } from '@/types/task'
import { WorkflowTask } from '@/types/workflow'
import { CodeIcon, LucideProps } from 'lucide-react'
import React from 'react'

export const PageToHtmlTask = {
	type: TaskType.PAGE_TO_HTML,
	label: 'Get HTML from page',
	icon: (props: LucideProps) => (
		<CodeIcon className='stroke-pink-400' {...props} />
	),
	isEntryPoint: false,

	inputs: [
		{
			name: 'Web page',
			type: TaskParamType.BROWSER_INSTANCE,
			required: true,
		},
	],
	outputs: [
		{
			name: 'HTML',
			type: TaskParamType.STRING,
		},
		{
			name: 'Web page',
			type: TaskParamType.BROWSER_INSTANCE,
		},
	],
	credits: 2,
} satisfies WorkflowTask
