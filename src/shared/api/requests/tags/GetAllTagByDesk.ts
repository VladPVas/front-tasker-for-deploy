import { TagDTO } from "../../../types/interfaces/DTO/TagDTO";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";
import { ApiInstance } from "../../utils/functions/ApiInstance";

export async function GetAllTagByDesk(deskId: string) {
	try {
		const response = await ApiInstance.get(`/tag/desk/` + deskId, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}