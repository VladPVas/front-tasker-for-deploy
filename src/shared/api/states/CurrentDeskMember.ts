import { makeAutoObservable } from "mobx";
import { DeskMemberDTO } from "../../types/interfaces/DTO/DeskMemberDTO";
import { GetDeskMemberByIdRequest } from "../requests/deskMembers/GetDeskMemberByIdRequest";

// const EXAMPLE_DATA = {
//   "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "authorityKey": EAuthorityKey.ADMIN,
//   "deskId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
// }

class CurrentDeskMember {

	private deskMember: DeskMemberDTO | undefined

	constructor() {
		makeAutoObservable(this)
		this.deskMember = undefined
	}

	async fetch(id: string) {
		const response = await GetDeskMemberByIdRequest(id)
		if (response) {
			this.deskMember = response
		}
	}

	set(member: DeskMemberDTO) {
		if (member) {
			this.deskMember = member
		}
	}

	get() {
		return this.deskMember
	}
}

export default new CurrentDeskMember()