import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { DeskMemberDTO } from "../../../types/interfaces/DTO/DeskMemberDTO";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function UpdateDeskMemberByIdRequest(id: string, request_body: DeskMemberDTO) {
	try {
		const response = await ApiInstance.put(BASE_URL + `/desk_member/` + id, request_body, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}