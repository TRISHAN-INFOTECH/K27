import { useState } from 'react';
import { CircleCheck, ArrowRight } from 'lucide-react';

export default function ReservationForm() {
  const [form, setForm] = useState({ name:'', phone:'', date:'', time:'', guests:'2', request:'' });
  const [done, setDone] = useState(false);
  const set = (k,v)=>setForm(f=>({...f,[k]:v}));
  const submit = (e)=>{
    e.preventDefault();
    if(!form.name || !form.phone || !form.date || !form.time) { alert('Please fill name, phone, date and time.'); return; }
    setDone(true);
  };
  if(done) return <div className="success"><strong><CircleCheck size={16} className="inline-ico" /> Table reserved, {form.name.split(' ')[0]}!</strong><br/>We’ve noted {form.guests} guest(s) on {form.date} at {form.time}. We’ll confirm on {form.phone} shortly.<br/><br/><button className="btn btn-primary" onClick={()=>setDone(false)}>Book another table</button></div>;
  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="r-name">Name *</label><input id="r-name" value={form.name} onChange={e=>set('name',e.target.value)} placeholder="Your full name" required /></div>
        <div className="field"><label htmlFor="r-phone">Phone *</label><input id="r-phone" value={form.phone} onChange={e=>set('phone',e.target.value)} placeholder="+91 ..." type="tel" required /></div>
        <div className="field"><label htmlFor="r-date">Date *</label><input id="r-date" type="date" value={form.date} onChange={e=>set('date',e.target.value)} required /></div>
        <div className="field"><label htmlFor="r-time">Time *</label><select id="r-time" value={form.time} onChange={e=>set('time',e.target.value)} required><option value="">Select</option><option>12:00 PM</option><option>1:30 PM</option><option>7:00 PM</option><option>8:00 PM</option><option>9:30 PM</option></select></div>
        <div className="field"><label htmlFor="r-guests">Guests</label><select id="r-guests" value={form.guests} onChange={e=>set('guests',e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6+</option></select></div>
        <div className="field"><label htmlFor="r-occ">Occasion</label><select id="r-occ" onChange={e=>set('request',e.target.value)}><option value="">None</option><option>Birthday</option><option>Anniversary</option><option>Family dinner</option><option>Business meal</option></select></div>
        <div className="field full"><label htmlFor="r-req">Special request</label><textarea id="r-req" rows={3} value={form.request} onChange={e=>set('request',e.target.value)} placeholder="Window seat, vegan cake, wheelchair access..." /></div>
      </div>
      <button className="btn btn-primary" style={{marginTop:16,width:'100%'}} type="submit">Confirm Reservation <ArrowRight size={16} /></button>
      <p style={{fontSize:13,color:'var(--muted)',textAlign:'center'}}>No advance needed • Free cancellation up to 3 hrs before</p>
    </form>
  );
}
