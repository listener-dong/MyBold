import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.c4f5dc0d.js";const o={},t=e(`<h1 id="ts\u914D\u7F6E\u5168\u5C40\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#ts\u914D\u7F6E\u5168\u5C40\u7C7B\u578B" aria-hidden="true">#</a> ts\u914D\u7F6E\u5168\u5C40\u7C7B\u578B</h1><ol><li>\u6587\u4EF6\u4EE5<code>.d.ts</code>\u8FDB\u884C\u7ED3\u5C3E</li><li>\u6587\u4EF6\u5185 <code>declare global {}</code>\u5305\u88F9</li><li>\u4F8B\u5B50<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code> <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> FunctionalComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> IconifyIcon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@iconify/vue&quot;</span><span class="token punctuation">;</span>
 <span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">RouteComponent</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * \u5168\u5C40\u7C7B\u578B\u58F0\u660E\uFF0C\u65E0\u9700\u5F15\u5165\u76F4\u63A5\u5728 \`.vue\` \u3001\`.ts\` \u3001\`.tsx\` \u6587\u4EF6\u4F7F\u7528\u5373\u53EF\u83B7\u5F97\u7C7B\u578B\u63D0\u793A
  */</span>
 <span class="token keyword">declare</span> global <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
    * <span class="token keyword">@description</span> \u6574\u4F53\u8DEF\u7531\u914D\u7F6E\u8868\uFF08\u5305\u62EC\u5B8C\u6574\u5B50\u8DEF\u7531\uFF09
    */</span>
   <span class="token keyword">interface</span> <span class="token class-name">RouteConfigsTable</span> <span class="token punctuation">{</span>
     <span class="token doc-comment comment">/** \u8DEF\u7531\u5730\u5740 \`\u5FC5\u586B\` */</span>
     path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u8DEF\u7531\u540D\u5B57\uFF08\u4FDD\u6301\u552F\u4E00\uFF09\`\u53EF\u9009\` */</span>
     name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \`Layout\`\u7EC4\u4EF6 \`\u53EF\u9009\` */</span>
     component<span class="token operator">?</span><span class="token operator">:</span> RouteComponent<span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u8DEF\u7531\u91CD\u5B9A\u5411 \`\u53EF\u9009\` */</span>
     redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u540D\u79F0\uFF08\u517C\u5BB9\u56FD\u9645\u5316\u3001\u975E\u56FD\u9645\u5316\uFF0C\u5982\u4F55\u7528\u56FD\u9645\u5316\u7684\u5199\u6CD5\u5C31\u5FC5\u987B\u5728\u6839\u76EE\u5F55\u7684\`locales\`\u6587\u4EF6\u5939\u4E0B\u5BF9\u5E94\u6DFB\u52A0\uFF09\`\u5FC5\u586B\` */</span>
       title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u56FE\u6807 \`\u53EF\u9009\` */</span>
       icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> FunctionalComponent <span class="token operator">|</span> IconifyIcon<span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A\uFF08\u9ED8\u8BA4\`true\`\uFF09\`\u53EF\u9009\` */</span>
       showLink<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u5347\u5E8F\u6392\u5E8F\uFF0C\u503C\u8D8A\u9AD8\u6392\u7684\u8D8A\u540E\uFF08\u53EA\u9488\u5BF9\u9876\u7EA7\u8DEF\u7531\uFF09\`\u53EF\u9009\` */</span>
       rank<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u5B50\u8DEF\u7531\u914D\u7F6E\u9879 */</span>
     children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteChildrenConfigsTable<span class="token operator">&gt;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    * <span class="token keyword">@description</span> \u5B8C\u6574\u5B50\u8DEF\u7531\u914D\u7F6E\u8868
    */</span>
   <span class="token keyword">interface</span> <span class="token class-name">RouteChildrenConfigsTable</span> <span class="token punctuation">{</span>
     <span class="token doc-comment comment">/** \u5B50\u8DEF\u7531\u5730\u5740 \`\u5FC5\u586B\` */</span>
     path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u8DEF\u7531\u540D\u5B57\uFF08\u5BF9\u5E94\u4E0D\u8981\u91CD\u590D\uFF0C\u548C\u5F53\u524D\u7EC4\u4EF6\u7684\`name\`\u4FDD\u6301\u4E00\u81F4\uFF09\`\u5FC5\u586B\` */</span>
     name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u8DEF\u7531\u91CD\u5B9A\u5411 \`\u53EF\u9009\` */</span>
     redirect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6 \`\u53EF\u9009\` */</span>
     component<span class="token operator">?</span><span class="token operator">:</span> RouteComponent<span class="token punctuation">;</span>
     meta<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u540D\u79F0\uFF08\u517C\u5BB9\u56FD\u9645\u5316\u3001\u975E\u56FD\u9645\u5316\uFF0C\u5982\u4F55\u7528\u56FD\u9645\u5316\u7684\u5199\u6CD5\u5C31\u5FC5\u987B\u5728\u6839\u76EE\u5F55\u7684\`locales\`\u6587\u4EF6\u5939\u4E0B\u5BF9\u5E94\u6DFB\u52A0\uFF09 \`\u5FC5\u586B\` */</span>
       title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u56FE\u6807 \`\u53EF\u9009\` */</span>
       icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> FunctionalComponent <span class="token operator">|</span> IconifyIcon<span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u83DC\u5355\u540D\u79F0\u53F3\u4FA7\u7684\u989D\u5916\u56FE\u6807 */</span>
       extraIcon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> FunctionalComponent <span class="token operator">|</span> IconifyIcon<span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u662F\u5426\u5728\u83DC\u5355\u4E2D\u663E\u793A\uFF08\u9ED8\u8BA4\`true\`\uFF09\`\u53EF\u9009\` */</span>
       showLink<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u662F\u5426\u663E\u793A\u7236\u7EA7\u83DC\u5355 \`\u53EF\u9009\` */</span>
       showParent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u9875\u9762\u7EA7\u522B\u6743\u9650\u8BBE\u7F6E \`\u53EF\u9009\` */</span>
       roles<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u6309\u94AE\u7EA7\u522B\u6743\u9650\u8BBE\u7F6E \`\u53EF\u9009\` */</span>
       auths<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u8DEF\u7531\u7EC4\u4EF6\u7F13\u5B58\uFF08\u5F00\u542F \`true\`\u3001\u5173\u95ED \`false\`\uFF09\`\u53EF\u9009\` */</span>
       keepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u5185\u5D4C\u7684\`iframe\`\u94FE\u63A5 \`\u53EF\u9009\` */</span>
       frameSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \`iframe\`\u9875\u662F\u5426\u5F00\u542F\u9996\u6B21\u52A0\u8F7D\u52A8\u753B\uFF08\u9ED8\u8BA4\`true\`\uFF09\`\u53EF\u9009\` */</span>
       frameLoading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u9875\u9762\u52A0\u8F7D\u52A8\u753B\uFF08\u6709\u4E24\u79CD\u5F62\u5F0F\uFF0C\u4E00\u79CD\u76F4\u63A5\u91C7\u7528vue\u5185\u7F6E\u7684\`transitions\`\u52A8\u753B\uFF0C\u53E6\u4E00\u79CD\u662F\u4F7F\u7528\`animate.css\`\u5199\u8FDB\u3001\u79BB\u573A	\u52A8\u753B\uFF09\`\u53EF\u9009\` */</span>
       transition<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token doc-comment comment">/**
          * <span class="token keyword">@description</span> \u5F53\u524D\u8DEF\u7531\u52A8\u753B\u6548\u679C
          * <span class="token keyword">@see</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> https://next.router.vuejs.org/guide/advanced/transitions.html#transitions<span class="token punctuation">}</span>
          * <span class="token keyword">@see</span> animate.css <span class="token punctuation">{</span><span class="token keyword">@link</span> https://animate.style<span class="token punctuation">}</span>
          */</span>
         name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
         <span class="token doc-comment comment">/** \u8FDB\u573A\u52A8\u753B */</span>
         enterTransition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
         <span class="token doc-comment comment">/** \u79BB\u573A\u52A8\u753B */</span>
         leaveTransition<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">;</span>
       <span class="token comment">// \u662F\u5426\u4E0D\u6DFB\u52A0\u4FE1\u606F\u5230\u6807\u7B7E\u9875\uFF0C\uFF08\u9ED8\u8BA4\`false\`\uFF09</span>
       hiddenTag<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
       <span class="token doc-comment comment">/** \u52A8\u6001\u8DEF\u7531\u53EF\u6253\u5F00\u7684\u6700\u5927\u6570\u91CF \`\u53EF\u9009\` */</span>
       dynamicLevel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/** \u5B50\u8DEF\u7531\u914D\u7F6E\u9879 */</span>
     children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>RouteChildrenConfigsTable<span class="token operator">&gt;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    *<span class="token keyword">@description</span>  \u5168\u5C40\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\u7684\u7C7B\u578B\u58F0\u660E
    * <span class="token keyword">@see</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> https://yiming_chang.gitee.io/pure-admin-doc/pages/config/	#%E5%85%B7%E4%BD%93%E9%85%8D%E7%BD%AE<span class="token punctuation">}</span>
    */</span>
   <span class="token keyword">interface</span> <span class="token class-name">ViteEnv</span> <span class="token punctuation">{</span>
     <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
     <span class="token constant">VITE_PORT</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
     <span class="token constant">VITE_PUBLIC_PATH</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token constant">VITE_ROUTER_HISTORY</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
     <span class="token constant">VITE_CDN</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
     <span class="token constant">VITE_COMPRESSION</span><span class="token operator">:</span> ViteCompression<span class="token punctuation">;</span>
     <span class="token constant">VITE_PROXY_DOMAIN_REAL</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token doc-comment comment">/**
    *<span class="token keyword">@description</span>  \u6253\u5305\u538B\u7F29\u683C\u5F0F\u7684\u7C7B\u578B\u58F0\u660E
    */</span>
   <span class="token keyword">type</span> <span class="token class-name">ViteCompression</span> <span class="token operator">=</span>
     <span class="token operator">|</span> <span class="token string">&quot;none&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;gzip&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;brotli&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;both&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;gzip-clear&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;brotli-clear&quot;</span>
     <span class="token operator">|</span> <span class="token string">&quot;both-clear&quot;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),p=[t];function c(i,l){return s(),a("div",null,p)}var d=n(o,[["render",c],["__file","ts\u914D\u7F6E\u5168\u5C40\u7C7B\u578B.html.vue"]]);export{d as default};
