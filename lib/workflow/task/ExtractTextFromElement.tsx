import { TaskParamType, TaskType } from '@/types/task'
import { LucideProps, TextIcon } from 'lucide-react'
import React from 'react'

export const ExtractTextFromElementTask = {
	type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
	label: 'Extract text from element',
	icon: (props: LucideProps) => (
		<TextIcon className='stroke-pink-400' {...props} />
	),
	inputs: [
		{
			name: 'Html',
			type: TaskParamType.STRING,
			required: true,
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
}
