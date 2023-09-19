export function getAuth() {
	if(localStorage.getItem('auth')){
		return localStorage.getItem('auth')
	}else
		return ''
}

export function setAuth(token: string) {
	localStorage.setItem('auth', token)
}

