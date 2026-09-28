import { useState } from 'react';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useSEO, useReveal } from '../components/hooks';
import { GALLERY } from '../data/siteData';

export default function Gallery(){
  useSEO('Gallery | Kitchen 27','Peek inside — cozy interiors, festive lights and irresistible vegetarian spreads.');
  useReveal();
  const [light,setLight]=useState(null);
  return (
    <>
      <div className="page-hero"><div className="container"><span className="eyebrow">Gallery</span><h1 style={{fontSize:'clamp(32px,4vw,50px)',marginTop:12}}>Warm lights, warmer food</h1><p>Interiors, exteriors &amp; plates — select any photo to view.</p></div></div>
      <section><div className="container">
        <SectionHeading eyebrow="Moments" title="Life at Kitchen 27" sub="To use your own photos, drop files into /src/assets/ and update src/data/siteData.js — captions supported." />
        <div className="gal-grid">
          {GALLERY.map(g=>(
            <figure key={g.id} className="gal-item reveal" style={{margin:0}} onClick={()=>setLight(g)} onKeyDown={e=>e.key==='Enter'&&setLight(g)} tabIndex={0} role="button" aria-label={`View ${g.caption}`}>
              <img src={g.src} alt={g.caption} loading="lazy" decoding="async" />
              <figcaption className="gal-cap">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div></section>
      {light && (
        <div className="lightbox" onClick={()=>setLight(null)} role="dialog" aria-modal="true" aria-label={light.caption}>
          <button className="btn btn-light lb-close" onClick={()=>setLight(null)} aria-label="Close preview"><X size={18} /></button>
          <div onClick={e=>e.stopPropagation()}>
            <img src={light.src.replace('w=600', 'w=1200')} alt={light.caption} />
            <div className="lightbox-cap">{light.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}
