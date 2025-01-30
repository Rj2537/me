import{j as e,f as h,a as l,b as i,s as c,P as f,i as d,c as n,R as g,d as j}from"../chunks/chunk-DtRWE-0Q.js";/* empty css                      */const u="Rj's portfolio",m={id:"03d6d4db30a661cac94394f718a0a591671ee516b32c9c085f85615801b01576",name:"r_img_rAd7vGLHYmjsVlQ-Bxle1.jpg",description:null,projectId:"f2d67124-19ef-42f2-8093-2b9dff1368e6",size:19082,type:"image",format:"jpg",createdAt:"2025-01-27T17:12:18.038+00:00",meta:{width:384,height:384}},b=[],y=[],v=({})=>e.jsx(h,{className:"w-body",children:e.jsxs(l,{className:"w-box cry9bxc c1qyy4dh ct02u4h c549zgt c5owknd cq9s89h cs6z0dm cavd3zn c27ocrh c7ldp7x cjj93sn c174sw29",children:[e.jsxs(l,{className:"w-box cavd3zn cry9bxc c1qyy4dh ct02u4h",children:[e.jsx(i,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(c,{className:"w-text c1xkv71i",children:"Tab 1"})}),e.jsx(i,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(c,{className:"w-text c1xkv71i",children:"Tab 2"})}),e.jsx(i,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(c,{className:"w-text c1xkv71i",children:"Tab 3"})}),e.jsx(i,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(c,{className:"w-text c1xkv71i",children:"Tab 4"})}),e.jsx(l,{"tab-underline":"true",className:"w-box cdwd3jx c3xzas1 c1dj4rt4 chcbhqo c1hkwh2u c63p0sx"})]}),e.jsx(f,{code:`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
<script>
 (() => {
     const tabs = document.querySelectorAll('[tab-item]');
     const underline = document.querySelector('[tab-underline]');

     gsap.set(underline, {
         width: tabs[0].offsetWidth,
         x: tabs[0].offsetLeft
     });

     tabs.forEach((tab, index) => {
         tab.addEventListener('mouseenter', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tab.offsetWidth,
                 x: tab.offsetLeft,
             });
         });

         tab.addEventListener('mouseleave', () => {
             gsap.to(underline, {
                 duration: 0.3,
                 width: tabs[0].offsetWidth,
                 x: tabs[0].offsetLeft,
             });
         });
     });
 })();
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})}),w=({data:s})=>{const{pageMeta:t}=s,{origin:r}=new URL(s.url),o={"@context":"https://schema.org","@type":"WebSite",name:u,url:r};let p=t.socialImageUrl;return t.socialImageAssetName&&(p=`${r}${d({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[s.url&&e.jsx("meta",{property:"og:url",content:s.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:u}),p&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:x})=>e.jsx("meta",{property:a,content:x},a)),m&&e.jsx("link",{rel:"icon",href:d({src:`${n}${m.name}`,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),b.map(a=>e.jsx("link",{rel:"preload",href:`${n}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),y.map(a=>e.jsx("link",{rel:"preload",href:`${n}${a.name}`,as:"image"},a.id))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:w},Symbol.toStringTag,{value:"Module"})),S=({data:s})=>{const{system:t,resources:r,url:o}=s;return e.jsx(g.Provider,{value:{imageLoader:d,assetBaseUrl:n,resources:r},children:e.jsx(v,{system:t},o)})},T=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/animated-tab-indicator-with-gsap/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/animated-tab-indicator-with-gsap/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:T}}};export{P as configValuesSerialized};
