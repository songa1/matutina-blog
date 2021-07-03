import React from 'react'

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3 navbar'>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">Matutina Blog</a>
                    <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">Home</a></li>
                        <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">Blog</a></li>
                        <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">Contact me</a></li>
                    </ul>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default NavBar;