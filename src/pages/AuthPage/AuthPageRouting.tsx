import { Route, Routes } from 'react-router'
import AuthPage from './AuthPage'

const AuthPageRouting = () => {
	return (
		<Routes>
			<Route path={AUTH_PAGE} element={<AuthPage/>} />
		</Routes>
	)
}

export const AUTH_PAGE = '/auth'

export default AuthPageRouting