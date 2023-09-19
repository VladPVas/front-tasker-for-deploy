import { TaskDTO } from "../../../types/interfaces/DTO/TaskDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetAllTaskRequest() {
	try {
		const response = await ApiInstance.get(BASE_URL + `/task`, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}