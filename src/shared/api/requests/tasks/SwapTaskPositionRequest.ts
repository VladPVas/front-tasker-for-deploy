import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function SwapTaskPositionRequest(id: string, position: number) {
	try {
		await ApiInstance.put(BASE_URL + `/task/` + id + `/swap`, position, GetRequestHeader())
	} catch(error) {
		ErrorCatch(error)
	}
}