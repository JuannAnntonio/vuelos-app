import Link from "../Link"

export default function HeaderApp() {
  return (
    <header className="bg-gray-200 flex items-center place-content-center sm:flex-col sm:gap-2 p-3">
      <h1 className="m-0 text-3xl font-extrabold text-gray-900">Flight Search</h1>
      <nav className="fixed bottom-0 z-50 bg-gray-200 w-full flex justify-center gap-3 p-2 sm:static">
        <Link to="/" label="Home">
          <i className="pi pi-home text-2xl"></i>
        </Link>
        <Link to="/team" label="Team">
          <i className="pi pi-users text-2xl"></i>
        </Link>
      </nav>
    </header>
  )
}