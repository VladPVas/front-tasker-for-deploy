import { DeskDTO } from "../../../types/interfaces/DTO/DeskDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function GetDeskByIdRequest(id: string) {
	try {
		const response = await ApiInstance.get(BASE_URL + `/desk/` + id, GetRequestHeader())
		return response.data as DeskDTO
	} catch(error) {
		ErrorCatch(error)
	}
}