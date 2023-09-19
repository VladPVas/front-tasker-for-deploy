import React from 'react'
import { TagDTO } from '../../../types/interfaces/DTO/TagDTO'
import '../TagsHolder/MyTag.css'
import { Tag } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import '../TagsHolder/MyTag.css'

interface TagProps {
	tag: TagDTO
}

const MyTag: React.FC<TagProps> = ({tag}) => {
	return (
		// <div className='myTag'>
		// 	{tag.name}
		// 	<LittleCloseButton/>
		// </div>
		<Tag className='myTag'>
			{tag.name}
		</Tag>
	)
}

export default MyTag