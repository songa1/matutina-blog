import React from 'react'
import imageLogo from './assets/passport.jpg'
import SocialIcons from './assets/social'

const Homepage = () => {
    return (
        <>
        <div className="home-container">
            <div className="top-cont">
                <div className="flex flex-wrap justify-center bg-gray-800 intro">
                    <img src={imageLogo} alt="Irumva Matutina Chalapova" className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
                    <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 text-white">I am Songa. I want to tell world, what's on my mind. Follow me on my social media and here on my blog, let's be together all the time.</p>
                    <div>
                        <SocialIcons/>
                    </div>
                </div>
                {/* <div className="grid grid-cols-3 gap-4">
                    <div className='bg-gray-300'>1</div>
                    <div className='bg-gray-300'>2</div>
                    <div className='bg-gray-300'>2</div>
                </div> */}
            </div>
        </div>
        {/* <div className="contents">
            <div className="post-item">
                <img src={imageLogo} style={{width: '100%'}}></img>
                <div>
                    <h6>This is a post 1</h6>
                    <p>This is description of this post</p>
                </div>
            </div>
            <div className="post-item">
                <img src={imageLogo} style={{width: '100%'}}></img>
                <div>
                    <h6>This is a post 1</h6>
                    <p>This is description of this post</p>
                </div>
            </div>
        </div> */}
    </>
    )
}

export default Homepage;