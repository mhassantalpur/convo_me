import DarkModeToggle from "./DarkModeToggle"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white dark:bg-gray-900">
            <Logo />
                <div className="flex-1 flex items-center justify-end space-x-4">
                    {/* language select */}
                    {/* session */}

                    <DarkModeToggle />
                </div>
        </nav>
        {/* subscribe */}
    </header>
  )
}

export default Header