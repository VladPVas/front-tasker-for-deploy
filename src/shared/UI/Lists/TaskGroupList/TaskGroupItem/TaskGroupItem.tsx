import React, { useEffect, useState } from 'react'
import TaskList from '../../TaskList/TaskList'
import { TaskGroupDTO } from '../../../../types/interfaces/DTO/TaskGroupDTO'
import { TaskDTO } from '../../../../types/interfaces/DTO/TaskDTO'
import { GetAllByTaskGroupRequest } from '../../../../api/requests/tasks/GetAllByTaskGroupRequest'
import '../TaskGroupItem/TaskGroupItem.css'
import { observer } from 'mobx-react-lite'
import { Draggable, Droppable } from 'react-beautiful-dnd'

interface TaskGroupItemProps {
	data: TaskGroupDTO,
	key: string
}

const TaskGroupItem: React.FC<TaskGroupItemProps> = observer(({data}) => {
	const [taskLists, setTaskLists] = useState<TaskDTO[]>([])

	async function fetchTaskList() {
		const response: TaskDTO[] | undefined = await GetAllByTaskGroupRequest(data.id)
		if (response) {
			setTaskLists(response)
		}
	}

	useEffect(() => {
		fetchTaskList()
	}, [data])

	return (
		<div className='taskGroupItem'>
			<label className='label'>{data.name}</label>
			<Droppable droppableId={data.id} type='TASK'>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<TaskList data={taskLists}/>
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	)
})

export default TaskGroupItem