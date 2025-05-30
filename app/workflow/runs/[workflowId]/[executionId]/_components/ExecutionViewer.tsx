import { getWorkflowExecutionWithPhases } from '@/actions/workflows/getWorkflowExecutionWithPhases'
import { WorkflowExecutionStatus } from '@/types/workflow'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

type ExecutionData = Awaited<ReturnType<typeof getWorkflowExecutionWithPhases>>

const ExecutionViewer = ({ initialData }: { initialData: ExecutionData }) => {
	const query = useQuery({
		queryKey: ['execution', initialData?.id],
		initialData,
		queryFn: () => getWorkflowExecutionWithPhases(initialData!.id),
		refetchInterval: (q) =>
			q.state.data?.status === WorkflowExecutionStatus.RUNNING
				? 1000
				: false,
	})

	return (
		<div className='flex w-full h-full '>
			<aside className='w-[440px] min-w-[440px] border-r-2 border-separate flex flex-grow flex-col overflow-hidden'></aside>
		</div>
	)
}

export default ExecutionViewer
