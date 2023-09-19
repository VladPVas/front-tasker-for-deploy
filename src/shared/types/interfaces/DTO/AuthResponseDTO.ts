import { ERoleKey } from "../../enums/ERoleKey";

export interface AuthResponseDTO {
	tokenType: string,
	userId: string,
	username: string,
	roleKey: ERoleKey,
	accessToken: string,
	refreshToken: string
}