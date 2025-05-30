import { cn } from '@/lib/utils'
import { Handle, Position, useEdges } from '@xyflow/react'
import React, { ReactNode } from 'react'
import NodeParamField from './NodeParamField'
import { ColorForHandle } from './common'
import { TaskParam } from '@/types/task'
import useFlowValidation from '@/components/hooks/useFlowValidation'

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
	const { invalidInputs } = useFlowValidation()
	const edges = useEdges()
	const isConnected = edges.some(
		(edge) => edge.target === nodeId && edge.targetHandle === input.name
	)

	const hasErrors = invalidInputs
		.find((node) => node.nodeId === nodeId)
		?.inputs.find((invalidInput) => invalidInput === input.name)

	return (
		<div
			className={cn(
				'flex justify-start relative p-3 bg-secondary w-full',
				hasErrors && 'bg-destructive/30'
			)}>
			<NodeParamField param={input} nodeId={nodeId} disabled={isConnected} />
			{!input.hideHandle && (
				<Handle
					isConnectable={!isConnected}
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
