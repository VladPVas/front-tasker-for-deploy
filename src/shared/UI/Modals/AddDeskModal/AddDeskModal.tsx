import React from 'react'
import { CreateDeskRequest } from '../../../api/requests/desks/CreateDeskRequest'
import { DeskDTO } from '../../../types/interfaces/DTO/DeskDTO'
import SiderModal from '../SiderModal/SiderModal'

const AddDeskModal = () => {

	const addDeskHandle = (newDesk: DeskDTO) => {
		CreateDeskRequest(newDesk)
	}

	// return (
	// 	// <SiderModal
	// 	// 	FirstButtonHandle={addDeskHandle}
	// 	// 	SecondButtonHandle={}
	// 	// />
	// )
}

export default AddDeskModal