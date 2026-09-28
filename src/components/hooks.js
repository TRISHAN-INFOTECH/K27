import { useEffect, useRef } from 'react';
import { heroEntrance, initScrollReveals } from '../lib/anim';

export function useSEO(title, description){
  useEffect(()=>{
    document.title = title;
    const m = document.querySelector('meta[name="description"]');
    if(m) m.setAttribute('content', description);
    window.scrollTo(0,0);
  },[title, description]);
}

export function useReveal(deps = []){
  useEffect(()=> initScrollReveals(), deps);
}

/** Attach a ref to a hero wrapper; children tagged data-hero animate in on mount. */
export function useHeroEntrance(){
  const ref = useRef(null);
  useEffect(()=>{ heroEntrance(ref.current); },[]);
  return ref;
}
