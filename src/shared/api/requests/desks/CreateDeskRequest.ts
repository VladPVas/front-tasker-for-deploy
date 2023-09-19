import { DeskDTO } from "../../../types/interfaces/DTO/DeskDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function CreateDeskRequest(desk: DeskDTO) {
	try {
		await ApiInstance.post(BASE_URL + `/desk`, desk, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}