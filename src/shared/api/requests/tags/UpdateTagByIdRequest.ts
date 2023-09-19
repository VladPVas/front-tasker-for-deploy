import { TagDTO } from "../../../types/interfaces/DTO/TagDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function UpdateTagByIdRequest(id: string, request_body: TagDTO) {
	try {
		const response = await ApiInstance.put(BASE_URL + `/tag/` + id, request_body, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}