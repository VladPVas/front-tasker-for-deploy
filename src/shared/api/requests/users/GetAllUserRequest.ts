import { UserDTO } from "../../../types/interfaces/DTO/UserDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetAllUserRequest() {
	try {
		const response = await ApiInstance.get(BASE_URL + `/user`, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}