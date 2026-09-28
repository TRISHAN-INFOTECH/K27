import { useMemo, useState } from 'react';
import { LayoutGrid, Leaf, Vegan, Flame, TrendingUp, Search, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CategoryTabs from '../components/CategoryTabs';
import { useSEO, useReveal } from '../components/hooks';
import { MENU_ITEMS, CATEGORIES, FILTERS } from '../data/menuData';
import { formatPrice } from '../components/MenuCard';

const FILTER_ICONS = { All: LayoutGrid, Veg: Leaf, Vegan: Vegan, Spicy: Flame, Popular: TrendingUp };

export default function Menu(){
  useSEO('Menu | Kitchen 27 — Chaat, Pizza, Pasta, Vegan','Explore chaat, sandwiches, pizza, pasta, garlic bread, drinks & desserts. Veg, vegan, spicy & popular filters.');
  const [cat,setCat]=useState('All');
  const [filter,setFilter]=useState('All');
  const [q,setQ]=useState('');
  useReveal([cat, filter, q]);
  const items = useMemo(()=>{
    return MENU_ITEMS.filter(m=>{
      if(cat!=='All' && m.category!==cat) return false;
      if(filter!=='All' && !m.tags.includes(filter.toLowerCase())) return false;
      if(q && !(m.name+' '+m.description).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  },[cat,filter,q]);

  return (
    <>
      <div className="page-hero"><div className="container"><span className="eyebrow">Pure Veg • Vegan Friendly</span><h1 style={{fontSize:'clamp(32px,4vw,50px)',marginTop:12}}>The Menu</h1><p>Chaat to sizzling brownies — everything vegetarian, plenty vegan, all delicious.</p></div></div>
      <section><div className="container">
        <SectionHeading eyebrow="Eat Fresh" title="Find your craving" sub="Filter by diet or mood. Starred items are guest favourites." />
        <div className="menu-layout">
          <aside className="side-card">
            <strong>Categories</strong>
            <div style={{display:'grid',gap:4,marginTop:10}}>
              {CATEGORIES.map(c=><button key={c} className={`cat-btn ${cat===c?'active':''}`} onClick={()=>setCat(c)}>{c}<span>{c==='All'?MENU_ITEMS.length:MENU_ITEMS.filter(m=>m.category===c).length}</span></button>)}
            </div>
            <div style={{marginTop:16}}><strong>Search</strong>
              <div className="search-wrap"><Search size={16} /><input placeholder="paneer, vegan, mango..." value={q} onChange={e=>setQ(e.target.value)} aria-label="Search menu" /></div>
            </div>
          </aside>
          <div>
            <CategoryTabs categories={CATEGORIES} active={cat} onChange={setCat} />
            <div className="filter-row" role="group" aria-label="Diet filters">
              {FILTERS.map(f=>{
                const Icon = FILTER_ICONS[f] ?? LayoutGrid;
                return <button key={f} className={`chip ${filter===f?'active':''}`} onClick={()=>setFilter(f)}><Icon size={14} /> {f}</button>;
              })}
            </div>
            <p style={{color:'var(--muted)',fontSize:14}}>{items.length} dish{items.length!==1?'es':''} {cat!=='All'?`in ${cat}`:''} {filter!=='All'?`• ${filter}`:''}</p>
            <div className="menu-grid">
              {items.map(m=>(
                <article key={m.id} className="menu-item reveal">
                  <img src={m.image} alt={m.name} loading="lazy" decoding="async" />
                  <div style={{minWidth:0}}>
                    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:4}}>
                      {m.recommended && <span className="tag tag-rec"><Star size={11} fill="currentColor" strokeWidth={0} /> Recommended</span>}
                      {m.tags.includes('vegan')?<span className="tag tag-vegan"><Leaf size={11} /> Vegan</span>:<span className="tag tag-veg">Veg</span>}
                    </div>
                    <h3>{m.name}</h3>
                    <p>{m.description}</p>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                      <strong className="price">{formatPrice(m.price)}</strong>
                      {m.tags.includes('spicy') && <span className="tag tag-spicy"><Flame size={11} /> Spicy</span>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {items.length===0 && <div className="form-card center">No dishes found. Try another filter. <br/><br/><button className="btn btn-primary" onClick={()=>{setCat('All');setFilter('All');setQ('');}}>Reset</button></div>}
          </div>
        </div>
      </div></section>
    </>
  );
}
