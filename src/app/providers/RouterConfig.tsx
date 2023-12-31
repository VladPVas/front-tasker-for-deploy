import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface RouterConfigProps {
	children: React.ReactNode
}

const RouterConfig: React.FC<RouterConfigProps> = ({children}) => {
	return (
		<BrowserRouter>
			{children}
		</BrowserRouter>
	)
}

export default RouterConfig