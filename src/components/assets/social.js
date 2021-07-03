import React from 'react'

const SocialIcons = () => {
    return (
        <div>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto bg-gray-600 social-icons">
                <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-95" href="#facebook"><i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2"></span></a></li>
                <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-95" href="#instagram"><i className="fab fa-instagram-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2"></span></a></li>
                <li className="nav-item"><a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray hover:opacity-95" href="#twitter"><i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2"></span></a></li>
            </ul>
        </div>
    )
}

export default SocialIcons;