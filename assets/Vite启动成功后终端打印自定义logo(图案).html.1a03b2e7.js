import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as s,e as o}from"./app.2eca6fe5.js";const e={},i=o(`<h1 id="vite\u542F\u52A8\u6210\u529F\u540E\u7EC8\u7AEF\u6253\u5370\u81EA\u5B9A\u4E49logo-\u56FE\u6848" tabindex="-1"><a class="header-anchor" href="#vite\u542F\u52A8\u6210\u529F\u540E\u7EC8\u7AEF\u6253\u5370\u81EA\u5B9A\u4E49logo-\u56FE\u6848" aria-hidden="true">#</a> Vite\u542F\u52A8\u6210\u529F\u540E\u7EC8\u7AEF\u6253\u5370\u81EA\u5B9A\u4E49logo(\u56FE\u6848)</h1><h3 id="_1-\u5B89\u88C5\u4F9D\u8D56-\u{1F528}\u{1F528}\u{1F528}\u{1F528}" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5\u4F9D\u8D56-\u{1F528}\u{1F528}\u{1F528}\u{1F528}" aria-hidden="true">#</a> 1. \u5B89\u88C5\u4F9D\u8D56 \u{1F528}\u{1F528}\u{1F528}\u{1F528}</h3><p>\u8FD9\u91CC\u4F1A\u7528\u4E00\u4E2A\u63D2\u4EF6\uFF0Cpicocolors\uFF0C\u5B83\u662F\u4E00\u4E2A\u53EF\u4EE5\u4FEE\u6539\u7EC8\u7AEF\u8F93\u51FA\u5B57\u7B26\u989C\u8272\u7684 npm \u5305\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> picocolors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-\u65B0\u5EFAbuild-info-ts\u6587\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}" tabindex="-1"><a class="header-anchor" href="#_2-\u65B0\u5EFAbuild-info-ts\u6587\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}" aria-hidden="true">#</a> 2. \u65B0\u5EFA<code>build/info.ts</code>\u6587\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Plugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dayjs<span class="token punctuation">,</span> <span class="token punctuation">{</span> Dayjs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> duration <span class="token keyword">from</span> <span class="token string">&quot;dayjs/plugin/duration&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> bold <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;picocolors&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getPackageSize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@pureadmin/utils&quot;</span><span class="token punctuation">;</span>
dayjs<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">viteBuildInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Plugin <span class="token punctuation">{</span>
  <span class="token keyword">let</span> config<span class="token operator">:</span> <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> startTime<span class="token operator">:</span> Dayjs<span class="token punctuation">;</span>
  <span class="token keyword">let</span> endTime<span class="token operator">:</span> Dayjs<span class="token punctuation">;</span>
  <span class="token keyword">let</span> outDir<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;vite:buildInfo&quot;</span><span class="token punctuation">,</span>
    <span class="token function">configResolved</span><span class="token punctuation">(</span>resolvedConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config <span class="token operator">=</span> resolvedConfig<span class="token punctuation">;</span>
      outDir <span class="token operator">=</span> resolvedConfig<span class="token punctuation">.</span>build<span class="token operator">?.</span>outDir <span class="token operator">??</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
        <span class="token function">bold</span><span class="token punctuation">(</span>
          <span class="token function">green</span><span class="token punctuation">(</span>
            <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u{1F44F}\u6B22\u8FCE\u4F7F\u7528</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">blue</span><span class="token punctuation">(</span>
              <span class="token string">&quot;[vue-pure-admin]&quot;</span>
            <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\uFF0C\u5982\u679C\u60A8\u611F\u89C9\u4E0D\u9519\uFF0C\u8BB0\u5F97\u70B9\u51FB\u540E\u9762\u94FE\u63A5\u7ED9\u4E2Astar\u54E6\u{1F496} https://github.com/pure-admin/vue-pure-admin</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>command <span class="token operator">===</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        startTime <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">closeBundle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>command <span class="token operator">===</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        endTime <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">getPackageSize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          folder<span class="token operator">:</span> outDir<span class="token punctuation">,</span>
          <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>size<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
              <span class="token function">bold</span><span class="token punctuation">(</span>
                <span class="token function">green</span><span class="token punctuation">(</span>
                  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u{1F389}\u606D\u559C\u6253\u5305\u5B8C\u6210\uFF08\u603B\u7528\u65F6</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>dayjs
                    <span class="token punctuation">.</span><span class="token function">duration</span><span class="token punctuation">(</span>endTime<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>startTime<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;mm\u5206ss\u79D2&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\uFF0C\u6253\u5305\u540E\u7684\u5927\u5C0F\u4E3A</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>size<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\uFF09</span><span class="token template-punctuation string">\`</span></span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-vite-config-ts\u4E2D\u5F15\u5165\u521A\u521A\u5199\u597D\u7684\u63D2\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}" tabindex="-1"><a class="header-anchor" href="#_3-vite-config-ts\u4E2D\u5F15\u5165\u521A\u521A\u5199\u597D\u7684\u63D2\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}" aria-hidden="true">#</a> 3. <code>vite.config.ts</code>\u4E2D\u5F15\u5165\u521A\u521A\u5199\u597D\u7684\u63D2\u4EF6\u{1F528}\u{1F528}\u{1F528}\u{1F528}</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">const</span> pathSrc <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u6CE8\u610F\u8FD9\u91CC\u5343\u4E07\u4E0D\u8981\u4F7F\u7528@\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u8FD8\u4E0D\u80FD\u8BC6\u522B\u4F60\u914D\u7F6E\u6587\u4EF6\u7CFB\u7EDF\u8DEF\u5F84\u522B\u540D</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> vitesStartInfo<span class="token punctuation">,</span> viteBuildInfo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./build/info&quot;</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> pathSrc<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vitePluginStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">vitesStartInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">viteBuildInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u670D\u52A1\u5668\u5E94\u8BE5\u76D1\u542C\u54EA\u4E2A IP \u5730\u5740</span>
    port<span class="token operator">:</span> <span class="token number">9527</span><span class="token punctuation">,</span> <span class="token comment">// \u6307\u5B9A\u5F00\u53D1\u670D\u52A1\u5668\u7AEF\u53E3</span>
    strictPort<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u82E5\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\u5219\u4F1A\u76F4\u63A5\u9000\u51FA</span>
    open<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u52A8\u65F6\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u6700\u7EC8\u6548\u679C\u6D4F\u89C8-\u{1F4A5}-\u2728-\u2B50\uFE0F-\u{1F31F}-\u{1F4A5}" tabindex="-1"><a class="header-anchor" href="#_4-\u6700\u7EC8\u6548\u679C\u6D4F\u89C8-\u{1F4A5}-\u2728-\u2B50\uFE0F-\u{1F31F}-\u{1F4A5}" aria-hidden="true">#</a> 4. \u6700\u7EC8\u6548\u679C\u6D4F\u89C8 \u{1F4A5} \u2728 \u2B50\uFE0F \u{1F31F} \u{1F4A5}</h3>`,9),c=["src"],l=["src"];function u(n,r){return t(),p("div",null,[i,s("img",{src:n.$withBase("/imgs/vite_console_1.png"),alt:"vite_console"},null,8,c),s("img",{src:n.$withBase("/imgs/vite_console_2.jpg"),alt:"vite_console"},null,8,l)])}var v=a(e,[["render",u],["__file","Vite\u542F\u52A8\u6210\u529F\u540E\u7EC8\u7AEF\u6253\u5370\u81EA\u5B9A\u4E49logo(\u56FE\u6848).html.vue"]]);export{v as default};
