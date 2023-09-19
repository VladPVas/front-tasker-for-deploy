import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { TaskDTO } from "../../../types/interfaces/DTO/TaskDTO";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetAllByTaskGroupRequest(taskGroupId: string) {
	try {
		const response = await ApiInstance.get(BASE_URL + `/task/task_group/` + taskGroupId, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}