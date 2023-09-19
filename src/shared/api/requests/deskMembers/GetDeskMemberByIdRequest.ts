import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";
import { DeskMemberDTO } from "../../../types/interfaces/DTO/DeskMemberDTO";

export async function GetDeskMemberByIdRequest(id: string) {
	try {
		const response = await ApiInstance.get(BASE_URL + `/desk_member/` + id, GetRequestHeader())
		return response.data as DeskMemberDTO
	} catch(error) {
		ErrorCatch(error)
	}
}