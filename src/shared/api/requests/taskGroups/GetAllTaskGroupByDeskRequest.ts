import { TaskGroupDTO } from "../../../types/interfaces/DTO/TaskGroupDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetAllTaskGroupByDeskRequest(deskId: string) {
	try {
		const response = await ApiInstance(BASE_URL + `/task_group/desk/` + deskId, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}