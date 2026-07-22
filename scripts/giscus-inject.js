const theme = hexo.theme.config;

if (theme.comment && theme.comment.giscus && theme.comment.giscus.enable) {
  const giscus = theme.comment.giscus;
  const giscusScript = `
    <div id="comment-card" class="comment-card">
      <div class="main-title-bar">
        <div class="main-title-dot"></div>
        <div class="main-title">评论</div>
      </div>
      <script src="https://giscus.app/client.js"
          data-repo="${giscus.repo}"
          data-repo-id="${giscus.repoId}"
          data-category="${giscus.category}"
          data-category-id="${giscus.categoryId}"
          data-mapping="${giscus.mapping || 'pathname'}"
          data-strict="${giscus.strict || '0'}"
          data-reactions-enabled="${giscus.reactionsEnabled || '1'}"
          data-emit-metadata="${giscus.emitMetadata || '0'}"
          data-input-position="${giscus.inputPosition || 'bottom'}"
          data-theme="${giscus.theme || 'preferred_color_scheme'}"
          data-lang="${giscus.lang || 'zh-CN'}"
          crossorigin="anonymous"
          async>
      </script>
    </div>`;

  hexo.extend.injector.register('post-end', giscusScript);
  hexo.extend.injector.register('page-end', giscusScript);
}
