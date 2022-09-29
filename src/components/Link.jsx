import { NavLink } from "react-router-dom"

export default function MenuLink(props) {
  // `flex flex-col items-center w-1/2 gap-1 text-sm text-gray-700 p-2 hover:text-gray-900 sm:w-auto sm:flex-row sm:text-base sm:py-1 sm:hover:ring-2 ring-gray-900 rounded-lg transition`

  return (
    <NavLink to={props.to} className={({ isActive }) =>
    isActive ? 'flex flex-col items-center w-1/2 gap-1 text-sm text-gray-900 p-2 hover:text-gray-900 sm:w-auto sm:flex-row sm:text-base sm:py-1 sm:hover:ring-2 ring-gray-900 rounded-lg transition pointer-events-none' : 'flex flex-col items-center w-1/2 gap-1 text-sm text-gray-700 p-2 hover:text-gray-900 sm:w-auto sm:flex-row sm:text-base sm:py-1 sm:hover:ring-2 ring-gray-900 rounded-lg transition'}>
      {props.children}
      {props.label}
    </NavLink>
  )
}