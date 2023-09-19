export interface TaskDTO {
	id: string,
	name: string,
	description: string,
	creatorId?: string,
	taskGroupId: string,
	memberIds: string[],
	tagIds: string[],
	createdAt?: string,
	untilDate: string,
	position: number
}