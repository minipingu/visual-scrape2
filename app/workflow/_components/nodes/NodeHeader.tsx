import { Badge } from '@/components/ui/badge'
import { TaskRegistry } from '@/lib/workflow/task/registry'
import { TaskType } from '@/types/task'
import { CoinsIcon, GripVertical } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'

const NodeHeader = ({ taskType }: { taskType: TaskType }) => {
	const task = TaskRegistry[taskType]
	return (
		<div className='flex items-center gap-2 p-2'>
			<task.icon size={16} />
			<div className='flex justify-between items-center w-full'>
				<p className='text-xs font-bold uppercase text-muted-foreground'>
					{task.label}
				</p>
				<div className='flex gap-1 items-center'>
					{task.isEntryPoint && <Badge>Entry Point</Badge>}
					<Badge className='gap-2 flex items-center text-xs'>
						<CoinsIcon size={16} />
						TODO
					</Badge>
					<Button
						className='drag-handle cursor-grab'
						variant={'ghost'}
						size={'icon'}>
						<GripVertical size={20} />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default NodeHeader
