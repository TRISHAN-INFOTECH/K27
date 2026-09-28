import { useState } from 'react';
import { Send } from 'lucide-react';
export default function ContactForm(){
  const [s,setS]=useState(false);
  return (
    <form className="form-card" onSubmit={e=>{e.preventDefault();setS(true);}}>
      <div className="form-grid">
        <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" required placeholder="Your name" /></div>
        <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" placeholder="+91 ..." /></div>
        <div className="field full"><label htmlFor="c-email">Email</label><input id="c-email" type="email" required placeholder="you@email.com" /></div>
        <div className="field full"><label htmlFor="c-msg">Message</label><textarea id="c-msg" rows={4} required placeholder="Catering, feedback, bulk order..." /></div>
      </div>
      <button className="btn btn-primary" style={{marginTop:16,width:'100%'}} type="submit">Send Message <Send size={15} /></button>
      {s && <div className="success">Thanks! We’ll reply within a few hours. For urgent orders call +91 98765 43210.</div>}
    </form>
  );
}
