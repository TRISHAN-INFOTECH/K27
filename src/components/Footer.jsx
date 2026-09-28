import { Link } from 'react-router-dom';
import { Camera, ThumbsUp, MessageCircle, Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div>
          <h4>Kitchen 27</h4>
          <p>Pure Vegetarian Delight. Fresh, flavorful, crafted daily — 100% veg with generous vegan options.</p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={17} /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><ThumbsUp size={17} /></a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a>
            <a href="tel:+919876543210" aria-label="Call"><Phone size={17} /></a>
          </div>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p><MapPin size={14} className="inline-ico" /> 27, Green Park Market,<br />New Delhi 110016<br /><Phone size={14} className="inline-ico" /> +91 98765 43210<br /><Mail size={14} className="inline-ico" /> hello@kitchen27.in</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p><Clock size={14} className="inline-ico" /> Mon – Sun<br />11:00 AM – 11:00 PM<br />Lunch: 11–4 • Dinner: 6–11<br />Takeaway &amp; Dine-in</p>
        </div>
        <div>
          <h4>Explore</h4>
          <p><Link to="/menu">View Menu</Link><br /><Link to="/reservations">Reserve a Table</Link><br /><Link to="/gallery">Gallery</Link><br /><Link to="/contact">Contact &amp; Order</Link></p>
        </div>
      </div>
      <div className="foot-bottom">© {new Date().getFullYear()} Kitchen 27 • Pure Veg • Crafted with freshness daily</div>
    </footer>
  );
}
