'use server'

import prisma from '@/lib/prisma'
import { CreateFlowNode } from '@/lib/workflow/createFlowNode'
import {
	createWorkflowSchema,
	createWorkflowSchemaType,
} from '@/schema/workflow'
import { AppNode } from '@/types/appNode'
import { TaskType } from '@/types/task'
import { WorkflowStatus } from '@/types/workflow'
import { auth } from '@clerk/nextjs/server'
import { Edge } from '@xyflow/react'
import { redirect } from 'next/navigation'

export async function createWorkflow(form: createWorkflowSchemaType) {
	const { success, data } = createWorkflowSchema.safeParse(form)
	if (!success) {
		throw new Error('invalid form data')
	}
	const { userId } = auth()

	if (!userId) {
		throw new Error('unauthenticated')
	}

	const initialFlow: { nodes: AppNode[]; edges: Edge[] } = {
		nodes: [],
		edges: [],
	}

	//Let's add the flow entry position
	initialFlow.nodes.push(CreateFlowNode(TaskType.LAUNCH_BROWSER))

	const result = await prisma.workflow.create({
		data: {
			userId,
			status: WorkflowStatus.DRAFT,
			definition: JSON.stringify(initialFlow),
			...data,
		},
	})

	console.log(initialFlow)
	console.log('a')

	if (!result) {
		throw new Error('failed to create workflow')
	}

	redirect(`/workflows/editor/${result.id}`)
}
