import axios from "axios";
import { AccessTokenRequestDTO } from "../../../types/interfaces/DTO/AccessTokenRequestDTO";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ApiInstance } from "../../utils/functions/ApiInstance";
import { GetRequestHeader } from "../../utils/functions/GetRequestHeader";

export async function RefreshRequest(request_body: AccessTokenRequestDTO) {
	try {
		const response = await ApiInstance.post(BASE_URL + `/auth/refresh`, request_body, GetRequestHeader())
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}