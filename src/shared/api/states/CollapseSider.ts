import { makeAutoObservable } from "mobx"

class CollapseSider {

	isSiderVisible: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	get() {
		return this.isSiderVisible
	}

	toggle() {
		this.isSiderVisible = !(this.isSiderVisible)
	}

	set(value: boolean) {
		this.isSiderVisible = value
	}
}

export default new CollapseSider()