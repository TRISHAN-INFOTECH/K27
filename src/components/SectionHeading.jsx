export default function SectionHeading({ eyebrow, title, sub, center=true }){
  return <div className={center?'center':''} style={{marginBottom:26}}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {sub && <p className="section-sub">{sub}</p>}
  </div>;
}
