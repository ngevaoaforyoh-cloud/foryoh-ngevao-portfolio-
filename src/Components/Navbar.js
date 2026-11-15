import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';

const Nav = () => {
  const [navbarblur, setNavbarblur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setNavbarblur(window.scrollY >= 20);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
      <Link to="/" onClick={closeMenu} className="Logo" aria-label="Ngevao Foryoh home">NF</Link>
      <button className="Hamburger" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? 'bar barOne' : 'bar'}></span>
        <span className={menuOpen ? 'bar barTwo' : 'bar'}></span>
        <span className={menuOpen ? 'bar barThree' : 'bar'}></span>
      </button>
      <ul className={menuOpen ? 'NavbarLinks showNavbar' : 'NavbarLinks'}>
        <li onClick={closeMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
        <li onClick={closeMenu}><Link to="/About"><BsPerson /> About</Link></li>
        <li onClick={closeMenu}><Link to="/Project"><BsCodeSlash /> Experience</Link></li>
        <li onClick={closeMenu}><Link to="/Resume"><CgFileDocument /> CV</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
