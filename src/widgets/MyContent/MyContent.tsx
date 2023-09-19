import TaskGroupList from '../../shared/UI/Lists/TaskGroupList/TaskGroupList'
import { observer } from 'mobx-react-lite'
import CurrentDesk from '../../shared/api/states/CurrentDesk'
import '../MyContent/MyContent.css'

const MyContent = observer(() => {

	return (
		<div className='myContent'>
			<TaskGroupList deskId={CurrentDesk.get()?.id}/>
			<div>
				
			</div>
		</div>
	)
})

export default MyContent