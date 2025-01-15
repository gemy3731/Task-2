import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-100 py-7 px-10 shadow-md fixed top-0 left-0 right-0">
        <div className="mx-auto flex justify-center items-center flex-col sm:flex-row gap-10 sm:gap-36 text-[22px] font-medium">
        <NavLink to="/">Card</NavLink>
        <NavLink to="/transactions">Transactions</NavLink>
        </div>
    </div>
  )
}
