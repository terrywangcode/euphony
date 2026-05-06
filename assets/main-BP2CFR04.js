import{A as is,E as Jt,r as M,b as d,i as he,a as Z,n as h,u as mn,c as ie,d as Sa,t as ye,g as kt,e as Qt,R as we,f as ni,h as Mr,B as Sr,p as $a,j as bn,k as _a}from"./pagination-C97MPWa5.js";const Ea=["top","right","bottom","left"],Tt=Math.min,He=Math.max,ns=Math.round,jo=Math.floor,rt=e=>({x:e,y:e}),La={left:"right",right:"left",bottom:"top",top:"bottom"};function ri(e,t,o){return He(e,Tt(t,o))}function Nt(e,t){return typeof e=="function"?e(t):e}function Mt(e){return e.split("-")[0]}function so(e){return e.split("-")[1]}function $r(e){return e==="x"?"y":"x"}function Ci(e){return e==="y"?"height":"width"}function ht(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function Ti(e){return $r(ht(e))}function Aa(e,t,o){o===void 0&&(o=!1);const s=so(e),i=Ti(e),n=Ci(i);let r=i==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(r=rs(r)),[r,rs(r)]}function Ra(e){const t=rs(e);return[ai(e),t,ai(t)]}function ai(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const vn=["left","right"],yn=["right","left"],Pa=["top","bottom"],Da=["bottom","top"];function za(e,t,o){switch(e){case"top":case"bottom":return o?t?yn:vn:t?vn:yn;case"left":case"right":return t?Pa:Da;default:return[]}}function Ia(e,t,o,s){const i=so(e);let n=za(Mt(e),o==="start",s);return i&&(n=n.map(r=>r+"-"+i),t&&(n=n.concat(n.map(ai)))),n}function rs(e){const t=Mt(e);return La[t]+e.slice(t.length)}function Oa(e){return{top:0,right:0,bottom:0,left:0,...e}}function _r(e){return typeof e!="number"?Oa(e):{top:e,right:e,bottom:e,left:e}}function as(e){const{x:t,y:o,width:s,height:i}=e;return{width:s,height:i,top:o,left:t,right:t+s,bottom:o+i,x:t,y:o}}function wn(e,t,o){let{reference:s,floating:i}=e;const n=ht(t),r=Ti(t),a=Ci(r),c=Mt(t),l=n==="y",u=s.x+s.width/2-i.width/2,f=s.y+s.height/2-i.height/2,k=s[a]/2-i[a]/2;let y;switch(c){case"top":y={x:u,y:s.y-i.height};break;case"bottom":y={x:u,y:s.y+s.height};break;case"right":y={x:s.x+s.width,y:f};break;case"left":y={x:s.x-i.width,y:f};break;default:y={x:s.x,y:s.y}}switch(so(t)){case"start":y[r]-=k*(o&&l?-1:1);break;case"end":y[r]+=k*(o&&l?-1:1);break}return y}async function Ba(e,t){var o;t===void 0&&(t={});const{x:s,y:i,platform:n,rects:r,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:k=!1,padding:y=0}=Nt(t,e),v=_r(y),E=a[k?f==="floating"?"reference":"floating":f],$=as(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(E)))==null||o?E:E.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),b=f==="floating"?{x:s,y:i,width:r.floating.width,height:r.floating.height}:r.reference,m=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),x=await(n.isElement==null?void 0:n.isElement(m))?await(n.getScale==null?void 0:n.getScale(m))||{x:1,y:1}:{x:1,y:1},T=as(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:m,strategy:c}):b);return{top:($.top-T.top+v.top)/x.y,bottom:(T.bottom-$.bottom+v.bottom)/x.y,left:($.left-T.left+v.left)/x.x,right:(T.right-$.right+v.right)/x.x}}const Fa=50,Na=async(e,t,o)=>{const{placement:s="bottom",strategy:i="absolute",middleware:n=[],platform:r}=o,a=r.detectOverflow?r:{...r,detectOverflow:Ba},c=await(r.isRTL==null?void 0:r.isRTL(t));let l=await r.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=wn(l,s,c),k=s,y=0;const v={};for(let C=0;C<n.length;C++){const E=n[C];if(!E)continue;const{name:$,fn:b}=E,{x:m,y:x,data:T,reset:w}=await b({x:u,y:f,initialPlacement:s,placement:k,strategy:i,middlewareData:v,rects:l,platform:a,elements:{reference:e,floating:t}});u=m??u,f=x??f,v[$]={...v[$],...T},w&&y<Fa&&(y++,typeof w=="object"&&(w.placement&&(k=w.placement),w.rects&&(l=w.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:u,y:f}=wn(l,k,c)),C=-1)}return{x:u,y:f,placement:k,strategy:i,middlewareData:v}},Ha=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:s,placement:i,rects:n,platform:r,elements:a,middlewareData:c}=t,{element:l,padding:u=0}=Nt(e,t)||{};if(l==null)return{};const f=_r(u),k={x:o,y:s},y=Ti(i),v=Ci(y),C=await r.getDimensions(l),E=y==="y",$=E?"top":"left",b=E?"bottom":"right",m=E?"clientHeight":"clientWidth",x=n.reference[v]+n.reference[y]-k[y]-n.floating[v],T=k[y]-n.reference[y],w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let S=w?w[m]:0;(!S||!await(r.isElement==null?void 0:r.isElement(w)))&&(S=a.floating[m]||n.floating[v]);const A=x/2-T/2,L=S/2-C[v]/2-1,B=Tt(f[$],L),O=Tt(f[b],L),P=B,oe=S-C[v]-O,U=S/2-C[v]/2+A,pe=ri(P,U,oe),be=!c.arrow&&so(i)!=null&&U!==pe&&n.reference[v]/2-(U<P?B:O)-C[v]/2<0,re=be?U<P?U-P:U-oe:0;return{[y]:k[y]+re,data:{[y]:pe,centerOffset:U-pe-re,...be&&{alignmentOffset:re}},reset:be}}}),Ua=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,s;const{placement:i,middlewareData:n,rects:r,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:k,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:C=!0,...E}=Nt(e,t);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const $=Mt(i),b=ht(a),m=Mt(a)===a,x=await(c.isRTL==null?void 0:c.isRTL(l.floating)),T=k||(m||!C?[rs(a)]:Ra(a)),w=v!=="none";!k&&w&&T.push(...Ia(a,C,v,x));const S=[a,...T],A=await c.detectOverflow(t,E),L=[];let B=((s=n.flip)==null?void 0:s.overflows)||[];if(u&&L.push(A[$]),f){const U=Aa(i,r,x);L.push(A[U[0]],A[U[1]])}if(B=[...B,{placement:i,overflows:L}],!L.every(U=>U<=0)){var O,P;const U=(((O=n.flip)==null?void 0:O.index)||0)+1,pe=S[U];if(pe&&(!(f==="alignment"?b!==ht(pe):!1)||B.every(N=>ht(N.placement)===b?N.overflows[0]>0:!0)))return{data:{index:U,overflows:B},reset:{placement:pe}};let be=(P=B.filter(re=>re.overflows[0]<=0).sort((re,N)=>re.overflows[1]-N.overflows[1])[0])==null?void 0:P.placement;if(!be)switch(y){case"bestFit":{var oe;const re=(oe=B.filter(N=>{if(w){const G=ht(N.placement);return G===b||G==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(G=>G>0).reduce((G,ce)=>G+ce,0)]).sort((N,G)=>N[1]-G[1])[0])==null?void 0:oe[0];re&&(be=re);break}case"initialPlacement":be=a;break}if(i!==be)return{reset:{placement:be}}}return{}}}};function xn(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function kn(e){return Ea.some(t=>e[t]>=0)}const Wa=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:o,platform:s}=t,{strategy:i="referenceHidden",...n}=Nt(e,t);switch(i){case"referenceHidden":{const r=await s.detectOverflow(t,{...n,elementContext:"reference"}),a=xn(r,o.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:kn(a)}}}case"escaped":{const r=await s.detectOverflow(t,{...n,altBoundary:!0}),a=xn(r,o.floating);return{data:{escapedOffsets:a,escaped:kn(a)}}}default:return{}}}}},qa=new Set(["left","top"]);async function ja(e,t){const{placement:o,platform:s,elements:i}=e,n=await(s.isRTL==null?void 0:s.isRTL(i.floating)),r=Mt(o),a=so(o),c=ht(o)==="y",l=qa.has(r)?-1:1,u=n&&c?-1:1,f=Nt(t,e);let{mainAxis:k,crossAxis:y,alignmentAxis:v}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof v=="number"&&(y=a==="end"?v*-1:v),c?{x:y*u,y:k*l}:{x:k*l,y:y*u}}const Va=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,s;const{x:i,y:n,placement:r,middlewareData:a}=t,c=await ja(t,e);return r===((o=a.offset)==null?void 0:o.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:i+c.x,y:n+c.y,data:{...c,placement:r}}}}},Ga=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:s,placement:i,platform:n}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:c={fn:$=>{let{x:b,y:m}=$;return{x:b,y:m}}},...l}=Nt(e,t),u={x:o,y:s},f=await n.detectOverflow(t,l),k=ht(Mt(i)),y=$r(k);let v=u[y],C=u[k];if(r){const $=y==="y"?"top":"left",b=y==="y"?"bottom":"right",m=v+f[$],x=v-f[b];v=ri(m,v,x)}if(a){const $=k==="y"?"top":"left",b=k==="y"?"bottom":"right",m=C+f[$],x=C-f[b];C=ri(m,C,x)}const E=c.fn({...t,[y]:v,[k]:C});return{...E,data:{x:E.x-o,y:E.y-s,enabled:{[y]:r,[k]:a}}}}}},Za=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,s;const{placement:i,rects:n,platform:r,elements:a}=t,{apply:c=()=>{},...l}=Nt(e,t),u=await r.detectOverflow(t,l),f=Mt(i),k=so(i),y=ht(i)==="y",{width:v,height:C}=n.floating;let E,$;f==="top"||f==="bottom"?(E=f,$=k===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):($=f,E=k==="end"?"top":"bottom");const b=C-u.top-u.bottom,m=v-u.left-u.right,x=Tt(C-u[E],b),T=Tt(v-u[$],m),w=!t.middlewareData.shift;let S=x,A=T;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(A=m),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(S=b),w&&!k){const B=He(u.left,0),O=He(u.right,0),P=He(u.top,0),oe=He(u.bottom,0);y?A=v-2*(B!==0||O!==0?B+O:He(u.left,u.right)):S=C-2*(P!==0||oe!==0?P+oe:He(u.top,u.bottom))}await c({...t,availableWidth:A,availableHeight:S});const L=await r.getDimensions(a.floating);return v!==L.width||C!==L.height?{reset:{rects:!0}}:{}}}};function vs(){return typeof window<"u"}function io(e){return Er(e)?(e.nodeName||"").toLowerCase():"#document"}function Ue(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function lt(e){var t;return(t=(Er(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Er(e){return vs()?e instanceof Node||e instanceof Ue(e).Node:!1}function Ke(e){return vs()?e instanceof Element||e instanceof Ue(e).Element:!1}function mt(e){return vs()?e instanceof HTMLElement||e instanceof Ue(e).HTMLElement:!1}function Cn(e){return!vs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ue(e).ShadowRoot}function Ro(e){const{overflow:t,overflowX:o,overflowY:s,display:i}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+o)&&i!=="inline"&&i!=="contents"}function Ya(e){return/^(table|td|th)$/.test(io(e))}function ys(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Ja=/transform|translate|scale|rotate|perspective|filter/,Ka=/paint|layout|strict|content/,Dt=e=>!!e&&e!=="none";let Us;function ws(e){const t=Ke(e)?Xe(e):e;return Dt(t.transform)||Dt(t.translate)||Dt(t.scale)||Dt(t.rotate)||Dt(t.perspective)||!Mi()&&(Dt(t.backdropFilter)||Dt(t.filter))||Ja.test(t.willChange||"")||Ka.test(t.contain||"")}function Xa(e){let t=St(e);for(;mt(t)&&!eo(t);){if(ws(t))return t;if(ys(t))return null;t=St(t)}return null}function Mi(){return Us==null&&(Us=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Us}function eo(e){return/^(html|body|#document)$/.test(io(e))}function Xe(e){return Ue(e).getComputedStyle(e)}function xs(e){return Ke(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function St(e){if(io(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Cn(e)&&e.host||lt(e);return Cn(t)?t.host:t}function Lr(e){const t=St(e);return eo(t)?e.ownerDocument?e.ownerDocument.body:e.body:mt(t)&&Ro(t)?t:Lr(t)}function _o(e,t,o){var s;t===void 0&&(t=[]),o===void 0&&(o=!0);const i=Lr(e),n=i===((s=e.ownerDocument)==null?void 0:s.body),r=Ue(i);if(n){const a=li(r);return t.concat(r,r.visualViewport||[],Ro(i)?i:[],a&&o?_o(a):[])}else return t.concat(i,_o(i,[],o))}function li(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ar(e){const t=Xe(e);let o=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=mt(e),n=i?e.offsetWidth:o,r=i?e.offsetHeight:s,a=ns(o)!==n||ns(s)!==r;return a&&(o=n,s=r),{width:o,height:s,$:a}}function Si(e){return Ke(e)?e:e.contextElement}function Xt(e){const t=Si(e);if(!mt(t))return rt(1);const o=t.getBoundingClientRect(),{width:s,height:i,$:n}=Ar(t);let r=(n?ns(o.width):o.width)/s,a=(n?ns(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Qa=rt(0);function Rr(e){const t=Ue(e);return!Mi()||!t.visualViewport?Qa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function el(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==Ue(e)?!1:t}function It(e,t,o,s){t===void 0&&(t=!1),o===void 0&&(o=!1);const i=e.getBoundingClientRect(),n=Si(e);let r=rt(1);t&&(s?Ke(s)&&(r=Xt(s)):r=Xt(e));const a=el(n,o,s)?Rr(n):rt(0);let c=(i.left+a.x)/r.x,l=(i.top+a.y)/r.y,u=i.width/r.x,f=i.height/r.y;if(n){const k=Ue(n),y=s&&Ke(s)?Ue(s):s;let v=k,C=li(v);for(;C&&s&&y!==v;){const E=Xt(C),$=C.getBoundingClientRect(),b=Xe(C),m=$.left+(C.clientLeft+parseFloat(b.paddingLeft))*E.x,x=$.top+(C.clientTop+parseFloat(b.paddingTop))*E.y;c*=E.x,l*=E.y,u*=E.x,f*=E.y,c+=m,l+=x,v=Ue(C),C=li(v)}}return as({width:u,height:f,x:c,y:l})}function ks(e,t){const o=xs(e).scrollLeft;return t?t.left+o:It(lt(e)).left+o}function Pr(e,t){const o=e.getBoundingClientRect(),s=o.left+t.scrollLeft-ks(e,o),i=o.top+t.scrollTop;return{x:s,y:i}}function tl(e){let{elements:t,rect:o,offsetParent:s,strategy:i}=e;const n=i==="fixed",r=lt(s),a=t?ys(t.floating):!1;if(s===r||a&&n)return o;let c={scrollLeft:0,scrollTop:0},l=rt(1);const u=rt(0),f=mt(s);if((f||!f&&!n)&&((io(s)!=="body"||Ro(r))&&(c=xs(s)),f)){const y=It(s);l=Xt(s),u.x=y.x+s.clientLeft,u.y=y.y+s.clientTop}const k=r&&!f&&!n?Pr(r,c):rt(0);return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-c.scrollLeft*l.x+u.x+k.x,y:o.y*l.y-c.scrollTop*l.y+u.y+k.y}}function ol(e){return Array.from(e.getClientRects())}function sl(e){const t=lt(e),o=xs(e),s=e.ownerDocument.body,i=He(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),n=He(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-o.scrollLeft+ks(e);const a=-o.scrollTop;return Xe(s).direction==="rtl"&&(r+=He(t.clientWidth,s.clientWidth)-i),{width:i,height:n,x:r,y:a}}const Tn=25;function il(e,t){const o=Ue(e),s=lt(e),i=o.visualViewport;let n=s.clientWidth,r=s.clientHeight,a=0,c=0;if(i){n=i.width,r=i.height;const u=Mi();(!u||u&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}const l=ks(s);if(l<=0){const u=s.ownerDocument,f=u.body,k=getComputedStyle(f),y=u.compatMode==="CSS1Compat"&&parseFloat(k.marginLeft)+parseFloat(k.marginRight)||0,v=Math.abs(s.clientWidth-f.clientWidth-y);v<=Tn&&(n-=v)}else l<=Tn&&(n+=l);return{width:n,height:r,x:a,y:c}}function nl(e,t){const o=It(e,!0,t==="fixed"),s=o.top+e.clientTop,i=o.left+e.clientLeft,n=mt(e)?Xt(e):rt(1),r=e.clientWidth*n.x,a=e.clientHeight*n.y,c=i*n.x,l=s*n.y;return{width:r,height:a,x:c,y:l}}function Mn(e,t,o){let s;if(t==="viewport")s=il(e,o);else if(t==="document")s=sl(lt(e));else if(Ke(t))s=nl(t,o);else{const i=Rr(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return as(s)}function Dr(e,t){const o=St(e);return o===t||!Ke(o)||eo(o)?!1:Xe(o).position==="fixed"||Dr(o,t)}function rl(e,t){const o=t.get(e);if(o)return o;let s=_o(e,[],!1).filter(a=>Ke(a)&&io(a)!=="body"),i=null;const n=Xe(e).position==="fixed";let r=n?St(e):e;for(;Ke(r)&&!eo(r);){const a=Xe(r),c=ws(r);!c&&a.position==="fixed"&&(i=null),(n?!c&&!i:!c&&a.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||Ro(r)&&!c&&Dr(e,r))?s=s.filter(u=>u!==r):i=a,r=St(r)}return t.set(e,s),s}function al(e){let{element:t,boundary:o,rootBoundary:s,strategy:i}=e;const r=[...o==="clippingAncestors"?ys(t)?[]:rl(t,this._c):[].concat(o),s],a=Mn(t,r[0],i);let c=a.top,l=a.right,u=a.bottom,f=a.left;for(let k=1;k<r.length;k++){const y=Mn(t,r[k],i);c=He(y.top,c),l=Tt(y.right,l),u=Tt(y.bottom,u),f=He(y.left,f)}return{width:l-f,height:u-c,x:f,y:c}}function ll(e){const{width:t,height:o}=Ar(e);return{width:t,height:o}}function cl(e,t,o){const s=mt(t),i=lt(t),n=o==="fixed",r=It(e,!0,n,t);let a={scrollLeft:0,scrollTop:0};const c=rt(0);function l(){c.x=ks(i)}if(s||!s&&!n)if((io(t)!=="body"||Ro(i))&&(a=xs(t)),s){const y=It(t,!0,n,t);c.x=y.x+t.clientLeft,c.y=y.y+t.clientTop}else i&&l();n&&!s&&i&&l();const u=i&&!s&&!n?Pr(i,a):rt(0),f=r.left+a.scrollLeft-c.x-u.x,k=r.top+a.scrollTop-c.y-u.y;return{x:f,y:k,width:r.width,height:r.height}}function Ws(e){return Xe(e).position==="static"}function Sn(e,t){if(!mt(e)||Xe(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return lt(e)===o&&(o=o.ownerDocument.body),o}function zr(e,t){const o=Ue(e);if(ys(e))return o;if(!mt(e)){let i=St(e);for(;i&&!eo(i);){if(Ke(i)&&!Ws(i))return i;i=St(i)}return o}let s=Sn(e,t);for(;s&&Ya(s)&&Ws(s);)s=Sn(s,t);return s&&eo(s)&&Ws(s)&&!ws(s)?o:s||Xa(e)||o}const dl=async function(e){const t=this.getOffsetParent||zr,o=this.getDimensions,s=await o(e.floating);return{reference:cl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function hl(e){return Xe(e).direction==="rtl"}const Qo={convertOffsetParentRelativeRectToViewportRelativeRect:tl,getDocumentElement:lt,getClippingRect:al,getOffsetParent:zr,getElementRects:dl,getClientRects:ol,getDimensions:ll,getScale:Xt,isElement:Ke,isRTL:hl};function Ir(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function pl(e,t){let o=null,s;const i=lt(e);function n(){var a;clearTimeout(s),(a=o)==null||a.disconnect(),o=null}function r(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),n();const l=e.getBoundingClientRect(),{left:u,top:f,width:k,height:y}=l;if(a||t(),!k||!y)return;const v=jo(f),C=jo(i.clientWidth-(u+k)),E=jo(i.clientHeight-(f+y)),$=jo(u),m={rootMargin:-v+"px "+-C+"px "+-E+"px "+-$+"px",threshold:He(0,Tt(1,c))||1};let x=!0;function T(w){const S=w[0].intersectionRatio;if(S!==c){if(!x)return r();S?r(!1,S):s=setTimeout(()=>{r(!1,1e-7)},1e3)}S===1&&!Ir(l,e.getBoundingClientRect())&&r(),x=!1}try{o=new IntersectionObserver(T,{...m,root:i.ownerDocument})}catch{o=new IntersectionObserver(T,m)}o.observe(e)}return r(!0),n}function es(e,t,o,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,l=Si(e),u=i||n?[...l?_o(l):[],...t?_o(t):[]]:[];u.forEach($=>{i&&$.addEventListener("scroll",o,{passive:!0}),n&&$.addEventListener("resize",o)});const f=l&&a?pl(l,o):null;let k=-1,y=null;r&&(y=new ResizeObserver($=>{let[b]=$;b&&b.target===l&&y&&t&&(y.unobserve(t),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var m;(m=y)==null||m.observe(t)})),o()}),l&&!c&&y.observe(l),t&&y.observe(t));let v,C=c?It(e):null;c&&E();function E(){const $=It(e);C&&!Ir(C,$)&&o(),C=$,v=requestAnimationFrame(E)}return o(),()=>{var $;u.forEach(b=>{i&&b.removeEventListener("scroll",o),n&&b.removeEventListener("resize",o)}),f?.(),($=y)==null||$.disconnect(),y=null,c&&cancelAnimationFrame(v)}}const $i=Va,_i=Ga,Ei=Ua,ci=Za,ul=Wa,Or=Ha,Li=(e,t,o)=>{const s=new Map,i={platform:Qo,...o},n={...i.platform,_c:s};return Na(e,t,{...i,platform:n})};const Br=(e,t,o="download.json")=>{const s="data:text/plain;charset=utf-8,"+encodeURIComponent(e);let i=t,n=!1;i=document.createElement("a"),i.style.display="none",n=!0,i?.setAttribute("href",s),i?.setAttribute("download",`${o}`),i?.click(),n&&i?.remove()};function gl(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function ls(e,t){if(!isFinite(e)||e===0)return null;var o=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),s=e.slice(0,o);return[s.length>1?s[0]+s.slice(2):s,+e.slice(o+1)]}function fl(e){return e=ls(Math.abs(e)),e?e[1]:NaN}function ml(e,t){return function(o,s){for(var i=o.length,n=[],r=0,a=e[0],c=0;i>0&&a>0&&(c+a+1>s&&(a=Math.max(1,s-c)),n.push(o.substring(i-=a,i+a)),!((c+=a+1)>s));)a=e[r=(r+1)%e.length];return n.reverse().join(t)}}function bl(e){return function(t){return t.replace(/[0-9]/g,function(o){return e[+o]})}}var vl=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function di(e){if(!(t=vl.exec(e)))throw new Error("invalid format: "+e);var t;return new Ai({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}di.prototype=Ai.prototype;function Ai(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}Ai.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function yl(e){e:for(var t=e.length,o=1,s=-1,i;o<t;++o)switch(e[o]){case".":s=i=o;break;case"0":s===0&&(s=o),i=o;break;default:if(!+e[o])break e;s>0&&(s=0);break}return s>0?e.slice(0,s)+e.slice(i+1):e}var cs;function wl(e,t){var o=ls(e,t);if(!o)return cs=void 0,e.toPrecision(t);var s=o[0],i=o[1],n=i-(cs=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,r=s.length;return n===r?s:n>r?s+new Array(n-r+1).join("0"):n>0?s.slice(0,n)+"."+s.slice(n):"0."+new Array(1-n).join("0")+ls(e,Math.max(0,t+n-1))[0]}function $n(e,t){var o=ls(e,t);if(!o)return e+"";var s=o[0],i=o[1];return i<0?"0."+new Array(-i).join("0")+s:s.length>i+1?s.slice(0,i+1)+"."+s.slice(i+1):s+new Array(i-s.length+2).join("0")}const _n={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:gl,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>$n(e*100,t),r:$n,s:wl,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function En(e){return e}var Ln=Array.prototype.map,An=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function xl(e){var t=e.grouping===void 0||e.thousands===void 0?En:ml(Ln.call(e.grouping,Number),e.thousands+""),o=e.currency===void 0?"":e.currency[0]+"",s=e.currency===void 0?"":e.currency[1]+"",i=e.decimal===void 0?".":e.decimal+"",n=e.numerals===void 0?En:bl(Ln.call(e.numerals,String)),r=e.percent===void 0?"%":e.percent+"",a=e.minus===void 0?"−":e.minus+"",c=e.nan===void 0?"NaN":e.nan+"";function l(f,k){f=di(f);var y=f.fill,v=f.align,C=f.sign,E=f.symbol,$=f.zero,b=f.width,m=f.comma,x=f.precision,T=f.trim,w=f.type;w==="n"?(m=!0,w="g"):_n[w]||(x===void 0&&(x=12),T=!0,w="g"),($||y==="0"&&v==="=")&&($=!0,y="0",v="=");var S=(k&&k.prefix!==void 0?k.prefix:"")+(E==="$"?o:E==="#"&&/[boxX]/.test(w)?"0"+w.toLowerCase():""),A=(E==="$"?s:/[%p]/.test(w)?r:"")+(k&&k.suffix!==void 0?k.suffix:""),L=_n[w],B=/[defgprs%]/.test(w);x=x===void 0?6:/[gprs]/.test(w)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x));function O(P){var oe=S,U=A,pe,be,re;if(w==="c")U=L(P)+U,P="";else{P=+P;var N=P<0||1/P<0;if(P=isNaN(P)?c:L(Math.abs(P),x),T&&(P=yl(P)),N&&+P==0&&C!=="+"&&(N=!1),oe=(N?C==="("?C:a:C==="-"||C==="("?"":C)+oe,U=(w==="s"&&!isNaN(P)&&cs!==void 0?An[8+cs/3]:"")+U+(N&&C==="("?")":""),B){for(pe=-1,be=P.length;++pe<be;)if(re=P.charCodeAt(pe),48>re||re>57){U=(re===46?i+P.slice(pe+1):P.slice(pe))+U,P=P.slice(0,pe);break}}}m&&!$&&(P=t(P,1/0));var G=oe.length+P.length+U.length,ce=G<b?new Array(b-G+1).join(y):"";switch(m&&$&&(P=t(ce+P,ce.length?b-U.length:1/0),ce=""),v){case"<":P=oe+P+U+ce;break;case"=":P=oe+ce+P+U;break;case"^":P=ce.slice(0,G=ce.length>>1)+oe+P+U+ce.slice(G);break;default:P=ce+oe+P+U;break}return n(P)}return O.toString=function(){return f+""},O}function u(f,k){var y=Math.max(-8,Math.min(8,Math.floor(fl(k)/3)))*3,v=Math.pow(10,-y),C=l((f=di(f),f.type="f",f),{suffix:An[8+y/3]});return function(E){return C(v*E)}}return{format:l,formatPrefix:u}}var Vo,Fr;kl({thousands:",",grouping:[3],currency:["$",""]});function kl(e){return Vo=xl(e),Fr=Vo.format,Vo.formatPrefix,Vo}function Cl(e){return(t,o)=>{const s=typeof t=="function"?t:t[o];Object.assign(s,e)}}const Nr=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);function W(e,t){return(o,s,i)=>{const n=r=>r.renderRoot?.querySelector(e)??null;return Nr(o,s,{get(){return n(this)}})}}let Tl;function Ml(e){return(t,o)=>Nr(t,o,{get(){return(this.renderRoot??(Tl??=document.createDocumentFragment())).querySelectorAll(e)}})}const te=e=>e??is;const yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ri=e=>(...t)=>({_$litDirective$:e,values:t});let Pi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}};let hi=class extends Pi{constructor(t){if(super(t),this.it=is,t.type!==yt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===is||t==null)return this._t=void 0,this.it=t;if(t===Jt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const o=[t];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}};hi.directiveName="unsafeHTML",hi.resultType=1;const F=Ri(hi);var Rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};const{entries:Hr,setPrototypeOf:Pn,isFrozen:Sl,getPrototypeOf:$l,getOwnPropertyDescriptor:_l}=Object;let{freeze:De,seal:Ve,create:So}=Object,{apply:pi,construct:ui}=typeof Reflect<"u"&&Reflect;De||(De=function(t){return t});Ve||(Ve=function(t){return t});pi||(pi=function(t,o){for(var s=arguments.length,i=new Array(s>2?s-2:0),n=2;n<s;n++)i[n-2]=arguments[n];return t.apply(o,i)});ui||(ui=function(t){for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return new t(...s)});const uo=ze(Array.prototype.forEach),El=ze(Array.prototype.lastIndexOf),Dn=ze(Array.prototype.pop),go=ze(Array.prototype.push),Ll=ze(Array.prototype.splice),ts=ze(String.prototype.toLowerCase),qs=ze(String.prototype.toString),js=ze(String.prototype.match),Yt=ze(String.prototype.replace),Al=ze(String.prototype.indexOf),Rl=ze(String.prototype.trim),Je=ze(Object.prototype.hasOwnProperty),Ae=ze(RegExp.prototype.test),fo=Pl(TypeError);function ze(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var o=arguments.length,s=new Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];return pi(e,t,s)}}function Pl(e){return function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return ui(e,o)}}function q(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ts;Pn&&Pn(e,null);let s=t.length;for(;s--;){let i=t[s];if(typeof i=="string"){const n=o(i);n!==i&&(Sl(t)||(t[s]=n),i=n)}e[i]=!0}return e}function Dl(e){for(let t=0;t<e.length;t++)Je(e,t)||(e[t]=null);return e}function it(e){const t=So(null);for(const[o,s]of Hr(e))Je(e,o)&&(Array.isArray(s)?t[o]=Dl(s):s&&typeof s=="object"&&s.constructor===Object?t[o]=it(s):t[o]=s);return t}function mo(e,t){for(;e!==null;){const s=_l(e,t);if(s){if(s.get)return ze(s.get);if(typeof s.value=="function")return ze(s.value)}e=$l(e)}function o(){return null}return o}const zn=De(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Vs=De(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Gs=De(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zl=De(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zs=De(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Il=De(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),In=De(["#text"]),On=De(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ys=De(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Bn=De(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Go=De(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ol=Ve(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bl=Ve(/<%[\w\W]*|[\w\W]*%>/gm),Fl=Ve(/\$\{[\w\W]*/gm),Nl=Ve(/^data-[\-\w.\u00B7-\uFFFF]+$/),Hl=Ve(/^aria-[\-\w]+$/),Ur=Ve(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ul=Ve(/^(?:\w+script|data):/i),Wl=Ve(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wr=Ve(/^html$/i),ql=Ve(/^[a-z][.\w]*(-[.\w]+)+$/i);var Fn=Object.freeze({__proto__:null,ARIA_ATTR:Hl,ATTR_WHITESPACE:Wl,CUSTOM_ELEMENT:ql,DATA_ATTR:Nl,DOCTYPE_NAME:Wr,ERB_EXPR:Bl,IS_ALLOWED_URI:Ur,IS_SCRIPT_OR_DATA:Ul,MUSTACHE_EXPR:Ol,TMPLIT_EXPR:Fl});const bo={element:1,text:3,progressingInstruction:7,comment:8,document:9},jl=function(){return typeof window>"u"?null:window},Vl=function(t,o){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let s=null;const i="data-tt-policy-suffix";o&&o.hasAttribute(i)&&(s=o.getAttribute(i));const n="dompurify"+(s?"#"+s:"");try{return t.createPolicy(n,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}},Nn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function qr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jl();const t=I=>qr(I);if(t.version="3.4.0",t.removed=[],!e||!e.document||e.document.nodeType!==bo.document||!e.Element)return t.isSupported=!1,t;let{document:o}=e;const s=o,i=s.currentScript,{DocumentFragment:n,HTMLTemplateElement:r,Node:a,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:k,trustedTypes:y}=e,v=c.prototype,C=mo(v,"cloneNode"),E=mo(v,"remove"),$=mo(v,"nextSibling"),b=mo(v,"childNodes"),m=mo(v,"parentNode");if(typeof r=="function"){const I=o.createElement("template");I.content&&I.content.ownerDocument&&(o=I.content.ownerDocument)}let x,T="";const{implementation:w,createNodeIterator:S,createDocumentFragment:A,getElementsByTagName:L}=o,{importNode:B}=s;let O=Nn();t.isSupported=typeof Hr=="function"&&typeof m=="function"&&w&&w.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:P,ERB_EXPR:oe,TMPLIT_EXPR:U,DATA_ATTR:pe,ARIA_ATTR:be,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:N,CUSTOM_ELEMENT:G}=Fn;let{IS_ALLOWED_URI:ce}=Fn,ae=null;const $e=q({},[...zn,...Vs,...Gs,...Zs,...In]);let se=null;const _e=q({},[...On,...Ys,...Bn,...Go]);let Q=Object.seal(So(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),qe=null,je=null;const Be=Object.seal(So(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let lo=!0,Lt=!0,At=!1,Bo=!0,Ze=!1,co=!0,Rt=!1,As=!1,Rs=!1,jt=!1,Fo=!1,No=!1,Xi=!0,Qi=!1;const ya="user-content-";let Ps=!0,ho=!1,Vt={},ot=null;const Ds=q({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let en=null;const tn=q({},["audio","video","img","source","image","track"]);let zs=null;const on=q({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ho="http://www.w3.org/1998/Math/MathML",Uo="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml";let Gt=st,Is=!1,Os=null;const wa=q({},[Ho,Uo,st],qs);let Wo=q({},["mi","mo","mn","ms","mtext"]),qo=q({},["annotation-xml"]);const xa=q({},["title","style","font","a","script"]);let po=null;const ka=["application/xhtml+xml","text/html"],Ca="text/html";let ve=null,Zt=null;const Ta=o.createElement("form"),sn=function(p){return p instanceof RegExp||p instanceof Function},Bs=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Zt&&Zt===p)){if((!p||typeof p!="object")&&(p={}),p=it(p),po=ka.indexOf(p.PARSER_MEDIA_TYPE)===-1?Ca:p.PARSER_MEDIA_TYPE,ve=po==="application/xhtml+xml"?qs:ts,ae=Je(p,"ALLOWED_TAGS")?q({},p.ALLOWED_TAGS,ve):$e,se=Je(p,"ALLOWED_ATTR")?q({},p.ALLOWED_ATTR,ve):_e,Os=Je(p,"ALLOWED_NAMESPACES")?q({},p.ALLOWED_NAMESPACES,qs):wa,zs=Je(p,"ADD_URI_SAFE_ATTR")?q(it(on),p.ADD_URI_SAFE_ATTR,ve):on,en=Je(p,"ADD_DATA_URI_TAGS")?q(it(tn),p.ADD_DATA_URI_TAGS,ve):tn,ot=Je(p,"FORBID_CONTENTS")?q({},p.FORBID_CONTENTS,ve):Ds,qe=Je(p,"FORBID_TAGS")?q({},p.FORBID_TAGS,ve):it({}),je=Je(p,"FORBID_ATTR")?q({},p.FORBID_ATTR,ve):it({}),Vt=Je(p,"USE_PROFILES")?p.USE_PROFILES:!1,lo=p.ALLOW_ARIA_ATTR!==!1,Lt=p.ALLOW_DATA_ATTR!==!1,At=p.ALLOW_UNKNOWN_PROTOCOLS||!1,Bo=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ze=p.SAFE_FOR_TEMPLATES||!1,co=p.SAFE_FOR_XML!==!1,Rt=p.WHOLE_DOCUMENT||!1,jt=p.RETURN_DOM||!1,Fo=p.RETURN_DOM_FRAGMENT||!1,No=p.RETURN_TRUSTED_TYPE||!1,Rs=p.FORCE_BODY||!1,Xi=p.SANITIZE_DOM!==!1,Qi=p.SANITIZE_NAMED_PROPS||!1,Ps=p.KEEP_CONTENT!==!1,ho=p.IN_PLACE||!1,ce=p.ALLOWED_URI_REGEXP||Ur,Gt=p.NAMESPACE||st,Wo=p.MATHML_TEXT_INTEGRATION_POINTS||Wo,qo=p.HTML_INTEGRATION_POINTS||qo,Q=p.CUSTOM_ELEMENT_HANDLING||So(null),p.CUSTOM_ELEMENT_HANDLING&&sn(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Q.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&sn(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Q.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Q.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ze&&(Lt=!1),Fo&&(jt=!0),Vt&&(ae=q({},In),se=So(null),Vt.html===!0&&(q(ae,zn),q(se,On)),Vt.svg===!0&&(q(ae,Vs),q(se,Ys),q(se,Go)),Vt.svgFilters===!0&&(q(ae,Gs),q(se,Ys),q(se,Go)),Vt.mathMl===!0&&(q(ae,Zs),q(se,Bn),q(se,Go))),Be.tagCheck=null,Be.attributeCheck=null,p.ADD_TAGS&&(typeof p.ADD_TAGS=="function"?Be.tagCheck=p.ADD_TAGS:(ae===$e&&(ae=it(ae)),q(ae,p.ADD_TAGS,ve))),p.ADD_ATTR&&(typeof p.ADD_ATTR=="function"?Be.attributeCheck=p.ADD_ATTR:(se===_e&&(se=it(se)),q(se,p.ADD_ATTR,ve))),p.ADD_URI_SAFE_ATTR&&q(zs,p.ADD_URI_SAFE_ATTR,ve),p.FORBID_CONTENTS&&(ot===Ds&&(ot=it(ot)),q(ot,p.FORBID_CONTENTS,ve)),p.ADD_FORBID_CONTENTS&&(ot===Ds&&(ot=it(ot)),q(ot,p.ADD_FORBID_CONTENTS,ve)),Ps&&(ae["#text"]=!0),Rt&&q(ae,["html","head","body"]),ae.table&&(q(ae,["tbody"]),delete qe.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw fo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw fo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=p.TRUSTED_TYPES_POLICY,T=x.createHTML("")}else x===void 0&&(x=Vl(y,i)),x!==null&&typeof T=="string"&&(T=x.createHTML(""));De&&De(p),Zt=p}},nn=q({},[...Vs,...Gs,...zl]),rn=q({},[...Zs,...Il]),Ma=function(p){let _=m(p);(!_||!_.tagName)&&(_={namespaceURI:Gt,tagName:"template"});const R=ts(p.tagName),le=ts(_.tagName);return Os[p.namespaceURI]?p.namespaceURI===Uo?_.namespaceURI===st?R==="svg":_.namespaceURI===Ho?R==="svg"&&(le==="annotation-xml"||Wo[le]):!!nn[R]:p.namespaceURI===Ho?_.namespaceURI===st?R==="math":_.namespaceURI===Uo?R==="math"&&qo[le]:!!rn[R]:p.namespaceURI===st?_.namespaceURI===Uo&&!qo[le]||_.namespaceURI===Ho&&!Wo[le]?!1:!rn[R]&&(xa[R]||!nn[R]):!!(po==="application/xhtml+xml"&&Os[p.namespaceURI]):!1},Ye=function(p){go(t.removed,{element:p});try{m(p).removeChild(p)}catch{E(p)}},Pt=function(p,_){try{go(t.removed,{attribute:_.getAttributeNode(p),from:_})}catch{go(t.removed,{attribute:null,from:_})}if(_.removeAttribute(p),p==="is")if(jt||Fo)try{Ye(_)}catch{}else try{_.setAttribute(p,"")}catch{}},an=function(p){let _=null,R=null;if(Rs)p="<remove></remove>"+p;else{const ue=js(p,/^[\r\n\t ]+/);R=ue&&ue[0]}po==="application/xhtml+xml"&&Gt===st&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const le=x?x.createHTML(p):p;if(Gt===st)try{_=new k().parseFromString(le,po)}catch{}if(!_||!_.documentElement){_=w.createDocument(Gt,"template",null);try{_.documentElement.innerHTML=Is?T:le}catch{}}const Ee=_.body||_.documentElement;return p&&R&&Ee.insertBefore(o.createTextNode(R),Ee.childNodes[0]||null),Gt===st?L.call(_,Rt?"html":"body")[0]:Rt?_.documentElement:Ee},ln=function(p){return S.call(p.ownerDocument||p,p,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Fs=function(p){return p instanceof f&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof u)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},Ns=function(p){return typeof a=="function"&&p instanceof a};function dt(I,p,_){uo(I,R=>{R.call(t,p,_,Zt)})}const cn=function(p){let _=null;if(dt(O.beforeSanitizeElements,p,null),Fs(p))return Ye(p),!0;const R=ve(p.nodeName);if(dt(O.uponSanitizeElement,p,{tagName:R,allowedTags:ae}),co&&p.hasChildNodes()&&!Ns(p.firstElementChild)&&Ae(/<[/\w!]/g,p.innerHTML)&&Ae(/<[/\w!]/g,p.textContent)||co&&p.namespaceURI===st&&R==="style"&&Ns(p.firstElementChild)||p.nodeType===bo.progressingInstruction||co&&p.nodeType===bo.comment&&Ae(/<[/\w]/g,p.data))return Ye(p),!0;if(qe[R]||!(Be.tagCheck instanceof Function&&Be.tagCheck(R))&&!ae[R]){if(!qe[R]&&hn(R)&&(Q.tagNameCheck instanceof RegExp&&Ae(Q.tagNameCheck,R)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(R)))return!1;if(Ps&&!ot[R]){const le=m(p)||p.parentNode,Ee=b(p)||p.childNodes;if(Ee&&le){const ue=Ee.length;for(let Fe=ue-1;Fe>=0;--Fe){const Ne=C(Ee[Fe],!0);Ne.__removalCount=(p.__removalCount||0)+1,le.insertBefore(Ne,$(p))}}}return Ye(p),!0}return p instanceof c&&!Ma(p)||(R==="noscript"||R==="noembed"||R==="noframes")&&Ae(/<\/no(script|embed|frames)/i,p.innerHTML)?(Ye(p),!0):(Ze&&p.nodeType===bo.text&&(_=p.textContent,uo([P,oe,U],le=>{_=Yt(_,le," ")}),p.textContent!==_&&(go(t.removed,{element:p.cloneNode()}),p.textContent=_)),dt(O.afterSanitizeElements,p,null),!1)},dn=function(p,_,R){if(je[_]||Xi&&(_==="id"||_==="name")&&(R in o||R in Ta))return!1;if(!(Lt&&!je[_]&&Ae(pe,_))){if(!(lo&&Ae(be,_))){if(!(Be.attributeCheck instanceof Function&&Be.attributeCheck(_,p))){if(!se[_]||je[_]){if(!(hn(p)&&(Q.tagNameCheck instanceof RegExp&&Ae(Q.tagNameCheck,p)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(p))&&(Q.attributeNameCheck instanceof RegExp&&Ae(Q.attributeNameCheck,_)||Q.attributeNameCheck instanceof Function&&Q.attributeNameCheck(_,p))||_==="is"&&Q.allowCustomizedBuiltInElements&&(Q.tagNameCheck instanceof RegExp&&Ae(Q.tagNameCheck,R)||Q.tagNameCheck instanceof Function&&Q.tagNameCheck(R))))return!1}else if(!zs[_]){if(!Ae(ce,Yt(R,N,""))){if(!((_==="src"||_==="xlink:href"||_==="href")&&p!=="script"&&Al(R,"data:")===0&&en[p])){if(!(At&&!Ae(re,Yt(R,N,"")))){if(R)return!1}}}}}}}return!0},hn=function(p){return p!=="annotation-xml"&&js(p,G)},pn=function(p){dt(O.beforeSanitizeAttributes,p,null);const{attributes:_}=p;if(!_||Fs(p))return;const R={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:se,forceKeepAttr:void 0};let le=_.length;for(;le--;){const Ee=_[le],{name:ue,namespaceURI:Fe,value:Ne}=Ee,vt=ve(ue),Hs=Ne;let Ce=ue==="value"?Hs:Rl(Hs);if(R.attrName=vt,R.attrValue=Ce,R.keepAttr=!0,R.forceKeepAttr=void 0,dt(O.uponSanitizeAttribute,p,R),Ce=R.attrValue,Qi&&(vt==="id"||vt==="name")&&(Pt(ue,p),Ce=ya+Ce),co&&Ae(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ce)){Pt(ue,p);continue}if(vt==="attributename"&&js(Ce,"href")){Pt(ue,p);continue}if(R.forceKeepAttr)continue;if(!R.keepAttr){Pt(ue,p);continue}if(!Bo&&Ae(/\/>/i,Ce)){Pt(ue,p);continue}Ze&&uo([P,oe,U],fn=>{Ce=Yt(Ce,fn," ")});const gn=ve(p.nodeName);if(!dn(gn,vt,Ce)){Pt(ue,p);continue}if(x&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!Fe)switch(y.getAttributeType(gn,vt)){case"TrustedHTML":{Ce=x.createHTML(Ce);break}case"TrustedScriptURL":{Ce=x.createScriptURL(Ce);break}}if(Ce!==Hs)try{Fe?p.setAttributeNS(Fe,ue,Ce):p.setAttribute(ue,Ce),Fs(p)?Ye(p):Dn(t.removed)}catch{Pt(ue,p)}}dt(O.afterSanitizeAttributes,p,null)},un=function(p){let _=null;const R=ln(p);for(dt(O.beforeSanitizeShadowDOM,p,null);_=R.nextNode();)dt(O.uponSanitizeShadowNode,_,null),cn(_),pn(_),_.content instanceof n&&un(_.content);dt(O.afterSanitizeShadowDOM,p,null)};return t.sanitize=function(I){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=null,R=null,le=null,Ee=null;if(Is=!I,Is&&(I="<!-->"),typeof I!="string"&&!Ns(I))if(typeof I.toString=="function"){if(I=I.toString(),typeof I!="string")throw fo("dirty is not a string, aborting")}else throw fo("toString is not a function");if(!t.isSupported)return I;if(As||Bs(p),t.removed=[],typeof I=="string"&&(ho=!1),ho){if(I.nodeName){const Ne=ve(I.nodeName);if(!ae[Ne]||qe[Ne])throw fo("root node is forbidden and cannot be sanitized in-place")}}else if(I instanceof a)_=an("<!---->"),R=_.ownerDocument.importNode(I,!0),R.nodeType===bo.element&&R.nodeName==="BODY"||R.nodeName==="HTML"?_=R:_.appendChild(R);else{if(!jt&&!Ze&&!Rt&&I.indexOf("<")===-1)return x&&No?x.createHTML(I):I;if(_=an(I),!_)return jt?null:No?T:""}_&&Rs&&Ye(_.firstChild);const ue=ln(ho?I:_);for(;le=ue.nextNode();)cn(le),pn(le),le.content instanceof n&&un(le.content);if(ho)return I;if(jt){if(Ze){_.normalize();let Ne=_.innerHTML;uo([P,oe,U],vt=>{Ne=Yt(Ne,vt," ")}),_.innerHTML=Ne}if(Fo)for(Ee=A.call(_.ownerDocument);_.firstChild;)Ee.appendChild(_.firstChild);else Ee=_;return(se.shadowroot||se.shadowrootmode)&&(Ee=B.call(s,Ee,!0)),Ee}let Fe=Rt?_.outerHTML:_.innerHTML;return Rt&&ae["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&Ae(Wr,_.ownerDocument.doctype.name)&&(Fe="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+Fe),Ze&&uo([P,oe,U],Ne=>{Fe=Yt(Fe,Ne," ")}),x&&No?x.createHTML(Fe):Fe},t.setConfig=function(){let I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bs(I),As=!0},t.clearConfig=function(){Zt=null,As=!1},t.isValidAttribute=function(I,p,_){Zt||Bs({});const R=ve(I),le=ve(p);return dn(R,le,_)},t.addHook=function(I,p){typeof p=="function"&&go(O[I],p)},t.removeHook=function(I,p){if(p!==void 0){const _=El(O[I],p);return _===-1?void 0:Ll(O[I],_,1)[0]}return Dn(O[I])},t.removeHooks=function(I){O[I]=[]},t.removeAllHooks=function(){O=Nn()},t}var Gl=qr();function Di(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ht=Di();function jr(e){Ht=e}var $o={exec:()=>null};function X(e,t=""){let o=typeof e=="string"?e:e.source;const s={replace:(i,n)=>{let r=typeof n=="string"?n:n.source;return r=r.replace(Re.caret,"$1"),o=o.replace(i,r),s},getRegex:()=>new RegExp(o,t)};return s}var Re={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Zl=/^(?:[ \t]*(?:\n|$))+/,Yl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Jl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Po=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Kl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,zi=/(?:[*+-]|\d{1,9}[.)])/,Vr=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Gr=X(Vr).replace(/bull/g,zi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Xl=X(Vr).replace(/bull/g,zi).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ii=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ql=/^[^\n]+/,Oi=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ec=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Oi).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tc=X(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,zi).getRegex(),Cs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Bi=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,oc=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Bi).replace("tag",Cs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Zr=X(Ii).replace("hr",Po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),sc=X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Zr).getRegex(),Fi={blockquote:sc,code:Yl,def:ec,fences:Jl,heading:Kl,hr:Po,html:oc,lheading:Gr,list:tc,newline:Zl,paragraph:Zr,table:$o,text:Ql},Hn=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex(),ic={...Fi,lheading:Xl,table:Hn,paragraph:X(Ii).replace("hr",Po).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Hn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Cs).getRegex()},nc={...Fi,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Bi).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$o,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(Ii).replace("hr",Po).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Gr).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},rc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ac=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yr=/^( {2,}|\\)\n(?!\s*$)/,lc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ts=/[\p{P}\p{S}]/u,Ni=/[\s\p{P}\p{S}]/u,Jr=/[^\s\p{P}\p{S}]/u,cc=X(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ni).getRegex(),Kr=/(?!~)[\p{P}\p{S}]/u,dc=/(?!~)[\s\p{P}\p{S}]/u,hc=/(?:[^\s\p{P}\p{S}]|~)/u,pc=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Xr=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,uc=X(Xr,"u").replace(/punct/g,Ts).getRegex(),gc=X(Xr,"u").replace(/punct/g,Kr).getRegex(),Qr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",fc=X(Qr,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,Ni).replace(/punct/g,Ts).getRegex(),mc=X(Qr,"gu").replace(/notPunctSpace/g,hc).replace(/punctSpace/g,dc).replace(/punct/g,Kr).getRegex(),bc=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,Ni).replace(/punct/g,Ts).getRegex(),vc=X(/\\(punct)/,"gu").replace(/punct/g,Ts).getRegex(),yc=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),wc=X(Bi).replace("(?:-->|$)","-->").getRegex(),xc=X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",wc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ds=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,kc=X(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ea=X(/^!?\[(label)\]\[(ref)\]/).replace("label",ds).replace("ref",Oi).getRegex(),ta=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",Oi).getRegex(),Cc=X("reflink|nolink(?!\\()","g").replace("reflink",ea).replace("nolink",ta).getRegex(),Hi={_backpedal:$o,anyPunctuation:vc,autolink:yc,blockSkip:pc,br:Yr,code:ac,del:$o,emStrongLDelim:uc,emStrongRDelimAst:fc,emStrongRDelimUnd:bc,escape:rc,link:kc,nolink:ta,punctuation:cc,reflink:ea,reflinkSearch:Cc,tag:xc,text:lc,url:$o},Tc={...Hi,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",ds).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ds).getRegex()},gi={...Hi,emStrongRDelimAst:mc,emStrongLDelim:gc,url:X(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Mc={...gi,br:X(Yr).replace("{2,}","*").getRegex(),text:X(gi.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Zo={normal:Fi,gfm:ic,pedantic:nc},vo={normal:Hi,gfm:gi,breaks:Mc,pedantic:Tc},Sc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Un=e=>Sc[e];function nt(e,t){if(t){if(Re.escapeTest.test(e))return e.replace(Re.escapeReplace,Un)}else if(Re.escapeTestNoEncode.test(e))return e.replace(Re.escapeReplaceNoEncode,Un);return e}function Wn(e){try{e=encodeURI(e).replace(Re.percentDecode,"%")}catch{return null}return e}function qn(e,t){const o=e.replace(Re.findPipe,(n,r,a)=>{let c=!1,l=r;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),s=o.split(Re.splitPipe);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),t)if(s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(Re.slashPipe,"|");return s}function yo(e,t,o){const s=e.length;if(s===0)return"";let i=0;for(;i<s&&e.charAt(s-i-1)===t;)i++;return e.slice(0,s-i)}function $c(e,t){if(e.indexOf(t[1])===-1)return-1;let o=0;for(let s=0;s<e.length;s++)if(e[s]==="\\")s++;else if(e[s]===t[0])o++;else if(e[s]===t[1]&&(o--,o<0))return s;return o>0?-2:-1}function jn(e,t,o,s,i){const n=t.href,r=t.title||null,a=e[1].replace(i.other.outputLinkReplace,"$1");s.state.inLink=!0;const c={type:e[0].charAt(0)==="!"?"image":"link",raw:o,href:n,title:r,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,c}function _c(e,t,o){const s=e.match(o.other.indentCodeCompensation);if(s===null)return t;const i=s[1];return t.split(`
`).map(n=>{const r=n.match(o.other.beginningSpace);if(r===null)return n;const[a]=r;return a.length>=i.length?n.slice(i.length):n}).join(`
`)}var hs=class{options;rules;lexer;constructor(e){this.options=e||Ht}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const o=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?o:yo(o,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const o=t[0],s=_c(o,t[3]||"",this.rules);return{type:"code",raw:o,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let o=t[2].trim();if(this.rules.other.endingHash.test(o)){const s=yo(o,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceChar.test(s))&&(o=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:o,tokens:this.lexer.inline(o)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:yo(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let o=yo(t[0],`
`).split(`
`),s="",i="";const n=[];for(;o.length>0;){let r=!1;const a=[];let c;for(c=0;c<o.length;c++)if(this.rules.other.blockquoteStart.test(o[c]))a.push(o[c]),r=!0;else if(!r)a.push(o[c]);else break;o=o.slice(c);const l=a.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${l}`:l,i=i?`${i}
${u}`:u;const f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,n,!0),this.lexer.state.top=f,o.length===0)break;const k=n.at(-1);if(k?.type==="code")break;if(k?.type==="blockquote"){const y=k,v=y.raw+`
`+o.join(`
`),C=this.blockquote(v);n[n.length-1]=C,s=s.substring(0,s.length-y.raw.length)+C.raw,i=i.substring(0,i.length-y.text.length)+C.text;break}else if(k?.type==="list"){const y=k,v=y.raw+`
`+o.join(`
`),C=this.list(v);n[n.length-1]=C,s=s.substring(0,s.length-k.raw.length)+C.raw,i=i.substring(0,i.length-y.raw.length)+C.raw,o=v.substring(n.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:s,tokens:n,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let o=t[1].trim();const s=o.length>1,i={type:"list",raw:"",ordered:s,start:s?+o.slice(0,-1):"",loose:!1,items:[]};o=s?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=s?o:"[*+-]");const n=this.rules.other.listItemRegex(o);let r=!1;for(;e;){let c=!1,l="",u="";if(!(t=n.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let f=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,$=>" ".repeat(3*$.length)),k=e.split(`
`,1)[0],y=!f.trim(),v=0;if(this.options.pedantic?(v=2,u=f.trimStart()):y?v=t[1].length+1:(v=t[2].search(this.rules.other.nonSpaceChar),v=v>4?1:v,u=f.slice(v),v+=t[1].length),y&&this.rules.other.blankLine.test(k)&&(l+=k+`
`,e=e.substring(k.length+1),c=!0),!c){const $=this.rules.other.nextBulletRegex(v),b=this.rules.other.hrRegex(v),m=this.rules.other.fencesBeginRegex(v),x=this.rules.other.headingBeginRegex(v),T=this.rules.other.htmlBeginRegex(v);for(;e;){const w=e.split(`
`,1)[0];let S;if(k=w,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),S=k):S=k.replace(this.rules.other.tabCharGlobal,"    "),m.test(k)||x.test(k)||T.test(k)||$.test(k)||b.test(k))break;if(S.search(this.rules.other.nonSpaceChar)>=v||!k.trim())u+=`
`+S.slice(v);else{if(y||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||m.test(f)||x.test(f)||b.test(f))break;u+=`
`+k}!y&&!k.trim()&&(y=!0),l+=w+`
`,e=e.substring(w.length+1),f=S.slice(v)}}i.loose||(r?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(r=!0));let C=null,E;this.options.gfm&&(C=this.rules.other.listIsTask.exec(u),C&&(E=C[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:l,task:!!C,checked:E,loose:!1,text:u,tokens:[]}),i.raw+=l}const a=i.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const l=i.items[c].tokens.filter(f=>f.type==="space"),u=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));i.loose=u}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const o=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:o,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const o=qn(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:t[0],header:[],align:[],rows:[]};if(o.length===s.length){for(const r of s)this.rules.other.tableAlignRight.test(r)?n.align.push("right"):this.rules.other.tableAlignCenter.test(r)?n.align.push("center"):this.rules.other.tableAlignLeft.test(r)?n.align.push("left"):n.align.push(null);for(let r=0;r<o.length;r++)n.header.push({text:o[r],tokens:this.lexer.inline(o[r]),header:!0,align:n.align[r]});for(const r of i)n.rows.push(qn(r,n.header.length).map((a,c)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:n.align[c]})));return n}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const o=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:o,tokens:this.lexer.inline(o)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const o=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(o)){if(!this.rules.other.endAngleBracket.test(o))return;const n=yo(o.slice(0,-1),"\\");if((o.length-n.length)%2===0)return}else{const n=$c(t[2],"()");if(n===-2)return;if(n>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+n;t[2]=t[2].substring(0,n),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const n=this.rules.other.pedanticHrefTitle.exec(s);n&&(s=n[1],i=n[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(o)?s=s.slice(1):s=s.slice(1,-1)),jn(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){const s=(o[2]||o[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[s.toLowerCase()];if(!i){const n=o[0].charAt(0);return{type:"text",raw:n,text:n}}return jn(o,i,o[0],this.lexer,this.rules)}}emStrong(e,t,o=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&o.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!o||this.rules.inline.punctuation.exec(o)){const n=[...s[0]].length-1;let r,a,c=n,l=0;const u=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+n);(s=u.exec(t))!=null;){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(a=[...r].length,s[3]||s[4]){c+=a;continue}else if((s[5]||s[6])&&n%3&&!((n+a)%3)){l+=a;continue}if(c-=a,c>0)continue;a=Math.min(a,a+c+l);const f=[...s[0]][0].length,k=e.slice(0,n+s.index+f+a);if(Math.min(n,a)%2){const v=k.slice(1,-1);return{type:"em",raw:k,text:v,tokens:this.lexer.inlineTokens(v)}}const y=k.slice(2,-2);return{type:"strong",raw:k,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let o=t[2].replace(this.rules.other.newLineCharGlobal," ");const s=this.rules.other.nonSpaceChar.test(o),i=this.rules.other.startingSpaceChar.test(o)&&this.rules.other.endingSpaceChar.test(o);return s&&i&&(o=o.substring(1,o.length-1)),{type:"codespan",raw:t[0],text:o}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let o,s;return t[2]==="@"?(o=t[1],s="mailto:"+o):(o=t[1],s=o),{type:"link",raw:t[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let o,s;if(t[2]==="@")o=t[0],s="mailto:"+o;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);o=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:o,href:s,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const o=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:o}}}},pt=class fi{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ht,this.options.tokenizer=this.options.tokenizer||new hs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const o={other:Re,block:Zo.normal,inline:vo.normal};this.options.pedantic?(o.block=Zo.pedantic,o.inline=vo.pedantic):this.options.gfm&&(o.block=Zo.gfm,this.options.breaks?o.inline=vo.breaks:o.inline=vo.gfm),this.tokenizer.rules=o}static get rules(){return{block:Zo,inline:vo}}static lex(t,o){return new fi(o).lex(t)}static lexInline(t,o){return new fi(o).inlineTokens(t)}lex(t){t=t.replace(Re.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let o=0;o<this.inlineQueue.length;o++){const s=this.inlineQueue[o];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,o=[],s=!1){for(this.options.pedantic&&(t=t.replace(Re.tabCharGlobal,"    ").replace(Re.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(r=>(i=r.call({lexer:this},t,o))?(t=t.substring(i.raw.length),o.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);const r=o.at(-1);i.raw.length===1&&r!==void 0?r.raw+=`
`:o.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);const r=o.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.at(-1).src=r.text):o.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);const r=o.at(-1);r?.type==="paragraph"||r?.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue.at(-1).src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),o.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),o.push(i);continue}let n=t;if(this.options.extensions?.startBlock){let r=1/0;const a=t.slice(1);let c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},a),typeof c=="number"&&c>=0&&(r=Math.min(r,c))}),r<1/0&&r>=0&&(n=t.substring(0,r+1))}if(this.state.top&&(i=this.tokenizer.paragraph(n))){const r=o.at(-1);s&&r?.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):o.push(i),s=n.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);const r=o.at(-1);r?.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):o.push(i);continue}if(t){const r="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(r);break}else throw new Error(r)}}return this.state.top=!0,o}inline(t,o=[]){return this.inlineQueue.push({src:t,tokens:o}),o}inlineTokens(t,o=[]){let s=t,i=null;if(this.tokens.links){const a=Object.keys(this.tokens.links);if(a.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)a.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,i.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let n=!1,r="";for(;t;){n||(r=""),n=!1;let a;if(this.options.extensions?.inline?.some(l=>(a=l.call({lexer:this},t,o))?(t=t.substring(a.raw.length),o.push(a),!0):!1))continue;if(a=this.tokenizer.escape(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.tag(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.link(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(a.raw.length);const l=o.at(-1);a.type==="text"&&l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):o.push(a);continue}if(a=this.tokenizer.emStrong(t,s,r)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.codespan(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.br(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.del(t)){t=t.substring(a.raw.length),o.push(a);continue}if(a=this.tokenizer.autolink(t)){t=t.substring(a.raw.length),o.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(t))){t=t.substring(a.raw.length),o.push(a);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0;const u=t.slice(1);let f;this.options.extensions.startInline.forEach(k=>{f=k.call({lexer:this},u),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(a=this.tokenizer.inlineText(c)){t=t.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(r=a.raw.slice(-1)),n=!0;const l=o.at(-1);l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):o.push(a);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return o}},ps=class{options;parser;constructor(e){this.options=e||Ht}space(e){return""}code({text:e,lang:t,escaped:o}){const s=(t||"").match(Re.notSpaceStart)?.[0],i=e.replace(Re.endingNewline,"")+`
`;return s?'<pre><code class="language-'+nt(s)+'">'+(o?i:nt(i,!0))+`</code></pre>
`:"<pre><code>"+(o?i:nt(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,o=e.start;let s="";for(let r=0;r<e.items.length;r++){const a=e.items[r];s+=this.listitem(a)}const i=t?"ol":"ul",n=t&&o!==1?' start="'+o+'"':"";return"<"+i+n+`>
`+s+"</"+i+`>
`}listitem(e){let t="";if(e.task){const o=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=o+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=o+" "+nt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:o+" ",text:o+" ",escaped:!0}):t+=o+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",o="";for(let i=0;i<e.header.length;i++)o+=this.tablecell(e.header[i]);t+=this.tablerow({text:o});let s="";for(let i=0;i<e.rows.length;i++){const n=e.rows[i];o="";for(let r=0;r<n.length;r++)o+=this.tablecell(n[r]);s+=this.tablerow({text:o})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),o=e.header?"th":"td";return(e.align?`<${o} align="${e.align}">`:`<${o}>`)+t+`</${o}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${nt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:o}){const s=this.parser.parseInline(o),i=Wn(e);if(i===null)return s;e=i;let n='<a href="'+e+'"';return t&&(n+=' title="'+nt(t)+'"'),n+=">"+s+"</a>",n}image({href:e,title:t,text:o,tokens:s}){s&&(o=this.parser.parseInline(s,this.parser.textRenderer));const i=Wn(e);if(i===null)return nt(o);e=i;let n=`<img src="${e}" alt="${o}"`;return t&&(n+=` title="${nt(t)}"`),n+=">",n}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:nt(e.text)}},Ui=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},ut=class mi{options;renderer;textRenderer;constructor(t){this.options=t||Ht,this.options.renderer=this.options.renderer||new ps,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ui}static parse(t,o){return new mi(o).parse(t)}static parseInline(t,o){return new mi(o).parseInline(t)}parse(t,o=!0){let s="";for(let i=0;i<t.length;i++){const n=t[i];if(this.options.extensions?.renderers?.[n.type]){const a=n,c=this.options.extensions.renderers[a.type].call({parser:this},a);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(a.type)){s+=c||"";continue}}const r=n;switch(r.type){case"space":{s+=this.renderer.space(r);continue}case"hr":{s+=this.renderer.hr(r);continue}case"heading":{s+=this.renderer.heading(r);continue}case"code":{s+=this.renderer.code(r);continue}case"table":{s+=this.renderer.table(r);continue}case"blockquote":{s+=this.renderer.blockquote(r);continue}case"list":{s+=this.renderer.list(r);continue}case"html":{s+=this.renderer.html(r);continue}case"paragraph":{s+=this.renderer.paragraph(r);continue}case"text":{let a=r,c=this.renderer.text(a);for(;i+1<t.length&&t[i+1].type==="text";)a=t[++i],c+=`
`+this.renderer.text(a);o?s+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):s+=c;continue}default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}parseInline(t,o=this.renderer){let s="";for(let i=0;i<t.length;i++){const n=t[i];if(this.options.extensions?.renderers?.[n.type]){const a=this.options.extensions.renderers[n.type].call({parser:this},n);if(a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)){s+=a||"";continue}}const r=n;switch(r.type){case"escape":{s+=o.text(r);break}case"html":{s+=o.html(r);break}case"link":{s+=o.link(r);break}case"image":{s+=o.image(r);break}case"strong":{s+=o.strong(r);break}case"em":{s+=o.em(r);break}case"codespan":{s+=o.codespan(r);break}case"br":{s+=o.br(r);break}case"del":{s+=o.del(r);break}case"text":{s+=o.text(r);break}default:{const a='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return s}},os=class{options;block;constructor(e){this.options=e||Ht}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?pt.lex:pt.lexInline}provideParser(){return this.block?ut.parse:ut.parseInline}},Ec=class{defaults=Di();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ut;Renderer=ps;TextRenderer=Ui;Lexer=pt;Tokenizer=hs;Hooks=os;constructor(...e){this.use(...e)}walkTokens(e,t){let o=[];for(const s of e)switch(o=o.concat(t.call(this,s)),s.type){case"table":{const i=s;for(const n of i.header)o=o.concat(this.walkTokens(n.tokens,t));for(const n of i.rows)for(const r of n)o=o.concat(this.walkTokens(r.tokens,t));break}case"list":{const i=s;o=o.concat(this.walkTokens(i.items,t));break}default:{const i=s;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(n=>{const r=i[n].flat(1/0);o=o.concat(this.walkTokens(r,t))}):i.tokens&&(o=o.concat(this.walkTokens(i.tokens,t)))}}return o}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(o=>{const s={...o};if(s.async=this.defaults.async||s.async||!1,o.extensions&&(o.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const n=t.renderers[i.name];n?t.renderers[i.name]=function(...r){let a=i.renderer.apply(this,r);return a===!1&&(a=n.apply(this,r)),a}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const n=t[i.level];n?n.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),o.renderer){const i=this.defaults.renderer||new ps(this.defaults);for(const n in o.renderer){if(!(n in i))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const r=n,a=o.renderer[r],c=i[r];i[r]=(...l)=>{let u=a.apply(i,l);return u===!1&&(u=c.apply(i,l)),u||""}}s.renderer=i}if(o.tokenizer){const i=this.defaults.tokenizer||new hs(this.defaults);for(const n in o.tokenizer){if(!(n in i))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const r=n,a=o.tokenizer[r],c=i[r];i[r]=(...l)=>{let u=a.apply(i,l);return u===!1&&(u=c.apply(i,l)),u}}s.tokenizer=i}if(o.hooks){const i=this.defaults.hooks||new os;for(const n in o.hooks){if(!(n in i))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const r=n,a=o.hooks[r],c=i[r];os.passThroughHooks.has(n)?i[r]=l=>{if(this.defaults.async)return Promise.resolve(a.call(i,l)).then(f=>c.call(i,f));const u=a.call(i,l);return c.call(i,u)}:i[r]=(...l)=>{let u=a.apply(i,l);return u===!1&&(u=c.apply(i,l)),u}}s.hooks=i}if(o.walkTokens){const i=this.defaults.walkTokens,n=o.walkTokens;s.walkTokens=function(r){let a=[];return a.push(n.call(this,r)),i&&(a=a.concat(i.call(this,r))),a}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return pt.lex(e,t??this.defaults)}parser(e,t){return ut.parse(e,t??this.defaults)}parseMarkdown(e){return(o,s)=>{const i={...s},n={...this.defaults,...i},r=this.onError(!!n.silent,!!n.async);if(this.defaults.async===!0&&i.async===!1)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof o>"u"||o===null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof o!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(o)+", string expected"));n.hooks&&(n.hooks.options=n,n.hooks.block=e);const a=n.hooks?n.hooks.provideLexer():e?pt.lex:pt.lexInline,c=n.hooks?n.hooks.provideParser():e?ut.parse:ut.parseInline;if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(o):o).then(l=>a(l,n)).then(l=>n.hooks?n.hooks.processAllTokens(l):l).then(l=>n.walkTokens?Promise.all(this.walkTokens(l,n.walkTokens)).then(()=>l):l).then(l=>c(l,n)).then(l=>n.hooks?n.hooks.postprocess(l):l).catch(r);try{n.hooks&&(o=n.hooks.preprocess(o));let l=a(o,n);n.hooks&&(l=n.hooks.processAllTokens(l)),n.walkTokens&&this.walkTokens(l,n.walkTokens);let u=c(l,n);return n.hooks&&(u=n.hooks.postprocess(u)),u}catch(l){return r(l)}}}onError(e,t){return o=>{if(o.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+nt(o.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(o);throw o}}},Ot=new Ec;function K(e,t){return Ot.parse(e,t)}K.options=K.setOptions=function(e){return Ot.setOptions(e),K.defaults=Ot.defaults,jr(K.defaults),K};K.getDefaults=Di;K.defaults=Ht;K.use=function(...e){return Ot.use(...e),K.defaults=Ot.defaults,jr(K.defaults),K};K.walkTokens=function(e,t){return Ot.walkTokens(e,t)};K.parseInline=Ot.parseInline;K.Parser=ut;K.parser=ut.parse;K.Renderer=ps;K.TextRenderer=Ui;K.Lexer=pt;K.lexer=pt.lex;K.Tokenizer=hs;K.Hooks=os;K.parse=K;K.options;K.setOptions;K.use;K.walkTokens;K.parseInline;ut.parse;pt.lex;const Lc=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","shadow","small","source","spacer","span","strike","strong","sub","summary","sup","table","tbody","td","template","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],Ac=["math","mi","mo","mn","ms","mtext","mrow","semantics","mfrac","annotation","maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","annotation-xml"],Rc=["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot","accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],Pc=Array.from(new Set([...Lc,...Ac])),Dc=Array.from(new Set([...Rc])),zc=/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/,Vn=/^(?:\$(?!\$)([^\$\n]+?)\$|\\\((.+?)\\\))/,Ic=/^(?:\$\$)([\s\S]+?)\$\$|^\\\[((?:\\.|[^\\])+?)\\\]/;function Oc(e={}){return{extensions:[Bc(e,Gn(e,!1)),Fc(e,Gn(e,!0))]}}function Gn(e,t){return o=>katex.renderToString(o.text,{...e,displayMode:o.displayMode})+(t?`
`:"")}function Bc(e,t){const s=e.nonStandard?Vn:zc;return{name:"inlineKatex",level:"inline",start(i){const n=i.indexOf("$"),r=i.indexOf("\\(");if(n===-1&&r===-1)return;const a=n===-1?r:r===-1?n:Math.min(n,r);if(i.slice(a).match(s))return a},tokenizer(i){const n=Vn.exec(i);if(n)return{type:"inlineKatex",raw:n[0],text:(n[1]||n[2]).trim(),displayMode:!1}},renderer:t}}function Fc(e,t){return{name:"blockKatex",level:"block",tokenizer(o){const s=Ic.exec(o);if(s){const i=s[1]||s[2];return{type:"blockKatex",raw:s[0],text:i.trim(),displayMode:!0}}},renderer:t}}var Nc=Object.defineProperty,Hc=(e,t,o,s)=>{for(var i=void 0,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=r(t,o,i)||i);return i&&Nc(t,o,i),i};const Uc=Pc,Wc=Dc,qc={throwOnError:!1,nonStandard:!0,output:"mathml"},Ct=(e,t,o,s,i=8,n)=>{const r=e.querySelector(".popper-arrow");if(!r)throw new Error("Arrow element not found");r.classList.remove("hidden"),Li(t,e,{placement:o,middleware:[$i(i),Ei(),ci({apply({availableWidth:a,elements:c}){n&&Object.assign(c.floating.style,{maxWidth:`${Math.min(n,a)}px`})}}),_i({padding:{top:70,bottom:20}}),Or({element:r}),ul()]}).then(({x:a,y:c,placement:l,middlewareData:u})=>{e.style.left=`${a}px`,e.style.top=`${c}px`;const{x:f,y:k}=u.arrow;let y="bottom";l.includes("top")&&(y="bottom"),l.includes("right")&&(y="left"),l.includes("bottom")&&(y="top"),l.includes("left")&&(y="right"),e.setAttribute("placement",l),r.style.left=f?`${f}px`:"",r.style.top=k?`${k}px`:"",r.style.right="",r.style.bottom="",r.style[y]="-4px",u.hide?.referenceHidden?e.classList.add("no-show"):e.classList.remove("no-show")}).catch(()=>{})},Js=(e,t,o,s=6)=>{Li(e,t,{placement:o,middleware:[$i(s),Ei(),_i()]}).then(({x:i,y:n,middlewareData:r})=>{t.style.left=`${i}px`,t.style.top=`${n}px`,r.hide?.referenceHidden?t.classList.add("hidden"):t.classList.remove("hidden")}).catch(()=>{})},us=(e,t,o,s)=>{"katex"in window&&K.use(Oc(qc));let i=d``;if(t){const n={ALLOWED_TAGS:Uc,ALLOWED_ATTR:Wc};o!==null&&(n.ALLOWED_TAGS=o),s!==null&&(n.ALLOWED_ATTR=s);const r=K(e),a=Gl.sanitize(r,n),c=window.localStorage.getItem("preference-advanced-settings");if((c?JSON.parse(c):null)?.renderHTMLBlock&&/```html[\s\S]*?```/i.test(e)){const f=Array.from(e.matchAll(/```html\s*([\s\S]*?)```/gi)).map(k=>k[1]).join(`
`);i=d`
        <div class="iframe-container">
          <div class="header">HTML Code Block Preview</div>
          <iframe sandbox srcdoc=${f}></iframe>
        </div>
      `}else i=d`<div class="message-text" markdown-rendered="">
        ${F(a)}
      </div>`}else return d`<div class="message-text">${e}</div>`;return i},jc=e=>{const{promise:t,resolve:o,reject:s}=Promise.withResolvers(),i=window.setTimeout(()=>{s("Timeout")},e);return{promise:t,resolve:a=>{clearTimeout(i),o(a)},reject:a=>{clearTimeout(i),s(a)}}},Yo=e=>Object.entries(e).map(([t,o])=>`${t}: ${o};`).join(" "),Vc=e=>{const t=r=>{let a=null;return r.length===2?typeof r[0]=="number"?a=[Number(r[0]),String(r[1])]:a=[String(r[0]),String(r[1])]:r.length===3?typeof r[0]=="number"?a=[Number(r[0]),String(r[1]),String(r[2])]:(a=[String(r[0]),String(r[1]),String(r[2])],s.push(a)):r.length===4&&(typeof r[0]=="number"?a=[Number(r[0]),String(r[1]),String(r[2]),String(r[3])]:a=[String(r[0]),String(r[1]),String(r[2]),String(r[3])]),a},o=[],s=[],i={customLabels:o,customMessageLabels:s};if(!e.metadata)return i;const n=r=>{for(const[a,c]of Object.entries(r))if((a.startsWith("euphony-custom-labels")||a.startsWith("euphony_custom_labels"))&&Array.isArray(c)&&c.length>0)for(const l of c)Array.isArray(l)&&l.length>0&&o.push(l.map(String));else if((a.startsWith("euphony-custom-message-labels")||a.startsWith("euphony_custom_message_labels"))&&Array.isArray(c)&&c.length>0){for(const l of c)if(Array.isArray(l)&&l.length>0){const u=t(l);u!==null&&s.push(u)}}};return n(e.metadata),"extras"in e.metadata&&n(e.metadata.extras),i};class Gc extends he{constructor(){super(...arguments),this.blockContents=[]}}Hc([M()],Gc.prototype,"blockContents");const oa=e=>{if(!e.shadowRoot)throw new Error("Shadow root not initialized");if("blockContents"in e)for(const o of e.blockContents)o.isCollapsed=!1;const t=Array.from(e.shadowRoot.querySelectorAll("*")).filter(o=>o.tagName.startsWith("EUPHONY-")).map(o=>o);for(const o of t)oa(o);"blockContents"in e&&e.blockContents.length>0&&e.requestUpdate()},sa=e=>{if(!e.shadowRoot)throw new Error("Shadow root not initialized");if("blockContents"in e)for(const o of e.blockContents)o.isCollapsed=!0;const t=Array.from(e.shadowRoot.querySelectorAll("*")).filter(o=>o.tagName.startsWith("EUPHONY-")).map(o=>o);for(const o of t)sa(o);"blockContents"in e&&e.blockContents.length>0&&e.requestUpdate()};var Zc=Z`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Ms=Z`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Yc=Z`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,et=Z`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ia=Object.defineProperty,Jc=Object.defineProperties,Kc=Object.getOwnPropertyDescriptor,Xc=Object.getOwnPropertyDescriptors,Zn=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,na=e=>{throw TypeError(e)},Yn=(e,t,o)=>t in e?ia(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Ut=(e,t)=>{for(var o in t||(t={}))Qc.call(t,o)&&Yn(e,o,t[o]);if(Zn)for(var o of Zn(t))ed.call(t,o)&&Yn(e,o,t[o]);return e},Ss=(e,t)=>Jc(e,Xc(t)),g=(e,t,o,s)=>{for(var i=s>1?void 0:s?Kc(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&ia(t,o,i),i},ra=(e,t,o)=>t.has(e)||na("Cannot "+o),td=(e,t,o)=>(ra(e,t,"read from private field"),t.get(e)),od=(e,t,o)=>t.has(e)?na("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),sd=(e,t,o,s)=>(ra(e,t,"write to private field"),t.set(e,o),o),ss,Ie=class extends he{constructor(){super(),od(this,ss,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,Ut({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const s=customElements.get(e);if(!s){try{customElements.define(e,t,o)}catch{customElements.define(e,class extends t{},o)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in s&&s.version&&(n=" v"+s.version),!(i&&n&&i===n)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,o){td(this,ss)||(this.constructor.elementProperties.forEach((s,i)=>{s.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),sd(this,ss,!0)),super.attributeChangedCallback(e,t,o)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,o)=>{e.has(o)&&this[o]==null&&(this[o]=t)})}};ss=new WeakMap;Ie.version="2.20.1";Ie.dependencies={};g([h()],Ie.prototype,"dir",2);g([h()],Ie.prototype,"lang",2);var Do=class extends Ie{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=wo(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=wo(e.target);t?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=wo(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=wo(e.target);t?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),s=wo(t);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",o===0),s.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<e.length-1),s.toggleAttribute("data-sl-button-group__button--last",o===e.length-1),s.toggleAttribute("data-sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return d`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Do.styles=[et,Yc];g([W("slot")],Do.prototype,"defaultSlot",2);g([M()],Do.prototype,"disableRole",2);g([h()],Do.prototype,"label",2);function wo(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}var xo=new WeakMap,ko=new WeakMap,Co=new WeakMap,Ks=new WeakSet,Jo=new WeakMap,$s=class{constructor(e,t){this.handleFormData=o=>{const s=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),r=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!r&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{o.formData.append(i,a.toString())}):o.formData.append(i,n.toString()))},this.handleFormSubmit=o=>{var s;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=xo.get(this.form))==null||s.forEach(r=>{this.setUserInteracted(r,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Jo.set(this.host,[])},this.handleInteraction=o=>{const s=Jo.get(this.host);s.includes(o.type)||s.push(o.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=Ut({form:o=>{const s=o.form;if(s){const n=o.getRootNode().querySelector(`#${s}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var s;return(s=o.disabled)!=null?s:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,s)=>o.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),Jo.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Jo.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,xo.has(this.form)?xo.get(this.form).add(this.host):xo.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ko.has(this.form)||(ko.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Co.has(this.form)||(Co.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=xo.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ko.has(this.form)&&(this.form.reportValidity=ko.get(this.form),ko.delete(this.form)),Co.has(this.form)&&(this.form.checkValidity=Co.get(this.form),Co.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ks.add(e):Ks.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&o.setAttribute(s,t.getAttribute(s))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!Ks.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Wi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),id=Object.freeze(Ss(Ut({},Wi),{valid:!1,valueMissing:!0})),nd=Object.freeze(Ss(Ut({},Wi),{valid:!1,customError:!0})),_s=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function me(e,t){const o=Ut({waitUntilFirstUpdate:!1},t);return(s,i)=>{const{update:n}=s,r=Array.isArray(e)?e:[e];s.update=function(a){r.forEach(c=>{const l=c;if(a.has(l)){const u=a.get(l),f=this[l];u!==f&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](u,f)}}),n.call(this,a)}}}const Ge=Ri(class extends Pi{constructor(e){if(super(e),e.type!==yt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(t)}const o=e.element.classList;for(const s of this.st)s in t||(o.remove(s),this.st.delete(s));for(const s in t){const i=!!t[s];i===this.st.has(s)||this.nt?.has(s)||(i?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return Jt}});var Me=class extends Ie{constructor(){super(...arguments),this.formControlController=new $s(this),this.hasSlotController=new _s(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?nd:e?id:Wi}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),o=this.getAllRadios(),s=this.value;!t||t.disabled||(this.value=t.value,o.forEach(i=>i.checked=i===t),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const o=this.getAllRadios().filter(a=>!a.disabled),s=(t=o.find(a=>a.checked))!=null?t:o[0],i=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let r=o.indexOf(s)+i;r<0&&(r=o.length-1),r>o.length-1&&(r=0),this.getAllRadios().forEach(a=>{a.checked=!1,this.hasButtonGroup||a.setAttribute("tabindex","-1")}),this.value=o[r].value,o[r].checked=!0,this.hasButtonGroup?o[r].shadowRoot.querySelector("button").focus():(o[r].setAttribute("tabindex","0"),o[r].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const o=this.getAllRadios();if(await Promise.all(o.map(async s=>{await s.updateComplete,s.checked=s.value===this.value,s.size=this.size})),this.hasButtonGroup=o.some(s=>s.tagName.toLowerCase()==="sl-radio-button"),o.length>0&&!o.some(s=>s.checked))if(this.hasButtonGroup){const s=(e=o[0].shadowRoot)==null?void 0:e.querySelector("button");s&&s.setAttribute("tabindex","0")}else o[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const s=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");s&&(s.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){const t=this.getAllRadios(),o=t.find(n=>n.checked),s=t.find(n=>!n.disabled),i=o||s;i&&i.focus(e)}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,s=this.helpText?!0:!!t,i=d`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return d`
      <fieldset
        part="form-control"
        class=${Ge({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":o,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?d`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Me.styles=[et,Ms,Zc];Me.dependencies={"sl-button-group":Do};g([W("slot:not([name])")],Me.prototype,"defaultSlot",2);g([W(".radio-group__validation-input")],Me.prototype,"validationInput",2);g([M()],Me.prototype,"hasButtonGroup",2);g([M()],Me.prototype,"errorMessage",2);g([M()],Me.prototype,"defaultValue",2);g([h()],Me.prototype,"label",2);g([h({attribute:"help-text"})],Me.prototype,"helpText",2);g([h()],Me.prototype,"name",2);g([h({reflect:!0})],Me.prototype,"value",2);g([h({reflect:!0})],Me.prototype,"size",2);g([h({reflect:!0})],Me.prototype,"form",2);g([h({type:Boolean,reflect:!0})],Me.prototype,"required",2);g([me("size",{waitUntilFirstUpdate:!0})],Me.prototype,"handleSizeChange",1);g([me("value")],Me.prototype,"handleValueChange",1);Me.define("sl-radio-group");var rd=Z`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,bi="";function Jn(e){bi=e}function ad(e=""){if(!bi){const t=[...document.getElementsByTagName("script")],o=t.find(s=>s.hasAttribute("data-shoelace"));if(o)Jn(o.getAttribute("data-shoelace"));else{const s=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let i="";s&&(i=s.getAttribute("src")),Jn(i.split("/").slice(0,-1).join("/"))}}return bi.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var ld={name:"default",resolver:e=>ad(`assets/icons/${e}.svg`)},cd=ld,Kn={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},dd={name:"system",resolver:e=>e in Kn?`data:image/svg+xml,${encodeURIComponent(Kn[e])}`:""},hd=dd,pd=[cd,hd],vi=[];function ud(e){vi.push(e)}function gd(e){vi=vi.filter(t=>t!==e)}function Xn(e){return pd.find(t=>t.name===e)}var fd=Z`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;const md=(e,t)=>e?._$litType$!==void 0,bd=e=>e.strings===void 0,vd={},yd=(e,t=vd)=>e._$AH=t;var To=Symbol(),Ko=Symbol(),Xs,Qs=new Map,tt=class extends Ie{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let s;if(t?.spriteSheet)return this.svg=d`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?To:Ko}catch{return Ko}try{const i=document.createElement("div");i.innerHTML=await s.text();const n=i.firstElementChild;if(((o=n?.tagName)==null?void 0:o.toLowerCase())!=="svg")return To;Xs||(Xs=new DOMParser);const a=Xs.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):To}catch{return To}}connectedCallback(){super.connectedCallback(),ud(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gd(this)}getIconSource(){const e=Xn(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),s=o?Xn(this.library):void 0;if(!t){this.svg=null;return}let i=Qs.get(t);if(i||(i=this.resolveIcon(t,s),Qs.set(t,i)),!this.initialRender)return;const n=await i;if(n===Ko&&Qs.delete(t),t===this.getIconSource().url){if(md(n)){if(this.svg=n,s){await this.updateComplete;const r=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&r&&s.mutator(r)}return}switch(n){case Ko:case To:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=s?.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};tt.styles=[et,fd];g([M()],tt.prototype,"svg",2);g([h({reflect:!0})],tt.prototype,"name",2);g([h()],tt.prototype,"src",2);g([h()],tt.prototype,"label",2);g([h({reflect:!0})],tt.prototype,"library",2);g([me("label")],tt.prototype,"handleLabelChange",1);g([me(["name","src","library"])],tt.prototype,"setIcon",1);var ct=class extends Ie{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return d`
      <span
        part="base"
        class=${Ge({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?d` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ct.styles=[et,rd];ct.dependencies={"sl-icon":tt};g([M()],ct.prototype,"checked",2);g([M()],ct.prototype,"hasFocus",2);g([h()],ct.prototype,"value",2);g([h({reflect:!0})],ct.prototype,"size",2);g([h({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);g([me("checked")],ct.prototype,"handleCheckedChange",1);g([me("disabled",{waitUntilFirstUpdate:!0})],ct.prototype,"handleDisabledChange",1);ct.define("sl-radio");var wd=Z`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,qi=(e="value")=>(t,o)=>{const s=t.constructor,i=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(n,r,a){var c;const l=s.getPropertyOptions(e),u=typeof l.attribute=="string"?l.attribute:e;if(n===u){const f=l.converter||mn,y=(typeof f=="function"?f:(c=f?.fromAttribute)!=null?c:mn.fromAttribute)(a,l.type);this[e]!==y&&(this[o]=y)}i.call(this,n,r,a)}};const yi=new Set,Kt=new Map;let zt,ji="ltr",Vi="en";const aa=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(aa){const e=new MutationObserver(ca);ji=document.documentElement.dir||"ltr",Vi=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function la(...e){e.map(t=>{const o=t.$code.toLowerCase();Kt.has(o)?Kt.set(o,Object.assign(Object.assign({},Kt.get(o)),t)):Kt.set(o,t),zt||(zt=t)}),ca()}function ca(){aa&&(ji=document.documentElement.dir||"ltr",Vi=document.documentElement.lang||navigator.language),[...yi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let xd=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yi.add(this.host)}hostDisconnected(){yi.delete(this.host)}dir(){return`${this.host.dir||ji}`.toLowerCase()}lang(){return`${this.host.lang||Vi}`.toLowerCase()}getTranslationData(t){var o,s;const i=new Intl.Locale(t.replace(/_/g,"-")),n=i?.language.toLowerCase(),r=(s=(o=i?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&s!==void 0?s:"",a=Kt.get(`${n}-${r}`),c=Kt.get(n);return{locale:i,language:n,region:r,primary:a,secondary:c}}exists(t,o){var s;const{primary:i,secondary:n}=this.getTranslationData((s=o.lang)!==null&&s!==void 0?s:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[t]||n&&n[t]||o.includeFallback&&zt&&zt[t])}term(t,...o){const{primary:s,secondary:i}=this.getTranslationData(this.lang());let n;if(s&&s[t])n=s[t];else if(i&&i[t])n=i[t];else if(zt&&zt[t])n=zt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...o):n}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,o)}};var da={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};la(da);var kd=da,no=class extends xd{};la(kd);const Gi=Ri(class extends Pi{constructor(e){if(super(e),e.type!==yt.PROPERTY&&e.type!==yt.ATTRIBUTE&&e.type!==yt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bd(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Jt||t===is)return t;const o=e.element,s=e.name;if(e.type===yt.PROPERTY){if(t===o[s])return Jt}else if(e.type===yt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(s))return Jt}else if(e.type===yt.ATTRIBUTE&&o.getAttribute(s)===t+"")return Jt;return yd(e),t}});var de=class extends Ie{constructor(){super(...arguments),this.formControlController=new $s(this),this.hasSlotController=new _s(this,"help-text","label"),this.localize=new no(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,o=this.output.offsetWidth,s=getComputedStyle(this.input).getPropertyValue("--thumb-size"),i=this.localize.dir()==="rtl",n=t*e;if(i){const r=`${t-n}px + ${e} * ${s}`;this.output.style.translate=`calc((${r} - ${o/2}px - ${s} / 2))`}else{const r=`${n}px - ${e} * ${s}`;this.output.style.translate=`calc(${r} - ${o/2}px + ${s} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,s=this.helpText?!0:!!t;return d`
      <div
        part="form-control"
        class=${Ge({"form-control":!0,"form-control--medium":!0,"form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ge({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${te(this.name)}
              ?disabled=${this.disabled}
              min=${te(this.min)}
              max=${te(this.max)}
              step=${te(this.step)}
              .value=${Gi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?d`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};de.styles=[et,Ms,wd];g([W(".range__control")],de.prototype,"input",2);g([W(".range__tooltip")],de.prototype,"output",2);g([M()],de.prototype,"hasFocus",2);g([M()],de.prototype,"hasTooltip",2);g([h()],de.prototype,"title",2);g([h()],de.prototype,"name",2);g([h({type:Number})],de.prototype,"value",2);g([h()],de.prototype,"label",2);g([h({attribute:"help-text"})],de.prototype,"helpText",2);g([h({type:Boolean,reflect:!0})],de.prototype,"disabled",2);g([h({type:Number})],de.prototype,"min",2);g([h({type:Number})],de.prototype,"max",2);g([h({type:Number})],de.prototype,"step",2);g([h()],de.prototype,"tooltip",2);g([h({attribute:!1})],de.prototype,"tooltipFormatter",2);g([h({reflect:!0})],de.prototype,"form",2);g([qi()],de.prototype,"defaultValue",2);g([Cl({passive:!0})],de.prototype,"handleThumbDragStart",1);g([me("value",{waitUntilFirstUpdate:!0})],de.prototype,"handleValueChange",1);g([me("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);g([me("hasTooltip",{waitUntilFirstUpdate:!0})],de.prototype,"syncRange",1);de.define("sl-range");var Cd=Z`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Le=class extends Ie{constructor(){super(...arguments),this.formControlController=new $s(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new _s(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return d`
      <div
        class=${Ge({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${Ge({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${te(this.value)}
            .checked=${Gi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Le.styles=[et,Ms,Cd];g([W('input[type="checkbox"]')],Le.prototype,"input",2);g([M()],Le.prototype,"hasFocus",2);g([h()],Le.prototype,"title",2);g([h()],Le.prototype,"name",2);g([h()],Le.prototype,"value",2);g([h({reflect:!0})],Le.prototype,"size",2);g([h({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);g([h({type:Boolean,reflect:!0})],Le.prototype,"checked",2);g([qi("checked")],Le.prototype,"defaultChecked",2);g([h({reflect:!0})],Le.prototype,"form",2);g([h({type:Boolean,reflect:!0})],Le.prototype,"required",2);g([h({attribute:"help-text"})],Le.prototype,"helpText",2);g([me("checked",{waitUntilFirstUpdate:!0})],Le.prototype,"handleCheckedChange",1);g([me("disabled",{waitUntilFirstUpdate:!0})],Le.prototype,"handleDisabledChange",1);Le.define("sl-switch");const Zi=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 62 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="icon-cross">
        <path d="M1.299,60.421C2.861,61.935 5.4,61.935 6.914,60.421L30.84,36.447L54.814,60.421C56.279,61.935 58.867,61.935 60.381,60.421C61.894,58.859 61.894,56.32 60.381,54.855L36.406,30.88L60.381,6.955C61.894,5.441 61.943,2.853 60.381,1.339C58.818,-0.125 56.279,-0.125 54.814,1.339L30.84,25.314L6.914,1.339C5.4,-0.125 2.812,-0.174 1.299,1.339C-0.166,2.902 -0.166,5.441 1.299,6.955L25.273,30.88L1.299,54.855C-0.166,56.32 -0.215,58.908 1.299,60.421Z" style="fill-rule:nonzero;"/>
    </g>
</svg>
`,to=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
</svg>
`,Td='.preference-window{--preference-window-width: 250px;width:var(--preference-window-width);border-radius:8px;overflow:hidden;max-height:calc(100vh - 60px);overflow-y:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;box-sizing:border-box;background-color:#fff;box-shadow:0 0 2px #00000026,0 0 4px #00000012,0 0 12px #00000012;--padding-v: 10px;--padding-h: 12px;--sl-color-primary-600: var(--blue-600);--thumb-size: 5px}.preference-window[is-hidden]{display:none}:host([is-dark-theme]) .preference-window{background-color:var(--gray-900)}:host{position:absolute;top:40px;right:20px;z-index:100}.header{width:100%;height:30px;background-color:var(--gray-100);box-sizing:border-box;font-size:1rem;font-weight:600;padding:0 var(--padding-h);flex-shrink:0;display:flex;justify-content:space-between;align-items:center;cursor:move}:host([is-dark-theme]) .header{background-color:var(--gray-800)}.content{height:100%;width:100%;padding:var(--padding-v) 0;box-sizing:border-box;overflow-y:auto;font-size:var(--font-d1)}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center;-webkit-transform:translate3d(0,0,0)}.svg-icon svg{fill:currentColor;width:100%;height:100%}.svg-icon:before{z-index:-1;content:"";position:absolute;top:50%;left:50%;transform-origin:center;transform:translate(-50%,-50%) scale(0);border-radius:50%;background-color:var(--gray-300);width:100%;height:100%;transition:transform .1s}.svg-icon:hover{color:var(--gray-700)}.svg-icon:hover:before{transform:translate(-50%,-50%) scale(1.7)}.svg-icon:active:before{transform:translate(-50%,-50%) scale(1.9)}button{all:unset}.close-button{padding:2px;box-sizing:border-box;color:var(--gray-500);cursor:pointer;border-radius:3%}.close-button:hover{color:var(--gray-700)}.text-button{height:100%;border-radius:5px;border:1px solid var(--gray-300);color:var(--gray-800);background-color:#fff;line-height:1;display:flex;align-items:center;padding:5px 10px;box-sizing:border-box;position:relative;cursor:pointer;transition:background linear .1s,border linear .1s}.text-button.disabled{cursor:no-drop;border:1px solid var(--gray-300);color:var(--gray-600);background:var(--gray-100)}.text-button:not(.disabled):hover{border:1px solid color-mix(in lab,var(--gray-300),black 5%);background-color:color-mix(in lab,var(--gray-100),white 5%)}.text-button:not(.disabled):active{background-color:color-mix(in lab,var(--gray-100),white 100%);border:1px solid var(--gray-300)}.divider{box-sizing:border-box;width:100%;height:1px;background-color:var(--gray-200);margin:8px 0}.divider[is-hidden]{display:none}.setting-block{box-sizing:border-box;padding:0 var(--padding-h);display:flex;flex-direction:column;gap:1px;width:100%}.setting-block[is-hidden]{display:none}.setting-block .setting-block-header{font-weight:600;width:100%}.setting-block .setting-block-content{width:100%;display:flex;flex-direction:column;padding-bottom:5px}.setting-block .setting-block-content[is-hidden]{display:none}.form-row{display:flex;flex-wrap:wrap;width:100%;align-items:center;column-gap:8px;row-gap:8px;font-size:var(--font-d2)}.form-row.form-row-quick-actions,.checkbox-block{margin-top:5px}.form-block{display:flex;flex-flow:row wrap;gap:10px;font-size:var(--font-d2)}.form-block label{white-space:nowrap;max-width:calc(var(--preference-window-width) - 50px);overflow:clip;overflow-clip-margin:2px;text-overflow:ellipsis}.form-block-header{display:flex;margin-bottom:-5px;width:100%;font-size:var(--font-d2);font-weight:600}.checkbox-group{display:flex;align-items:center;flex-wrap:nowrap;white-space:nowrap;line-height:1;gap:4px}input[type=checkbox]{margin:0;padding:0;accent-color:var(--sl-color-primary-600, var(--theme-blue-600))}nightjar-slider{width:100%}sl-range{margin-top:4px;--thumb-size: 16px;width:calc(100% - 10px)}sl-switch{--height: 1.1em;--thumb-size: calc(1.1em - 2px) }.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:2;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.5;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column;overflow-y:auto}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}.collapse-icon{transform:rotate(90deg);width:.7em;height:.7em;padding:2px;border-radius:0;color:var(--theme-gray-700);cursor:pointer;margin-right:2px}.collapse-icon[is-collapsed]{transform:rotate(0)}.collapse-icon:hover{color:var(--theme-gray-800)}.collapse-icon.svg-icon:before{border-radius:5px;background-color:var(--gray-200)}.collapse-icon.svg-icon:hover:before{transform:translate(-50%,-50%) scale(1.5)}.collapse-icon.svg-icon:active:before{transform:translate(-50%,-50%) scale(1.6)}';var Md=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Oe=(e,t,o,s)=>{for(var i=s>1?void 0:s?Sd(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Md(t,o,i),i};const Qn=3e3,er=300,tr=200,or=800,ei=300,sr={absoluteTimestamp:!1},ir={renderHTMLBlock:!1},$d={author:[],recipient:[],contentType:[]},_d=["user","assistant","system","developer","tool"].toSorted(),Ed=["all"].toSorted(),Ld=[...Sa].sort();let Te=class extends he{constructor(){super(),this.enabledOptions={maxMessageHeight:!0,gridView:!1,expandAndCollapseAll:!0,advanced:!0,messageLabel:!0,focusMode:!0,comparisonWidth:!1},this.defaultOptions={gridView:!1,gridViewColumnWidth:er,comparisonWidth:ei},this.isDarkTheme=!1,this.useCustomMessageHeight=!1,this.preferenceMaxMessageHeightMode="automatic",this.preferenceCustomMaxMessageHeight=300,this.preferenceCustomGridViewColumnWidth=er,this.preferenceCustomComparisonWidth=ei,this.isAdvancedSectionCollapsed=!0,this.isFocusModeSectionCollapsed=!0,this.messageLabelSettings={...sr},this.advancedSettings={...ir},this.focusModeSettings={...$d},this.isGridView=!1,this.tooltipDebouncer=null}loadPreferencesFromStorage(){const e=window.localStorage.getItem("preference-max-message-height-mode");e&&(this.preferenceMaxMessageHeightMode=e,this.useCustomMessageHeight=this.preferenceMaxMessageHeightMode==="custom");const t=window.localStorage.getItem("preference-max-message-height");t&&(this.preferenceCustomMaxMessageHeight=Math.max(0,Math.min(Qn,parseInt(t)))),this.preferenceMaxMessageHeightMode!=="automatic"&&this.notifyParentMaxMessageHeight();const o=window.localStorage.getItem("preference-comparison-width");if(o){const r=parseInt(o);this.preferenceCustomComparisonWidth=Math.max(tr,Math.min(or,r)),this.preferenceCustomComparisonWidth!==ei&&this.notifyParentComparisonWidth()}const s=window.localStorage.getItem("preference-message-label-settings");s&&(this.messageLabelSettings=JSON.parse(s),this.messageLabelSettings.absoluteTimestamp!==sr.absoluteTimestamp&&this.notifyParentMessageLabelSettings());const i=window.localStorage.getItem("preference-advanced-settings");if(i){const r=JSON.parse(i);this.advancedSettings={...ir,...r}}const n=window.localStorage.getItem("preference-focus-mode-settings");n&&(this.focusModeSettings=JSON.parse(n),(this.focusModeSettings.author.length>0||this.focusModeSettings.recipient.length>0||this.focusModeSettings.contentType.length>0)&&this.notifyParentFocusModeSettings())}writePreferencesToStorage(){window.localStorage.setItem("preference-max-message-height-mode",this.preferenceMaxMessageHeightMode),window.localStorage.setItem("preference-max-message-height",this.preferenceCustomMaxMessageHeight.toString()),window.localStorage.setItem("preference-comparison-width",this.preferenceCustomComparisonWidth.toString()),window.localStorage.setItem("preference-message-label-settings",JSON.stringify(this.messageLabelSettings)),window.localStorage.setItem("preference-advanced-settings",JSON.stringify(this.advancedSettings)),window.localStorage.setItem("preference-focus-mode-settings",JSON.stringify(this.focusModeSettings))}firstUpdated(){this.loadPreferencesFromStorage()}willUpdate(e){e.has("defaultOptions")&&(this.isGridView=this.defaultOptions.gridView,this.preferenceCustomGridViewColumnWidth=this.defaultOptions.gridViewColumnWidth,this.preferenceCustomComparisonWidth=this.defaultOptions.comparisonWidth)}async initData(){}onDragStart(e){e.preventDefault();const t=e.clientX,o=e.clientY,s=this.offsetTop,i=this.offsetLeft,n=a=>{const c=a.clientX-t,l=a.clientY-o;this.style.top=`${s+l}px`,this.style.left=`${i+c}px`},r=()=>{window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)}maxMessageHeightRadioChanged(){if(!this.radioGroupMaxMessageHeight)throw Error("Radio group max message height not found");const e=this.radioGroupMaxMessageHeight.value;switch(e){case"automatic":this.preferenceMaxMessageHeightMode="automatic",this.useCustomMessageHeight=!1;break;case"no-limit":this.preferenceMaxMessageHeightMode="no-limit",this.useCustomMessageHeight=!1;break;case"custom":this.preferenceMaxMessageHeightMode="custom",this.useCustomMessageHeight=!0;break;default:throw Error(`Invalid value for max message height: ${e}`)}this.writePreferencesToStorage(),this.notifyParentMaxMessageHeight()}maxMessageHeightRangeInput(e){const t=e.target;this.preferenceCustomMaxMessageHeight=t.value,this.notifyParentMaxMessageHeight()}maxMessageHeightRangeChanged(e){const t=e.target;this.preferenceCustomMaxMessageHeight=t.value,this.writePreferencesToStorage(),this.notifyParentMaxMessageHeight()}layoutRadioChanged(){if(!this.radioGroupLayout)throw Error("Radio group layout not found");const e=this.radioGroupLayout.value;switch(e){case"list":this.isGridView=!1;break;case"grid":this.isGridView=!0;break;default:throw Error(`Invalid value for layout: ${e}`)}this.notifyParentLayoutChange(e),e==="grid"&&this.notifyParentGridViewColumnWidth()}gridViewColumnWidthRangeInput(e){const t=e.target;this.preferenceCustomGridViewColumnWidth=t.value,this.notifyParentGridViewColumnWidth()}gridViewColumnWidthRangeChanged(e){const t=e.target;this.preferenceCustomGridViewColumnWidth=t.value,this.writePreferencesToStorage(),this.notifyParentGridViewColumnWidth()}comparisonWidthRangeInput(e){const t=e.target;this.preferenceCustomComparisonWidth=t.value,this.notifyParentComparisonWidth()}comparisonWidthRangeChanged(e){const t=e.target;this.preferenceCustomComparisonWidth=t.value,this.writePreferencesToStorage(),this.notifyParentComparisonWidth()}expandAllButtonClicked(){this.dispatchEvent(new Event("expand-all-clicked",{bubbles:!0,composed:!0}))}collapseAllButtonClicked(){this.dispatchEvent(new Event("collapse-all-clicked",{bubbles:!0,composed:!0}))}translateAllButtonClicked(){this.dispatchEvent(new Event("translate-all-clicked",{bubbles:!0,composed:!0}))}messageLabelCheckBoxChanged(e,t){const o=e.target;this.messageLabelSettings[t]=o.checked,this.writePreferencesToStorage(),this.notifyParentMessageLabelSettings()}advancedCheckboxChanged(e,t){const o=e.target;this.advancedSettings[t]=o.checked,this.writePreferencesToStorage(),this.notifyParentAdvancedSettings()}focusModeCheckBoxChanged(e,t,o){e.target.checked?this.focusModeSettings[t].push(o):this.focusModeSettings[t]=this.focusModeSettings[t].filter(i=>i!==o),this.writePreferencesToStorage(),this.notifyParentFocusModeSettings()}tooltipTargetMouseEnter(e,t,o){if(e.stopPropagation(),e.preventDefault(),!this.popperTooltip){console.error("Popper tooltip not initialized.");return}const s=e.currentTarget;this.tooltipDebouncer&&clearTimeout(this.tooltipDebouncer),this.tooltipDebouncer=window.setTimeout(()=>{const i=this.popperTooltip.querySelector(".popper-label");let n="Button";switch(t){case"absoluteTimestamp":{n="Always show the absolute timestamp of the message's create time instead of relative to the first message";break}case"renderHTMLBlock":{n="Use a sandboxed iframe to render html code blocks in markdown. Refresh the page after changing this setting.";break}case"focusModeAuthor":{n=`Show messages with author ${o?` ${o}`:""}`;break}case"focusModeRecipient":{n=`Show messages with recipient ${o?` ${o}`:""}`;break}case"focusModeMessageContentType":{n=`Show messages with type ${o?` ${o}`:""}`;break}}i.textContent=n,Ct(this.popperTooltip,s,"top",!0,7),this.popperTooltip.classList.remove("hidden")},500)}tooltipTargetMouseLeave(e=!0){if(!this.popperTooltip){console.error("popperTooltip are not initialized yet.");return}this.tooltipDebouncer&&(clearTimeout(this.tooltipDebouncer),this.tooltipDebouncer=null),e?this.popperTooltip.classList.add("hidden"):(this.popperTooltip.classList.add("no-transition"),this.popperTooltip.classList.add("hidden"),setTimeout(()=>{this.popperTooltip.classList.remove("no-transition")},150))}notifyParentMaxMessageHeight(){let e="100vh";this.preferenceMaxMessageHeightMode==="no-limit"?e="none":this.preferenceMaxMessageHeightMode==="custom"&&(e=`${this.preferenceCustomMaxMessageHeight}px`);const t=new CustomEvent("max-message-height-changed",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(t)}notifyParentGridViewColumnWidth(){const e=new CustomEvent("grid-view-column-width-changed",{bubbles:!0,composed:!0,detail:`${this.preferenceCustomGridViewColumnWidth}px`});this.dispatchEvent(e)}notifyParentComparisonWidth(){const e=new CustomEvent("comparison-width-changed",{bubbles:!0,composed:!0,detail:`${this.preferenceCustomComparisonWidth}px`});this.dispatchEvent(e)}notifyParentLayoutChange(e){const t=new CustomEvent("layout-changed",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(t)}notifyParentMessageLabelSettings(){const e=new CustomEvent("message-label-changed",{bubbles:!0,composed:!0,detail:this.messageLabelSettings});this.dispatchEvent(e)}notifyParentAdvancedSettings(){const e=new CustomEvent("advanced-settings-changed",{bubbles:!0,composed:!0,detail:this.advancedSettings});this.dispatchEvent(e)}notifyParentFocusModeSettings(){const e=new CustomEvent("focus-mode-settings-changed",{bubbles:!0,composed:!0,detail:this.focusModeSettings});this.dispatchEvent(e)}render(){const e=d`
      <div
        id="popper-tooltip"
        class="popper-tooltip hidden"
        role="tooltip"
        @click=${i=>{i.stopPropagation()}}
      >
        <div class="popper-content">
          <span class="popper-label">Hello</span>
        </div>
        <div class="popper-arrow"></div>
      </div>
    `;let t=d``;for(const i of _d)t=d`${t}
        <div
          class="checkbox-group"
          @mouseover=${n=>{this.tooltipTargetMouseEnter(n,"focusModeAuthor",i)}}
          @mouseleave=${()=>{this.tooltipTargetMouseLeave()}}
        >
          <input
            type="checkbox"
            id="checkbox-focus-mode-author-${i}"
            .checked=${this.focusModeSettings.author.includes(i)}
            @change=${n=>{this.focusModeCheckBoxChanged(n,"author",i)}}
          />
          <label for="checkbox-focus-mode-author-${i}">${i}</label>
        </div> `;let o=d``;for(const i of Ed)o=d`${o}
        <div
          class="checkbox-group"
          @mouseover=${n=>{this.tooltipTargetMouseEnter(n,"focusModeRecipient",i)}}
          @mouseleave=${()=>{this.tooltipTargetMouseLeave()}}
        >
          <input
            type="checkbox"
            id="checkbox-focus-mode-recipient-${i}"
            .checked=${this.focusModeSettings.recipient.includes(i)}
            @change=${n=>{this.focusModeCheckBoxChanged(n,"recipient",i)}}
          />
          <label for="checkbox-focus-mode-recipient-${i}"
            >${i}</label
          >
        </div> `;let s=d``;for(const i of Ld)s=d`${s}
        <div
          class="checkbox-group"
          @mouseover=${n=>{this.tooltipTargetMouseEnter(n,"focusModeMessageContentType",i)}}
          @mouseleave=${()=>{this.tooltipTargetMouseLeave()}}
        >
          <input
            type="checkbox"
            id="checkbox-focus-mode-content-type-${i}"
            .checked=${this.focusModeSettings.contentType.includes(i)}
            @change=${n=>{this.focusModeCheckBoxChanged(n,"contentType",i)}}
          />
          <label for="checkbox-focus-mode-content-type-${i}"
            >${i}</label
          >
        </div> `;return d`
      ${e}
      <div class="preference-window">
        <div
          class="header"
          @mousedown=${i=>{this.onDragStart(i)}}
        >
          <span class="title">Preferences</span>
          <button
            class="close-button svg-icon"
            @click=${()=>{const i=new CustomEvent("preference-window-close-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(i)}}
          >
            ${F(Zi)}
          </button>
        </div>

        <div class="content">
          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.maxMessageHeight}
          >
            <div class="setting-block-header">Max Message Height</div>
            <div class="setting-block-content">
              <div class="form-row">
                <sl-radio-group
                  size="small"
                  name="max-message-height"
                  id="radio-group-max-message-height"
                  value=${this.preferenceMaxMessageHeightMode}
                  @sl-change=${()=>{this.maxMessageHeightRadioChanged()}}
                >
                  <sl-radio size="small" value="automatic">Automatic</sl-radio>
                  <sl-radio size="small" value="no-limit">No Limit</sl-radio>
                  <sl-radio size="small" value="custom"
                    >Custom Height
                    (${this.preferenceCustomMaxMessageHeight}px)</sl-radio
                  >
                </sl-radio-group>
              </div>

              <div class="form-row">
                <sl-range
                  @sl-input=${i=>{this.maxMessageHeightRangeInput(i)}}
                  @sl-change=${i=>{this.maxMessageHeightRangeChanged(i)}}
                  ?disabled=${!this.useCustomMessageHeight}
                  min="50"
                  max=${Qn}
                  value=${this.preferenceCustomMaxMessageHeight}
                ></sl-range>
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.maxMessageHeight}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.messageLabel}
          >
            <div class="setting-block-header">Message Labels</div>
            <div class="setting-block-content">
              <div class="form-block checkbox-block">
                <div
                  class="checkbox-group"
                  @mouseover=${i=>{this.tooltipTargetMouseEnter(i,"absoluteTimestamp")}}
                  @mouseleave=${()=>{this.tooltipTargetMouseLeave()}}
                >
                  <input
                    type="checkbox"
                    id="checkbox-absolute-timestamp"
                    .checked=${this.messageLabelSettings.absoluteTimestamp}
                    @change=${i=>{this.messageLabelCheckBoxChanged(i,"absoluteTimestamp")}}
                  />
                  <label for="checkbox-absolute-timestamp"
                    >absolute timestamp</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.messageLabel}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.gridView}
          >
            <div class="setting-block-header">Layout</div>
            <div class="setting-block-content">
              <div class="form-row">
                <sl-radio-group
                  size="small"
                  name="layout"
                  id="radio-group-layout"
                  value=${this.isGridView?"grid":"list"}
                  @sl-change=${()=>{this.layoutRadioChanged()}}
                >
                  <sl-radio size="small" value="list">List View</sl-radio>
                  <sl-radio size="small" value="grid"
                    >Grid View (
                    ${this.preferenceCustomGridViewColumnWidth}px)</sl-radio
                  >
                </sl-radio-group>
              </div>

              <div class="form-row">
                  <sl-range
                    @sl-input=${i=>{this.gridViewColumnWidthRangeInput(i)}}
                  @sl-change=${i=>{this.gridViewColumnWidthRangeChanged(i)}}
                  min="200"
                  max="800"
                  ?disabled=${!this.isGridView}
                  value=${this.preferenceCustomGridViewColumnWidth}
                ></sl-range>
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.gridView}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.comparisonWidth}
          >
            <div class="setting-block-header">
              Comparison Width (${this.preferenceCustomComparisonWidth}px)
            </div>
            <div class="setting-block-content">
              <div class="form-row">
                <sl-range
                  @sl-input=${i=>{this.comparisonWidthRangeInput(i)}}
                  @sl-change=${i=>{this.comparisonWidthRangeChanged(i)}}
                  min=${tr}
                  max=${or}
                  value=${this.preferenceCustomComparisonWidth}
                ></sl-range>
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.comparisonWidth}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.focusMode}
          >
            <div class="setting-block-header">
              <button
                class="svg-icon collapse-icon"
                ?is-collapsed=${this.isFocusModeSectionCollapsed}
                @click=${()=>{this.isFocusModeSectionCollapsed=!this.isFocusModeSectionCollapsed}}
              >
                ${F(to)}
              </button>
              <span>Focus Mode</span>
            </div>
            <div
              class="setting-block-content"
              ?is-hidden=${this.isFocusModeSectionCollapsed}
            >
              <div class="form-block checkbox-block">
                <div class="form-block-header">Focus by author</div>
                ${t}
                <div class="form-block-header">Focus by recipient</div>
                ${o}
                <div class="form-block-header">Focus by content type</div>
                ${s}
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.focusMode}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.advanced}
          >
            <div class="setting-block-header">
              <button
                class="svg-icon collapse-icon"
                ?is-collapsed=${this.isAdvancedSectionCollapsed}
                @click=${()=>{this.isAdvancedSectionCollapsed=!this.isAdvancedSectionCollapsed}}
              >
                ${F(to)}
              </button>
              <span>Advanced</span>
            </div>
            <div
              class="setting-block-content"
              ?is-hidden=${this.isAdvancedSectionCollapsed}
            >
              <div class="form-block checkbox-block">
                <div
                  class="checkbox-group"
                  @mouseover=${i=>{this.tooltipTargetMouseEnter(i,"renderHTMLBlock")}}
                  @mouseleave=${()=>{this.tooltipTargetMouseLeave()}}
                >
                  <input
                    type="checkbox"
                    id="checkbox-render-html-block"
                    .checked=${this.advancedSettings.renderHTMLBlock}
                    @change=${i=>{this.advancedCheckboxChanged(i,"renderHTMLBlock")}}
                  />
                  <label for="checkbox-render-html-block"
                    >render html code block</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="divider"
            ?is-hidden=${!this.enabledOptions.advanced}
          ></div>

          <div
            class="setting-block"
            ?is-hidden=${!this.enabledOptions.expandAndCollapseAll}
          >
            <div class="setting-block-header">Quick Actions</div>
            <div class="setting-block-content">
              <div class="form-row form-row-quick-actions">
                <button
                  class="text-button"
                  @click=${()=>{this.expandAllButtonClicked()}}
                >
                  Expand All
                </button>
                <button
                  class="text-button"
                  @click=${()=>{this.collapseAllButtonClicked()}}
                >
                  Collapse All
                </button>
                <button
                  class="text-button"
                  @click=${()=>{this.translateAllButtonClicked()}}
                >
                  Translate All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};Te.styles=[Z`
      ${ie(Td)}
    `];Oe([h({type:Object})],Te.prototype,"enabledOptions",2);Oe([h({type:Object})],Te.prototype,"defaultOptions",2);Oe([h({type:Boolean,attribute:"is-dark-theme",reflect:!0})],Te.prototype,"isDarkTheme",2);Oe([M()],Te.prototype,"useCustomMessageHeight",2);Oe([M()],Te.prototype,"preferenceMaxMessageHeightMode",2);Oe([M()],Te.prototype,"preferenceCustomMaxMessageHeight",2);Oe([M()],Te.prototype,"preferenceCustomGridViewColumnWidth",2);Oe([M()],Te.prototype,"preferenceCustomComparisonWidth",2);Oe([M()],Te.prototype,"isAdvancedSectionCollapsed",2);Oe([M()],Te.prototype,"isFocusModeSectionCollapsed",2);Oe([M()],Te.prototype,"isGridView",2);Oe([W("#radio-group-max-message-height")],Te.prototype,"radioGroupMaxMessageHeight",2);Oe([W("#radio-group-layout")],Te.prototype,"radioGroupLayout",2);Oe([W("#popper-tooltip")],Te.prototype,"popperTooltip",2);Te=Oe([ye("euphony-preference-window")],Te);var Ad=Z`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Rd=Z`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;function Pd(e){return Dd(e)}function ti(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Dd(e){for(let t=e;t;t=ti(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ti(e);t;t=ti(t)){if(!(t instanceof Element))continue;const o=getComputedStyle(t);if(o.display!=="contents"&&(o.position!=="static"||ws(o)||t.tagName==="BODY"))return t}return null}function zd(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e.contextElement instanceof Element:!0)}var ne=class extends Ie{constructor(){super(...arguments),this.localize=new no(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let s=0,i=0,n=0,r=0,a=0,c=0,l=0,u=0;o?e.top<t.top?(s=e.left,i=e.bottom,n=e.right,r=e.bottom,a=t.left,c=t.top,l=t.right,u=t.top):(s=t.left,i=t.bottom,n=t.right,r=t.bottom,a=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(s=e.right,i=e.top,n=t.left,r=t.top,a=e.right,c=e.bottom,l=t.left,u=t.bottom):(s=t.right,i=t.top,n=e.left,r=e.top,a=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||zd(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=es(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[$i({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ci({apply:({rects:o})=>{const s=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Ei({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(_i({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(ci({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Or({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?o=>Qo.getOffsetParent(o,Pd):Qo.getOffsetParent;Li(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Ss(Ut({},Qo),{getOffsetParent:t})}).then(({x:o,y:s,middlewareData:i,placement:n})=>{const r=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${s}px`}),this.arrow){const c=i.arrow.x,l=i.arrow.y;let u="",f="",k="",y="";if(this.arrowPlacement==="start"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",f=r?v:"",y=r?"":v}else if(this.arrowPlacement==="end"){const v=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";f=r?"":v,y=r?v:"",k=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(y=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(y=typeof c=="number"?`${c}px`:"",u=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:u,right:f,bottom:k,left:y,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return d`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ge({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ge({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?d`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};ne.styles=[et,Rd];g([W(".popup")],ne.prototype,"popup",2);g([W(".popup__arrow")],ne.prototype,"arrowEl",2);g([h()],ne.prototype,"anchor",2);g([h({type:Boolean,reflect:!0})],ne.prototype,"active",2);g([h({reflect:!0})],ne.prototype,"placement",2);g([h({reflect:!0})],ne.prototype,"strategy",2);g([h({type:Number})],ne.prototype,"distance",2);g([h({type:Number})],ne.prototype,"skidding",2);g([h({type:Boolean})],ne.prototype,"arrow",2);g([h({attribute:"arrow-placement"})],ne.prototype,"arrowPlacement",2);g([h({attribute:"arrow-padding",type:Number})],ne.prototype,"arrowPadding",2);g([h({type:Boolean})],ne.prototype,"flip",2);g([h({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],ne.prototype,"flipFallbackPlacements",2);g([h({attribute:"flip-fallback-strategy"})],ne.prototype,"flipFallbackStrategy",2);g([h({type:Object})],ne.prototype,"flipBoundary",2);g([h({attribute:"flip-padding",type:Number})],ne.prototype,"flipPadding",2);g([h({type:Boolean})],ne.prototype,"shift",2);g([h({type:Object})],ne.prototype,"shiftBoundary",2);g([h({attribute:"shift-padding",type:Number})],ne.prototype,"shiftPadding",2);g([h({attribute:"auto-size"})],ne.prototype,"autoSize",2);g([h()],ne.prototype,"sync",2);g([h({type:Object})],ne.prototype,"autoSizeBoundary",2);g([h({attribute:"auto-size-padding",type:Number})],ne.prototype,"autoSizePadding",2);g([h({attribute:"hover-bridge",type:Boolean})],ne.prototype,"hoverBridge",2);var ha=new Map,Id=new WeakMap;function Od(e){return e??{keyframes:[],options:{duration:0}}}function nr(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Es(e,t){ha.set(e,Od(t))}function gs(e,t,o){const s=Id.get(e);if(s?.[t])return nr(s[t],o.dir);const i=ha.get(t);return i?nr(i,o.dir):{keyframes:[],options:{duration:0}}}function rr(e,t){return new Promise(o=>{function s(i){i.target===e&&(e.removeEventListener(t,s),o())}e.addEventListener(t,s)})}function ar(e,t,o){return new Promise(s=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,Ss(Ut({},o),{duration:Bd()?0:o.duration}));i.addEventListener("cancel",s,{once:!0}),i.addEventListener("finish",s,{once:!0})})}function lr(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Bd(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function cr(e){return Promise.all(e.getAnimations().map(t=>new Promise(o=>{t.cancel(),requestAnimationFrame(o)})))}var Se=class extends Ie{constructor(){super(),this.localize=new no(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=lr(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=lr(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await cr(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:s}=gs(this,"tooltip.show",{dir:this.localize.dir()});await ar(this.popup.popup,o,s),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await cr(this.body);const{keyframes:o,options:s}=gs(this,"tooltip.hide",{dir:this.localize.dir()});await ar(this.popup.popup,o,s),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,rr(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,rr(this,"sl-after-hide")}render(){return d`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ge({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Se.styles=[et,Ad];Se.dependencies={"sl-popup":ne};g([W("slot:not([name])")],Se.prototype,"defaultSlot",2);g([W(".tooltip__body")],Se.prototype,"body",2);g([W("sl-popup")],Se.prototype,"popup",2);g([h()],Se.prototype,"content",2);g([h()],Se.prototype,"placement",2);g([h({type:Boolean,reflect:!0})],Se.prototype,"disabled",2);g([h({type:Number})],Se.prototype,"distance",2);g([h({type:Boolean,reflect:!0})],Se.prototype,"open",2);g([h({type:Number})],Se.prototype,"skidding",2);g([h()],Se.prototype,"trigger",2);g([h({type:Boolean})],Se.prototype,"hoist",2);g([me("open",{waitUntilFirstUpdate:!0})],Se.prototype,"handleOpenChange",1);g([me(["content","distance","hoist","placement","skidding"])],Se.prototype,"handleOptionsChange",1);g([me("disabled")],Se.prototype,"handleDisabledChange",1);Es("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Es("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Fd=Z`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,xe=class extends Ie{constructor(){super(...arguments),this.localize=new no(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),o=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let i=this.from,n="";o?[i,n]=this.from.trim().split("."):s&&([i,n]=this.from.trim().replace(/\]$/,"").split("["));const r="getElementById"in t?t.getElementById(i):null;r?s?e=r.getAttribute(n)||"":o?e=r[n]||"":e=r.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,n=gs(this,"copy.in",{dir:"ltr"}),r=gs(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?o:s,await this.copyIcon.animate(r.keyframes,r.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await i.animate(r.keyframes,r.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return d`
      <sl-tooltip
        class=${Ge({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};xe.styles=[et,Fd];xe.dependencies={"sl-icon":tt,"sl-tooltip":Se};g([W('slot[name="copy-icon"]')],xe.prototype,"copyIcon",2);g([W('slot[name="success-icon"]')],xe.prototype,"successIcon",2);g([W('slot[name="error-icon"]')],xe.prototype,"errorIcon",2);g([W("sl-tooltip")],xe.prototype,"tooltip",2);g([M()],xe.prototype,"isCopying",2);g([M()],xe.prototype,"status",2);g([h()],xe.prototype,"value",2);g([h()],xe.prototype,"from",2);g([h({type:Boolean,reflect:!0})],xe.prototype,"disabled",2);g([h({attribute:"copy-label"})],xe.prototype,"copyLabel",2);g([h({attribute:"success-label"})],xe.prototype,"successLabel",2);g([h({attribute:"error-label"})],xe.prototype,"errorLabel",2);g([h({attribute:"feedback-duration",type:Number})],xe.prototype,"feedbackDuration",2);g([h({attribute:"tooltip-placement"})],xe.prototype,"tooltipPlacement",2);g([h({type:Boolean})],xe.prototype,"hoist",2);Es("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Es("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});xe.define("sl-copy-button");var Nd=Z`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Hd(e,t){function o(i){const n=e.getBoundingClientRect(),r=e.ownerDocument.defaultView,a=n.left+r.scrollX,c=n.top+r.scrollY,l=i.pageX-a,u=i.pageY-c;t?.onMove&&t.onMove(l,u)}function s(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",s),t?.onStop&&t.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",s),t?.initialEvent instanceof PointerEvent&&o(t.initialEvent)}function dr(e,t,o){const s=i=>Object.is(i,-0)?0:i;return e<t?s(t):e>o?s(o):s(e)}var hr=()=>null,We=class extends Ie{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new no(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=hr,this.snapThreshold=12}toSnapFunction(e){const t=e.split(" ");return({pos:o,size:s,snapThreshold:i,isRtl:n,vertical:r})=>{let a=o,c=Number.POSITIVE_INFINITY;return t.forEach(l=>{let u;if(l.startsWith("repeat(")){const k=e.substring(7,e.length-1),y=k.endsWith("%"),v=Number.parseFloat(k),C=y?s*(v/100):v;u=Math.round((n&&!r?s-o:o)/C)*C}else l.endsWith("%")?u=s*(Number.parseFloat(l)/100):u=Number.parseFloat(l);n&&!r&&(u=s-u);const f=Math.abs(o-u);f<=i&&f<c&&(a=u,c=f)}),a}}set snap(e){this.snapValue=e??"",e?this.snapFunction=typeof e=="string"?this.toSnapFunction(e):e:this.snapFunction=hr}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Hd(this,{onMove:(o,s)=>{var i;let n=this.vertical?s:o;this.primary==="end"&&(n=this.size-n),n=(i=this.snapFunction({pos:n,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical}))!=null?i:n,this.position=dr(this.pixelsToPercentage(n),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(e.key)){let t=this.position;const o=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);if(e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=o),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=o),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),e.key==="Enter")if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const s=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=s})}this.position=dr(t,0,100)}}handleResize(e){const{width:t,height:o}=e[0].contentRect;this.size=this.vertical?o:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",o=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i="auto";return this.primary==="end"?o&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${s}`:o&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${i}`,this.style[t]="",d`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${te(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};We.styles=[et,Nd];g([W(".divider")],We.prototype,"divider",2);g([h({type:Number,reflect:!0})],We.prototype,"position",2);g([h({attribute:"position-in-pixels",type:Number})],We.prototype,"positionInPixels",2);g([h({type:Boolean,reflect:!0})],We.prototype,"vertical",2);g([h({type:Boolean,reflect:!0})],We.prototype,"disabled",2);g([h()],We.prototype,"primary",2);g([h({reflect:!0})],We.prototype,"snap",1);g([h({type:Number,attribute:"snap-threshold"})],We.prototype,"snapThreshold",2);g([me("position")],We.prototype,"handlePositionChange",1);g([me("positionInPixels")],We.prototype,"handlePositionInPixelsChange",1);g([me("vertical")],We.prototype,"handleVerticalChange",1);We.define("sl-split-panel");const Ud=".floating-toolbar{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:3px;padding:2px 7px;box-sizing:border-box;border-radius:7px;color:var(--theme-gray-600);background-color:var(--theme-white-secondary);box-shadow:0 0 1px #0003,0 0 3px #0003,0 0 10px #00000012}:host{position:absolute;z-index:1;display:flex}button{all:unset}.icon{cursor:pointer;padding:3px;border-radius:5px}.icon:hover{background-color:var(--theme-gray-200)}.icon:active{background-color:var(--theme-theme-gray-100)}.icon[is-hidden]{display:none}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:.9em;height:.9em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:1;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);line-height:.9;display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.2;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}";var Wd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,Ls=(e,t,o,s)=>{for(var i=s>1?void 0:s?qd(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Wd(t,o,i),i};const pr=5;let oo=class extends he{constructor(){super(),this.buttons=[],this.disappearTimeout=null,this.lastAnchor=null,this.toolbarTooltipDebouncer=null}firstUpdated(){}willUpdate(e){}async initData(){}updateCurrentTooltip(e){if(!this.popperTooltip){console.error("Popper tooltip not initialized.");return}if(!this.lastAnchor){console.warn("Last anchor not initialized.");return}const t=this.lastAnchor,o=this.popperTooltip.querySelector(".popper-label");o.textContent=e,Ct(this.popperTooltip,t,"top",!0,pr)}toolButtonMouseEnter(e,t){if(e.stopPropagation(),e.preventDefault(),!this.popperTooltip){console.error("Popper tooltip not initialized.");return}const o=e.currentTarget;this.lastAnchor=o,this.toolbarTooltipDebouncer&&clearTimeout(this.toolbarTooltipDebouncer),this.toolbarTooltipDebouncer=window.setTimeout(()=>{const s=this.popperTooltip.querySelector(".popper-label");let i="Button";const n=this.buttons.find(r=>r.name===t);if(!n){console.error(`Button ${t} not found.`);return}i=n.tooltip,s.textContent=i,Ct(this.popperTooltip,o,"top",!0,pr),this.popperTooltip.classList.remove("hidden")},500)}toolButtonMouseLeave(e=!0){if(!this.popperTooltip){console.error("popperTooltip are not initialized yet.");return}this.toolbarTooltipDebouncer&&(clearTimeout(this.toolbarTooltipDebouncer),this.toolbarTooltipDebouncer=null),e?this.popperTooltip.classList.add("hidden"):(this.popperTooltip.classList.add("no-transition"),this.popperTooltip.classList.add("hidden"),setTimeout(()=>{this.popperTooltip.classList.remove("no-transition")},150))}toolbarMouseEnter(){this.disappearTimeout!==null&&(clearTimeout(this.disappearTimeout),this.disappearTimeout=null)}toolbarMouseLeave(){const e=new Event("mouseleave",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){const e=d`
      <div
        id="popper-tooltip"
        class="popper-tooltip hidden"
        role="tooltip"
        @click=${o=>{o.stopPropagation()}}
      >
        <div class="popper-content">
          <span class="popper-label">Hello</span>
        </div>
        <div class="popper-arrow"></div>
      </div>
    `;let t=d``;for(const o of this.buttons)t=d`${t}
        <button
          class="icon svg-icon ${o.name}-button"
          @mouseenter=${s=>{this.toolButtonMouseEnter(s,o.name)}}
          @mouseleave=${()=>{this.toolButtonMouseLeave()}}
          @click=${s=>{const i=new CustomEvent("button-clicked",{bubbles:!0,composed:!0,detail:o.name});this.dispatchEvent(i)}}
        >
          ${F(o.svgIcon)}
        </button> `;return d`
      ${e}
      <div
        class="floating-toolbar"
        @mouseenter=${()=>{this.toolbarMouseEnter()}}
        @mouseleave=${()=>{this.toolbarMouseLeave()}}
      >
        ${t}
      </div>
    `}};oo.styles=[Z`
      ${ie(Ud)}
    `];Ls([h({attribute:!1})],oo.prototype,"buttons",2);Ls([h({})],oo.prototype,"disappearTimeout",2);Ls([W("#popper-tooltip")],oo.prototype,"popperTooltip",2);oo=Ls([ye("euphony-floating-toolbar")],oo);var oi={exports:{}},ur;function jd(){return ur||(ur=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var o=(function(s){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},a={manual:s.Prism&&s.Prism.manual,disableWorkerMessageHandler:s.Prism&&s.Prism.disableWorkerMessageHandler,util:{encode:function b(m){return m instanceof c?new c(m.type,b(m.content),m.alias):Array.isArray(m)?m.map(b):m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(b){return Object.prototype.toString.call(b).slice(8,-1)},objId:function(b){return b.__id||Object.defineProperty(b,"__id",{value:++n}),b.__id},clone:function b(m,x){x=x||{};var T,w;switch(a.util.type(m)){case"Object":if(w=a.util.objId(m),x[w])return x[w];T={},x[w]=T;for(var S in m)m.hasOwnProperty(S)&&(T[S]=b(m[S],x));return T;case"Array":return w=a.util.objId(m),x[w]?x[w]:(T=[],x[w]=T,m.forEach(function(A,L){T[L]=b(A,x)}),T);default:return m}},getLanguage:function(b){for(;b;){var m=i.exec(b.className);if(m)return m[1].toLowerCase();b=b.parentElement}return"none"},setLanguage:function(b,m){b.className=b.className.replace(RegExp(i,"gi"),""),b.classList.add("language-"+m)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(T){var b=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(T.stack)||[])[1];if(b){var m=document.getElementsByTagName("script");for(var x in m)if(m[x].src==b)return m[x]}return null}},isActive:function(b,m,x){for(var T="no-"+m;b;){var w=b.classList;if(w.contains(m))return!0;if(w.contains(T))return!1;b=b.parentElement}return!!x}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(b,m){var x=a.util.clone(a.languages[b]);for(var T in m)x[T]=m[T];return x},insertBefore:function(b,m,x,T){T=T||a.languages;var w=T[b],S={};for(var A in w)if(w.hasOwnProperty(A)){if(A==m)for(var L in x)x.hasOwnProperty(L)&&(S[L]=x[L]);x.hasOwnProperty(A)||(S[A]=w[A])}var B=T[b];return T[b]=S,a.languages.DFS(a.languages,function(O,P){P===B&&O!=b&&(this[O]=S)}),S},DFS:function b(m,x,T,w){w=w||{};var S=a.util.objId;for(var A in m)if(m.hasOwnProperty(A)){x.call(m,A,m[A],T||A);var L=m[A],B=a.util.type(L);B==="Object"&&!w[S(L)]?(w[S(L)]=!0,b(L,x,null,w)):B==="Array"&&!w[S(L)]&&(w[S(L)]=!0,b(L,x,A,w))}}},plugins:{},highlightAll:function(b,m){a.highlightAllUnder(document,b,m)},highlightAllUnder:function(b,m,x){var T={callback:x,container:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",T),T.elements=Array.prototype.slice.apply(T.container.querySelectorAll(T.selector)),a.hooks.run("before-all-elements-highlight",T);for(var w=0,S;S=T.elements[w++];)a.highlightElement(S,m===!0,T.callback)},highlightElement:function(b,m,x){var T=a.util.getLanguage(b),w=a.languages[T];a.util.setLanguage(b,T);var S=b.parentElement;S&&S.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(S,T);var A=b.textContent,L={element:b,language:T,grammar:w,code:A};function B(P){L.highlightedCode=P,a.hooks.run("before-insert",L),L.element.innerHTML=L.highlightedCode,a.hooks.run("after-highlight",L),a.hooks.run("complete",L),x&&x.call(L.element)}if(a.hooks.run("before-sanity-check",L),S=L.element.parentElement,S&&S.nodeName.toLowerCase()==="pre"&&!S.hasAttribute("tabindex")&&S.setAttribute("tabindex","0"),!L.code){a.hooks.run("complete",L),x&&x.call(L.element);return}if(a.hooks.run("before-highlight",L),!L.grammar){B(a.util.encode(L.code));return}if(m&&s.Worker){var O=new Worker(a.filename);O.onmessage=function(P){B(P.data)},O.postMessage(JSON.stringify({language:L.language,code:L.code,immediateClose:!0}))}else B(a.highlight(L.code,L.grammar,L.language))},highlight:function(b,m,x){var T={code:b,grammar:m,language:x};if(a.hooks.run("before-tokenize",T),!T.grammar)throw new Error('The language "'+T.language+'" has no grammar.');return T.tokens=a.tokenize(T.code,T.grammar),a.hooks.run("after-tokenize",T),c.stringify(a.util.encode(T.tokens),T.language)},tokenize:function(b,m){var x=m.rest;if(x){for(var T in x)m[T]=x[T];delete m.rest}var w=new f;return k(w,w.head,b),u(b,w,m,w.head,0),v(w)},hooks:{all:{},add:function(b,m){var x=a.hooks.all;x[b]=x[b]||[],x[b].push(m)},run:function(b,m){var x=a.hooks.all[b];if(!(!x||!x.length))for(var T=0,w;w=x[T++];)w(m)}},Token:c};s.Prism=a;function c(b,m,x,T){this.type=b,this.content=m,this.alias=x,this.length=(T||"").length|0}c.stringify=function b(m,x){if(typeof m=="string")return m;if(Array.isArray(m)){var T="";return m.forEach(function(B){T+=b(B,x)}),T}var w={type:m.type,content:b(m.content,x),tag:"span",classes:["token",m.type],attributes:{},language:x},S=m.alias;S&&(Array.isArray(S)?Array.prototype.push.apply(w.classes,S):w.classes.push(S)),a.hooks.run("wrap",w);var A="";for(var L in w.attributes)A+=" "+L+'="'+(w.attributes[L]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+A+">"+w.content+"</"+w.tag+">"};function l(b,m,x,T){b.lastIndex=m;var w=b.exec(x);if(w&&T&&w[1]){var S=w[1].length;w.index+=S,w[0]=w[0].slice(S)}return w}function u(b,m,x,T,w,S){for(var A in x)if(!(!x.hasOwnProperty(A)||!x[A])){var L=x[A];L=Array.isArray(L)?L:[L];for(var B=0;B<L.length;++B){if(S&&S.cause==A+","+B)return;var O=L[B],P=O.inside,oe=!!O.lookbehind,U=!!O.greedy,pe=O.alias;if(U&&!O.pattern.global){var be=O.pattern.toString().match(/[imsuy]*$/)[0];O.pattern=RegExp(O.pattern.source,be+"g")}for(var re=O.pattern||O,N=T.next,G=w;N!==m.tail&&!(S&&G>=S.reach);G+=N.value.length,N=N.next){var ce=N.value;if(m.length>b.length)return;if(!(ce instanceof c)){var ae=1,$e;if(U){if($e=l(re,G,b,oe),!$e||$e.index>=b.length)break;var qe=$e.index,se=$e.index+$e[0].length,_e=G;for(_e+=N.value.length;qe>=_e;)N=N.next,_e+=N.value.length;if(_e-=N.value.length,G=_e,N.value instanceof c)continue;for(var Q=N;Q!==m.tail&&(_e<se||typeof Q.value=="string");Q=Q.next)ae++,_e+=Q.value.length;ae--,ce=b.slice(G,_e),$e.index-=G}else if($e=l(re,0,ce,oe),!$e)continue;var qe=$e.index,je=$e[0],Be=ce.slice(0,qe),lo=ce.slice(qe+je.length),Lt=G+ce.length;S&&Lt>S.reach&&(S.reach=Lt);var At=N.prev;Be&&(At=k(m,At,Be),G+=Be.length),y(m,At,ae);var Bo=new c(A,P?a.tokenize(je,P):je,pe,je);if(N=k(m,At,Bo),lo&&k(m,N,lo),ae>1){var Ze={cause:A+","+B,reach:Lt};u(b,m,x,N.prev,G,Ze),S&&Ze.reach>S.reach&&(S.reach=Ze.reach)}}}}}}function f(){var b={value:null,prev:null,next:null},m={value:null,prev:b,next:null};b.next=m,this.head=b,this.tail=m,this.length=0}function k(b,m,x){var T=m.next,w={value:x,prev:m,next:T};return m.next=w,T.prev=w,b.length++,w}function y(b,m,x){for(var T=m.next,w=0;w<x&&T!==b.tail;w++)T=T.next;m.next=T,T.prev=m,b.length-=w}function v(b){for(var m=[],x=b.head.next;x!==b.tail;)m.push(x.value),x=x.next;return m}if(!s.document)return s.addEventListener&&(a.disableWorkerMessageHandler||s.addEventListener("message",function(b){var m=JSON.parse(b.data),x=m.language,T=m.code,w=m.immediateClose;s.postMessage(a.highlight(T,a.languages[x],x)),w&&s.close()},!1)),a;var C=a.util.currentScript();C&&(a.filename=C.src,C.hasAttribute("data-manual")&&(a.manual=!0));function E(){a.manual||a.highlightAll()}if(!a.manual){var $=document.readyState;$==="loading"||$==="interactive"&&C&&C.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return a})(t);e.exports&&(e.exports=o),typeof Rn<"u"&&(Rn.Prism=o),o.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},o.languages.markup.tag.inside["attr-value"].inside.entity=o.languages.markup.entity,o.languages.markup.doctype.inside["internal-subset"].inside=o.languages.markup,o.hooks.add("wrap",function(s){s.type==="entity"&&(s.attributes.title=s.content.replace(/&amp;/,"&"))}),Object.defineProperty(o.languages.markup.tag,"addInlined",{value:function(i,n){var r={};r["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:o.languages[n]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+n]={pattern:/[\s\S]+/,inside:o.languages[n]};var c={};c[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:a},o.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(o.languages.markup.tag,"addAttribute",{value:function(s,i){o.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+s+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:o.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),o.languages.html=o.languages.markup,o.languages.mathml=o.languages.markup,o.languages.svg=o.languages.markup,o.languages.xml=o.languages.extend("markup",{}),o.languages.ssml=o.languages.xml,o.languages.atom=o.languages.xml,o.languages.rss=o.languages.xml,(function(s){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var n=s.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(o),o.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},o.languages.javascript=o.languages.extend("clike",{"class-name":[o.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),o.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,o.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:o.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:o.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:o.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:o.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:o.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),o.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:o.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),o.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),o.languages.markup&&(o.languages.markup.tag.addInlined("script","javascript"),o.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),o.languages.js=o.languages.javascript,(function(){if(typeof o>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var s="Loading…",i=function(C,E){return"✖ Error "+C+" while fetching file: "+E},n="✖ Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},a="data-src-status",c="loading",l="loaded",u="failed",f="pre[data-src]:not(["+a+'="'+l+'"]):not(['+a+'="'+c+'"])';function k(C,E,$){var b=new XMLHttpRequest;b.open("GET",C,!0),b.onreadystatechange=function(){b.readyState==4&&(b.status<400&&b.responseText?E(b.responseText):b.status>=400?$(i(b.status,b.statusText)):$(n))},b.send(null)}function y(C){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(C||"");if(E){var $=Number(E[1]),b=E[2],m=E[3];return b?m?[$,Number(m)]:[$,void 0]:[$,$]}}o.hooks.add("before-highlightall",function(C){C.selector+=", "+f}),o.hooks.add("before-sanity-check",function(C){var E=C.element;if(E.matches(f)){C.code="",E.setAttribute(a,c);var $=E.appendChild(document.createElement("CODE"));$.textContent=s;var b=E.getAttribute("data-src"),m=C.language;if(m==="none"){var x=(/\.(\w+)$/.exec(b)||[,"none"])[1];m=r[x]||x}o.util.setLanguage($,m),o.util.setLanguage(E,m);var T=o.plugins.autoloader;T&&T.loadLanguages(m),k(b,function(w){E.setAttribute(a,l);var S=y(E.getAttribute("data-range"));if(S){var A=w.split(/\r\n?|\n/g),L=S[0],B=S[1]==null?A.length:S[1];L<0&&(L+=A.length),L=Math.max(0,Math.min(L-1,A.length)),B<0&&(B+=A.length),B=Math.max(0,Math.min(B,A.length)),w=A.slice(L,B).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String(L+1))}$.textContent=w,o.highlightElement($)},function(w){E.setAttribute(a,u),$.textContent=w})}}),o.plugins.fileHighlight={highlight:function(E){for(var $=(E||document).querySelectorAll(f),b=0,m;m=$[b++];)o.highlightElement(m)}};var v=!1;o.fileHighlight=function(){v||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),v=!0),o.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(oi)),oi.exports}var Pe=jd();Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;const zo=".token.comment,.token.prolog,.token.doctype,.token.cdata{color:var(--prism-color-comment)}.token.punctuation{color:var(--prism-color-text)}.token.tag,.token.selector .parent,.token.tag .token.punctuation{color:var(--prism-color-tag)}.token.attr-name,.token.boolean,.token.number,.token.constant{color:var(--prism-color-boolean-number)}.token.class-name,.token.key,.token.parameter,.token.property{color:var(--prism-color-class-name)}.token.string,.token.inserted{color:var(--prism-color-string)}.token.builtin,.token.keyword-array,.token.package,.token.regex{color:var(--prism-color-builtin-regex)}.token.function{color:var(--prism-color-function)}.token.atrule .token.rule,.token.keyword,.token.operator{color:var(--prism-color-keyword-operator)}.token.deleted,.token.important{color:var(--prism-color-deleted)}div.code-toolbar>.toolbar.toolbar>.toolbar-item>a,div.code-toolbar>.toolbar.toolbar>.toolbar-item>button{color:var(--prism-color-toolbar-text);background:var(--prism-color-toolbar-background)}div.code-toolbar>.toolbar.toolbar>.toolbar-item>a:hover,div.code-toolbar>.toolbar.toolbar>.toolbar-item>button:hover{background:var(--prism-color-toolbar-hover)}.line-highlight.line-highlight{background:var(--prism-color-line-highlight);background:linear-gradient(to right,var(--prism-color-line-highlight) 70%,var(--prism-color-line-highlight-alt))}.line-highlight.line-highlight:before,.line-highlight.line-highlight[data-end]:after{background-color:var(--prism-color-line-highlight-border);color:var(--prism-color-toolbar-text);box-shadow:0 1px var(--prism-color-line-highlight-shadow)}.line-numbers.line-numbers .line-numbers-rows{border-right:1px solid var(--prism-color-line-numbers-border);background:var(--prism-color-line-numbers-background)}.line-numbers .line-numbers-rows>span:before{color:var(--prism-color-line-numbers-text)}.rainbow-braces .token.token.punctuation.brace-level-1{color:var(--prism-color-brace-level-1)}.rainbow-braces .token.token.punctuation.brace-level-2{color:var(--prism-color-brace-level-2)}.rainbow-braces .token.token.punctuation.brace-level-3{color:var(--prism-color-brace-level-3)}.rainbow-braces .token.token.punctuation.brace-level-4{color:var(--prism-color-brace-level-4)}pre.diff-highlight>code .token.token.deleted:not(.prefix){background-color:var(--prism-color-diff-deleted)}pre.diff-highlight>code .token.token.inserted:not(.prefix){background-color:var(--prism-color-diff-inserted)}",Vd=".json-viewer{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:10px;box-sizing:border-box;line-height:1.2}:host{display:block}pre.message-pre{width:100%;padding:0;margin:0;cursor:text;background-color:transparent;background:transparent}pre.message-pre code{background-color:transparent;background:transparent;white-space:pre-wrap;word-break:break-all;overflow-wrap:anywhere}.header{color:var(--gray-700);padding:3px 5px;background-color:#ffffffe6;font-style:italic;position:sticky;top:0;left:0;z-index:3}";var Gd=Object.defineProperty,Zd=Object.getOwnPropertyDescriptor,Yi=(e,t,o,s)=>{for(var i=s>1?void 0:s?Zd(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Gd(t,o,i),i};let Eo=class extends he{constructor(){super(),this.data=null,this.isDarkTheme=!1}firstUpdated(){}willUpdate(e){}async initData(){}getHighlightedCode(e,t){if(!(t in Pe.languages))return d`${e}`;const o=Pe.languages[t],s=Pe.highlight(e,o,t);return d`${F(s)}`}render(){return d`
      <div class="json-viewer" ?is-dark-theme=${this.isDarkTheme}>
        <pre class="message-pre"><code>${this.getHighlightedCode(JSON.stringify(this.data,null,2),"json")}</code></pre>
      </div>
    `}};Eo.styles=[Z`
      ${ie(Vd)}
      ${ie(zo)}
    `];Yi([h({attribute:!1})],Eo.prototype,"data",2);Yi([h({type:Boolean,attribute:"is-dark-theme"})],Eo.prototype,"isDarkTheme",2);Eo=Yi([ye("euphony-json-viewer")],Eo);var gr={},fr;function Yd(){return fr||(fr=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),gr}Yd();function Jd(e){const t=e.replace(/\r\n/g,`
`).trim();return/^```[^\n]*\n([\s\S]*?)\n```$/.exec(t)?.[1]??e}function pa(e){const t=Jd(e).replace(/\r\n/g,`
`),o=t.split(`
`),s=o.findIndex(i=>i==="*** Begin Patch"||i==="@@"||i.startsWith("@@ "));return s>=0?o.slice(s).join(`
`):t}function Kd(e){const t=pa(e).trim();return t.startsWith("*** Begin Patch")&&t.includes("*** End Patch")?!0:t.startsWith("@@")}function Xd(e){return e.startsWith("+")&&!e.startsWith("+++")?"patch-line-add":e.startsWith("-")&&!e.startsWith("---")?"patch-line-delete":"patch-line"}function Qd(e){if(!Kd(e))return null;const t=pa(e).replace(/\r\n/g,`
`).split(`
`);return d`<pre class="message-pre patch-pre"><code>${t.map(o=>d`<div class=${Xd(o)}><span class="patch-text">${o}</span></div>`)}</code></pre>`}const eh=".message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.message-content{padding:7px 6px}.patch-line{display:block}.patch-line-add{display:block;background:color-mix(in lab,var(--green-100) 55%,transparent)}.patch-line-delete{display:block;background:color-mix(in lab,var(--red-100) 45%,transparent)}.patch-text{display:block}pre.message-pre{padding:0;margin:0;font-size:.9em;color:var(--font-color);width:100%;max-height:var(--max-message-height);overflow-y:auto;background-color:transparent;background:transparent;word-break:break-word;white-space:pre-wrap}pre.message-pre code{background-color:transparent;background:transparent}pre.patch-pre code{display:block}";var th=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,ua=(e,t,o,s)=>{for(var i=s>1?void 0:s?oh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&th(t,o,i),i};let fs=class extends he{constructor(){super(),this.message=null}firstUpdated(){}willUpdate(e){if(e.has("message")&&this.message){const t=kt(this.message.content);if(t!=="code")throw new Error(`Invalid message type, expect code, but got: ${t}`)}}async initData(){}getHighlightedCode(e,t){if(!t)return d`${e}`;if(!(t in Pe.languages))return d`${e}`;const o=Pe.languages[t],s=Pe.highlight(e,o,t);return d`${F(s)}`}render(){if(!this.message)return d``;const e=Qt(this.message.content),t=Qd(e.text);return d`
      <div class="message-content">
        ${t??d`
          <pre class="message-pre"><code>${this.getHighlightedCode(e.text,e.language)}</code></pre>
        `}
      </div>
    `}};fs.styles=[Z`
      ${ie(eh)}
      ${ie(zo)}
    `];ua([h({attribute:!1})],fs.prototype,"message",2);fs=ua([ye("euphony-message-code")],fs);const sh='.label{box-sizing:border-box;border-radius:3px;padding:1px var(--multimodal-message-content-padding-h);margin-top:5px;margin-bottom:5px;background-color:var(--theme-gray-300);display:flex;align-items:center;gap:3px}.message-text-container{color:var(--font-color);padding-left:var(--multimodal-message-content-padding-h);border-left:1px solid var(--theme-gray-300);max-height:var(--max-message-height);overflow-y:auto}.message-text-container[is-hidden]{display:none}.message-text-container[is-translation] .message-text{color:var(--translation-color)}.message-text{word-break:break-word;white-space:pre-wrap}.message-text[markdown-rendered]{white-space:normal}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}button{all:unset}.collapse-icon{transform:rotate(90deg);width:.7em;height:.7em;padding:2px;border-radius:1px;color:var(--theme-gray-700);cursor:pointer}.collapse-icon[is-collapsed]{transform:rotate(0)}.collapse-icon:hover{color:var(--theme-gray-800)}p{margin:0}p:not(:last-child){margin-bottom:.5em}ul,ol{padding-left:2em}code,pre{word-break:break-word;white-space:pre-wrap}pre{font-size:90%;padding:.5em;background-color:var(--theme-gray-text-background-color);border-radius:6px;margin:8px 0}h1{font-size:1.2em}h2{font-size:1.15em}h3{font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}a{color:var(--blue-800)}table{width:100%;margin:5px 0;border-collapse:collapse}th,td{border:1px solid var(--gray-400);padding:8px}th{text-align:left}p code{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--theme-gray-text-background-color);border-radius:6px}.iframe-container{width:100%;height:500px;margin:5px;border:1px solid var(--theme-gray-300);box-shadow:0 0 2px #0000000d,0 0 5px #0000000d;overflow:hidden;border-radius:5px;background-color:var(--theme-white-secondary);box-sizing:border-box;display:flex;flex-direction:column}.iframe-container .header{box-sizing:border-box;width:100%;padding:2px 5px;font-size:.9em;color:var(--theme-gray-700);border-bottom:1px solid var(--theme-gray-200)}.iframe-container iframe{border:none;width:100%;height:100%}.config-table .cell-left{color:var(--theme-gray-600);position:relative;border-bottom:1px solid var(--theme-gray-300);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-left .content{padding-right:calc(var(--column-gap) / 2)}.config-table .cell-left.inner-cell .content{padding-left:calc(var(--column-gap) / 2)}.config-table .cell-right{word-break:break-word;position:relative;border-bottom:1px solid var(--theme-gray-300);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-right.inner-cell .content{padding-left:calc(var(--column-gap) / 2)}.message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.config-table{display:grid;width:100%;grid-template-columns:auto 1fr;box-sizing:border-box;--column-gap: 20px;--v-padding: 2px}.config-table .cell-left{color:var(--theme-gray-600);position:relative;border-bottom:1px solid var(--theme-gray-300);padding-right:calc(var(--column-gap) / 2);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-left:not(:has(~.cell-left)){border-bottom:none}.config-table .cell-right{word-break:break-word;position:relative;border-bottom:1px solid var(--theme-gray-300);padding-left:calc(var(--column-gap) / 2);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-right:not(:has(~.cell-right)){border-bottom:none}.config-table .cell-right:after{content:"";left:0;top:0;position:absolute;height:100%;width:1px;background-color:var(--theme-gray-300)}.config-table .cell-full{grid-column:1 / -1;border-bottom:1px solid var(--theme-gray-300);color:var(--theme-gray-600);font-variant:small-caps;padding:2px 0}.message-content{gap:10px;padding-right:var(--multimodal-message-content-padding-h);padding-left:var(--multimodal-message-content-padding-h)}.content-block{color:var(--font-color)}pre.message-pre{padding:0;margin:0;font-size:.9em;background-color:transparent;background:transparent}pre.message-pre code{background-color:transparent;background:transparent;white-space:pre-wrap}.code-block-splitter{width:100%;margin:.5em 0;height:1px;background-color:var(--gray-300)}.code-block-title{color:var(--gray-700);font-variant:small-caps;width:100%}.message-text[contenteditable]{padding:2px;margin:3px 2px;width:auto;outline:2px solid var(--message-text-outline-color, var(--blue-100));outline-style:var(--message-text-outline-style, solid);border-radius:2px;transition:outline-color .15s}.message-text[contenteditable]:focus{outline-color:var(--blue-500)}';var ih=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,Wt=(e,t,o,s)=>{for(var i=s>1?void 0:s?nh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&ih(t,o,i),i};let gt=class extends he{constructor(){super(),this.message=null,this.shouldRenderMarkdown=!1,this.markdownAllowedTags=null,this.markdownAllowedAttributes=null,this.isEditable=!1,this.blockContents=[],this.getEditableTemplate=(e,t)=>d` <!-- Important to avoid new line and whitespace here -->
      <!-- prettier-ignore -->
      <div
      class="message-text"
      contenteditable="true"
      .innerText=${e}
      @input=${o=>{this.messageTextChanged(o,t)}}
    ></div>`}firstUpdated(){}willUpdate(e){if(e.has("message")||e.has("isEditable")){if(this.message){const t=kt(this.message.content);if(t!=="developer")throw new Error(`Invalid message type, expect developer, but got: ${t}`)}this.resetBlockContents()}}async initData(){}messageTextChanged(e,t){const o=e.target,s={...t,newContent:o.innerText},i=new CustomEvent("message-developer-content-changed",{detail:s,bubbles:!0,composed:!0});this.dispatchEvent(i)}resetBlockContents(){if(this.message===null)throw new Error("Message is null");this.blockContents=[];const e=Qt(this.message.content),t=!this.isEditable;let o=[];typeof e.instructions=="string"&&(o=[e.instructions]);for(const[s,i]of o.entries())this.blockContents.push({label:`Instruction #${s}`,content:i,isContentHTML:!1,isCollapsed:t,editInfo:{location:"instruction",index:s}});if(e.tools)for(const s of Object.keys(e.tools)){const i=e.tools[s];let n=this.renderNamespaceTable(s,i.name,i.description??"",!1);for(const[r,a]of i.tools.entries()){let c=d``;c=d`${c}
            <div class="cell-left">Name</div>
            <div class="cell-right">${a.name}</div>`,c=d`${c}
            <div class="cell-left">Description</div>
            <div class="cell-right">${a.description}</div>`,a.parameters&&(c=d`${c}
              <div class="cell-left">Parameters</div>
              <div class="cell-right">
                ${JSON.stringify(a.parameters,null,2)}
              </div>`),n=d`${n}
            <div class="cell-left">Tool ${r}</div>
            <div class="cell-right">
              <div class="content">
                <div class="config-table">${c}</div>
              </div>
            </div> `}n=d`<div class="config-table">${n}</div>`,this.blockContents.push({label:`Tool Namespace: ${s}`,content:n,isContentHTML:!0,isCollapsed:t,editableHTML:d`<div class="config-table">
            ${this.renderNamespaceTable(s,i.name,i.description??"",!0)}
          </div>`})}}getHighlightedCode(e,t){if(!(t in Pe.languages))return d`${e}`;const o=Pe.languages[t],s=Pe.highlight(e,o,t);return d`${F(s)}`}renderNamespaceTable(e,t,o,s){return d`
      <div class="cell-left">Name</div>
      <div class="cell-right">
        ${s?this.getEditableTemplate(t,{location:"tool_namespace_name",index:e}):t}
      </div>
      <div class="cell-left">Description</div>
      <div class="cell-right">
        ${s?this.getEditableTemplate(o,{location:"tool_namespace_description",index:e}):o}
      </div>
    `}render(){if(!this.message)return d``;let e=d``;for(const t of this.blockContents){let o=d``;if(t.isContentHTML?!this.isEditable||t.editableHTML===void 0?o=d`${t.content}`:o=d`${t.editableHTML}`:!this.isEditable||t.editInfo===void 0?o=us(t.content,this.shouldRenderMarkdown,this.markdownAllowedTags,this.markdownAllowedAttributes):o=this.getEditableTemplate(t.content,{location:"instruction",index:t.editInfo.index}),t.subBlocks&&t.subBlocks.length>0){let s=d``;for(const i of t.subBlocks){let n=d``;i.isContentHTML?n=d`${i.content}`:n=us(i.content,this.shouldRenderMarkdown,this.markdownAllowedTags,this.markdownAllowedAttributes),s=d`${s}
            <div class="content-block">
              <div class="label">
                <button
                  class="svg-icon collapse-icon"
                  ?is-collapsed=${i.isCollapsed}
                  @click=${r=>{r.preventDefault(),r.stopPropagation(),i.isCollapsed=!i.isCollapsed,this.requestUpdate()}}
                >
                  ${F(to)}
                </button>
                <span>${i.label}</span>
              </div>

              <!-- Important to avoid new line and whitespace here -->
              <!-- prettier-ignore -->
              <div class="message-text-container"
                ?is-hidden=${i.isCollapsed}
              >${n}</div>
            </div> `}o=d`${o}${s}`}e=d`${e}
        <div class="content-block">
          <div class="label">
            <button
              class="svg-icon collapse-icon"
              ?is-collapsed=${t.isCollapsed}
              @click=${s=>{s.preventDefault(),s.stopPropagation(),t.isCollapsed=!t.isCollapsed,this.requestUpdate()}}
            >
              ${F(to)}
            </button>
            <span>${t.label}</span>
          </div>

          <!-- Important to avoid new line and whitespace here -->
          <!-- prettier-ignore -->
          <div class="message-text-container"
            ?is-hidden=${t.isCollapsed}
          >${o}</div>
        </div> `}return d` <div class="message-content">${e}</div> `}};gt.styles=[Z`
      ${ie(sh)}
      ${ie(zo)}
    `];Wt([h({attribute:!1})],gt.prototype,"message",2);Wt([h({type:Boolean})],gt.prototype,"shouldRenderMarkdown",2);Wt([h({type:Array})],gt.prototype,"markdownAllowedTags",2);Wt([h({type:Array})],gt.prototype,"markdownAllowedAttributes",2);Wt([h({type:Boolean})],gt.prototype,"isEditable",2);Wt([M()],gt.prototype,"blockContents",2);gt=Wt([ye("euphony-message-developer-content")],gt);const rh=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 68 67" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="icon-check">
        <path d="M26.302,66.557C28.206,66.557 29.72,65.727 30.794,64.066L66.39,7.768C67.22,6.498 67.513,5.473 67.513,4.447C67.513,2.055 65.95,0.443 63.509,0.443C61.751,0.443 60.774,1.029 59.7,2.738L26.106,56.645L8.431,32.816C7.308,31.303 6.233,30.668 4.622,30.668C2.181,30.668 0.423,32.377 0.423,34.818C0.423,35.844 0.862,36.967 1.692,38.041L21.663,63.969C23.03,65.727 24.397,66.557 26.302,66.557Z" style="fill-rule:nonzero;"/>
    </g>
</svg>
`,ah=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L11.2929 9.29289Z"
    fill="currentColor"
  />
</svg>
`,lh=':host{position:absolute;z-index:1;display:flex}.message-editor-popover{height:100%;font-size:var(--font-d4);display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:8px;padding:7px 8px;box-sizing:border-box;border-radius:7px;color:var(--theme-gray-800);background-color:var(--theme-white-secondary);box-shadow:0 0 1px #0003,0 0 3px #0003,0 0 10px #00000012;position:relative}.message-editor-popover:before{content:"";position:absolute;left:-10px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid rgba(0,0,0,.1);filter:blur(2px);z-index:0}.message-editor-popover:after{content:"";position:absolute;left:-6px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid var(--theme-white-secondary);z-index:1}.row-group{display:flex;flex-flow:row nowrap;justify-content:flex-end;align-items:center;gap:10px;width:100%}.row-group.reverse-start{flex-direction:row-reverse}.row-group button{gap:3px;color:currentColor}.row-group button .svg-icon{position:relative;top:.5px;width:.6em;height:.6em}.row-group .row-item{display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;gap:5px}.row-group .field-row{width:100%}.row-group .field-row .label{min-width:52px}.row-group .field-row input{flex:1 1 auto;min-width:60px;width:100%;padding:2px 5px;line-height:1.2;color:inherit;background-color:var(--theme-white-secondary)}.row-group .compact-field-row{flex:1 1 150px;min-width:0}.row-group .compact-field-row input{max-width:120px}.row-group .editor-item{position:relative}.row-group .icon-chevron{position:relative;top:1px;transform:rotate(180deg);width:16px;height:16px}.row-group .select-visible{border:1px solid var(--theme-gray-300);background-color:var(--theme-white-secondary);font-size:var(--font-d4);border-radius:4px;padding:0 5px;line-height:1;box-sizing:border-box;pointer-events:none;z-index:1;display:flex;align-items:center;gap:2px}.row-group select{position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;z-index:2;cursor:pointer;border:none}.row-group input{border:1px solid var(--theme-gray-300);border-radius:4px;line-height:1;font-size:var(--font-d5)}.row-group input#input-date{width:66px}.row-group input#input-time{width:52px}.row-group input:invalid{border-color:var(--pink-300)}.row-group input:focus{border-color:transparent}button{all:unset}.text-button{height:100%;border-radius:5px;border:1px solid var(--gray-300);color:var(--gray-800);background-color:#fff;line-height:1;display:flex;align-items:center;padding:2px 5px;box-sizing:border-box;position:relative;cursor:pointer;transition:background linear .1s,border linear .1s}.text-button[is-disabled]{cursor:no-drop;border:1px solid var(--gray-300);color:var(--gray-600);background:var(--gray-100)}.text-button:not([is-disabled]):hover{border:1px solid color-mix(in lab,var(--gray-300),black 5%);background-color:color-mix(in lab,var(--gray-100),white 5%)}.text-button:not([is-disabled]):active{background-color:color-mix(in lab,var(--gray-100),white 100%);border:1px solid var(--gray-300)}.icon{cursor:pointer;padding:3px;border-radius:5px}.icon:hover{background-color:var(--theme-gray-200)}.icon:active{background-color:var(--theme-theme-gray-100)}.icon[is-hidden]{display:none}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:.9em;height:.9em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:1;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);line-height:.9;display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.2;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}';var ch=Object.defineProperty,dh=Object.getOwnPropertyDescriptor,ro=(e,t,o,s)=>{for(var i=s>1?void 0:s?dh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&ch(t,o,i),i};const hh=[we.User,we.Assistant,we.System,we.Developer,we.Tool];let $t=class extends he{constructor(){super(),this.message=null,this.selectedRole=we.User,this.authorName="",this.recipient="",this.channel=""}firstUpdated(){}willUpdate(e){if(e.has("message")){const t=this.message;if(!t)return;this.selectedRole=t.role,this.authorName=t.name??"",this.recipient=t.recipient??"",this.channel=t.channel??""}}async initData(){}saveButtonClick(){const e={role:this.selectedRole,name:this.authorName.trim()===""?null:this.authorName,recipient:this.recipient.trim()===""?null:this.recipient,channel:this.channel.trim()===""?null:this.channel};this.dispatchEvent(new CustomEvent("save-button-clicked",{detail:e,bubbles:!0,composed:!0}))}cancelButtonClick(){this.dispatchEvent(new Event("cancel-button-clicked",{bubbles:!0,composed:!0}))}render(){return d`
      <div
        class="message-editor-popover"
        tabindex="0"
        @click=${e=>{e.stopPropagation()}}
      >
        <div class="row-group">
          <div class="row-item">
            <div class="label">Role</div>
            <div class="editor-item">
              <span class="select-visible">
                ${this.selectedRole}
                <span class="svg-icon icon-chevron">
                  ${F(ah)}
                </span>
              </span>
              <select
                .value=${this.selectedRole}
                @change=${e=>{this.selectedRole=e.target.value}}
              >
                ${hh.map(e=>d`<option
                    value=${e}
                    ?selected=${e===this.selectedRole}
                  >
                    ${e}
                  </option>`)}
              </select>
            </div>
          </div>

          <div class="row-item field-row compact-field-row">
            <div class="label">Channel</div>
            <input
              type="text"
              placeholder="optional"
              .value=${this.channel}
              @input=${e=>{this.channel=e.target.value}}
            />
          </div>
        </div>

        <div class="row-group">
          <div class="row-item field-row">
            <div class="label">Author</div>
            <input
              type="text"
              placeholder="optional"
              .value=${this.authorName}
              @input=${e=>{this.authorName=e.target.value}}
            />
          </div>
        </div>

        <div class="row-group">
          <div class="row-item field-row">
            <div class="label">Recipient</div>
            <input
              type="text"
              placeholder="optional"
              .value=${this.recipient}
              @input=${e=>{this.recipient=e.target.value}}
            />
          </div>
        </div>

        <div class="row-group">
          <div class="row-item">
            <button
              class="text-button"
              @click=${()=>{this.saveButtonClick()}}
            >
              <span class="svg-icon">${F(rh)}</span>Save
            </button>
            <button
              class="text-button"
              @click=${()=>{this.cancelButtonClick()}}
            >
              <span class="svg-icon">${F(Zi)}</span>Cancel
            </button>
          </div>
        </div>
      </div>
    `}};$t.styles=[Z`
      ${ie(lh)}
    `];ro([h({attribute:!1})],$t.prototype,"message",2);ro([M()],$t.prototype,"selectedRole",2);ro([M()],$t.prototype,"authorName",2);ro([M()],$t.prototype,"recipient",2);ro([M()],$t.prototype,"channel",2);$t=ro([ye("euphony-message-editor-popover")],$t);const ph="p{margin:0}p:not(:last-child){margin-bottom:.5em}ul,ol{padding-left:2em}code,pre{word-break:break-word;white-space:pre-wrap}pre{font-size:90%;padding:.5em;background-color:var(--theme-gray-text-background-color);border-radius:6px;margin:8px 0}h1{font-size:1.2em}h2{font-size:1.15em}h3{font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}a{color:var(--blue-800)}table{width:100%;margin:5px 0;border-collapse:collapse}th,td{border:1px solid var(--gray-400);padding:8px}th{text-align:left}p code{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--theme-gray-text-background-color);border-radius:6px}.iframe-container{width:100%;height:500px;margin:5px;border:1px solid var(--theme-gray-300);box-shadow:0 0 2px #0000000d,0 0 5px #0000000d;overflow:hidden;border-radius:5px;background-color:var(--theme-white-secondary);box-sizing:border-box;display:flex;flex-direction:column}.iframe-container .header{box-sizing:border-box;width:100%;padding:2px 5px;font-size:.9em;color:var(--theme-gray-700);border-bottom:1px solid var(--theme-gray-200)}.iframe-container iframe{border:none;width:100%;height:100%}.message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.message-content{display:flex;justify-content:center;width:100%;height:100%;min-height:30px;cursor:pointer}.message-content:hover .message-text{color:var(--theme-gray-700);box-shadow:0 0 3px #00000014}.message-text{color:var(--theme-gray-500);width:fit-content;overflow:hidden;transition:color 80ms linear,box-shadow 80ms linear;background-color:var(--theme-white-secondary);box-shadow:0 0 1px #0000000d;padding:1px 7px;border-radius:4px}";var uh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,ga=(e,t,o,s)=>{for(var i=s>1?void 0:s?gh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&uh(t,o,i),i};let ms=class extends he{constructor(){super(),this.message=null}firstUpdated(){}willUpdate(e){}async initData(){}render(){let e="";return this.message&&(e=(ni(this.message.content)??"unsupported").replaceAll("_"," ").toLowerCase()),d`
      <div
        class="message-content"
        @click=${()=>{this.dispatchEvent(new Event("hidden-message-clicked",{bubbles:!0,composed:!0}))}}
      >
        <div class="message-text">Show ${e} message</div>
      </div>
    `}};ms.styles=[Z`
      ${ie(ph)}
    `];ga([h({attribute:!1})],ms.prototype,"message",2);ms=ga([ye("euphony-message-hidden")],ms);const fh='.label{box-sizing:border-box;border-radius:3px;padding:1px var(--multimodal-message-content-padding-h);margin-top:5px;margin-bottom:5px;background-color:var(--theme-gray-300);display:flex;align-items:center;gap:3px}.message-text-container{color:var(--font-color);padding-left:var(--multimodal-message-content-padding-h);border-left:1px solid var(--theme-gray-300);max-height:var(--max-message-height);overflow-y:auto}.message-text-container[is-hidden]{display:none}.message-text-container[is-translation] .message-text{color:var(--translation-color)}.message-text{word-break:break-word;white-space:pre-wrap}.message-text[markdown-rendered]{white-space:normal}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}button{all:unset}.collapse-icon{transform:rotate(90deg);width:.7em;height:.7em;padding:2px;border-radius:1px;color:var(--theme-gray-700);cursor:pointer}.collapse-icon[is-collapsed]{transform:rotate(0)}.collapse-icon:hover{color:var(--theme-gray-800)}p{margin:0}p:not(:last-child){margin-bottom:.5em}ul,ol{padding-left:2em}code,pre{word-break:break-word;white-space:pre-wrap}pre{font-size:90%;padding:.5em;background-color:var(--theme-gray-text-background-color);border-radius:6px;margin:8px 0}h1{font-size:1.2em}h2{font-size:1.15em}h3{font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}a{color:var(--blue-800)}table{width:100%;margin:5px 0;border-collapse:collapse}th,td{border:1px solid var(--gray-400);padding:8px}th{text-align:left}p code{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--theme-gray-text-background-color);border-radius:6px}.iframe-container{width:100%;height:500px;margin:5px;border:1px solid var(--theme-gray-300);box-shadow:0 0 2px #0000000d,0 0 5px #0000000d;overflow:hidden;border-radius:5px;background-color:var(--theme-white-secondary);box-sizing:border-box;display:flex;flex-direction:column}.iframe-container .header{box-sizing:border-box;width:100%;padding:2px 5px;font-size:.9em;color:var(--theme-gray-700);border-bottom:1px solid var(--theme-gray-200)}.iframe-container iframe{border:none;width:100%;height:100%}.config-table{display:grid;width:100%;grid-template-columns:auto 1fr;box-sizing:border-box;--column-gap: 20px;--v-padding: 2px}.config-table .cell-left{color:var(--theme-gray-600);position:relative;border-bottom:1px solid var(--theme-gray-300);padding-right:calc(var(--column-gap) / 2);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-left:not(:has(~.cell-left)){border-bottom:none}.config-table .cell-right{word-break:break-word;position:relative;border-bottom:1px solid var(--theme-gray-300);padding-left:calc(var(--column-gap) / 2);padding-top:var(--v-padding);padding-bottom:var(--v-padding)}.config-table .cell-right:not(:has(~.cell-right)){border-bottom:none}.config-table .cell-right:after{content:"";left:0;top:0;position:absolute;height:100%;width:1px;background-color:var(--theme-gray-300)}.config-table .cell-full{grid-column:1 / -1;border-bottom:1px solid var(--theme-gray-300);color:var(--theme-gray-600);font-variant:small-caps;padding:2px 0}.message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.message-content{gap:10px;padding-right:var(--multimodal-message-content-padding-h);padding-left:var(--multimodal-message-content-padding-h)}.content-block{color:var(--font-color)}.message-text[contenteditable]{padding:2px;margin:3px 2px;width:auto;outline:2px solid var(--message-text-outline-color, var(--blue-100));outline-style:var(--message-text-outline-style, solid);border-radius:2px;transition:outline-color .15s}.message-text[contenteditable]:focus{outline-color:var(--blue-500)}';var mh=Object.defineProperty,bh=Object.getOwnPropertyDescriptor,bt=(e,t,o,s)=>{for(var i=s>1?void 0:s?bh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&mh(t,o,i),i};let Qe=class extends he{constructor(){super(),this.message=null,this.shouldRenderMarkdown=!1,this.markdownAllowedTags=null,this.markdownAllowedAttributes=null,this.isTranslation=!1,this.isEditable=!1,this.dataFileURL=null,this.blockContents=[],this.getEditableTemplate=(e,t)=>d` <!-- Important to avoid new line and whitespace here -->
      <!-- prettier-ignore -->
      <div
      class="message-text"
      contenteditable="true"
      .innerText=${e}
      @input=${o=>{this.messageTextChanged(o,t)}}
    ></div>`}firstUpdated(){}willUpdate(e){if(e.has("message")||e.has("isEditable")){if(this.message){const t=kt(this.message.content);if(t!=="system")throw new Error(`Invalid message type, expect system, but got: ${t}`)}this.resetBlockContents()}}async initData(){}messageTextChanged(e,t){const o=e.target,s={...t,newContent:o.innerText},i=new CustomEvent("message-system-content-changed",{detail:s,bubbles:!0,composed:!0});this.dispatchEvent(i)}resetBlockContents(){if(this.message===null)throw new Error("Message is null");this.blockContents=[];const e=Qt(this.message.content);if(e.model_identity&&this.blockContents.push({label:"Model Identity",content:e.model_identity,isContentHTML:!1,isCollapsed:!1,editInfo:{location:"model_identity",index:0}}),e.conversation_start_date&&this.blockContents.push({label:"Conversation Start Date",content:e.conversation_start_date,isContentHTML:!1,isCollapsed:!1,editInfo:{location:"conversation_start_date",index:0}}),e.knowledge_cutoff&&this.blockContents.push({label:"Knowledge Cutoff",content:e.knowledge_cutoff,isContentHTML:!1,isCollapsed:!1,editInfo:{location:"knowledge_cutoff",index:0}}),e.tools)for(const t in e.tools){let o=d``;o=d`${o}
          <div class="cell-left">Name</div>
          <div class="cell-right">${e.tools[t].name}</div>`,e.tools[t].description&&(o=d`${o}
            <div class="cell-left">Description</div>
            <div class="cell-right">
              ${e.tools[t].description}
            </div>`);for(const[s,i]of e.tools[t].tools.entries()){let n=d``;n=d`${n}
            <div class="cell-left">Name</div>
            <div class="cell-right">${i.name}</div>`,n=d`${n}
            <div class="cell-left">Description</div>
            <div class="cell-right">${i.description}</div>`,i.parameters&&(n=d`${n}
              <div class="cell-left">Parameters</div>
              <div class="cell-right">
                ${JSON.stringify(i.parameters,null,2)}
              </div>`),o=d`${o}
            <div class="cell-left">Tool ${s}</div>
            <div class="cell-right">
              <div class="content">
                <div class="config-table">${n}</div>
              </div>
            </div> `}o=d`<div class="config-table">${o}</div>`,this.blockContents.push({label:`Tool Namespace: ${t}`,content:o,isContentHTML:!0,isCollapsed:!0})}if(e.channel_config){const t=d`
        <div class="config-table">
          <div class="cell-left">Valid Channels</div>
          <div class="cell-right">
            ${e.channel_config.valid_channels.join(", ")}
          </div>

          <div class="cell-left">Channel Required</div>
          <div class="cell-right">
            ${e.channel_config.channel_required?"True":"False"}
          </div>
        </div>
      `,o=d`
        <div class="config-table">
          <div class="cell-left">Valid Channels</div>
          <div class="cell-right">
            ${this.getEditableTemplate(e.channel_config.valid_channels.join(", "),{location:"valid_channels",index:"valid_channels"})}
          </div>

          <div class="cell-left">Channel Required</div>
          <div class="cell-right">
            ${this.getEditableTemplate(e.channel_config.channel_required?"True":"False",{location:"channel_required",index:"channel_required"})}
          </div>
        </div>
      `;this.blockContents.push({label:"Channel Config",content:t,isContentHTML:!0,isCollapsed:!1,editableHTML:o})}}getHighlightedCode(e,t){if(!(t in Pe.languages))return d`${e}`;const o=Pe.languages[t],s=Pe.highlight(e,o,t);return d`${F(s)}`}render(){if(this.message===null)return d``;let e=d``;for(const t of this.blockContents){let o=d``;t.isContentHTML?!this.isEditable||t.editableHTML===void 0?o=d`${t.content}`:o=d`${t.editableHTML}`:!this.isEditable||t.editInfo===void 0?o=us(t.content,this.shouldRenderMarkdown,this.markdownAllowedTags,this.markdownAllowedAttributes):o=this.getEditableTemplate(t.content,{location:t.editInfo.location,index:t.editInfo.index}),e=d`${e}
        <div class="content-block">
          <div class="label">
            <button
              class="svg-icon collapse-icon"
              ?is-collapsed=${t.isCollapsed}
              @click=${s=>{s.preventDefault(),s.stopPropagation(),t.isCollapsed=!t.isCollapsed,this.requestUpdate()}}
            >
              ${F(to)}
            </button>
            <span>${t.label}</span>
          </div>

          <!-- Important to avoid new line and whitespace here -->
          <!-- prettier-ignore -->
          <div class="message-text-container"
            ?is-hidden=${t.isCollapsed}
            ?is-translation=${this.isTranslation&&t.label.includes("Instruction")}
          >${o}</div>
        </div> `}return d` <div class="message-content">${e}</div> `}};Qe.styles=[Z`
      ${ie(fh)}
      ${ie(zo)}
    `];bt([h({attribute:!1})],Qe.prototype,"message",2);bt([h({type:Boolean})],Qe.prototype,"shouldRenderMarkdown",2);bt([h({type:Array})],Qe.prototype,"markdownAllowedTags",2);bt([h({type:Array})],Qe.prototype,"markdownAllowedAttributes",2);bt([h({type:Boolean})],Qe.prototype,"isTranslation",2);bt([h({type:Boolean})],Qe.prototype,"isEditable",2);bt([h({type:String,attribute:"data-file-url"})],Qe.prototype,"dataFileURL",2);bt([M()],Qe.prototype,"blockContents",2);Qe=bt([ye("euphony-message-system-content")],Qe);const vh="p{margin:0}p:not(:last-child){margin-bottom:.5em}ul,ol{padding-left:2em}code,pre{word-break:break-word;white-space:pre-wrap}pre{font-size:90%;padding:.5em;background-color:var(--theme-gray-text-background-color);border-radius:6px;margin:8px 0}h1{font-size:1.2em}h2{font-size:1.15em}h3{font-size:1.1em}h1:first-child,h2:first-child,h3:first-child,h4:first-child,h5:first-child{margin-top:0}a{color:var(--blue-800)}table{width:100%;margin:5px 0;border-collapse:collapse}th,td{border:1px solid var(--gray-400);padding:8px}th{text-align:left}p code{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--theme-gray-text-background-color);border-radius:6px}.iframe-container{width:100%;height:500px;margin:5px;border:1px solid var(--theme-gray-300);box-shadow:0 0 2px #0000000d,0 0 5px #0000000d;overflow:hidden;border-radius:5px;background-color:var(--theme-white-secondary);box-sizing:border-box;display:flex;flex-direction:column}.iframe-container .header{box-sizing:border-box;width:100%;padding:2px 5px;font-size:.9em;color:var(--theme-gray-700);border-bottom:1px solid var(--theme-gray-200)}.iframe-container iframe{border:none;width:100%;height:100%}.message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.message-content{position:relative}.message-content[is-translation] .message-text{color:var(--translation-color)}.message-text{color:var(--font-color);word-break:break-word;white-space:pre-wrap;width:100%;max-height:var(--max-message-height);overflow-y:auto}.message-text[markdown-rendered]{white-space:normal}.message-text[contenteditable]{padding:2px;margin:3px 2px;width:auto;outline:2px solid var(--message-text-outline-color, var(--blue-100));outline-style:var(--message-text-outline-style, solid);border-radius:2px;transition:outline-color .15s}.message-text[contenteditable]:focus{outline-color:var(--blue-500)}";var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,qt=(e,t,o,s)=>{for(var i=s>1?void 0:s?wh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&yh(t,o,i),i};let ft=class extends he{constructor(){super(),this.message=null,this.shouldRenderMarkdown=!1,this.markdownAllowedTags=null,this.markdownAllowedAttributes=null,this.isTranslation=!1,this.isEditable=!1,this.getEditableTemplate=e=>d` <!-- Important to avoid new line and whitespace here -->
      <!-- prettier-ignore -->
      <div
      class="message-text"
      contenteditable="true"
      .innerText=${e}
      @input=${t=>{this.messageTextChanged(t)}}
    ></div>`}firstUpdated(){}willUpdate(e){if(e.has("message")&&this.message){const t=kt(this.message.content);if(t!=="text")throw new Error(`Invalid message type, expect text, but got: ${t}`)}}async initData(){}messageTextChanged(e){const o=e.target.innerText,s=new CustomEvent("message-text-changed",{detail:o,bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){if(this.message===null)return d``;const t=Qt(this.message.content).text;let o=d``;return this.isEditable?o=this.getEditableTemplate(t):o=us(t,this.shouldRenderMarkdown,this.markdownAllowedTags,this.markdownAllowedAttributes),d`
      <div class="message-content" ?is-translation=${this.isTranslation}>
        ${o}
      </div>
    `}};ft.styles=[Z`
      ${ie(vh)}
    `];qt([h({attribute:!1})],ft.prototype,"message",2);qt([h({type:Boolean})],ft.prototype,"shouldRenderMarkdown",2);qt([h({type:Array})],ft.prototype,"markdownAllowedTags",2);qt([h({type:Array})],ft.prototype,"markdownAllowedAttributes",2);qt([h({type:Boolean})],ft.prototype,"isTranslation",2);qt([h({type:Boolean})],ft.prototype,"isEditable",2);ft=qt([ye("euphony-message-text")],ft);const xh=".label{box-sizing:border-box;border-radius:3px;padding:1px var(--multimodal-message-content-padding-h);margin-top:5px;margin-bottom:5px;background-color:var(--theme-gray-300);display:flex;align-items:center;gap:3px}.message-text-container{color:var(--font-color);padding-left:var(--multimodal-message-content-padding-h);border-left:1px solid var(--theme-gray-300);max-height:var(--max-message-height);overflow-y:auto}.message-text-container[is-hidden]{display:none}.message-text-container[is-translation] .message-text{color:var(--translation-color)}.message-text{word-break:break-word;white-space:pre-wrap}.message-text[markdown-rendered]{white-space:normal}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}button{all:unset}.collapse-icon{transform:rotate(90deg);width:.7em;height:.7em;padding:2px;border-radius:1px;color:var(--theme-gray-700);cursor:pointer}.collapse-icon[is-collapsed]{transform:rotate(0)}.collapse-icon:hover{color:var(--theme-gray-800)}.message-content{background-color:var(--conv-background-color);line-height:var(--message-content-line-height);padding:var(--message-content-padding);border:var(--message-content-border);border-left:var(--message-content-border-left);border-radius:var(--message-content-border-radius);box-sizing:border-box;height:100%;display:flex;flex-direction:column}.message-content{gap:8px;padding-right:var(--multimodal-message-content-padding-h);padding-left:var(--multimodal-message-content-padding-h)}.content-block{color:var(--font-color)}.error-label{color:var(--theme-pink-800);display:flex;align-items:center;gap:3px}pre.message-pre{padding:0;margin:0;font-size:.9em;color:var(--font-color);width:100%;background-color:transparent;background:transparent;word-break:break-word;white-space:pre-wrap}pre.message-pre code{background-color:transparent;background:transparent}";var kh=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Ji=(e,t,o,s)=>{for(var i=s>1?void 0:s?Ch(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&kh(t,o,i),i};let Lo=class extends he{constructor(){super(...arguments),this.message=null,this.isCollapsed=!0}firstUpdated(){}willUpdate(e){e.has("message")&&(this.isCollapsed=!0)}async initData(){}getHighlightedCode(e,t){if(!(t in Pe.languages))return d`${e}`;const o=Pe.languages[t],s=Pe.highlight(e,o,t);return d`${F(s)}`}getRawContentJSON(){if(!this.message)return"";try{return JSON.stringify(this.message.content,null,2)}catch{return String(this.message.content)}}getContentTypeLabel(){if(!this.message)return"unknown";const e=this.message.content;return typeof e=="object"&&e!==null&&"content_type"in e?e.content_type??"unknown":"unknown"}render(){if(!this.message)return d``;const e=this.getRawContentJSON();return d`
      <div class="message-content">
        <div class="error-label">
          <span>Unsupported message content type: ${this.getContentTypeLabel()}</span>
        </div>
        <div class="content-block">
          <div class="label">
            <button
              class="svg-icon collapse-icon"
              ?is-collapsed=${this.isCollapsed}
              @click=${t=>{t.preventDefault(),t.stopPropagation(),this.isCollapsed=!this.isCollapsed}}
            >
              ${F(to)}
            </button>
            <span>Raw Content</span>
          </div>

          <div class="message-text-container" ?is-hidden=${this.isCollapsed}>
            <pre class="message-pre"><code>${this.getHighlightedCode(e,"json")}</code></pre>
          </div>
        </div>
      </div>
    `}};Lo.styles=[Z`
      ${ie(xh)}
      ${ie(zo)}
    `];Ji([h({attribute:!1})],Lo.prototype,"message",2);Ji([M()],Lo.prototype,"isCollapsed",2);Lo=Ji([ye("euphony-message-unsupported")],Lo);const fa=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z"
    fill="currentColor"
  />
  <path
    d="M12 9.5C12.6904 9.5 13.25 8.94036 13.25 8.25C13.25 7.55964 12.6904 7 12 7C11.3096 7 10.75 7.55964 10.75 8.25C10.75 8.94036 11.3096 9.5 12 9.5Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
    fill="currentColor"
  />
</svg>
`,Th='@keyframes fade-in{0%{opacity:0}to{opacity:1}}.back-drop{position:fixed;z-index:49;top:0;left:0;width:100vw;height:100vh;background-color:#0000001a;display:none;pointer-events:none}.back-drop[open]{display:flex;pointer-events:all;animation:fade-in .3s}.token-window{--padding-v: 14px;--padding-h: 20px;--monospace-font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:50;display:none;flex-direction:column;justify-content:flex-start;align-items:flex-start;background-color:#fff;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;padding:0;border:none;width:min(750px,80vw)}.token-window[open]{border-radius:8px;border:none;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;pointer-events:all}.header{padding:var(--padding-v) var(--padding-h) var(--padding-v) var(--padding-h);margin:0;line-height:1;font-size:var(--font-u3);width:100%;cursor:move;border-bottom:1px solid var(--gray-300);display:flex;flex-flow:row;align-items:center;box-sizing:border-box}.separator{display:flex;width:calc(100% - 40px);height:3px;border-radius:5px;background-color:var(--gray-200)}.content{display:flex;flex-flow:column;padding:16px var(--padding-h);gap:20px;width:100%;box-sizing:border-box}.content .skip-bar{color:var(--gray-800)}.content a{color:var(--gray-700);text-decoration:none;border-bottom:1px solid var(--gray-500)}.content a:focus-visible{outline:none}.footer{display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:space-between;box-sizing:border-box;padding:0px var(--padding-h) var(--padding-v) var(--padding-h);width:100%;gap:10px}.left-block{flex:1 1 auto}.left-block .message{color:var(--green-700);font-size:var(--font-d1);white-space:wrap;word-break:break-word;line-height:1.2;max-height:90px;overflow-y:auto}.left-block .message[no-show]{display:none}.left-block .message[message-type=error]{color:var(--pink-700)}.left-block .message[message-type=success]{color:var(--green-700)}.button-block{display:flex;flex-direction:row;gap:10px;height:min-content}.button-block button{all:unset;cursor:pointer;background-color:var(--gray-200);padding:3px 8px;border-radius:8px;display:flex;flex-grow:0;transition:background-color .15s ease-in-out}.button-block button:hover{background-color:var(--gray-300)}.button-block button:active{background-color:var(--gray-400)}.button-block button.render-button{color:#fff;background-color:var(--blue-500)}.button-block button.render-button:hover{background-color:var(--blue-600)}.button-block button.render-button:active{background-color:var(--blue-700)}.button-block button.render-button[is-rendering]{cursor:no-drop}.button-block button.render-button[is-rendering]:hover,.button-block button.render-button[is-rendering]:active{background-color:var(--blue-500)}.button-block a{color:currentColor;font-style:normal;text-decoration:none}@keyframes scaleY{0%,80%,to{box-shadow:0 0;height:.8em}40%{box-shadow:0 -3px;height:1em}}.loader-container{position:relative;height:1em;flex-direction:row;align-items:center;justify-content:flex-start;display:none;pointer-events:none;transition:opacity .3s;--loader-color: var(--blue-700)}.loader-container[is-loading]{display:flex}.loader-container .loader-label{color:var(--loader-color);font-size:1em}.loader-container .loader{--bar-gap: 5px;--bar-height: 10px;--bar-width: 3px;--bar-color: color-mix(in lab, var(--loader-color) 50%, transparent 50%);position:relative;left:var(--bar-gap);top:1.5px;margin-left:5px;color:var(--bar-color);background:var(--bar-color);font-size:11px;animation:scaleY 1s infinite ease-in-out;width:var(--bar-width);height:var(--bar-height);animation-delay:-.16s}.loader-container .loader:before,.loader-container .loader:after{content:"";position:absolute;top:0;left:var(--bar-gap);background:var(--bar-color);width:var(--bar-width);height:var(--bar-height);animation:scaleY 1s infinite ease-in-out}.loader-container .loader:before{left:calc(-1 * var(--bar-gap));animation-delay:-.32s}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}.renderer-selector .renderer-selector-label{display:flex;flex-direction:row;align-items:center;gap:5px}.renderer-selector .svg-icon{position:relative;top:1px;color:var(--theme-gray-400, var(--gray-400))}.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:60;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.5;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column;overflow-y:auto}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}.renderer-selector-select-container{width:100%}.renderer-selector-select-container .renderer-selector-select-box{position:relative;display:flex;align-items:center;padding:0 28px 0 9px;border:1px solid var(--gray-300);border-radius:6px;cursor:pointer;transition:border-color .12s ease-in-out;min-height:28px}.renderer-selector-select-container .renderer-selector-select-box:hover{border-color:var(--gray-400)}.renderer-selector-select-container .renderer-selector-select-box:after{content:"";position:absolute;right:10px;top:50%;width:6px;height:6px;border:1px solid var(--gray-500);border-top:0;border-left:0;transform:translateY(-60%) rotate(45deg);pointer-events:none;transition:border-color .12s ease-in-out}.renderer-selector-select-container .renderer-selector-select-box:hover:after{border-color:var(--gray-700)}.renderer-selector-select-container .renderer-selector-select{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer;z-index:2}.renderer-selector-select-container .renderer-selector-select-label{font-size:var(--font-d2);color:var(--gray-900);width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;z-index:1}.token-result{display:flex;flex-direction:column;gap:8px}.tab-container{position:relative;display:inline-flex;align-items:stretch;background:var(--gray-200);border-radius:5px;padding:4px;gap:10px;box-shadow:inset 0 0 0 1px var(--gray-300);width:fit-content;min-width:min-content}.tab-container .tab-slider{position:absolute;top:4px;left:0;width:var(--slider-width, 0px);height:calc(100% - 8px);background:#fff;border-radius:6px;box-shadow:0 1px 4px #00000026;transform:translate(var(--slider-left, 0px));transition:transform .2s ease,box-shadow .2s ease,width .2s ease}.tab-container .tab-button{z-index:1;position:relative;border:none;background:transparent;display:flex;align-items:center;justify-content:center;padding:2px 10px;font-size:var(--font-d1);color:var(--gray-700);cursor:pointer;border-radius:8px;-webkit-user-select:none;user-select:none;flex:0 0 auto;transition:color .16s linear,transform .16s linear}.tab-container .tab-button[data-selected=true]{color:var(--gray-900)}.tab-container .tab-button[data-selected=true]:hover{background-color:transparent}.tab-container .tab-button:hover{background-color:var(--gray-300)}.result-container{max-height:400px;overflow-y:auto;border:1px solid var(--gray-300);border-radius:5px;font-size:var(--font-d3)}.tab-panel[hidden]{display:none}.token-container{padding:5px 10px;font-family:var(--monospace-font-family);font-size:var(--font-d2)}.decoded-token{color:#000}.decoded-token[color-index="0"]{background-color:color-mix(in lab,#fbb4ae 50%,transparent 50%)}.decoded-token[color-index="1"]{background-color:color-mix(in lab,#b3cde3 50%,transparent 50%)}.decoded-token[color-index="2"]{background-color:color-mix(in lab,#ccebc5 50%,transparent 50%)}.decoded-token[color-index="3"]{background-color:color-mix(in lab,#decbe4 50%,transparent 50%)}.decoded-token[color-index="4"]{background-color:color-mix(in lab,#fed9a6 50%,transparent 50%)}';var Mh=Object.defineProperty,Sh=Object.getOwnPropertyDescriptor,ke=(e,t,o,s)=>{for(var i=s>1?void 0:s?Sh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Mh(t,o,i),i};const mr=6e4;let fe=class extends he{constructor(){super(),this.conversationString=null,this.selectedRenderer="o200k_harmony",this.availableRenderers=["o200k_harmony"],this.showMessage=!1,this.message=null,this.messageType="error",this.isOpen=!1,this.isTokenizing=!1,this.selectedTab="conversation",this.tokens=[],this.decodedTokens=[],this.displayString="",this.tabSliderLeft=0,this.tabSliderWidth=0,this.tabOptions=[{key:"conversation",label:"Conversation"},{key:"token",label:"Tokens"},{key:"token_id",label:"Token IDs"},{key:"display_string",label:"String"}],this.rendererTooltipDebouncer=null,this.initData=async()=>{},this.backdropClicked=e=>{e.stopPropagation(),this.close()}}firstUpdated(){window.setTimeout(()=>{},1e3),this.updateTabSliderPosition()}willUpdate(e){}show(e){this.conversationString=e,this.isOpen=!0,this.refreshRendererList(),this.performHarmonyRender()}close(){this.isOpen=!1}tokenizationSucceeded(e){this.tokens=e.tokens,this.decodedTokens=e.decoded_tokens,this.displayString=e.display_string,this.message="",e.partial_success_error_messages.length===0?(this.messageType="success",this.showMessage=!0,this.message=`${this.tokens.length} tokens rendered from ${this.selectedRenderer}`):(this.message=`${this.tokens.length} tokens rendered from ${this.selectedRenderer}.
`,this.messageType="error",this.showMessage=!0,this.message+=e.partial_success_error_messages.join(`
`)),this.showMessage=!0,this.isTokenizing=!1,this.tokens.length>0?this.tabSelected("token"):this.displayString.length>0&&this.tabSelected("display_string")}tokenizationFailed(e){this.messageType="error",this.message=e,this.showMessage=!0,this.isTokenizing=!1}performHarmonyRender(){if(!this.conversationString){console.error("Conversation string not found");return}this.tabSelected("conversation"),this.tokens=[],this.decodedTokens=[],this.displayString="",this.message="",this.showMessage=!1,this.isTokenizing=!0;const{promise:e,resolve:t,reject:o}=Promise.withResolvers(),s=window.setTimeout(()=>{o("Timeout")},mr),i=a=>{clearTimeout(s),t(a)},n=a=>{clearTimeout(s),o(a)},r=new CustomEvent("harmony-render-requested",{bubbles:!0,composed:!0,detail:{conversation:this.conversationString,renderer:this.selectedRenderer,resolve:i,reject:n}});this.dispatchEvent(r),e.then(a=>{this.tokenizationSucceeded(a)},a=>{console.error("refresh-renderer-list-requested failed, reason: ",a),this.tokenizationFailed(a)})}refreshRendererList(){const{promise:e,resolve:t,reject:o}=Promise.withResolvers(),s=window.setTimeout(()=>{o("Timeout")},mr),i=a=>{clearTimeout(s),t(a)},n=a=>{clearTimeout(s),o(a)},r=new CustomEvent("refresh-renderer-list-requested",{bubbles:!0,composed:!0,detail:{resolve:i,reject:n}});this.dispatchEvent(r),e.then(a=>{this.availableRenderers=a},a=>{console.error("refresh-renderer-list-requested failed, reason: ",a)})}tabSelected(e){this.selectedTab=e,this.updateTabSliderPosition()}getSelectedTabIndex(){return Math.max(0,this.tabOptions.findIndex(e=>e.key===this.selectedTab))}updateTabSliderPosition(){window.requestAnimationFrame(()=>{if(this.tabButtons.length===0)return;const e=this.getSelectedTabIndex(),t=this.tabButtons[e]??this.tabButtons[0],o=t.offsetLeft,s=t.offsetWidth;(this.tabSliderLeft!==o||this.tabSliderWidth!==s)&&(this.tabSliderLeft=o,this.tabSliderWidth=s)})}updated(e){super.updated(e),e.has("isOpen")&&this.updateTabSliderPosition()}cancelClicked(e){e.stopPropagation(),this.close()}renderButtonClicked(e){e.stopPropagation(),!this.isTokenizing&&this.performHarmonyRender()}onDragStart(e){if(e.preventDefault(),!this.windowElement)throw new Error("Window element not found");if(this.windowElement.style.top.includes("%")){const l=this.windowElement.clientHeight,u=this.windowElement.clientWidth,f=(window.innerHeight-l)/2,k=(window.innerWidth-u)/2;this.windowElement.style.top=`${f}px`,this.windowElement.style.left=`${k}px`,this.windowElement.style.transform=""}const s=e.clientX,i=e.clientY,n=this.windowElement.offsetTop,r=this.windowElement.offsetLeft,a=l=>{const u=l.clientX-s,f=l.clientY-i;this.windowElement.style.top=`${n+f}px`,this.windowElement.style.left=`${r+u}px`},c=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",c)}render(){let e=d``;this.conversationString&&(e=d`
        <euphony-conversation
          conversation-string=${this.conversationString}
          disable-translation-button
          disable-share-button
          disable-markdown-button
          disable-preference-button
          disable-image-preview-window
          disable-token-window
          disable-conversation-id-copy-button
        ></euphony-conversation>
      `);let t=d` <div class="token-container empty-token-container">
      No tokens rendered
    </div>`;this.tokens.length>0&&(t=d`
        <div class="token-container decoded-token-container">
          ${this.decodedTokens.map((i,n)=>d`<span
                class="decoded-token"
                color-index=${n%5}
                title=${n<this.tokens.length?`${i} (${this.tokens[n]})`:i}
                >${i}</span
              >`)}
        </div>
      `);let o=d` <div
      class="token-container empty-token-container"
    >
      No tokens rendered
    </div>`;this.tokens.length>0&&(o=d`
        <div class="token-container token-id-container">
          ${this.tokens.entries().map(([i,n])=>d`<span class="token-id"
                  >${n.toString()}${i==this.tokens.length-1?"":", "}</span
                >`)}
        </div>
      `);let s=d` <div
      class="token-container empty-token-container"
    >
      No display string rendered
    </div>`;return this.displayString&&(s=d`
        <div class="token-container display-string-container">
          ${this.displayString}
        </div>
      `),d`
      <div
        class="back-drop"
        ?open=${this.isOpen}
        @click=${i=>{this.backdropClicked(i)}}
      ></div>
      <div class="token-window" ?open=${this.isOpen}>
        <div
          class="header"
          @mousedown=${i=>{this.onDragStart(i)}}
        >
          <div class="header-name">Harmony Conversation Tokenizer</div>
        </div>

        <div class="content">
          <div class="renderer-selector">
            <div class="renderer-selector-label">
              <span class="name">Tokenizer</span>
              <span
                class="svg-icon"
                @mouseenter=${i=>{this.rendererInfoMouseEnter(i)}}
                @mouseleave=${()=>{this.rendererInfoMouseLeave()}}
              >
                ${F(fa)}
              </span>
            </div>
            <div class="renderer-selector-select-container">
              <div class="renderer-selector-select-box">
                <select
                  class="renderer-selector-select"
                  aria-label="Select tokenizer"
                  .value=${this.selectedRenderer}
                  @change=${i=>{this.selectedRenderer=i.target.value}}
                >
                  ${this.availableRenderers.map(i=>d`<option value="${i}">${i}</option>`)}
                </select>
                <div class="renderer-selector-select-label">
                  ${this.selectedRenderer}
                </div>
              </div>
            </div>
          </div>

          <div class="token-result">
            <div
              class="tab-container"
              role="tablist"
              aria-label="Token view selector"
              style=${`--slider-left: ${this.tabSliderLeft}px; --slider-width: ${this.tabSliderWidth}px;`}
            >
              <div class="tab-slider"></div>
              ${this.tabOptions.map(i=>d`<button
                    class="tab-button"
                    type="button"
                    role="tab"
                    aria-selected=${this.selectedTab===i.key}
                    data-selected=${this.selectedTab===i.key}
                    @click=${()=>{this.tabSelected(i.key)}}
                  >
                    ${i.label}
                  </button>`)}
            </div>

            <div class="result-container">
              <div
                class="tab-panel"
                ?hidden=${this.selectedTab!=="conversation"}
              >
                ${e}
              </div>
              <div class="tab-panel" ?hidden=${this.selectedTab!=="token"}>
                ${t}
              </div>
              <div class="tab-panel" ?hidden=${this.selectedTab!=="token_id"}>
                ${o}
              </div>
              <div
                class="tab-panel"
                ?hidden=${this.selectedTab!=="display_string"}
              >
                ${s}
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="left-block">
            <!-- Important to avoid new line and whitespace here -->
            <!-- prettier-ignore -->
            <div class="message" message-type=${this.messageType} ?no-show=${!this.showMessage}>${this.message}</div>

            <div class="loader-container" ?is-loading=${this.isTokenizing}>
              <div class="loader-label">Rendering</div>
              <div class="loader"></div>
            </div>
          </div>

          <div class="button-block">
            <button
              class="cancel-button"
              @click=${i=>{this.cancelClicked(i)}}
            >
              Cancel
            </button>
            <button
              class="render-button"
              ?is-rendering=${this.isTokenizing}
              @click=${i=>{this.renderButtonClicked(i)}}
            >
              Render
            </button>
          </div>
        </div>

        <div
          id="popper-tooltip"
          class="popper-tooltip hidden"
          role="tooltip"
          @click=${i=>{i.stopPropagation()}}
        >
          <div class="popper-content">
            <span class="popper-label"
              >Choose a Harmony tokenizer to see how this conversation is
              serialized and tokenized.</span
            >
          </div>
          <div class="popper-arrow"></div>
        </div>
      </div>
    `}rendererInfoMouseEnter(e){if(e.stopPropagation(),!this.popperTooltip){console.error("Popper tooltip not initialized.");return}const t=e.currentTarget;this.rendererTooltipDebouncer&&clearTimeout(this.rendererTooltipDebouncer),this.rendererTooltipDebouncer=window.setTimeout(()=>{if(!this.popperTooltip.querySelector(".popper-label")){console.error("Tooltip label element missing.");return}Ct(this.popperTooltip,t,"top",!0,7),this.popperTooltip.classList.remove("hidden")},300)}rendererInfoMouseLeave(e=!0){if(!this.popperTooltip){console.error("Popper tooltip not initialized.");return}this.rendererTooltipDebouncer&&(clearTimeout(this.rendererTooltipDebouncer),this.rendererTooltipDebouncer=null),e?this.popperTooltip.classList.add("hidden"):(this.popperTooltip.classList.add("no-transition"),this.popperTooltip.classList.add("hidden"),setTimeout(()=>{this.popperTooltip.classList.remove("no-transition")},150))}};fe.styles=[Z`
      ${ie(Th)}
    `];ke([M()],fe.prototype,"conversationString",2);ke([M()],fe.prototype,"selectedRenderer",2);ke([M()],fe.prototype,"availableRenderers",2);ke([W("div.token-window")],fe.prototype,"windowElement",2);ke([Ml(".tab-button")],fe.prototype,"tabButtons",2);ke([M()],fe.prototype,"showMessage",2);ke([M()],fe.prototype,"message",2);ke([M()],fe.prototype,"messageType",2);ke([M()],fe.prototype,"isOpen",2);ke([M()],fe.prototype,"isTokenizing",2);ke([M()],fe.prototype,"selectedTab",2);ke([M()],fe.prototype,"tokens",2);ke([M()],fe.prototype,"decodedTokens",2);ke([M()],fe.prototype,"displayString",2);ke([M()],fe.prototype,"tabSliderLeft",2);ke([M()],fe.prototype,"tabSliderWidth",2);ke([W("#popper-tooltip")],fe.prototype,"popperTooltip",2);fe=ke([ye("euphony-token-window")],fe);const ma=':root,:host,.sl-theme-light{color-scheme:light;--sl-color-gray-50: hsl(0 0% 97.5%);--sl-color-gray-100: hsl(240 4.8% 95.9%);--sl-color-gray-200: hsl(240 5.9% 90%);--sl-color-gray-300: hsl(240 4.9% 83.9%);--sl-color-gray-400: hsl(240 5% 64.9%);--sl-color-gray-500: hsl(240 3.8% 46.1%);--sl-color-gray-600: hsl(240 5.2% 33.9%);--sl-color-gray-700: hsl(240 5.3% 26.1%);--sl-color-gray-800: hsl(240 3.7% 15.9%);--sl-color-gray-900: hsl(240 5.9% 10%);--sl-color-gray-950: hsl(240 7.3% 8%);--sl-color-red-50: hsl(0 85.7% 97.3%);--sl-color-red-100: hsl(0 93.3% 94.1%);--sl-color-red-200: hsl(0 96.3% 89.4%);--sl-color-red-300: hsl(0 93.5% 81.8%);--sl-color-red-400: hsl(0 90.6% 70.8%);--sl-color-red-500: hsl(0 84.2% 60.2%);--sl-color-red-600: hsl(0 72.2% 50.6%);--sl-color-red-700: hsl(0 73.7% 41.8%);--sl-color-red-800: hsl(0 70% 35.3%);--sl-color-red-900: hsl(0 62.8% 30.6%);--sl-color-red-950: hsl(0 60% 19.6%);--sl-color-orange-50: hsl(33.3 100% 96.5%);--sl-color-orange-100: hsl(34.3 100% 91.8%);--sl-color-orange-200: hsl(32.1 97.7% 83.1%);--sl-color-orange-300: hsl(30.7 97.2% 72.4%);--sl-color-orange-400: hsl(27 96% 61%);--sl-color-orange-500: hsl(24.6 95% 53.1%);--sl-color-orange-600: hsl(20.5 90.2% 48.2%);--sl-color-orange-700: hsl(17.5 88.3% 40.4%);--sl-color-orange-800: hsl(15 79.1% 33.7%);--sl-color-orange-900: hsl(15.3 74.6% 27.8%);--sl-color-orange-950: hsl(15.2 69.1% 19%);--sl-color-amber-50: hsl(48 100% 96.1%);--sl-color-amber-100: hsl(48 96.5% 88.8%);--sl-color-amber-200: hsl(48 96.6% 76.7%);--sl-color-amber-300: hsl(45.9 96.7% 64.5%);--sl-color-amber-400: hsl(43.3 96.4% 56.3%);--sl-color-amber-500: hsl(37.7 92.1% 50.2%);--sl-color-amber-600: hsl(32.1 94.6% 43.7%);--sl-color-amber-700: hsl(26 90.5% 37.1%);--sl-color-amber-800: hsl(22.7 82.5% 31.4%);--sl-color-amber-900: hsl(21.7 77.8% 26.5%);--sl-color-amber-950: hsl(22.9 74.1% 16.7%);--sl-color-yellow-50: hsl(54.5 91.7% 95.3%);--sl-color-yellow-100: hsl(54.9 96.7% 88%);--sl-color-yellow-200: hsl(52.8 98.3% 76.9%);--sl-color-yellow-300: hsl(50.4 97.8% 63.5%);--sl-color-yellow-400: hsl(47.9 95.8% 53.1%);--sl-color-yellow-500: hsl(45.4 93.4% 47.5%);--sl-color-yellow-600: hsl(40.6 96.1% 40.4%);--sl-color-yellow-700: hsl(35.5 91.7% 32.9%);--sl-color-yellow-800: hsl(31.8 81% 28.8%);--sl-color-yellow-900: hsl(28.4 72.5% 25.7%);--sl-color-yellow-950: hsl(33.1 69% 13.9%);--sl-color-lime-50: hsl(78.3 92% 95.1%);--sl-color-lime-100: hsl(79.6 89.1% 89.2%);--sl-color-lime-200: hsl(80.9 88.5% 79.6%);--sl-color-lime-300: hsl(82 84.5% 67.1%);--sl-color-lime-400: hsl(82.7 78% 55.5%);--sl-color-lime-500: hsl(83.7 80.5% 44.3%);--sl-color-lime-600: hsl(84.8 85.2% 34.5%);--sl-color-lime-700: hsl(85.9 78.4% 27.3%);--sl-color-lime-800: hsl(86.3 69% 22.7%);--sl-color-lime-900: hsl(87.6 61.2% 20.2%);--sl-color-lime-950: hsl(86.5 60.6% 13.9%);--sl-color-green-50: hsl(138.5 76.5% 96.7%);--sl-color-green-100: hsl(140.6 84.2% 92.5%);--sl-color-green-200: hsl(141 78.9% 85.1%);--sl-color-green-300: hsl(141.7 76.6% 73.1%);--sl-color-green-400: hsl(141.9 69.2% 58%);--sl-color-green-500: hsl(142.1 70.6% 45.3%);--sl-color-green-600: hsl(142.1 76.2% 36.3%);--sl-color-green-700: hsl(142.4 71.8% 29.2%);--sl-color-green-800: hsl(142.8 64.2% 24.1%);--sl-color-green-900: hsl(143.8 61.2% 20.2%);--sl-color-green-950: hsl(144.3 60.7% 12%);--sl-color-emerald-50: hsl(151.8 81% 95.9%);--sl-color-emerald-100: hsl(149.3 80.4% 90%);--sl-color-emerald-200: hsl(152.4 76% 80.4%);--sl-color-emerald-300: hsl(156.2 71.6% 66.9%);--sl-color-emerald-400: hsl(158.1 64.4% 51.6%);--sl-color-emerald-500: hsl(160.1 84.1% 39.4%);--sl-color-emerald-600: hsl(161.4 93.5% 30.4%);--sl-color-emerald-700: hsl(162.9 93.5% 24.3%);--sl-color-emerald-800: hsl(163.1 88.1% 19.8%);--sl-color-emerald-900: hsl(164.2 85.7% 16.5%);--sl-color-emerald-950: hsl(164.3 87.5% 9.4%);--sl-color-teal-50: hsl(166.2 76.5% 96.7%);--sl-color-teal-100: hsl(167.2 85.5% 89.2%);--sl-color-teal-200: hsl(168.4 83.8% 78.2%);--sl-color-teal-300: hsl(170.6 76.9% 64.3%);--sl-color-teal-400: hsl(172.5 66% 50.4%);--sl-color-teal-500: hsl(173.4 80.4% 40%);--sl-color-teal-600: hsl(174.7 83.9% 31.6%);--sl-color-teal-700: hsl(175.3 77.4% 26.1%);--sl-color-teal-800: hsl(176.1 69.4% 21.8%);--sl-color-teal-900: hsl(175.9 60.8% 19%);--sl-color-teal-950: hsl(176.5 58.6% 11.4%);--sl-color-cyan-50: hsl(183.2 100% 96.3%);--sl-color-cyan-100: hsl(185.1 95.9% 90.4%);--sl-color-cyan-200: hsl(186.2 93.5% 81.8%);--sl-color-cyan-300: hsl(187 92.4% 69%);--sl-color-cyan-400: hsl(187.9 85.7% 53.3%);--sl-color-cyan-500: hsl(188.7 94.5% 42.7%);--sl-color-cyan-600: hsl(191.6 91.4% 36.5%);--sl-color-cyan-700: hsl(192.9 82.3% 31%);--sl-color-cyan-800: hsl(194.4 69.6% 27.1%);--sl-color-cyan-900: hsl(196.4 63.6% 23.7%);--sl-color-cyan-950: hsl(196.8 61% 16.1%);--sl-color-sky-50: hsl(204 100% 97.1%);--sl-color-sky-100: hsl(204 93.8% 93.7%);--sl-color-sky-200: hsl(200.6 94.4% 86.1%);--sl-color-sky-300: hsl(199.4 95.5% 73.9%);--sl-color-sky-400: hsl(198.4 93.2% 59.6%);--sl-color-sky-500: hsl(198.6 88.7% 48.4%);--sl-color-sky-600: hsl(200.4 98% 39.4%);--sl-color-sky-700: hsl(201.3 96.3% 32.2%);--sl-color-sky-800: hsl(201 90% 27.5%);--sl-color-sky-900: hsl(202 80.3% 23.9%);--sl-color-sky-950: hsl(202.3 73.8% 16.5%);--sl-color-blue-50: hsl(213.8 100% 96.9%);--sl-color-blue-100: hsl(214.3 94.6% 92.7%);--sl-color-blue-200: hsl(213.3 96.9% 87.3%);--sl-color-blue-300: hsl(211.7 96.4% 78.4%);--sl-color-blue-400: hsl(213.1 93.9% 67.8%);--sl-color-blue-500: hsl(217.2 91.2% 59.8%);--sl-color-blue-600: hsl(221.2 83.2% 53.3%);--sl-color-blue-700: hsl(224.3 76.3% 48%);--sl-color-blue-800: hsl(225.9 70.7% 40.2%);--sl-color-blue-900: hsl(224.4 64.3% 32.9%);--sl-color-blue-950: hsl(226.2 55.3% 18.4%);--sl-color-indigo-50: hsl(225.9 100% 96.7%);--sl-color-indigo-100: hsl(226.5 100% 93.9%);--sl-color-indigo-200: hsl(228 96.5% 88.8%);--sl-color-indigo-300: hsl(229.7 93.5% 81.8%);--sl-color-indigo-400: hsl(234.5 89.5% 73.9%);--sl-color-indigo-500: hsl(238.7 83.5% 66.7%);--sl-color-indigo-600: hsl(243.4 75.4% 58.6%);--sl-color-indigo-700: hsl(244.5 57.9% 50.6%);--sl-color-indigo-800: hsl(243.7 54.5% 41.4%);--sl-color-indigo-900: hsl(242.2 47.4% 34.3%);--sl-color-indigo-950: hsl(243.5 43.6% 22.9%);--sl-color-violet-50: hsl(250 100% 97.6%);--sl-color-violet-100: hsl(251.4 91.3% 95.5%);--sl-color-violet-200: hsl(250.5 95.2% 91.8%);--sl-color-violet-300: hsl(252.5 94.7% 85.1%);--sl-color-violet-400: hsl(255.1 91.7% 76.3%);--sl-color-violet-500: hsl(258.3 89.5% 66.3%);--sl-color-violet-600: hsl(262.1 83.3% 57.8%);--sl-color-violet-700: hsl(263.4 70% 50.4%);--sl-color-violet-800: hsl(263.4 69.3% 42.2%);--sl-color-violet-900: hsl(263.5 67.4% 34.9%);--sl-color-violet-950: hsl(265.1 61.5% 21.4%);--sl-color-purple-50: hsl(270 100% 98%);--sl-color-purple-100: hsl(268.7 100% 95.5%);--sl-color-purple-200: hsl(268.6 100% 91.8%);--sl-color-purple-300: hsl(269.2 97.4% 85.1%);--sl-color-purple-400: hsl(270 95.2% 75.3%);--sl-color-purple-500: hsl(270.7 91% 65.1%);--sl-color-purple-600: hsl(271.5 81.3% 55.9%);--sl-color-purple-700: hsl(272.1 71.7% 47.1%);--sl-color-purple-800: hsl(272.9 67.2% 39.4%);--sl-color-purple-900: hsl(273.6 65.6% 32%);--sl-color-purple-950: hsl(276 59.5% 16.5%);--sl-color-fuchsia-50: hsl(289.1 100% 97.8%);--sl-color-fuchsia-100: hsl(287 100% 95.5%);--sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);--sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);--sl-color-fuchsia-400: hsl(292 91.4% 72.5%);--sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);--sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);--sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);--sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);--sl-color-fuchsia-900: hsl(296.7 63.6% 28%);--sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);--sl-color-pink-50: hsl(327.3 73.3% 97.1%);--sl-color-pink-100: hsl(325.7 77.8% 94.7%);--sl-color-pink-200: hsl(325.9 84.6% 89.8%);--sl-color-pink-300: hsl(327.4 87.1% 81.8%);--sl-color-pink-400: hsl(328.6 85.5% 70.2%);--sl-color-pink-500: hsl(330.4 81.2% 60.4%);--sl-color-pink-600: hsl(333.3 71.4% 50.6%);--sl-color-pink-700: hsl(335.1 77.6% 42%);--sl-color-pink-800: hsl(335.8 74.4% 35.3%);--sl-color-pink-900: hsl(335.9 69% 30.4%);--sl-color-pink-950: hsl(336.2 65.4% 15.9%);--sl-color-rose-50: hsl(355.7 100% 97.3%);--sl-color-rose-100: hsl(355.6 100% 94.7%);--sl-color-rose-200: hsl(352.7 96.1% 90%);--sl-color-rose-300: hsl(352.6 95.7% 81.8%);--sl-color-rose-400: hsl(351.3 94.5% 71.4%);--sl-color-rose-500: hsl(349.7 89.2% 60.2%);--sl-color-rose-600: hsl(346.8 77.2% 49.8%);--sl-color-rose-700: hsl(345.3 82.7% 40.8%);--sl-color-rose-800: hsl(343.4 79.7% 34.7%);--sl-color-rose-900: hsl(341.5 75.5% 30.4%);--sl-color-rose-950: hsl(341.3 70.1% 17.1%);--sl-color-primary-50: var(--sl-color-sky-50);--sl-color-primary-100: var(--sl-color-sky-100);--sl-color-primary-200: var(--sl-color-sky-200);--sl-color-primary-300: var(--sl-color-sky-300);--sl-color-primary-400: var(--sl-color-sky-400);--sl-color-primary-500: var(--sl-color-sky-500);--sl-color-primary-600: var(--sl-color-sky-600);--sl-color-primary-700: var(--sl-color-sky-700);--sl-color-primary-800: var(--sl-color-sky-800);--sl-color-primary-900: var(--sl-color-sky-900);--sl-color-primary-950: var(--sl-color-sky-950);--sl-color-success-50: var(--sl-color-green-50);--sl-color-success-100: var(--sl-color-green-100);--sl-color-success-200: var(--sl-color-green-200);--sl-color-success-300: var(--sl-color-green-300);--sl-color-success-400: var(--sl-color-green-400);--sl-color-success-500: var(--sl-color-green-500);--sl-color-success-600: var(--sl-color-green-600);--sl-color-success-700: var(--sl-color-green-700);--sl-color-success-800: var(--sl-color-green-800);--sl-color-success-900: var(--sl-color-green-900);--sl-color-success-950: var(--sl-color-green-950);--sl-color-warning-50: var(--sl-color-amber-50);--sl-color-warning-100: var(--sl-color-amber-100);--sl-color-warning-200: var(--sl-color-amber-200);--sl-color-warning-300: var(--sl-color-amber-300);--sl-color-warning-400: var(--sl-color-amber-400);--sl-color-warning-500: var(--sl-color-amber-500);--sl-color-warning-600: var(--sl-color-amber-600);--sl-color-warning-700: var(--sl-color-amber-700);--sl-color-warning-800: var(--sl-color-amber-800);--sl-color-warning-900: var(--sl-color-amber-900);--sl-color-warning-950: var(--sl-color-amber-950);--sl-color-danger-50: var(--sl-color-red-50);--sl-color-danger-100: var(--sl-color-red-100);--sl-color-danger-200: var(--sl-color-red-200);--sl-color-danger-300: var(--sl-color-red-300);--sl-color-danger-400: var(--sl-color-red-400);--sl-color-danger-500: var(--sl-color-red-500);--sl-color-danger-600: var(--sl-color-red-600);--sl-color-danger-700: var(--sl-color-red-700);--sl-color-danger-800: var(--sl-color-red-800);--sl-color-danger-900: var(--sl-color-red-900);--sl-color-danger-950: var(--sl-color-red-950);--sl-color-neutral-50: var(--sl-color-gray-50);--sl-color-neutral-100: var(--sl-color-gray-100);--sl-color-neutral-200: var(--sl-color-gray-200);--sl-color-neutral-300: var(--sl-color-gray-300);--sl-color-neutral-400: var(--sl-color-gray-400);--sl-color-neutral-500: var(--sl-color-gray-500);--sl-color-neutral-600: var(--sl-color-gray-600);--sl-color-neutral-700: var(--sl-color-gray-700);--sl-color-neutral-800: var(--sl-color-gray-800);--sl-color-neutral-900: var(--sl-color-gray-900);--sl-color-neutral-950: var(--sl-color-gray-950);--sl-color-neutral-0: hsl(0, 0%, 100%);--sl-color-neutral-1000: hsl(0, 0%, 0%);--sl-border-radius-small: .1875rem;--sl-border-radius-medium: .25rem;--sl-border-radius-large: .5rem;--sl-border-radius-x-large: 1rem;--sl-border-radius-circle: 50%;--sl-border-radius-pill: 9999px;--sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);--sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);--sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);--sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);--sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);--sl-spacing-3x-small: .125rem;--sl-spacing-2x-small: .25rem;--sl-spacing-x-small: .5rem;--sl-spacing-small: .75rem;--sl-spacing-medium: 1rem;--sl-spacing-large: 1.25rem;--sl-spacing-x-large: 1.75rem;--sl-spacing-2x-large: 2.25rem;--sl-spacing-3x-large: 3rem;--sl-spacing-4x-large: 4.5rem;--sl-transition-x-slow: 1s;--sl-transition-slow: .5s;--sl-transition-medium: .25s;--sl-transition-fast: .15s;--sl-transition-x-fast: 50ms;--sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;--sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";--sl-font-serif: Georgia, "Times New Roman", serif;--sl-font-size-2x-small: .625rem;--sl-font-size-x-small: .75rem;--sl-font-size-small: .875rem;--sl-font-size-medium: 1rem;--sl-font-size-large: 1.25rem;--sl-font-size-x-large: 1.5rem;--sl-font-size-2x-large: 2.25rem;--sl-font-size-3x-large: 3rem;--sl-font-size-4x-large: 4.5rem;--sl-font-weight-light: 300;--sl-font-weight-normal: 400;--sl-font-weight-semibold: 500;--sl-font-weight-bold: 700;--sl-letter-spacing-denser: -.03em;--sl-letter-spacing-dense: -.015em;--sl-letter-spacing-normal: normal;--sl-letter-spacing-loose: .075em;--sl-letter-spacing-looser: .15em;--sl-line-height-denser: 1;--sl-line-height-dense: 1.4;--sl-line-height-normal: 1.8;--sl-line-height-loose: 2.2;--sl-line-height-looser: 2.6;--sl-focus-ring-color: var(--sl-color-primary-600);--sl-focus-ring-style: solid;--sl-focus-ring-width: 3px;--sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width) var(--sl-focus-ring-color);--sl-focus-ring-offset: 1px;--sl-button-font-size-small: var(--sl-font-size-x-small);--sl-button-font-size-medium: var(--sl-font-size-small);--sl-button-font-size-large: var(--sl-font-size-medium);--sl-input-height-small: 1.875rem;--sl-input-height-medium: 2.5rem;--sl-input-height-large: 3.125rem;--sl-input-background-color: var(--sl-color-neutral-0);--sl-input-background-color-hover: var(--sl-input-background-color);--sl-input-background-color-focus: var(--sl-input-background-color);--sl-input-background-color-disabled: var(--sl-color-neutral-100);--sl-input-border-color: var(--sl-color-neutral-300);--sl-input-border-color-hover: var(--sl-color-neutral-400);--sl-input-border-color-focus: var(--sl-color-primary-500);--sl-input-border-color-disabled: var(--sl-color-neutral-300);--sl-input-border-width: 1px;--sl-input-required-content: "*";--sl-input-required-content-offset: -2px;--sl-input-required-content-color: var(--sl-input-label-color);--sl-input-border-radius-small: var(--sl-border-radius-medium);--sl-input-border-radius-medium: var(--sl-border-radius-medium);--sl-input-border-radius-large: var(--sl-border-radius-medium);--sl-input-font-family: var(--sl-font-sans);--sl-input-font-weight: var(--sl-font-weight-normal);--sl-input-font-size-small: var(--sl-font-size-small);--sl-input-font-size-medium: var(--sl-font-size-medium);--sl-input-font-size-large: var(--sl-font-size-large);--sl-input-letter-spacing: var(--sl-letter-spacing-normal);--sl-input-color: var(--sl-color-neutral-700);--sl-input-color-hover: var(--sl-color-neutral-700);--sl-input-color-focus: var(--sl-color-neutral-700);--sl-input-color-disabled: var(--sl-color-neutral-900);--sl-input-icon-color: var(--sl-color-neutral-500);--sl-input-icon-color-hover: var(--sl-color-neutral-600);--sl-input-icon-color-focus: var(--sl-color-neutral-600);--sl-input-placeholder-color: var(--sl-color-neutral-500);--sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);--sl-input-spacing-small: var(--sl-spacing-small);--sl-input-spacing-medium: var(--sl-spacing-medium);--sl-input-spacing-large: var(--sl-spacing-large);--sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);--sl-input-focus-ring-offset: 0;--sl-input-filled-background-color: var(--sl-color-neutral-100);--sl-input-filled-background-color-hover: var(--sl-color-neutral-100);--sl-input-filled-background-color-focus: var(--sl-color-neutral-100);--sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);--sl-input-filled-color: var(--sl-color-neutral-800);--sl-input-filled-color-hover: var(--sl-color-neutral-800);--sl-input-filled-color-focus: var(--sl-color-neutral-700);--sl-input-filled-color-disabled: var(--sl-color-neutral-800);--sl-input-label-font-size-small: var(--sl-font-size-small);--sl-input-label-font-size-medium: var(--sl-font-size-medium);--sl-input-label-font-size-large: var(--sl-font-size-large);--sl-input-label-color: inherit;--sl-input-help-text-font-size-small: var(--sl-font-size-x-small);--sl-input-help-text-font-size-medium: var(--sl-font-size-small);--sl-input-help-text-font-size-large: var(--sl-font-size-medium);--sl-input-help-text-color: var(--sl-color-neutral-500);--sl-toggle-size-small: .875rem;--sl-toggle-size-medium: 1.125rem;--sl-toggle-size-large: 1.375rem;--sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);--sl-panel-background-color: var(--sl-color-neutral-0);--sl-panel-border-color: var(--sl-color-neutral-200);--sl-panel-border-width: 1px;--sl-tooltip-border-radius: var(--sl-border-radius-medium);--sl-tooltip-background-color: var(--sl-color-neutral-800);--sl-tooltip-color: var(--sl-color-neutral-0);--sl-tooltip-font-family: var(--sl-font-sans);--sl-tooltip-font-weight: var(--sl-font-weight-normal);--sl-tooltip-font-size: var(--sl-font-size-small);--sl-tooltip-line-height: var(--sl-line-height-dense);--sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);--sl-tooltip-arrow-size: 6px;--sl-z-index-drawer: 700;--sl-z-index-dialog: 800;--sl-z-index-dropdown: 900;--sl-z-index-toast: 950;--sl-z-index-tooltip: 1000}@supports (scrollbar-gutter: stable){.sl-scroll-lock{scrollbar-gutter:var(--sl-scroll-lock-gutter)!important}.sl-scroll-lock body{overflow:hidden!important}}@supports not (scrollbar-gutter: stable){.sl-scroll-lock body{padding-right:var(--sl-scroll-lock-size)!important;overflow:hidden!important}}.sl-toast-stack{position:fixed;top:0;inset-inline-end:0;z-index:var(--sl-z-index-toast);width:28rem;max-width:100%;max-height:100%;overflow:auto}.sl-toast-stack sl-alert{margin:var(--sl-spacing-medium)}.sl-toast-stack sl-alert::part(base){box-shadow:var(--sl-shadow-large)}',$h=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L15.5858 11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H15.5858L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071Z"
    fill="currentColor"
  />
</svg>
`,_h='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M11 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path fill-rule="evenodd" d="M12 1a1 1 0 0 1 1 1v.5h4a3 3 0 0 1 3 3V9a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V5.5a3 3 0 0 1 3-3h4V2a1 1 0 0 1 1-1ZM7 4.5h10a1 1 0 0 1 1 1V9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5.5a1 1 0 0 1 1-1Z" clip-rule="evenodd"></path><path d="M6 21c0-.974.551-1.95 1.632-2.722C8.71 17.508 10.252 17 12 17c1.749 0 3.29.508 4.369 1.278C17.449 19.05 18 20.026 18 21a1 1 0 1 0 2 0c0-1.788-1.016-3.311-2.469-4.35-1.455-1.038-3.414-1.65-5.53-1.65-2.118 0-4.077.611-5.532 1.65C5.016 17.69 4 19.214 4 21a1 1 0 1 0 2 0Z"></path></svg>',br=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
    fill="currentColor"
  />
</svg>
`,Eh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z"
    fill="currentColor"
  />
</svg>
`,Lh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929L13 13.5858L13 4C13 3.44771 12.5523 3 12 3C11.4477 3 11 3.44771 11 4L11 13.5858L7.70711 10.2929Z"
    fill="currentColor"
  />
  <path
    d="M5 19C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 19.4477 19.5523 19 19 19L5 19Z"
    fill="currentColor"
  />
</svg>
`,Ah=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2.29291 2.29289C2.68343 1.90237 3.3166 1.90237 3.70712 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L17.7785 19.1927C16.2039 20.2404 14.274 21 12 21C8.84584 21 6.36062 19.541 4.5586 17.8792C2.76162 16.222 1.58481 14.312 1.01235 13.2562C0.585075 12.4681 0.585779 11.5305 1.01269 10.7432C1.5904 9.67778 2.79205 7.72646 4.63588 6.05008L2.29291 3.70711C1.90238 3.31658 1.90238 2.68342 2.29291 2.29289ZM6.05192 7.46612C4.40725 8.93862 3.30718 10.7074 2.77085 11.6965C2.66598 11.8899 2.66608 12.1102 2.77055 12.3029C3.28868 13.2585 4.34193 14.9588 5.91447 16.4089C7.48198 17.8545 9.50575 19 12 19C13.6494 19 15.09 18.5001 16.3303 17.7445L14.396 15.8102C12.6575 16.9057 10.3324 16.6963 8.81803 15.182C7.3037 13.6676 7.09428 11.3425 8.18977 9.60397L6.05192 7.46612ZM9.67223 11.0864L12.9136 14.3278C12.0164 14.6793 10.9571 14.4927 10.2322 13.7678C9.50734 13.0429 9.32067 11.9836 9.67223 11.0864Z"
    fill="currentColor"
  />
  <path
    d="M10.2234 5.19987C10.7835 5.07151 11.3753 5 12 5C14.4943 5 16.5181 6.1455 18.0856 7.59105C19.6581 9.04124 20.7114 10.7415 21.2295 11.6971C21.3335 11.8889 21.3338 12.1105 21.2285 12.3047C20.9449 12.8276 20.496 13.5829 19.8836 14.4005C19.5526 14.8426 19.6425 15.4693 20.0846 15.8004C20.5266 16.1315 21.1534 16.0415 21.4844 15.5995C22.1677 14.6872 22.6678 13.8459 22.9866 13.2582C23.4131 12.4717 23.4154 11.5327 22.9877 10.7438C22.4152 9.68799 21.2384 7.77798 19.4414 6.1208C17.6394 4.45899 15.1542 3 12 3C11.2211 3 10.4795 3.08934 9.77664 3.25041C9.23831 3.37379 8.90192 3.9102 9.02529 4.44853C9.14866 4.98686 9.68508 5.32325 10.2234 5.19987Z"
    fill="currentColor"
  />
</svg>
`,Rh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.91444 7.59106C4.3419 9.04124 3.28865 10.7415 2.77052 11.6971C2.66585 11.8902 2.66585 12.1098 2.77052 12.3029C3.28865 13.2585 4.3419 14.9588 5.91444 16.4089C7.48195 17.8545 9.50572 19 12 19C14.4943 19 16.518 17.8545 18.0855 16.4089C19.6581 14.9588 20.7113 13.2585 21.2295 12.3029C21.3341 12.1098 21.3341 11.8902 21.2295 11.6971C20.7113 10.7415 19.6581 9.04124 18.0855 7.59105C16.518 6.1455 14.4943 5 12 5C9.50572 5 7.48195 6.1455 5.91444 7.59106ZM4.55857 6.1208C6.36059 4.45899 8.84581 3 12 3C15.1542 3 17.6394 4.45899 19.4414 6.1208C21.2384 7.77798 22.4152 9.68799 22.9877 10.7438C23.4147 11.5315 23.4147 12.4685 22.9877 13.2562C22.4152 14.312 21.2384 16.222 19.4414 17.8792C17.6394 19.541 15.1542 21 12 21C8.84581 21 6.36059 19.541 4.55857 17.8792C2.76159 16.222 1.58478 14.312 1.01232 13.2562C0.58525 12.4685 0.585249 11.5315 1.01232 10.7438C1.58478 9.688 2.76159 7.77798 4.55857 6.1208ZM12 9.5C10.6193 9.5 9.49999 10.6193 9.49999 12C9.49999 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5ZM7.49999 12C7.49999 9.51472 9.51471 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51471 16.5 7.49999 14.4853 7.49999 12Z"
    fill="currentColor"
  />
</svg>
`,vr=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.2929 5.70711C16.4743 3.88849 13.5257 3.88849 11.7071 5.7071L10.7071 6.70711C10.3166 7.09763 9.68341 7.09763 9.29289 6.70711C8.90236 6.31658 8.90236 5.68342 9.29289 5.29289L10.2929 4.29289C12.8926 1.69323 17.1074 1.69323 19.7071 4.29289C22.3068 6.89256 22.3068 11.1074 19.7071 13.7071L18.7071 14.7071C18.3166 15.0976 17.6834 15.0976 17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929L18.2929 12.2929C20.1115 10.4743 20.1115 7.52572 18.2929 5.70711ZM15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L9.7071 15.7071C9.31658 16.0976 8.68341 16.0976 8.29289 15.7071C7.90236 15.3166 7.90236 14.6834 8.29289 14.2929L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289ZM6.7071 9.29289C7.09763 9.68342 7.09763 10.3166 6.7071 10.7071L5.7071 11.7071C3.88849 13.5257 3.88849 16.4743 5.7071 18.2929C7.52572 20.1115 10.4743 20.1115 12.2929 18.2929L13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071L13.7071 19.7071C11.1074 22.3068 6.89255 22.3068 4.29289 19.7071C1.69322 17.1074 1.69322 12.8926 4.29289 10.2929L5.29289 9.29289C5.68341 8.90237 6.31658 8.90237 6.7071 9.29289Z"
    fill="currentColor"
  />
</svg>
`,ba=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.16146 3.5H17.8385C18.3657 3.49998 18.8205 3.49997 19.195 3.53057C19.5904 3.56287 19.9836 3.63419 20.362 3.82698C20.9265 4.1146 21.3854 4.57354 21.673 5.13803C21.8658 5.51641 21.9371 5.90963 21.9694 6.30497C22 6.67954 22 7.1343 22 7.66144V15.5C22.5523 15.5 22.9999 15.9477 22.9999 16.5V17.5C22.9999 19.1569 21.6568 20.5 19.9999 20.5H3.99622C2.33936 20.5 0.996216 19.1569 0.996216 17.5V16.5C0.996216 15.9477 1.44393 15.5 1.99622 15.5H2L2 7.66146C1.99998 7.13431 1.99997 6.67955 2.03057 6.30497C2.06287 5.90963 2.13419 5.51641 2.32698 5.13803C2.6146 4.57354 3.07354 4.1146 3.63803 3.82698C4.01641 3.63419 4.40963 3.56287 4.80497 3.53057C5.17954 3.49997 5.63431 3.49998 6.16146 3.5ZM3.0014 17.5L3 17.5L2.9986 17.5H2.99622C2.99622 18.0523 3.44393 18.5 3.99622 18.5H19.9999C20.5522 18.5 20.9999 18.0523 20.9999 17.5H20.9986H15.236L14.4472 17.8944C14.3083 17.9639 14.1552 18 13.9999 18H9.99995C9.8447 18 9.69159 17.9639 9.55273 17.8944L8.76388 17.5H3.0014ZM20 15.5V7.7C20 7.12345 19.9992 6.75118 19.9761 6.46784C19.9539 6.19617 19.9162 6.09546 19.891 6.04601C19.7951 5.85785 19.6422 5.70487 19.454 5.609C19.4045 5.5838 19.3038 5.54612 19.0322 5.52393C18.7488 5.50078 18.3766 5.5 17.8 5.5H6.2C5.62345 5.5 5.25117 5.50078 4.96784 5.52393C4.69617 5.54612 4.59545 5.5838 4.54601 5.609C4.35785 5.70487 4.20487 5.85785 4.10899 6.04601C4.0838 6.09546 4.04612 6.19617 4.02393 6.46784C4.00078 6.75117 4 7.12345 4 7.7V15.5H8.99995C9.15519 15.5 9.3083 15.5361 9.44716 15.6056L10.236 16H13.7639L14.5527 15.6056C14.6916 15.5361 14.8447 15.5 14.9999 15.5H20Z"
    fill="currentColor"
  />
</svg>
`,Ph=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M2 7C2 5.34315 3.34315 4 5 4H6C6.55228 4 7 4.44772 7 5C7 5.55228 6.55228 6 6 6H5C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H6C6.55228 18 7 18.4477 7 19C7 19.5523 6.55228 20 6 20H5C3.34315 20 2 18.6569 2 17V7ZM17 5C17 4.44772 17.4477 4 18 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H18C17.4477 20 17 19.5523 17 19C17 18.4477 17.4477 18 18 18H19C19.5523 18 20 17.5523 20 17V7C20 6.44772 19.5523 6 19 6H18C17.4477 6 17 5.55228 17 5ZM12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9ZM15.5 10.5C16.0523 10.5 16.5 10.9477 16.5 11.5V14C16.5 14.5523 16.0523 15 15.5 15C14.9477 15 14.5 14.5523 14.5 14V11.5C14.5 10.9477 14.9477 10.5 15.5 10.5ZM8.5 11.5C9.05228 11.5 9.5 11.9477 9.5 12.5V14C9.5 14.5523 9.05228 15 8.5 15C7.94772 15 7.5 14.5523 7.5 14V12.5C7.5 11.9477 7.94772 11.5 8.5 11.5Z"
    fill="currentColor"
  />
</svg>
`,Dh=`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M13.8858 2.71322C14.8344 1.92447 16.2474 1.9732 17.1388 2.86459L17.3057 3.04916C18.0316 3.94013 18.0265 5.22711 17.294 6.11263L17.1261 6.29623L14.711 8.67513L14.8653 8.82943L15.0431 9.02865C15.8122 9.9856 15.6958 11.3368 14.9454 12.2337L14.7755 12.4183C13.6883 13.4902 12.8391 14.6622 12.1798 16.0052L11.9083 16.5912C11.3764 17.8145 9.89971 18.5876 8.58797 17.9271L8.462 17.8587C7.40522 17.2458 6.64667 16.801 5.98153 16.2884C5.38845 15.8314 4.88059 15.3299 4.28719 14.6253L4.02743 14.3109C3.8525 14.0953 3.82988 13.7933 3.97078 13.554L4.35262 12.9046L3.73348 13.1204C3.48317 13.2076 3.20874 13.1373 3.03133 12.9495L2.962 12.8626C2.82204 12.6535 2.68349 12.4395 2.54696 12.2201L2.14168 11.5453C1.3618 10.2032 2.14737 8.64808 3.41024 8.09994L3.99715 7.82943C5.34174 7.17073 6.51501 6.32179 7.58797 5.23568L7.77254 5.06576C8.73426 4.26289 10.2181 4.1871 11.1788 5.14681L11.3321 5.30013L13.7032 2.88217L13.8858 2.71322ZM6.89754 7.60385C6.08373 8.21683 5.21277 8.73808 4.26571 9.17513L3.94051 9.32064C3.24144 9.62398 2.99802 10.3713 3.29207 10.8773L3.67684 11.5169C3.71362 11.576 3.7522 11.6336 3.78914 11.6917L5.62703 11.0521L5.72664 11.0257C5.96159 10.9829 6.20564 11.0704 6.36043 11.2591C6.53695 11.4747 6.56039 11.7777 6.41903 12.0179L5.35457 13.8226C5.88269 14.4443 6.30963 14.8614 6.79403 15.2347C7.37737 15.6842 8.05552 16.0858 9.12899 16.7083L9.22664 16.7572C9.72868 16.9707 10.4043 16.7146 10.6886 16.0609L10.835 15.7357C11.2724 14.7898 11.792 13.9186 12.4054 13.1058L6.89754 7.60385ZM16.1983 3.80502C15.7975 3.40419 15.1621 3.38226 14.7354 3.73666L14.6524 3.81283L11.8116 6.71029C11.6875 6.83692 11.5182 6.90945 11.3409 6.91049C11.1634 6.91141 10.9928 6.84059 10.8673 6.71517L10.2384 6.08724C9.8327 5.68229 9.12999 5.66436 8.63094 6.08138L8.53426 6.17123C8.33552 6.37241 8.13162 6.56445 7.92586 6.75131L13.2579 12.0785C13.4452 11.8726 13.6402 11.6709 13.8419 11.472L13.9307 11.3744C14.3203 10.9092 14.331 10.2674 14.0011 9.85482L13.9249 9.77084L13.296 9.14291C13.1706 9.01761 13.101 8.84656 13.1016 8.66928C13.1024 8.49215 13.1737 8.32289 13.2999 8.19857L16.1925 5.34896L16.2677 5.26595C16.5972 4.86764 16.6 4.28883 16.2735 3.88803L16.1983 3.80502Z"
  />
</svg>
`,zh=`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M11.3312 3.56837C12.7488 2.28756 14.9376 2.33009 16.3038 3.6963L16.4318 3.83106C17.6712 5.20294 17.6712 7.29708 16.4318 8.66895L16.3038 8.80372L10.0118 15.0947C9.68833 15.4182 9.45378 15.6553 9.22179 15.8457L8.98742 16.0225C8.78227 16.1626 8.56423 16.2832 8.33703 16.3828L8.10753 16.4756C7.92576 16.5422 7.73836 16.5902 7.5216 16.6348L6.75695 16.7705L4.36339 17.169C4.22053 17.1928 4.06908 17.2188 3.94054 17.2285C3.84177 17.236 3.70827 17.2386 3.56261 17.2031L3.41417 17.1543C3.19115 17.0586 3.00741 16.8908 2.89171 16.6797L2.84581 16.5859C2.75951 16.3846 2.76168 16.1912 2.7716 16.0596C2.7813 15.931 2.80736 15.7796 2.83117 15.6367L3.2296 13.2432L3.36437 12.4785C3.40893 12.2616 3.45789 12.0745 3.52453 11.8926L3.6173 11.6621C3.71685 11.4352 3.83766 11.2176 3.97765 11.0127L4.15343 10.7783C4.34386 10.5462 4.58164 10.312 4.90538 9.98829L11.1964 3.6963L11.3312 3.56837ZM5.84581 10.9287C5.49664 11.2779 5.31252 11.4634 5.18663 11.6162L5.07531 11.7627C4.98188 11.8995 4.90151 12.0448 4.83507 12.1963L4.77355 12.3506C4.73321 12.4607 4.70242 12.5761 4.66808 12.7451L4.54113 13.4619L4.14269 15.8555L4.14171 15.8574H4.14464L6.5382 15.458L7.25499 15.332C7.424 15.2977 7.5394 15.2669 7.64953 15.2266L7.80285 15.165C7.95455 15.0986 8.09947 15.0174 8.23644 14.9238L8.3839 14.8135C8.53668 14.6876 8.72225 14.5035 9.0714 14.1543L14.0587 9.16602L10.8331 5.94044L5.84581 10.9287ZM15.3634 4.63673C14.5281 3.80141 13.2057 3.74938 12.3097 4.48048L12.1368 4.63673L11.7735 5.00001L15.0001 8.22559L15.3634 7.86329L15.5196 7.68946C16.2015 6.85326 16.2015 5.64676 15.5196 4.81056L15.3634 4.63673Z"
  />
</svg>
`,Ih=`<svg
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.21498 2.08301H11.7863C12.6895 2.083 13.4179 2.08299 14.0078 2.13119C14.6152 2.18081 15.1487 2.28566 15.6423 2.53715C16.4263 2.93662 17.0637 3.57404 17.4632 4.35805C17.7147 4.85162 17.8195 5.38511 17.8691 5.99249C17.9173 6.58238 17.9173 7.31084 17.9173 8.21398V11.7854C17.9173 12.6885 17.9173 13.417 17.8691 14.0069C17.8195 14.6142 17.7147 15.1477 17.4632 15.6413C17.0637 16.4253 16.4263 17.0627 15.6423 17.4622C15.1487 17.7137 14.6152 17.8185 14.0078 17.8682C13.4179 17.9164 12.6895 17.9163 11.7863 17.9163H8.21496C7.31181 17.9163 6.58336 17.9164 5.99346 17.8682C5.38609 17.8185 4.8526 17.7137 4.35902 17.4622C3.57502 17.0627 2.9376 16.4253 2.53812 15.6413C2.28663 15.1477 2.18179 14.6142 2.13217 14.0069C2.08397 13.417 2.08398 12.6885 2.08398 11.7853V8.214C2.08398 7.31085 2.08397 6.58239 2.13217 5.99249C2.18179 5.38511 2.28663 4.85162 2.53812 4.35805C2.9376 3.57404 3.57502 2.93662 4.35902 2.53715C4.8526 2.28566 5.38609 2.18081 5.99346 2.13119C6.58336 2.08299 7.31182 2.083 8.21498 2.08301ZM6.12918 3.79232C5.62488 3.83352 5.33514 3.91034 5.11568 4.02216C4.64527 4.26184 4.26282 4.64429 4.02314 5.1147C3.91131 5.33416 3.8345 5.6239 3.7933 6.12821C3.7513 6.64224 3.75065 7.3025 3.75065 8.24967V11.7497C3.75065 12.6968 3.7513 13.3571 3.7933 13.8711C3.8345 14.3754 3.91131 14.6652 4.02314 14.8847C4.26282 15.3551 4.64527 15.7375 5.11568 15.9772C5.33514 16.089 5.62488 16.1658 6.12918 16.207C6.64322 16.249 7.30348 16.2497 8.25065 16.2497H11.7507C12.6978 16.2497 13.3581 16.249 13.8721 16.207C14.3764 16.1658 14.6662 16.089 14.8856 15.9772C15.356 15.7375 15.7385 15.3551 15.9782 14.8847C16.09 14.6652 16.1668 14.3754 16.208 13.8711C16.25 13.3571 16.2507 12.6968 16.2507 11.7497V8.24967C16.2507 7.3025 16.25 6.64224 16.208 6.12821C16.1668 5.6239 16.09 5.33416 15.9782 5.1147C15.7385 4.64429 15.356 4.26184 14.8856 4.02216C14.6662 3.91034 14.3764 3.83352 13.8721 3.79232C13.3581 3.75032 12.6978 3.74967 11.7507 3.74967H8.25065C7.30348 3.74967 6.64322 3.75032 6.12918 3.79232ZM10.0007 5.83301C10.4609 5.83301 10.834 6.2061 10.834 6.66634V9.16634H13.334C13.7942 9.16634 14.1673 9.53944 14.1673 9.99968C14.1673 10.4599 13.7942 10.833 13.334 10.833H10.834V13.333C10.834 13.7932 10.4609 14.1663 10.0007 14.1663C9.54041 14.1663 9.16732 13.7932 9.16732 13.333V10.833H6.66732C6.20708 10.833 5.83398 10.4599 5.83398 9.99968C5.83398 9.53944 6.20708 9.16634 6.66732 9.16634H9.16732V6.66634C9.16732 6.2061 9.54041 5.83301 10.0007 5.83301Z"
    fill="currentColor"
  />
</svg>
`,wi=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.5 5C13.3954 5 12.5 5.89543 12.5 7C12.5 8.10457 13.3954 9 14.5 9C15.6046 9 16.5 8.10457 16.5 7C16.5 5.89543 15.6046 5 14.5 5ZM10.626 6C11.0701 4.27477 12.6362 3 14.5 3C16.3638 3 17.9299 4.27477 18.374 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H18.374C17.9299 9.72523 16.3638 11 14.5 11C12.6362 11 11.0701 9.72523 10.626 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H10.626ZM9.5 15C8.39543 15 7.5 15.8954 7.5 17C7.5 18.1046 8.39543 19 9.5 19C10.6046 19 11.5 18.1046 11.5 17C11.5 15.8954 10.6046 15 9.5 15ZM5.62602 16C6.07006 14.2748 7.63616 13 9.5 13C11.3638 13 12.9299 14.2748 13.374 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H13.374C12.9299 19.7252 11.3638 21 9.5 21C7.63616 21 6.07006 19.7252 5.62602 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H5.62602Z"
    fill="currentColor"
  />
</svg>
`,yr=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13 6.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V6.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L11.2929 3.29289ZM4 14C4.55228 14 5 14.4477 5 15V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V15C3 14.4477 3.44772 14 4 14Z"
    fill="currentColor"
  />
</svg>
`,Oh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7 3.5C7.55228 3.5 8 3.94772 8 4.5V5H9.98469C9.99404 4.99987 10.0034 4.99987 10.0128 5H11.5C12.0523 5 12.5 5.44772 12.5 6C12.5 6.55228 12.0523 7 11.5 7H10.8637C10.5154 8.988 9.81622 10.6517 8.66723 11.9696C8.62438 12.0188 8.58099 12.0674 8.53707 12.1154C9.22032 12.5013 10.0168 12.8033 10.9408 13.0284C11.4774 13.1591 11.8064 13.7001 11.6757 14.2367C11.545 14.7733 11.004 15.1023 10.4674 14.9716C9.10136 14.6388 7.92361 14.1437 6.93184 13.4706C5.88214 14.1537 4.64437 14.6449 3.22613 14.9741C2.68815 15.099 2.15079 14.7641 2.0259 14.2261C1.90101 13.6882 2.23589 13.1508 2.77387 13.0259C3.78086 12.7921 4.63641 12.4768 5.36153 12.0803C4.69058 11.3066 4.15918 10.3915 3.76584 9.32467C3.57479 8.80648 3.83998 8.23153 4.35817 8.04047C4.87635 7.84942 5.4513 8.11461 5.64236 8.63279C5.96391 9.50491 6.39674 10.2474 6.96257 10.8708C7.03019 10.8003 7.09588 10.7286 7.15969 10.6554C7.95291 9.7455 8.51161 8.55536 8.8285 7H2.5C1.94772 7 1.5 6.55228 1.5 6C1.5 5.44772 1.94772 5 2.5 5H6V4.5C6 3.94772 6.44772 3.5 7 3.5ZM17 9C17.3788 9 17.725 9.214 17.8944 9.55279L22.3944 18.5528C22.6414 19.0468 22.4412 19.6474 21.9472 19.8944C21.4532 20.1414 20.8526 19.9412 20.6056 19.4472L19.757 17.75H14.243L13.3944 19.4472C13.1474 19.9412 12.5468 20.1414 12.0528 19.8944C11.5588 19.6474 11.3586 19.0468 11.6056 18.5528L16.1056 9.55279C16.275 9.214 16.6212 9 17 9ZM15.243 15.75H18.757L17 12.2361L15.243 15.75Z"
    fill="currentColor"
  />
</svg>
`,Bh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.5555 4C10.099 4 9.70052 4.30906 9.58693 4.75114L9.29382 5.8919H14.715L14.4219 4.75114C14.3083 4.30906 13.9098 4 13.4533 4H10.5555ZM16.7799 5.8919L16.3589 4.25342C16.0182 2.92719 14.8226 2 13.4533 2H10.5555C9.18616 2 7.99062 2.92719 7.64985 4.25342L7.22886 5.8919H4C3.44772 5.8919 3 6.33961 3 6.8919C3 7.44418 3.44772 7.8919 4 7.8919H4.10069L5.31544 19.3172C5.47763 20.8427 6.76455 22 8.29863 22H15.7014C17.2354 22 18.5224 20.8427 18.6846 19.3172L19.8993 7.8919H20C20.5523 7.8919 21 7.44418 21 6.8919C21 6.33961 20.5523 5.8919 20 5.8919H16.7799ZM17.888 7.8919H6.11196L7.30423 19.1057C7.3583 19.6142 7.78727 20 8.29863 20H15.7014C16.2127 20 16.6417 19.6142 16.6958 19.1057L17.888 7.8919ZM10 10C10.5523 10 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 10 14 10Z"
    fill="currentColor"
  />
</svg>
`,wr='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm5 8c-3.656 0-6.5 2.75-6.5 6a1 1 0 1 1-2 0c0-4.482 3.872-8 8.5-8s8.5 3.518 8.5 8a1 1 0 1 1-2 0c0-3.25-2.844-6-6.5-6Z" clip-rule="evenodd"></path></svg>',Fh=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.5 4C11.4624 4 8.99999 6.46243 8.99999 9.5C8.99999 10.2519 9.1503 10.9661 9.42157 11.6162C9.57769 11.9903 9.49247 12.4217 9.2058 12.7084L4.4571 17.4571C3.88112 18.0331 3.88112 18.9669 4.4571 19.5429C5.03307 20.1189 5.96691 20.1189 6.54288 19.5429L11.2916 14.7942C11.5783 14.5075 12.0096 14.4223 12.3838 14.5784C13.0339 14.8497 13.7481 15 14.5 15C17.5376 15 20 12.5376 20 9.5C20 9.47156 19.9998 9.44318 19.9993 9.41486L18.7071 10.7071C17.212 12.2022 14.788 12.2022 13.2929 10.7071C11.7978 9.21201 11.7978 6.78798 13.2929 5.29289L14.5851 4.00064C14.5568 4.00022 14.5284 4 14.5 4ZM6.99999 9.5C6.99999 5.35786 10.3579 2 14.5 2C15.3632 2 16.1943 2.14622 16.9687 2.41606C17.2937 2.52931 17.5376 2.80173 17.6144 3.13722C17.6912 3.47271 17.5901 3.82412 17.3467 4.06748L14.7071 6.70711C13.9931 7.42115 13.9931 8.57885 14.7071 9.29289C15.4211 10.0069 16.5788 10.0069 17.2929 9.29289L19.9325 6.65327C20.1759 6.4099 20.5273 6.30879 20.8628 6.38559C21.1983 6.46239 21.4707 6.70632 21.5839 7.03132C21.8538 7.8057 22 8.63684 22 9.5C22 13.6421 18.6421 17 14.5 17C13.7195 17 12.9654 16.8805 12.256 16.6582L7.9571 20.9571C6.60007 22.3141 4.39991 22.3141 3.04288 20.9571C1.68586 19.6001 1.68586 17.3999 3.04288 16.0429L7.34175 11.744C7.11954 11.0346 6.99999 10.2805 6.99999 9.5Z"
    fill="currentColor"
  />
</svg>
`,Nh='a{color:#0064c8;text-decoration:none}a:hover{text-decoration:underline}a:visited{color:#0050a0}label{display:block}input,button,select,textarea{font-family:inherit;font-size:inherit;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}button{color:#333;background-color:#f4f4f4;outline:none}button:disabled{color:#999}:root,:host{--shadow-border-light: 0px 0px 5px hsla(0, 0%, 0%, .1), 0px 0px 4px hsla(0, 0%, 0%, .07), 0px 0px 10px hsla(0, 0%, 0%, .07);--shadow-border-card: 0px 0px 6px hsla(0, 0%, 0%, .07);--shadow-border-large: 0 8px 24px hsla(212, 9%, 59%, .2);--ease-cubic-in-out: cubic-bezier(.645, .045, .355, 1);--border-radius: 5px;--container-h-padding: 12px;--container-v-padding: 10px;--font-d1: .9375rem;--font-d2: .875rem;--font-d3: .8125rem;--font-d4: .75rem;--font-d5: .6875rem;--font-d6: .625rem;--font-u1: 1.0625rem;--font-u2: 1.125rem;--font-u3: 1.1875rem;--font-u4: 1.25rem;--font-u5: 1.3125rem;--font-u6: 1.375rem;--font-family-monospace: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--added-color: hsl(120, 37%, 89%);--replaced-color: hsl(208, 88%, 90%);--deleted--color: hsl(353, 100%, 93%);--red-50: hsl(350, 100%, 96.08%);--red-100: hsl(354, 100%, 90.2%);--red-200: hsl(0, 72.65%, 77.06%);--red-300: hsl(0, 68.67%, 67.45%);--red-400: hsl(1, 83.25%, 62.55%);--red-500: hsl(4, 89.62%, 58.43%);--red-600: hsl(1, 77.19%, 55.29%);--red-700: hsl(0, 65.08%, 50.59%);--red-800: hsl(0, 66.39%, 46.67%);--red-900: hsl(0, 73.46%, 41.37%);--red-a100: hsl(4, 100%, 75.1%);--red-a200: hsl(0, 100%, 66.08%);--red-a400: hsl(348, 100%, 54.51%);--red-a700: hsl(0, 100%, 41.76%);--pink-50: hsl(340, 80%, 94.12%);--pink-100: hsl(339, 81.33%, 85.29%);--pink-200: hsl(339, 82.11%, 75.88%);--pink-300: hsl(339, 82.56%, 66.27%);--pink-400: hsl(339, 81.9%, 58.82%);--pink-500: hsl(339, 82.19%, 51.57%);--pink-600: hsl(338, 77.78%, 47.65%);--pink-700: hsl(336, 77.98%, 42.75%);--pink-800: hsl(333, 79.27%, 37.84%);--pink-900: hsl(328, 81.33%, 29.41%);--pink-a100: hsl(339, 100%, 75.1%);--pink-a200: hsl(339, 100%, 62.55%);--pink-a400: hsl(338, 100%, 48.04%);--pink-a700: hsl(333, 84.11%, 41.96%);--purple-50: hsl(292, 44.44%, 92.94%);--purple-100: hsl(291, 46.07%, 82.55%);--purple-200: hsl(291, 46.94%, 71.18%);--purple-300: hsl(291, 46.6%, 59.61%);--purple-400: hsl(291, 46.61%, 50.78%);--purple-500: hsl(291, 63.72%, 42.16%);--purple-600: hsl(287, 65.05%, 40.39%);--purple-700: hsl(282, 67.88%, 37.84%);--purple-800: hsl(277, 70.17%, 35.49%);--purple-900: hsl(267, 75%, 31.37%);--purple-a100: hsl(291, 95.38%, 74.51%);--purple-a200: hsl(291, 95.9%, 61.76%);--purple-a400: hsl(291, 100%, 48.82%);--purple-a700: hsl(280, 100%, 50%);--deep-purple-50: hsl(264, 45.45%, 93.53%);--deep-purple-100: hsl(261, 45.68%, 84.12%);--deep-purple-200: hsl(261, 46.27%, 73.73%);--deep-purple-300: hsl(261, 46.81%, 63.14%);--deep-purple-400: hsl(261, 46.72%, 55.1%);--deep-purple-500: hsl(261, 51.87%, 47.25%);--deep-purple-600: hsl(259, 53.91%, 45.1%);--deep-purple-700: hsl(257, 57.75%, 41.76%);--deep-purple-800: hsl(254, 60.8%, 39.02%);--deep-purple-900: hsl(251, 68.79%, 33.92%);--deep-purple-a100: hsl(261, 100%, 76.67%);--deep-purple-a200: hsl(255, 100%, 65.1%);--deep-purple-a400: hsl(258, 100%, 56.08%);--deep-purple-a700: hsl(265, 100%, 45.88%);--indigo-50: hsl(231, 43.75%, 93.73%);--indigo-100: hsl(231, 45%, 84.31%);--indigo-200: hsl(230, 44.36%, 73.92%);--indigo-300: hsl(230, 44.09%, 63.53%);--indigo-400: hsl(230, 44.25%, 55.69%);--indigo-500: hsl(230, 48.36%, 47.84%);--indigo-600: hsl(231, 50%, 44.71%);--indigo-700: hsl(231, 53.62%, 40.59%);--indigo-800: hsl(232, 57.22%, 36.67%);--indigo-900: hsl(234, 65.79%, 29.8%);--indigo-a100: hsl(230, 100%, 77.45%);--indigo-a200: hsl(230, 98.84%, 66.08%);--indigo-a400: hsl(230, 98.97%, 61.76%);--indigo-a700: hsl(230, 99.04%, 59.22%);--blue-50: hsl(205, 86.67%, 94.12%);--blue-100: hsl(207, 88.89%, 85.88%);--blue-200: hsl(206, 89.74%, 77.06%);--blue-300: hsl(206, 89.02%, 67.84%);--blue-400: hsl(206, 89.95%, 60.98%);--blue-500: hsl(206, 89.74%, 54.12%);--blue-600: hsl(208, 79.28%, 50.78%);--blue-700: hsl(209, 78.72%, 46.08%);--blue-800: hsl(211, 80.28%, 41.76%);--blue-900: hsl(216, 85.06%, 34.12%);--blue-a100: hsl(217, 100%, 75.49%);--blue-a200: hsl(217, 100%, 63.33%);--blue-a400: hsl(217, 100%, 58.04%);--blue-a700: hsl(224, 100%, 58.04%);--light-blue-50: hsl(198, 93.55%, 93.92%);--light-blue-100: hsl(198, 92.41%, 84.51%);--light-blue-200: hsl(198, 92.37%, 74.31%);--light-blue-300: hsl(198, 91.3%, 63.92%);--light-blue-400: hsl(198, 91.93%, 56.27%);--light-blue-500: hsl(198, 97.57%, 48.43%);--light-blue-600: hsl(199, 97.41%, 45.49%);--light-blue-700: hsl(201, 98.1%, 41.37%);--light-blue-800: hsl(202, 97.91%, 37.45%);--light-blue-900: hsl(206, 98.72%, 30.59%);--light-blue-a100: hsl(198, 100%, 75.1%);--light-blue-a200: hsl(198, 100%, 62.55%);--light-blue-a400: hsl(198, 100%, 50%);--light-blue-a700: hsl(202, 100%, 45.88%);--cyan-50: hsl(186, 72.22%, 92.94%);--cyan-100: hsl(186, 71.11%, 82.35%);--cyan-200: hsl(186, 71.62%, 70.98%);--cyan-300: hsl(186, 71.15%, 59.22%);--cyan-400: hsl(186, 70.87%, 50.2%);--cyan-500: hsl(186, 100%, 41.57%);--cyan-600: hsl(186, 100%, 37.84%);--cyan-700: hsl(185, 100%, 32.75%);--cyan-800: hsl(185, 100%, 28.04%);--cyan-900: hsl(182, 100%, 19.61%);--cyan-a100: hsl(180, 100%, 75.88%);--cyan-a200: hsl(180, 100%, 54.71%);--cyan-a400: hsl(186, 100%, 50%);--cyan-a700: hsl(187, 100%, 41.57%);--teal-50: hsl(176, 40.91%, 91.37%);--teal-100: hsl(174, 41.28%, 78.63%);--teal-200: hsl(174, 41.9%, 64.9%);--teal-300: hsl(174, 41.83%, 50.78%);--teal-400: hsl(174, 62.75%, 40%);--teal-500: hsl(174, 100%, 29.41%);--teal-600: hsl(173, 100%, 26.86%);--teal-700: hsl(173, 100%, 23.73%);--teal-800: hsl(172, 100%, 20.59%);--teal-900: hsl(169, 100%, 15.1%);--teal-a100: hsl(166, 100%, 82.75%);--teal-a200: hsl(165, 100%, 69.61%);--teal-a400: hsl(165, 82.26%, 51.37%);--teal-a700: hsl(171, 100%, 37.45%);--green-50: hsl(124, 39.39%, 93.53%);--green-100: hsl(121, 37.5%, 84.31%);--green-200: hsl(122, 37.4%, 74.31%);--green-300: hsl(122, 38.46%, 64.31%);--green-400: hsl(122, 38.46%, 56.67%);--green-500: hsl(122, 39.44%, 49.22%);--green-600: hsl(122, 40.97%, 44.51%);--green-700: hsl(122, 43.43%, 38.82%);--green-800: hsl(123, 46.2%, 33.53%);--green-900: hsl(124, 55.37%, 23.73%);--green-a100: hsl(136, 77.22%, 84.51%);--green-a200: hsl(150, 81.82%, 67.65%);--green-a400: hsl(150, 100%, 45.1%);--green-a700: hsl(144, 100%, 39.22%);--light-green-50: hsl(88, 51.72%, 94.31%);--light-green-100: hsl(87, 50.68%, 85.69%);--light-green-200: hsl(88, 50%, 76.47%);--light-green-300: hsl(87, 50%, 67.06%);--light-green-400: hsl(87, 50.24%, 59.8%);--light-green-500: hsl(87, 50.21%, 52.75%);--light-green-600: hsl(89, 46.12%, 48.04%);--light-green-700: hsl(92, 47.91%, 42.16%);--light-green-800: hsl(95, 49.46%, 36.47%);--light-green-900: hsl(103, 55.56%, 26.47%);--light-green-a100: hsl(87, 100%, 78.24%);--light-green-a200: hsl(87, 100%, 67.45%);--light-green-a400: hsl(92, 100%, 50.59%);--light-green-a700: hsl(96, 81.15%, 47.84%);--lime-50: hsl(65, 71.43%, 94.51%);--lime-100: hsl(64, 69.01%, 86.08%);--lime-200: hsl(65, 70.69%, 77.25%);--lime-300: hsl(65, 70.37%, 68.24%);--lime-400: hsl(65, 69.7%, 61.18%);--lime-500: hsl(65, 69.96%, 54.31%);--lime-600: hsl(63, 59.68%, 49.61%);--lime-700: hsl(62, 61.43%, 43.73%);--lime-800: hsl(59, 62.89%, 38.04%);--lime-900: hsl(53, 69.93%, 30%);--lime-a100: hsl(65, 100%, 75.29%);--lime-a200: hsl(65, 100%, 62.75%);--lime-a400: hsl(73, 100%, 50%);--lime-a700: hsl(75, 100%, 45.88%);--yellow-50: hsl(55, 100%, 95.29%);--yellow-100: hsl(53, 100%, 88.43%);--yellow-200: hsl(53, 100%, 80.78%);--yellow-300: hsl(53, 100%, 73.14%);--yellow-400: hsl(53, 100%, 67.25%);--yellow-500: hsl(53, 100%, 61.57%);--yellow-600: hsl(48, 98.04%, 60%);--yellow-700: hsl(42, 96.26%, 58.04%);--yellow-800: hsl(37, 94.64%, 56.08%);--yellow-900: hsl(28, 91.74%, 52.55%);--yellow-a100: hsl(60, 100%, 77.65%);--yellow-a200: hsl(60, 100%, 50%);--yellow-a400: hsl(55, 100%, 50%);--yellow-a700: hsl(50, 100%, 50%);--amber-50: hsl(46, 100%, 94.12%);--amber-100: hsl(45, 100%, 85.1%);--amber-200: hsl(45, 100%, 75.49%);--amber-300: hsl(45, 100%, 65.49%);--amber-400: hsl(45, 100%, 57.84%);--amber-500: hsl(45, 100%, 51.37%);--amber-600: hsl(42, 100%, 50%);--amber-700: hsl(37, 100%, 50%);--amber-800: hsl(33, 100%, 50%);--amber-900: hsl(26, 100%, 50%);--amber-a100: hsl(47, 100%, 74.9%);--amber-a200: hsl(47, 100%, 62.55%);--amber-a400: hsl(46, 100%, 50%);--amber-a700: hsl(40, 100%, 50%);--orange-50: hsl(36, 100%, 93.92%);--orange-100: hsl(35, 100%, 84.9%);--orange-200: hsl(35, 100%, 75.1%);--orange-300: hsl(35, 100%, 65.1%);--orange-400: hsl(35, 100%, 57.45%);--orange-500: hsl(35, 100%, 50%);--orange-600: hsl(33, 100%, 49.22%);--orange-700: hsl(30, 100%, 48.04%);--orange-800: hsl(27, 100%, 46.86%);--orange-900: hsl(21, 100%, 45.1%);--orange-a100: hsl(38, 100%, 75.1%);--orange-a200: hsl(33, 100%, 62.55%);--orange-a400: hsl(34, 100%, 50%);--orange-a700: hsl(25, 100%, 50%);--deep-orange-50: hsl(5, 71.43%, 94.51%);--deep-orange-100: hsl(14, 100%, 86.86%);--deep-orange-200: hsl(14, 100%, 78.43%);--deep-orange-300: hsl(14, 100%, 69.8%);--deep-orange-400: hsl(14, 100%, 63.14%);--deep-orange-500: hsl(14, 100%, 56.67%);--deep-orange-600: hsl(14, 90.68%, 53.73%);--deep-orange-700: hsl(14, 80.39%, 50%);--deep-orange-800: hsl(14, 82.28%, 46.47%);--deep-orange-900: hsl(14, 88.18%, 39.8%);--deep-orange-a100: hsl(14, 100%, 75.1%);--deep-orange-a200: hsl(14, 100%, 62.55%);--deep-orange-a400: hsl(14, 100%, 50%);--deep-orange-a700: hsl(11, 100%, 43.33%);--brown-50: hsl(19, 15.79%, 92.55%);--brown-100: hsl(16, 15.79%, 81.37%);--brown-200: hsl(14, 15.19%, 69.02%);--brown-300: hsl(15, 15.32%, 56.47%);--brown-400: hsl(15, 17.5%, 47.06%);--brown-500: hsl(15, 25.39%, 37.84%);--brown-600: hsl(15, 25.29%, 34.12%);--brown-700: hsl(14, 25.68%, 29.02%);--brown-800: hsl(11, 25.81%, 24.31%);--brown-900: hsl(8, 27.84%, 19.02%);--gray-50: hsl(0, 0%, 98.04%);--gray-100: hsl(0, 0%, 96.08%);--gray-200: hsl(0, 0%, 93.33%);--gray-300: hsl(0, 0%, 87.84%);--gray-400: hsl(0, 0%, 74.12%);--gray-500: hsl(0, 0%, 61.96%);--gray-600: hsl(0, 0%, 45.88%);--gray-700: hsl(0, 0%, 38.04%);--gray-800: hsl(0, 0%, 25.88%);--gray-900: hsl(0, 0%, 12.94%);--blue-gray-50: hsl(204, 15.15%, 93.53%);--blue-gray-100: hsl(198, 15.66%, 83.73%);--blue-gray-200: hsl(199, 15.33%, 73.14%);--blue-gray-300: hsl(199, 15.63%, 62.35%);--blue-gray-400: hsl(200, 15.38%, 54.12%);--blue-gray-500: hsl(199, 18.3%, 46.08%);--blue-gray-600: hsl(198, 18.45%, 40.39%);--blue-gray-700: hsl(199, 18.34%, 33.14%);--blue-gray-800: hsl(199, 17.91%, 26.27%);--blue-gray-900: hsl(199, 19.15%, 18.43%);--blue-gray-1000: hsl(199, 20.93%, 8.43%)}:host{--padding-v: var(--euphony-padding-v, 10px);--padding-h: var(--euphony-padding-h, 15px);--message-info-padding: 4px;--conversation-max-width: var(--euphony-conversation-max-width, none);--border-radius: var(--euphony-border-radius, 0px);--font-color: var(--euphony-font-color, var(--gray-900));--font-color-secondary: var(--euphony-font-color-secondary, var(--gray-500));--font-size: var(--euphony-font-size, 1em);--user-color: var(--euphony-user-color, var(--green-700));--assistant-color: var(--euphony-assistant-color, var(--purple-700));--system-color: var(--euphony-system-color, var(--gray-600));--conv-background-color: var( --euphony-conv-background-color, var(--gray-100) );--convo-background-color-dark: var( --euphony-conv-background-color-dark, color-mix(in lab, var(--gray-900), black 50%) );--translation-color: var(--euphony-translation-color, var(--pink-800));--custom-label-color: var(--euphony-custom-label-color, var(--green-800));--min-width: var(--euphony-min-width, none);--max-width: var(--euphony-max-width, none);--max-height: var(--euphony-max-height, none);--max-message-height: var(--euphony-max-message-height, 100vh);--message-content-border-radius: 0px;--message-content-border: none;--message-content-border-left: 3px solid color-mix(in lab, currentColor, white 20%);--message-content-line-height: 1.3;--message-content-padding-v: 4px;--message-content-padding-h: 6px;--message-content-padding: var(--message-content-padding-v) var(--message-content-padding-h);--multimodal-message-content-padding-h: 8px;--message-label-absolute-timestamp-display: var( --euphony-label-absolute-timestamp-display, none );--message-label-relative-timestamp-display: var( --euphony-label-relative-timestamp-display, block );--theme-white-secondary: white;--theme-gray-100: var(--gray-100);--theme-gray-200: var(--gray-200);--theme-gray-300: var(--gray-300);--theme-gray-400: var(--gray-400);--theme-gray-500: var(--gray-500);--theme-gray-600: var(--gray-600);--theme-gray-700: var(--gray-700);--theme-gray-800: var(--gray-800);--theme-gray-900: var(--gray-900);--theme-gray-text-background-color: color-mix( in lab, var(--gray-300) 100%, white 20% );--theme-red-800: var(--red-800);--theme-pink-800: var(--pink-800);--prism-color-text: #111b27;--prism-color-selection: #3c526d;--prism-color-background: #e3eaf2;--prism-color-comment: #3c526d;--prism-color-tag: #006d6d;--prism-color-boolean-number: #755f00;--prism-color-class-name: #005a8e;--prism-color-string: #116b00;--prism-color-builtin-regex: #af00af;--prism-color-function: #7c00aa;--prism-color-keyword-operator: #a04900;--prism-color-deleted: #c22f2e;--prism-color-toolbar-text: #e3eaf2;--prism-color-toolbar-background: #005a8e;--prism-color-toolbar-hover: #005a8eda;--prism-color-line-highlight: #8da1b92f;--prism-color-line-highlight-alt: #8da1b925;--prism-color-line-highlight-border: #3c526d;--prism-color-line-highlight-shadow: #8da1b9;--prism-color-line-numbers-border: #8da1b97a;--prism-color-line-numbers-background: #d0dae77a;--prism-color-line-numbers-text: #3c526dda;--prism-color-brace-level-1: #755f00;--prism-color-brace-level-2: #af00af;--prism-color-brace-level-3: #005a8e;--prism-color-brace-level-4: #7c00aa;--prism-color-diff-deleted: #c22f2e1f;--prism-color-diff-inserted: #116b001f}:host([is-dark-theme]){--font-color: var(--euphony-font-color, #f7f7f7);--conv-background-color: var( --euphony-conv-background-color, color-mix(in lab, var(--gray-800), black 60%) );--system-color: var(--euphony-system-color, var(--gray-400));--user-color: var(--euphony-user-color, var(--green-a200));--assistant-color: var(--euphony-assistant-color, var(--purple-a200));--translation-color: var(--euphony-translation-color, var(--theme-pink-800));--theme-white-secondary: color-mix(in lab, var(--gray-800), black 20%);--theme-gray-100: color-mix(in lab, var(--gray-900), black 50%);--theme-gray-200: color-mix(in lab, var(--gray-800), black 50%);--theme-gray-300: color-mix(in lab, var(--gray-700), black 50%);--theme-gray-400: color-mix(in lab, var(--gray-600), black 50%);--theme-gray-500: color-mix(in lab, var(--gray-500), black 50%);--theme-gray-600: color-mix(in lab, var(--gray-400), black 20%);--theme-gray-700: color-mix(in lab, var(--gray-300), black 20%);--theme-gray-800: color-mix(in lab, var(--gray-200), black 20%);--theme-gray-900: color-mix(in lab, var(--gray-100), black 20%);--theme-gray-text-background-color: color-mix( in lab, var(--gray-800) 100%, black 15% );--prism-color-text: #e3eaf2;--prism-color-selection: #3c526d;--prism-color-background: #111b27;--prism-color-comment: #8da1b9;--prism-color-tag: #66cccc;--prism-color-boolean-number: #e6d37a;--prism-color-class-name: #6cb8e6;--prism-color-string: #91d076;--prism-color-builtin-regex: #f4adf4;--prism-color-function: #c699e3;--prism-color-keyword-operator: #e9ae7e;--prism-color-deleted: #cd6660;--prism-color-toolbar-text: #111b27;--prism-color-toolbar-background: #6cb8e6;--prism-color-toolbar-hover: #6cb8e6da;--prism-color-line-highlight: #3c526d5f;--prism-color-line-highlight-alt: #3c526d55;--prism-color-line-highlight-border: #8da1b9;--prism-color-line-highlight-shadow: #3c526d;--prism-color-line-numbers-border: #0b121b;--prism-color-line-numbers-background: #0b121b7a;--prism-color-line-numbers-text: #8da1b9da;--prism-color-brace-level-1: #e6d37a;--prism-color-brace-level-2: #f4adf4;--prism-color-brace-level-3: #6cb8e6;--prism-color-brace-level-4: #c699e3;--prism-color-diff-deleted: #cd66601f;--prism-color-diff-inserted: #91d0761f;--theme-red-800: var(--red-200);--theme-pink-800: var(--pink-200);color:var(--font-color);--message-content-border-left: 3px solid color-mix(in lab, currentColor, black 40%)}:host([is-dark-theme]) .conversation{background-color:var(--convo-background-color-dark)}button{all:unset}.conversation{width:100%;min-width:var(--min-width);max-width:var(--max-width);max-height:var(--max-height);overflow-y:auto;box-sizing:border-box;padding:var(--padding-v) var(--padding-h);padding-left:calc(var(--padding-h) - var(--message-info-padding));font-size:var(--font-size);border-radius:var(--border-radius);display:flex;flex-flow:column nowrap;gap:10px;position:relative}.header{display:flex;flex-flow:row nowrap;width:100%;justify-content:space-between;align-items:flex-start;gap:10px;cursor:default;max-width:var(--conversation-max-width)}.header[is-showing-metadata]{max-width:100%}.header .action-group{display:flex;flex-flow:row nowrap;align-items:center;gap:3px;color:var(--theme-gray-600)}.header .action-group .delete-button{color:var(--pink-400)}.header .label-group{display:flex;align-items:baseline;flex-flow:row wrap;flex:1;overflow:hidden;column-gap:10px;row-gap:7px;--sl-spacing-x-small: 0px;--sl-tooltip-font-family: inherit;--sl-tooltip-font-weight: inherit;--sl-tooltip-font-size: var(--font-d3);--sl-z-index-tooltip: 1;--sl-tooltip-background-color: var(--gray-800);--sl-tooltip-padding: 2px 5px 3px;--sl-tooltip-border-radius: 4px;--sl-tooltip-line-height: 1.5}.header .label-group[is-hidden]{visibility:hidden;pointer-events:none}.header .label-group[no-show]{display:none}.header .label-group sl-copy-button{position:relative;font-size:10px;color:var(--theme-gray-600)}.header .label-group sl-copy-button[is-hidden]{display:none}.header .translation-label{font-size:var(--font-d2);color:var(--translation-color);padding:0 5px;border-radius:5px;background-color:color-mix(in lab,var(--translation-color) 8%,transparent 100%)}.header .conversation-label{font-weight:500}.header .conversation-id{font:inherit}.header .custom-label{display:flex;flex-flow:row nowrap;align-items:center;white-space:nowrap;overflow:hidden;gap:4px;background-color:color-mix(in lab,var(--custom-label-color) 7%,white 100%);color:var(--custom-label-color);border-radius:5px;padding:0 5px;font-weight:500}.header .custom-label .label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.header[is-deleted] .label-group{text-decoration:line-through;text-decoration-color:var(--pink-500);text-decoration-thickness:2px}.header[is-deleted] .delete-button,.header[is-deleted] .delete-button:hover{background-color:color-mix(in lab,var(--pink-100) 100%,transparent 20%)}.content{display:flex;flex-flow:row;align-items:flex-start}.content .metadata{white-space:wrap;word-break:break-all;height:0;min-height:100%;overflow-y:auto;position:relative}.content[is-deleted]{opacity:.4}.metadata-header{font-size:var(--font-d3);color:var(--theme-gray-700);padding:1px 5px 1px 0;font-style:italic;white-space:nowrap;width:100%;height:min-content;flex:0;box-sizing:border-box;display:flex;justify-content:space-between}.metadata-header .message-share-button{position:relative;top:1px;width:.9em;height:.9em}.metadata-header .message-share-button[is-activated]{background-color:var(--theme-gray-200)}.metadata-header .message-share-button:disabled{opacity:.35;cursor:default}.metadata-header .message-share-button:disabled:hover,.metadata-header .message-share-button:disabled:active{background-color:transparent}.messages{display:grid;grid-template-columns:auto 1fr;grid-auto-rows:min-content;column-gap:3px;row-gap:1em;max-height:100%;max-width:var(--conversation-max-width);min-width:var(--conversation-min-width);overflow:auto;width:100%;height:100%}.messages *{min-width:0}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}euphony-text-message{display:contents}.message{display:contents;color:var(--system-color)}.message[is-user]{color:var(--user-color)}.message[is-assistant]{color:var(--assistant-color)}.message-info{grid-column:1;padding:var(--message-info-padding);position:relative;display:flex;flex-flow:column nowrap;gap:2px;align-items:flex-end;line-height:1;height:min-content;cursor:default;transition:background-color .3s}.message-info.is-hovered{border-top-left-radius:10%;border-bottom-left-radius:10%;background-color:color-mix(in lab,currentcolor 5%,transparent 100%)}.message-info:focus{outline:none;border:1px solid color-mix(in lab,currentColor,transparent 50%);box-shadow:0 0 2px color-mix(in lab,currentColor,transparent 90%);border-radius:5px;padding:calc(var(--message-info-padding) - 1px)}.message-info .author{display:flex;flex-flow:row nowrap;align-items:flex-end}.message-info .role-icon{position:relative;top:1px}.message-info .label{max-width:68px;font-size:.8em;line-height:1;white-space:normal;text-align:right;display:flex;justify-content:flex-end;flex-flow:row wrap;align-items:center}.message-info .label .arrow{transform:rotate(90deg);position:relative;top:1px;width:.9em;height:.9em}.message-info .label .channel-text{word-break:break-all}.message-info .label .recipient-text,.message-info .label .name-text{font-variant:small-caps;overflow:hidden;text-overflow:ellipsis}.message-info .channel .arrow{transform:rotate(0)}.message-info .label-text{color:var(--font-color-secondary)}.message-info .label-relative-timestamp{display:var(--message-label-relative-timestamp-display)}.message-info .label-absolute-timestamp{display:var(--message-label-absolute-timestamp-display)}.message-info .custom-labels{display:flex;flex-flow:column;gap:3px}.message-info .custom-labels .custom-label{max-width:53px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-align:right;background-color:var(--custom-label-color);color:#fff;border-radius:3px;padding:2px 4px;font-weight:500;font-size:var(--font-d5)}.message-info .custom-labels .custom-label .label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.icon{cursor:pointer;padding:3px;border-radius:5px}.icon:hover{background-color:color-mix(in lab,currentcolor 10%,transparent 100%)}.icon:active{background-color:color-mix(in lab,currentcolor 20%,transparent 60%)}.icon[is-hidden]{display:none}.text-button{height:100%;border-radius:5px;border:1px solid var(--gray-300);color:var(--gray-800);background-color:#fff;line-height:1;display:flex;align-items:center;padding:2px 5px;box-sizing:border-box;position:relative;cursor:pointer;transition:background linear .1s,border linear .1s}.text-button.disabled{cursor:no-drop;border:1px solid var(--gray-300);color:var(--gray-600);background:var(--gray-100)}.text-button:not(.disabled):hover{border:1px solid color-mix(in lab,var(--gray-300),black 5%);background-color:color-mix(in lab,var(--gray-100),white 5%)}.text-button:not(.disabled):active{background-color:color-mix(in lab,var(--gray-100),white 100%);border:1px solid var(--gray-300)}.translate-button[disabled]{pointer-events:none}.translate-button[is-active]{background-color:color-mix(in lab,var(--translation-color) 8%,transparent 100%);color:var(--translation-color)}.translate-button[is-active]:hover{background-color:color-mix(in lab,var(--translation-color) 16%,transparent 100%)}.share-button{width:.9em;height:.9em}.share-button[is-activated]{background-color:var(--theme-gray-200)}:is(.metadata-button,.markdown-button)[is-active]{background-color:var(--theme-gray-200)}.preference-button{width:.9em;height:.9em}@keyframes scaleY{0%,80%,to{box-shadow:0 0;height:.8em}40%{box-shadow:0 -3px;height:1em}}.loader-container{position:relative;height:1em;flex-direction:row;align-items:center;justify-content:center;margin-right:10px;display:none;pointer-events:none;transition:opacity .3s}.loader-container[is-loading]{display:flex}.loader-container .loader-label{color:var(--translation-color);font-size:1em;font-variant-numeric:tabular-nums}.loader-container .loader{--bar-gap: 5px;--bar-height: 5px;--bar-width: 3px;--bar-color: color-mix( in lab, var(--translation-color) 60%, transparent 100% );position:relative;left:var(--bar-gap);top:1.5px;margin-left:5px;color:var(--bar-color);background:var(--bar-color);font-size:11px;animation:scaleY 1s infinite ease-in-out;width:var(--bar-width);height:var(--bar-height);animation-delay:-.16s}.loader-container .loader:before,.loader-container .loader:after{content:"";position:absolute;top:0;left:var(--bar-gap);background:var(--bar-color);width:var(--bar-width);height:var(--bar-height);animation:scaleY 1s infinite ease-in-out}.loader-container .loader:before{left:calc(-1 * var(--bar-gap));animation-delay:-.32s}.message-metadata-overlay{position:absolute;background-color:var(--theme-white-secondary);padding:0 10px 5px;border-radius:5px;box-shadow:0 0 1px #0000001a,0 0 3px #0000001a,0 0 8px #0000001a;max-width:min(310px,calc(100vw - 32px));max-height:400px;overflow-y:auto;overflow-x:hidden;left:0;top:0;z-index:1;display:flex;flex-flow:column;justify-content:flex-start;box-sizing:border-box;resize:both;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.message-metadata-overlay[placement=right]{transform-origin:left center}.message-metadata-overlay[placement=bottom]{transform-origin:top center}.message-metadata-overlay[placement=top]{transform-origin:bottom center}.message-metadata-overlay[is-hidden]{opacity:0;pointer-events:none;transform:scale(.8)}.message-metadata-overlay .metadata-info{display:flex;flex-flow:row wrap;gap:5px;line-height:1.2;margin:3px 0 5px;min-width:0}.message-metadata-overlay .metadata-info .message-metadata-info-tag{font-size:.9em;padding:0 5px;background:var(--theme-gray-100);border-radius:3px;word-break:break-all;max-width:100%;overflow-wrap:anywhere}euphony-json-viewer{font-size:.9285em}.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:2;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.5;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column;overflow-y:auto}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}sl-split-panel{width:100%;--gray-border: var(--theme-gray-300);--divider-width: 20px}sl-split-panel::part(divider){background-color:transparent;border:none;position:relative;z-index:1}.my-divider{height:100%;width:1px;margin:0;position:absolute;left:50%;top:0;background-color:var(--gray-border);transform:translate(-50%);transition:background-color .3s,border-color .3s}.my-divider:after{margin:0;content:"";width:0px;height:0px;border-radius:5px;border:1px solid var(--gray-border);background-color:#fff;position:absolute;left:50%;top:50px;transform:translate(-50%,-50%);display:flex;flex-direction:column;justify-content:center;align-items:center;transition:background-color .3s,border-color .3s}.editable-message{position:relative;display:flex;flex-flow:row;align-items:center;gap:5px}.editable-message *{flex:1 1 auto;height:100%}.editable-message[is-deleted]{text-decoration:line-through;text-decoration-color:var(--pink-500);text-decoration-thickness:2px;--message-text-outline-style: dashed;--message-text-outline-color: var(--theme-gray-300)}.editable-message[is-deleted] .delete-button,.editable-message[is-deleted] .delete-button:hover{background-color:color-mix(in lab,var(--pink-100) 100%,transparent 20%)}.editable-message .action-group{flex:0 0 min-content;min-width:0px;width:min-content;min-height:0px;display:flex;flex-flow:row;gap:3px;justify-content:flex-start;align-items:flex-start;background-color:var(--theme-white-secondary);box-sizing:border-box}.editable-message .action-group .action-item{display:flex;flex-flow:column;gap:1px;height:min-content;justify-content:space-between}.editable-message .action-group .reorder-down-button{transform:rotate(180deg)}.editable-message button{width:1em;height:1em;color:var(--theme-gray-600);cursor:pointer;padding:3px;border-radius:5px}.editable-message button:hover{background-color:color-mix(in lab,currentcolor 10%,transparent 100%)}.editable-message button:active{background-color:color-mix(in lab,currentcolor 20%,transparent 60%)}.editable-message button[is-activated]{background-color:var(--theme-gray-200)}.editable-message button:disabled{opacity:.35;cursor:default}.editable-message button:disabled:hover,.editable-message button:disabled:active{background-color:transparent}.editable-message .delete-button{color:var(--pink-400)}.add-message-type-menu{position:absolute;z-index:2;display:flex;flex-flow:column nowrap;gap:2px;width:max-content;padding:4px;box-sizing:border-box;border-radius:7px;background-color:var(--theme-white-secondary);box-shadow:0 0 1px #0003,0 0 3px #0003,0 0 10px #00000012}.add-message-type-menu-item{all:unset;cursor:pointer;-webkit-user-select:none;user-select:none;border-radius:4px;padding:5px 7px;font-size:var(--font-d4);color:var(--theme-gray-800);line-height:1.2}.add-message-type-menu-item:hover{background-color:var(--theme-gray-200)}.add-message-type-menu-item:active{background-color:var(--theme-gray-300)}euphony-floating-toolbar{transform:scale(1);opacity:1;pointer-events:all;transition:transform 80ms linear,opacity 80ms linear}euphony-floating-toolbar[is-hidden]{opacity:0;pointer-events:none;transform:scale(.8)}euphony-preference-window[is-hidden]{display:none}nightjar-image-window[is-hidden]{display:none}euphony-token-window[is-hidden]{display:none}';var Hh=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,z=(e,t,o,s)=>{for(var i=s>1?void 0:s?Uh(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Hh(t,o,i),i};const Wh=500,qh=6e5,si=8e3;let D=class extends he{constructor(){super(),this.conversationString="",this.conversationData=null,this.sharingURL=null,this.dataFileURL=null,this.overrideSharingJSONString=null,this.shouldRenderMarkdown=!1,this.markdownAllowedTags=null,this.markdownAllowedAttributes=null,this.conversationLabel="Conversation",this.conversation=null,this.isEditable=!1,this.focusModeAuthor=[],this.focusModeRecipient=[],this.focusModeContentType=[],this.focusModeExemptedMessageIndexes=new Set,this.deletedMessageIndexes=new Set,this.insertMessageMenuIndex=null,this.showMessageEditorPopover=!1,this.editorFocusedMessage=null,this.editorFocusedMessageIndex=null,this.isConvoMarkedForDeletion=!1,this.hasMessageSharingURLEventListener=!1,this.hasTranslationEventListener=!1,this.isShowingTranslation=!1,this.isTranslating=!1,this.translationProgress="",this.translationSourceLanguage=null,this.customLabels=[],this.customMessageLabels=[],this.effectiveCustomLabels=[],this.effectiveCustomMessageLabels=[],this.customShareButtons=[],this.isResizingMessageMetadata=!1,this.showShareFloatingToolbar=!1,this.shareFloatingToolbarButtons=[{name:"copy-url",tooltip:"Copy sharable URL",svgIcon:vr},{name:"copy-json",tooltip:"Copy conversation JSON",svgIcon:Eh},{name:"download-json",tooltip:"Download conversation JSON",svgIcon:Lh},{name:"harmony-render",tooltip:"Render conversation using a harmony renderer",svgIcon:Dh}],this.cleanupShareFloatingToolbarAutoUpdate=()=>{},this.shareFloatingToolbarRepositionAdded=!1,this.cleanupMessageEditorPopoverAutoUpdate=()=>{},this.messageEditorPopoverRepositionAdded=!1,this.cleanupInsertMessageMenuAutoUpdate=()=>{},this.insertMessageMenuRepositionAdded=!1,this.hasInsertMessageMenuOutsideClickListener=!1,this.hasMessageEditorPopoverOutsideClickListener=!1,this.isShowingMetadata=!1,this.mouseoverMessage=null,this.mouseoverMessageIndex=null,this.isShowingMessageMetadata=!1,this.conversationMaxWidth=null,this.conversationMinWidth=null,this.disableMarkdownButton=!1,this.disableTranslationButton=!1,this.disableShareButton=!1,this.disableMetadataButton=!1,this.disableEditingModeSaveButton=!1,this.disableConversationIDCopyButton=!1,this.isShowingPreferenceWindow=!1,this.euphonyStyleConfig={},this.disableMessageMetadata=!1,this.disableConversationName=!1,this.disablePreferenceButton=!1,this.disableTokenWindow=!1,this.theme="light",this.isDarkTheme=!1,this.toolbarTooltipDebouncer=null,this.shareFloatingToolbarDebouncer=null,this.shareFloatingToolbarDisappearDebouncer=null,this.metadataDisappearDebouncer=null,this.metadataAppearDebouncer=null,this.getMessageByIndex=e=>this.shadowRoot?.querySelector(`#message-${e}`),this.insertMessageMenuWindowPointerDown=e=>{if(this.insertMessageMenuIndex===null)return;const t=this.shadowRoot?.querySelector(".add-message-type-menu"),o=this.shadowRoot?.querySelector(`.add-button[data-message-index="${this.insertMessageMenuIndex}"]`),s=e.composedPath();t&&s.includes(t)||o&&s.includes(o)||(this.closeInsertMessageMenu(),this.requestUpdate())},this.messageEditorPopoverWindowPointerDown=e=>{if(!this.showMessageEditorPopover||this.editorFocusedMessageIndex===null)return;const t=this.shadowRoot?.querySelector("euphony-message-editor-popover"),o=this.shadowRoot?.querySelector(`.edit-button[data-message-index="${this.editorFocusedMessageIndex}"]`),s=e.composedPath();t&&s.includes(t)||o&&s.includes(o)||(this.closeMessageEditorPopover(),this.requestUpdate())},this.metadataMouseDown=()=>{if(!this.messageMetadataOverlay){console.error("Message metadata overlay not initialized.");return}const e=this.messageMetadataOverlay.getBoundingClientRect();this.messageMetadataOverlay.style.width=`${e.width}px`,this.messageMetadataOverlay.style.height=`${e.height}px`,this.messageMetadataOverlay.style.maxHeight="unset",this.messageMetadataOverlay.style.maxWidth="unset",this.isResizingMessageMetadata=!0;const t=()=>{this.isResizingMessageMetadata=!1,window.removeEventListener("mouseup",t)};window.addEventListener("mouseup",t)},this.baseTime=null}updateEffectiveCustomLabels(){const e=this.conversation?.metadata?Vc(this.conversation):{customLabels:[],customMessageLabels:[]};this.effectiveCustomLabels=[...e.customLabels,...this.customLabels],this.effectiveCustomMessageLabels=[...e.customMessageLabels,...this.customMessageLabels]}addEventListener(e,t,o){e==="translation-requested"&&(this.hasTranslationEventListener=!0),e==="fetch-message-sharing-url"&&(this.hasMessageSharingURLEventListener=!0),super.addEventListener(e,t,o)}firstUpdated(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{window.matchMedia("(prefers-color-scheme: dark)").matches&&this.theme==="auto"?this.isDarkTheme=!0:this.isDarkTheme=this.theme==="dark"})}willUpdate(e){if(e.has("conversationString")&&this.conversationString!==""&&(this.conversation=xi(this.conversationString),this.updateEffectiveCustomLabels(),this.resetComponent(),this.bootstrapEmptyConversationForEditorMode()),e.has("conversationData")&&this.conversationData&&(this.conversation=this.conversationData,this.updateEffectiveCustomLabels(),this.resetComponent(),this.bootstrapEmptyConversationForEditorMode()),(e.has("customLabels")||e.has("customMessageLabels"))&&this.updateEffectiveCustomLabels(),e.has("isEditable")&&this.isEditable&&this.bootstrapEmptyConversationForEditorMode(),e.has("theme")&&(window.matchMedia("(prefers-color-scheme: dark)").matches&&this.theme==="auto"?this.isDarkTheme=!0:this.isDarkTheme=this.theme==="dark"),e.has("customShareButtons")&&this.customShareButtons.length>0)for(const[t,o]of this.customShareButtons.entries())this.shareFloatingToolbarButtons.filter(s=>s.tooltip==o[0]).length>0||this.shareFloatingToolbarButtons.push({name:`custom-button-${t}`,tooltip:o[0],svgIcon:o[2]===""?yr:o[2]})}updated(e){if(e.has("isShowingMetadata")||e.has("conversation")){const t=this.shadowRoot?.querySelector(".messages"),o=this.shadowRoot?.querySelector(".metadata euphony-json-viewer");this.isShowingMetadata?t&&o&&this.updateComplete.then(()=>{const s=t.getBoundingClientRect(),i=o.getBoundingClientRect();if(s.height<i.height){const n=Math.min(Wh,i.height+22);t.style.minHeight=`${n}px`}else t.style.minHeight="auto"},()=>{}):t&&(t.style.minHeight="auto")}if(!this.shareFloatingToolbarRepositionAdded){const t=this.shadowRoot?.querySelector(".share-button"),o=this.shadowRoot?.querySelector(".floating-toolbar-share");t&&o&&(this.cleanupShareFloatingToolbarAutoUpdate=es(t,o,()=>{this.updateShareFloatingToolbarPosition(t,o)}),this.shareFloatingToolbarRepositionAdded=!0)}if(this.showMessageEditorPopover&&this.editorFocusedMessageIndex!==null){const t=this.shadowRoot?.querySelector(`.edit-button[data-message-index="${this.editorFocusedMessageIndex}"]`),o=this.shadowRoot?.querySelector("euphony-message-editor-popover");t&&o&&((!this.messageEditorPopoverRepositionAdded||e.has("editorFocusedMessageIndex")||e.has("showMessageEditorPopover"))&&(this.cleanupMessageEditorPopoverAutoUpdate(),this.cleanupMessageEditorPopoverAutoUpdate=es(t,o,()=>{this.updateMessageEditorPopoverPosition(t,o)}),this.messageEditorPopoverRepositionAdded=!0),this.updateMessageEditorPopoverPosition(t,o))}else this.messageEditorPopoverRepositionAdded&&(this.cleanupMessageEditorPopoverAutoUpdate(),this.messageEditorPopoverRepositionAdded=!1);if(this.insertMessageMenuIndex!==null){const t=this.shadowRoot?.querySelector(`.add-button[data-message-index="${this.insertMessageMenuIndex}"]`),o=this.shadowRoot?.querySelector(".add-message-type-menu");t&&o&&((!this.insertMessageMenuRepositionAdded||e.has("insertMessageMenuIndex"))&&(this.cleanupInsertMessageMenuAutoUpdate(),this.cleanupInsertMessageMenuAutoUpdate=es(t,o,()=>{this.updateInsertMessageMenuPosition(t,o)}),this.insertMessageMenuRepositionAdded=!0),this.updateInsertMessageMenuPosition(t,o))}else this.insertMessageMenuRepositionAdded&&(this.cleanupInsertMessageMenuAutoUpdate(),this.insertMessageMenuRepositionAdded=!1);if(e.has("insertMessageMenuIndex")&&(this.insertMessageMenuIndex!==null&&!this.hasInsertMessageMenuOutsideClickListener?(window.addEventListener("pointerdown",this.insertMessageMenuWindowPointerDown),this.hasInsertMessageMenuOutsideClickListener=!0):this.insertMessageMenuIndex===null&&this.hasInsertMessageMenuOutsideClickListener&&(window.removeEventListener("pointerdown",this.insertMessageMenuWindowPointerDown),this.hasInsertMessageMenuOutsideClickListener=!1)),e.has("showMessageEditorPopover")||e.has("editorFocusedMessageIndex")){const t=this.showMessageEditorPopover&&this.editorFocusedMessageIndex!==null;t&&!this.hasMessageEditorPopoverOutsideClickListener?(window.addEventListener("pointerdown",this.messageEditorPopoverWindowPointerDown),this.hasMessageEditorPopoverOutsideClickListener=!0):!t&&this.hasMessageEditorPopoverOutsideClickListener&&(window.removeEventListener("pointerdown",this.messageEditorPopoverWindowPointerDown),this.hasMessageEditorPopoverOutsideClickListener=!1)}}async initData(){}refreshBaseTime(){if(this.baseTime=null,!!this.conversation){if(this.conversation.create_time){this.baseTime=this.conversation.create_time;return}for(const e of this.conversation.messages)if(e.create_time){this.baseTime=e.create_time;return}}}resetComponent(){this.refreshBaseTime(),this.isShowingTranslation=!1,this.isTranslating=!1,this.translationProgress="",this.translationSourceLanguage=null,this.deletedMessageIndexes=new Set,this.focusModeExemptedMessageIndexes=new Set,this.closeInsertMessageMenu(),this.closeMessageEditorPopover(),this.mouseoverMessage=null,this.mouseoverMessageIndex=null,this.isShowingMessageMetadata=!1,this.isResizingMessageMetadata=!1,this.metadataDisappearDebouncer!==null&&(clearTimeout(this.metadataDisappearDebouncer),this.metadataDisappearDebouncer=null),this.metadataAppearDebouncer!==null&&(clearTimeout(this.metadataAppearDebouncer),this.metadataAppearDebouncer=null),this.messageEditorPopoverRepositionAdded&&(this.cleanupMessageEditorPopoverAutoUpdate(),this.messageEditorPopoverRepositionAdded=!1),this.insertMessageMenuRepositionAdded&&(this.cleanupInsertMessageMenuAutoUpdate(),this.insertMessageMenuRepositionAdded=!1)}getEditedConversationData(){if(this.conversation===null)throw new Error("Conversation is not set");if(this.isConvoMarkedForDeletion)return null;const e=structuredClone(this.conversation);return e.messages=e.messages.filter((t,o)=>!this.deletedMessageIndexes.has(o)),e}serializeConversation(e=null){const t=this.getEditedConversationData();if(t===null)return"null";let o="";return e?o=JSON.stringify(t,null,e):o=JSON.stringify(t),o}updateShareFloatingToolbarPosition(e,t){Js(e,t,"top",3)}updateInsertMessageMenuPosition(e,t){Js(e,t,"right",6)}updateMessageEditorPopoverPosition(e,t){Js(e,t,"right",10)}bootstrapEmptyConversationForEditorMode(){!this.isEditable||this.conversation===null||this.conversation.messages.length>0||(this.conversation.messages.push({role:we.User,content:[{text:""}]}),this.deletedMessageIndexes.add(0))}async translationButtonClicked(){if(this.conversation===null)return;const e=new CustomEvent("translation-button-clicked",{bubbles:!0,composed:!0});if(this.dispatchEvent(e),this.isShowingTranslation){this.isShowingTranslation=!1;return}else if(this.conversation.translatedMessages!==void 0){this.isShowingTranslation=!0;return}this.isTranslating=!0;const t=structuredClone(this.conversation.messages),o=async(c,l)=>{const u=[],f=kt(c.content),k=Qt(c.content);switch(f){case"text":{const C=k;u.push({text:C.text,index:0,type:"string"});break}case"developer":{const C=k;if(C.instructions){const E=[C.instructions];if(E.length>0)for(const[$,b]of E.entries())u.push({text:b,index:$,type:"string"})}break}default:throw new Error(`Unsupported message content type for message: ${f}`)}const y=[];for(const C of u){const{promise:E,resolve:$,reject:b}=Promise.withResolvers(),m=E.then(A=>({...A,partIndex:C.index,partContentType:C.type})).catch(A=>(console.error("Translation failed for a conversation part, falling back to original text.",A),{translation:C.text,is_translated:!1,language:"Failed",has_command:!1,partIndex:C.index,partContentType:C.type})),x=window.setTimeout(()=>{b("Timeout")},qh),T=A=>{clearTimeout(x),$(A)},w=A=>{clearTimeout(x),b(A)},S=new CustomEvent("translation-requested",{bubbles:!0,composed:!0,detail:{text:C.text,resolve:T,reject:w}});this.dispatchEvent(S),y.push(m)}const v=await Promise.all(y);if(v.some(C=>C.is_translated)){const C=t[l],E=kt(C.content);C.isTranslated=!0;for(const[$,b]of v.entries()){const m=Qt(C.content);if(b.is_translated)switch(E){case"text":{"text"in m?m.text=b.translation:"content"in m&&(m.content=b.translation);break}case"developer":{const x=m;x.instructions&&(x.instructions=b.translation);break}default:throw new Error(`Unsupported message content type for translated message: ${E}`)}}}return v},s=[];for(const[c,l]of this.conversation.messages.entries()){const u=kt(l.content);if(u==="text"||u==="developer"){const f=[l.content[0]],k={...l,content:f};s.push(o(k,c))}}let i=0;const n=s.length,r=await Promise.all(s.map(c=>c.then(l=>(i++,this.translationProgress=n>0?`(${Math.round(i/n*100)}%)`:"",l))));let a=!1;for(const c of r){for(const l of c)if(l.is_translated){a=!0,this.translationSourceLanguage=l.language;break}if(a)break}if(this.isTranslating=!1,this.translationProgress="",a){this.conversation.translatedMessages=t,this.isShowingTranslation=!0;const c=new CustomEvent("translation-completed",{bubbles:!0,composed:!0,detail:{translatedMessages:t}});this.dispatchEvent(c)}else this.conversation.translatedMessages=void 0}toolButtonMouseEnter(e,t,o){if(e.stopPropagation(),e.preventDefault(),!this.popperTooltip){console.error("Popper tooltip not initialized.");return}const s=e.currentTarget;this.toolbarTooltipDebouncer&&clearTimeout(this.toolbarTooltipDebouncer),this.toolbarTooltipDebouncer=window.setTimeout(()=>{const i=this.popperTooltip.querySelector(".popper-label");let n="Button";switch(t){case"markdown":{n="Markdown rendering";break}case"translate":{n="Translate the conversation";break}case"share":{n="Copy a sharable URL";break}case"metadata":{n="Show conversation metadata";break}case"delete":{n="Delete this message";break}case"add":{n="Insert a new message";break}case"edit":{n="Focus editable fields";break}case"reorder-up":{n="Move message up";break}case"reorder-down":{n="Move message down";break}case"preference":{n="Customize display";break}case"custom-label":{if(o===void 0){console.error("maybeTooltipText is not set");return}n=o;break}case"message-share":{n="Copy a sharable URL for this message";break}}i.textContent=n,Ct(this.popperTooltip,s,"top",!0,7),this.popperTooltip.classList.remove("hidden")},500)}toolButtonMouseLeave(e=!0){if(!this.popperTooltip){console.error("popperTooltip are not initialized yet.");return}this.toolbarTooltipDebouncer&&(clearTimeout(this.toolbarTooltipDebouncer),this.toolbarTooltipDebouncer=null),e?this.popperTooltip.classList.add("hidden"):(this.popperTooltip.classList.add("no-transition"),this.popperTooltip.classList.add("hidden"),setTimeout(()=>{this.popperTooltip.classList.remove("no-transition")},150))}shareButtonMouseEnter(){this.shareFloatingToolbarDebouncer&&(clearTimeout(this.shareFloatingToolbarDebouncer),this.shareFloatingToolbarDebouncer=null),this.shareFloatingToolbarDisappearDebouncer&&(clearTimeout(this.shareFloatingToolbarDisappearDebouncer),this.shareFloatingToolbarDisappearDebouncer=null),this.shareFloatingToolbarDebouncer=window.setTimeout(()=>{this.showShareFloatingToolbar=!0},500)}shareButtonMouseLeave(){this.shareFloatingToolbarDebouncer&&(clearTimeout(this.shareFloatingToolbarDebouncer),this.shareFloatingToolbarDebouncer=null),this.shareFloatingToolbarDisappearDebouncer=window.setTimeout(()=>{this.showShareFloatingToolbar=!1},600)}async shareFloatingToolbarButtonClicked(e){if(!this.shareFloatingToolbar){console.error("Share floating toolbar not initialized");return}const t=e.detail;switch(t){case"copy-url":{if(!this.sharingURL){console.error("Sharing URL is not set");return}await navigator.clipboard.writeText(this.sharingURL),this.shareFloatingToolbar.updateCurrentTooltip("Copied");break}case"copy-json":{let o=this.serializeConversation(2);this.overrideSharingJSONString&&(o=this.overrideSharingJSONString),await navigator.clipboard.writeText(o),this.shareFloatingToolbar.updateCurrentTooltip("Copied");break}case"download-json":{let o=this.serializeConversation(2);this.overrideSharingJSONString&&(o=this.overrideSharingJSONString),Br(o,null,"euphony-conversation.json"),this.shareFloatingToolbar.updateCurrentTooltip("Downloaded");break}case"harmony-render":{if(!this.tokenWindowComponent){console.error("Token window component not initialized");return}const o=this.serializeConversation();if(!this.disableTokenWindow)this.tokenWindowComponent.show(o);else{const s=new CustomEvent("harmony-render-button-clicked",{bubbles:!0,composed:!0,detail:o});this.dispatchEvent(s)}break}default:{if(t.includes("custom-button")){const o=parseInt(t.split("-")[2]);if(o>=this.customShareButtons.length){console.error("Custom button index is out of range:",o);return}const s=this.customShareButtons[o][1];s&&window.open(s,"_blank")}else console.error("Unsupported button name:",t);break}}}metadataButtonClicked(){this.toolButtonMouseLeave(!1);const e=new CustomEvent("conversation-metadata-button-toggled",{bubbles:!0,composed:!0,detail:!this.isShowingMetadata});this.isShowingMetadata=!this.isShowingMetadata,this.dispatchEvent(e)}markdownButtonClicked(){const e=new CustomEvent("markdown-button-toggled",{bubbles:!0,composed:!0,detail:!this.shouldRenderMarkdown});this.shouldRenderMarkdown=!this.shouldRenderMarkdown,this.dispatchEvent(e)}editingSaveButtonClicked(){const e=this.serializeConversation(),t=new CustomEvent("editing-save-button-clicked",{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(t)}swapDeletedMessageIndexes(e,t){const o=new Set(this.deletedMessageIndexes),s=o.has(e),i=o.has(t);s&&o.delete(e),i&&o.delete(t),s&&o.add(t),i&&o.add(e),this.deletedMessageIndexes=o}shiftDeletedIndexesAfterInsert(e){const t=new Set;for(const o of this.deletedMessageIndexes)t.add(o>=e?o+1:o);this.deletedMessageIndexes=t}reorderUpButtonClicked(e){if(!this.conversation||e<=0)return;const t=this.conversation.messages;[t[e-1],t[e]]=[t[e],t[e-1]],this.swapDeletedMessageIndexes(e-1,e),this.closeMessageEditorPopover(),this.requestUpdate()}reorderDownButtonClicked(e){if(!this.conversation||e>=this.conversation.messages.length-1)return;const t=this.conversation.messages;[t[e],t[e+1]]=[t[e+1],t[e]],this.swapDeletedMessageIndexes(e,e+1),this.closeMessageEditorPopover(),this.requestUpdate()}createEmptyMessageForContentType(e,t){if(t==="system"){const o=new Date().toISOString().slice(0,10);return{role:we.System,content:[{model_identity:"You are ChatGPT, a large language model trained by OpenAI.",conversation_start_date:o,knowledge_cutoff:"2024-06",channel_config:{valid_channels:["analysis","commentary","final"],channel_required:!0}}]}}return t==="developer"?{role:we.Developer,content:[{instructions:""}]}:{role:e?.role??we.User,content:[{text:""}]}}async insertMessageAfterIndex(e,t){if(!this.conversation)return;const o=this.conversation.messages[e],s=this.createEmptyMessageForContentType(o,t),i=e+1;this.conversation.messages.splice(i,0,s),this.shiftDeletedIndexesAfterInsert(i),this.closeMessageEditorPopover(),this.insertMessageMenuIndex=null,this.requestUpdate(),await this.updateComplete,this.focusEditableFieldsForMessage(i)}closeInsertMessageMenu(){this.insertMessageMenuIndex=null}messageEditorAddMessageButtonClicked(e){if(this.insertMessageMenuIndex===e){this.closeInsertMessageMenu();return}this.closeMessageEditorPopover(),this.insertMessageMenuIndex=e,this.requestUpdate()}closeMessageEditorPopover(){this.showMessageEditorPopover=!1,this.editorFocusedMessage=null,this.editorFocusedMessageIndex=null}messageEditorEditButtonClicked(e){if(this.conversation){if(this.showMessageEditorPopover&&this.editorFocusedMessageIndex===e){this.closeMessageEditorPopover(),this.requestUpdate();return}this.closeInsertMessageMenu(),this.editorFocusedMessageIndex=e,this.editorFocusedMessage=this.conversation.messages[e]??null,this.showMessageEditorPopover=!!this.editorFocusedMessage,this.messageEditorPopoverRepositionAdded=!1,this.requestUpdate()}}messageEditorPopoverSaveButtonClicked(e){if(!this.editorFocusedMessage)return;const t=e.detail;this.editorFocusedMessage.role=t.role,this.editorFocusedMessage.name=t.name,this.editorFocusedMessage.recipient=t.recipient,this.editorFocusedMessage.channel=t.channel,this.closeMessageEditorPopover(),this.requestUpdate()}messageEditorPopoverCancelButtonClicked(){this.closeMessageEditorPopover(),this.requestUpdate()}focusEditableFieldsForMessage(e){const t=this.shadowRoot?.querySelector(`#message-${e}`);if(!t)return;const o=t.querySelector('[contenteditable="true"]');if(!o)return;o.focus();const s=window.getSelection();if(!s)return;const i=document.createRange();i.selectNodeContents(o),i.collapse(!1),s.removeAllRanges(),s.addRange(i)}preferenceButtonClicked(){this.isShowingPreferenceWindow=!this.isShowingPreferenceWindow}messageInfoMouseEnter(e,t,o){if(this.disableMessageMetadata)return;if(!this.messageMetadataOverlay){console.error("Message metadata overlay not initialized.");return}this.metadataDisappearDebouncer&&(clearTimeout(this.metadataDisappearDebouncer),this.metadataDisappearDebouncer=null),this.metadataAppearDebouncer&&(clearTimeout(this.metadataAppearDebouncer),this.metadataAppearDebouncer=null);const s=e.currentTarget;s.classList.add("is-hovered");const i=this.isShowingMessageMetadata?0:300;this.messageMetadataOverlay.scrollTo({top:0,behavior:"instant"}),this.metadataAppearDebouncer=window.setTimeout(()=>{this.mouseoverMessage=t,this.mouseoverMessageIndex=o,Ct(this.messageMetadataOverlay,s,"left",!0,7),this.isShowingMessageMetadata=!0},i)}messageInfoMouseLeave(){if(!this.messageMetadataOverlay){console.error("Message metadata overlay not initialized.");return}this.metadataAppearDebouncer&&(clearTimeout(this.metadataAppearDebouncer),this.metadataAppearDebouncer=null),this.shadowRoot.querySelector(".message-info.is-hovered").classList.remove("is-hovered"),this.metadataDisappearDebouncer=window.setTimeout(()=>{this.isShowingMessageMetadata=!1},500)}metadataOverlayMouseEnter(){if(!this.messageMetadataOverlay){console.error("Message metadata overlay not initialized.");return}this.metadataDisappearDebouncer&&(clearTimeout(this.metadataDisappearDebouncer),this.metadataDisappearDebouncer=null),this.shadowRoot.querySelector(`#message-info-${this.mouseoverMessageIndex}`).classList.add("is-hovered"),this.isShowingMessageMetadata=!0}metadataOverlayMouseLeave(){if(!this.messageMetadataOverlay){console.error("Message metadata overlay not initialized.");return}if(this.isResizingMessageMetadata)return;this.shadowRoot.querySelector(".message-info.is-hovered").classList.remove("is-hovered"),this.metadataDisappearDebouncer=window.setTimeout(()=>{this.isShowingMessageMetadata=!1},500)}metadataOverlayShareButtonClicked(e,t){if(!this.sharingURL){console.error("Sharing URL is not set");return}const o=e.currentTarget,{promise:s,resolve:i,reject:n}=jc(1e3);s.then(async a=>{await navigator.clipboard.writeText(a);const c=this.popperTooltip.querySelector(".popper-label");c.textContent="Copied",Ct(this.popperTooltip,o,"top",!0,7)}).catch(()=>{});const r=new CustomEvent("fetch-message-sharing-url",{bubbles:!0,composed:!0,detail:{messageIndex:t,resolve:i,reject:n}});this.dispatchEvent(r)}loadKatexScript(){if(!("katex"in window)){const e=document.createElement("script");if(e.src="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.js",e.defer=!0,e.integrity="sha384-Rma6DA2IPUwhNxmrB/7S3Tno0YY7sFu9WSYMCuulLhIqYSGZ2gKCJWIqhBWqMQfh",e.crossOrigin="anonymous",!document.querySelector('link[href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"]')){const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",t.integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib",t.crossOrigin="anonymous",document.head.appendChild(t)}return e}}preferenceWindowMaxMessageHeightChanged(e){const t=e.detail;this.euphonyStyleConfig["--max-message-height"]=t,this.requestUpdate()}preferenceWindowFocusModeSettingsChanged(e){const t=e.detail;this.focusModeAuthor=[...t.author],this.focusModeRecipient=[...t.recipient],this.focusModeContentType=[...t.contentType]}preferenceWindowMessageLabelChanged(e){e.detail.absoluteTimestamp?(this.euphonyStyleConfig["--message-label-absolute-timestamp-display"]="block",this.euphonyStyleConfig["--message-label-relative-timestamp-display"]="none"):(delete this.euphonyStyleConfig["--message-label-absolute-timestamp-display"],delete this.euphonyStyleConfig["--message-label-relative-timestamp-display"]),this.requestUpdate()}async allChildrenUpdateComplete(){await this.updateComplete;const e=["euphony-message-text"],t=[];for(const o of e){const s=this.shadowRoot?.querySelectorAll(o);s&&s.forEach(i=>{t.push(i.updateComplete)})}await Promise.all(t)}relativeTimestampFormatter(e){if(this.baseTime===null)return console.error("Base time is not set"),"";const t=Math.max(0,Math.floor(e)-this.baseTime);let o=t;const s=[],i=[["d",3600*24],["h",3600],["m",60],["s",1]];for(const[n,r]of i){if(t<r&&r>1)continue;const a=Math.floor(o/r);o=o%r,s.push(`${a}${n}`)}return s.join(" ")}absoluteTimestampFormatter(e){const t=new Date(e*1e3),o=`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`,s=`${t.getHours().toString().padStart(2,"0")}:${t.getMinutes().toString().padStart(2,"0")}:${t.getSeconds().toString().padStart(2,"0")}`;return`${o} ${s}`}getAuthorIcon(e){let t=d`<span class="role-icon"
      >${F(wr)}</span
    >`;switch(e){case we.Assistant:{t=d`<span class="role-icon svg-icon"
          >${F(_h)}</span
        >`;break}case we.User:{t=d`<span class="role-icon svg-icon"
          >${F(wr)}</span
        >`;break}case we.System:{t=d`<span class="role-icon svg-icon"
          >${F(wi)}</span
        >`;break}case we.Tool:{t=d`<span class="role-icon svg-icon"
          >${F(Fh)}</span
        >`;break}case we.Developer:{t=d`<span class="role-icon svg-icon"
          >${F(ba)}</span
        >`;break}default:console.warn("Unsupported role:",e)}return t}isMessageHiddenByFocusMode(e,t){if(this.focusModeExemptedMessageIndexes.has(t))return!1;if(this.focusModeAuthor.length>0&&!this.focusModeAuthor.includes(e.role)||this.focusModeRecipient.length>0&&!this.focusModeRecipient.includes(e.recipient??""))return!0;if(this.focusModeContentType.length>0){const o=ni(e.content);if(o===null||!this.focusModeContentType.includes(o))return!0}return!1}getMessageContentTemplate(e,t){if(this.conversation===null)throw new Error("Conversation is not set");const o=`message-${t}`,i=this.isMessageHiddenByFocusMode(e,t)?"display: none;":"";let n=d``;const r=ni(e.content);switch(r){case"text":{n=d`
          <euphony-message-text
            .message=${e}
            id=${o}
            style=${i}
            ?shouldRenderMarkdown=${this.shouldRenderMarkdown}
            .markdownAllowedTags=${this.markdownAllowedTags}
            .markdownAllowedAttributes=${this.markdownAllowedAttributes}
            ?isEditable=${this.isEditable}
            ?isTranslation=${this.isShowingTranslation&&this.conversation.translatedMessages&&e.isTranslated}
            @message-text-changed=${a=>{const c=this.conversation.messages[t];if(typeof c.content=="string"){c.content=a.detail;return}const l=c.content[0];if(!l){c.content=[{text:a.detail}];return}"text"in l?l.text=a.detail:l.content=a.detail}}
          ></euphony-message-text>
        `;break}case"code":{n=d`
          <euphony-message-code
            .message=${e}
            id=${o}
            style=${i}
          ></euphony-message-code>
        `;break}case"system":{n=d`
          <euphony-message-system-content
            .message=${e}
            id=${o}
            style=${i}
            ?shouldRenderMarkdown=${this.shouldRenderMarkdown}
            .markdownAllowedTags=${this.markdownAllowedTags}
            .markdownAllowedAttributes=${this.markdownAllowedAttributes}
            ?isEditable=${this.isEditable}
            ?isTranslation=${this.isShowingTranslation&&this.conversation.translatedMessages&&e.isTranslated}
            .dataFileURL=${this.dataFileURL}
            @message-system-content-changed=${a=>{const c=this.conversation.messages[t].content[0],{location:l,newContent:u}=a.detail;switch(l){case"model_identity":c.model_identity=u;break;case"conversation_start_date":c.conversation_start_date=u;break;case"knowledge_cutoff":c.knowledge_cutoff=u;break;case"valid_channels":c.channel_config&&(c.channel_config.valid_channels=u.split(",").map(f=>f.trim()).filter(Boolean));break;case"channel_required":c.channel_config&&(c.channel_config.channel_required=u.trim().toLowerCase()==="true");break;default:console.warn("Unsupported system edit location:",l)}}}
          ></euphony-message-system-content>
        `;break}case"developer":{n=d`
          <euphony-message-developer-content
            .message=${e}
            id=${o}
            style=${i}
            ?shouldRenderMarkdown=${this.shouldRenderMarkdown}
            .markdownAllowedTags=${this.markdownAllowedTags}
            .markdownAllowedAttributes=${this.markdownAllowedAttributes}
            ?isEditable=${this.isEditable}
            @message-developer-content-changed=${a=>{const c=this.conversation.messages[t].content[0],{location:l,index:u,newContent:f}=a.detail;switch(l){case"instruction":c.instructions=f;break;case"tool_namespace_name":c.tools&&typeof u=="string"&&(c.tools[u].name=f);break;case"tool_namespace_description":c.tools&&typeof u=="string"&&(c.tools[u].description=f);break;default:console.warn("Unsupported developer edit location:",l)}}}
          ></euphony-message-developer-content>
        `;break}default:{console.error("Unsupported message content type:",r),n=d`
          <euphony-message-unsupported
            .message=${e}
            id=${o}
            style=${i}
          ></euphony-message-unsupported>
        `;break}}return this.isEditable&&(n=d`<div
        class="editable-message"
        style=${i}
        ?is-deleted=${this.deletedMessageIndexes.has(t)}
      >
        ${n}
        <div class="action-group">
          <div class="action-item">
            <button
              class="svg-icon reorder-up-button"
              ?disabled=${t===0}
              @mouseenter=${a=>{this.toolButtonMouseEnter(a,"reorder-up")}}
              @mouseleave=${()=>{this.toolButtonMouseLeave()}}
              @click=${()=>{this.reorderUpButtonClicked(t)}}
            >
              ${F(br)}
            </button>

            <button
              class="svg-icon add-button"
              data-message-index=${t}
              ?is-activated=${this.insertMessageMenuIndex===t}
              @mouseenter=${a=>{this.toolButtonMouseEnter(a,"add")}}
              @mouseleave=${()=>{this.toolButtonMouseLeave()}}
              @click=${()=>{this.toolButtonMouseLeave(),this.messageEditorAddMessageButtonClicked(t)}}
            >
              ${F(Ih)}
            </button>

            <button
              class="svg-icon reorder-down-button"
              ?disabled=${t===this.conversation.messages.length-1}
              @mouseenter=${a=>{this.toolButtonMouseEnter(a,"reorder-down")}}
              @mouseleave=${()=>{this.toolButtonMouseLeave()}}
              @click=${()=>{this.reorderDownButtonClicked(t)}}
            >
              ${F(br)}
            </button>
          </div>

          <div class="action-item">
            <button
              class="svg-icon delete-button action-item"
              @mouseenter=${a=>{this.toolButtonMouseEnter(a,"delete")}}
              @mouseleave=${()=>{this.toolButtonMouseLeave()}}
              @click=${()=>{this.deletedMessageIndexes.has(t)?this.deletedMessageIndexes.delete(t):this.deletedMessageIndexes.add(t),this.requestUpdate()}}
            >
              ${F(Bh)}
            </button>

            <button
              class="svg-icon edit-button action-item"
              data-message-index=${t}
              ?is-activated=${this.showMessageEditorPopover&&this.editorFocusedMessageIndex===t}
              @mouseenter=${a=>{this.toolButtonMouseEnter(a,"edit")}}
              @mouseleave=${()=>{this.toolButtonMouseLeave()}}
              @click=${()=>{this.toolButtonMouseLeave(),this.messageEditorEditButtonClicked(t)}}
            >
              ${F(zh)}
            </button>
          </div>
        </div>
      </div>`),n}renderTextWithWordBreaks(e){return e.split(/([_.-])/g).map(t=>t==="_"||t==="-"||t==="."?d`${t}<wbr>`:d`${t}`)}getMessageMetadataInfo(e){const t=s=>{const i=new Date(s*1e3),n={month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0};return i.toLocaleString("en-US",n)};let o=d``;return e.name&&(o=d`${o}
        <span class="message-metadata-info-tag"
          >author: ${e.name}</span
        > `),e.create_time&&(o=d`${o}
        <span class="message-metadata-info-tag"
          >created: ${t(e.create_time)}</span
        > `),e.recipient&&(o=d`${o}
        <span class="message-metadata-info-tag"
          >recipient: ${e.recipient}</span
        > `),e.channel&&(o=d`${o}
        <span class="message-metadata-info-tag"
          >channel: ${e.channel}</span
        > `),o}render(){let e=d``,t=d``,o=d``;if(this.conversation){let $=d``;this.isShowingTranslation&&this.translationSourceLanguage&&($=d`<div class="translation-label">
          Translated from ${this.translationSourceLanguage}
        </div>`);const b=d`
        <button
          class="icon svg-icon share-button"
          ?is-hidden=${this.disableShareButton}
          ?is-activated=${this.showShareFloatingToolbar}
          @mouseenter=${()=>{this.shareButtonMouseEnter()}}
          @mouseleave=${()=>{this.shareButtonMouseLeave()}}
        >
          ${F(yr)}
        </button>
      `;let m=d``;for(const w of this.effectiveCustomLabels){let S=O=>{},A=()=>{};const L={};w.length>=4&&(L["--custom-label-color"]=`${w[3]};`),w.length>=3&&w[2]!==""&&(S=O=>{this.toolButtonMouseEnter(O,"custom-label",w[2])},A=()=>{this.toolButtonMouseLeave()});let B=d``;w.length>=2&&w[1]!==""?B=d`
            <div class="label-name">${w[0]}:</div>
            <div class="label-text">${w[1]}</div>
          `:B=d` <div class="label-name">${w[0]}</div> `,m=d`${m}
          <div
            class="custom-label"
            style=${Yo(L)}
            @mouseenter=${S}
            @mouseleave=${A}
          >
            ${B}
          </div>`}let x=d``;this.isEditable&&!this.disableEditingModeSaveButton&&(x=d`<button
          class="text-button"
          @click=${()=>{this.editingSaveButtonClicked()}}
        >
          Save
        </button>`),e=d`<div
        class="header"
        ?is-showing-metadata=${this.isShowingMetadata}
      >
        <div
          class="label-group"
          ?is-hidden=${this.disableConversationName}
          ?no-show=${this.disableConversationName&&this.disableShareButton&&this.disableMarkdownButton&&this.disableTranslationButton&&this.disableMetadataButton}
        >
          <div class="conversation-label-group">
            <span class="conversation-label">${this.conversationLabel}:</span>
            <span class="conversation-id" title=${this.conversation.id??""}
              >${this.conversation.id?.slice(0,8)??""}</span
            >
            <sl-copy-button
              value=${this.conversation.id??""}
              size="small"
              copy-label="Copy conversation ID"
              hoist
              ?is-hidden=${this.disableConversationIDCopyButton}
            >
            </sl-copy-button>
          </div>

          <div class="loader-container" ?is-loading=${this.isTranslating}>
            <div class="loader-label">
              Translating ${this.translationProgress}
            </div>
            <div class="loader"></div>
          </div>
          ${x} ${$} ${m}
        </div>

        <div class="action-group">
          <button
            class="icon svg-icon preference-button"
            ?is-active=${this.isShowingPreferenceWindow}
            ?is-hidden=${this.disablePreferenceButton}
            @click=${()=>{this.preferenceButtonClicked()}}
            @mouseenter=${w=>{this.toolButtonMouseEnter(w,"preference")}}
            @mouseleave=${()=>{this.toolButtonMouseLeave()}}
          >
            ${F(wi)}
          </button>

          <button
            class="icon svg-icon markdown-button"
            ?is-active=${this.shouldRenderMarkdown}
            ?is-hidden=${this.isEditable||this.disableMarkdownButton}
            @click=${()=>{this.markdownButtonClicked()}}
            @mouseenter=${w=>{this.toolButtonMouseEnter(w,"markdown")}}
            @mouseleave=${()=>{this.toolButtonMouseLeave()}}
          >
            ${this.shouldRenderMarkdown?F(Ah):F(Rh)}
          </button>

          <button
            class="icon svg-icon translate-button"
            ?disabled=${this.isTranslating}
            ?is-active=${this.isShowingTranslation||this.isTranslating}
            ?is-hidden=${this.isEditable||this.disableTranslationButton||!this.hasTranslationEventListener}
            @mouseenter=${w=>{this.toolButtonMouseEnter(w,"translate")}}
            @mouseleave=${()=>{this.toolButtonMouseLeave()}}
            @click=${()=>{this.translationButtonClicked().then(()=>{},()=>{})}}
          >
            ${F(Oh)}
          </button>

          <button
            class="icon svg-icon metadata-button"
            ?is-active=${this.isShowingMetadata}
            ?is-hidden=${this.disableMetadataButton}
            @click=${()=>{this.metadataButtonClicked()}}
            @mouseenter=${w=>{this.toolButtonMouseEnter(w,"metadata")}}
            @mouseleave=${()=>{this.toolButtonMouseLeave()}}
          >
            ${F(Ph)}
          </button>

          ${b}
        </div>
      </div>`;let T=this.conversation.messages;if(this.isShowingTranslation&&this.conversation.translatedMessages&&(T=this.conversation.translatedMessages),T.length>si){const w={role:we.Tool,name:"Euphony",content:[{text:`This conversation is truncated to ${si} messages from the bottom (total: ${T.length}).`}],recipient:"all",channel:void 0,metadata:{}};T=[w,...T.slice(0,si),w]}for(const[w,S]of T.entries()){const A=S.role,L=this.getAuthorIcon(A);let B=d``;S.name&&(B=d`<span class="label label-text"
            ><span class="name-text" title=${S.name}
              >${this.renderTextWithWordBreaks(S.name)}</span
            ></span
          >`);let O=d``;this.baseTime!==null&&S.create_time&&w>0&&(O=d`<div
            class="label label-text label-relative-timestamp"
          >
            ${this.relativeTimestampFormatter(S.create_time)}
          </div>`);let P=d``;S.create_time&&(P=d`<div
            class="label label-text label-absolute-timestamp"
          >
            ${this.absoluteTimestampFormatter(S.create_time)}
          </div>`);const oe=d` <span class="arrow svg-icon"
          >${F($h)}
        </span>`;let U=d``;const pe=new Set(["all"]);S.recipient&&!pe.has(S.recipient)&&(U=d`
            <span class="label label-text">
              ${oe}<span class="recipient-text" title=${S.recipient}
                >${this.renderTextWithWordBreaks(S.recipient)}</span
              ></span
            >
          `);let be=d``;S.channel!==void 0&&S.channel!==null&&(be=d`
            <span class="label label-text channel">
              ${oe}<span class="channel-text">${S.channel}</span></span
            >
          `);let re=d``;const N={},G=this.effectiveCustomMessageLabels.filter(se=>typeof se[0]=="number"?se[0]===w:!1);if(G.length>0){const se=[];for(const _e of G){const Q=Be=>{this.toolButtonMouseEnter(Be,"custom-label",_e[1])},qe=()=>{this.toolButtonMouseLeave()},je={};_e.length>=3&&(je["--custom-label-color"]=`${_e[2]};`),m=d`<div
              class="custom-label"
              style=${Yo(je)}
              @mouseenter=${Q}
              @mouseleave=${qe}
            >
              ${_e[3]}
            </div>`,se.push(m)}re=d`<div class="custom-labels">
            ${se}
          </div>`,N["--message-content-border"]=`3px solid ${G[0][2]};`,N["--message-content-border-left"]=`3px solid ${G[0][2]};`,N["--message-content-border-radius"]="4px;",N["--conv-background-color"]=`color-mix(
            in lab, ${G[0][2]} 7%, transparent 100%);`}const ce=this.getMessageContentTemplate(S,w),$e=this.isMessageHiddenByFocusMode(S,w)?d`<euphony-message-hidden
              .message=${S}
              @hidden-message-clicked=${()=>{this.focusModeExemptedMessageIndexes=new Set(this.focusModeExemptedMessageIndexes).add(w)}}
            ></euphony-message-hidden>`:d``;t=d`${t}
          <div
            class="message"
            ?is-user=${A===we.User}
            ?is-assistant=${A===we.Assistant}
            style=${Yo(N)}
          >
            <div
              class="message-info"
              id=${`message-info-${w}`}
              tabindex=${1}
              @mouseenter=${se=>{this.messageInfoMouseEnter(se,S,w)}}
              @mouseleave=${()=>{this.messageInfoMouseLeave()}}
            >
              <div class="author">${L}</div>
              ${O} ${P} ${B}
              ${U} ${be} ${re}
            </div>

            ${ce} ${$e}
          </div> `}o=d`<euphony-json-viewer
        .data=${this.conversation.metadata}
        ?is-dark-theme=${this.isDarkTheme}
      >
      </euphony-json-viewer>`}const s=d`
      <div
        id="popper-tooltip"
        class="popper-tooltip hidden"
        role="tooltip"
        @click=${$=>{$.stopPropagation()}}
      >
        <div class="popper-content">
          <span class="popper-label">Hello</span>
        </div>
        <div class="popper-arrow"></div>
      </div>
    `;let i=structuredClone(this.shareFloatingToolbarButtons);this.sharingURL||(i=i.filter($=>$.name!=="copy-url"));const n=d`
      <euphony-floating-toolbar
        ?is-hidden=${!this.showShareFloatingToolbar}
        .buttons=${i}
        disappearTimeout=${this.shareFloatingToolbarDisappearDebouncer??-1}
        class="floating-toolbar-share"
        @mouseleave=${()=>{this.shareButtonMouseLeave()}}
        @button-clicked=${$=>{this.shareFloatingToolbarButtonClicked($).then(()=>{},()=>{})}}
      ></euphony-floating-toolbar>
    `;let r=d``;this.showMessageEditorPopover&&this.editorFocusedMessage&&(r=d`
        <euphony-message-editor-popover
          .message=${this.editorFocusedMessage}
          @save-button-clicked=${$=>{this.messageEditorPopoverSaveButtonClicked($)}}
          @cancel-button-clicked=${()=>{this.messageEditorPopoverCancelButtonClicked()}}
        ></euphony-message-editor-popover>
      `);let a=d``;this.insertMessageMenuIndex!==null&&(a=d`
        <div
          class="add-message-type-menu"
          @click=${$=>{$.stopPropagation()}}
        >
          <button
            class="add-message-type-menu-item"
            @click=${()=>{this.insertMessageAfterIndex(this.insertMessageMenuIndex,"text")}}
          >
            Text
          </button>
          <button
            class="add-message-type-menu-item"
            @click=${()=>{this.insertMessageAfterIndex(this.insertMessageMenuIndex,"system")}}
          >
            System
          </button>
          <button
            class="add-message-type-menu-item"
            @click=${()=>{this.insertMessageAfterIndex(this.insertMessageMenuIndex,"developer")}}
          >
            Developer
          </button>
        </div>
      `);let c=d``,l=d``;if(this.mouseoverMessage&&this.mouseoverMessageIndex){const $=this.mouseoverMessage.role,b=$.charAt(0).toUpperCase()+$.slice(1),m=kt(this.mouseoverMessage.content),x=m.charAt(0).toUpperCase()+m.slice(1);c=d`<span
        >${b} ${x} Metadata</span
      >`,l=d`
        <button
          class="icon svg-icon message-share-button"
          ?is-hidden=${!this.hasMessageSharingURLEventListener}
          @mouseenter=${T=>{this.toolButtonMouseEnter(T,"message-share")}}
          @mouseleave=${()=>{this.toolButtonMouseLeave()}}
          @click=${T=>{this.metadataOverlayShareButtonClicked(T,this.mouseoverMessageIndex)}}
        >
          ${F(vr)}
        </button>
      `}let u=d``;this.mouseoverMessage&&(u=this.getMessageMetadataInfo(this.mouseoverMessage));const f=d` <div
      class="message-metadata-overlay"
      ?is-hidden=${!this.isShowingMessageMetadata}
      role="tooltip"
      tabindex="0"
      @mousedown=${()=>{this.metadataMouseDown()}}
      @mouseenter=${()=>{this.metadataOverlayMouseEnter()}}
      @mouseleave=${()=>{this.metadataOverlayMouseLeave()}}
    >
      <div class="metadata-header">
        <div class="metadata-header-name">${c}</div>
        <div class="metadata-header-share-button">${l}</div>
      </div>
      <div class="metadata-info">${u}</div>
      <euphony-json-viewer
        .data=${this.mouseoverMessage?.metadata??null}
        ?is-dark-theme=${this.isDarkTheme}
      >
      </euphony-json-viewer>
      <div class="popper-arrow"></div>
    </div>`;let k=Yo(this.euphonyStyleConfig),y="--min: 100px;";this.conversationMaxWidth&&(k+=`--conversation-max-width: ${this.conversationMaxWidth}px;`,y+=`--max: ${this.conversationMaxWidth}px;`),this.conversationMinWidth&&(k+=`--conversation-min-width: ${this.conversationMinWidth}px;`,y+=`--min: ${this.conversationMinWidth}px;`);let v=d``;this.isShowingMetadata?v=d`
        <sl-split-panel position="60" style=${y}>
          <div
            class="messages"
            is-showing-metadata=${this.isShowingMessageMetadata}
            slot="start"
          >
            ${t}
          </div>
          <div
            class="metadata"
            is-showing-metadata=${this.isShowingMessageMetadata}
            slot="end"
          >
            <div class="metadata-header">Conversation Metadata</div>
            ${o}
          </div>
          <div class="my-divider" slot="divider"></div>
        </sl-split-panel>
      `:v=d` <div class="messages">${t}</div> `;const C=d`
      <euphony-preference-window
        ?is-hidden=${this.disablePreferenceButton||!this.isShowingPreferenceWindow}
        .enabledOptions=${{maxMessageHeight:!0,gridView:!1,expandAndCollapseAll:!0,advanced:!0,messageLabel:!0,focusMode:!0}}
        ?is-dark-theme=${this.isDarkTheme}
        @preference-window-close-clicked=${()=>{this.isShowingPreferenceWindow=!1}}
        @max-message-height-changed=${$=>{this.preferenceWindowMaxMessageHeightChanged($)}}
        @message-label-changed=${$=>{this.preferenceWindowMessageLabelChanged($)}}
        @expand-all-clicked=${()=>{this.expandBlockContents()}}
        @collapse-all-clicked=${()=>{this.collapseBlockContents()}}
        @translate-all-clicked=${()=>{this.translationButtonClicked()}}
        @focus-mode-settings-changed=${$=>{this.preferenceWindowFocusModeSettingsChanged($)}}
      ></euphony-preference-window>
    `,E=d`
      <euphony-token-window
        ?is-hidden=${this.disableTokenWindow}
      ></euphony-token-window>
    `;return d`
      ${s} ${f} ${n}
      ${r} ${a}
      ${C} ${E}
      <div
        class="conversation"
        tabindex="0"
        style=${k}
        ?is-dark-theme=${this.isDarkTheme}
      >
        ${e}
        <div class="content">${v}</div>
      </div>
      ${this.loadKatexScript()}
    `}expandBlockContents(){oa(this)}collapseBlockContents(){sa(this)}};D.styles=[Z`
      ${ie(ma)}
      ${ie(Nh)}
    `];z([h({type:String,attribute:"conversation-string"})],D.prototype,"conversationString",2);z([h({attribute:!1})],D.prototype,"conversationData",2);z([h({type:String,attribute:"sharing-url"})],D.prototype,"sharingURL",2);z([h({type:String,attribute:"data-file-url"})],D.prototype,"dataFileURL",2);z([h({type:String,attribute:"override-sharing-json-string"})],D.prototype,"overrideSharingJSONString",2);z([h({type:Boolean,attribute:"should-render-markdown"})],D.prototype,"shouldRenderMarkdown",2);z([h({type:Array,attribute:"markdown-allowed-tags"})],D.prototype,"markdownAllowedTags",2);z([h({type:Array,attribute:"markdown-allowed-attributes"})],D.prototype,"markdownAllowedAttributes",2);z([h({type:String,attribute:"conversation-label"})],D.prototype,"conversationLabel",2);z([M()],D.prototype,"conversation",2);z([h({type:Boolean,attribute:"is-editable"})],D.prototype,"isEditable",2);z([h({type:Array,attribute:"focus-mode-author"})],D.prototype,"focusModeAuthor",2);z([h({type:Array,attribute:"focus-mode-recipient"})],D.prototype,"focusModeRecipient",2);z([h({type:Array,attribute:"focus-mode-content-type"})],D.prototype,"focusModeContentType",2);z([M()],D.prototype,"focusModeExemptedMessageIndexes",2);z([M()],D.prototype,"deletedMessageIndexes",2);z([M()],D.prototype,"insertMessageMenuIndex",2);z([M()],D.prototype,"showMessageEditorPopover",2);z([M()],D.prototype,"editorFocusedMessage",2);z([M()],D.prototype,"editorFocusedMessageIndex",2);z([h({type:Boolean,attribute:"is-convo-marked-for-deletion"})],D.prototype,"isConvoMarkedForDeletion",2);z([M()],D.prototype,"hasMessageSharingURLEventListener",2);z([M()],D.prototype,"hasTranslationEventListener",2);z([M()],D.prototype,"isShowingTranslation",2);z([M()],D.prototype,"isTranslating",2);z([M()],D.prototype,"translationProgress",2);z([M()],D.prototype,"translationSourceLanguage",2);z([h({type:Array,attribute:"custom-labels"})],D.prototype,"customLabels",2);z([h({type:Array,attribute:"custom-message-labels"})],D.prototype,"customMessageLabels",2);z([h({type:Array,attribute:"custom-share-buttons"})],D.prototype,"customShareButtons",2);z([W("#popper-tooltip")],D.prototype,"popperTooltip",2);z([W(".message-metadata-overlay")],D.prototype,"messageMetadataOverlay",2);z([W("euphony-floating-toolbar.floating-toolbar-share")],D.prototype,"shareFloatingToolbar",2);z([M()],D.prototype,"showShareFloatingToolbar",2);z([W("euphony-token-window")],D.prototype,"tokenWindowComponent",2);z([h({type:Boolean,attribute:"is-showing-metadata"})],D.prototype,"isShowingMetadata",2);z([M()],D.prototype,"mouseoverMessage",2);z([M()],D.prototype,"isShowingMessageMetadata",2);z([h({type:Number,attribute:"conversation-max-width"})],D.prototype,"conversationMaxWidth",2);z([h({type:Number,attribute:"conversation-min-width"})],D.prototype,"conversationMinWidth",2);z([h({type:Boolean,attribute:"disable-markdown-button"})],D.prototype,"disableMarkdownButton",2);z([h({type:Boolean,attribute:"disable-translation-button"})],D.prototype,"disableTranslationButton",2);z([h({type:Boolean,attribute:"disable-share-button"})],D.prototype,"disableShareButton",2);z([h({type:Boolean,attribute:"disable-metadata-button"})],D.prototype,"disableMetadataButton",2);z([h({type:Boolean,attribute:"disable-editing-mode-save-button"})],D.prototype,"disableEditingModeSaveButton",2);z([h({type:Boolean,attribute:"disable-conversation-id-copy-button"})],D.prototype,"disableConversationIDCopyButton",2);z([M()],D.prototype,"isShowingPreferenceWindow",2);z([h({type:Boolean,attribute:"disable-message-metadata"})],D.prototype,"disableMessageMetadata",2);z([h({type:Boolean,attribute:"disable-conversation-name"})],D.prototype,"disableConversationName",2);z([h({type:Boolean,attribute:"disable-preference-button"})],D.prototype,"disablePreferenceButton",2);z([h({type:Boolean,attribute:"disable-token-window"})],D.prototype,"disableTokenWindow",2);z([h({type:String,attribute:"theme"})],D.prototype,"theme",2);z([h({type:Boolean,attribute:"is-dark-theme",reflect:!0})],D.prototype,"isDarkTheme",2);z([M()],D.prototype,"shareFloatingToolbarDisappearDebouncer",2);D=z([ye("euphony-conversation")],D);const xi=e=>{try{return JSON.parse(e)}catch(t){return console.error(t),console.error("Error parsing conversation JSON string:",e),null}};function jh(e){return new Worker("/euphony/assets/local-data-worker-CHLGzNeW.js",{name:e?.name})}const Vh=new Error("request for lock canceled");var Gh=function(e,t,o,s){function i(n){return n instanceof o?n:new o(function(r){r(n)})}return new(o||(o=Promise))(function(n,r){function a(u){try{l(s.next(u))}catch(f){r(f)}}function c(u){try{l(s.throw(u))}catch(f){r(f)}}function l(u){u.done?n(u.value):i(u.value).then(a,c)}l((s=s.apply(e,t||[])).next())})};class Zh{constructor(t,o=Vh){this._value=t,this._cancelError=o,this._queue=[],this._weightedWaiters=[]}acquire(t=1,o=0){if(t<=0)throw new Error(`invalid weight ${t}: must be positive`);return new Promise((s,i)=>{const n={resolve:s,reject:i,weight:t,priority:o},r=va(this._queue,a=>o<=a.priority);r===-1&&t<=this._value?this._dispatchItem(n):this._queue.splice(r+1,0,n)})}runExclusive(t){return Gh(this,arguments,void 0,function*(o,s=1,i=0){const[n,r]=yield this.acquire(s,i);try{return yield o(n)}finally{r()}})}waitForUnlock(t=1,o=0){if(t<=0)throw new Error(`invalid weight ${t}: must be positive`);return this._couldLockImmediately(t,o)?Promise.resolve():new Promise(s=>{this._weightedWaiters[t-1]||(this._weightedWaiters[t-1]=[]),Yh(this._weightedWaiters[t-1],{resolve:s,priority:o})})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(t){this._value=t,this._dispatchQueue()}release(t=1){if(t<=0)throw new Error(`invalid weight ${t}: must be positive`);this._value+=t,this._dispatchQueue()}cancel(){this._queue.forEach(t=>t.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(t){const o=this._value;this._value-=t.weight,t.resolve([o,this._newReleaser(t.weight)])}_newReleaser(t){let o=!1;return()=>{o||(o=!0,this.release(t))}}_drainUnlockWaiters(){if(this._queue.length===0)for(let t=this._value;t>0;t--){const o=this._weightedWaiters[t-1];o&&(o.forEach(s=>s.resolve()),this._weightedWaiters[t-1]=[])}else{const t=this._queue[0].priority;for(let o=this._value;o>0;o--){const s=this._weightedWaiters[o-1];if(!s)continue;const i=s.findIndex(n=>n.priority<=t);(i===-1?s:s.splice(0,i)).forEach((n=>n.resolve()))}}}_couldLockImmediately(t,o){return(this._queue.length===0||this._queue[0].priority<o)&&t<=this._value}}function Yh(e,t){const o=va(e,s=>t.priority<=s.priority);e.splice(o+1,0,t)}function va(e,t){for(let o=e.length-1;o>=0;o--)if(t(e[o]))return o;return-1}const Jh=128,Mo=e=>{if(e instanceof Error)return JSON.stringify({name:e.name,message:e.message,stack:e.stack});if(typeof e=="string")return e;try{return JSON.stringify(e)}catch{return String(e)}},bs=class bs{constructor(t){this.apiBaseURL=t,this.apiManager=new Mr(t),this.browserAPIManager=new Sr}async translationRequestHandler(t){const{text:o,resolve:s,reject:i}=t.detail,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({source:o}),Credentials:"include"},r=l=>new Promise(u=>setTimeout(u,l)),[a,c]=await bs.translationSemaphore.acquire();try{const u=300+Math.floor(Math.random()*401);let f=0,k=null;for(;f<3;)try{const y=await fetch(`${this.apiBaseURL}translate/`,n);if(!y.ok)throw new Error(`HTTP error! status: ${y.status}`);const v=await y.json();s(v),k=null;break}catch(y){k=y,f++,f<3&&await r(u)}if(k){const y={translation:o,is_translated:!1,language:"Failed",has_command:!1};console.error("Translation failed, returning original text",k),s(y)}}catch(l){const u={translation:o,is_translated:!1,language:"Failed",has_command:!1};console.error("Translation failed, returning original text",l),s(u)}finally{c()}}async frontendOnlyTranslationRequestHandler(t,o){const{text:s,resolve:i,reject:n}=t.detail;try{const r=await this.browserAPIManager.translateTextWithOpenAI(s,o);i(r)}catch(r){n(Mo(r))}}fetchMessageSharingURLRequestHandler(t,o,s,i){const{messageIndex:n,resolve:r,reject:a}=t.detail,c=s.getMessageShareURL(o,n,i);r(c)}async refreshRendererListRequestHandler(t){const{resolve:o,reject:s}=t.detail;try{const i=await this.apiManager.refreshRendererList();o(i)}catch(i){s(Mo(i))}}async frontendOnlyRefreshRendererListRequestHandler(t){const{resolve:o,reject:s}=t.detail;try{const i=await this.browserAPIManager.refreshRendererList();o(i)}catch(i){s(Mo(i))}}async harmonyRenderRequestHandler(t){const{conversation:o,renderer:s,resolve:i,reject:n}=t.detail;try{const r=await this.apiManager.harmonyRender(o,s);i(r)}catch(r){n(Mo(r))}}async frontendOnlyHarmonyRenderRequestHandler(t){const{conversation:o,renderer:s,resolve:i,reject:n}=t.detail;try{const r=await this.browserAPIManager.harmonyRender(o,s);i(r)}catch(r){n(Mo(r))}}};bs.translationSemaphore=new Zh(Jh);let ki=bs;class Kh{constructor(t){this.getShareURL=(o,s)=>{let i="";const n=new URLSearchParams;return s!==null&&s!==""&&(n.set("path",s),n.set("page",this.app.curPage.toString()),n.set("limit",this.app.itemsPerPage.toString())),this.app.globalIsShowingMetadata&&n.set("metadata","true"),this.app.globalShouldRenderMarkdown&&n.set("markdown","true"),this.app.jmespathQuery&&n.set("jmespath",this.app.jmespathQuery),this.app.isGridView&&n.set("grid",this.app.gridViewColumnWidth.toString()),n.set("index",o.toString()),i=`${window.location.origin}${window.location.pathname}?${n.toString()}`,i},this.getMessageShareURL=(o,s,i)=>{let n="";const r=new URLSearchParams;return i!==null&&i!==""&&(r.set("path",i),r.set("page",this.app.curPage.toString()),r.set("limit",this.app.itemsPerPage.toString())),this.app.globalIsShowingMetadata&&r.set("metadata","true"),this.app.globalShouldRenderMarkdown&&r.set("markdown","true"),this.app.jmespathQuery&&r.set("jmespath",this.app.jmespathQuery),this.app.isGridView&&r.set("grid",this.app.gridViewColumnWidth.toString()),r.set("index",o.toString()),r.set("subindex",s.toString()),n=`${window.location.origin}${window.location.pathname}?${r.toString()}`,n},this.app=t}updateURL(){const t=window.location.hash,o=new URLSearchParams(window.location.search);o.set("page",this.app.curPage.toString()),o.set("limit",this.app.itemsPerPage.toString()),this.app.globalShouldRenderMarkdown?o.set("markdown","true"):o.delete("markdown"),this.app.globalIsShowingMetadata?o.set("metadata","true"):o.delete("metadata"),this.app.jmespathQuery?o.set("jmespath",this.app.jmespathQuery):o.delete("jmespath"),this.app.isGridView?o.set("grid",this.app.gridViewColumnWidth.toString()):o.delete("grid");const s=o.toString();history.pushState({},"",`?${s}${t}`)}updateConfigsFromURL(){const t=new URLSearchParams(window.location.search),o=t.get("page");o&&(this.app.curPage=parseInt(o));const s=t.get("limit");s&&(this.app.itemsPerPage=parseInt(s));const i=t.get("markdown");i&&(this.app.globalShouldRenderMarkdown=i==="true");const n=t.get("metadata");n&&(this.app.globalIsShowingMetadata=n==="true");const r=t.get("editor");r&&(this.app.isEditorMode=r==="true",this.app.itemsPerPage=1e8);const a=t.get("jmespath");a&&(this.app.jmespathQuery=a);const c=t.get("grid");c&&(this.app.isGridView=!0,this.app.gridViewColumnWidth=parseInt(c),this.app.appStyleConfig["--app-grid-view-column-width"]=`${parseInt(c)}px`);const l=t.get("frontend-only");l&&(this.app.isFrontendOnlyMode=l==="true")}}var Xh=Z`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,H=class extends Ie{constructor(){super(...arguments),this.formControlController=new $s(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new _s(this,"help-text","label"),this.localize=new no(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,s="preserve"){const i=t??this.input.selectionStart,n=o??this.input.selectionEnd;this.input.setRangeText(e,i,n,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,s=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${Ge({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Ge({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${te(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${te(this.placeholder)}
              minlength=${te(this.minlength)}
              maxlength=${te(this.maxlength)}
              min=${te(this.min)}
              max=${te(this.max)}
              step=${te(this.step)}
              .value=${Gi(this.value)}
              autocapitalize=${te(this.autocapitalize)}
              autocomplete=${te(this.autocomplete)}
              autocorrect=${te(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${te(this.pattern)}
              enterkeyhint=${te(this.enterkeyhint)}
              inputmode=${te(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?d`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?d`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?d`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:d`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[et,Ms,Xh];H.dependencies={"sl-icon":tt};g([W(".input__control")],H.prototype,"input",2);g([M()],H.prototype,"hasFocus",2);g([h()],H.prototype,"title",2);g([h({reflect:!0})],H.prototype,"type",2);g([h()],H.prototype,"name",2);g([h()],H.prototype,"value",2);g([qi()],H.prototype,"defaultValue",2);g([h({reflect:!0})],H.prototype,"size",2);g([h({type:Boolean,reflect:!0})],H.prototype,"filled",2);g([h({type:Boolean,reflect:!0})],H.prototype,"pill",2);g([h()],H.prototype,"label",2);g([h({attribute:"help-text"})],H.prototype,"helpText",2);g([h({type:Boolean})],H.prototype,"clearable",2);g([h({type:Boolean,reflect:!0})],H.prototype,"disabled",2);g([h()],H.prototype,"placeholder",2);g([h({type:Boolean,reflect:!0})],H.prototype,"readonly",2);g([h({attribute:"password-toggle",type:Boolean})],H.prototype,"passwordToggle",2);g([h({attribute:"password-visible",type:Boolean})],H.prototype,"passwordVisible",2);g([h({attribute:"no-spin-buttons",type:Boolean})],H.prototype,"noSpinButtons",2);g([h({reflect:!0})],H.prototype,"form",2);g([h({type:Boolean,reflect:!0})],H.prototype,"required",2);g([h()],H.prototype,"pattern",2);g([h({type:Number})],H.prototype,"minlength",2);g([h({type:Number})],H.prototype,"maxlength",2);g([h()],H.prototype,"min",2);g([h()],H.prototype,"max",2);g([h()],H.prototype,"step",2);g([h()],H.prototype,"autocapitalize",2);g([h()],H.prototype,"autocorrect",2);g([h()],H.prototype,"autocomplete",2);g([h({type:Boolean})],H.prototype,"autofocus",2);g([h()],H.prototype,"enterkeyhint",2);g([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);g([h()],H.prototype,"inputmode",2);g([me("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);g([me("step",{waitUntilFirstUpdate:!0})],H.prototype,"handleStepChange",1);g([me("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);H.define("sl-input");const xr=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41422L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
    fill="currentColor"
  />
</svg>
`,Qh='<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>',ep=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.9641 3.21478C14.0613 1.73426 16.2208 1.58242 17.5144 2.89485L21.1357 6.56907C22.43 7.88224 22.2461 10.041 20.7483 11.1162L18.5962 12.6612C18.1472 12.9836 17.5219 12.8809 17.1996 12.4318C16.8773 11.9827 16.98 11.3574 17.429 11.035L19.5811 9.49004C20.0804 9.13162 20.1417 8.41204 19.7103 7.97432L16.0889 4.3001C15.6577 3.86263 14.9379 3.91324 14.5722 4.40675L12.8119 6.78196C12.4828 7.22606 11.856 7.31924 11.4119 6.99009C10.9679 6.66093 10.8747 6.03409 11.2038 5.59L12.9641 3.21478ZM3.29391 3.2763C3.68474 2.88543 4.3184 2.88543 4.70923 3.2763L20.7218 19.2905C21.1126 19.6814 21.1126 20.3151 20.7218 20.706C20.331 21.0968 19.6973 21.0968 19.3065 20.706L16.011 17.4101V17.5545C16.011 18.847 15.1841 19.9944 13.9581 20.4031L13.4979 20.5565C12.419 20.9162 11.2296 20.6354 10.4255 19.8312L8.00472 17.4101L3.70845 21.7068C3.31762 22.0977 2.68395 22.0977 2.29312 21.7068C1.90229 21.316 1.90229 20.6822 2.29312 20.2914L6.58939 15.9947L4.16863 13.5737C3.3645 12.7695 3.08371 11.5799 3.44333 10.5009L3.59672 10.0407C4.00539 8.8146 5.1527 7.98758 6.44501 7.98758H6.58939L3.29391 4.69177C2.90308 4.30089 2.90308 3.66717 3.29391 3.2763ZM8.59096 9.98935H6.44501C6.01424 9.98935 5.6318 10.265 5.49558 10.6737L5.34219 11.134C5.22231 11.4936 5.31591 11.8901 5.58395 12.1582L8.71187 15.2864L8.71289 15.2875L11.8408 18.4157C12.1088 18.6838 12.5053 18.7774 12.8649 18.6575L13.3251 18.5041C13.7338 18.3678 14.0094 17.9854 14.0094 17.5545V15.4084L8.59096 9.98935Z"
    fill="currentColor"
  />
</svg>
`,tp=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 3.5C10.8954 3.5 10 4.39543 10 5.5H14C14 4.39543 13.1046 3.5 12 3.5ZM8.53513 3.5C9.22675 2.3044 10.5194 1.5 12 1.5C13.4806 1.5 14.7733 2.3044 15.4649 3.5H17.25C18.9069 3.5 20.25 4.84315 20.25 6.5V18.5C20.25 20.1569 19.1569 21.5 17.25 21.5H6.75C5.09315 21.5 3.75 20.1569 3.75 18.5V6.5C3.75 4.84315 5.09315 3.5 6.75 3.5H8.53513ZM8 5.5H6.75C6.19772 5.5 5.75 5.94772 5.75 6.5V18.5C5.75 19.0523 6.19772 19.5 6.75 19.5H17.25C18.0523 19.5 18.25 19.0523 18.25 18.5V6.5C18.25 5.94772 17.8023 5.5 17.25 5.5H16C16 6.60457 15.1046 7.5 14 7.5H10C8.89543 7.5 8 6.60457 8 5.5Z"
    fill="currentColor"
  />
</svg>
`,op=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.417 7.3335C16.417 6.62246 16.4161 6.12913 16.3848 5.74561C16.3617 5.4636 16.324 5.27415 16.2725 5.13037L16.2168 5.00049C16.0628 4.6983 15.8286 4.44536 15.541 4.26904L15.4151 4.19873C15.2571 4.11825 15.0454 4.06147 14.6699 4.03076C14.2865 3.99943 13.7929 3.99854 13.0821 3.99854H6.91506C6.20402 3.99854 5.71069 3.99943 5.32717 4.03076C5.04531 4.0538 4.85568 4.09065 4.71193 4.14209L4.58205 4.19873C4.27979 4.35275 4.02692 4.58687 3.8506 4.87451L3.78029 5.00049C3.69978 5.1585 3.64303 5.3699 3.61232 5.74561C3.58099 6.12912 3.5801 6.62246 3.5801 7.3335V12.2612C3.5801 12.9039 3.58393 13.1238 3.61916 13.2925L3.65139 13.4243C3.83825 14.0744 4.37075 14.5736 5.04006 14.7134L5.18166 14.7339C5.34461 14.7497 5.58845 14.7515 6.07033 14.7515C6.26764 14.7515 6.40358 14.7512 6.53811 14.7622L6.71779 14.7817C7.13693 14.8402 7.54104 14.9829 7.90529 15.2007L8.08107 15.3149C8.14308 15.3577 8.21075 15.406 8.29103 15.4634L9.61037 16.4058L9.90432 16.6089C9.96211 16.6445 9.97093 16.6427 9.95705 16.6392L9.99807 16.644C10.0121 16.6441 10.0264 16.6426 10.0401 16.6392L10.0918 16.6089C10.1566 16.569 10.2402 16.5105 10.3867 16.4058L11.7061 15.4634L11.9151 15.3149C11.9771 15.2721 12.0338 15.2354 12.0918 15.2007L12.25 15.1118C12.625 14.9158 13.0361 14.7967 13.459 14.7622L13.669 14.7534C13.7442 14.7522 13.8273 14.7515 13.9258 14.7515C14.5684 14.7515 14.7884 14.7486 14.9571 14.7134L15.0889 14.6802C15.7389 14.4934 16.238 13.9617 16.3779 13.2925L16.3985 13.1499C16.4143 12.9869 16.417 12.7429 16.417 12.2612V7.3335ZM17.7471 12.2612C17.7471 12.6931 17.7485 13.0205 17.7197 13.2993L17.6797 13.564C17.4385 14.7186 16.5777 15.6364 15.4561 15.9585L15.2285 16.0151C14.8915 16.0855 14.5013 16.0815 13.9258 16.0815L13.5674 16.0884C13.3573 16.1055 13.1521 16.1583 12.961 16.2446L12.7744 16.3423L12.4785 16.5454L11.1602 17.4878C10.9562 17.6335 10.733 17.8026 10.4776 17.894L10.3662 17.9282C10.1852 17.9741 9.99775 17.9863 9.8135 17.9634L9.63088 17.9282C9.40371 17.8707 9.20168 17.7452 9.01662 17.6157L8.83693 17.4878L7.5176 16.5454L7.22268 16.3423C7.04168 16.2341 6.84355 16.1575 6.63771 16.1167L6.42971 16.0884C6.36152 16.0828 6.28868 16.0815 6.07033 16.0815C5.63841 16.0815 5.31112 16.0839 5.03225 16.0552L4.7676 16.0151C3.61311 15.7739 2.69518 14.9129 2.37307 13.7915L2.3174 13.564C2.247 13.2269 2.25002 12.8369 2.25002 12.2612V7.3335C2.25002 6.64441 2.24937 6.08745 2.28615 5.63721C2.32356 5.17942 2.40294 4.77359 2.59475 4.39697L2.71682 4.17822C3.02091 3.68251 3.4575 3.27867 3.97853 3.01318L4.12111 2.94678C4.4574 2.80254 4.81812 2.73733 5.21877 2.70459C5.66901 2.6678 6.22597 2.66846 6.91506 2.66846H13.0821C13.771 2.66846 14.3282 2.66781 14.7783 2.70459C15.2361 2.74202 15.642 2.82133 16.0186 3.01318L16.2363 3.13525C16.7323 3.43936 17.1358 3.87577 17.4014 4.39697L17.4688 4.53955C17.613 4.87579 17.6772 5.23663 17.71 5.63721C17.7468 6.08745 17.7471 6.6444 17.7471 7.3335V12.2612Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3232 12.2014C11.638 12.3903 12.0462 12.2885 12.2353 11.9738L13.4853 9.88985C13.6115 9.67933 13.6115 9.41678 13.4853 9.20625L12.2353 7.12227C12.0462 6.8076 11.638 6.70584 11.3232 6.89473C11.0084 7.08368 10.9059 7.49197 11.0946 7.80684L12.1386 9.54805L11.0946 11.2893C10.9059 11.6041 11.0084 12.0124 11.3232 12.2014Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.67684 12.2014C8.36202 12.3903 7.95378 12.2885 7.76473 11.9738L6.51473 9.88985C6.38849 9.67933 6.38849 9.41678 6.51473 9.20625L7.76473 7.12227C7.95378 6.8076 8.36202 6.70584 8.67684 6.89473C8.99163 7.08368 9.09414 7.49197 8.90536 7.80684L7.86141 9.54805L8.90536 11.2893C9.09414 11.6041 8.99163 12.0124 8.67684 12.2014Z" fill="currentColor"/>
</svg>
`,sp=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
    fill="currentColor"
  />
</svg>
`,ip=`<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V7.11526C21 7.96049 20.6434 8.76651 20.018 9.33508L15.8273 13.1448C15.6189 13.3343 15.5 13.603 15.5 13.8847V19.882C15.5 21.3687 13.9354 22.3357 12.6056 21.6708L9.60557 20.1708C8.92801 19.832 8.5 19.1395 8.5 18.382V13.8847C8.5 13.603 8.38115 13.3343 8.17267 13.1448L3.98198 9.33508C3.35656 8.76651 3 7.96049 3 7.11526V6ZM6 5C5.44772 5 5 5.44772 5 6V7.11526C5 7.397 5.11885 7.66568 5.32733 7.8552L9.51802 11.6649C10.1434 12.2335 10.5 13.0395 10.5 13.8847V18.382L13.5 19.882V13.8847C13.5 13.0395 13.8566 12.2335 14.482 11.6649L18.6727 7.8552C18.8811 7.66568 19 7.39701 19 7.11526V6C19 5.44772 18.5523 5 18 5H6Z"
    fill="currentColor"
  />
</svg>
`,np='a{color:#0064c8;text-decoration:none}a:hover{text-decoration:underline}a:visited{color:#0050a0}label{display:block}input,button,select,textarea{font-family:inherit;font-size:inherit;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}button{color:#333;background-color:#f4f4f4;outline:none}button:disabled{color:#999}:root,:host{--shadow-border-light: 0px 0px 5px hsla(0, 0%, 0%, .1), 0px 0px 4px hsla(0, 0%, 0%, .07), 0px 0px 10px hsla(0, 0%, 0%, .07);--shadow-border-card: 0px 0px 6px hsla(0, 0%, 0%, .07);--shadow-border-large: 0 8px 24px hsla(212, 9%, 59%, .2);--ease-cubic-in-out: cubic-bezier(.645, .045, .355, 1);--border-radius: 5px;--container-h-padding: 12px;--container-v-padding: 10px;--font-d1: .9375rem;--font-d2: .875rem;--font-d3: .8125rem;--font-d4: .75rem;--font-d5: .6875rem;--font-d6: .625rem;--font-u1: 1.0625rem;--font-u2: 1.125rem;--font-u3: 1.1875rem;--font-u4: 1.25rem;--font-u5: 1.3125rem;--font-u6: 1.375rem;--font-family-monospace: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--added-color: hsl(120, 37%, 89%);--replaced-color: hsl(208, 88%, 90%);--deleted--color: hsl(353, 100%, 93%);--red-50: hsl(350, 100%, 96.08%);--red-100: hsl(354, 100%, 90.2%);--red-200: hsl(0, 72.65%, 77.06%);--red-300: hsl(0, 68.67%, 67.45%);--red-400: hsl(1, 83.25%, 62.55%);--red-500: hsl(4, 89.62%, 58.43%);--red-600: hsl(1, 77.19%, 55.29%);--red-700: hsl(0, 65.08%, 50.59%);--red-800: hsl(0, 66.39%, 46.67%);--red-900: hsl(0, 73.46%, 41.37%);--red-a100: hsl(4, 100%, 75.1%);--red-a200: hsl(0, 100%, 66.08%);--red-a400: hsl(348, 100%, 54.51%);--red-a700: hsl(0, 100%, 41.76%);--pink-50: hsl(340, 80%, 94.12%);--pink-100: hsl(339, 81.33%, 85.29%);--pink-200: hsl(339, 82.11%, 75.88%);--pink-300: hsl(339, 82.56%, 66.27%);--pink-400: hsl(339, 81.9%, 58.82%);--pink-500: hsl(339, 82.19%, 51.57%);--pink-600: hsl(338, 77.78%, 47.65%);--pink-700: hsl(336, 77.98%, 42.75%);--pink-800: hsl(333, 79.27%, 37.84%);--pink-900: hsl(328, 81.33%, 29.41%);--pink-a100: hsl(339, 100%, 75.1%);--pink-a200: hsl(339, 100%, 62.55%);--pink-a400: hsl(338, 100%, 48.04%);--pink-a700: hsl(333, 84.11%, 41.96%);--purple-50: hsl(292, 44.44%, 92.94%);--purple-100: hsl(291, 46.07%, 82.55%);--purple-200: hsl(291, 46.94%, 71.18%);--purple-300: hsl(291, 46.6%, 59.61%);--purple-400: hsl(291, 46.61%, 50.78%);--purple-500: hsl(291, 63.72%, 42.16%);--purple-600: hsl(287, 65.05%, 40.39%);--purple-700: hsl(282, 67.88%, 37.84%);--purple-800: hsl(277, 70.17%, 35.49%);--purple-900: hsl(267, 75%, 31.37%);--purple-a100: hsl(291, 95.38%, 74.51%);--purple-a200: hsl(291, 95.9%, 61.76%);--purple-a400: hsl(291, 100%, 48.82%);--purple-a700: hsl(280, 100%, 50%);--deep-purple-50: hsl(264, 45.45%, 93.53%);--deep-purple-100: hsl(261, 45.68%, 84.12%);--deep-purple-200: hsl(261, 46.27%, 73.73%);--deep-purple-300: hsl(261, 46.81%, 63.14%);--deep-purple-400: hsl(261, 46.72%, 55.1%);--deep-purple-500: hsl(261, 51.87%, 47.25%);--deep-purple-600: hsl(259, 53.91%, 45.1%);--deep-purple-700: hsl(257, 57.75%, 41.76%);--deep-purple-800: hsl(254, 60.8%, 39.02%);--deep-purple-900: hsl(251, 68.79%, 33.92%);--deep-purple-a100: hsl(261, 100%, 76.67%);--deep-purple-a200: hsl(255, 100%, 65.1%);--deep-purple-a400: hsl(258, 100%, 56.08%);--deep-purple-a700: hsl(265, 100%, 45.88%);--indigo-50: hsl(231, 43.75%, 93.73%);--indigo-100: hsl(231, 45%, 84.31%);--indigo-200: hsl(230, 44.36%, 73.92%);--indigo-300: hsl(230, 44.09%, 63.53%);--indigo-400: hsl(230, 44.25%, 55.69%);--indigo-500: hsl(230, 48.36%, 47.84%);--indigo-600: hsl(231, 50%, 44.71%);--indigo-700: hsl(231, 53.62%, 40.59%);--indigo-800: hsl(232, 57.22%, 36.67%);--indigo-900: hsl(234, 65.79%, 29.8%);--indigo-a100: hsl(230, 100%, 77.45%);--indigo-a200: hsl(230, 98.84%, 66.08%);--indigo-a400: hsl(230, 98.97%, 61.76%);--indigo-a700: hsl(230, 99.04%, 59.22%);--blue-50: hsl(205, 86.67%, 94.12%);--blue-100: hsl(207, 88.89%, 85.88%);--blue-200: hsl(206, 89.74%, 77.06%);--blue-300: hsl(206, 89.02%, 67.84%);--blue-400: hsl(206, 89.95%, 60.98%);--blue-500: hsl(206, 89.74%, 54.12%);--blue-600: hsl(208, 79.28%, 50.78%);--blue-700: hsl(209, 78.72%, 46.08%);--blue-800: hsl(211, 80.28%, 41.76%);--blue-900: hsl(216, 85.06%, 34.12%);--blue-a100: hsl(217, 100%, 75.49%);--blue-a200: hsl(217, 100%, 63.33%);--blue-a400: hsl(217, 100%, 58.04%);--blue-a700: hsl(224, 100%, 58.04%);--light-blue-50: hsl(198, 93.55%, 93.92%);--light-blue-100: hsl(198, 92.41%, 84.51%);--light-blue-200: hsl(198, 92.37%, 74.31%);--light-blue-300: hsl(198, 91.3%, 63.92%);--light-blue-400: hsl(198, 91.93%, 56.27%);--light-blue-500: hsl(198, 97.57%, 48.43%);--light-blue-600: hsl(199, 97.41%, 45.49%);--light-blue-700: hsl(201, 98.1%, 41.37%);--light-blue-800: hsl(202, 97.91%, 37.45%);--light-blue-900: hsl(206, 98.72%, 30.59%);--light-blue-a100: hsl(198, 100%, 75.1%);--light-blue-a200: hsl(198, 100%, 62.55%);--light-blue-a400: hsl(198, 100%, 50%);--light-blue-a700: hsl(202, 100%, 45.88%);--cyan-50: hsl(186, 72.22%, 92.94%);--cyan-100: hsl(186, 71.11%, 82.35%);--cyan-200: hsl(186, 71.62%, 70.98%);--cyan-300: hsl(186, 71.15%, 59.22%);--cyan-400: hsl(186, 70.87%, 50.2%);--cyan-500: hsl(186, 100%, 41.57%);--cyan-600: hsl(186, 100%, 37.84%);--cyan-700: hsl(185, 100%, 32.75%);--cyan-800: hsl(185, 100%, 28.04%);--cyan-900: hsl(182, 100%, 19.61%);--cyan-a100: hsl(180, 100%, 75.88%);--cyan-a200: hsl(180, 100%, 54.71%);--cyan-a400: hsl(186, 100%, 50%);--cyan-a700: hsl(187, 100%, 41.57%);--teal-50: hsl(176, 40.91%, 91.37%);--teal-100: hsl(174, 41.28%, 78.63%);--teal-200: hsl(174, 41.9%, 64.9%);--teal-300: hsl(174, 41.83%, 50.78%);--teal-400: hsl(174, 62.75%, 40%);--teal-500: hsl(174, 100%, 29.41%);--teal-600: hsl(173, 100%, 26.86%);--teal-700: hsl(173, 100%, 23.73%);--teal-800: hsl(172, 100%, 20.59%);--teal-900: hsl(169, 100%, 15.1%);--teal-a100: hsl(166, 100%, 82.75%);--teal-a200: hsl(165, 100%, 69.61%);--teal-a400: hsl(165, 82.26%, 51.37%);--teal-a700: hsl(171, 100%, 37.45%);--green-50: hsl(124, 39.39%, 93.53%);--green-100: hsl(121, 37.5%, 84.31%);--green-200: hsl(122, 37.4%, 74.31%);--green-300: hsl(122, 38.46%, 64.31%);--green-400: hsl(122, 38.46%, 56.67%);--green-500: hsl(122, 39.44%, 49.22%);--green-600: hsl(122, 40.97%, 44.51%);--green-700: hsl(122, 43.43%, 38.82%);--green-800: hsl(123, 46.2%, 33.53%);--green-900: hsl(124, 55.37%, 23.73%);--green-a100: hsl(136, 77.22%, 84.51%);--green-a200: hsl(150, 81.82%, 67.65%);--green-a400: hsl(150, 100%, 45.1%);--green-a700: hsl(144, 100%, 39.22%);--light-green-50: hsl(88, 51.72%, 94.31%);--light-green-100: hsl(87, 50.68%, 85.69%);--light-green-200: hsl(88, 50%, 76.47%);--light-green-300: hsl(87, 50%, 67.06%);--light-green-400: hsl(87, 50.24%, 59.8%);--light-green-500: hsl(87, 50.21%, 52.75%);--light-green-600: hsl(89, 46.12%, 48.04%);--light-green-700: hsl(92, 47.91%, 42.16%);--light-green-800: hsl(95, 49.46%, 36.47%);--light-green-900: hsl(103, 55.56%, 26.47%);--light-green-a100: hsl(87, 100%, 78.24%);--light-green-a200: hsl(87, 100%, 67.45%);--light-green-a400: hsl(92, 100%, 50.59%);--light-green-a700: hsl(96, 81.15%, 47.84%);--lime-50: hsl(65, 71.43%, 94.51%);--lime-100: hsl(64, 69.01%, 86.08%);--lime-200: hsl(65, 70.69%, 77.25%);--lime-300: hsl(65, 70.37%, 68.24%);--lime-400: hsl(65, 69.7%, 61.18%);--lime-500: hsl(65, 69.96%, 54.31%);--lime-600: hsl(63, 59.68%, 49.61%);--lime-700: hsl(62, 61.43%, 43.73%);--lime-800: hsl(59, 62.89%, 38.04%);--lime-900: hsl(53, 69.93%, 30%);--lime-a100: hsl(65, 100%, 75.29%);--lime-a200: hsl(65, 100%, 62.75%);--lime-a400: hsl(73, 100%, 50%);--lime-a700: hsl(75, 100%, 45.88%);--yellow-50: hsl(55, 100%, 95.29%);--yellow-100: hsl(53, 100%, 88.43%);--yellow-200: hsl(53, 100%, 80.78%);--yellow-300: hsl(53, 100%, 73.14%);--yellow-400: hsl(53, 100%, 67.25%);--yellow-500: hsl(53, 100%, 61.57%);--yellow-600: hsl(48, 98.04%, 60%);--yellow-700: hsl(42, 96.26%, 58.04%);--yellow-800: hsl(37, 94.64%, 56.08%);--yellow-900: hsl(28, 91.74%, 52.55%);--yellow-a100: hsl(60, 100%, 77.65%);--yellow-a200: hsl(60, 100%, 50%);--yellow-a400: hsl(55, 100%, 50%);--yellow-a700: hsl(50, 100%, 50%);--amber-50: hsl(46, 100%, 94.12%);--amber-100: hsl(45, 100%, 85.1%);--amber-200: hsl(45, 100%, 75.49%);--amber-300: hsl(45, 100%, 65.49%);--amber-400: hsl(45, 100%, 57.84%);--amber-500: hsl(45, 100%, 51.37%);--amber-600: hsl(42, 100%, 50%);--amber-700: hsl(37, 100%, 50%);--amber-800: hsl(33, 100%, 50%);--amber-900: hsl(26, 100%, 50%);--amber-a100: hsl(47, 100%, 74.9%);--amber-a200: hsl(47, 100%, 62.55%);--amber-a400: hsl(46, 100%, 50%);--amber-a700: hsl(40, 100%, 50%);--orange-50: hsl(36, 100%, 93.92%);--orange-100: hsl(35, 100%, 84.9%);--orange-200: hsl(35, 100%, 75.1%);--orange-300: hsl(35, 100%, 65.1%);--orange-400: hsl(35, 100%, 57.45%);--orange-500: hsl(35, 100%, 50%);--orange-600: hsl(33, 100%, 49.22%);--orange-700: hsl(30, 100%, 48.04%);--orange-800: hsl(27, 100%, 46.86%);--orange-900: hsl(21, 100%, 45.1%);--orange-a100: hsl(38, 100%, 75.1%);--orange-a200: hsl(33, 100%, 62.55%);--orange-a400: hsl(34, 100%, 50%);--orange-a700: hsl(25, 100%, 50%);--deep-orange-50: hsl(5, 71.43%, 94.51%);--deep-orange-100: hsl(14, 100%, 86.86%);--deep-orange-200: hsl(14, 100%, 78.43%);--deep-orange-300: hsl(14, 100%, 69.8%);--deep-orange-400: hsl(14, 100%, 63.14%);--deep-orange-500: hsl(14, 100%, 56.67%);--deep-orange-600: hsl(14, 90.68%, 53.73%);--deep-orange-700: hsl(14, 80.39%, 50%);--deep-orange-800: hsl(14, 82.28%, 46.47%);--deep-orange-900: hsl(14, 88.18%, 39.8%);--deep-orange-a100: hsl(14, 100%, 75.1%);--deep-orange-a200: hsl(14, 100%, 62.55%);--deep-orange-a400: hsl(14, 100%, 50%);--deep-orange-a700: hsl(11, 100%, 43.33%);--brown-50: hsl(19, 15.79%, 92.55%);--brown-100: hsl(16, 15.79%, 81.37%);--brown-200: hsl(14, 15.19%, 69.02%);--brown-300: hsl(15, 15.32%, 56.47%);--brown-400: hsl(15, 17.5%, 47.06%);--brown-500: hsl(15, 25.39%, 37.84%);--brown-600: hsl(15, 25.29%, 34.12%);--brown-700: hsl(14, 25.68%, 29.02%);--brown-800: hsl(11, 25.81%, 24.31%);--brown-900: hsl(8, 27.84%, 19.02%);--gray-50: hsl(0, 0%, 98.04%);--gray-100: hsl(0, 0%, 96.08%);--gray-200: hsl(0, 0%, 93.33%);--gray-300: hsl(0, 0%, 87.84%);--gray-400: hsl(0, 0%, 74.12%);--gray-500: hsl(0, 0%, 61.96%);--gray-600: hsl(0, 0%, 45.88%);--gray-700: hsl(0, 0%, 38.04%);--gray-800: hsl(0, 0%, 25.88%);--gray-900: hsl(0, 0%, 12.94%);--blue-gray-50: hsl(204, 15.15%, 93.53%);--blue-gray-100: hsl(198, 15.66%, 83.73%);--blue-gray-200: hsl(199, 15.33%, 73.14%);--blue-gray-300: hsl(199, 15.63%, 62.35%);--blue-gray-400: hsl(200, 15.38%, 54.12%);--blue-gray-500: hsl(199, 18.3%, 46.08%);--blue-gray-600: hsl(198, 18.45%, 40.39%);--blue-gray-700: hsl(199, 18.34%, 33.14%);--blue-gray-800: hsl(199, 17.91%, 26.27%);--blue-gray-900: hsl(199, 19.15%, 18.43%);--blue-gray-1000: hsl(199, 20.93%, 8.43%)}:host{display:block;width:100%}.codex-wrapper{width:100%}.empty-state{color:var(--gray-600);font-style:italic;padding:16px}';var rp=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,ee=(e,t,o,s)=>{for(var i=s>1?void 0:s?ap(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&rp(t,o,i),i};let Y=class extends he{constructor(){super(...arguments),this.sessionString="",this.sessionData=null,this.sharingURL=null,this.conversationLabel="Session",this.conversationMaxWidth=null,this.conversationStyle="",this.shouldRenderMarkdown=!1,this.isShowingMetadata=!1,this.focusModeAuthor=[],this.focusModeRecipient=[],this.focusModeContentType=[],this.disableMarkdownButton=!1,this.disableTranslationButton=!1,this.disableShareButton=!1,this.disableMetadataButton=!1,this.disableMessageMetadata=!1,this.disableConversationName=!1,this.disablePreferenceButton=!1,this.disableImagePreviewWindow=!1,this.disableTokenWindow=!1,this.disableEditingModeSaveButton=!1,this.disableConversationIDCopyButton=!1,this.disableDownloadConvoButtonTooltip="",this.disableCopyConvoButtonTooltip="",this.theme="light",this.conversation=null,this.parseError=null}parseSessionString(e){const t=e.split(`
`).map(s=>s.trim()).filter(s=>s!==""),o=[];for(const s of t)try{o.push(JSON.parse(s))}catch{}return o}refreshConversationFromSession(){const t=Array.isArray(this.sessionData)&&this.sessionData.length>0?this.sessionData??[]:this.sessionString!==""?this.parseSessionString(this.sessionString):[],o=$a(t);if(!o){this.conversation=null,this.parseError=t.length===0?"No Codex session data found.":"Unsupported or malformed Codex session JSONL.";return}this.conversation=o.conversation,this.parseError=null}willUpdate(e){(e.has("sessionString")||e.has("sessionData"))&&this.refreshConversationFromSession()}render(){return this.conversation?d`
      <div class="codex-wrapper">
        <euphony-conversation
          .conversationData=${this.conversation}
          sharing-url=${te(this.sharingURL??void 0)}
          conversation-label=${this.conversationLabel}
          conversation-max-width=${te(this.conversationMaxWidth??void 0)}
          ?should-render-markdown=${this.shouldRenderMarkdown}
          ?is-showing-metadata=${this.isShowingMetadata}
          .focusModeAuthor=${this.focusModeAuthor}
          .focusModeRecipient=${this.focusModeRecipient}
          .focusModeContentType=${this.focusModeContentType}
          ?disable-markdown-button=${this.disableMarkdownButton}
          ?disable-translation-button=${this.disableTranslationButton}
          ?disable-share-button=${this.disableShareButton}
          ?disable-metadata-button=${this.disableMetadataButton}
          ?disable-message-metadata=${this.disableMessageMetadata}
          ?disable-conversation-name=${this.disableConversationName}
          ?disable-preference-button=${this.disablePreferenceButton}
          ?disable-image-preview-window=${this.disableImagePreviewWindow}
          ?disable-token-window=${this.disableTokenWindow}
          ?disable-editing-mode-save-button=${this.disableEditingModeSaveButton}
          ?disable-conversation-id-copy-button=${this.disableConversationIDCopyButton}
          disable-download-convo-button-tooltip=${te(this.disableDownloadConvoButtonTooltip||void 0)}
          disable-copy-convo-button-tooltip=${te(this.disableCopyConvoButtonTooltip||void 0)}
          theme=${this.theme}
          style=${this.conversationStyle}
        ></euphony-conversation>
      </div>
    `:d`
        <div class="empty-state">
          ${this.parseError??"No Codex session to display."}
        </div>
      `}preferenceWindowMessageLabelChanged(e){this.conversationComponent?.preferenceWindowMessageLabelChanged(e)}preferenceWindowFocusModeSettingsChanged(e){this.conversationComponent?.preferenceWindowFocusModeSettingsChanged(e)}expandBlockContents(){this.conversationComponent?.expandBlockContents()}collapseBlockContents(){this.conversationComponent?.collapseBlockContents()}translationButtonClicked(){this.conversationComponent?.translationButtonClicked()}};Y.styles=[Z`
      ${ie(np)}
    `];ee([h({type:String,attribute:"session-string"})],Y.prototype,"sessionString",2);ee([h({attribute:!1})],Y.prototype,"sessionData",2);ee([h({type:String,attribute:"sharing-url"})],Y.prototype,"sharingURL",2);ee([h({type:String,attribute:"conversation-label"})],Y.prototype,"conversationLabel",2);ee([h({type:String,attribute:"conversation-max-width"})],Y.prototype,"conversationMaxWidth",2);ee([h({type:String,attribute:"conversation-style"})],Y.prototype,"conversationStyle",2);ee([h({type:Boolean,attribute:"should-render-markdown"})],Y.prototype,"shouldRenderMarkdown",2);ee([h({type:Boolean,attribute:"is-showing-metadata"})],Y.prototype,"isShowingMetadata",2);ee([h({type:Array,attribute:"focus-mode-author"})],Y.prototype,"focusModeAuthor",2);ee([h({type:Array,attribute:"focus-mode-recipient"})],Y.prototype,"focusModeRecipient",2);ee([h({type:Array,attribute:"focus-mode-content-type"})],Y.prototype,"focusModeContentType",2);ee([h({type:Boolean,attribute:"disable-markdown-button"})],Y.prototype,"disableMarkdownButton",2);ee([h({type:Boolean,attribute:"disable-translation-button"})],Y.prototype,"disableTranslationButton",2);ee([h({type:Boolean,attribute:"disable-share-button"})],Y.prototype,"disableShareButton",2);ee([h({type:Boolean,attribute:"disable-metadata-button"})],Y.prototype,"disableMetadataButton",2);ee([h({type:Boolean,attribute:"disable-message-metadata"})],Y.prototype,"disableMessageMetadata",2);ee([h({type:Boolean,attribute:"disable-conversation-name"})],Y.prototype,"disableConversationName",2);ee([h({type:Boolean,attribute:"disable-preference-button"})],Y.prototype,"disablePreferenceButton",2);ee([h({type:Boolean,attribute:"disable-image-preview-window"})],Y.prototype,"disableImagePreviewWindow",2);ee([h({type:Boolean,attribute:"disable-token-window"})],Y.prototype,"disableTokenWindow",2);ee([h({type:Boolean,attribute:"disable-editing-mode-save-button"})],Y.prototype,"disableEditingModeSaveButton",2);ee([h({type:Boolean,attribute:"disable-conversation-id-copy-button"})],Y.prototype,"disableConversationIDCopyButton",2);ee([h({type:String,attribute:"disable-download-convo-button-tooltip"})],Y.prototype,"disableDownloadConvoButtonTooltip",2);ee([h({type:String,attribute:"disable-copy-convo-button-tooltip"})],Y.prototype,"disableCopyConvoButtonTooltip",2);ee([h({type:String,attribute:"theme"})],Y.prototype,"theme",2);ee([M()],Y.prototype,"conversation",2);ee([M()],Y.prototype,"parseError",2);ee([W("euphony-conversation")],Y.prototype,"conversationComponent",2);Y=ee([ye("euphony-codex")],Y);const lp="@keyframes fade-in{0%{opacity:0}to{opacity:1}}.confirm-dialog{--padding-v: 18px;--padding-h: 20px;display:none;flex-direction:column;justify-content:flex-start;align-items:flex-start;max-width:500px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;padding:0;border:none}.confirm-dialog[open]{border-radius:8px;border:none;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;pointer-events:all}.confirm-dialog[open]::backdrop{background-color:#0000008c;animation:fade-in .3s}.header{padding:var(--padding-v) var(--padding-h) 0px var(--padding-h);margin:0;line-height:1;font-size:var(--font-u3);width:100%;display:flex;flex-flow:row;align-items:center;box-sizing:border-box}.separator{display:flex;width:calc(100% - 40px);height:3px;border-radius:5px;background-color:var(--gray-200)}.content{display:flex;flex-flow:column;gap:12px;padding:16px var(--padding-h)}.content .skip-bar{color:var(--gray-800)}.button-block{display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;gap:10px;width:100%;padding:0px var(--padding-h) var(--padding-v) var(--padding-h)}.button-block button{all:unset;cursor:pointer;background-color:var(--gray-200);padding:3px 8px;border-radius:8px;display:flex;flex-grow:0;transition:background-color .15s ease-in-out}.button-block button:hover{background-color:var(--gray-300)}.button-block button:active{background-color:var(--gray-400)}.button-block a{color:currentColor;font-style:normal;text-decoration:none}";var cp=Object.defineProperty,dp=Object.getOwnPropertyDescriptor,Io=(e,t,o,s)=>{for(var i=s>1?void 0:s?dp(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&cp(t,o,i),i};let Bt=class extends he{constructor(){super(),this.header="Delete Item",this.message="Are you sure you want to delete this item? This action cannot be undone.",this.yesButtonText="Delete",this.actionKey="deletion",this.initData=async()=>{},this.confirmAction=()=>{},this.cancelAction=()=>{}}firstUpdated(){window.setTimeout(()=>{},1e3)}willUpdate(e){}show(e,t,o){this.header=e.header,this.message=e.message,this.yesButtonText=e.yesButtonText,this.actionKey=e.actionKey,this.confirmAction=t,o===void 0?this.cancelAction=()=>{}:this.cancelAction=o,localStorage.getItem(`<skip-confirm>${this.actionKey}`)==="true"?this.confirmAction():this.dialogElement&&this.dialogElement.showModal()}dialogClicked(e){e.target===this.dialogElement&&this.dialogElement.close()}cancelClicked(e){e.stopPropagation(),this.dialogElement&&(this.dialogElement.close(),this.cancelAction())}confirmClicked(e){if(e.stopPropagation(),this.dialogElement){if(this.dialogElement.querySelector("#checkbox-skip-confirmation")?.checked){const o=`<skip-confirm>${this.actionKey}`;localStorage.setItem(o,"true")}this.confirmAction(),this.dialogElement.close()}}render(){return d`
      <dialog
        class="confirm-dialog"
        @click=${e=>{this.dialogClicked(e)}}
      >
        <div class="header">
          <div class="header-name">${this.header}</div>
        </div>

        <div class="content">
          <div class="message">${this.message}</div>
          <div class="skip-bar">
            <input
              type="checkbox"
              id="checkbox-skip-confirmation"
              name="checkbox-skip-confirmation"
            />
            <label for="checkbox-skip-confirmation"
              >Don't ask me again about this action</label
            >
          </div>
        </div>

        <div class="button-block">
          <button
            class="cancel-button"
            @click=${e=>{this.cancelClicked(e)}}
          >
            Cancel
          </button>
          <button
            class="confirm-button"
            @click=${e=>{this.confirmClicked(e)}}
          >
            ${this.yesButtonText}
          </button>
        </div>
      </dialog>
    `}};Bt.styles=[Z`
      ${ie(lp)}
    `];Io([W("dialog")],Bt.prototype,"dialogElement",2);Io([M()],Bt.prototype,"header",2);Io([M()],Bt.prototype,"message",2);Io([M()],Bt.prototype,"yesButtonText",2);Bt=Io([ye("nightjar-confirm-dialog")],Bt);const hp="@keyframes fade-in{0%{opacity:0}to{opacity:1}}.input-dialog{--padding-v: 18px;--padding-h: 20px;display:none;flex-direction:column;justify-content:flex-start;align-items:flex-start;max-width:500px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;padding:0;border:none}.input-dialog[open]{border-radius:8px;border:none;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;pointer-events:all}.input-dialog[open]::backdrop{background-color:#0000008c;animation:fade-in .3s}.header{padding:var(--padding-v) var(--padding-h) 0px var(--padding-h);margin:0;line-height:1;font-size:var(--font-u3);width:100%;display:flex;flex-flow:row;align-items:center;box-sizing:border-box}.separator{display:flex;width:calc(100% - 40px);height:3px;border-radius:5px;background-color:var(--gray-200)}.content{display:flex;flex-flow:column;gap:12px;padding:16px var(--padding-h)}.content .skip-bar{color:var(--gray-800)}.footer-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:0px var(--padding-h) var(--padding-v) var(--padding-h);box-sizing:border-box}.footer-container .message[is-hidden]{display:none}.footer-container .message.error-message{color:var(--red-800)}.button-block{display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;flex:1 0 auto;gap:10px}.button-block button{all:unset;cursor:pointer;background-color:var(--gray-200);padding:3px 8px;border-radius:8px;display:flex;flex-grow:0;transition:background-color .15s ease-in-out}.button-block button:hover{background-color:var(--gray-300)}.button-block button:active{background-color:var(--gray-400)}.button-block a{color:currentColor;font-style:normal;text-decoration:none}";var pp=Object.defineProperty,up=Object.getOwnPropertyDescriptor,Et=(e,t,o,s)=>{for(var i=s>1?void 0:s?up(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&pp(t,o,i),i};let at=class extends he{constructor(){super(),this.header="Delete Item",this.message="Are you sure you want to delete this item? This action cannot be undone.",this.yesButtonText="Delete",this.errorMessage="Invalid input, please try again.",this.isError=!1,this.isLoading=!1,this.inputStorageKey="deletion",this.initData=async()=>{},this.confirmAction=e=>{},this.cancelAction=()=>{},this.inputValidate=()=>!0}firstUpdated(){window.setTimeout(()=>{},1e3)}willUpdate(e){}show(e,t,o,s){this.header=e.header,this.message=e.message,this.yesButtonText=e.yesButtonText,this.confirmAction=t,this.errorMessage=e.errorMessage||this.errorMessage,o===void 0?this.cancelAction=()=>{}:this.cancelAction=o,s===void 0?this.inputValidate=()=>!0:this.inputValidate=s,this.dialogElement&&this.dialogElement.showModal()}dialogClicked(e){e.target===this.dialogElement&&this.dialogElement.close()}cancelClicked(e){e.stopPropagation(),this.dialogElement&&(this.dialogElement.close(),this.cancelAction())}async confirmClicked(e){if(e.stopPropagation(),this.dialogElement){const t=this.dialogElement.querySelector("#input-element");this.isLoading=!0,this.isError=!1;const o=t?.value||"";await this.inputValidate(o)?(this.isLoading=!1,this.confirmAction(o),this.dialogElement.close()):(this.isLoading=!1,this.isError=!0)}}render(){return d`
      <dialog
        class="input-dialog"
        @click=${e=>{this.dialogClicked(e)}}
      >
        <div class="header">
          <div class="header-name">${this.header}</div>
        </div>

        <div class="content">
          <div class="message">${this.message}</div>

          <div class="input-container">
            <sl-input
              id="input-element"
              size="medium"
              placeholder="OpenAI API Key"
              clearable
              spellcheck="false"
            >
            </sl-input>
          </div>
        </div>

        <div class="footer-container">
          <div class="message validating-message" ?is-hidden=${!this.isLoading}>
            Validating...
          </div>
          <div class="message error-message" ?is-hidden=${!this.isError}>
            ${this.errorMessage}
          </div>

          <div class="button-block">
            <button
              class="cancel-button"
              @click=${e=>{this.cancelClicked(e)}}
            >
              Cancel
            </button>
            <button
              class="confirm-button"
              @click=${e=>{this.confirmClicked(e)}}
            >
              ${this.yesButtonText}
            </button>
          </div>
        </div>
      </dialog>
    `}};at.styles=[Z`
      ${ie(hp)}
    `];Et([W("dialog")],at.prototype,"dialogElement",2);Et([M()],at.prototype,"header",2);Et([M()],at.prototype,"message",2);Et([M()],at.prototype,"yesButtonText",2);Et([M()],at.prototype,"errorMessage",2);Et([M()],at.prototype,"isError",2);Et([M()],at.prototype,"isLoading",2);at=Et([ye("nightjar-input-dialog")],at);const gp=".menu{height:100%;width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:5px;border-radius:5px;padding:6px 0;box-sizing:border-box;font-size:var(--font-d1);background-color:#fff;box-shadow:0 1px 5px #0000001a,0 1px 3px #0000001a,0 0 1px #0000001a}button{all:unset}button{width:100%;padding:10px 16px;box-sizing:border-box;white-space:nowrap;display:flex;align-items:center;gap:10px}button:hover{background-color:color-mix(in lab,var(--gray-100),white 5%)}button:active{background-color:color-mix(in lab,var(--gray-200),white 20%)}button .svg-icon{position:relative;top:.5px;width:.9em;height:.9em}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}";var fp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,Ki=(e,t,o,s)=>{for(var i=s>1?void 0:s?mp(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&fp(t,o,i),i};let Ao=class extends he{constructor(){super(),this.menuItems=[],this.isHidden=!0,this.timer=null}willUpdate(e){}async initData(){}show(){this.isHidden&&(this.isHidden=!1)}hide(){if(this.isHidden)return;if(this.shadowRoot===null)throw Error("Shadow root is null");const e=this.shadowRoot.querySelector(".menu");if(!e)throw Error("Menu element not found");const t=e.animate({opacity:[1,0]},{duration:200,easing:"ease-in-out"});t.onfinish=()=>{this.isHidden=!0}}menuItemClicked(e,t){e.stopPropagation(),e.preventDefault();const o=new CustomEvent("menu-item-clicked",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(o)}render(){let e=d``;for(const[t,o]of this.menuItems.entries()){const s=o.name,i=o.icon;e=d`${e}<button
          class="menu-item"
          @click=${n=>{this.menuItemClicked(n,s)}}
        >
          <span class="svg-icon">${F(i)}</span>
          ${s}
        </button>`}return d` <div class="menu">${e}</div> `}};Ao.styles=[Z`
      ${ie(gp)}
    `];Ki([h({type:Array,attribute:!1})],Ao.prototype,"menuItems",2);Ki([M()],Ao.prototype,"isHidden",2);Ao=Ki([ye("nightjar-menu")],Ao);const bp='@keyframes fade-in{0%{opacity:0}to{opacity:1}}.back-drop{position:absolute;z-index:49;top:0;left:0;width:100%;height:100%;background-color:#0000001a;display:none;pointer-events:none}.back-drop[open]{display:flex;animation:fade-in .3s}.search-window{--padding-v: 14px;--padding-h: 20px;--monospace-font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:50;display:none;flex-direction:column;justify-content:flex-start;align-items:flex-start;background-color:#fff;max-width:700px;box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f;padding:0;border:none}.search-window[open]{border-radius:8px;border:none;display:flex;flex-direction:column;align-items:center;gap:0;padding:0;pointer-events:all}.header{padding:var(--padding-v) var(--padding-h) var(--padding-v) var(--padding-h);margin:0;line-height:1;font-size:var(--font-u3);width:100%;cursor:move;border-bottom:1px solid var(--gray-300);display:flex;flex-flow:row;align-items:center;box-sizing:border-box}.separator{display:flex;width:calc(100% - 40px);height:3px;border-radius:5px;background-color:var(--gray-200)}.content{display:flex;flex-flow:column;padding:16px var(--padding-h)}.content .skip-bar{color:var(--gray-800)}.content a{color:var(--gray-700);text-decoration:none;border-bottom:1px solid var(--gray-500)}.content a:focus-visible{outline:none}.footer{display:flex;flex-flow:row nowrap;align-items:flex-start;justify-content:space-between;box-sizing:border-box;padding:0px var(--padding-h) var(--padding-v) var(--padding-h);width:100%}.left-block{flex:1 1 auto}.left-block .error-message{color:var(--pink-700);font-size:var(--font-d1);white-space:pre-line}.left-block .error-message[no-show]{display:none}.button-block{display:flex;flex-direction:row;gap:10px;height:min-content}.button-block button{all:unset;cursor:pointer;background-color:var(--gray-200);padding:3px 8px;border-radius:8px;display:flex;flex-grow:0;transition:background-color .15s ease-in-out}.button-block button:hover{background-color:var(--gray-300)}.button-block button:active{background-color:var(--gray-400)}.button-block button.confirm-button{color:#fff;background-color:var(--blue-500)}.button-block button.confirm-button:hover{background-color:var(--blue-600)}.button-block button.confirm-button:active{background-color:var(--blue-700)}.button-block button.confirm-button[is-searching]{cursor:no-drop}.button-block button.confirm-button[is-searching]:hover,.button-block button.confirm-button[is-searching]:active{background-color:var(--blue-500)}.button-block a{color:currentColor;font-style:normal;text-decoration:none}.query-example{display:flex;flex-direction:column;font-size:var(--font-d2);margin:10px 0 15px;border-radius:5px;gap:5px;padding:10px;background-color:var(--gray-100)}.query-example .example-label{display:flex;width:min-content;color:var(--gray-800);font-size:var(--font-d3);font-variant:small-caps}.example-list{display:flex;flex-direction:column;list-style-type:circle;line-height:1.2;gap:10px;padding:0;margin:0}.example-list .example-item{display:flex;flex-direction:column;gap:5px}.example-list li{position:relative;padding-left:16px}.example-list li:before{content:">";position:absolute;left:0;top:0;color:var(--gray-800);font-size:14px;line-height:1}.example-list pre{margin:0;padding:0;color:var(--blue-800);font-family:var(--monospace-font-family)}textarea{--focus-border-color: var(--blue-200);border:1px solid var(--gray-300);border-radius:5px;padding:8px;width:100%;line-height:1.5;font-size:var(--font-d1);box-sizing:border-box;font-family:var(--monospace-font-family);resize:vertical}textarea:focus{outline:2px solid var(--focus-border-color);border:1px solid var(--focus-border-color)}textarea.prompt-input{height:150px}textarea.prompt-description{height:80px}textarea::placeholder{color:var(--gray-600)}@keyframes scaleY{0%,80%,to{box-shadow:0 0;height:.8em}40%{box-shadow:0 -3px;height:1em}}.loader-container{position:relative;height:1em;flex-direction:row;align-items:center;justify-content:flex-start;display:none;pointer-events:none;transition:opacity .3s;--loader-color: var(--blue-700)}.loader-container[is-loading]{display:flex}.loader-container .loader-label{color:var(--loader-color);font-size:1em}.loader-container .loader{--bar-gap: 5px;--bar-height: 10px;--bar-width: 3px;--bar-color: color-mix(in lab, var(--loader-color) 50%, transparent 50%);position:relative;left:var(--bar-gap);top:1.5px;margin-left:5px;color:var(--bar-color);background:var(--bar-color);font-size:11px;animation:scaleY 1s infinite ease-in-out;width:var(--bar-width);height:var(--bar-height);animation-delay:-.16s}.loader-container .loader:before,.loader-container .loader:after{content:"";position:absolute;top:0;left:var(--bar-gap);background:var(--bar-color);width:var(--bar-width);height:var(--bar-height);animation:scaleY 1s infinite ease-in-out}.loader-container .loader:before{left:calc(-1 * var(--bar-gap));animation-delay:-.32s}';var vp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,ao=(e,t,o,s)=>{for(var i=s>1?void 0:s?yp(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&vp(t,o,i),i};const wp=[{query:"[?metadata.adversarial==`false`]",description:'Find conversations whose ["metadata"]["adversarial"] is False'},{query:"[?contains(metadata.monster_meta.dataset_id, 'v7')]",description:`Find conversations whose ["metadata"]["monster_meta"]["dataset_id"] contains substring 'v7'`},{query:"[?metadata.count>`8` && contains(metadata.labels, 'K4')]",description:'Find conversations whose ["metadata"]["count"] is greater than 8 and ["metadata"]["labels"] list contains item "K4"'},{query:"[?messages[0].author.role=='assistant']",description:"Find conversations whose first message is from the assistant"}];let _t=class extends he{constructor(){super(),this.showErrorMessage=!1,this.errorMessage=null,this.isOpen=!1,this.isSearching=!1,this.initData=async()=>{}}firstUpdated(){window.setTimeout(()=>{},1e3)}willUpdate(e){}show(){this.isOpen=!0}close(){this.isOpen=!1}searchSucceeded(){this.showErrorMessage=!1,this.isSearching=!1,this.errorMessage=null,this.close();const e=this.shadowRoot?.querySelector("textarea");e&&(e.value="")}searchFailed(e){this.errorMessage=e,this.showErrorMessage=!0,this.isSearching=!1}isQueryValid(e){return/^\[\?.*\]$/.exec(e)!==null}cancelClicked(e){e.stopPropagation(),!this.isSearching&&this.close()}confirmClicked(e){if(e.stopPropagation(),this.isSearching)return;const t=this.shadowRoot?.querySelector("textarea");if(!t)throw new Error("Text area not found");const o=t.value;if(!this.isQueryValid(o)){this.errorMessage="Make sure your query is formatted as [?expression]",this.showErrorMessage=!0;return}this.showErrorMessage=!1,this.isSearching=!0;const i=new CustomEvent("search-query-submitted",{bubbles:!0,composed:!0,detail:o});this.dispatchEvent(i)}onDragStart(e){if(e.preventDefault(),!this.windowElement)throw new Error("Window element not found");if(this.windowElement.style.top.includes("%")){const l=this.windowElement.clientHeight,u=this.windowElement.clientWidth,f=(window.innerHeight-l)/2,k=(window.innerWidth-u)/2;this.windowElement.style.top=`${f}px`,this.windowElement.style.left=`${k}px`,this.windowElement.style.transform=""}const s=e.clientX,i=e.clientY,n=this.windowElement.offsetTop,r=this.windowElement.offsetLeft,a=l=>{const u=l.clientX-s,f=l.clientY-i;this.windowElement.style.top=`${n+f}px`,this.windowElement.style.left=`${r+u}px`},c=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",c)}render(){let e=d``;for(const t of wp)e=d`${e}
        <li class="example-item">
          <div class="example-description">${t.description}</div>
          <pre class="example-query">${t.query}</pre>
        </li> `;return d`
      <div class="back-drop" ?open=${this.isOpen}></div>
      <div class="search-window" ?open=${this.isOpen}>
        <div
          class="header"
          @mousedown=${t=>{this.onDragStart(t)}}
        >
          <div class="header-name">Filter data</div>
        </div>

        <div class="content">
          <div class="message">
            Use
            <a href="https://jmespath.org/tutorial.html" target="_blank"
              >JMESPath query</a
            >
            to filter conversation data
          </div>

          <div class="query-example">
            <div class="example-label">Examples</div>
            <ul class="example-list">
              ${e}
            </ul>
          </div>

          <textarea
            class="query-input"
            rows="3"
            spellcheck="false"
            placeholder="[?metadata.adversarial==\`false\`]"
            @keydown=${t=>{t.stopPropagation()}}
          ></textarea>
        </div>

        <div class="footer">
          <div class="left-block">
            <!-- Important to avoid new line and whitespace here -->
            <!-- prettier-ignore -->
            <div class="error-message" ?no-show=${!this.showErrorMessage}>${this.errorMessage}</div>

            <div class="loader-container" ?is-loading=${this.isSearching}>
              <div class="loader-label">Filtering</div>
              <div class="loader"></div>
            </div>
          </div>

          <div class="button-block">
            <button
              class="cancel-button"
              @click=${t=>{this.cancelClicked(t)}}
            >
              Cancel
            </button>
            <button
              class="confirm-button"
              ?is-searching=${this.isSearching}
              @click=${t=>{this.confirmClicked(t)}}
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    `}};_t.styles=[Z`
      ${ie(bp)}
    `];ao([W("div.search-window")],_t.prototype,"windowElement",2);ao([M()],_t.prototype,"showErrorMessage",2);ao([M()],_t.prototype,"errorMessage",2);ao([M()],_t.prototype,"isOpen",2);ao([M()],_t.prototype,"isSearching",2);_t=ao([ye("euphony-search-window")],_t);const xp=".toast{height:100%;max-width:400px;display:grid;gap:10px;grid-template-columns:1em auto 1em;border-radius:5px;padding:5px 12px;box-sizing:border-box;font-size:var(--font-d2);background-color:var(--green-50);border:1px solid color-mix(in lab,var(--green-50) 100%,var(--gray-500) 20%);color:var(--green-800);box-shadow:0 1px 2px #0000000d,0 0 5px #0000000d;animation:toastPop .1s ease-in-out forwards}.toast[toast-type=warning]{background-color:var(--orange-50);border:1px solid color-mix(in lab,var(--orange-50) 100%,var(--gray-500) 20%);color:var(--orange-800)}.toast[toast-type=error]{background-color:var(--red-50);border:1px solid color-mix(in lab,var(--red-50) 100%,var(--gray-500) 20%);color:var(--red-800)}.toast[is-hidden]{display:none}@keyframes toastPop{0%{transform:scale(.8);opacity:0}90%{transform:scale(1.1);opacity:.9}to{transform:scale(1);opacity:1}}.svg-icon{display:flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center;position:relative;top:3px}.svg-icon svg{fill:currentColor;width:100%;height:100%}.cross-icon{color:var(--gray-800);width:10px;height:10px;top:5px;cursor:pointer}.cross-icon:hover{color:var(--gray-600)}.cross-icon:active{color:var(--gray-700)}.message{min-width:0px;line-height:1.2;white-space:pre-wrap;word-break:break-word}";var kp=Object.defineProperty,Cp=Object.getOwnPropertyDescriptor,Oo=(e,t,o,s)=>{for(var i=s>1?void 0:s?Cp(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&kp(t,o,i),i};const Tp=d`<svg
  width="100%"
  height="100%"
  viewBox="0 0 80 80"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
  <g id="icon-cross-circle-solid">
    <path
      d="M39.904,79.15C18.42,79.15 0.5,61.279 0.5,39.746C0.5,18.213 18.371,0.342 39.855,0.342C61.389,0.342 79.357,18.213 79.357,39.746C79.357,61.279 61.437,79.15 39.904,79.15ZM27.062,56.25C28.088,56.25 29.016,55.908 29.65,55.225L39.904,44.873L50.207,55.225C50.842,55.908 51.77,56.25 52.746,56.25C54.797,56.25 56.408,54.639 56.408,52.588C56.408,51.611 56.066,50.732 55.334,50.049L45.031,39.795L55.383,29.443C56.164,28.711 56.457,27.881 56.457,26.904C56.457,24.902 54.846,23.34 52.844,23.34C51.916,23.34 51.135,23.682 50.402,24.365L39.904,34.766L29.553,24.414C28.869,23.779 28.088,23.438 27.062,23.438C25.109,23.438 23.498,24.951 23.498,27.002C23.498,27.93 23.889,28.809 24.523,29.492L34.826,39.795L24.523,50.098C23.889,50.781 23.498,51.66 23.498,52.588C23.498,54.639 25.109,56.25 27.062,56.25Z"
    />
  </g>
</svg> `,Mp=d`<svg
  width="100%"
  height="100%"
  viewBox="0 0 80 80"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
  <g id="icon-check-circle-solid">
    <path
      d="M39.618,79.15C18.134,79.15 0.214,61.279 0.214,39.746C0.214,18.213 18.085,0.342 39.569,0.342C61.102,0.342 79.071,18.213 79.071,39.746C79.071,61.279 61.151,79.15 39.618,79.15ZM35.321,58.545C36.786,58.545 38.056,57.861 38.983,56.396L56.366,28.857C56.952,27.978 57.489,26.953 57.489,25.977C57.489,23.877 55.731,22.607 53.778,22.607C52.606,22.607 51.483,23.291 50.702,24.658L35.126,49.854L28.095,40.478C27.02,39.014 26.044,38.623 24.823,38.623C22.772,38.623 21.308,40.234 21.308,42.236C21.308,43.213 21.649,44.189 22.333,45.019L31.415,56.396C32.587,57.959 33.808,58.545 35.321,58.545Z"
    />
  </g>
</svg> `,Sp=d`<svg
  width="100%"
  height="100%"
  viewBox="0 0 80 80"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  xmlns:serif="http://www.serif.com/"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
  <g id="icon-warning-circle-solid">
    <path
      d="M40.391,79.15C18.907,79.15 0.987,61.279 0.987,39.746C0.987,18.213 18.858,0.342 40.343,0.342C61.876,0.342 79.845,18.213 79.845,39.746C79.845,61.279 61.925,79.15 40.391,79.15ZM40.391,46.973C42.589,46.973 43.809,45.752 43.858,43.457L44.444,22.705C44.493,20.41 42.735,18.701 40.343,18.701C37.95,18.701 36.241,20.361 36.29,22.656L36.876,43.457C36.925,45.703 38.145,46.973 40.391,46.973ZM40.391,60.205C42.882,60.205 45.079,58.301 45.079,55.762C45.079,53.223 42.931,51.269 40.391,51.269C37.901,51.269 35.753,53.271 35.753,55.762C35.753,58.252 37.95,60.205 40.391,60.205Z"
    />
  </g>
</svg>`,$p=d`<svg
  width="100%"
  height="100%"
  viewBox="0 0 62 62"
  version="1.1"
  xml:space="preserve"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
  <g id="icon-cross">
    <path
      d="M1.299,60.421C2.861,61.935 5.4,61.935 6.914,60.421L30.84,36.447L54.814,60.421C56.279,61.935 58.867,61.935 60.381,60.421C61.894,58.859 61.894,56.32 60.381,54.855L36.406,30.88L60.381,6.955C61.894,5.441 61.943,2.853 60.381,1.339C58.818,-0.125 56.279,-0.125 54.814,1.339L30.84,25.314L6.914,1.339C5.4,-0.125 2.812,-0.174 1.299,1.339C-0.166,2.902 -0.166,5.441 1.299,6.955L25.273,30.88L1.299,54.855C-0.166,56.32 -0.215,58.908 1.299,60.421Z"
      style="fill-rule:nonzero;"
    />
  </g>
</svg> `;let Ft=class extends he{constructor(){super(),this.type="error",this.message="Title cannot be empty",this.duration=6e3,this.isHidden=!0,this.timer=null}willUpdate(e){}async initData(){}show(){this.isHidden&&(this.isHidden=!1),this.duration>0&&(this.timer!==null&&clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.hide()},this.duration))}hide(){if(this.isHidden)return;if(this.shadowRoot===null)throw Error("Shadow root is null");const e=this.shadowRoot.querySelector(".toast");if(!e)throw Error("Toast element not found");const t=e.animate({opacity:[1,0]},{duration:200,easing:"ease-in-out"});t.onfinish=()=>{this.isHidden=!0}}render(){let e=Mp;return this.type==="warning"?e=Sp:this.type==="error"&&(e=Tp),d`
      <div class="toast" toast-type=${this.type} ?is-hidden=${this.isHidden}>
        <div class="svg-icon">${e}</div>
        <!-- prettier-ignore -->
        <div class="message">${this.message}<slot name="message-content"></slot></div>
        <div
          class="svg-icon cross-icon"
          @click=${()=>{this.hide();const t=new CustomEvent("close-button-clicked",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}
        >
          ${$p}
        </div>
      </div>
    `}};Ft.styles=[Z`
      ${ie(xp)}
    `];Oo([h({type:String})],Ft.prototype,"type",2);Oo([h({type:String})],Ft.prototype,"message",2);Oo([h({type:Number})],Ft.prototype,"duration",2);Oo([M()],Ft.prototype,"isHidden",2);Ft=Oo([ye("nightjar-toast")],Ft);const _p='a{color:#0064c8;text-decoration:none}a:hover{text-decoration:underline}a:visited{color:#0050a0}label{display:block}input,button,select,textarea{font-family:inherit;font-size:inherit;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}button{color:#333;background-color:#f4f4f4;outline:none}button:disabled{color:#999}:root,:host{--shadow-border-light: 0px 0px 5px hsla(0, 0%, 0%, .1), 0px 0px 4px hsla(0, 0%, 0%, .07), 0px 0px 10px hsla(0, 0%, 0%, .07);--shadow-border-card: 0px 0px 6px hsla(0, 0%, 0%, .07);--shadow-border-large: 0 8px 24px hsla(212, 9%, 59%, .2);--ease-cubic-in-out: cubic-bezier(.645, .045, .355, 1);--border-radius: 5px;--container-h-padding: 12px;--container-v-padding: 10px;--font-d1: .9375rem;--font-d2: .875rem;--font-d3: .8125rem;--font-d4: .75rem;--font-d5: .6875rem;--font-d6: .625rem;--font-u1: 1.0625rem;--font-u2: 1.125rem;--font-u3: 1.1875rem;--font-u4: 1.25rem;--font-u5: 1.3125rem;--font-u6: 1.375rem;--font-family-monospace: ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--added-color: hsl(120, 37%, 89%);--replaced-color: hsl(208, 88%, 90%);--deleted--color: hsl(353, 100%, 93%);--red-50: hsl(350, 100%, 96.08%);--red-100: hsl(354, 100%, 90.2%);--red-200: hsl(0, 72.65%, 77.06%);--red-300: hsl(0, 68.67%, 67.45%);--red-400: hsl(1, 83.25%, 62.55%);--red-500: hsl(4, 89.62%, 58.43%);--red-600: hsl(1, 77.19%, 55.29%);--red-700: hsl(0, 65.08%, 50.59%);--red-800: hsl(0, 66.39%, 46.67%);--red-900: hsl(0, 73.46%, 41.37%);--red-a100: hsl(4, 100%, 75.1%);--red-a200: hsl(0, 100%, 66.08%);--red-a400: hsl(348, 100%, 54.51%);--red-a700: hsl(0, 100%, 41.76%);--pink-50: hsl(340, 80%, 94.12%);--pink-100: hsl(339, 81.33%, 85.29%);--pink-200: hsl(339, 82.11%, 75.88%);--pink-300: hsl(339, 82.56%, 66.27%);--pink-400: hsl(339, 81.9%, 58.82%);--pink-500: hsl(339, 82.19%, 51.57%);--pink-600: hsl(338, 77.78%, 47.65%);--pink-700: hsl(336, 77.98%, 42.75%);--pink-800: hsl(333, 79.27%, 37.84%);--pink-900: hsl(328, 81.33%, 29.41%);--pink-a100: hsl(339, 100%, 75.1%);--pink-a200: hsl(339, 100%, 62.55%);--pink-a400: hsl(338, 100%, 48.04%);--pink-a700: hsl(333, 84.11%, 41.96%);--purple-50: hsl(292, 44.44%, 92.94%);--purple-100: hsl(291, 46.07%, 82.55%);--purple-200: hsl(291, 46.94%, 71.18%);--purple-300: hsl(291, 46.6%, 59.61%);--purple-400: hsl(291, 46.61%, 50.78%);--purple-500: hsl(291, 63.72%, 42.16%);--purple-600: hsl(287, 65.05%, 40.39%);--purple-700: hsl(282, 67.88%, 37.84%);--purple-800: hsl(277, 70.17%, 35.49%);--purple-900: hsl(267, 75%, 31.37%);--purple-a100: hsl(291, 95.38%, 74.51%);--purple-a200: hsl(291, 95.9%, 61.76%);--purple-a400: hsl(291, 100%, 48.82%);--purple-a700: hsl(280, 100%, 50%);--deep-purple-50: hsl(264, 45.45%, 93.53%);--deep-purple-100: hsl(261, 45.68%, 84.12%);--deep-purple-200: hsl(261, 46.27%, 73.73%);--deep-purple-300: hsl(261, 46.81%, 63.14%);--deep-purple-400: hsl(261, 46.72%, 55.1%);--deep-purple-500: hsl(261, 51.87%, 47.25%);--deep-purple-600: hsl(259, 53.91%, 45.1%);--deep-purple-700: hsl(257, 57.75%, 41.76%);--deep-purple-800: hsl(254, 60.8%, 39.02%);--deep-purple-900: hsl(251, 68.79%, 33.92%);--deep-purple-a100: hsl(261, 100%, 76.67%);--deep-purple-a200: hsl(255, 100%, 65.1%);--deep-purple-a400: hsl(258, 100%, 56.08%);--deep-purple-a700: hsl(265, 100%, 45.88%);--indigo-50: hsl(231, 43.75%, 93.73%);--indigo-100: hsl(231, 45%, 84.31%);--indigo-200: hsl(230, 44.36%, 73.92%);--indigo-300: hsl(230, 44.09%, 63.53%);--indigo-400: hsl(230, 44.25%, 55.69%);--indigo-500: hsl(230, 48.36%, 47.84%);--indigo-600: hsl(231, 50%, 44.71%);--indigo-700: hsl(231, 53.62%, 40.59%);--indigo-800: hsl(232, 57.22%, 36.67%);--indigo-900: hsl(234, 65.79%, 29.8%);--indigo-a100: hsl(230, 100%, 77.45%);--indigo-a200: hsl(230, 98.84%, 66.08%);--indigo-a400: hsl(230, 98.97%, 61.76%);--indigo-a700: hsl(230, 99.04%, 59.22%);--blue-50: hsl(205, 86.67%, 94.12%);--blue-100: hsl(207, 88.89%, 85.88%);--blue-200: hsl(206, 89.74%, 77.06%);--blue-300: hsl(206, 89.02%, 67.84%);--blue-400: hsl(206, 89.95%, 60.98%);--blue-500: hsl(206, 89.74%, 54.12%);--blue-600: hsl(208, 79.28%, 50.78%);--blue-700: hsl(209, 78.72%, 46.08%);--blue-800: hsl(211, 80.28%, 41.76%);--blue-900: hsl(216, 85.06%, 34.12%);--blue-a100: hsl(217, 100%, 75.49%);--blue-a200: hsl(217, 100%, 63.33%);--blue-a400: hsl(217, 100%, 58.04%);--blue-a700: hsl(224, 100%, 58.04%);--light-blue-50: hsl(198, 93.55%, 93.92%);--light-blue-100: hsl(198, 92.41%, 84.51%);--light-blue-200: hsl(198, 92.37%, 74.31%);--light-blue-300: hsl(198, 91.3%, 63.92%);--light-blue-400: hsl(198, 91.93%, 56.27%);--light-blue-500: hsl(198, 97.57%, 48.43%);--light-blue-600: hsl(199, 97.41%, 45.49%);--light-blue-700: hsl(201, 98.1%, 41.37%);--light-blue-800: hsl(202, 97.91%, 37.45%);--light-blue-900: hsl(206, 98.72%, 30.59%);--light-blue-a100: hsl(198, 100%, 75.1%);--light-blue-a200: hsl(198, 100%, 62.55%);--light-blue-a400: hsl(198, 100%, 50%);--light-blue-a700: hsl(202, 100%, 45.88%);--cyan-50: hsl(186, 72.22%, 92.94%);--cyan-100: hsl(186, 71.11%, 82.35%);--cyan-200: hsl(186, 71.62%, 70.98%);--cyan-300: hsl(186, 71.15%, 59.22%);--cyan-400: hsl(186, 70.87%, 50.2%);--cyan-500: hsl(186, 100%, 41.57%);--cyan-600: hsl(186, 100%, 37.84%);--cyan-700: hsl(185, 100%, 32.75%);--cyan-800: hsl(185, 100%, 28.04%);--cyan-900: hsl(182, 100%, 19.61%);--cyan-a100: hsl(180, 100%, 75.88%);--cyan-a200: hsl(180, 100%, 54.71%);--cyan-a400: hsl(186, 100%, 50%);--cyan-a700: hsl(187, 100%, 41.57%);--teal-50: hsl(176, 40.91%, 91.37%);--teal-100: hsl(174, 41.28%, 78.63%);--teal-200: hsl(174, 41.9%, 64.9%);--teal-300: hsl(174, 41.83%, 50.78%);--teal-400: hsl(174, 62.75%, 40%);--teal-500: hsl(174, 100%, 29.41%);--teal-600: hsl(173, 100%, 26.86%);--teal-700: hsl(173, 100%, 23.73%);--teal-800: hsl(172, 100%, 20.59%);--teal-900: hsl(169, 100%, 15.1%);--teal-a100: hsl(166, 100%, 82.75%);--teal-a200: hsl(165, 100%, 69.61%);--teal-a400: hsl(165, 82.26%, 51.37%);--teal-a700: hsl(171, 100%, 37.45%);--green-50: hsl(124, 39.39%, 93.53%);--green-100: hsl(121, 37.5%, 84.31%);--green-200: hsl(122, 37.4%, 74.31%);--green-300: hsl(122, 38.46%, 64.31%);--green-400: hsl(122, 38.46%, 56.67%);--green-500: hsl(122, 39.44%, 49.22%);--green-600: hsl(122, 40.97%, 44.51%);--green-700: hsl(122, 43.43%, 38.82%);--green-800: hsl(123, 46.2%, 33.53%);--green-900: hsl(124, 55.37%, 23.73%);--green-a100: hsl(136, 77.22%, 84.51%);--green-a200: hsl(150, 81.82%, 67.65%);--green-a400: hsl(150, 100%, 45.1%);--green-a700: hsl(144, 100%, 39.22%);--light-green-50: hsl(88, 51.72%, 94.31%);--light-green-100: hsl(87, 50.68%, 85.69%);--light-green-200: hsl(88, 50%, 76.47%);--light-green-300: hsl(87, 50%, 67.06%);--light-green-400: hsl(87, 50.24%, 59.8%);--light-green-500: hsl(87, 50.21%, 52.75%);--light-green-600: hsl(89, 46.12%, 48.04%);--light-green-700: hsl(92, 47.91%, 42.16%);--light-green-800: hsl(95, 49.46%, 36.47%);--light-green-900: hsl(103, 55.56%, 26.47%);--light-green-a100: hsl(87, 100%, 78.24%);--light-green-a200: hsl(87, 100%, 67.45%);--light-green-a400: hsl(92, 100%, 50.59%);--light-green-a700: hsl(96, 81.15%, 47.84%);--lime-50: hsl(65, 71.43%, 94.51%);--lime-100: hsl(64, 69.01%, 86.08%);--lime-200: hsl(65, 70.69%, 77.25%);--lime-300: hsl(65, 70.37%, 68.24%);--lime-400: hsl(65, 69.7%, 61.18%);--lime-500: hsl(65, 69.96%, 54.31%);--lime-600: hsl(63, 59.68%, 49.61%);--lime-700: hsl(62, 61.43%, 43.73%);--lime-800: hsl(59, 62.89%, 38.04%);--lime-900: hsl(53, 69.93%, 30%);--lime-a100: hsl(65, 100%, 75.29%);--lime-a200: hsl(65, 100%, 62.75%);--lime-a400: hsl(73, 100%, 50%);--lime-a700: hsl(75, 100%, 45.88%);--yellow-50: hsl(55, 100%, 95.29%);--yellow-100: hsl(53, 100%, 88.43%);--yellow-200: hsl(53, 100%, 80.78%);--yellow-300: hsl(53, 100%, 73.14%);--yellow-400: hsl(53, 100%, 67.25%);--yellow-500: hsl(53, 100%, 61.57%);--yellow-600: hsl(48, 98.04%, 60%);--yellow-700: hsl(42, 96.26%, 58.04%);--yellow-800: hsl(37, 94.64%, 56.08%);--yellow-900: hsl(28, 91.74%, 52.55%);--yellow-a100: hsl(60, 100%, 77.65%);--yellow-a200: hsl(60, 100%, 50%);--yellow-a400: hsl(55, 100%, 50%);--yellow-a700: hsl(50, 100%, 50%);--amber-50: hsl(46, 100%, 94.12%);--amber-100: hsl(45, 100%, 85.1%);--amber-200: hsl(45, 100%, 75.49%);--amber-300: hsl(45, 100%, 65.49%);--amber-400: hsl(45, 100%, 57.84%);--amber-500: hsl(45, 100%, 51.37%);--amber-600: hsl(42, 100%, 50%);--amber-700: hsl(37, 100%, 50%);--amber-800: hsl(33, 100%, 50%);--amber-900: hsl(26, 100%, 50%);--amber-a100: hsl(47, 100%, 74.9%);--amber-a200: hsl(47, 100%, 62.55%);--amber-a400: hsl(46, 100%, 50%);--amber-a700: hsl(40, 100%, 50%);--orange-50: hsl(36, 100%, 93.92%);--orange-100: hsl(35, 100%, 84.9%);--orange-200: hsl(35, 100%, 75.1%);--orange-300: hsl(35, 100%, 65.1%);--orange-400: hsl(35, 100%, 57.45%);--orange-500: hsl(35, 100%, 50%);--orange-600: hsl(33, 100%, 49.22%);--orange-700: hsl(30, 100%, 48.04%);--orange-800: hsl(27, 100%, 46.86%);--orange-900: hsl(21, 100%, 45.1%);--orange-a100: hsl(38, 100%, 75.1%);--orange-a200: hsl(33, 100%, 62.55%);--orange-a400: hsl(34, 100%, 50%);--orange-a700: hsl(25, 100%, 50%);--deep-orange-50: hsl(5, 71.43%, 94.51%);--deep-orange-100: hsl(14, 100%, 86.86%);--deep-orange-200: hsl(14, 100%, 78.43%);--deep-orange-300: hsl(14, 100%, 69.8%);--deep-orange-400: hsl(14, 100%, 63.14%);--deep-orange-500: hsl(14, 100%, 56.67%);--deep-orange-600: hsl(14, 90.68%, 53.73%);--deep-orange-700: hsl(14, 80.39%, 50%);--deep-orange-800: hsl(14, 82.28%, 46.47%);--deep-orange-900: hsl(14, 88.18%, 39.8%);--deep-orange-a100: hsl(14, 100%, 75.1%);--deep-orange-a200: hsl(14, 100%, 62.55%);--deep-orange-a400: hsl(14, 100%, 50%);--deep-orange-a700: hsl(11, 100%, 43.33%);--brown-50: hsl(19, 15.79%, 92.55%);--brown-100: hsl(16, 15.79%, 81.37%);--brown-200: hsl(14, 15.19%, 69.02%);--brown-300: hsl(15, 15.32%, 56.47%);--brown-400: hsl(15, 17.5%, 47.06%);--brown-500: hsl(15, 25.39%, 37.84%);--brown-600: hsl(15, 25.29%, 34.12%);--brown-700: hsl(14, 25.68%, 29.02%);--brown-800: hsl(11, 25.81%, 24.31%);--brown-900: hsl(8, 27.84%, 19.02%);--gray-50: hsl(0, 0%, 98.04%);--gray-100: hsl(0, 0%, 96.08%);--gray-200: hsl(0, 0%, 93.33%);--gray-300: hsl(0, 0%, 87.84%);--gray-400: hsl(0, 0%, 74.12%);--gray-500: hsl(0, 0%, 61.96%);--gray-600: hsl(0, 0%, 45.88%);--gray-700: hsl(0, 0%, 38.04%);--gray-800: hsl(0, 0%, 25.88%);--gray-900: hsl(0, 0%, 12.94%);--blue-gray-50: hsl(204, 15.15%, 93.53%);--blue-gray-100: hsl(198, 15.66%, 83.73%);--blue-gray-200: hsl(199, 15.33%, 73.14%);--blue-gray-300: hsl(199, 15.63%, 62.35%);--blue-gray-400: hsl(200, 15.38%, 54.12%);--blue-gray-500: hsl(199, 18.3%, 46.08%);--blue-gray-600: hsl(198, 18.45%, 40.39%);--blue-gray-700: hsl(199, 18.34%, 33.14%);--blue-gray-800: hsl(199, 17.91%, 26.27%);--blue-gray-900: hsl(199, 19.15%, 18.43%);--blue-gray-1000: hsl(199, 20.93%, 8.43%)}.app{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;box-sizing:border-box;overflow:auto;overflow-x:hidden;--sl-input-border-color: var(--gray-300);--sl-input-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;--prism-color-text: #111b27;--prism-color-selection: #3c526d;--prism-color-background: #e3eaf2;--prism-color-comment: #3c526d;--prism-color-tag: #006d6d;--prism-color-boolean-number: #755f00;--prism-color-class-name: #005a8e;--prism-color-string: #116b00;--prism-color-builtin-regex: #af00af;--prism-color-function: #7c00aa;--prism-color-keyword-operator: #a04900;--prism-color-deleted: #c22f2e;--prism-color-toolbar-text: #e3eaf2;--prism-color-toolbar-background: #005a8e;--prism-color-toolbar-hover: #005a8eda;--prism-color-line-highlight: #8da1b92f;--prism-color-line-highlight-alt: #8da1b925;--prism-color-line-highlight-border: #3c526d;--prism-color-line-highlight-shadow: #8da1b9;--prism-color-line-numbers-border: #8da1b97a;--prism-color-line-numbers-background: #d0dae77a;--prism-color-line-numbers-text: #3c526dda;--prism-color-brace-level-1: #755f00;--prism-color-brace-level-2: #af00af;--prism-color-brace-level-3: #005a8e;--prism-color-brace-level-4: #7c00aa;--prism-color-diff-deleted: #c22f2e1f;--prism-color-diff-inserted: #116b001f;--euphony-border-radius: 5px}.app[is-loading]{pointer-events:none}.header{width:100%;padding:20px 0;display:flex;justify-content:center;align-items:center;gap:10px;position:sticky;top:0;background:linear-gradient(to bottom,#fff 20%,#ffffffe6 80%,#fff0);z-index:3}.header .name{font-weight:700}.header .header-link{display:inline-flex;justify-content:center;align-items:center;min-height:34px;padding:0 12px;border:1px solid var(--gray-300);border-radius:999px;background-color:#ffffffe6;font-size:var(--font-d2);font-weight:600}.header .header-link:hover{background-color:var(--gray-100)}.header a{color:inherit;text-decoration:none}.header sl-input{width:560px}.content{width:100%;display:grid;grid-template-columns:1fr auto 1fr}.content .empty-error-message{display:flex;justify-content:center;width:100vw;margin-top:20px;color:var(--gray-700)}.content .empty-error-message[is-hidden]{display:none}.content-left{grid-row:1 / 2;grid-column:1 / 2;height:100%;min-width:0px;position:relative;container:content-left / inline-size;display:flex;flex-direction:column;pointer-events:none}.content-left-inner{flex:1 0}.content-right{grid-row:1 / 2;grid-column:3 / 4;position:relative;height:100%;width:100%;min-width:0px;container:content-right / inline-size;display:flex;flex-direction:column}.content-right-inner{flex:1 0}.scroll-button-container{position:sticky;padding-right:20px;box-sizing:border-box;bottom:12px;width:100%;display:flex;flex-direction:column;align-items:flex-end;gap:5px}.scroll-button{width:min-content;height:min-content;box-sizing:border-box;padding:5px;opacity:0;transition:opacity .3s;pointer-events:none}.scroll-button[is-visible]{opacity:1;pointer-events:all}.scroll-button .svg-icon{width:1rem;height:1rem}.scroll-button.scroll-button-down{transform:rotate(180deg)}.left-margin-footer{position:sticky;padding-left:20px;box-sizing:border-box;bottom:12px;pointer-events:fill;overflow:hidden}.cache-row{width:100%}.cache-info{display:flex;justify-content:flex-start;align-items:center;width:max-content;cursor:help;gap:3px;font-size:var(--font-d3);color:var(--gray-500);line-height:1}.cache-info[is-hidden]{display:none}.cache-info .svg-icon svg{width:unset}.cache-label{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}@container content-right (max-width: 50px){.scroll-top-button-container{background-color:var(--red-100);display:none}}@container content-left (max-width: 30px){.left-margin-footer{background-color:var(--red-100);display:none}}.content-center{width:100%;grid-column:2 / 3;display:flex;flex-flow:column nowrap;justify-content:flex-start;align-items:center;position:relative;padding:0}.content-center .grid-header{align-self:flex-start;font-size:var(--font-d3);padding:0 15px 5px 0;display:flex;align-items:center;gap:6px;flex-flow:row wrap;max-width:800px}.content-center .grid-header[is-hidden]{display:none}.content-center .grid-header .count-label{padding:3px 0}.content-center .grid-header .select-all-button{padding:0 5px}.content-center .grid-header .query-label{display:flex;align-items:center;line-height:1;border:1px solid var(--blue-100);background-color:var(--blue-50);border-radius:5px;margin-bottom:5px}.content-center .grid-header .query-label .query-label-text{padding:3px 0 3px 8px;color:var(--blue-800)}.content-center .grid-header .query-label .query-separator{width:1px;align-self:stretch;background-color:var(--blue-200);margin:0 8px}.content-center .grid-header .query-label .svg-icon{padding:3px 8px 3px 0;color:var(--blue-800);position:relative;top:1px;width:9px;height:9px;cursor:pointer}.content-center .grid-header .query-label .svg-icon:hover{color:var(--blue-900)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.conversation-list{display:contents}.conversation-list[is-grid-view]{--euphony-conversation-max-width: var(--app-grid-view-column-width, 300px);--euphony-internal-padding-h: 15px;display:grid;width:calc(100vw - 60px);grid-template-columns:repeat(auto-fill,calc(var(--euphony-conversation-max-width) + 2 * var(--euphony-internal-padding-h)));column-gap:30px;row-gap:20px;margin:20px 0 0}.conversation-list[is-grid-view] .conversation-container .conversation-id{padding:0 0 0 10px;transform:translateY(-100%);flex-flow:row-reverse;gap:0px}.conversation-list[is-grid-view] .conversation-container .conversation-id a{padding:0 10px 3px 0}.conversation-list[is-grid-view] .conversation-container .conversation-id sl-copy-button{top:0}.conversation-container{flex:0 0 auto;position:relative;width:100%;font-size:14px;margin-bottom:30px;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;box-sizing:border-box;border-radius:5px;box-shadow:0 0 1px #0000001a,0 0 1px #0000001a,0 0 2px #0000001a,0 0 12px #0000000d;transition:outline .2s,box-shadow .2s}.conversation-container euphony-conversation{max-width:1200px;overflow:auto;width:100%}.conversation-container euphony-codex{max-width:1200px;overflow:auto;width:100%}.conversation-container euphony-comparison{overflow:auto;width:100%}.conversation-container euphony-json-viewer{width:800px;font-size:var(--font-d3);padding:20px}.conversation-container:focus{outline:2px solid var(--blue-400);box-shadow:0 0 10px var(--blue-500)}.conversation-container .conversation-id{--gap: 10px;position:absolute;left:0;top:0;padding:0 0 10px 10px;transform:translate(-100%);display:flex;flex-flow:row;gap:8px;align-items:center;box-sizing:border-box;font-size:var(--font-d2);color:var(--gray-400);text-decoration:none}.conversation-container .conversation-id a{color:currentColor;text-decoration:none;padding:10px 10px 10px 0}.conversation-container .conversation-id a:hover{color:var(--gray-600);text-decoration:underline}.conversation-container .conversation-id:hover .share-button{pointer-events:all;display:flex}.conversation-container .conversation-id input[type=checkbox]{margin:0}.conversation-container .conversation-id .share-button{display:none;animation:fadeIn .3s ease-in-out;cursor:pointer;--sl-spacing-x-small: 0px;--sl-tooltip-font-family: inherit;--sl-tooltip-font-weight: inherit;--sl-tooltip-font-size: var(--font-d3);--sl-z-index-tooltip: 1;--sl-tooltip-background-color: var(--gray-800);--sl-tooltip-padding: 2px 5px 3px;--sl-tooltip-border-radius: 4px;--sl-tooltip-line-height: 1.5}.conversation-container .conversation-id .share-button sl-copy-button{position:relative;top:1px;font-size:12px}.conversation-container .conversation-id .share-button:hover{color:var(--gray-600);text-decoration:underline}.svg-icon{display:inline-flex;justify-content:center;align-items:center;width:1em;height:1em;color:currentColor;transition:transform 80ms linear;transform-origin:center}.svg-icon svg{fill:currentColor;width:100%;height:100%}button{all:unset}button,.button{height:100%;border-radius:var(--border-radius);border:1px solid var(--gray-300);color:var(--gray-800);background-color:#fff;line-height:1;display:flex;align-items:center;padding:1px 12px;box-sizing:border-box;position:relative;cursor:pointer;transition:background linear .1s,border linear .1s}:is(button,.button).disabled{cursor:no-drop;border:1px solid var(--gray-300);color:var(--gray-600);background:var(--gray-100)}:is(button,.button):not(.disabled):hover{border:1px solid color-mix(in lab,var(--gray-300),black 5%);background-color:color-mix(in lab,var(--gray-100),white 5%)}:is(button,.button):not(.disabled):active{background-color:color-mix(in lab,var(--gray-100),white 100%);border:1px solid var(--gray-300)}.button-menu{position:relative}.button-menu:has(.menu-container:hover){background-color:initial}.menu-container{display:flex;position:absolute;top:calc(100% + 10px);left:0}.menu-container[no-show]{opacity:0;pointer-events:none}.footer{margin-bottom:30px}.footer nightjar-pagination[is-hidden]{display:none}@keyframes scaleY{0%,80%,to{box-shadow:0 0;height:2em}40%{box-shadow:0 -1em;height:3em}}.loader-container{background-color:#ffffffed;position:absolute;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;opacity:0;pointer-events:none;transition:opacity .3s}.loader-container[is-loading]{opacity:1}.loader-container .loader-label{position:absolute;color:var(--gray-700);top:50%;left:50%;transform:translate(-50%,-200%);font-size:1.6rem}.loader-container .loader{color:var(--gray-400);position:relative;font-size:11px;background:var(--gray-400);animation:scaleY 1s infinite ease-in-out;width:1em;height:2em;animation-delay:-.16s}.loader-container .loader:before,.loader-container .loader:after{content:"";position:absolute;top:0;left:2em;background:var(--gray-400);width:1em;height:2em;animation:scaleY 1s infinite ease-in-out}.loader-container .loader:before{left:-2em;animation-delay:-.32s}.toast-container{position:absolute;top:7px;z-index:5;display:flex;justify-content:center}#toast-euphony-udz{z-index:6}.popper-tooltip{position:absolute;width:max-content;left:0;top:0;z-index:1;background:var(--gray-800);color:#fff;box-shadow:0 0 1px #0009,0 0 3px #0000000d;padding:0 5px 1px;border-radius:4px;font-size:var(--font-d3);display:flex;justify-content:center;box-sizing:border-box;opacity:1;transform:scale(1);transform-origin:right center;transition:opacity .15s linear,transform .15s linear}.popper-tooltip.no-transition{transition:none}.popper-tooltip[placement=right]{transform-origin:left center}.popper-tooltip[placement=bottom]{transform-origin:top center}.popper-tooltip[placement=top]{transform-origin:bottom center}.popper-tooltip.hidden{opacity:0;pointer-events:none;transform:scale(.8)}.popper-tooltip.no-show{display:none}.popper-tooltip .popper-content{max-width:300px;max-height:200px;line-height:1.5;padding:2px 0;box-sizing:border-box;display:flex;flex-flow:column}.popper-tooltip .popper-arrow{position:absolute;background:var(--gray-800);width:8px;height:8px;transform:rotate(45deg);opacity:1}.popper-tooltip .popper-arrow.hidden{opacity:0}euphony-preference-window[is-hidden]{display:none}';var Ep=Object.defineProperty,Lp=Object.getOwnPropertyDescriptor,V=(e,t,o,s)=>{for(var i=s>1?void 0:s?Lp(t,o):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(i=(s?r(t,o,i):r(i))||i);return s&&i&&Ep(t,o,i),i};const ii=Fr(",d"),kr=10,Ap=72,Rp={success:6e3,warning:15e3,error:15e3};let Xo="";const xt=new URLSearchParams(window.location.search);let ge=xt.get("path"),wt=xt.get("index"),J=window.location.hash;const Cr=xt.get("subindex"),Tr=Cr?parseInt(Cr):null;wt!==null&&(J=`#conversation-${wt}`,window.location.hash=J);let j=class extends he{constructor(){super(),this.allConversationData=[],this.conversationData=[],this.JSONData=[],this.codexSessionData=[],this.dataType="conversation",this.isLoadingData=!1,this.curPage=1,this.globalIsShowingMetadata=!1,this.globalShouldRenderMarkdown=!1,this.jmespathQuery="",this.focusModeAuthor=[],this.focusModeRecipient=[],this.focusModeContentType=[],this.toastMessage="",this.toastType="success",this.apiManager=new Mr(bn),this.requestWorker=new ki(bn),this.browserAPIManager=new Sr,this.pendingOpenAIKeyPromise=null,this.euphonyStyleConfig={},this.appStyleConfig={},this.itemsPerPage=kr,this._totalConversationSize=0,this._totalConversationSizeIncludingUnfiltered=0,this.noCacheBlobPaths=new Set,this.isEditorMode=!1,this.selectedConversationIDs=new Set,this.isFrontendOnlyMode=!0,this.showToolBarMenu=!1,this.isLoadingFromCache=!0,this.isLoadingFromClipboard=!1,this.isGridView=!1,this.gridViewColumnWidth=300,this.comparisonColumnWidth=300,this.showPreferenceWindow=!1,this.showScrollTopButton=!1,this.localDataWorkerRequestCount=0,this.activeLocalDataWorkerRequestID=null,this.localDataWorkerPendingRequests=new Map,this.cacheInfoTooltipDebouncer=null,this.scrollToTop=(e=0,t="instant")=>{this.allChildrenUpdateComplete().then(()=>{const o=this.shadowRoot?.querySelector(".app");o&&setTimeout(()=>{o.scrollTo({top:e,behavior:t})},0)},()=>{})},this.scrollToBottom=(e="instant")=>{this.allChildrenUpdateComplete().then(()=>{const t=this.shadowRoot?.querySelector(".app");t&&setTimeout(()=>{t.scrollTo({top:t.scrollHeight,behavior:e})},0)},()=>{})},this.scrollToConversation=(e,t="smooth")=>{const o=this.shadowRoot?.querySelector(`div${e}`),s=20;if(o){const i=this.shadowRoot?.querySelector(".header"),n=this.shadowRoot?.querySelector(".app");if(!i||!n)throw Error("Header element or app element not found");const r=i.getBoundingClientRect().height,c=o.getBoundingClientRect().top+n.scrollTop-r-s;o.focus(),n.scrollTo({top:c,behavior:t})}},this.scrollToMessage=(e,t,o="smooth")=>{const s=this.shadowRoot?.querySelector(`div${e}`);if(s){const i=s.querySelector("euphony-conversation");if(!i){console.error("Conversation element not found");return}const n=i.getMessageByIndex(t);if(!n){console.error("Target message element not found");return}const r=n.getBoundingClientRect().top+window.scrollY-Ap;if(r){this.scrollToTop(r,o);const a=n.previousElementSibling;a?a.focus():console.warn("No sibling element to focus")}}},this.validateAndTransformConversations=e=>{const t=o=>Array.isArray(o.messages);try{const o=[];for(const[s,i]of e.entries())if(typeof i=="string"){const n=JSON.parse(i);let r=i;n.conversation_id!==void 0&&n.id===void 0&&(n.id=n.conversation_id,r=JSON.stringify(n)),e[s]=r,o.push(t(n))}else{const n=i;n.conversation_id!==void 0&&n.id===void 0&&(n.id=n.conversation_id),e[s]=n,o.push(t(n))}return o.every(s=>s)}catch(o){return console.error("Bad conversation format",o),!1}},this.validateConversation=e=>{const t=o=>Array.isArray(o.messages);try{if(typeof e=="string"){const o=JSON.parse(e);return t(o)}else return t(e)}catch(o){return console.error("Bad conversation format",o),!1}},this.validateComparison=e=>{const t=o=>o.conversation!==void 0&&o.completions!==void 0;try{if(typeof e=="string"){const o=JSON.parse(e);return t(o)}else return t(e)}catch(o){return console.error("Bad comparison format",o),!1}},this.loadDataFromText=(e,t)=>{this.curPage=1,this.resetHash();const o=this.localDataWorkerRequestID;return this.activeLocalDataWorkerRequestID=o,new Promise((s,i)=>{this.localDataWorkerPendingRequests.set(o,{resolve:s,reject:i});const n={command:"startParseData",payload:{requestID:o,sourceName:t,sourceText:e}};this.localDataWorker.postMessage(n)})},this.loadDataFromFile=e=>{this.curPage=1,this.resetHash();const t=this.localDataWorkerRequestID;return this.activeLocalDataWorkerRequestID=t,new Promise((o,s)=>{this.localDataWorkerPendingRequests.set(t,{resolve:o,reject:s});const i={command:"startParseData",payload:{requestID:t,sourceName:"file",sourceFile:e}};this.localDataWorker.postMessage(i)})},this.loadData=async({blobURL:e,offset:t,limit:o,showSuccessToast:s=!0,noCache:i=!1,jmespathQuery:n=""})=>{this.isLoadingData=!0,this.isLoadingFromClipboard=!1,this.codexSessionData=[];let r=e;const a=[];try{const c=this.isFrontendOnlyMode?this.browserAPIManager:this.apiManager,{data:l,total:u,matchedCount:f,resolvedURL:k}=await c.getJSONL({blobURL:e,offset:t,limit:o,noCache:i,jmespathQuery:n});if(r=k,l.length===0)return this.isLoadingData=!1,a.push("No data found."),{isLoadDataSuccessful:!1,loadDataMessage:a.join(`

`),loadedURL:r};if(ge=e,_a(l)){let y=l;return u>l.length&&(y=(await c.getJSONL({blobURL:e,offset:0,limit:u,noCache:i,jmespathQuery:n})).data),this.codexSessionData=[y],this.allConversationData=[],this.conversationData=[],this.JSONData=[],this.selectedConversationIDs=new Set,this.dataType="codex",this._totalConversationSize=1,this._totalConversationSizeIncludingUnfiltered=1,this.isLoadingData=!1,this.isLoadingFromCache=!i,J===""&&this.scrollToTop(0),s&&(a.push("Codex session loaded successfully"),this.toastMessage=a.join(`

`),this.toastType="success",this.toastComponent&&this.toastComponent.show()),{isLoadDataSuccessful:!0,loadDataMessage:a.join(`

`),loadedURL:r}}if(!this.validateConversation(l[0])){a.push("Failed to find harmony-formatted data. Render JSON instead."),this.toastMessage=a.join(`

`),this.toastType="warning",this.toastComponent&&this.toastComponent.show(),this.isLoadingData=!1,J===""&&this.scrollToTop(0);const y=l;return this.JSONData=y,this.dataType="json",this._totalConversationSize=f,this._totalConversationSizeIncludingUnfiltered=u,a.push(`Loaded ${f} conversations`),{isLoadDataSuccessful:!0,loadDataMessage:a.join(`

`),loadedURL:r}}if(this._totalConversationSize=f,this._totalConversationSizeIncludingUnfiltered=u,this.isEditorMode){this.selectedConversationIDs=new Set;for(let y=0;y<l.length;y++)this.selectedConversationIDs.add(y)}if(typeof l[0]=="string"){const y=l.map(v=>{if(typeof v=="string"){const C=xi(v);if(C===null)throw new Error("Failed to parse conversation JSON string");return C}return v});this.allConversationData=y,this.conversationData=y,this.dataType="conversation"}else{const y=l;this.allConversationData=y,this.conversationData=y,this.dataType="conversation"}return this.isLoadingData=!1,J===""&&this.scrollToTop(0),console.log(`Loaded ${o} conversations`),this.isLoadingFromCache=!i,s&&(a.push("Data loaded successfully"),this.toastMessage=a.join(`

`),this.toastType="success",this.toastComponent&&this.toastComponent.show()),{isLoadDataSuccessful:!0,loadDataMessage:a.join(`

`),loadedURL:r}}catch(c){console.error("Error loading data",c);let l=`Failed to load the data.

${c}`;return e.includes(" ")?l+=`

Make sure the URL has no spaces or invalid characters.`:l+=`

Make sure the URL is correct and publicly reachable.`,a.push(l),this.toastMessage=a.join(`

`),this.toastType="error",this.toastComponent&&this.toastComponent.show(),this.isLoadingData=!1,{isLoadDataSuccessful:!1,loadDataMessage:a.join(`

`),loadedURL:r}}},this.resetFilter=async e=>{if(ge===null)throw Error("Blob path is not set");e==="jmespath"&&(this.jmespathQuery=""),this.curPage=1;let t=!1;this.noCacheBlobPaths.has(ge)?t=!0:t=xt.get("no-cache")==="true",await this.loadData({blobURL:ge,offset:(this.curPage-1)*this.itemsPerPage,limit:this.itemsPerPage,showSuccessToast:!1,noCache:t,jmespathQuery:this.jmespathQuery}),this.urlManager.updateURL()},this.resetHash=()=>{const e=new URL(window.location.href);e.hash="",J="",e.searchParams.delete("index"),wt=null,history.pushState({},"",e.toString()),this.shadowRoot?.activeElement&&this.shadowRoot.activeElement.blur()},this.urlManager=new Kh(this),this.localDataWorker=new jh,this.localDataWorker.addEventListener("message",e=>{this.localDataWorkerMessageHandler(e)}),this.urlManager.updateConfigsFromURL(),window.addEventListener("hashchange",()=>{this.hashChanged().then(()=>{},()=>{})}),document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":this.curPage>1&&this.updatePageNumber(this.curPage-1,!0).then(()=>{},()=>{});break;case"ArrowRight":this.curPage+1<=this.totalPageNum&&this.updatePageNumber(this.curPage+1,!0).then(()=>{},()=>{});break;case"ArrowUp":if(e.preventDefault(),J==="")J=`#conversation-${(this.curPage-1)*this.itemsPerPage}`;else{const t=parseInt(J.replace("#conversation-",""));t>(this.curPage-1)*this.itemsPerPage?J=`#conversation-${t-1}`:J=`#conversation-${Math.min(this.totalConversationSize-1,this.curPage*this.itemsPerPage-1)}`}history.pushState({},"",J),this.scrollToConversation(J,"instant");break;case"ArrowDown":if(e.preventDefault(),J==="")J=`#conversation-${(this.curPage-1)*this.itemsPerPage}`;else{const t=parseInt(J.replace("#conversation-",""));t<Math.min(this.totalConversationSize-1,this.curPage*this.itemsPerPage-1)?J=`#conversation-${t+1}`:J=`#conversation-${(this.curPage-1)*this.itemsPerPage}`}this.scrollToConversation(J,"instant"),history.pushState({},"",J);break}})}get totalConversationSize(){return this._totalConversationSize}get totalPageNum(){return Math.ceil(this._totalConversationSize/this.itemsPerPage)}get totalConversationSizeIncludingUnfiltered(){return this._totalConversationSizeIncludingUnfiltered}get localDataWorkerRequestID(){return this.localDataWorkerRequestCount++}disconnectedCallback(){this.localDataWorker.terminate(),super.disconnectedCallback()}firstUpdated(){this.initData().then(()=>{},()=>{});const e=this.shadowRoot?.querySelector(".app");e&&e.addEventListener("scroll",()=>{const t=e.scrollHeight-e.clientHeight;e.scrollTop/t>.1||e.scrollTop>100?this.showScrollTopButton=!0:this.showScrollTopButton=!1})}willUpdate(e){}async initData(){if(this.isLoadingData=!0,wt!==null){const e=parseInt(wt);this.curPage=Math.floor(e/this.itemsPerPage)+1}if(ge===null){const o=(await(await fetch("examples/euphony-convo-100.jsonl")).text()).split(`
`).filter(s=>s!=="");if(this.dataType="conversation",this.allConversationData=o.map(s=>{const i=xi(s);if(i===null)throw new Error("Failed to parse conversation JSON string");return i}),console.log(this.allConversationData),this.isEditorMode){this.selectedConversationIDs=new Set;for(let s=0;s<o.length;s++)this.selectedConversationIDs.add(s)}this._totalConversationSize=this.allConversationData.length,this.curPage>this.totalPageNum&&(console.error("The conversation index is out of bound."),this.curPage=1),this.conversationData=this.allConversationData.slice((this.curPage-1)*this.itemsPerPage,this.curPage*this.itemsPerPage),this.isLoadingData=!1}else{Xo=ge;const e=xt.get("no-cache")==="true";e&&this.noCacheBlobPaths.add(Xo),await this.loadData({blobURL:Xo,offset:(this.curPage-1)*this.itemsPerPage,limit:this.itemsPerPage,showSuccessToast:!1,noCache:e,jmespathQuery:this.jmespathQuery})}J!==""&&Tr!==null?(await this.allChildrenUpdateComplete(),this.scrollToMessage(J,Tr)):J!==""&&(await this.allChildrenUpdateComplete(),this.scrollToConversation(J))}async loadButtonClicked({noCache:e=!1}={}){const t=this.shadowRoot?.querySelector("sl-input");if(J="",!t)throw new Error("Input element not found");let o=t.value.trim();if(o==="")return;const i=/[?&]path=([^&#]+)/.exec(o);i?.[1]&&(o=decodeURIComponent(i[1])),e&&this.noCacheBlobPaths.add(o),this.noCacheBlobPaths.has(o)&&(e=!0),this.curPage=1;const{isLoadDataSuccessful:n,loadedURL:r}=await this.loadData({blobURL:o,offset:(this.curPage-1)*this.itemsPerPage,limit:this.itemsPerPage,noCache:e});if(n){console.log("loadedURL",r);let a=`?path=${encodeURIComponent(r)}`;e&&(a+="&no-cache=true"),this.itemsPerPage!==kr&&(a+=`&limit=${this.itemsPerPage}`),this.isGridView&&(a+=`&grid=${this.gridViewColumnWidth}`),history.pushState({},"",a),ge=r,t.value=r}}downloadButtonClicked(){const e=this.shadowRoot?.querySelectorAll("euphony-conversation"),t=[];if(e)for(const i of e){const n=i.sharingURL;let r;if(n){const l=new URL(n).searchParams.get("index");l!==null&&(r=parseInt(l))}if(r===void 0||!this.selectedConversationIDs.has(r))continue;const a=i.getEditedConversationData();a!==null&&t.push(JSON.stringify(a))}const o=t.join(`
`);let s="conversation.jsonl";ge!==null&&(s=ge.split("/").pop()??"conversation.jsonl"),s=s.replace(".jsonl","-edited.jsonl"),Br(o,null,s)}selectAllButtonClicked(){if(this.selectedConversationIDs.size!==this.totalConversationSize){this.selectedConversationIDs=new Set;for(let e=0;e<this.totalConversationSize;e++){this.selectedConversationIDs.add(e);const t=this.shadowRoot?.querySelector(`#euphony-conversation-${e}`);t&&(t.isConvoMarkedForDeletion=!1)}}else{this.selectedConversationIDs=new Set;for(let e=0;e<this.totalConversationSize;e++){const t=this.shadowRoot?.querySelector(`#euphony-conversation-${e}`);t&&(t.isConvoMarkedForDeletion=!0)}}}async updatePageNumber(e,t){if(this.curPage=e,this.resetHash(),ge===null)this.conversationData=this.allConversationData.slice((this.curPage-1)*this.itemsPerPage,this.curPage*this.itemsPerPage);else{let o=!1;this.noCacheBlobPaths.has(ge)?o=!0:o=xt.get("no-cache")==="true",await this.loadData({blobURL:ge,offset:(this.curPage-1)*this.itemsPerPage,limit:this.itemsPerPage,showSuccessToast:!1,noCache:o,jmespathQuery:this.jmespathQuery})}t&&this.scrollToTop(0),this.urlManager.updateURL()}pageClicked(e){this.updatePageNumber(e.detail,!0).then(()=>{},()=>{})}itemsPerPageChanged(e){this.itemsPerPage=e.detail,this.updatePageNumber(1,!0).then(()=>{},()=>{})}async hashChanged(){if(J=window.location.hash,wt=xt.get("index"),wt!==null&&(J=`#conversation-${wt}`),J!==""){const e=parseInt(J.replace("#conversation-","")),t=Math.floor(e/this.itemsPerPage)+1;t!==this.curPage&&t<=this.totalPageNum&&await this.updatePageNumber(t,!1)}this.allChildrenUpdateComplete().then(()=>{this.scrollToConversation(J)},()=>{})}async conversationMetadataButtonToggled(e){const t=this.shadowRoot?.querySelector(".app");if(!t)throw Error("App element not found");const o=e.target,s=o.getBoundingClientRect().top;this.globalIsShowingMetadata=e.detail,await this.allChildrenUpdateComplete();const i=o.getBoundingClientRect().top;t.scrollTop+=i-s,this.urlManager.updateURL()}async markdownButtonToggled(e){const t=this.shadowRoot?.querySelector(".app");if(!t)throw Error("App element not found");const o=e.target,s=o.getBoundingClientRect().top;this.globalShouldRenderMarkdown=e.detail,await this.allChildrenUpdateComplete();const i=o.getBoundingClientRect().top;t.scrollTop+=i-s,this.urlManager.updateURL()}menuItemClicked(e){switch(e.detail){case"Preferences":{this.showPreferenceWindow=!0;break}case"Load without cache":{this.loadButtonClicked({noCache:!0}).then(()=>{},()=>{});break}case"Load from clipboard":{this.isLoadingData=!0,navigator.clipboard.readText().then(async t=>{await this.loadDataFromText(t,"clipboard")},t=>{console.error("Failed to read clipboard contents: ",t),this.isLoadingData=!1});break}case"Load local file":{this.localFileInputElement?.click();break}case"Editor mode":{this.confirmDialogComponent?.show({header:"No pagination in editor mode",message:"Editor mode will display all conversations in the JSONL file on a single page, which may cause your browser to slow down or crash if there are too many conversations loaded (e.g., >500).",yesButtonText:"I understand, enter",actionKey:"editor-mode"},()=>{const t=new URL(window.location.href);t.searchParams.set("editor","true"),t.searchParams.set("page","1"),window.location.href=t.toString()});break}case"Leave editor mode":{this.confirmDialogComponent?.show({header:"Download the edited JSONL file",message:"Make sure you have downloaded the edited JSONL file before leaving editor mode. Otherwise, you will lose all your changes.",yesButtonText:"Okay",actionKey:"leave-editor-mode"},()=>{const t=new URL(window.location.href);t.searchParams.delete("editor"),t.searchParams.delete("page"),window.location.href=t.toString()});break}case"Filter data":{this.searchWindowComponent?.show();break}case"Code":{window.open("https://github.com/openai/euphony","_blank");break}default:{console.error("Unknown menu item clicked",e.detail);break}}}cacheInfoMouseEnter(e){if(!this.popperTooltip)throw Error("Popper tooltip not initialized.");const t=e.currentTarget;this.cacheInfoTooltipDebouncer&&clearTimeout(this.cacheInfoTooltipDebouncer),this.cacheInfoTooltipDebouncer=window.setTimeout(()=>{const o=this.popperTooltip.querySelector(".popper-label");o.textContent='This data is cached for 60 minutes and may be outdated. Click "Load without cache" in the top-right menu to refetch.',Ct(this.popperTooltip,t,"top",!0,7,300),this.popperTooltip.classList.remove("hidden")},300)}cacheInfoMouseLeave(e=!0){if(!this.popperTooltip)throw Error("popperTooltip are not initialized yet.");this.cacheInfoTooltipDebouncer&&(clearTimeout(this.cacheInfoTooltipDebouncer),this.cacheInfoTooltipDebouncer=null),e?this.popperTooltip.classList.add("hidden"):(this.popperTooltip.classList.add("no-transition"),this.popperTooltip.classList.add("hidden"),setTimeout(()=>{this.popperTooltip.classList.remove("no-transition")},150))}preferenceWindowMaxMessageHeightChanged(e){const t=e.detail;this.euphonyStyleConfig["--euphony-max-message-height"]=t,this.requestUpdate()}preferenceWindowMessageLabelChanged(e){for(const t of this.getConversationViewerElements())t.preferenceWindowMessageLabelChanged(e)}preferenceWindowGridViewColumnWidthChanged(e){const t=e.detail;this.gridViewColumnWidth=parseInt(t),this.appStyleConfig["--app-grid-view-column-width"]=t,this.requestUpdate(),this.urlManager.updateURL()}preferenceWindowComparisonWidthChanged(e){const t=e.detail;this.comparisonColumnWidth=parseInt(t),this.euphonyStyleConfig["--comparison-grid-column-width"]=t,this.requestUpdate()}preferenceWindowLayoutChanged(e){const t=e.detail;if(t==="grid")this.isGridView=!0;else if(t==="list")this.isGridView=!1;else throw Error("Unknown layout: "+t);this.urlManager.updateURL(),this.requestUpdate()}preferenceWindowExpandAllClicked(){for(const e of this.getConversationViewerElements())e.expandBlockContents()}preferenceWindowCollapseAllClicked(){for(const e of this.getConversationViewerElements())e.collapseBlockContents()}preferenceWindowTranslateAllClicked(){for(const e of this.getConversationViewerElements())e.translationButtonClicked()}preferenceWindowFocusModeSettingsChanged(e){const t=e.detail;this.focusModeAuthor=[...t.author],this.focusModeRecipient=[...t.recipient],this.focusModeContentType=[...t.contentType];for(const o of this.getConversationViewerElements())o.preferenceWindowFocusModeSettingsChanged(e)}async searchWindowQuerySubmitted(e){if(ge===null)throw Error("Blob path is not set");const t=e.detail;this.curPage=1;let o=!1;this.noCacheBlobPaths.has(ge)?o=!0:o=xt.get("no-cache")==="true";const{isLoadDataSuccessful:s,loadDataMessage:i}=await this.loadData({blobURL:ge,offset:(this.curPage-1)*this.itemsPerPage,limit:this.itemsPerPage,jmespathQuery:t,noCache:o});s?(this.searchWindowComponent?.searchSucceeded(),this.jmespathQuery=t,this.urlManager.updateURL()):this.searchWindowComponent?.searchFailed(i)}harmonyRenderButtonClicked(e){const t=e.detail;this.tokenWindowComponent&&this.tokenWindowComponent.show(t)}ensureOpenAIAPIKey(){const e=localStorage.getItem("openAIAPIKey");return e?Promise.resolve(e):this.pendingOpenAIKeyPromise?this.pendingOpenAIKeyPromise:(this.pendingOpenAIKeyPromise=new Promise(t=>{this.inputDialogComponent?.show({header:"Enter OpenAI API Key",message:"To use translation in frontend-only mode, you must provide your own OpenAI API key. The key will only be stored in your browser.",yesButtonText:"Continue"},o=>{localStorage.setItem("openAIAPIKey",o),t(o),this.pendingOpenAIKeyPromise=null},()=>{t(null),this.pendingOpenAIKeyPromise=null},o=>this.browserAPIManager.validateOpenAIAPIKey(o))}),this.pendingOpenAIKeyPromise)}async allChildrenUpdateComplete(){await this.updateComplete;const e=[],t=this.shadowRoot?.querySelectorAll("euphony-conversation");t&&t.forEach(o=>{e.push(o.allChildrenUpdateComplete())}),await Promise.all(e)}localDataWorkerMessageHandler(e){switch(e.data.command){case"finishParseData":{const{requestID:t,sourceName:o,dataType:s}=e.data.payload,i=this.localDataWorkerPendingRequests.get(t);if(this.localDataWorkerPendingRequests.delete(t),t!==this.activeLocalDataWorkerRequestID){i?.resolve();break}if(ge=null,this.isLoadingData=!1,this.codexSessionData=[],this.allConversationData=[],this.conversationData=[],this.JSONData=[],s==="codex")this.codexSessionData=[e.data.payload.codexSessionData],this.selectedConversationIDs=new Set,this.dataType="codex",this._totalConversationSize=1,this._totalConversationSizeIncludingUnfiltered=1,this.isLoadingFromCache=!1,this.isLoadingFromClipboard=!0,this.toastMessage=`Codex session loaded successfully from ${o}`,this.toastType="success";else if(s==="json")this.JSONData=e.data.payload.jsonData,this.dataType="json",this._totalConversationSize=this.JSONData.length,this._totalConversationSizeIncludingUnfiltered=this.JSONData.length,this.isLoadingFromCache=!1,this.isLoadingFromClipboard=!0,this.toastMessage="Failed to find harmony-formatted data. Render JSON instead.",this.toastType="warning";else{const n=e.data.payload.conversationData;if(this._totalConversationSize=n.length,this._totalConversationSizeIncludingUnfiltered=n.length,this.isEditorMode){this.selectedConversationIDs=new Set;for(let r=0;r<n.length;r++)this.selectedConversationIDs.add(r)}this.allConversationData=n,this.conversationData=this.isEditorMode?n:n.slice((this.curPage-1)*this.itemsPerPage,this.curPage*this.itemsPerPage),this.dataType="conversation",this.isLoadingFromCache=!1,this.isLoadingFromClipboard=!0,this.toastMessage=`Data loaded successfully from ${o}`,this.toastType="success"}this.toastComponent?.show(),i?.resolve();break}case"error":{const{requestID:t,sourceName:o,message:s}=e.data.payload,i=this.localDataWorkerPendingRequests.get(t);if(this.localDataWorkerPendingRequests.delete(t),t!==this.activeLocalDataWorkerRequestID){i?.reject(new Error(s));break}this.isLoadingData=!1,this.toastMessage=`Failed to read any JSON or JSONL data from your ${o}. Please double check and try again.

${s}`,this.toastType="error",this.toastComponent?.show(),i?.reject(new Error(s));break}default:{console.error("Unknown local data worker message",e.data.command);break}}}localFileInputChanged(e){const t=e.target,o=t.files?.[0];o&&(this.isLoadingData=!0,this.loadDataFromFile(o).catch(s=>{this.toastMessage=`Failed to read local file.

${s}`,this.toastType="error",this.toastComponent?.show(),this.isLoadingData=!1}).finally(()=>{t.value=""}))}buildEuphonyStyle(e){let t="";for(const[o,s]of Object.entries(e))t+=`${o}: ${s};`;return t}getConversationViewerElements(){return[...this.shadowRoot?.querySelectorAll("euphony-conversation")??[],...this.shadowRoot?.querySelectorAll("euphony-codex")??[]]}render(){let e=d``,t;switch(this.dataType){case"conversation":t=this.conversationData;break;case"codex":t=this.codexSessionData;break;case"json":t=this.JSONData;break}for(const[a,c]of t.entries()){const l=(this.curPage-1)*this.itemsPerPage+a,u=this.urlManager.getShareURL(l,ge);let f=d``;if(this.dataType==="conversation"){let y=null;y=c,f=d`
          <euphony-conversation
            id="euphony-conversation-${l}"
            .conversationData=${y}
            conversation-max-width=${te(this.isGridView?void 0:"800")}
            sharing-url=${te(this.isLoadingFromClipboard?void 0:u)}
            data-file-url=${te(ge??void 0)}
            focus-mode-author=${JSON.stringify(this.focusModeAuthor)}
            focus-mode-recipient=${JSON.stringify(this.focusModeRecipient)}
            focus-mode-content-type=${JSON.stringify(this.focusModeContentType)}
            ?is-editable=${this.isEditorMode}
            ?is-showing-metadata=${this.globalIsShowingMetadata}
            ?should-render-markdown=${this.globalShouldRenderMarkdown}
            ?disable-editing-mode-save-button=${!0}
            ?disable-preference-button=${!0}
            ?disable-image-preview-window=${!0}
            ?disable-token-window=${!0}
            theme="light"
            style=${this.buildEuphonyStyle(this.euphonyStyleConfig)}
            @refresh-renderer-list-requested=${v=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyRefreshRendererListRequestHandler(v).then(()=>{},()=>{}):this.requestWorker.refreshRendererListRequestHandler(v).then(()=>{},()=>{})}}
            @harmony-render-requested=${v=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyHarmonyRenderRequestHandler(v).then(()=>{},()=>{}):this.requestWorker.harmonyRenderRequestHandler(v).then(()=>{},()=>{})}}
            @conversation-metadata-button-toggled=${v=>{this.conversationMetadataButtonToggled(v).then(()=>{},()=>{})}}
            @markdown-button-toggled=${v=>{this.markdownButtonToggled(v).then(()=>{},()=>{})}}
            @translation-requested=${v=>{this.isFrontendOnlyMode?this.ensureOpenAIAPIKey().then(C=>{C?this.requestWorker.frontendOnlyTranslationRequestHandler(v,C).then(()=>{},()=>{}):v.detail.reject("OpenAI API key is required for frontend-only translation.")}).catch(()=>{}):this.requestWorker.translationRequestHandler(v).then(()=>{},()=>{})}}
            @fetch-message-sharing-url=${v=>{this.requestWorker.fetchMessageSharingURLRequestHandler(v,l,this.urlManager,ge)}}
            @harmony-render-button-clicked=${v=>{this.harmonyRenderButtonClicked(v)}}
            @convo-deletion-button-clicked=${v=>{v.detail?this.selectedConversationIDs.delete(l):this.selectedConversationIDs.add(l),this.requestUpdate()}}
          ></euphony-conversation>
        `}else this.dataType==="codex"?f=d`
          <euphony-codex
            id="euphony-conversation-${l}"
            .sessionData=${c}
            conversation-label="Session"
            conversation-max-width=${te(this.isGridView?void 0:"800")}
            sharing-url=${te(this.isLoadingFromClipboard?void 0:u)}
            focus-mode-author=${JSON.stringify(this.focusModeAuthor)}
            focus-mode-recipient=${JSON.stringify(this.focusModeRecipient)}
            focus-mode-content-type=${JSON.stringify(this.focusModeContentType)}
            ?is-showing-metadata=${this.globalIsShowingMetadata}
            ?should-render-markdown=${this.globalShouldRenderMarkdown}
            ?disable-editing-mode-save-button=${!0}
            ?disable-preference-button=${!0}
            ?disable-image-preview-window=${!0}
            ?disable-token-window=${!0}
            theme="light"
            style=${this.buildEuphonyStyle(this.euphonyStyleConfig)}
            @refresh-renderer-list-requested=${v=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyRefreshRendererListRequestHandler(v).then(()=>{},()=>{}):this.requestWorker.refreshRendererListRequestHandler(v).then(()=>{},()=>{})}}
            @harmony-render-requested=${v=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyHarmonyRenderRequestHandler(v).then(()=>{},()=>{}):this.requestWorker.harmonyRenderRequestHandler(v).then(()=>{},()=>{})}}
            @conversation-metadata-button-toggled=${v=>{this.conversationMetadataButtonToggled(v).then(()=>{},()=>{})}}
            @markdown-button-toggled=${v=>{this.markdownButtonToggled(v).then(()=>{},()=>{})}}
            @translation-requested=${v=>{this.isFrontendOnlyMode?this.ensureOpenAIAPIKey().then(C=>{C?this.requestWorker.frontendOnlyTranslationRequestHandler(v,C).then(()=>{},()=>{}):v.detail.reject("OpenAI API key is required for frontend-only translation.")}).catch(()=>{}):this.requestWorker.translationRequestHandler(v).then(()=>{},()=>{})}}
            @fetch-message-sharing-url=${v=>{this.requestWorker.fetchMessageSharingURLRequestHandler(v,l,this.urlManager,ge)}}
            @harmony-render-button-clicked=${v=>{this.harmonyRenderButtonClicked(v)}}
          ></euphony-codex>
        `:f=d`
          <euphony-json-viewer
            tabindex="0"
            .data=${c}
          ></euphony-json-viewer>
        `;let k=d``;this.isEditorMode&&(k=d`
          <input
            type="checkbox"
            .checked=${this.selectedConversationIDs.has(l)}
            @change=${y=>{const v=y.target;v.checked?this.selectedConversationIDs.add(l):this.selectedConversationIDs.delete(l);const C=this.shadowRoot?.querySelector(`#euphony-conversation-${l}`);C&&(C.isConvoMarkedForDeletion=!v.checked),this.requestUpdate()}}
          />
        `),e=d`
        ${e}
        <div
          class="conversation-container"
          id=${`conversation-${l}`}
          tabindex="0"
        >
          <span class="conversation-id">
            <span class="share-button"
              ><sl-copy-button
                value=${u}
                size="small"
                copy-label="Copy sharable conversation URL"
              ></sl-copy-button
            ></span>
            ${k}
            <a href=${`#conversation-${l}`}>#${l}</a>
          </span>

          ${f}
        </div>
      `}let o=d``;this.isEditorMode&&(o=d`
        <button
          class="button-load"
          @click=${()=>{this.downloadButtonClicked()}}
        >
          Download
        </button>
      `);let s=d``;this.isEditorMode&&(s=d`
        <button
          class="select-all-button"
          @click=${()=>{this.selectAllButtonClicked()}}
        >
          ${this.selectedConversationIDs.size===this.totalConversationSize?"Unselect All":"Select All"}
        </button>
      `);const i=d`
      <div
        id="popper-tooltip"
        class="popper-tooltip hidden"
        role="tooltip"
        @click=${a=>{a.stopPropagation()}}
      >
        <div class="popper-content">
          <span class="popper-label">Hello</span>
        </div>
        <div class="popper-arrow"></div>
      </div>
    `,n=d`
      <euphony-preference-window
        ?is-hidden=${!this.showPreferenceWindow}
        .enabledOptions=${{maxMessageHeight:!0,gridView:!0,advanced:!0,messageLabel:!0,focusMode:!0,expandAndCollapseAll:!0}}
        .defaultOptions=${{gridView:this.isGridView,gridViewColumnWidth:this.gridViewColumnWidth,comparisonWidth:this.comparisonColumnWidth}}
        @preference-window-close-clicked=${()=>{this.showPreferenceWindow=!1}}
        @max-message-height-changed=${a=>{this.preferenceWindowMaxMessageHeightChanged(a)}}
        @message-label-changed=${a=>{this.preferenceWindowMessageLabelChanged(a)}}
        @grid-view-column-width-changed=${a=>{this.preferenceWindowGridViewColumnWidthChanged(a)}}
        @comparison-width-changed=${a=>{this.preferenceWindowComparisonWidthChanged(a)}}
        @layout-changed=${a=>{this.preferenceWindowLayoutChanged(a)}}
        @expand-all-clicked=${()=>{this.preferenceWindowExpandAllClicked()}}
        @collapse-all-clicked=${()=>{this.preferenceWindowCollapseAllClicked()}}
        @translate-all-clicked=${()=>{this.preferenceWindowTranslateAllClicked()}}
        @focus-mode-settings-changed=${a=>{this.preferenceWindowFocusModeSettingsChanged(a)}}
      ></euphony-preference-window>
    `;let r=d``;return this.jmespathQuery!==""&&(r=d`${r}
        <div class="query-label">
          <span class="query-label-text">JMESPath=${this.jmespathQuery}</span>
          <span class="query-separator"></span>
          <span
            class="svg-icon icon"
            @click=${()=>{this.resetFilter("jmespath").then(()=>{},()=>{})}}
            >${F(Zi)}</span
          >
        </div> `),d`
      <div
        class="app"
        ?is-loading=${this.isLoadingData}
        style=${this.buildEuphonyStyle(this.appStyleConfig)}
      >
        ${i} ${n}

        <nightjar-confirm-dialog
          .header=${"Editor mode"}
          .message=${"Entering editor mode will disable pagination."}
          .yesButtonText=${"Enter"}
        ></nightjar-confirm-dialog>

        <nightjar-input-dialog
          .header=${"Editor mode"}
          .message=${"Entering editor mode will disable pagination."}
          .yesButtonText=${"Enter"}
        ></nightjar-input-dialog>

        <euphony-search-window
          @search-query-submitted=${a=>{this.searchWindowQuerySubmitted(a).then(()=>{},()=>{})}}
        ></euphony-search-window>

        <euphony-token-window
          @refresh-renderer-list-requested=${a=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyRefreshRendererListRequestHandler(a).then(()=>{},()=>{}):this.requestWorker.refreshRendererListRequestHandler(a).then(()=>{},()=>{})}}
          @harmony-render-requested=${a=>{this.isFrontendOnlyMode?this.requestWorker.frontendOnlyHarmonyRenderRequestHandler(a).then(()=>{},()=>{}):this.requestWorker.harmonyRenderRequestHandler(a).then(()=>{},()=>{})}}
        ></euphony-token-window>

        <div class="toast-container">
          <nightjar-toast
            id="toast-euphony"
            duration=${Rp[this.toastType]}
            message=${this.toastMessage}
            type=${this.toastType}
          ></nightjar-toast>
        </div>

        <div class="header">
          <a class="name" href="./"
            >${this.isEditorMode?"Euphony Editor":"Euphony"}</a
          >
          <a class="header-link header-link-sessions" href="./sessions.html"
            >Sessions</a
          >
          <a
            class="header-link header-link-sessions-demo"
            href="./sessions.html?demo=1"
            >Sessions demo</a
          >
          <input
            id="local-file-input"
            type="file"
            accept=".json,.jsonl,application/json,application/x-ndjson,text/plain"
            hidden
            @change=${a=>{this.localFileInputChanged(a)}}
          />
          <sl-input
            size="small"
            placeholder="Public JSON or JSONL URL"
            value=${Xo}
            clearable
            spellcheck="false"
            @keydown=${a=>{a.stopPropagation();const c=a.target;a.key==="Enter"&&this.loadButtonClicked().then(()=>{c?.blur()},()=>{})}}
          >
          </sl-input>

          <button
            class="button-load"
            @click=${()=>{this.loadButtonClicked().then(()=>{},()=>{})}}
          >
            Load
          </button>

          ${o}

          <button
            class="button button-menu"
            @click=${()=>{if(this.showToolBarMenu=!this.showToolBarMenu,this.showToolBarMenu){const a=this.shadowRoot?.querySelector(".menu-container");a&&a.focus()}}}
          >
            <span class="svg-icon question-icon">${F(Qh)}</span>
            <div
              class="menu-container"
              ?no-show=${!this.showToolBarMenu}
              tabindex="0"
              @blur=${a=>{const c=a.relatedTarget;let l=0;c?.classList.contains("button-menu")||(c?.tagName==="NIGHTJAR-MENU"&&(l=200),setTimeout(()=>{this.showToolBarMenu=!1},l))}}
            >
              <nightjar-menu
                .menuItems=${[{name:"Preferences",icon:wi},{name:"Load without cache",icon:ep},{name:"Load from clipboard",icon:tp},{name:"Load local file",icon:ba},{name:this.isEditorMode?"Leave editor mode":"Editor mode",icon:sp},{name:"Filter data",icon:ip},{name:"Code",icon:op}]}
                @menu-item-clicked=${a=>{this.menuItemClicked(a)}}
              ></nightjar-menu>
            </div>
          </button>
        </div>

        <div class="content">
          <div class="loader-container" ?is-loading=${this.isLoadingData}>
            <div class="loader-label">Loading data</div>
            <div class="loader"></div>
          </div>

          <div
            class="empty-error-message"
            ?is-hidden=${this.totalConversationSize>0}
          >
            ☹️ No conversation loaded
          </div>

          <div class="content-center">
            <div
              class="grid-header"
              ?is-hidden=${this.totalConversationSize===0}
            >
              ${s}
              <div class="count-label">
                ${this.isEditorMode?`${ii(this.selectedConversationIDs.size)} / `:""}
                ${ii(this.totalConversationSize)}
                ${this.jmespathQuery!==""?"matched":"total"}
                ${this.dataType==="json"?"items":"conversations"}
                ${this.jmespathQuery!==""?`(${ii(this.totalConversationSizeIncludingUnfiltered)} total)`:""}
              </div>
              ${r}
            </div>

            <div class="conversation-list" ?is-grid-view=${this.isGridView}>
              ${e}
            </div>

            <div class="footer">
              <nightjar-pagination
                ?is-hidden=${this.totalConversationSize<1}
                .curPage=${this.curPage}
                .totalPageNum=${this.totalPageNum}
                .itemsPerPage=${this.itemsPerPage}
                .itemsPerPageOptions=${[1,2,3,4,5,10,25,50,100]}
                @page-clicked=${a=>{this.pageClicked(a)}}
                @items-per-page-changed=${a=>{this.itemsPerPageChanged(a)}}
              ></nightjar-pagination>
            </div>
          </div>

          <div class="content-left">
            <div class="content-left-inner"></div>
            <div class="left-margin-footer">
              <div class="cache-row">
                <div
                  class="cache-info"
                  ?is-hidden=${!this.isLoadingFromCache}
                  @mouseenter=${a=>{this.cacheInfoMouseEnter(a)}}
                  @mouseleave=${()=>{this.cacheInfoMouseLeave()}}
                >
                  <span class="svg-icon icon">
                    ${F(fa)}
                  </span>
                  <span class="cache-label"> Data loaded from cache</span>
                </div>
              </div>
            </div>
          </div>

          <div class="content-right">
            <div class="content-right-inner"></div>
            <div class="scroll-button-container">
              <button
                class="scroll-button scroll-button-up"
                ?is-visible=${this.showScrollTopButton}
                @click=${()=>{this.scrollToTop(0,"smooth")}}
              >
                <span class="svg-icon icon"> ${F(xr)} </span>
              </button>
              <button
                class="scroll-button scroll-button-down"
                ?is-visible=${this.showScrollTopButton}
                @click=${()=>{this.scrollToBottom("smooth")}}
              >
                <span class="svg-icon icon"> ${F(xr)} </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `}};j.styles=[Z`
      ${ie(ma)}
      ${ie(_p)}
    `];V([M()],j.prototype,"allConversationData",2);V([M()],j.prototype,"conversationData",2);V([M()],j.prototype,"JSONData",2);V([M()],j.prototype,"codexSessionData",2);V([M()],j.prototype,"dataType",2);V([M()],j.prototype,"isLoadingData",2);V([M()],j.prototype,"curPage",2);V([M()],j.prototype,"globalIsShowingMetadata",2);V([M()],j.prototype,"globalShouldRenderMarkdown",2);V([M()],j.prototype,"jmespathQuery",2);V([M()],j.prototype,"focusModeAuthor",2);V([M()],j.prototype,"focusModeRecipient",2);V([M()],j.prototype,"focusModeContentType",2);V([W("nightjar-toast#toast-euphony")],j.prototype,"toastComponent",2);V([M()],j.prototype,"toastMessage",2);V([M()],j.prototype,"toastType",2);V([W("nightjar-confirm-dialog")],j.prototype,"confirmDialogComponent",2);V([W("nightjar-input-dialog")],j.prototype,"inputDialogComponent",2);V([W("euphony-search-window")],j.prototype,"searchWindowComponent",2);V([W("euphony-token-window")],j.prototype,"tokenWindowComponent",2);V([W(".conversation-grid")],j.prototype,"conversationGridElement",2);V([W("#local-file-input")],j.prototype,"localFileInputElement",2);V([M()],j.prototype,"itemsPerPage",2);V([M()],j.prototype,"isEditorMode",2);V([M()],j.prototype,"selectedConversationIDs",2);V([M()],j.prototype,"isFrontendOnlyMode",2);V([M()],j.prototype,"showToolBarMenu",2);V([M()],j.prototype,"isLoadingFromCache",2);V([M()],j.prototype,"isLoadingFromClipboard",2);V([M()],j.prototype,"isGridView",2);V([M()],j.prototype,"gridViewColumnWidth",2);V([M()],j.prototype,"showPreferenceWindow",2);V([W("#popper-tooltip")],j.prototype,"popperTooltip",2);V([M()],j.prototype,"showScrollTopButton",2);j=V([ye("euphony-app")],j);
