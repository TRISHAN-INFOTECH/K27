import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useSEO, useReveal } from '../components/hooks';
export default function Contact(){
  useSEO('Contact & Order | Kitchen 27','Address, phone, map & WhatsApp ordering. Green Park, New Delhi.');
  useReveal();
  return (
    <>
      <div className="page-hero"><div className="container"><span className="eyebrow">Contact</span><h1 style={{fontSize:'clamp(32px,4vw,50px)',marginTop:12}}>Come hungry, leave happy</h1><p>Call, WhatsApp or drop by — we love guests.</p></div></div>
      <section><div className="container contact-grid">
        <div className="reveal">
          <h2 className="section-title" style={{fontSize:32}}>Find us</h2>
          <div className="info-list">
            <div className="info-row"><MapPin size={20} className="info-ico" /><span><strong>27, Green Park Market, New Delhi 110016</strong><br/><span style={{color:'var(--muted)',fontSize:14}}>Near Green Park Metro, Gate 2 — look for the green glow.</span></span></div>
            <div className="info-row"><Phone size={20} className="info-ico" /><span><strong>+91 98765 43210</strong><br/><span style={{color:'var(--muted)',fontSize:14}}>11 AM – 11 PM, all days</span></span></div>
            <div className="info-row"><Mail size={20} className="info-ico" /><span><strong>hello@kitchen27.in</strong><br/><span style={{color:'var(--muted)',fontSize:14}}>Catering &amp; party orders welcome.</span></span></div>
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:18}}>
            <a className="btn btn-primary" href="tel:+919876543210"><Phone size={16} /> Call Now</a>
            <a className="btn btn-gold" href="https://wa.me/919876543210?text=Hi%20Kitchen%2027!%20I%27d%20like%20to%20order." target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp Order</a>
          </div>
          <div className="map-wrap">
            <iframe title="Kitchen 27 map — Green Park New Delhi" src="https://www.google.com/maps?q=Green+Park+Market+New+Delhi&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="reveal"><ContactForm /></div>
      </div></section>
    </>
  );
}
