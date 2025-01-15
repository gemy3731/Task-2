
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto'>
        <Outlet/>
        </div>
    </div>
  )
}
