import React from 'react'
import ContentWrapper from '../../contentWrapper/ContentWrapper'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './style.scss'

function Footer() {
  return (
    <footer className='footer bg-sky-100 relative py-[50px] px-0'>
        <ContentWrapper>
            <ul className='flex mb-4 justify-center align-center gap-4 mb-5 md:mb-8 md:gap-8'>
                <li className='cursor-pointer text-sm md:text-base  hover:text-rose-300 transition-all ease-linear duration-300'>Terms of Use</li>
                <li className='cursor-pointer text-sm md:text-base  hover:text-rose-300 transition-all ease-linear duration-300'>Privacy-Policy</li>
                <li className='cursor-pointer text-sm md:text-base  hover:text-rose-300 transition-all ease-linear duration-300'>About</li>
                <li className='cursor-pointer text-sm md:text-base  hover:text-rose-300 transition-all ease-linear duration-300'>Blog</li>
                <li className='cursor-pointer text-sm md:text-base  hover:text-rose-300 transition-all ease-linear duration-300'>FAQ</li>
            </ul>
            <div className='text-sm leading-5 text-center mb-5 md:text-base md:mb-8 max-w-3xl'>
                The app provides a comprehensive platform for movie and TV show enthusiasts to discover, explore and
                keep track of their favorite content. The combination of powerful search capabilities, user-friendly interface
                and rich content makes it an enjoyable tool for users to find what they're looking for in the world of
                entertainment.
            </div>
            <div className='flex mt-2 justify-center items-center gap-2.5'>
                <span className='w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center cursor-pointer transition-all ease-linear duration-300 hover:shadow-pink hover:text-rose-300'>
                    <FaFacebookF />
                </span>
                <span className='w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center cursor-pointer transition-all ease-linear duration-300 hover:shadow-pink hover:text-rose-300'>
                    <FaInstagram />
                </span>
                <span className='w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center cursor-pointer transition-all ease-linear duration-300 hover:shadow-pink hover:text-rose-300'>
                    <FaLinkedin />
                </span>
                <span className='w-12 h-12 rounded-full bg-sky-300 flex items-center justify-center cursor-pointer transition-all ease-linear duration-300 hover:shadow-pink hover:text-rose-300'>
                    <FaTwitter />
                </span>
            </div>
        </ContentWrapper>

    </footer>
  )
}

export default Footer