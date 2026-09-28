import { Star, Flame, TrendingUp, Leaf } from 'lucide-react';
export function formatPrice(n){ return `₹${n}`; }

export default function MenuCard({ item }) {
  return (
    <article className="dish-card">
      <div className="card-badges">
        {item.recommended && <span className="tag tag-rec"><Star size={11} fill="currentColor" strokeWidth={0} /> Recommended</span>}
        {item.tags.includes('vegan') && <span className="tag tag-vegan"><Leaf size={11} /> Vegan</span>}
      </div>
      <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
      <div className="dish-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="dish-foot">
          <span className="price">{formatPrice(item.price)}</span>
          <span style={{display:'flex',gap:6}}>
            {item.tags.includes('spicy') && <span className="tag tag-spicy"><Flame size={11} /> Spicy</span>}
            {item.tags.includes('popular') && <span className="tag tag-pop"><TrendingUp size={11} /> Popular</span>}
          </span>
        </div>
      </div>
    </article>
  );
}
