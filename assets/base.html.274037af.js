import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as a}from"./app.ac7047c8.js";const i={},l=a(`<h1 id="git-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#git-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Git \u5E38\u7528\u547D\u4EE4</h1><p>\u62C9\u53D6\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFA\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> btanch dev
<span class="token comment">#or</span>
<span class="token function">git</span> checkout -b dev
<span class="token comment">#or</span>
<span class="token function">git</span> switch -c dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5207\u6362\u672C\u5730\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token comment">#or</span>
<span class="token function">git</span> switch dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5207\u6362\u5206\u652F\u5E76\u5173\u8054\u8FDC\u7A0B\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b dev orgigin/dev
<span class="token comment">#or</span>
<span class="token function">git</span> checkout --track orgigin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u8FDC\u7A0B\u6240\u6709\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u672C\u5730\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u4EE3\u7801\u4ECE\u5DE5\u4F5C\u533A\u6DFB\u52A0\u6682\u5B58\u533A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u63D0\u4EA4\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;xxxx&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A8\u9001\u4EE3\u7801\u5230\u8FDC\u7A0B\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin dev
<span class="token comment"># \u5F3A\u5236\u63A8\u9001\uFF08\u5E38\u5728 git rebase \u6216 git reset \u540E\u4F7F\u7528\uFF09</span>
<span class="token function">git</span> push -f ogigin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B<code>git</code>\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stauts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u63D0\u4EA4\u5386\u53F2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u53EF\u5F15\u7528\u7684\u5386\u53F2\u7248\u672C\u8BB0\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u628A\u672C\u5730\u672A<code>push</code>\u7684\u5206\u53C9\u63D0\u4EA4\u5386\u53F2\u6574\u7406\u6210\u76F4\u7EBF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase ogigin/dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56DE\u5230<code>rebase</code>\u6267\u884C\u4E4B\u524D\u7684\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> rebase --abort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56DE\u9000\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u56DE\u9000\u5236\u5B9A commit_id \u7248\u672C</span>
<span class="token function">git</span> reset --hard commit_id

<span class="token comment"># \u56DE\u9000\u4E0A\u4E00\u4E2A\u7248\u672C</span>
<span class="token function">git</span> reset --soft HEAD^
<span class="token comment"># or</span>
<span class="token function">git</span> reset --soft HEAD~1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u64A4\u9500\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert commit_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5206\u652F\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7B2C\u4E00\u6B65</span>
<span class="token function">git</span> branch -m oldBranchName newBranchName
<span class="token comment"># \u7B2C\u4E8C\u6B65</span>
<span class="token function">git</span> push origin :oldBranchName
<span class="token comment"># \u7B2C\u4E09\u6B65</span>
<span class="token function">git</span> push --set-upstream origin newBranchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B<code>git</code>\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5168\u5C40\u914D\u7F6E</span>
<span class="token function">git</span> config --global --list

<span class="token comment"># \u67E5\u770B\u7528\u6237\u540D</span>
<span class="token function">git</span> config --global user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DFB\u52A0\u7528\u6237\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --add user.name newName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u7528\u6237\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --unset user.name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u7528\u6237\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name newName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u914D\u7F6E <code>Git</code> \u7528\u6237\u540D\u548C\u90AE\u7BB1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7528\u6237\u540D</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token comment"># \u90AE\u7BB1</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EDF\u8BA1\u4EE3\u7801\u884C\u6570</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> ls-files <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">wc</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,51),d=[l];function c(r,o){return n(),e("div",null,d)}var p=s(i,[["render",c],["__file","base.html.vue"]]);export{p as default};
