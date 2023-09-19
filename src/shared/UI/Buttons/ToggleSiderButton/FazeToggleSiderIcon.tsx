import { observer } from 'mobx-react-lite';
import CollapseSider from '../../../api/states/CollapseSider';
import { IconStyleSheet } from '../../../styles/IconStyleSheet';
import { DoubleLeftOutlined } from '@ant-design/icons';

const FazeToggleSiderIcon = observer(() => {

	if (CollapseSider.get() === false) {
		return <DoubleLeftOutlined rotate={180} style={IconStyleSheet}/>
	} else {
		return <DoubleLeftOutlined style={IconStyleSheet}/>
	}

})

export default FazeToggleSiderIcon