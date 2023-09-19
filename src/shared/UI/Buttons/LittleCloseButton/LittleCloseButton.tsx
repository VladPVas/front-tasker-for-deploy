import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined'
import { IconStyleSheet } from '../../../styles/IconStyleSheet'
import '../LittleCloseButton/LittleCloseButton.css'

const LittleCloseButton = ({...children}) => {
	return (
		<button className='littleButton'>
			<CloseOutlined style={IconStyleSheet} />
		</button>
	)
}

export default LittleCloseButton