(()=>{var e,t={1232:(e,t,n)=>{"use strict";n.r(t);const i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"title":"Icon","name":"kadence/icon","category":"kadence-blocks","attributes":{"icons":{"type":"array","default":[{"icon":"fe_aperture","link":"","target":"_self","size":50,"width":2,"title":"","color":"palette4","background":"transparent","border":"palette4","borderRadius":0,"borderWidth":2,"padding":[20,20,20,20],"paddingUnit":"px","style":"default","margin":["","","",""],"marginUnit":"px","hColor":"","hBackground":"","hBorder":"","linkTitle":"","tabletSize":"","mobileSize":"","tabletMargin":["","","",""],"mobileMargin":["","","",""],"tabletPadding":["","","",""],"mobilePadding":["","","",""]}]},"iconCount":{"type":"number","default":1},"uniqueID":{"type":"string","default":""},"blockAlignment":{"type":"string","default":""},"textAlignment":{"type":"string","default":"center"},"tabletTextAlignment":{"type":"string"},"mobileTextAlignment":{"type":"string"},"verticalAlignment":{"type":"string"},"gap":{"type":"array","default":["","",""]},"gapUnit":{"type":"string","default":"px"},"inQueryBlock":{"type":"boolean","default":false}},"supports":{"ktdynamic":true},"usesContext":["postId","queryId"]}');n(1349);var o=n(9995);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}var a=n(9307),l=n(4184),d=n.n(l),s=n(9543),c=n(6222),g=n(9818),u=n(4981),b=n(2819);function p(e){const{icons:t,iconCount:n,blockAlignment:i,textAlignment:o}=e;let r=[];t?.length&&(0,b.times)(n,(e=>{let n=t[e];if(void 0===n?.padding?.[0]){const e=parseInt(n.padding,10);n.padding=[e,e,e,e]}void 0===n?.margin?.[0]&&(n.margin=["","","",""]),void 0!==n?.marginTop&&n.marginTop&&(n.margin[0]=n.marginTop?parseInt(n.marginTop,10):""),void 0!==n?.marginRight&&n.marginRight&&(n.margin[1]=n.marginRight?parseInt(n.marginRight,10):""),void 0!==n?.marginBottom&&n.marginBottom&&(n.margin[2]=n.marginBottom?parseInt(n.marginBottom,10):""),void 0!==n?.marginLeft&&n.marginLeft&&(n.margin[3]=n.marginLeft?parseInt(n.marginLeft,10):"");let i={...n};r.push((0,u.createBlock)("kadence/single-icon",i))}));let a=i,l=o;return"center"===i&&(a="none",l="center"),[{...e,blockAlignment:a,textAlignment:l,icons:[],iconCount:1},r]}var m=n(5736),v=n(2175);const k=window.wp.primitives,f=(0,a.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},(0,a.createElement)(k.Path,{d:"M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"}));var y=n(5609);const h=(0,g.withDispatch)(((e,t,n)=>({insertIcon(i){const{clientId:o}=t,{insertBlock:r}=e(v.store),{getBlock:a}=n.select(v.store),l=a(o);console.log(o),console.log(parseInt(l.innerBlocks.length)),r(i,void 0!==l?.innerBlocks?.length?parseInt(l.innerBlocks.length):0,o)},insertIcons(n){const{clientId:i}=t,{replaceInnerBlocks:o}=e(v.store);o(i,n)}})))((function(e){let{attributes:t,className:n,setAttributes:o,isSelected:r,iconsBlock:l,insertIcon:k,insertIcons:h,clientId:x,context:C}=e;const{inQueryBlock:w,icons:B,blockAlignment:I,textAlignment:_,tabletTextAlignment:A,mobileTextAlignment:E,uniqueID:R,verticalAlignment:T,gap:S,gapUnit:z}=t,[W,$]=(0,a.useState)("general"),{removeBlock:O}=(0,g.useDispatch)("core/block-editor"),{addUniqueID:N}=(0,g.useDispatch)("kadenceblocks/data"),{isUniqueID:P,isUniqueBlock:D,previewDevice:q}=(0,g.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,n)=>e("kadenceblocks/data").isUniqueBlock(t,n),previewDevice:e("kadenceblocks/data").getPreviewDeviceType()})),[x]);(0,a.useEffect)((()=>{(0,c.setBlockDefaults)("kadence/icon",t);let e=(0,c.getUniqueId)(R,x,P,D);e!==R?(t.uniqueID=e,o({uniqueID:e}),N(e,x)):N(R,x),o({inQueryBlock:(0,c.getInQueryBlock)(C,w)})}),[]),(0,a.useEffect)((()=>{if(R&&!l.innerBlocks.length)if(B?.length&&void 0!==i?.attributes?.icons?.default&&!(0,b.isEqual)(i.attributes.icons.default,B)){const e=p(t);o(e[0]),h(e[1])}else O(x,!0)}),[l.innerBlocks.length]);const U=(0,v.useBlockProps)({className:n,"data-align":"left"===I||"right"===I||"center"===I?I:void 0}),M=(0,c.getPreviewSize)(q,void 0!==S?.[0]?S[0]:"",void 0!==S?.[1]?S[1]:"",void 0!==S?.[2]?S[2]:""),K=T&&"middle"===T?"center":T,L=(0,c.getPreviewSize)(q,_||void 0,void 0!==A&&A?A:void 0,void 0!==E&&E?E:void 0),V=d()({"kt-svg-icons":!0,[`kt-svg-icons-${R}`]:R,[`kb-icon-halign-${L}`]:L,[`kb-icon-valign-${K}`]:K}),j=(0,v.useInnerBlocksProps)({className:V,style:{gap:""!==M?(0,c.getGapSizeOptionOutput)(M,z||"px"):void 0}},{allowedBlocks:["kadence/single-icon"],orientation:"horizontal",templateLock:!1,template:[["kadence/single-icon"]],renderAppender:!1,templateInsertUpdatesSelection:!0});return(0,a.createElement)("div",U,(0,a.createElement)(v.BlockControls,null,(0,a.createElement)(v.BlockAlignmentToolbar,{value:I,controls:["left","right"],onChange:e=>o({blockAlignment:e})}),(0,a.createElement)(y.ToolbarGroup,null,(0,a.createElement)(v.JustifyContentControl,{value:L,onChange:e=>{o("Mobile"===q?{mobileTextAlignment:e||""}:"Tablet"===q?{tabletTextAlignment:e||""}:{textAlignment:e||"center"})}}),(0,a.createElement)(v.BlockVerticalAlignmentControl,{value:K||"center",onChange:e=>o({verticalAlignment:e})})),(0,a.createElement)(y.ToolbarGroup,null,(0,a.createElement)(y.ToolbarButton,{className:"kb-icons-add-icon",icon:f,onClick:()=>{const e=l.innerBlocks[l.innerBlocks.length-1].attributes,t=JSON.parse(JSON.stringify(e));t.uniqueID="";const n=(0,u.createBlock)("kadence/single-icon",t);k(n)},label:(0,m.__)("Add Another Icon","kadence-blocks"),showTooltip:!0}))),(0,a.createElement)(s.KadenceInspectorControls,{blockSlug:"kadence/icon"},(0,a.createElement)(s.InspectorControlTabs,{panelName:"icon",allowedTabs:["general","advanced"],setActiveTab:e=>$(e),activeTab:W}),"general"===W&&(0,a.createElement)(s.KadencePanelBody,{panelName:"kb-icon-alignment-settings"},(0,a.createElement)(s.ResponsiveAlignControls,{label:(0,m.__)("Icon Alignment","kadence-blocks"),value:_||"center",mobileValue:E||"",tabletValue:A||"",onChange:e=>o({textAlignment:e||"center"}),onChangeTablet:e=>o({tabletTextAlignment:e||""}),onChangeMobile:e=>o({mobileTextAlignment:e||""}),type:"justify"}),void 0!==l?.innerBlocks?.length&&l.innerBlocks.length>1&&(0,a.createElement)(s.ResponsiveGapSizeControl,{label:(0,m.__)("Icons Gap","kadence-blocks"),value:void 0!==S?.[0]?S[0]:"",onChange:e=>o({gap:[e,void 0!==S[1]?S[1]:"",void 0!==S[2]?S[2]:""]}),tabletValue:void 0!==S?.[1]?S[1]:"",onChangeTablet:e=>o({gap:[void 0!==S[0]?S[0]:"",e,void 0!==S[2]?S[2]:""]}),mobileValue:void 0!==S?.[2]?S[2]:"",onChangeMobile:e=>o({gap:[void 0!==S[0]?S[0]:"",void 0!==S[1]?S[1]:"",e]}),min:0,max:"px"===z?200:12,step:"px"===z?1:.1,unit:z||"px",onUnit:e=>{o({gapUnit:e})},units:["px","em","rem"]}))),(0,a.createElement)("div",j))})),x=[{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"palette4",background:"transparent",border:"palette4",borderRadius:0,borderWidth:2,padding:[20,20,20,20],paddingUnit:"px",style:"default",margin:["","","",""],marginUnit:"px",hColor:"",hBackground:"",hBorder:"",linkTitle:"",tabletSize:"",mobileSize:"",tabletMargin:["","","",""],mobileMargin:["","","",""],tabletPadding:["","","",""],mobilePadding:["","","",""]}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:""},textAlignment:{type:"string",default:"center"},tabletTextAlignment:{type:"string"},mobileTextAlignment:{type:"string"},verticalAlignment:{type:"string"},inQueryBlock:{type:"boolean",default:!1}},migrate:p,supports:{ktdynamic:!0},save(e){let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l,verticalAlignment:c}=t,g=d()({"kt-svg-icons":!0,[`kt-svg-icons${l}`]:l,[`align${o||"none"}`]:!0,[`kb-icon-valign-${c}`]:c}),u=v.useBlockProps.save({className:g});return(0,a.createElement)("div",u,(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:"_blank"===n[t].target?n[t].target:void 0,rel:"_blank"===n[t].target?"noopener noreferrer":void 0,"aria-label":void 0!==n[t].linkTitle&&""!==n[t].linkTitle?n[t].linkTitle:void 0},(0,a.createElement)(s.IconSpanTag,{name:n[t].icon,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:""})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconSpanTag,{name:n[t].icon,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:""}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default",marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,hColor:"",hBackground:"",hBorder:"",linkTitle:""}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:""},textAlignment:{type:"string",default:"center"},tabletTextAlignment:{type:"string"},mobileTextAlignment:{type:"string"},verticalAlignment:{type:"string"},inQueryBlock:{type:"boolean",default:!1}},migrate:p,supports:{ktdynamic:!0},save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l,verticalAlignment:d}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"none"}${d?" kb-icon-valign-"+d:""}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:"_blank"===n[t].target?n[t].target:void 0,rel:"_blank"===n[t].target?"noopener noreferrer":void 0,"aria-label":void 0!==n[t].linkTitle&&""!==n[t].linkTitle?n[t].linkTitle:void 0,style:{marginTop:n[t].marginTop?n[t].marginTop+"px":void 0,marginRight:n[t].marginRight?n[t].marginRight+"px":void 0,marginBottom:n[t].marginBottom?n[t].marginBottom+"px":void 0,marginLeft:n[t].marginLeft?n[t].marginLeft+"px":void 0}},(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",ariaHidden:n[t].title?void 0:"true",style:{color:n[t].color?(0,c.KadenceColorOutput)(n[t].color):void 0,backgroundColor:n[t].background&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].background):void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].border):void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",ariaHidden:n[t].title?void 0:"true",style:{color:n[t].color?(0,c.KadenceColorOutput)(n[t].color):void 0,backgroundColor:n[t].background&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].background):void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].border):void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0,marginTop:n[t].marginTop?n[t].marginTop+"px":void 0,marginRight:n[t].marginRight?n[t].marginRight+"px":void 0,marginBottom:n[t].marginBottom?n[t].marginBottom+"px":void 0,marginLeft:n[t].marginLeft?n[t].marginLeft+"px":void 0}}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default",marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,hColor:"",hBackground:"",hBorder:""}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:"center"},textAlignment:{type:"string",default:"center"},tabletTextAlignment:{type:"string"},mobileTextAlignment:{type:"string"}},migrate:p,supports:{ktdynamic:!0},save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l,verticalAlignment:d}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"center"}${d||""}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:"_blank"===n[t].target?n[t].target:void 0,rel:"_blank"===n[t].target?"noopener noreferrer":void 0,"aria-label":void 0!==n[t].linkTitle&&""!==n[t].linkTitle?n[t].linkTitle:void 0,style:{marginTop:n[t].marginTop?n[t].marginTop+"px":void 0,marginRight:n[t].marginRight?n[t].marginRight+"px":void 0,marginBottom:n[t].marginBottom?n[t].marginBottom+"px":void 0,marginLeft:n[t].marginLeft?n[t].marginLeft+"px":void 0}},(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?(0,c.KadenceColorOutput)(n[t].color):void 0,backgroundColor:n[t].background&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].background):void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].border):void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?(0,c.KadenceColorOutput)(n[t].color):void 0,backgroundColor:n[t].background&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].background):void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?(0,c.KadenceColorOutput)(n[t].border):void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0,marginTop:n[t].marginTop?n[t].marginTop+"px":void 0,marginRight:n[t].marginRight?n[t].marginRight+"px":void 0,marginBottom:n[t].marginBottom?n[t].marginBottom+"px":void 0,marginLeft:n[t].marginLeft?n[t].marginLeft+"px":void 0}}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default"}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:"center"},textAlignment:{type:"string",default:"center"}},supports:{ktdynamic:!0},migrate:p,save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"center"}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:"_blank"===n[t].target?n[t].target:void 0,rel:"_blank"===n[t].target?"noopener noreferrer":void 0},(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default"}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:"center"},textAlignment:{type:"string",default:"center"}},supports:{ktdynamic:!0},migrate:p,save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"center"}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:"_blank"===n[t].target?n[t].target:void 0,rel:"_blank"===n[t].target?"noopener noreferrer":void 0},(0,a.createElement)("div",{style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0},className:`kt-svg-icon kt-svg-icon-${n[t].icon}`})),n[t].icon&&!n[t].link&&(0,a.createElement)("div",{style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0},className:`kt-svg-icon kt-svg-icon-${n[t].icon}`}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default"}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:"center"},textAlignment:{type:"string",default:"center"}},supports:{ktdynamic:!0},migrate:p,save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"center"}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:n[t].target},(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}}));var t})))}},{attributes:{icons:{type:"array",default:[{icon:"fe_aperture",link:"",target:"_self",size:50,width:2,title:"",color:"#444444",background:"transparent",border:"#444444",borderRadius:0,borderWidth:2,padding:20,style:"default"}]},iconCount:{type:"number",default:1},uniqueID:{type:"string",default:""},blockAlignment:{type:"string",default:"center"},textAlignment:{type:"string",default:"center"}},supports:{ktdynamic:!0},migrate:p,save:e=>{let{attributes:t}=e;const{icons:n,iconCount:i,blockAlignment:o,textAlignment:r,uniqueID:l}=t;return(0,a.createElement)("div",{className:`kt-svg-icons kt-svg-icons${l} align${o||"center"}`,style:{textAlign:r||"center"}},(0,b.times)(i,(e=>{return t=e,(0,a.createElement)("div",{className:`kt-svg-style-${n[t].style} kt-svg-icon-wrap kt-svg-item-${t}`},n[t].icon&&n[t].link&&(0,a.createElement)("a",{href:n[t].link,className:"kt-svg-icon-link",target:n[t].target,rel:"noopener noreferrer"},(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}})),n[t].icon&&!n[t].link&&(0,a.createElement)(s.IconRender,{className:`kt-svg-icon kt-svg-icon-${n[t].icon}`,name:n[t].icon,size:n[t].size,strokeWidth:"fe"===n[t].icon.substring(0,2)?n[t].width:void 0,title:n[t].title?n[t].title:"",style:{color:n[t].color?n[t].color:void 0,backgroundColor:n[t].background&&"default"!==n[t].style?n[t].background:void 0,padding:n[t].padding&&"default"!==n[t].style?n[t].padding+"px":void 0,borderColor:n[t].border&&"default"!==n[t].style?n[t].border:void 0,borderWidth:n[t].borderWidth&&"default"!==n[t].style?n[t].borderWidth+"px":void 0,borderRadius:n[t].borderRadius&&"default"!==n[t].style?n[t].borderRadius+"%":void 0}}));var t})))}}];(0,u.registerBlockType)("kadence/icon",{...i,title:(0,m.__)("Icon","kadence-blocks"),description:(0,m.__)("Create engaging lists with icons for bullets.","kadence-blocks"),keywords:[(0,m.__)("icon","kadence-blocks"),(0,m.__)("svg","kadence-blocks"),"KB"],icon:{src:o.iconIcon},edit:e=>{const{clientId:t}=e,{iconsBlock:n}=(0,g.useSelect)((e=>{const{getBlock:n}=e("core/block-editor");return{iconsBlock:n(t)}}),[t]);return(0,a.createElement)(h,r({iconsBlock:n},e))},save:function(e){let{attributes:t,className:n}=e;const{blockAlignment:i,uniqueID:o,verticalAlignment:r}=t,l=d()({"kt-svg-icons":!0,[`kt-svg-icons${o}`]:o,[`align${i||"none"}`]:!0,[`kb-icon-valign-${r}`]:r}),s=v.useBlockProps.save({className:l});return(0,a.createElement)("div",s,(0,a.createElement)(v.InnerBlocks.Content,null))},deprecated:x,example:{}})},1349:(e,t,n)=>{"use strict";const i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"title":"Single Icon","name":"kadence/single-icon","parent":["kadence/icon"],"category":"kadence-blocks","attributes":{"uniqueID":{"type":"string","default":""},"icon":{"type":"string","default":"fe_aperture"},"link":{"type":"string","default":""},"target":{"type":"string","default":"_self"},"size":{"type":"number","default":50},"width":{"type":"number","default":2},"title":{"type":"string","default":""},"color":{"type":"string","default":""},"background":{"type":"string","default":"transparent"},"border":{"type":"string","default":""},"borderRadius":{"type":"number","default":0},"borderWidth":{"type":"number","default":2},"padding":{"type":"array","default":["xs","xs","xs","xs"]},"paddingUnit":{"type":"string","default":"px"},"style":{"type":"string","default":"default"},"margin":{"type":"array","default":["","","",""]},"marginUnit":{"type":"string","default":"px"},"hColor":{"type":"string","default":""},"hBackground":{"type":"string","default":""},"hBorder":{"type":"string","default":""},"linkTitle":{"type":"string","default":""},"tabletSize":{"type":"number","default":""},"mobileSize":{"type":"number","default":""},"tabletMargin":{"type":"array","default":["","","",""]},"mobileMargin":{"type":"array","default":["","","",""]},"tabletPadding":{"type":"array","default":["","","",""]},"mobilePadding":{"type":"array","default":["","","",""]},"inQueryBlock":{"type":"boolean","default":false}},"supports":{"ktdynamic":true,"html":false,"reusable":false},"usesContext":["postId","queryId"]}');var o=n(9995),r=n(9307),a=n(9543),l=n(6222),d=n(9818);function s(e){let{attributes:t,previewDevice:n}=e;const{inQueryBlock:i,icon:o,link:d,target:s,size:c,width:g,title:u,text:b,hColor:p,hBackground:m,tabletSize:v,hBorder:k,color:f,background:y,border:h,borderRadius:x,padding:C,borderWidth:w,style:B,linkTitle:I,level:_,blockAlignment:A,textAlignment:E,tabletTextAlignment:R,mobileTextAlignment:T,tabletPadding:S,mobilePadding:z,paddingUnit:W,tabletMargin:$,mobileMargin:O,margin:N,marginUnit:P,mobileSize:D,uniqueID:q,verticalAlignment:U}=t,M=(0,l.getPreviewSize)(n,c||void 0,void 0!==v&&v?v:void 0,void 0!==D&&D?D:void 0),K=(0,l.getPreviewSize)(n,N&&void 0!==N[0]?N[0]:void 0,$&&void 0!==$[0]?$[0]:void 0,O&&void 0!==O[0]?O[0]:void 0),L=(0,l.getPreviewSize)(n,N&&void 0!==N[1]?N[1]:void 0,$&&void 0!==$[1]?$[1]:void 0,O&&void 0!==O[1]?O[1]:void 0),V=(0,l.getPreviewSize)(n,N&&void 0!==N[2]?N[2]:void 0,$&&void 0!==$[2]?$[2]:void 0,O&&void 0!==O[2]?O[2]:void 0),j=(0,l.getPreviewSize)(n,N&&void 0!==N[3]?N[3]:void 0,$&&void 0!==$[3]?$[3]:void 0,O&&void 0!==O[3]?O[3]:void 0),Q=(0,l.getPreviewSize)(n,C&&void 0!==C[0]?C[0]:void 0,S&&void 0!==S[0]?S[0]:void 0,z&&void 0!==z[0]?z[0]:void 0),H=(0,l.getPreviewSize)(n,C&&void 0!==C[1]?C[1]:void 0,S&&void 0!==S[1]?S[1]:void 0,z&&void 0!==z[1]?z[1]:void 0),G=(0,l.getPreviewSize)(n,C&&void 0!==C[2]?C[2]:void 0,S&&void 0!==S[2]?S[2]:void 0,z&&void 0!==z[2]?z[2]:void 0),J=(0,l.getPreviewSize)(n,C&&void 0!==C[3]?C[3]:void 0,S&&void 0!==S[3]?S[3]:void 0,z&&void 0!==z[3]?z[3]:void 0),F=void 0!==W&&W?W:"px",X=void 0!==P&&P?P:"px";return(0,r.createElement)("div",{className:`kt-svg-style-${B} kt-svg-icon-wrap kt-svg-item-${q}`},o&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.IconRender,{className:`kt-svg-icon kt-svg-icon-${o}`,name:o,size:M,strokeWidth:"fe"===o.substring(0,2)?g:void 0,title:u||"",style:{color:f?(0,l.KadenceColorOutput)(f):void 0,backgroundColor:y&&"default"!==B?(0,l.KadenceColorOutput)(y):void 0,paddingTop:Q&&"default"!==B?(0,l.getSpacingOptionOutput)(Q,F):void 0,paddingRight:H&&"default"!==B?(0,l.getSpacingOptionOutput)(H,F):void 0,paddingBottom:G&&"default"!==B?(0,l.getSpacingOptionOutput)(G,F):void 0,paddingLeft:J&&"default"!==B?(0,l.getSpacingOptionOutput)(J,F):void 0,borderColor:h&&"default"!==B?(0,l.KadenceColorOutput)(h):void 0,borderWidth:w&&"default"!==B?w+"px":void 0,borderRadius:x&&"default"!==B?x+"%":void 0,marginTop:K?(0,l.getSpacingOptionOutput)(K,X):void 0,marginRight:L?(0,l.getSpacingOptionOutput)(L,X):void 0,marginBottom:V?(0,l.getSpacingOptionOutput)(V,X):void 0,marginLeft:j?(0,l.getSpacingOptionOutput)(j,X):void 0}})))}var c=n(5736);function g(e){let{attributes:t,setAttributes:n}=e;const{margin:i,tabletMargin:o,mobileMargin:l,marginUnit:d,padding:s,tabletPadding:g,mobilePadding:u,paddingUnit:b,style:p}=t;return(0,r.createElement)(a.KadencePanelBody,{title:(0,c.__)("Icon","kadence-blocks")+" "+(0,c.__)("Spacing Settings","kadence-blocks"),initialOpen:!0,panelName:"iconSpacing",blockSlug:"kadence/icon"},"default"!==p&&(0,r.createElement)(a.ResponsiveMeasureRangeControl,{label:(0,c.__)("Icon Padding","kadence-blocks"),value:s||["","","",""],onChange:e=>n({padding:e}),tabletValue:g||["","","",""],onChangeTablet:e=>n({tabletPadding:e}),mobileValue:u||["","","",""],onChangeMobile:e=>n({mobilePadding:e}),min:0,max:"em"===(b||"px")||"rem"===(b||"px")?25:400,step:"em"===(b||"px")||"rem"===(b||"px")?.1:1,unit:b||"px",units:["px","em","rem"],onUnit:e=>n({paddingUnit:e})}),(0,r.createElement)(a.ResponsiveMeasureRangeControl,{label:(0,c.__)("Icon Margin","kadence-blocks"),value:i||["","","",""],onChange:e=>n({margin:e}),tabletValue:o||["","","",""],onChangeTablet:e=>n({tabletMargin:e}),mobileValue:l||["","","",""],onChangeMobile:e=>n({mobileMargin:e}),min:"em"===(d||"px")||"rem"===(d||"px")?-25:-400,max:"em"===(d||"px")||"rem"===(d||"px")?25:400,step:"em"===(d||"px")||"rem"===(d||"px")?.1:1,unit:d||"px",units:["px","em","rem"],onUnit:e=>n({marginUnit:e})}))}var u=n(2175),b=n(5609);var p=n(4184),m=n.n(p);n(2819);(0,n(4981).registerBlockType)("kadence/single-icon",{...i,title:(0,c.__)("Single Icon","kadence-blocks"),description:(0,c.__)("Single icon within Icon block","kadence-blocks"),keywords:[(0,c.__)("icon","kadence-blocks"),(0,c.__)("svg","kadence-blocks"),"KB"],icon:{src:o.iconIcon},getEditWrapperProps(e){let{blockAlignment:t}=e;if("left"===t||"right"===t||"center"===t)return{"data-align":t}},edit:function(e){let{attributes:t,className:n,setAttributes:o,clientId:p,isSelected:m,name:v,context:k}=e;const{inQueryBlock:f,icon:y,link:h,target:x,size:C,width:w,title:B,text:I,hColor:_,hBackground:A,tabletSize:E,hBorder:R,color:T,background:S,border:z,borderRadius:W,padding:$,borderWidth:O,style:N,linkTitle:P,level:D,tabletPadding:q,mobilePadding:U,paddingUnit:M,tabletMargin:K,mobileMargin:L,margin:V,marginUnit:j,mobileSize:Q,uniqueID:H}=t,G=["icon","link","target"],[J,F]=(0,r.useState)("general"),{addUniqueID:X}=(0,d.useDispatch)("kadenceblocks/data"),{isUniqueID:Y,isUniqueBlock:Z,previewDevice:ee}=(0,d.useSelect)((e=>({isUniqueID:t=>e("kadenceblocks/data").isUniqueID(t),isUniqueBlock:(t,n)=>e("kadenceblocks/data").isUniqueBlock(t,n),previewDevice:e("kadenceblocks/data").getPreviewDeviceType()})),[p]);(0,r.useEffect)((()=>{(0,l.setBlockDefaults)("kadence/single-icon",t);let e=(0,l.getUniqueId)(H,p,Y,Z);e!==H?(t.uniqueID=e,o({uniqueID:e}),X(e,p)):X(H,p),o({inQueryBlock:(0,l.getInQueryBlock)(k,f)})}),[]);const te=(0,u.useBlockProps)({className:n}),ne=(0,r.createElement)("style",null,`.wp-block-kadence-single-icon .kt-svg-item-${H}:hover .kt-svg-icon {\n\t\t\t\t\t${void 0!==_&&_?"color:"+(0,l.KadenceColorOutput)(_)+"!important;":""}\n            }\n            .wp-block-kadence-single-icon .kt-svg-style-stacked.kt-svg-item-${H}:hover .kt-svg-icon {\n\t\t\t\t\t${void 0!==A&&A?"background:"+(0,l.KadenceColorOutput)(A)+"!important;":""}\n\t\t\t\t\t${void 0!==R&&R?"border-color:"+(0,l.KadenceColorOutput)(R)+"!important;":""}\n            }`);return(0,r.createElement)("div",te,ne,(0,r.createElement)(u.BlockControls,null,(0,r.createElement)(a.CopyPasteAttributes,{attributes:t,excludedAttrs:G,defaultAttributes:i.attributes,blockSlug:i.name,onPaste:e=>o(e)})),(0,r.createElement)(a.KadenceInspectorControls,{blockSlug:"kadence/icon"},(0,r.createElement)(a.InspectorControlTabs,{panelName:"single-icon",allowedTabs:["general","advanced"],setActiveTab:e=>F(e),activeTab:J}),"general"===J&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.KadencePanelBody,{title:(0,c.__)("Icon Settings","kadence-blocks"),initialOpen:!0,panelName:"kb-icon-settings"},(0,r.createElement)(a.KadenceIconPicker,{value:y,onChange:e=>{o({icon:e})}}),(0,r.createElement)(a.ResponsiveRangeControls,{label:(0,c.__)("Icon Size","kadence-blocks"),value:C||"",onChange:e=>{o({size:e})},tabletValue:void 0!==E?E:"",onChangeTablet:e=>{o({tabletSize:e})},mobileValue:void 0!==Q?Q:"",onChangeMobile:e=>{o({mobileSize:e})},min:0,max:300,step:1,unit:"px"}),y&&"fe"===y.substring(0,2)&&(0,r.createElement)(a.RangeControl,{label:(0,c.__)("Line Width"),value:w,onChange:e=>{o({width:e})},step:.5,min:.5,max:4}),(0,r.createElement)(a.KadenceRadioButtons,{label:(0,c.__)("Icon Style","kadence-blocks"),value:N,options:[{value:"default",label:(0,c.__)("Default","kadence-blocks")},{value:"stacked",label:(0,c.__)("Stacked","kadence-blocks")}],onChange:e=>o({style:e})}),(0,r.createElement)(a.PopColorControl,{label:(0,c.__)("Icon Color","kadence-blocks"),value:T||"",default:"",onChange:e=>{o({color:e})},swatchLabel2:(0,c.__)("Hover Color","kadence-blocks"),value2:_||"",default2:"",onChange2:e=>{o({hColor:e})}}),"default"!==N&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(a.PopColorControl,{label:(0,c.__)("Background Color","kadence-blocks"),value:S||"",default:"",onChange:e=>{o({background:e})},swatchLabel2:(0,c.__)("Hover Background","kadence-blocks"),value2:A||"",default2:"",onChange2:e=>{o({hBackground:e})}}),(0,r.createElement)(a.PopColorControl,{label:(0,c.__)("Border Color","kadence-blocks"),value:z||"",default:"",onChange:e=>{o({border:e})},swatchLabel2:(0,c.__)("Hover Border","kadence-blocks"),value2:R||"",default2:"",onChange2:e=>{o({hBorder:e})}}),(0,r.createElement)(a.RangeControl,{label:(0,c.__)("Border Size (px)","kadence-blocks"),value:O,onChange:e=>{o({borderWidth:e})},min:0,max:20}),(0,r.createElement)(a.RangeControl,{label:(0,c.__)("Border Radius (%)","kadence-blocks"),value:W,onChange:e=>{o({borderRadius:e})},min:0,max:50})),(0,r.createElement)(a.URLInputControl,{label:(0,c.__)("Link","kadence-blocks"),url:h,onChangeUrl:e=>{o({link:e})},additionalControls:!0,opensInNewTab:!(!x||"_blank"!=x),onChangeTarget:e=>{o(e?{target:"_blank"}:{target:"_self"})},linkTitle:P,onChangeTitle:e=>{o({linkTitle:e})},dynamicAttribute:"link",allowClear:!0,isSelected:m,attributes:t,setAttributes:o,name:v,clientId:p,context:k}),(0,r.createElement)(b.TextControl,{label:(0,c.__)("Title for Accessibility","kadence-blocks"),value:B,onChange:e=>{o({title:e})}}))),"advanced"===J&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(g,{attributes:t,setAttributes:o}),(0,r.createElement)(a.KadenceBlockDefaults,{attributes:t,defaultAttributes:i.attributes,blockSlug:i.name,excludedAttrs:G}))),(0,r.createElement)(s,{attributes:t,previewDevice:ee}))},save:function(e){let{attributes:t,className:n}=e;const{inQueryBlock:i,icon:o,link:l,target:d,size:s,width:c,title:g,text:b,hColor:p,hBackground:v,tabletSize:k,hBorder:f,color:y,background:h,border:x,borderRadius:C,padding:w,borderWidth:B,style:I,linkTitle:_,level:A,tabletMargin:E,mobileSize:R,uniqueID:T}=t,S=m()({"kt-svg-icons":!0,[`kt-svg-icons${T}`]:T,alignnone:!0,"kb-icon-valign-false":!1});return u.useBlockProps.save({className:S}),(0,r.createElement)("div",{className:`kt-svg-style-${I} kt-svg-icon-wrap kt-svg-item-${T}`},o&&l&&(0,r.createElement)("a",{href:l,className:"kt-svg-icon-link",target:"_blank"===d?d:void 0,rel:"_blank"===d?"noopener noreferrer":void 0,"aria-label":void 0!==_&&""!==_?_:void 0},(0,r.createElement)(a.IconSpanTag,{name:o,strokeWidth:"fe"===o.substring(0,2)?c:void 0,title:g||""})),o&&!l&&(0,r.createElement)(a.IconSpanTag,{name:o,strokeWidth:"fe"===o.substring(0,2)?c:void 0,title:g||""}))},example:{}})},4184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)i.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},2819:e=>{"use strict";e.exports=window.lodash},9543:e=>{"use strict";e.exports=window.kadence.components},6222:e=>{"use strict";e.exports=window.kadence.helpers},9995:e=>{"use strict";e.exports=window.kadence.icons},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.m=t,e=[],i.O=(t,n,o,r)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,o,r]=e[c],l=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](n[d])))?n.splice(d--,1):(l=!1,r<a&&(a=r));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={808:0,999:0,357:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[a,l,d]=n,s=0;if(a.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);if(d)var c=d(i)}for(t&&t(n);s<a.length;s++)r=a[s],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},n=globalThis.webpackChunkkadence=globalThis.webpackChunkkadence||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[357],(()=>i(1232)));o=i.O(o),(this.kadence=this.kadence||{})["blocks-icon"]=o})();