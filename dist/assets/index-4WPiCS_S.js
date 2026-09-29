import{r as c,j as r,a as l,S as X,N as _,b as F}from"./index-BaAY1MfI.js";import{a as B}from"./anime.es-BNELU3II.js";const T=12,D=300,I="187, 204, 215",O=768,G=[{color:"#120F17",title:"Analytics",description:"Track user behavior",label:"Insights"},{color:"#120F17",title:"Dashboard",description:"Centralized data view",label:"Overview"},{color:"#120F17",title:"Collaboration",description:"Work together seamlessly",label:"Teamwork"},{color:"#120F17",title:"Automation",description:"Streamline workflows",label:"Efficiency"},{color:"#120F17",title:"Integration",description:"Connect favorite tools",label:"Connectivity"},{color:"#120F17",title:"Security",description:"Enterprise-grade protection",label:"Protection"}],z=(t,f,d=I)=>{const x=document.createElement("div");return x.className="particle",x.style.cssText=`
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${d}, 1);
    box-shadow: 0 0 6px rgba(${d}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${t}px;
    top: ${f}px;
  `,x},W=t=>({proximity:t*.5,fadeDistance:t*.75}),H=(t,f,d,x,b)=>{const s=t.getBoundingClientRect(),E=(f-s.left)/s.width*100,w=(d-s.top)/s.height*100;t.style.setProperty("--glow-x",`${E}%`),t.style.setProperty("--glow-y",`${w}%`),t.style.setProperty("--glow-intensity",x.toString()),t.style.setProperty("--glow-radius",`${b}px`)},U=({children:t,className:f="",disableAnimations:d=!1,style:x,particleCount:b=T,glowColor:s=I,enableTilt:E=!0,clickEffect:w=!1,enableMagnetism:k=!1})=>{const g=c.useRef(null),o=c.useRef([]),v=c.useRef([]),y=c.useRef(!1),P=c.useRef([]),$=c.useRef(!1),M=c.useRef(null),C=c.useCallback(()=>{if($.current||!g.current)return;const{width:e,height:m}=g.current.getBoundingClientRect();P.current=Array.from({length:b},()=>z(Math.random()*e,Math.random()*m,s)),$.current=!0},[b,s]),R=c.useCallback(()=>{var e;v.current.forEach(clearTimeout),v.current=[],(e=M.current)==null||e.kill(),o.current.forEach(m=>{l.to(m,{scale:0,opacity:0,duration:.3,ease:"back.in(1.7)",onComplete:()=>{var h;(h=m.parentNode)==null||h.removeChild(m)}})}),o.current=[]},[]),j=c.useCallback(()=>{!g.current||!y.current||($.current||C(),P.current.forEach((e,m)=>{const h=setTimeout(()=>{if(!y.current||!g.current)return;const A=e.cloneNode(!0);g.current.appendChild(A),o.current.push(A),l.fromTo(A,{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(1.7)"}),l.to(A,{x:(Math.random()-.5)*100,y:(Math.random()-.5)*100,rotation:Math.random()*360,duration:2+Math.random()*2,ease:"none",repeat:-1,yoyo:!0}),l.to(A,{opacity:.3,duration:1.5,ease:"power2.inOut",repeat:-1,yoyo:!0})},m*100);v.current.push(h)}))},[C]);return c.useEffect(()=>{if(d||!g.current)return;const e=g.current,m=()=>{y.current=!0,j(),E&&l.to(e,{rotateX:5,rotateY:5,duration:.3,ease:"power2.out",transformPerspective:1e3})},h=()=>{y.current=!1,R(),E&&l.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),k&&l.to(e,{x:0,y:0,duration:.3,ease:"power2.out"})},A=i=>{if(!E&&!k)return;const n=e.getBoundingClientRect(),a=i.clientX-n.left,u=i.clientY-n.top,p=n.width/2,L=n.height/2;if(E){const N=(u-L)/L*-10,Y=(a-p)/p*10;l.to(e,{rotateX:N,rotateY:Y,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(k){const N=(a-p)*.05,Y=(u-L)*.05;M.current=l.to(e,{x:N,y:Y,duration:.3,ease:"power2.out"})}},S=i=>{if(!w)return;const n=e.getBoundingClientRect(),a=i.clientX-n.left,u=i.clientY-n.top,p=Math.max(Math.hypot(a,u),Math.hypot(a-n.width,u),Math.hypot(a,u-n.height),Math.hypot(a-n.width,u-n.height)),L=document.createElement("div");L.style.cssText=`
        position: absolute;
        width: ${p*2}px;
        height: ${p*2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${s}, 0.4) 0%, rgba(${s}, 0.2) 30%, transparent 70%);
        left: ${a-p}px;
        top: ${u-p}px;
        pointer-events: none;
        z-index: 1000;
      `,e.appendChild(L),l.fromTo(L,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>L.remove()})};return e.addEventListener("mouseenter",m),e.addEventListener("mouseleave",h),e.addEventListener("mousemove",A),e.addEventListener("click",S),()=>{y.current=!1,e.removeEventListener("mouseenter",m),e.removeEventListener("mouseleave",h),e.removeEventListener("mousemove",A),e.removeEventListener("click",S),R()}},[j,R,d,E,k,w,s]),r.jsx("div",{ref:g,className:`${f} particle-container`,style:{...x,position:"relative",overflow:"hidden"},children:t})},V=({gridRef:t,disableAnimations:f=!1,enabled:d=!0,spotlightRadius:x=D,glowColor:b=I})=>{const s=c.useRef(null),E=c.useRef(!1);return c.useEffect(()=>{if(f||!(t!=null&&t.current)||!d)return;const w=document.createElement("div");w.className="global-spotlight",w.style.cssText=`
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${b}, 0.15) 0%,
        rgba(${b}, 0.08) 15%,
        rgba(${b}, 0.04) 25%,
        rgba(${b}, 0.02) 40%,
        rgba(${b}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `,document.body.appendChild(w),s.current=w;const k=o=>{if(!s.current||!t.current)return;const v=t.current.closest(".bento-section"),y=v==null?void 0:v.getBoundingClientRect(),P=y&&o.clientX>=y.left&&o.clientX<=y.right&&o.clientY>=y.top&&o.clientY<=y.bottom;E.current=P||!1;const $=t.current.querySelectorAll(".magic-bento-card");if(!P){l.to(s.current,{opacity:0,duration:.3,ease:"power2.out"}),$.forEach(e=>{e.style.setProperty("--glow-intensity","0")});return}const{proximity:M,fadeDistance:C}=W(x);let R=1/0;$.forEach(e=>{const m=e,h=m.getBoundingClientRect(),A=h.left+h.width/2,S=h.top+h.height/2,i=Math.hypot(o.clientX-A,o.clientY-S)-Math.max(h.width,h.height)/2,n=Math.max(0,i);R=Math.min(R,n);let a=0;n<=M?a=1:n<=C&&(a=(C-n)/(C-M)),H(m,o.clientX,o.clientY,a,x)}),l.to(s.current,{left:o.clientX,top:o.clientY,duration:.1,ease:"power2.out"});const j=R<=M?.8:R<=C?(C-R)/(C-M)*.8:0;l.to(s.current,{opacity:j,duration:j>0?.2:.5,ease:"power2.out"})},g=()=>{var o;E.current=!1,(o=t.current)==null||o.querySelectorAll(".magic-bento-card").forEach(v=>{v.style.setProperty("--glow-intensity","0")}),s.current&&l.to(s.current,{opacity:0,duration:.3,ease:"power2.out"})};return document.addEventListener("mousemove",k),document.addEventListener("mouseleave",g),()=>{var o,v;document.removeEventListener("mousemove",k),document.removeEventListener("mouseleave",g),(v=(o=s.current)==null?void 0:o.parentNode)==null||v.removeChild(s.current)}},[t,f,d,x,b]),null},q=({children:t,gridRef:f})=>r.jsx("div",{className:"card-grid bento-section",ref:f,children:t}),J=()=>{const[t,f]=c.useState(!1);return c.useEffect(()=>{const d=()=>f(window.innerWidth<=O);return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),t},K=({textAutoHide:t=!0,enableStars:f=!0,enableSpotlight:d=!0,enableBorderGlow:x=!0,disableAnimations:b=!1,spotlightRadius:s=D,particleCount:E=T,enableTilt:w=!1,glowColor:k=I,clickEffect:g=!0,enableMagnetism:o=!0,cards:v})=>{const y=c.useRef(null);J();const P=b,$=v??G;return r.jsxs(r.Fragment,{children:[d&&r.jsx(V,{gridRef:y,disableAnimations:P,enabled:d,spotlightRadius:s,glowColor:k}),r.jsx(q,{gridRef:y,children:$.map((M,C)=>{const j={className:`magic-bento-card ${t?"magic-bento-card--text-autohide":""} ${x?"magic-bento-card--border-glow":""}`,style:{"--glow-color":k}};return f?r.jsx(U,{...j,disableAnimations:P,particleCount:E,glowColor:k,enableTilt:w,clickEffect:g,enableMagnetism:o,children:r.jsxs("div",{className:"magic-bento-card__content",children:[r.jsx("h3",{className:"hero-heading magic-bento-card__title",children:M.title}),r.jsx("p",{className:"magic-bento-card__description",children:M.description})]})},C):r.jsx("div",{...j,ref:e=>{if(!e)return;const m=S=>{if(P)return;const i=e.getBoundingClientRect(),n=S.clientX-i.left,a=S.clientY-i.top,u=i.width/2,p=i.height/2;if(w){const L=(a-p)/p*-10,N=(n-u)/u*10;l.to(e,{rotateX:L,rotateY:N,duration:.1,ease:"power2.out",transformPerspective:1e3})}if(o){const L=(n-u)*.05,N=(a-p)*.05;l.to(e,{x:L,y:N,duration:.3,ease:"power2.out"})}},h=()=>{P||(w&&l.to(e,{rotateX:0,rotateY:0,duration:.3,ease:"power2.out"}),o&&l.to(e,{x:0,y:0,duration:.3,ease:"power2.out"}))},A=S=>{if(!g||P)return;const i=e.getBoundingClientRect(),n=S.clientX-i.left,a=S.clientY-i.top,u=Math.max(Math.hypot(n,a),Math.hypot(n-i.width,a),Math.hypot(n,a-i.height),Math.hypot(n-i.width,a-i.height)),p=document.createElement("div");p.style.cssText=`
                    position: absolute;
                    width: ${u*2}px;
                    height: ${u*2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${k}, 0.4) 0%, rgba(${k}, 0.2) 30%, transparent 70%);
                    left: ${n-u}px;
                    top: ${a-u}px;
                    pointer-events: none;
                    z-index: 1000;
                  `,e.appendChild(p),l.fromTo(p,{scale:0,opacity:1},{scale:1,opacity:0,duration:.8,ease:"power2.out",onComplete:()=>p.remove()})};e.addEventListener("mousemove",m),e.addEventListener("mouseleave",h),e.addEventListener("click",A)},children:r.jsxs("div",{className:"magic-bento-card__content",children:[r.jsx("h3",{className:"hero-heading magic-bento-card__title",children:M.title}),r.jsx("p",{className:"magic-bento-card__description",children:M.description})]})},C)})})]})},Q=[{label:"AI/ML & RAG",title:"AI, Machine Learning & RAG",description:`1. Machine learning & deep learning (Python, PyTorch, TensorFlow, scikit-learn)
2. Retrieval-Augmented Generation (RAG) pipelines
3. NLP & Hugging Face Transformers
4. Agent workflows (CrewAI, LangChain)`},{label:"Computer Vision",title:"Computer Vision",description:`1. Object detection & image processing (YOLOv5, OpenCV)
2. Image analysis pipelines from preprocessing to evaluation
3. Segmentation & DSP (Coursework)`},{label:"Workflow Automation",title:"Workflow Automation",description:`1. n8n workflows for form intake, task routing, and email updates
2. Human-in-the-loop review steps
3. API integrations and agent orchestration`},{label:"Web Development",title:"Web Development",description:`1. Frontend development (React, TypeScript, HTML/CSS/JS)
2. Backend services (FastAPI, Flask)
3. WordPress websites`},{label:"Tools & Methods",title:"Tools & Methods",description:`1. Vector databases (ChromaDB, FAISS)
2. Model serving & containerisation (FastAPI, Docker)
3. Cloud & version control (AWS, Git/GitHub)`}];function te(){const t=c.useRef(null);return c.useEffect(()=>{B.timeline({easing:"easeOutExpo"}).add({targets:".skills-header",translateY:[-40,0],opacity:[0,1],duration:1e3}).add({targets:".skills-bento-wrapper",translateY:[40,0],opacity:[0,1],duration:800},"-=600")},[]),r.jsxs("div",{className:"skills-page-wrapper",ref:t,children:[r.jsx(X,{path:"/skills"}),r.jsx(_,{}),r.jsxs("div",{className:"skills-content",children:[r.jsx("h1",{className:"hero-heading skills-header font-black uppercase tracking-tight leading-none text-[10vw] sm:text-[8vw] md:text-[6vw] mb-4",children:"AI & Automation"}),r.jsx("p",{className:"skills-header text-[#D7E2EA] font-light uppercase tracking-wide opacity-80 max-w-2xl mb-12",children:"My work spans AI, automation, computer vision, and web development. Project links show where each skill has been applied. Coursework areas are labeled separately."}),r.jsx("div",{className:"skills-bento-wrapper opacity-0",children:r.jsx(K,{cards:Q,textAutoHide:!1,enableStars:!0,enableSpotlight:!0,enableBorderGlow:!0,enableTilt:!0,enableMagnetism:!0,clickEffect:!0,spotlightRadius:300,particleCount:12,glowColor:"132, 0, 255"})}),r.jsx(F,{})]})]})}export{te as default};
