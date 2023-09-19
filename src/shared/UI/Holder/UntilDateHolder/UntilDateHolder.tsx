import { ClockCircleOutlined } from '@ant-design/icons';
import Tag from 'antd/es/tag';
import React from 'react';

interface UntilDateHolderProps {
	untilDate: Date
}

const UntilDateHolder: React.FC<UntilDateHolderProps> = ({untilDate}) => {

	
	return (
		<Tag icon={<ClockCircleOutlined/>}>
			{`${untilDate.getHours()}:${untilDate.getMinutes()} - ${untilDate.toDateString()}`}
		</Tag>
	)
}

export default UntilDateHolder