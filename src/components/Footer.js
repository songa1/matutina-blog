import React from 'react'
import SocialIcons from './assets/social';

const Footer = () => {
    return (
        <div className="footer-contents relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
            <div className='bg-gray-900 main-foot'>
                <div>
                    <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase">Matutina Blog</p><br></br>
                    <p className="text-sm leading-relaxed inline-block mr-4 py-2 text-gray-100 lex flex-wrap justify-center text-center">I need you on the right track</p>
                    <div className="flex flex-wrap justify-start">
                        <SocialIcons/>
                    </div>
                </div>
                <div>
                    <h6 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase">Links</h6>
                    <ol className="flex flex-col list-none lg:ml-auto">
                        <li className="nav-item text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" >1. Login</li>
                        <li className="nav-item text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">2. Go to shop</li>
                        <li className="nav-item text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">3. Go to class</li>
                    </ol>
                </div>
                <div>
                    <h6 className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase">Contact me</h6>
                    <form>
                        <input type="text" placeholder="Your name" className="focus:outline-none focus:ring focus:border-blue-300 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"></input>
                        <input type="email" placeholder="Your email" className="focus:outline-none focus:ring focus:border-blue-300 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"></input>
                        <textarea placeholder="Your message" className="focus:outline-none focus:ring focus:border-blue-300 text-sm font-bold leading-relaxed inline-block mr-4 py-2"></textarea>
                        <button className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;