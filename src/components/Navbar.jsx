import { useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, CalendarCheck } from 'lucide-react';
import { initNavbarScroll } from '../lib/anim';

export default function Navbar() {
  const loc = useLocation();
  const openMenu = () => document.querySelector('.nav-links')?.classList.toggle('open');
  const closeMenu = () => document.querySelector('.nav-links')?.classList.remove('open');
  useEffect(closeMenu, [loc.pathname]);
  useEffect(() => initNavbarScroll(), []);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Kitchen 27 home">
          <span className="brand-mark">27</span>
          <span className="brand-text"><strong>Kitchen 27</strong><span>Pure Veg • Vegan</span></span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/" className={({isActive})=>isActive?'active':''}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive?'active':''}>About</NavLink>
          <NavLink to="/menu" className={({isActive})=>isActive?'active':''}>Menu</NavLink>
          <NavLink to="/gallery" className={({isActive})=>isActive?'active':''}>Gallery</NavLink>
          <NavLink to="/reservations" className={({isActive})=>isActive?'active':''}>Reservations</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive?'active':''}>Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to="/reservations" className="btn btn-primary reserve-btn"><CalendarCheck size={16} /> Reserve a Table</Link>
          <button className="icon-btn hamburger" onClick={openMenu} aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  );
}
