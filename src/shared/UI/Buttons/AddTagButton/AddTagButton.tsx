import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import '../AddTagButton/AddTagButton.css';

const AddTagButton = ({...props}) => {
	return (
		<button className='addTagButton' {...props}>
				<PlusOutlined/>
		</button>
	)
}

export default AddTagButton