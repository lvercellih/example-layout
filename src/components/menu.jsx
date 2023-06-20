import { NavLink } from 'react-router-dom'
import { FeedbackIcon, FolderIcon, HomeIcon, ReferedProjectsIcon } from './icons'

export function Menu() {
  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
      <div className="h-full bg-white dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="text-xl font-bold dark:text-white">
            Plannifer
          </p>
        </div>
        <nav className="mt-6">
          <div>
            <MenuItem to='/home' icon={<HomeIcon />} label='Home' />
            <MenuItem to='/refprojects' icon={<ReferedProjectsIcon />} label={<>
              Refered Projects
              <span className="w-4 h-2 p-1 ml-4 text-xs text-gray-400 bg-gray-200 rounded-lg">
                0
              </span>
              </>} />
            <MenuItem to='/resources' icon={<FolderIcon />} label='Resources' />
            <MenuItem to='/feedback' icon={<FeedbackIcon />} label='Store feedback' />
            <MenuItem to='/test' icon={<HomeIcon />} label='Test' />
          </div>
        </nav>
      </div>
    </div>
  )
}

function MenuItem({ label, icon, to }) {
  return (
    <NavLink 
      className="flex items-center justify-start w-full p-2 pl-6 my-2 transition-colors duration-200 border-l-4 dark:text-white"
      to={to}
    >
      <span className="text-left">{icon}</span>
      <span className="mx-2 text-sm font-normal">{label}</span>
    </NavLink>
  )
}