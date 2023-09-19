import { TagDTO } from "../../../types/interfaces/DTO/TagDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetTagByIdRequest(id: string) {
	try {
		const response = await ApiInstance.get(BASE_URL + `/tag/` + id, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}
