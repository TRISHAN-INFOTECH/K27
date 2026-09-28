export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div style={{display:'flex',gap:8,flexWrap:'wrap'}} role="tablist" aria-label="Menu categories">
      {categories.map(c=>(
        <button key={c} role="tab" aria-selected={active===c}
          className={`chip ${active===c?'active':''}`}
          onClick={()=>onChange(c)}>{c}</button>
      ))}
    </div>
  );
}
