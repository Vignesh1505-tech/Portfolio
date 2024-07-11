import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);

    const scrollHandler = () => {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        hideMenu();
    };

    const showMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");
        ham[0].classList.toggle("showNavbar");
    };

    const hideMenu = () => {
        const bar = document.getElementsByClassName("bar");
        const ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>VA</h1>
            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <ul className='NavbarLinks'>
                <li onClick={() => scrollToSection('home')}> Home</li>
                <li onClick={() => scrollToSection('about')}> About</li>
                <li onClick={() => scrollToSection('work')}> Work</li>
                <li onClick={() => scrollToSection('project')}> Project</li>
                <li onClick={() => scrollToSection('contact')}> Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;
