// Giscus 评论系统 - 直接硬编码配置，不依赖主题配置文件加载时机
hexo.extend.injector.register('body_end', `
<div id="comment-card" class="comment-card">
  <div class="main-title-bar">
    <div class="main-title-dot"></div>
    <div class="main-title">评论</div>
  </div>
  <script src="https://giscus.app/client.js"
      data-repo="baizhou830/baizhou830.github.io"
      data-repo-id="R_kgDOTf213Q"
      data-category="Announcements"
      data-category-id="DIC_kwDOTf213c4DBu2-"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="preferred_color_scheme"
      data-lang="zh-CN"
      crossorigin="anonymous"
      async>
  </script>
</div>
`);
