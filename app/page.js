 "use client";
import { useState } from "react";
import { Heart, Sparkles, Gift, Sun, ShieldCheck, Star, ArrowDown, RotateCcw } from "lucide-react";

const messages = [
["🌸","You Will Be Okay","Mawa, I know your heart is hurting now. Some days may feel difficult, and memories may come back again and again. Please give yourself time. You do not have to be okay every day. Take one day at a time. Slowly, your heart will be peaceful and strong again."],
["🙏","God Is With You","When you feel alone, remember that God is with you. Sometimes we do not understand why someone leaves our life, but God may have a better plan that we cannot see today. Keep faith. Your story is not ending here."],
["❤️❤️","You Deserve Real Love","You deserve someone who respects you, understands you, supports you and chooses you every day. Losing someone does not mean losing your value. Your value was never decided by another person. You are precious."],
["🌅","Better Days Are Coming","Today may be painful, but tomorrow can be different. Life will slowly bring back your smile, confidence and happiness. One day you may look back and realize that the chapter that hurt you also made you stronger."],
["🌷","Don't Blame Yourself","Please do not keep asking, 'What did I do wrong?' Sometimes relationships end even when we give our best. Not everything that ends is our failure. Sometimes life simply takes us in a different direction."],
["✨","Your Future Is Still Beautiful","One relationship cannot decide your entire future. There are still so many beautiful moments waiting for you—new memories, new happiness, new people and new beginnings. Your life has many more chapters to come."],
["⏳","Trust God's Timing","Do not hurry because you feel lonely. Do not choose someone only because you are afraid of being alone. Trust God's timing. The right person should make you feel respected, safe, valued and loved."],
["😊","Your Smile Will Return","Maybe today your smile is not the same. That is okay. Heal slowly. Laugh when you feel like laughing and cry when you need to cry. Never feel ashamed of your emotions. Your beautiful smile will come back."],
["💪","You Are Stronger Than You Think","Every difficult day you get through is proof that you are stronger than you think. Keep going, Mawa. Your strongest and happiest version is still waiting for you."],
["🌻","One Day You Will Understand","One day you may look back at this moment and understand why things happened this way. What feels like a loss today may become a blessing tomorrow. Do not lose hope. God knows your heart and your future."]
];

export default function Home() {
  const [open,setOpen]=useState(null), [surprise,setSurprise]=useState(false), [particles,setParticles]=useState([]);
  function showSurprise(){
    const symbols=["❤️","✨","🌸","💖","🙏","⭐"];
    setSurprise(true);
    setParticles(Array.from({length:30},(_,i)=>({id:Date.now()+i,s:symbols[i%symbols.length],l:Math.random()*100,d:Math.random()*.7})));
    setTimeout(()=>setParticles([]),4200);
  }
  return <main>
    <div className="ambient one"/><div className="ambient two"/>
    {particles.map(p=><span key={p.id} className="particle" style={{left:`${p.l}%`,animationDelay:`${p.d}s`}}>{p.s}</span>)}
    <section className="hero">
      <div className="badge"><Sparkles size={16}/> A little surprise for you</div>
      <div className="logo"><Heart fill="currentColor" size={34}/></div>
      <p className="eyebrow">DEAR MAWA</p>
      <h1>Susmitha, <span>your story</span><br/>is still beautiful.</h1>
      <p className="heroText">This little page is a reminder that one painful chapter cannot decide your whole life. Take your time, keep faith and keep smiling.</p>
      <button className="primary" onClick={showSurprise}><Gift size={19}/> Open Your Surprise</button>
      <a className="scroll" href="#messages"><ArrowDown size={16}/> Read something for you</a>
    </section>

    <section className="promise">
      <div className="promiseIcon"><ShieldCheck size={28}/></div>
      <div><p className="mini">ONE THING TO REMEMBER</p><h2>You are not defined by what you lost.</h2><p>What you deserve is peace, respect, genuine love and a future that makes your heart happy.</p></div>
    </section>

    <section id="messages" className="section">
      <div className="heading"><p className="eyebrow">OPEN THEM ONE BY ONE</p><h2>Little messages for your heart 💕</h2><p>Tap any card. There is a message waiting for you.</p></div>
      <div className="cards">{messages.map(([icon,title,text],i)=><button key={title} className={`card ${open===i?"active":""}`} onClick={()=>setOpen(open===i?null:i)}>
        <div className="cardTop"><span className="msgIcon">{icon}</span><span className="num">{String(i+1).padStart(2,"0")}</span></div>
        <h3>{title}</h3><span className="read">{open===i?"Close":"Tap to read →"}</span>
        {open===i&&<p className="cardText">{text}</p>}
      </button>)}</div>
    </section>

    <section className="faith">
      <div className="sun"><Sun size={30}/></div><p className="eyebrow">KEEP FAITH</p>
      <h2>Maybe God is preparing a better chapter.</h2>
      <p>You do not need to know everything today. Keep walking, keep praying, keep growing and let time do its work.</p>
      <div className="stars"><Star fill="currentColor"/><Star fill="currentColor" size={22}/><Star fill="currentColor" size={14}/></div>
    </section>

    <section className="final"><div className="finalCard">
      <Heart fill="currentColor" size={30}/><p className="eyebrow">A FINAL WISH FOR YOU</p><h2>Dear Mawa,</h2>
      <p>May God remove your pain, give you strength, bring your smile back and bless you with a beautiful future.</p>
      <p>May He bless you with a good-hearted husband who truly understands you, respects you, supports you and stands beside you through every situation.</p>
      <strong>Your story is not over. The best chapters are still waiting to be written. 🌸</strong>
      <div className="signature">With lots of good wishes ❤️</div>
    </div></section>
    <footer>Made with good wishes for Mawa (Susmitha) • Keep smiling 🌷</footer>

    {surprise&&<div className="backdrop" onClick={()=>setSurprise(false)}><div className="modal" onClick={e=>e.stopPropagation()}>
      <div className="modalIcon"><Sparkles size={30}/></div><p className="eyebrow">YOUR SURPRISE MESSAGE</p>
      <h2>Mawa, better days are coming. 💖</h2>
      <p>Whatever happened, please do not lose yourself because of it. Your happiness, dreams and future are still yours. God is with you. Keep your heart peaceful and your hopes high.</p>
      <p className="highlight">One day, you will smile and say: “I am glad I did not give up on myself.”</p>
      <button className="primary small" onClick={()=>setSurprise(false)}><RotateCcw size={17}/> Keep this message</button>
    </div></div>}
  </main>;
}
