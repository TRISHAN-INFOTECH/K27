import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Phone, Star, Salad, Sparkles } from 'lucide-react';
import { useHeroEntrance } from './hooks';

export default function HeroSection() {
  const ref = useHeroEntrance();
  return (
    <div className="hero" ref={ref}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid">
        <div>
          <span className="hero-badge" data-hero><Leaf size={15} /> 100% Pure Veg • Vegan Friendly</span>
          <h1 data-hero>Fresh, Flavorful, <em>Crafted Daily</em> at Kitchen 27</h1>
          <p className="lead" data-hero>Pure Veg • Vegan Friendly • From smoky tikkas to wood-oven pizzas — wholesome indulgence for the whole family.</p>
          <div className="hero-ctas" data-hero>
            <Link to="/menu" className="btn btn-gold">View Menu <ArrowRight size={16} /></Link>
            <Link to="/reservations" className="btn btn-light">Reserve a Table</Link>
            <a href="tel:+919876543210" className="btn btn-ghost-light"><Phone size={16} /> Order Now</a>
          </div>
          <div className="hero-meta" data-hero>
            <div><strong>4.8 / 5</strong><span>2,400+ happy reviews</span></div>
            <div><strong>100%</strong><span>Pure Vegetarian</span></div>
            <div><strong>30+</strong><span>Vegan dishes</span></div>
          </div>
        </div>
        <div className="hero-visual" data-hero-media>
          <div className="hero-main-img">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=70&auto=format&fit=crop" alt="Signature vegetarian thali at Kitchen 27" loading="eager" fetchPriority="high" decoding="async" width="900" height="1035" />
          </div>
          <div className="hero-float"><Sparkles size={15} /> Today's Special<br /><span style={{ fontWeight: 600, fontSize: 13 }}>Paneer Tikka Pizza ₹299</span></div>
          <div className="hero-card">
            <span className="hero-card-ico"><Salad size={26} /></span>
            <div>
              <div className="stars" aria-label="Rated 5 out of 5">
                {[0,1,2,3,4].map(i=><Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}
              </div>
              <strong>Loved by families &amp; vegans</strong>
              <span>Hygienic • Fresh • Cozy dine-in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="hero-strip-inner">Open Daily 11 AM – 11 PM &nbsp;•&nbsp; Green Park, New Delhi &nbsp;•&nbsp; +91 98765 43210 &nbsp;•&nbsp; Takeaway Available</div>
      </div>
    </div>
  );
}
