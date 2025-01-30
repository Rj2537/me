import{j as e,f as m,a as o,b as c,s as i,P as x,i as p,c as l,R as h,d as g}from"../chunks/chunk-B8dVbD-V.js";/* empty css                      */const d=void 0,f=void 0,b=[],j=[],v=({})=>e.jsx(m,{className:"w-body",children:e.jsxs(o,{className:"w-box cry9bxc c1qyy4dh ct02u4h c549zgt c5owknd cq9s89h cs6z0dm cavd3zn c27ocrh c7ldp7x cjj93sn c174sw29",children:[e.jsxs(o,{className:"w-box cavd3zn cry9bxc c1qyy4dh ct02u4h",children:[e.jsx(c,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(i,{className:"w-text c1xkv71i",children:"Tab 1"})}),e.jsx(c,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(i,{className:"w-text c1xkv71i",children:"Tab 2"})}),e.jsx(c,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(i,{className:"w-text c1xkv71i",children:"Tab 3"})}),e.jsx(c,{"tab-item":"true",className:"w-link c1yzp155 c14elrlg ch51qie c125plrs c1xkv71i c135vpv5 czx5uru c1bxzun6 cy1haag",children:e.jsx(i,{className:"w-text c1xkv71i",children:"Tab 4"})}),e.jsx(o,{"tab-underline":"true",className:"w-box cdwd3jx c3xzas1 c1dj4rt4 chcbhqo c1hkwh2u c63p0sx"})]}),e.jsx(x,{code:`<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"><\/script>
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
<\/script>`,executeScriptOnCanvas:!0,clientOnly:!0,className:"w-html-embed"})]})}),y=({data:s})=>{const{pageMeta:t}=s,{origin:n}=new URL(s.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${n}${p({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[s.url&&e.jsx("meta",{property:"og:url",content:s.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),d,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),d,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:u})=>e.jsx("meta",{property:a,content:u},a)),f,b.map(a=>e.jsx("link",{rel:"preload",href:`${l}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),j.map(a=>e.jsx("link",{rel:"preload",href:`${l}${a.name}`,as:"image"},a.id))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:y},Symbol.toStringTag,{value:"Module"})),z=({data:s})=>{const{system:t,resources:n,url:r}=s;return e.jsx(h.Provider,{value:{imageLoader:p,assetBaseUrl:l,resources:n},children:e.jsx(v,{system:t},r)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/animated-tab-indicator-with-gsap/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/animated-tab-indicator-with-gsap/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{N as configValuesSerialized};
