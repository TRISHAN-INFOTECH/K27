import { Star } from 'lucide-react';
export default function TestimonialCard({ t }) {
  return (
    <div className="testi-card">
      <div className="stars" aria-label={`Rated ${t.rating} out of 5`}>
        {[1,2,3,4,5].map(i=>(
          <Star key={i} size={15} fill={i<=t.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
        ))}
      </div>
      <p style={{margin:0}}>“{t.text}”</p>
      <div className="testi-foot">
        <span className="avatar">{t.initial}</span>
        <div><strong style={{fontSize:15}}>{t.name}</strong><br/><span style={{fontSize:13,color:'var(--muted)'}}>{t.role}</span></div>
      </div>
    </div>
  );
}
