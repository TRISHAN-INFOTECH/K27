import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Armchair, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useSEO, useReveal } from '../components/hooks';

export default function About(){
  useSEO('About | Kitchen 27 Pure Veg Restaurant','Our story — pure vegetarian, vegan-friendly, fresh daily. Quality, ambiance and honest food.');
  useReveal();
  return (
    <>
      <div className="page-hero"><div className="container"><span className="eyebrow">Our Story</span><h1 style={{fontSize:'clamp(32px,4vw,50px)',marginTop:12}}>Rooted in veg, raised on flavour</h1><p>Pure Vegetarian Delight — from a small neighbourhood kitchen to the city’s favourite family table.</p></div></div>
      <section><div className="container two-col">
        <div className="reveal">
          <span className="eyebrow">Mission</span>
          <h2 className="section-title">Vegetarian food that even non-vegetarians crave</h2>
          <p style={{color:'var(--muted)'}}>Kitchen 27 began with a simple belief: vegetarian food deserves centre-stage. No afterthoughts, no compromises. We grind our masalas in-house, ferment dough slowly, and finish every dish with cold-pressed oils and fresh herbs.</p>
          <p style={{color:'var(--muted)'}}>For vegans, we go further — plant-based cheese, oat-milk coffees, coconut-milk desserts — so everyone at the table eats joyfully, together.</p>
          <div style={{display:'flex',gap:26,marginTop:18}}>
            <div><strong style={{fontFamily:'var(--font-display)',fontSize:28}}>12+</strong><br/><span style={{fontSize:13,color:'var(--muted)'}}>Years serving</span></div>
            <div><strong style={{fontFamily:'var(--font-display)',fontSize:28}}>120+</strong><br/><span style={{fontSize:13,color:'var(--muted)'}}>Veg &amp; vegan dishes</span></div>
            <div><strong style={{fontFamily:'var(--font-display)',fontSize:28}}>4.8/5</strong><br/><span style={{fontSize:13,color:'var(--muted)'}}>Guest rating</span></div>
          </div>
        </div>
        <div className="img-collage reveal">
          <img className="tall" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=65&auto=format&fit=crop" alt="Restaurant interior" loading="lazy" decoding="async" />
          <img className="sm" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=65&auto=format&fit=crop" alt="Fine dine table" loading="lazy" decoding="async" />
          <img className="sm" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=65&auto=format&fit=crop" alt="Fresh kitchen prep" loading="lazy" decoding="async" />
        </div>
      </div></section>
      <section style={{paddingTop:0}}><div className="container">
        <SectionHeading eyebrow="Quality & Ambiance" title="Fresh, hygienic, welcoming" />
        <div className="grid-3">
          <div className="testi-card reveal"><div className="mini-ico"><Leaf size={20} /></div><h3>Freshness promise</h3><p style={{color:'var(--muted)',fontSize:15}}>Vegetables arrive each dawn. Chutneys &amp; doughs are made in small daily batches — never stored for days.</p></div>
          <div className="testi-card reveal"><div className="mini-ico"><ShieldCheck size={20} /></div><h3>Hygiene promise</h3><p style={{color:'var(--muted)',fontSize:15}}>FSSAI-compliant kitchen, RO water, sanitised tables, gloved &amp; sealed takeaway packing.</p></div>
          <div className="testi-card reveal"><div className="mini-ico"><Armchair size={20} /></div><h3>Ambiance promise</h3><p style={{color:'var(--muted)',fontSize:15}}>Warm booths, soft lights, family-friendly buzz — festive yet calm. Perfect for birthdays &amp; quiet dinners.</p></div>
        </div>
        <div className="center" style={{marginTop:26}}><Link to="/menu" className="btn btn-primary">Taste the difference <ArrowRight size={16} /></Link></div>
      </div></section>
    </>
  );
}
