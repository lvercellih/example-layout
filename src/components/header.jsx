import { TriangleDownIcon, BellIcon, BurgerIcon, ChainIcon } from "./icons";
import avatarImage from '../assets/avatar.jpg'

export function Header() {
  return (
    <header className="z-40 flex items-center justify-between w-full h-16">
      <div className="block ml-6 lg:hidden">
        <button className="flex items-center p-2 text-gray-500 bg-white rounded-full shadow text-md">
          <BurgerIcon />
        </button>
      </div>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative flex items-center justify-end w-full p-1 space-x-4">
          <RoundedButton><ChainIcon /></RoundedButton>
          <RoundedButton><BellIcon /></RoundedButton>
          <span className="w-1 h-8 bg-gray-200 rounded-lg"></span>
          <a href="#" className="relative block">
            <img alt="profil" src={avatarImage} className="mx-auto object-cover rounded-full h-10 w-10 "/>
          </a>
          <button className="flex items-center text-gray-500 dark:text-white text-md">
            Charlie R
            <TriangleDownIcon />
          </button>
        </div>
      </div>
    </header>
  )
}

function RoundedButton({ children, ...props }) {
  return (
    <button className="flex items-center p-2 text-gray-400 bg-white rounded-full shadow hover:text-gray-700 text-md" {...props} >
      {children}
    </button>
  )
}
