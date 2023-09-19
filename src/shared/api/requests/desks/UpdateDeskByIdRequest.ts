import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { DeskDTO } from "../../../types/interfaces/DTO/DeskDTO";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function UpdateDeskByIdRequest(id: string, request_body: DeskDTO) {
	try {
		const response = await ApiInstance.put(BASE_URL + `/desk/` + id, request_body, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}