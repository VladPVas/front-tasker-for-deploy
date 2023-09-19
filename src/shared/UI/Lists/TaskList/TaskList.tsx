import React from 'react'
import { TaskDTO } from '../../../types/interfaces/DTO/TaskDTO'
import TaskItem from './TaskItem/TaskItem'
import '../TaskList/TaskList.css'
import { observer } from 'mobx-react-lite'

interface TaskListProps {
	data: TaskDTO[]
}

// const EXAMPLE_DATA = [
//   {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "name": "string",
//     "description": "string",
//     "creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "taskGroupId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "memberIds": [
//       "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     ],
//     "tagIds": [
//       "3fa85f64-5717-4562-b3fc-2c963f66afa6"
//     ],
//     "createdAt": "2023-07-01T17:56:12.826Z",
//     "untilDate": "2023-07-01T17:56:12.826Z",
//     "position": 0
//   }
// ]

const TaskList: React.FC<TaskListProps> = observer(({data}) => {
	// const [tasks, setTasks] = useState<TaskDTO[]>(data)

	return (
		<div className='taskList'>
			{
				data.map(task => {
					return (
						<TaskItem data={task} key={task.id}/>
					) 
				})
			}
		</div>
	)
})

export default TaskList