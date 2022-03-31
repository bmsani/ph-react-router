import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/Customlink';

const Header = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Welcome to header bar</h1>
            <nav>
                <ul className='flex justify-center gap-2 font-bold text-red-400'>
                    <li><CustomLink to='/'>Home</CustomLink></li>
                    <li><CustomLink to='/friends'>Friends</CustomLink></li>
                    <li><CustomLink to='/about'>About</CustomLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;