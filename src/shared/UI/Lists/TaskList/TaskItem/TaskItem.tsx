import React, { useEffect, useState } from 'react'
import { TagDTO } from '../../../../types/interfaces/DTO/TagDTO'
import { TaskDTO } from '../../../../types/interfaces/DTO/TaskDTO'
import TagsHolder from '../../../Holder/TagsHolder/TagsHolder'
import { GetTagByIdRequest } from '../../../../api/requests/tags/GetTagByIdRequest'
import TaskItemNamePlaceHolder from '../../../Input/TaskItemNameInput/TaskItemNamePlaceHolder'
import UntilDateHolder from '../../../Holder/UntilDateHolder/UntilDateHolder'
import '../TaskItem/TaskItem.css'
import { Space } from 'antd'
import { observer } from 'mobx-react-lite'
import { Draggable } from 'react-beautiful-dnd';

interface TaskItemProps {
    data: TaskDTO,
    key: string
}

export const ItemTypes = {
    TASK_ITEM: 'TaskItem'
}

const TaskItem: React.FC<TaskItemProps> = observer(({data}) => {
    const [tags, setTags] = useState<TagDTO[]>([])
    const [name, setName] = useState<string>('')
    const [untilDate, setUntilDate] = useState<Date>(new Date(data.untilDate))

    // const [{isDragging}, drag] = useDrag({
    //     type: ItemTypes.TASK_ITEM,
    //     collect: monitor => ({
    //         isDragging: monitor.isDragging()
    //     })
    // })

    // const [, drop] = useDrop({
    //     accept: ItemTypes.TASK_ITEM,
    //     hover: (monitor) => {
    //         if ()
    //         // moveTaskItem()

    //     }
    // })

    // const opacity = isDragging ? 0.5 : 1

    // const [{isTaskDragging}, drag] = useDrag(() => ({
    //     type: ItemTypes.TASK_ITEM,
    //     collect: monitor => ({
    //         isTaskDragging: !!monitor.isDragging(),
    //     }),
    // }))

    // const [] = useDrop(() => ({
    //     accept: ItemTypes.TASK_ITEM,
    //     drop: () => moveTaskItem(data.taskGroupId, data.position)
    // }))

    // function moveTaskItem(taskId: string, taskGroupId: string, position: number) {
    //     const request_body: TaskDTO_RequestBody = {
    //         taskGroupId: taskGroupId
    //     }

    //     UpdateTaskByIdRequest(data.id, request_body)
    //     SwapTaskPositionRequest(data.id, position)
    // }

    async function fetchTags() {
        const response: TagDTO[] = await Promise.all(data.tagIds.map(async tagId => {
            const tag = await GetTagByIdRequest(tagId)
            if (tag === undefined) {
                throw new Error('temp tag loading')
            }

            return tag
        }))

        if (response !== undefined) {
            setTags(response)
        }
    }

    useEffect(() => {
        setName(data.name)
        fetchTags()
        setUntilDate(new Date(data.untilDate))
    }, [])


    return (
        // <div className='taskItem'>
        <Draggable draggableId={data.id} index={data.position}>
            {(provided) => (
                <Space 
                    align='center' 
                    direction='vertical' 
                    className='taskItem'
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <TagsHolder tags={tags}/>
                    <TaskItemNamePlaceHolder name={name}/>
                    <UntilDateHolder untilDate={untilDate}/>
                </Space>
            )}
        </Draggable>
        // {/* </div> */}
    )
})

export default TaskItem