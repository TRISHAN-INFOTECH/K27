import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Leaf, Sprout, Vegan, ShieldCheck, UtensilsCrossed, ShoppingBag, CircleCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import MenuCard from '../components/MenuCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';
import { useSEO, useReveal } from '../components/hooks';
import { MENU_ITEMS } from '../data/menuData';
import { TESTIMONIALS, FEATURED } from '../data/siteData';

const WHY = [
  { Icon: Leaf, t: 'Farm-Fresh Daily', d: 'Vegetables, herbs & dairy sourced every morning from trusted local farms.' },
  { Icon: ShieldCheck, t: '100% Pure Veg', d: 'Strict vegetarian kitchen — no compromise, no cross-contact.' },
  { Icon: Vegan, t: 'Vegan Options', d: '30+ vegan chaat, pizza, pasta & desserts with plant-based cheese & milk.' },
  { Icon: Sprout, t: 'Hygiene First', d: 'FSSAI-compliant kitchen, RO water, gloved packing for takeaway.' },
  { Icon: UtensilsCrossed, t: 'Cozy Dine-In', d: 'Warm booth seating, family-friendly, soft festive lighting.' },
  { Icon: ShoppingBag, t: 'Takeaway & Order', d: 'Hot & fast pickup, call-ahead ordering, party packs available.' },
];

const PROMISES = [
  'No onion-garlic options on request — Jain-friendly preparations.',
  'Vegan cheese & oat milk — dairy-free without losing indulgence.',
  'Family booths & quick takeaway — dine in comfort or grab & go.',
];

export default function Home(){
  useSEO('Kitchen 27 | Pure Veg • Vegan Friendly Restaurant','Fresh vegetarian & vegan food — chaat, pizza, pasta, sandwiches. Dine-in & takeaway in New Delhi.');
  useReveal();
  const featured = FEATURED.map(id=>MENU_ITEMS.find(m=>m.id===id)).filter(Boolean);
  return (
    <>
      <HeroSection />
      <section>
        <div className="container two-col">
          <div className="img-collage reveal">
            <img className="tall" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=65&auto=format&fit=crop" alt="Kitchen 27 cozy interior" loading="lazy" decoding="async" />
            <img className="sm" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=65&auto=format&fit=crop" alt="Malai paneer tikka" loading="lazy" decoding="async" />
            <img className="sm" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=65&auto=format&fit=crop" alt="Fresh chaat" loading="lazy" decoding="async" />
          </div>
          <div className="reveal">
            <span className="eyebrow">Welcome to Kitchen 27</span>
            <h2 className="section-title">A pure vegetarian delight, in the heart of the city</h2>
            <p style={{color:'var(--muted)'}}>Since day one, Kitchen 27 has stood for one simple promise — honest veg food made fresh. Slow-simmered makhani, hand-stretched pizza dough, chutneys ground daily. Whether you’re vegetarian for life or vegan by choice, there’s always something irresistible on your plate.</p>
            <ul className="reset feature-list">
              {PROMISES.map(p=>(
                <li key={p}><CircleCheck size={20} className="check-ico" /><span>{p}</span></li>
              ))}
            </ul>
            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              <Link to="/about" className="btn btn-primary">Our Story <ArrowRight size={16} /></Link>
              <Link to="/gallery" className="btn btn-outline">See Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{paddingTop:0}}>
        <div className="container">
          <SectionHeading eyebrow="Best Sellers" title="Loved, ordered, re-ordered" sub="Our most craved dishes — tried, tested and rated 4.8 out of 5 by 2,400+ guests." />
          <div className="grid-4">
            {featured.map(f=><div key={f.id} className="reveal"><MenuCard item={f} /></div>)}
          </div>
          <div className="center" style={{marginTop:24}}><Link to="/menu" className="btn btn-primary">Explore Full Menu <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="why">
        <div className="container" style={{padding:'30px 22px'}}>
          <div className="center">
            <span className="eyebrow" style={{background:'rgba(217,164,65,.2)',color:'#f2d48a',borderColor:'rgba(217,164,65,.5)'}}>Why Kitchen 27</span>
            <h2 className="section-title" style={{color:'#fff'}}>Freshness you can taste</h2>
            <p style={{color:'#b9c4b4',maxWidth:600,margin:'0 auto'}}>Every plate leaves our kitchen only when it’s vibrant, aromatic and beautiful.</p>
          </div>
          <div className="why-grid">
            {WHY.map(({Icon,t,d})=><div key={t} className="why-card reveal"><div className="ico"><Icon size={22} /></div><h3 style={{margin:'0 0 6px',fontSize:19}}>{t}</h3><p style={{margin:0,fontSize:14.5,color:'#cdd5c9'}}>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Guests say it best" sub="Real reviews from families, foodies and vegans." />
          <div className="grid-3">
            {TESTIMONIALS.map(t=><div key={t.id} className="reveal"><TestimonialCard t={t} /></div>)}
          </div>
          <div className="center" style={{marginTop:26,display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/reservations" className="btn btn-gold">Reserve a Table <ArrowRight size={16} /></Link>
            <a href="tel:+919876543210" className="btn btn-outline"><Phone size={16} /> Order Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
