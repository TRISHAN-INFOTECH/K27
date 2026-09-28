import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
export default function BackToTop(){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const fn=()=>setShow(window.scrollY>600);
    window.addEventListener('scroll',fn); return ()=>window.removeEventListener('scroll',fn);
  },[]);
  if(!show) return null;
  return <button className="to-top" aria-label="Back to top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ArrowUp size={20} /></button>;
}
