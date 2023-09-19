import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { TaskDTO } from "../../../types/interfaces/DTO/TaskDTO";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";
import { TaskDTO_RequestBody } from "../../../types/interfaces/DTO/TaskDTO_RequestBody";

export async function UpdateTaskByIdRequest(id: string, request_body: TaskDTO | TaskDTO_RequestBody) {
	try {
		const response = await ApiInstance.put(BASE_URL + `/task/` + id, request_body, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}