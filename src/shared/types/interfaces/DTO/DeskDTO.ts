export interface DeskDTO {
	id: string,
	name: string,
	description: string,
	creatorId?: string,
	memberIds?: string[],
	taskGroupIds?: string[]
}