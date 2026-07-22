// 在文章页和独立页面的文章内容之后、footer 之前插入 Giscus 评论
// 使用 after_render 过滤器，对最终 HTML 进行操作

hexo.extend.filter.register('after_render:html', function (html, data) {
  // 只处理文章页和独立页，不处理首页、归档、标签等列表页
  const isPost = data.path && /\/\d{4}\/\d{2}\/\d{2}\//.test(data.path);
  const isPage = data.page && (data.page.layout === 'page' || data.page.layout === 'about' || data.page.layout === 'links');
  // 或者检查 layout 字段
  const layout = data.page ? data.page.layout : '';

  if (!isPost && layout !== 'page' && layout !== 'about' && layout !== 'links') {
    return html;
  }

  const giscusHtml = `
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
</div>`;

  // 在 </article> 标签之后插入
  const articleEnd = html.lastIndexOf('</article>');
  if (articleEnd !== -1) {
    html = html.substring(0, articleEnd + '</article>'.length) + giscusHtml + html.substring(articleEnd + '</article>'.length);
  }

  return html;
});
