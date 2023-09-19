import { EAuthorityKey } from "../../enums/EAuthorityKey";

export interface DeskMemberDTO {
	id?: string,
	authorityKey: EAuthorityKey, // AuthorityKeyEnum
	deskId?: string,
	userId?: string
}

