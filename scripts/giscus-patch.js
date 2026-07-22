const fs = require('fs');
const path = require('path');

// 自动 patch 主题模板：将 giscus 评论硬编码到 article.ejs 中
const filePath = path.resolve(process.cwd(), 'node_modules', 'hexo-theme-vivia', 'layout', '_partial', 'article.ejs');

if (!fs.existsSync(filePath)) {
  console.log('[giscus-patch] article.ejs not found at', filePath);
  process.exit(0);
}

let content = fs.readFileSync(filePath, 'utf8');

// 如果已经 patch 过，跳过
if (content.includes('GISCUS-HARDCODED-PATCH')) {
  console.log('[giscus-patch] already patched, skipping');
  process.exit(0);
}

const giscusPatch = `
<% if (!index) { %>
<% /* GISCUS-HARDCODED-PATCH */ %>
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
<% } %>
`;

content = content + '\n' + giscusPatch;
fs.writeFileSync(filePath, content, 'utf8');
console.log('[giscus-patch] successfully patched article.ejs');
