import { cn } from '@/lib/utils'
import { Handle, Position } from '@xyflow/react'
import React, { ReactNode } from 'react'
import NodeParamField from './NodeParamField'
import { ColorForHandle } from './common'
import { TaskParam } from '@/types/task'

const NodeInputs = ({ children }: { children: ReactNode }) => {
	return <div className='flex flex-col divide-y gap-2'>{children}</div>
}

export default NodeInputs

export function NodeInput({
	input,
	nodeId,
}: {
	input: TaskParam
	nodeId: string
}) {
	return (
		<div className='flex justify-start relative p-3 bg-secondary w-full'>
			<NodeParamField param={input} nodeId={nodeId} />
			{!input.hideHandle && (
				<Handle
					id={input.name}
					type='target'
					position={Position.Left}
					className={cn(
						'!bg-muted-foreground !border-2 !border-background !-left-2 !w-4 !h-4',
						ColorForHandle[input.type]
					)}
				/>
			)}
		</div>
	)
}
