import { AuthResponseDTO } from "../../../types/interfaces/DTO/AuthResponseDTO";
import { SignInRequestDTO } from "../../../types/interfaces/DTO/SignInRequestDTO";
import { BASE_URL } from "../../utils/constants/BaseUrl";
import { ErrorCatch } from "../../utils/functions/ErrorCatch";
import { ApiInstance } from "../../utils/functions/ApiInstance";

export async function AuthorizationRequest(request_body: SignInRequestDTO) {
	try {
		const response = await ApiInstance.post(BASE_URL + `/auth/sign/in`, request_body)
		return response.data
	} catch(error) {
		ErrorCatch(error)
	}
}