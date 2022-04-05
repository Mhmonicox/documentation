(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{F2pY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},o={_frontmatter:r},c=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm publish [<tarball>|<folder>] [--tag <tag>] [--access <public|restricted>] [--otp otpcode] [--dry-run]\n\nPublishes '.' if no argument supplied\nSets tag 'latest' if no --tag specified\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Publishes a package to the registry so that it can be installed by name. All\nfiles in the package directory are included if no local ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," or\n",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," file exists. If both files exist and a file is ignored by\n",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," but not by ",Object(i.b)("inlineCode",{parentName:"p"},".npmignore")," then it will be included.  See\n",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/developers"},Object(i.b)("inlineCode",{parentName:"a"},"developers"))," for full details on what's included in the published package, as well as details on how the package is built."),Object(i.b)("p",null,"By default npm will publish to the public registry. This can be overridden by\nspecifying a different default registry or using a ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/scope"},Object(i.b)("inlineCode",{parentName:"a"},"scope"))," in the name (see ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json")),")."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"<folder>"),":\nA folder containing a package.json file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"<tarball>"),":\nA url or file path to a gzipped tar archive containing a single folder\nwith a package.json file inside.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"[--tag <tag>]"),"\nRegisters the published package with the given tag, such that\n",Object(i.b)("inlineCode",{parentName:"p"},"npm install <name>@<tag>")," will install this version.  By default,\n",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," updates and ",Object(i.b)("inlineCode",{parentName:"p"},"npm install")," installs the ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," tag. See\n",Object(i.b)("a",{parentName:"p",href:"npm-dist-tag"},Object(i.b)("inlineCode",{parentName:"a"},"npm-dist-tag"))," for details about tags.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"[--access <public|restricted>]"),"\nTells the registry whether this package should be published as public or\nrestricted. Only applies to scoped packages, which default to ",Object(i.b)("inlineCode",{parentName:"p"},"restricted"),".\nIf you don't have a paid account, you must publish with ",Object(i.b)("inlineCode",{parentName:"p"},"--access public"),"\nto publish scoped packages.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"[--otp <otpcode>]"),"\nIf you have two-factor authentication enabled in ",Object(i.b)("inlineCode",{parentName:"p"},"auth-and-writes")," mode\nthen you can provide a code from your authenticator with this. If you\ndon't include this and you're running from a TTY then you'll be prompted.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"[--dry-run]"),"\nAs of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@6"),", does everything publish would do except actually publishing\nto the registry. Reports the details of what would have been published."))),Object(i.b)("p",null,"Fails if the package name and version combination already exists in\nthe specified registry."),Object(i.b)("p",null,"Once a package is published with a given name and version, that\nspecific name and version combination can never be used again, even if\nit is removed with ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/commands/npm-unpublish"},Object(i.b)("inlineCode",{parentName:"a"},"npm unpublish")),"."),Object(i.b)("p",null,"As of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@5"),", both a sha1sum and an integrity field with a sha512sum of the\ntarball will be submitted to the registry during publication. Subsequent\ninstalls will use the strongest supported algorithm to verify downloads."),Object(i.b)("p",null,"Similar to ",Object(i.b)("inlineCode",{parentName:"p"},"--dry-run")," see ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/commands/npm-pack"},Object(i.b)("inlineCode",{parentName:"a"},"npm pack")),", which figures out the files to be\nincluded and packs them into a tarball to be uploaded to the registry."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/using-npm/registry"},"npm registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/using-npm/scope"},"npm scope")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-adduser"},"npm adduser")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-owner"},"npm owner")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-deprecate"},"npm deprecate")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-dist-tag"},"npm dist-tag")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-pack"},"npm pack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-profile"},"npm profile"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),p=n("pD55"),m=n("8Aig"),s=n("ReZb"),b=n("GCVy"),d=n("+6vE");var u=function(e){var t=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),g=n("mwnC"),O=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,n=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:n+1}):null)})))}N.defaultProps={depth:0};var v=N,w=n("MfeC");function C(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},l)))}C.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=C,k=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,N=r.description,C=r.status,P=r.source,z=r.additionalContributors,H=void 0===z?[]:z,T=w.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:s.a,Note:b.a,Prompt:u,PromptReply:h,Screenshot:f.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(p.a,{title:y,description:N}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(g.a,{editOnGitHub:n.themeOptions.editOnGitHub,pathPrefix:n.themeOptions.pathPrefix,location:a})),o.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},y),N))),null!=T?o.a.createElement(S,null,o.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:T,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(v,{items:n.tableOfContents.items})):null,o.a.createElement(A,null,C||P?o.a.createElement(i.k,{mb:3,alignItems:"center"},C?o.a.createElement(j.a,{status:C}):null,o.a.createElement(i.e,{mx:"auto"}),P?o.a.createElement(O.a,{href:P}):null):null,n.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-publish-md-13282b02bb8f3441ac09.js.map