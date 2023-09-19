import { makeAutoObservable } from "mobx"
import { DeskDTO } from "../../types/interfaces/DTO/DeskDTO"
import { GetDeskByIdRequest } from "../requests/desks/GetDeskByIdRequest"

// const EXAPMLE_DATA = {
// 	"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
// 	"name": "string",
// 	"description": "string",
// 	"creatorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
// 	"memberIds": [
// 		"3fa85f64-5717-4562-b3fc-2c963f66afa6"
// 	],
// 	"taskGroupIds": [
// 		"3fa85f64-5717-4562-b3fc-2c963f66afa6"
// 	]
// }

class CurrentDesk {

	private desk: DeskDTO | undefined

	constructor() {
		makeAutoObservable(this)
		this.desk = undefined
	}

	async fetch(id: string) {
		const response = await GetDeskByIdRequest(id);
		if (response) {
			this.desk = response
		}
	}

	get() {
		const response: DeskDTO | undefined = this.desk
		return response
	}
}

export default new CurrentDesk()