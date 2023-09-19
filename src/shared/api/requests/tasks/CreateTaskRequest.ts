import { TaskDTO } from "../../../types/interfaces/DTO/TaskDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function CreateTaskRequest(task: TaskDTO) {
	try {
		await ApiInstance.post(BASE_URL + `/task`, task, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}