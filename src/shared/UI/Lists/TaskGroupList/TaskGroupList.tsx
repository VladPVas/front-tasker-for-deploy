import React, { useEffect, useMemo, useState } from 'react';
import { GetAllTaskGroupByDeskRequest } from '../../../api/requests/taskGroups/GetAllTaskGroupByDeskRequest';
import { TaskGroupDTO } from '../../../types/interfaces/DTO/TaskGroupDTO';
import TaskGroupItem from './TaskGroupItem/TaskGroupItem';
import { Space } from 'antd';
import { SwapTaskPositionRequest } from '../../../api/requests/tasks/SwapTaskPositionRequest';
import { UpdateTaskByIdRequest } from '../../../api/requests/tasks/UpdateTaskByIdRequest';

import '../TaskGroupList/TaskGroupList.css';
import { TaskDTO_RequestBody } from '../../../types/interfaces/DTO/TaskDTO_RequestBody';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';

interface TaskGroupListProps {
	deskId: string | undefined
}

// const EXAMPLE_DATA: TaskGroupDTO[] = [
//   {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "name": "string",
//     "description": "string",
//     "deskId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "taskIds": [
//       "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     ],
//     "position": 0
//   }
// ]

const TaskGroupList: React.FC<TaskGroupListProps> = observer(({deskId}) => {
	const [taskGropList, setTaskGropList] = useState<TaskGroupDTO[]>([])
	const [id, setId] = useState<string>('')

	
	async function fetchGroupDeskList() {
		if (deskId) {
			const response: TaskGroupDTO[] | undefined = await GetAllTaskGroupByDeskRequest(deskId)
			if (response !== undefined) {
				console.log(response)
				setTaskGropList(response)
			}
		}
	}
	
	// taskId: string, taskGroupId: string | null | undefined, position: number | undefined

	async function moveTaskItem(taskId: string, taskGroupId: string | null | undefined, position: number | undefined) {
		let request_body: TaskDTO_RequestBody = {
			taskGroupId: taskGroupId
		}

		if (request_body.taskGroupId && request_body.taskGroupId !== null) {
			await UpdateTaskByIdRequest(taskId, request_body)
			console.log('updt')
		}
		if (position) {
			await SwapTaskPositionRequest(taskId, position)
			console.log('swap')
		}
	}
	
	const onDragEnd = (result: DropResult) => {
		const {destination, draggableId} = result

		moveTaskItem(draggableId, destination?.droppableId, destination?.index)
	}

	useEffect(() => {
		fetchGroupDeskList()
		console.log(taskGropList)
		if (deskId) {
			setId(deskId)
		}
	}, [deskId])

	// const memoDrag = useMemo(() => onDragEnd, [])


	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={id} type='TASK_GROUP'>
				{(provided) => (
					<div
						ref={provided.innerRef}
						className='taskGroupList'
						{...provided.droppableProps}
					>
						{
							taskGropList.map(item => {
								return (
									<Space key={item.id} align='baseline'>
										<TaskGroupItem data={item} key={item.id}/>
									</Space>
								) 
							})
						}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	)
})

export default TaskGroupList