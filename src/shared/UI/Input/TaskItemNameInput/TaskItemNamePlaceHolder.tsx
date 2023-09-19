import React from 'react'
import '../TaskItemNameInput/TaskItemNameInput.css'

interface TaskItemNamePlaceHolderProps {
    name: string
}

const TaskItemNamePlaceHolder: React.FC<TaskItemNamePlaceHolderProps> = ({name}) => {
    return (
        <span
            className='nameInput'
        >
		{name}
		</span>
    )
}

export default TaskItemNamePlaceHolder;