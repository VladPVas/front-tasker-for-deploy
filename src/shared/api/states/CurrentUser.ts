import { makeAutoObservable } from "mobx";
import { UserDTO } from "../../types/interfaces/DTO/UserDTO";
import { GetCurrentUserRequest } from "../requests/users/GetCurrentUserRequest";

// const EXAMPLE_DATA: UserDTO = {
// 	"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "username": "string",
//   "roleKey": ERoleKey.ADMIN
// }

class CurrentUser {

	private user: UserDTO | undefined

	constructor() {
		makeAutoObservable(this)
		this.user = undefined
		// this.user = EXAMPLE_DATA
	}

	async fetch() {
		const response: UserDTO | undefined = await GetCurrentUserRequest()
			if(response) {
				this.user = response
			}
	}

	get() {
		return this.user
	}
}

export default new CurrentUser()