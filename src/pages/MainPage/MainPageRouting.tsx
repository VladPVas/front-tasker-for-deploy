import { Route, Routes } from "react-router"
import MainPage from "./MainPage"

const MainPageRouting = () => {
	return (
		<Routes>
			<Route path={MAIN_PAGE} element={<MainPage/>} />
		</Routes>
	)
}

export const MAIN_PAGE = '/main'

export default MainPageRouting