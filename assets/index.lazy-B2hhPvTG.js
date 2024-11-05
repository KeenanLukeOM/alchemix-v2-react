const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Scene-CU3dvIki.js","assets/index-C7sCvMa2.js","assets/index-CUWRhy-9.css"])))=>i.map(i=>d[i]);
import{z as i,ag as E,bc as ne,bd as _,j as e,be as v,bf as h,bg as A,bh as oe,bi as ie,bj as le,bk as ce,bl as de,bm as ue,bn as ge,bo as xe,bp as pe,bq as w,ap as p,br as fe,ac as me,B as b,bs as he,bt as ve,a8 as ye,c as be}from"./index-C7sCvMa2.js";function je(t,a,s){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Ne={some:0,all:1};function we(t,a,{root:s,margin:r,amount:n="some"}={}){const o=je(t),l=new WeakMap,c=x=>{x.forEach(u=>{const m=l.get(u.target);if(u.isIntersecting!==!!m)if(u.isIntersecting){const P=a(u);typeof P=="function"?l.set(u.target,P):d.unobserve(u.target)}else m&&(m(u),l.delete(u.target))})},d=new IntersectionObserver(c,{root:s,rootMargin:r,threshold:typeof n=="number"?n:Ne[n]});return o.forEach(x=>d.observe(x)),()=>d.disconnect()}function N(t,{root:a,margin:s,amount:r,once:n=!1}={}){const[o,l]=i.useState(!1);return i.useEffect(()=>{if(!t.current||n&&o)return;const c=()=>(l(!0),n?void 0:()=>l(!1)),d={root:a&&a.current||void 0,margin:s,amount:r};return we(t.current,c,d)},[a,t,s,n,r]),o}/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=E("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var C="Dialog",[M,at]=ne(C),[_e,g]=M(C),S=t=>{const{__scopeDialog:a,children:s,open:r,defaultOpen:n,onOpenChange:o,modal:l=!0}=t,c=i.useRef(null),d=i.useRef(null),[x=!1,u]=pe({prop:r,defaultProp:n,onChange:o});return e.jsx(_e,{scope:a,triggerRef:c,contentRef:d,contentId:w(),titleId:w(),descriptionId:w(),open:x,onOpenChange:u,onOpenToggle:i.useCallback(()=>u(m=>!m),[u]),modal:l,children:s})};S.displayName=C;var F="DialogTrigger",L=i.forwardRef((t,a)=>{const{__scopeDialog:s,...r}=t,n=g(F,s),o=_(a,n.triggerRef);return e.jsx(v.button,{type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":O(n.open),...r,ref:o,onClick:h(t.onClick,n.onOpenToggle)})});L.displayName=F;var R="DialogPortal",[Ae,W]=M(R,{forceMount:void 0}),$=t=>{const{__scopeDialog:a,forceMount:s,children:r,container:n}=t,o=g(R,a);return e.jsx(Ae,{scope:a,forceMount:s,children:i.Children.map(r,l=>e.jsx(A,{present:s||o.open,children:e.jsx(xe,{asChild:!0,container:n,children:l})}))})};$.displayName=R;var j="DialogOverlay",V=i.forwardRef((t,a)=>{const s=W(j,t.__scopeDialog),{forceMount:r=s.forceMount,...n}=t,o=g(j,t.__scopeDialog);return o.modal?e.jsx(A,{present:r||o.open,children:e.jsx(Ce,{...n,ref:a})}):null});V.displayName=j;var Ce=i.forwardRef((t,a)=>{const{__scopeDialog:s,...r}=t,n=g(j,s);return e.jsx(oe,{as:ie,allowPinchZoom:!0,shards:[n.contentRef],children:e.jsx(v.div,{"data-state":O(n.open),...r,ref:a,style:{pointerEvents:"auto",...r.style}})})}),f="DialogContent",G=i.forwardRef((t,a)=>{const s=W(f,t.__scopeDialog),{forceMount:r=s.forceMount,...n}=t,o=g(f,t.__scopeDialog);return e.jsx(A,{present:r||o.open,children:o.modal?e.jsx(Re,{...n,ref:a}):e.jsx(Ie,{...n,ref:a})})});G.displayName=f;var Re=i.forwardRef((t,a)=>{const s=g(f,t.__scopeDialog),r=i.useRef(null),n=_(a,s.contentRef,r);return i.useEffect(()=>{const o=r.current;if(o)return le(o)},[]),e.jsx(H,{...t,ref:n,trapFocus:s.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:h(t.onCloseAutoFocus,o=>{var l;o.preventDefault(),(l=s.triggerRef.current)==null||l.focus()}),onPointerDownOutside:h(t.onPointerDownOutside,o=>{const l=o.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&o.preventDefault()}),onFocusOutside:h(t.onFocusOutside,o=>o.preventDefault())})}),Ie=i.forwardRef((t,a)=>{const s=g(f,t.__scopeDialog),r=i.useRef(!1),n=i.useRef(!1);return e.jsx(H,{...t,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var l,c;(l=t.onCloseAutoFocus)==null||l.call(t,o),o.defaultPrevented||(r.current||(c=s.triggerRef.current)==null||c.focus(),o.preventDefault()),r.current=!1,n.current=!1},onInteractOutside:o=>{var d,x;(d=t.onInteractOutside)==null||d.call(t,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const l=o.target;((x=s.triggerRef.current)==null?void 0:x.contains(l))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&n.current&&o.preventDefault()}})}),H=i.forwardRef((t,a)=>{const{__scopeDialog:s,trapFocus:r,onOpenAutoFocus:n,onCloseAutoFocus:o,...l}=t,c=g(f,s),d=i.useRef(null),x=_(a,d);return ce(),e.jsxs(e.Fragment,{children:[e.jsx(de,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:n,onUnmountAutoFocus:o,children:e.jsx(ue,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":O(c.open),...l,ref:x,onDismiss:()=>c.onOpenChange(!1)})}),e.jsxs(e.Fragment,{children:[e.jsx(Oe,{titleId:c.titleId}),e.jsx(Te,{contentRef:d,descriptionId:c.descriptionId})]})]})}),I="DialogTitle",q=i.forwardRef((t,a)=>{const{__scopeDialog:s,...r}=t,n=g(I,s);return e.jsx(v.h2,{id:n.titleId,...r,ref:a})});q.displayName=I;var Z="DialogDescription",U=i.forwardRef((t,a)=>{const{__scopeDialog:s,...r}=t,n=g(Z,s);return e.jsx(v.p,{id:n.descriptionId,...r,ref:a})});U.displayName=Z;var X="DialogClose",Y=i.forwardRef((t,a)=>{const{__scopeDialog:s,...r}=t,n=g(X,s);return e.jsx(v.button,{type:"button",...r,ref:a,onClick:h(t.onClick,()=>n.onOpenChange(!1))})});Y.displayName=X;function O(t){return t?"open":"closed"}var K="DialogTitleWarning",[st,J]=ge(K,{contentName:f,titleName:I,docsSlug:"dialog"}),Oe=({titleId:t})=>{const a=J(K),s=`\`${a.contentName}\` requires a \`${a.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${a.docsSlug}`;return i.useEffect(()=>{t&&(document.getElementById(t)||console.error(s))},[s,t]),null},Pe="DialogDescriptionWarning",Te=({contentRef:t,descriptionId:a})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${J(Pe).contentName}}.`;return i.useEffect(()=>{var o;const n=(o=t.current)==null?void 0:o.getAttribute("aria-describedby");a&&n&&(document.getElementById(a)||console.warn(r))},[r,t,a]),null},Be=S,ze=L,Me=$,Q=V,ee=G,te=q,ae=U,Se=Y;const Fe=Be,Le=ze,We=Me,se=i.forwardRef(({className:t,...a},s)=>e.jsx(Q,{ref:s,className:p("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...a}));se.displayName=Q.displayName;const re=i.forwardRef(({className:t,children:a,...s},r)=>e.jsxs(We,{children:[e.jsx(se,{}),e.jsxs(ee,{ref:r,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-amber-50 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-neutral-800 dark:bg-neutral-950 sm:rounded-lg",t),...s,children:[a,e.jsxs(Se,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",children:[e.jsx(Ee,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));re.displayName=ee.displayName;const $e=i.forwardRef(({className:t,...a},s)=>e.jsx(te,{ref:s,className:p("text-lg font-semibold leading-none tracking-tight",t),...a}));$e.displayName=te.displayName;const Ve=i.forwardRef(({className:t,...a},s)=>e.jsx(ae,{ref:s,className:p("text-sm text-neutral-500 dark:text-neutral-400",t),...a}));Ve.displayName=ae.displayName;const Ge=({delay:t,className:a})=>{const s=i.useRef(null),r=N(s,{once:!0});return e.jsxs(Fe,{children:[e.jsx("div",{ref:s,style:{transitionDelay:`${t}s`},className:p("transition-all [transition-duration:1.1s]",r?"blur(0px) opacity-100":"blur(10px) opacity-0",a),children:e.jsxs(Le,{className:"group relative inline-flex w-full items-center justify-center text-orange4",children:[e.jsx("img",{src:"./images/landing-page/ad_thumbnail.webp",alt:"Watch the Alchemix cinematic ad",className:"aspect-video w-full rounded-3xl object-cover"}),e.jsx("svg",{role:"img",className:"absolute h-32 w-32 self-center opacity-50 transition-opacity group-hover:opacity-100",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",children:e.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})]})}),e.jsx(re,{className:"aspect-video sm:max-w-4xl",children:e.jsx("div",{className:"isolate size-full overflow-hidden",children:e.jsx("iframe",{src:"https://www.youtube.com/embed/FlWP9FC8C3c",className:"size-full rounded-2xl",allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})})})]})},D=({children:t,className:a,delay:s})=>{const r=i.useRef(null),n=N(r,{once:!0});return e.jsx("h1",{ref:r,style:{transitionDelay:`${s}s`},className:p("transition-all duration-1000",n?"blur(0px) opacity-100":"blur(10px) opacity-0",a),children:t})},k=({children:t,className:a,delay:s})=>{const r=i.useRef(null),n=N(r,{once:!0});return e.jsx("p",{ref:r,style:{transitionDelay:`${s}s`},className:p("transition-all [transition-duration:1.1s]",n?"blur(0px) opacity-100":"blur(10px) opacity-0",a),children:t})},T=({delay:t=0})=>{const a=i.useRef(null),s=N(a,{once:!0});return e.jsx(fe,{ref:a,style:{transition:`opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1) ${t}s, color 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)`},to:"/vaults",className:p("group relative inline-flex h-11 animate-buttonMovingGradientBg cursor-pointer items-center justify-center self-start rounded-xl border-0 px-8 py-6 text-xl font-bold tracking-tight text-[#1BEAA5] transition-all","bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent]","bg-[linear-gradient(#0B0D12,#0B0D12),linear-gradient(#1BEAA5,#1BEAA5),linear-gradient(90deg,#1BEAA5,#1BEAA5,#1BEAA5,#1BEAA5,#1BEAA5)]",s?"opacity-100 blur-0":"opacity-0 blur-sm"),children:e.jsx("span",{className:"relative z-10",children:"GET A SELF-REPAYING LOAN"})})},He={left:{hidden:{x:"-20%",opacity:0},animate:{x:0,opacity:1}},bottom:{hidden:{y:"20%",opacity:0},animate:{y:0,opacity:1}},right:{hidden:{x:"20%",opacity:0},animate:{x:0,opacity:1}}},qe=({children:t,className:a,delay:s,direction:r="bottom"})=>e.jsx(me.div,{initial:"hidden",whileInView:"animate",viewport:{once:!0},variants:He[r],transition:{duration:1,delay:s},className:a,children:t}),B=[{name:"ETH",color:"#627EEA"},{name:"WSTETH",color:"#00A3FF"},{name:"RETH",color:"#ff0000"},{name:"DAI",color:"#f7b32b"},{name:"USDC",color:"#2775ca"},{name:"USDT",color:"#50af95"}],Ze=()=>e.jsxs("div",{className:"-mx-20 flex items-center overflow-x-clip",children:[e.jsx("div",{className:"flex min-w-full items-center justify-between lg:animate-scroll lg:pl-48",children:B.map(({name:t,color:a})=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{alt:t,src:`./images/icons/${t.toLowerCase()}.svg`,className:"h-20 w-20 min-w-full rounded-full border border-lightgrey10inverse dark:border-lightgrey10"}),e.jsx("div",{style:{background:a},className:"absolute inset-0 -z-10 size-full rounded-full blur-xl"})]},t))}),e.jsx("div",{className:"hidden min-w-full animate-scroll items-center justify-between lg:flex lg:pl-48",children:B.map(({name:t,color:a})=>e.jsxs("div",{className:"relative",children:[e.jsx("img",{alt:t,src:`./images/icons/${t.toLowerCase()}.svg`,className:"h-20 w-20 min-w-full rounded-full border border-lightgrey10inverse dark:border-lightgrey10"}),e.jsx("div",{style:{background:a},className:"absolute inset-0 -z-10 size-full rounded-full blur-xl"})]},t))})]}),Ue=t=>i.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("title",null,"Discord"),i.createElement("path",{d:"M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"})),Xe=[{title:"Twitter",description:"Stay up to date with the latest Alchemix news and community updates.",href:"#",cta:"Follow us on X",Icon:he,background:null,className:"lg:col-span-1 lg:row-span-1"},{title:"Discord",description:"Participate in active Alchemix community discussions and get user support.",href:"#",cta:"Join Discord",Icon:Ue,background:null,className:"lg:col-span-2 lg:row-span-1"},{title:"Documentation",description:"Build with us! Our documentation offers everything you need to get started.",href:"#",cta:"Read the docs",Icon:ve,background:null,className:"lg:col-span-2"},{title:"Newsletter",description:"News, stats and reports concocted by the Alchemix community.",href:"https://alchemixfi.substack.com/",cta:"Subscribe",Icon:ke,background:null,className:"lg:col-span-1"}],Ye=()=>e.jsx("div",{className:"grid w-full auto-rows-[15rem] grid-cols-3 gap-4",children:Xe.map(t=>e.jsx(Ke,{...t},t.title))}),Ke=({title:t,className:a,background:s,Icon:r,description:n,href:o,cta:l})=>e.jsxs("div",{className:p("group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl","bg-grey10inverse [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]","transform-gpu dark:bg-grey10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",a),children:[e.jsx("div",{children:s}),e.jsxs("div",{className:"pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10",children:[e.jsx(r,{className:"h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75"}),e.jsx("h3",{className:"text-xl font-semibold text-neutral-700 dark:text-neutral-300",children:t}),e.jsx("p",{className:"max-w-lg text-neutral-400",children:n})]}),e.jsx("div",{className:p("pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"),children:e.jsx(b,{variant:"ghost",asChild:!0,size:"sm",className:"pointer-events-auto bg-grey15inverse hover:bg-grey5inverse dark:bg-grey15 dark:hover:bg-grey5",children:e.jsxs("a",{href:o,children:[l,e.jsx(De,{className:"ml-2 h-4 w-4"})]})})}),e.jsx("div",{className:"pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"})]}),y={sm:640,md:768,lg:1024,xl:1280,"2xl":1536},z=()=>(window==null?void 0:window.innerWidth)||0,Je=()=>{const[t,a]=i.useState(z),s=i.useMemo(()=>Object.keys(y).reduce((l,c)=>t>=y[c]?c:l,"sm"),[t]),r=i.useCallback(l=>t>=y[l],[t]),n=i.useCallback(l=>t<y[l],[t]),o=i.useCallback(()=>{a(z)},[]);return i.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[o]),{currentBreakpoint:s,aboveBreakpoint:r,belowBreakpoint:n}},Qe=i.lazy(()=>ye(()=>import("./Scene-CU3dvIki.js"),__vite__mapDeps([0,1,2])).then(t=>({default:t.Scene}))),et=()=>{const{belowBreakpoint:t}=Je();return e.jsxs(e.Fragment,{children:[!t("xl")&&e.jsx("div",{className:"pointer-events-none fixed inset-0 left-0 top-0 -z-10 h-full w-full lg:pl-[352px]",children:e.jsx(i.Suspense,{fallback:null,children:e.jsx(Qe,{})})}),e.jsxs("div",{className:"relative flex flex-col space-y-0 font-alcxTitles",children:[e.jsxs("div",{className:"flex items-stretch justify-center gap-4 px-20 py-12",children:[e.jsxs("div",{className:"flex flex-1 flex-col items-stretch justify-center space-y-8 py-8",children:[e.jsx(D,{className:"inline-flex justify-center bg-gradient-to-br from-bronze4 via-bronze3 to-bronze4 bg-clip-text text-[72px] font-extrabold leading-tight tracking-normal text-transparent dark:bg-gradient-to-r dark:from-bronze1 dark:via-neutral-200 dark:to-bronze2",delay:.1,children:"Self-Repaying Loans, Without Liquidations"}),e.jsxs(k,{className:"text-2xl text-lightgrey10inverse dark:text-lightgrey10",delay:.2,children:["Alchemix loans automatically pay themselves off without",e.jsx("br",{}),"risk of liquidation. Unlock the potential of your assets with",e.jsx("br",{}),"secure and stress-free borrowing."]}),e.jsx(T,{delay:.2})]}),e.jsx(Ge,{delay:.3,className:"flex w-full flex-1 items-center justify-center"})]}),e.jsxs("div",{className:"flex flex-col gap-12 bg-gradient-to-br from-lightgrey5inverse to-lightgrey10inverse pt-12 dark:from-[#0B0D12] dark:to-[#171B24]",children:[e.jsxs("div",{className:"flex items-center gap-4 px-20",children:[e.jsx("div",{className:"flex-1",children:e.jsx("img",{src:"images/landing-page/01_Flexible.png",alt:"Description of the image",className:"h-auto w-full",style:{maxWidth:"100%",height:"auto"}})}),e.jsxs(qe,{className:"flex-1 space-y-6",direction:"bottom",children:[e.jsx("h2",{className:"text-[58px] font-semibold",children:"Completely Flexible"}),e.jsx("p",{className:"pr-8 text-2xl text-lightgrey10inverse dark:text-lightgrey10",children:"Alchemix gives you full control of your finances with no hidden fees. Repay on your terms, keep your assets working for you, and borrow against your collateral to secure future yield."}),e.jsx(b,{variant:"cta",size:"cta",className:"rounded-xl bg-[#0B0D12] text-xl font-bold uppercase",children:"Explore our vaults"})]})]}),e.jsx("div",{className:"pl-20 text-5xl"}),e.jsxs("div",{className:"flex items-center gap-4 px-20 pb-12",children:[e.jsxs("div",{className:"flex-1 space-y-6 pl-8",children:[e.jsx("h2",{className:"text-[58px] font-semibold",children:"Zero Liquidations"}),e.jsx("p",{className:"text-2xl text-lightgrey10inverse dark:text-lightgrey10",children:"With Alchemix, market volatility won't touch your vault. Your debt is securely tied to your collateral, ensuring that price swings never put you at risk."}),e.jsx(b,{variant:"cta",size:"cta",className:"rounded-xl bg-[#0B0D12] text-xl font-bold uppercase",children:"Learn more"})]}),e.jsx("div",{className:"flex-1",children:e.jsx("img",{src:"images/landing-page/02_NoLiquidations.png",alt:"Zero Liquidations",className:"h-auto w-full",style:{maxWidth:"100%",height:"auto"}})})]})]}),e.jsxs("div",{className:"flex w-full items-center gap-4 rounded-sm px-20 py-12",children:[e.jsxs("div",{className:"flex-1 space-y-6 pl-8",children:[e.jsx("h2",{className:"text-[58px] font-semibold",children:"Security First"}),e.jsx("p",{className:"text-2xl text-lightgrey10inverse dark:text-lightgrey10",children:"We are the original battle-tested DeFi platform with a priority of asset protection. As a pioneer in DeFi, we ensure your assets are preserved at every step."}),e.jsx(b,{variant:"cta",size:"cta",className:"rounded-xl bg-[#0B0D12] text-xl font-bold uppercase",children:"Explore our audits"})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center",children:e.jsx("div",{className:"w-full rounded",children:e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/03_Padlock.png",alt:"Lock vector image",className:"h-auto w-full",loading:"lazy"})})})]}),e.jsxs("div",{className:"z-0 flex flex-col gap-14 bg-gradient-to-br from-lightgrey5inverse to-lightgrey10inverse px-20 py-12 pt-12 text-center dark:from-[#0B0D12] dark:to-[#171B24]",children:[e.jsxs("div",{children:[e.jsx(D,{className:"text-5xl font-bold",children:"Your Favorite Tokens (SECTION FOR TORBIK)"}),e.jsx(k,{className:"text-xl text-lightgrey10inverse dark:text-lightgrey10",delay:.2,children:"Borrow up to 50% of your collateral"})]}),e.jsx(Ze,{}),e.jsxs("div",{className:"flex w-full items-center gap-4 px-0 py-48",children:[e.jsxs("div",{className:"flex-1 space-y-6 pl-8 text-left",children:[e.jsx(D,{className:"whitespace-nowrap text-[58px] font-semibold",children:"Get Started With Alchemix"}),e.jsx(k,{className:"text-2xl font-semibold text-lightgrey10inverse dark:text-lightgrey10",children:"Alchemix's self-repaying loans automatically pay themselves off using the interest earned on your initial deposit. Borrow against your assets, earn yield on the full deposit amount, and enjoy the ability to spend and save at the same time."}),e.jsx(T,{})]}),e.jsx("div",{className:"flex flex-1 items-center justify-center",children:e.jsx("img",{src:"./images/landing-page/AlchemixLogoPlaceholder.png",alt:"Alchemix",className:"rounded-full",style:{width:"300px",height:"300px"}})})]}),e.jsxs("div",{className:"-mt-24 flex flex-col items-stretch justify-center gap-4 lg:flex-row",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/1.png",alt:"Deposit",className:"h-full w-full rounded-3xl object-contain transition-opacity duration-300 ease-in-out"}),e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/1-hover.png",alt:"Deposit Hover",className:"absolute inset-0 h-full w-full rounded-3xl object-contain opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/2.png",alt:"Earn",className:"h-full w-full rounded-3xl object-contain transition-opacity duration-300 ease-in-out"}),e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/2-hover.png",alt:"Earn Hover",className:"absolute inset-0 h-full w-full rounded-3xl object-contain opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/3.png",alt:"Access",className:"h-full w-full rounded-3xl object-contain transition-opacity duration-300 ease-in-out"}),e.jsx("img",{src:"/alchemix-v2-react/images/landing-page/3-hover.png",alt:"Access Hover",className:"absolute inset-0 h-full w-full rounded-3xl object-contain opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"})]})]}),e.jsxs("div",{className:"space-y-8 text-start",children:[e.jsx("h2",{className:"text-center text-5xl font-semibold",children:"A Thriving Ecosystem"}),e.jsx("div",{className:"px-44",children:e.jsx(Ye,{})})]})]})]})]})},rt=be("/")({component:et});export{rt as Route};
