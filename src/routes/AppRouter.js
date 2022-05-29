import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Menu } from '../components/Menu'
import { Navb } from '../components/Navb'

export function AppRoutes() {
	return (
		<BrowserRouter>
        <Navb/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
			</Routes>
		</BrowserRouter>
	)
}
