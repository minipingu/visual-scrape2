import { TaskParamType, TaskType } from '@/types/task'
import { WorkflowTask } from '@/types/workflow'
import { LucideProps, TextIcon } from 'lucide-react'
import React from 'react'

export const ExtractTextFromElementTask = {
	type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
	label: 'Extract text from element',
	icon: (props: LucideProps) => (
		<TextIcon className='stroke-pink-400' {...props} />
	),
	isEntryPoint: false,

	inputs: [
		{
			name: 'Html',
			type: TaskParamType.STRING,
			required: true,
			variant: 'textarea',
		},
		{
			name: 'Selector',
			type: TaskParamType.STRING,
			required: true,
		},
	],
	outputs: [
		{
			name: 'Extracted text',
			type: TaskParamType.STRING,
		},
	],
	credits: 2,
} satisfies WorkflowTask
