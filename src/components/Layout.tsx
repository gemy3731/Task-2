
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div className='container mx-auto mt-[174px] sm:mt-[101px]'>
        <Outlet/>
        </div>
    </div>
  )
}
