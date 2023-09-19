import { UserDTO } from "../../../types/interfaces/DTO/UserDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetCurrentUserRequest() {
	try {
		const response = await ApiInstance(BASE_URL + `/user/current`, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}