import React from 'react'
import { TagDTO } from '../../../types/interfaces/DTO/TagDTO'
import MyTag from './MyTag'
import '../TagsHolder/TagsHolder.css'

interface TagsHolderProps {
	tags: TagDTO[]
}

const TagsHolder: React.FC<TagsHolderProps> = ({tags}) => {
	return (
		<div className='tagHolder'>
			{tags.map(tag => 
				<MyTag key={tag.id} tag={tag}/>
			)}
		</div>
	)
}

export default TagsHolder