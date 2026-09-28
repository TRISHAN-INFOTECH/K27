import { Clock, UtensilsCrossed, Phone } from 'lucide-react';
import ReservationForm from '../components/ReservationForm';
import { useSEO, useReveal } from '../components/hooks';
export default function Reservations(){
  useSEO('Reserve a Table | Kitchen 27','Book your table — family booths, birthdays & cozy dinners. Free cancellation.');
  useReveal();
  return (
    <>
      <div className="page-hero"><div className="container"><span className="eyebrow">Reservations</span><h1 style={{fontSize:'clamp(32px,4vw,50px)',marginTop:12}}>Save your table</h1><p>2 minutes, zero advance. We confirm on phone / WhatsApp.</p></div></div>
      <section><div className="container contact-grid">
        <div className="reveal">
          <h2 className="section-title" style={{fontSize:32}}>Book in seconds</h2>
          <p style={{color:'var(--muted)'}}>For 6+ guests or parties, call <a href="tel:+919876543210" style={{fontWeight:700}}>+91 98765 43210</a>.</p>
          <div className="info-list">
            <div className="info-row"><Clock size={20} className="info-ico" /><span><strong>Open daily 11 AM – 11 PM</strong><br/><span style={{color:'var(--muted)',fontSize:14}}>Peak hours 1–2 PM &amp; 7:30–9:30 PM — book ahead.</span></span></div>
            <div className="info-row"><UtensilsCrossed size={20} className="info-ico" /><span><strong>Booth + family tables</strong><br/><span style={{color:'var(--muted)',fontSize:14}}>Window seats &amp; birthday setups on request.</span></span></div>
            <div className="info-row"><Phone size={20} className="info-ico" /><span><strong>Prefer to call?</strong><br/><span style={{color:'var(--muted)',fontSize:14}}><a href="tel:+919876543210" style={{fontWeight:700}}>+91 98765 43210</a> — instant confirmation.</span></span></div>
          </div>
        </div>
        <div className="reveal"><ReservationForm /></div>
      </div></section>
    </>
  );
}
