{const a=Math.round,b=Math.floor,c=Math.log10,d=Math.ceil,e=1/0,f=document,g=2,h=1,i=12,j=10,k="Lucida Sans Typewriter",l=20,m=4,n=4,o=400,p=4,q=24,r=12,s=[10,10],t=[10,10],u=[1,2,5,10],v=4*i,w=2*i,x=["rgb(0,114,190)","rgb(218,83,25)","rgb(238,178,32)","rgb(126,47,142)","rgb(119,173,48)","rgb(77,191,239)","rgb(163,20,47)"],y="http://www.w3.org/2000/svg";function plotSvg(_,B,A,V,{title:ae="",subtitle:N="",xlabel:S="",ylabel:se="",xlim:E=[],ylim:z=[],style:ce="-",marker:he="",legend:T=[],xScale:ge="lin",yScale:ue="lin",grid:fe=!0,gridMinor:de=[],legendLocation:M="northeastoutside",linTip:ve=!0}={}){let C=[!1,!1];"log"==ge&&(B=B.map(c),1<E.length&&(E=E.map(c),isNaN(E[0])||isNaN(E[1])?E=[]:(E[0]=E[0]==-e?0:E[0],E[1]=E[1]==-e?0:E[1])),C[0]=!0),"log"==ue&&(A=A.map(c),1<z.length&&(z=z.map(c),isNaN(z[0])||isNaN(z[1])?z=[]:(z[0]=z[0]==-e?0:z[0],z[1]=z[1]==-e?0:z[1])),C[1]=!0);var Y=J(_),L=f.createElement("div");ne(Y,L),Q(L,"style","width:100%;height:100%;min-width:"+o+"px;min-height:200px;overflow:none");const R=ne(L,"svg",{id:"s_"+_,width:"100%",height:"100%"});Y=ee(R);R.innerHTML+="<style>\n<![CDATA[\ntext.cll {\nfont-size:"+j+"px;\nfill:black;\ndominant-baseline:central;\nfont-family:"+k+";\n}\n.b:hover polyline{\nopacity:0.5;\n}\n]]>\n</style>\n";let D=0,ye=v;var xe=ae.split("\n"),pe=N.split("\n");0<ae.length&&(D+=(q+p)*xe.length),0<N.length&&(D+=(r+p)*pe.length),D=D<19?25:D+6;let me=Y[3]-D-w,U=Y[2]-ye;0<S.length&&(me=me-i-p),0<se.length&&(ye=ye+i+2*p,U=U-i-2*p);L=ne(null,"g",{"pointer-events":"visible"});L.onclick=e=>Ke(e,0),L.ondblclick=e=>Ke(e,V);let be=0,X=0,we="none",F=null,ke=null;if(0<T.length&&0<V&&0<B.length){let e=D;"northeast"==M&&(e=D+2*n,be=4*n,we="white");var H=me-be,I=ne(R,"defs"),_e=(F=ne(L,"svg",{id:"sl_"+_}),ne(R,L),ne(I,"line",{id:"ll_"+_,x1:0,y1:0,x2:l,y2:0,"stroke-width":2,"vector-effect":"non-scaling-stroke"}),V);let i=T;T.length>V&&(i=T.slice(0,_e));I=(X=_e*(j+n)+n)>H?H:X;ne(null,F,{x:"100%",height:I}),ne(null,ke=oe(F,0,0,0,"100%",we,"black"),{id:"rect_leg_"+_});for(let t=0;t<_e;++t){var Be=t%x.length,Ae=t*(j+n)+n,Ve=new ne(F,"g",{id:"lgi_"+_+"_"+t}),Be=(ne(Ve,"use",{id:"lli_"+_+"_"+t,x:m,y:Ae+j/2,href:"#ll_"+_,stroke:x[Be]}),ne(Ve,"text",{id:"lti_"+_+"_"+t,class:"cll",x:m+l+m,y:Ae+j/2}));let e="";t<i.length&&(e=i[t]),Be.append(f.createTextNode(e))}H=(H=L.getBBox().width+2*m)>o?o:H;Q(ke,"width","100%"),Q(F,"width",H);let t=-H-m;U-=H+2*m,"northeast"==M&&(t-=m+v,U-=v-H-2*m),ne(null,F,{x:Y[2]+t,y:e,viewBox:"0 0 "+H+" "+I})}else U-=v;M=[ye,D,U,me];let Ne=[Y[2]-M[2],Y[3]-M[3]];const Se=ne(R,"svg",{id:"st_"+_,x:M[0],overflow:"visible",width:M[2]});let O=0;if(0<ae.length)for(let e=0;e<xe.length;++e)O=O+q+p,ie(Se,xe[e],"50%",O,q);if(0<N.length)for(let e=0;e<pe.length;++e)O=O+r+p,ie(Se,pe[e],"50%",O,r);H=-Y[3]+M[1]+M[3],I=ne(R,"g");le(I,[M[0],H]);const Ee=ne(I,"svg",{id:"s_btm_"+_,overflow:"visible",y:"100%",width:M[2]}),ze=(0<S.length&&ie(Ee,S,"50%",3*i,i),ne(R,"svg",{id:"sy_"+_,width:M[0],y:M[1],overflow:"visible",height:M[3]}));0<se.length&&ne(ze,"text",{"writing-mode":"sideways-lr",fill:"black","font-size":i,"text-anchor":"middle","font-family":"Sans,Arial","stroke-width":1,y:"50%",x:M[0]-4*i-p}).append(f.createTextNode(se));N=je(B,E),Y=je(A,z);let G=[N[0],Y[0],N[1]-N[0],Y[1]-Y[0]];const Te=ne(R,"svg",{id:"s_bg_"+_,preserveAspectRatio:"none",viewBox:"0 0 100 100",width:M[2],height:M[3],x:M[0],y:M[1]}),K=ne(R,"svg",{id:"sd_"+_,preserveAspectRatio:"none",viewBox:"0 0 100 100",width:M[2],height:M[3],x:M[0],y:M[1]});let P=[!(K.style.cursor="crosshair"),!1];de.length<1?(P[0]="log"==ge,P[1]="log"==ue):(P[0]=de[0],P[1]=de[1]);H=Je(G[2],s[0],C[0]),I=Je(G[3],s[1],C[1]);E.length<1&&4<=G[2]/H&&(G[0]=b(N[0]/H)*H,G[2]=d(N[1]/H)*H-G[0]),z.length<1&&4<=G[3]/I&&(G[1]=b(Y[0]/I)*I,G[3]=d(Y[1]/I)*I-G[1]),Ze(G);const Me=ne(K,"defs");""!=he&&(Z("o",[ne(null,"circle",{r:"5"})],1),Z("+",[re(null,0,-5,0,5,"","",""),re(null,-5,0,5,0,"","","")]),Z("*",[re(null,0,-5,0,5,"","",""),re(null,-5,0,5,0,"","",""),re(null,-3.5,-3.5,3.5,3.5,"","",""),re(null,-3.5,3.5,3.5,-3.5,"","","")]),Z(".",[ne(null,"circle",{r:"1.5","stroke-width":3})]),Z("x",[re(null,-3.5,-3.5,3.5,3.5,"","",""),re(null,-3.5,3.5,3.5,-3.5,"","","")]),Z("_",[re(null,-5,0,5,0,"","","")]),Z("|",[re(null,0,-5,0,5,"","","")]),Z("sq",[oe(null,-5,-5,10,10,"","","")],1),Z("^",[ne(null,"polygon",{points:"-5 3, 0 -5, 5 3"})],1),Z("v",[ne(null,"polygon",{points:"-5 -4, 0 5, 5 -4"})],1),Z("tr",[ne(null,"polygon",{points:"-3 -5, 5 0, -3 5"})],1),Z("tl",[ne(null,"polygon",{points:"-5 0, 3 5, 3 -5"})],1));var Ce=A.length/V,Ye=B.length==A.length;if(!Ye&&Ce!=B.length)throw new Error("Dimension must agree");var Le=ne(K,"g",{id:"gp_"+_});for(let l=0;l<V;++l){var Re=l%x.length,De=Array.isArray(ce)?ce[l]:ce,Ue="url(#m"+(Array.isArray(he)?he[l]:he)+"_"+_+")";let e="",t=2;switch(De){case":":e="2 3";break;case"--":e="12 6";break;case"-.":e="9 3 3 3";break;case"*":t=0}var Xe=ne(Le,"polyline",{class:"l",id:"pl_"+_+"_"+l,stroke:x[Re],"stroke-dasharray":e,"marker-start":Ue,"marker-mid":Ue,"marker-end":Ue,"stroke-width":t,"vector-effect":"non-scaling-stroke",fill:"none"});for(let e=0;e<Ce;++e){var Fe,He=Ye?B[l*Ce+e]:B[e],Ie=A[l*Ce+e];isFinite(He)&&isFinite(Ie)&&((Fe=K.createSVGPoint()).x=100*(He-G[0])/G[2],Fe.y=100-100*(Ie-G[1])/G[3],Xe.points.appendItem(Fe))}}S=oe(K,0,0,"100%","100%","none","black");const Oe=ne(null,S,{id:"plr_"+_,"pointer-events":"visible"}),W=("white"==we&&ne(R,L),ne(Se,"g",{id:"bd_"+_,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round",class:"b","pointer-events":"visible"}));function je(i,r){if(r.length<2){let t=i.length,l=-e,n=e;for(;t--;)isFinite(i[t])&&(n=i[t]<n?i[t]:n,l=i[t]>l?i[t]:l);r=[n,l]}return r[0]==r[1]&&(r[0]=r[0]-.5,r[1]=r[1]+.5),r}function Z(e,t,l=0){var n=ne(Me,"marker",{id:"m"+e+"_"+_,markerWidth:"10",markerHeight:"10",refX:"5",refY:"5",markerUnits:"userSpaceOnUse",fill:"none",stroke:"context-stroke"}),i=ne(n,"g",{"stroke-width":1.5,"vector-effect":"non-scaling-stroke",class:"marker_"+_});le(i,[5,5],[1,1]);for(let e=0;e<t.length;++e)ne(i,t[e]);l&&ne(Me,n.cloneNode(!0),{id:"mf"+e+"_"+_,fill:"context-stroke"})}function Ge(e,t,l=0){var n=J("gpl_"+e+"_"+t),i=l?"block":"none";J("pl_"+e+"_"+t).style.display=i,J("lgi_"+e+"_"+t).style.opacity=.3+.7*l,null!=n&&(n.style.display=i)}function Ke(e,t){var e=e.offsetY-$(F,"y")+te(F)[1],l=b((e-n/2)/(j+n)),e=J("pl_"+_+"_"+l);if(null!=e){var i="none"!=e.style.display,r=0==t?l+1:t;for(let e=0==t?l:0;e<r;++e)i?e==l&&0!=t||Ge(_,e):Ge(_,e,1)}}function Pe(){var e=ee(R),t=ee(K),l=e[2]-Ne[0],e=e[3]-Ne[1];t[2]!=l&&(Q(K,"width",l),Q(Te,"width",l),Q(Se,"width",l),Q(Ee,"width",l),null!=F&&(F.x.baseVal.value+=l-t[2]),W.transform.baseVal[0].matrix.e+=l-t[2]),t[3]!=e&&(Q(K,"height",e),Q(Te,"height",e),Q(ze,"height",e),null!=F)&&(l=(l=e-be)>X?X:l,Q(F,"height",l),F.viewBox.baseVal.height=l),qe()}function qe(){var t=f.getElementsByClassName("marker_"+_);for(let e=0;e<t.length;++e){var l=ee(K),n=te(K),i=n[2]/l[2],n=n[3]/l[3];t[e].transform.baseVal[1].matrix.a=i,t[e].transform.baseVal[1].matrix.d=n}}function We(e){for(var t=100*(e[0]-G[0])/G[2],l=100*(G[1]+G[3]-e[1]-e[3])/G[3],n=(K.viewBox.baseVal.width=100*e[2]/G[2],K.viewBox.baseVal.height=100*e[3]/G[3],K.viewBox.baseVal.x=t,K.viewBox.baseVal.y=l,ne(null,Oe,{x:t,y:l}),f.getElementsByClassName("cg_"+_));0<n.length;)n[0].remove();Ze(e),qe()}function Ze(e){for(let r=0;r<2;++r){var o=0<r?ze:Ee,h=Je(e[2+r],s[r],C[r]),g=e[r]+e[2+r],l=d(e[r]/h)*h,g=b(g/h)*h,u=100*(0<r?e[r]+e[r+2]-g:l-e[r])/e[2+r],f=a((g-l)/h);let n=Array();n=C[r]?et($e(l,h,g).map(e=>10**e)):et($e(l,h,g));const x=100*h/e[2+r];var l=ne(Te,"defs",{class:"cg_"+_}),v=ne(l,"g",{id:"mg"+r+"_"+_}),g=C[r]||P[r]?t[r]:0;if(0<g){let l=Array();C[r]&&1==h?(l=$e(1,9/(g-1),10).map(c)).forEach((e,t)=>{l[t]=l[t]*x}):l=$e(0,2/g*x,x);for(let e=1;e<l.length-1;++e)Qe(v,0<r?x-l[e]:l[e],r,4,"2 4")}Qe(v,0,r,8,"");for(let l=-1;l<=f;++l){var y=u+x*l;let e=null,t=(0<=l&&ne(null,e=0<r?ie(o,n[f-l],ee(o)[2]-.5*i,y+"%",i,"end"):ie(o,n[l],y+"%",.9*i,i),{"dominant-baseline":"central",class:"cg_"+_}),[y,0]);0<r&&(t=[t[1],t[0]]),ne(Te,"use",{href:"#mg"+r+"_"+_,x:t[0],y:t[1],class:"cg_"+_})}}}function Je(e,t,l){var t=e/t,n=b(c(t));const i=d(t/10**n);var r=u.findIndex(function(e){return e>=i}),t=u[r]*10**n;return l&&1<=e&&t<1?1:t}function Qe(e,t,l,n,i){let r=[t,0,0,n,t,100];0<l&&(r=[r[1],r[0],r[3],r[2],r[5],r[4]]),fe&&re(e,r[0],r[1],r[4],r[5],"rgb(223,223,223)",i);n=re(e,0,0,r[2],r[3]),t=re(e,-r[2],-r[3],0,0);le(n,[r[0],r[1]],[1,1]),le(t,[r[4],r[5]],[1,1]),ne(null,n,{class:"marker_"+_}),ne(null,t,{class:"marker_"+_})}function $e(t,l,e){var n=b((e-t)/l*(1+1e-12))+1;out=Array(n);for(let e=0;e<n;++e)out[e]=t+l*e;return out}function et(l){var n=["y","z","a","f","p","n","u","m","","k","M","G","T","P","E","Z","Y"],i=Array(l.length);for(let t=0;t<l.length;++t){var r=l[t].toExponential(5).split(/e/);let e=b(+r[1]/3)+8;e>n.length-1?e=n.length-1:e<0&&(e=0),i[t]=a(r[0]*10**(+r[1]-3*(e-8))*1e3)/1e3+n[e]}return i}function J(e){return f.getElementById(e)}function Q(e,t,l){e.setAttribute(t,l)}function $(e,t){return e.getAttribute(t)}function ee(e){return[e.x.baseVal.value,e.y.baseVal.value,e.width.baseVal.value,e.height.baseVal.value]}function te(e){return[e.viewBox.baseVal.x,e.viewBox.baseVal.y,e.viewBox.baseVal.width,e.viewBox.baseVal.height]}function le(e,t,l){t=null!=t?"translate("+t[0]+" "+t[1]+")":"";t+=null!=l?"scale("+l[0]+" "+l[1]+")":"",e.setAttribute("transform",t)}function ne(e,t,l){var n,i="string"==typeof t?f.createElementNS(y,t):t;for(n in l)Q(i,n,l[n]);return null!=e&&e.appendChild(i),i}function ie(e,t,l,n,i,r="middle",o="Sans,Arial",a="black"){e=ne(e,"text",{x:l,y:n,fill:a,"font-size":i,"text-anchor":r,"font-family":o,"stroke-width":1});return e.append(f.createTextNode(t)),e}function re(e,t,l,n,i,r="black",o="",a=1){return ne(e,"line",{x1:t,y1:l,x2:n,y2:i,stroke:r,"stroke-width":a,"stroke-dasharray":o,"vector-effect":"non-scaling-stroke"})}function oe(e,t,l,n,i,r="none",o="none",a=2,s=0){return ne(e,"rect",{x:t,y:l,width:n,height:i,rx:s,stroke:o,"stroke-width":a,fill:r,"vector-effect":"non-scaling-stroke"})}le(W,[M[2]-18,M[1]-24]),ne(W,"polyline",{stroke:"black",fill:"none",points:"8,0 8,16 2,9 8,16 14,9"}),ne(W,"polyline",{stroke:"black",fill:"none",points:"0,17 0,20 16,20 16,17"}),oe(W,0,0,21,21),W.onclick=()=>{var e,t;W.style.display="none",e='<svg width="'+(e=ee(R))[2]+'" height="'+e[3]+'" xmlns="'+y+'">',e=new Blob([e,R.innerHTML,"</svg>"],{type:"image/svg+xml;charset=utf-8"}),e=URL.createObjectURL(e),(t=f.createElement("a")).href=e,t.download="snapshot_"+ae+".svg",ne(f.body,t),t.click(),f.body.removeChild(t),W.style.display="block"},S.onclick=t=>{var l=ee(K),n=(s=te(K))[2]/l[2],i=s[3]/l[3],a=(t.offsetX-l[0])*n+s[0],a=(result=function(t,l,n,i,r,o){let a=null,s=e,c=0,h=0;var g=J("gp_"+t),u=g.children.length;for(let e=0;e<u;++e){var f=g.children[e],d=f.points;for(let e=1;e<d.length;++e){var v,y,x,p,m,b,w=d[e-1],k=d[e];l<w.x-i&&l<k.x-i||l>w.x+i&&l>k.x+i||n<w.y-r&&n<k.y-r||n>w.y+r&&n>k.y+r||(v=k.x-w.x,x=(v*(l-w.x)+(y=k.y-w.y)*(n-w.y))/(v*v+y*y),1<=(x=((v=w.x+v*x)-l)*(v-l)/i/i+((y=w.y+y*x)-n)*(y-n)/r/r))||x>s||(s=x,a=f,x=w.x<l?l-w.x:w.x-l,p=w.y<n?n-w.y:w.y-n,m=k.x<l?l-k.x:k.x-l,b=k.y<n?n-k.y:k.y-n,x<m&&x<i&&p<r?(c=w.x,h=w.y):m<i&&b<r?(c=k.x,h=k.y):o&&0!=$(f,"stroke-width")?(c=v,h=y):a=null)}}return{ele:a,x:c,y:h}}(_,a,t=(t.offsetY-l[1])*i+s[1],s=6*n,c=6*i,ve)).ele;if(null!=a){var t=result.x,s=result.y,c="pl_"+_,a=a.id,c=a.slice(c.length,a.length),a=J("lti_"+_+c),h=$(J("pl_"+_+c),"stroke"),g=function(e,t,l){return B=e[0]/100*t[2]+t[0],A=(1-e[1]/100)*t[3]+t[1],[B=l[0]?10**B:B,A=l[1]?10**A:A]}([t,s],G,C);let e=J("gpl_"+_+c);null==e&&(e=ne(K,"g",{id:"gpl_"+_+c}));const f=ne(e,"g",{class:"marker_"+_}),d=ne(f,"g");c=oe(d,0,-32,1,32,h,"rgb(223,223,223)",1,rx=4),h=(le(f,[t,s],[n,i]),f.onclick=e=>{e.ctrlKey?u(1):(f.remove(),1<e.detail&&We(G))},null!=a&&(ne(null,text=ie(d,a.textContent,2,-33,12,"start","Sans,Arial","white"),{"font-weight":"bold"}),ne(null,c,{y:-46,height:46})),ie(d,"x: "+et([g[0]]),2,-19,12,"start","Sans,Arial","white"),ie(d,"y: "+et([g[1]]),2,-5,12,"start","Sans,Arial","white"),f.getBBox());const v=[h.width+4,h.height],y=(ne(null,c,{width:v[0]}),null!=a&&re(d,0,-31,v[0],-31,stroke="white"),re(f,0,0,6,-6));t=d.getBoundingClientRect();let r=t.right>l[0]+l[2],o=t.y<l[1];function u(e){let t=5,l=-5,n=1,i=1;e&&([r,o]=[!o,r]),r&&(t=-v[0]-5,n=-1),o&&(l=v[1]+5,i=-1),le(d,[t,l]),le(y,null,[n,i])}u(!1),oe(f,-2,-2,4,4,"black"),ne(f,"circle",{r:6,fill:"none","pointer-events":"visible"})}},R.oncontextmenu=e=>{e.preventDefault()},K.onmousedown=t=>{{let e=0;if(t.button==h||t.button==g&&t.ctrlKey)e=1;else if(t.button!=g)return;K.style.cursor=e?"move":"zoom-in";const o=t.offsetX,a=t.offsetY,l=oe(R,o,a,0,0,"black"),n=e?0:.3;ne(null,l,{id:"zoom_rect"+_,"fill-opacity":n}),R.onmousemove=e=>{var t=o,l=a,n=J("zoom_rect"+_),i=e.offsetX,t=i-t,l=(e=e.offsetY)-l,r=0==$(n,"fill-opacity");r||0<=t?Q(n,"width",t):ne(null,n,{width:-t,x:i}),r||0<=l?Q(n,"height",l):ne(null,n,{height:-l,y:e})}}},K.ondblclick=()=>We(G),R.onmousedown=e=>{e.preventDefault()},R.onmouseup=()=>{var t=J("zoom_rect"+_);if(K.style.cursor="crosshair",(R.onmousemove=null)!=t){var l=0==$(t,"fill-opacity"),n=ee(t);if(t.remove(),!~l||0!=n[2]&&0!=n[3]){var t=te(K),i=ee(K);let e=[];e=l?[-n[2]/i[2],n[3]/i[3],1,1]:[(n[0]-i[0])/i[2],1-(n[1]+n[3]-i[1])/i[3],n[2]/i[2],n[3]/i[3]];l=[G[0]+G[2]*t[0]/100,G[1]+G[3]*(100-t[3]-t[1])/100,G[2]*t[2]/100,G[3]*t[3]/100];We([l[0]+e[0]*l[2],l[1]+e[1]*l[3],e[2]*l[2],e[3]*l[3]])}}},0<T.length&&(L.onwheel=e=>{X;var t=ee(F),l=te(F),t=X-t[3];return l[1]+=e.deltaY,l[1]<0&&(l[1]=0),t<l[1]&&(l[1]=t),F.viewBox.baseVal.y=l[1],ke.y.baseVal.value=l[1],!1}),new ResizeObserver(()=>Pe()).observe(R),Pe()}}