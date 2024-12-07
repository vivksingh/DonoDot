import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import whiteLogo from '..\\assets\\logo.png';
import darkLogo from '..\\assets\\darkLogo.png';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [tab, setHomeTab] = useState(true);
  const url = useLocation();
  const navigate = useNavigate(); // To programmatically navigate after logout
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Donate', href: '/donate' },
    { name: 'Collect', href: '/claim' },
    { name: 'About us', href: '/about-us' },
  ];

  // Check token on component load
  useEffect(() => {
    setHomeTab(url.pathname === '/');
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, [url]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from storage
    setIsLoggedIn(false); // Update the state
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">DONO</span>
            <img
              src={tab ? whiteLogo : darkLogo}
              alt="logo"
              className="h-16 w-auto"
            />
            <span className={`m-1.5 text-2xl ${tab && `text-white`}`}>Dono</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`p-1.5 text-lg font-semibold leading-6 rounded-lg hover:bg-indigo-600 hover:text-white ${
                tab && `text-white`
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login/Logout button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isLoggedIn ? (
            <Link
              to="/login"
              className={`text-sm font-semibold leading-6 text-xl hover:text-gray-800 ${
                tab && `text-white`
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className={`text-sm font-semibold leading-6 text-xl hover:text-gray-800 ${
                tab && `text-white`
              }`}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dono</span>
              <img
                alt="logo"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
