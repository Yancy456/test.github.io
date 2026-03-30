# ReSynth — GitHub Pages 项目主页

本目录为 **ReSynth** 论文/数据集的静态项目页，可整体推送到仓库
[`Yancy456/test.github.io`](https://github.com/Yancy456/test.github.io)，通过
[GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
发布。

## 目录结构

```
test.github.io/
├── index.html           # 首页（单页）
├── .nojekyll            # 关闭 Jekyll，避免静态资源被错误处理
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/             # 可选：放入 teaser / 流程图等
└── README.md
```

## 发布步骤（简要）

1. 将本文件夹内容复制或推送到 GitHub 仓库根目录（与 `index.html` 同级）。
2. 打开仓库 **Settings → Pages**。
3. **Build and deployment**：Source 选 **GitHub Actions** 或 **Deploy from a branch**。
   - 若用 **branch**：通常选 `main`/`master` 分支、文件夹选 **/ (root)**。
4. 等待构建完成后访问站点。
   - 若仓库名为 `用户名.github.io`，站点一般为 `https://用户名.github.io/`。
   - 若仓库名为 `test.github.io` 等形式的项目仓库，站点一般为  
     `https://用户名.github.io/test.github.io/`（子路径）。
5. 所有站内资源使用**相对路径**（如 `assets/css/style.css`），便于在项目页子路径下正常加载。

## 上线前请替换

在 `index.html` 中：

- **Paper / Code / Dataset / Model** 按钮的 `href="#"` 改为真实链接。
- **作者与单位**：Hero 区域的 `.authors`、`.affil`。
- **BibTeX**：`#bibtex-content` 中占位 `@misc` 改为录用后的正式条目（如 ACL Anthology）。

可选：将论文中的 `imgs/*.pdf` 导出为 PNG/WebP 后放入 `assets/img/`，并在页面中插入 `<img>`。

## 本地预览

在 `test.github.io` 目录下用任意静态服务器即可，例如：

```bash
cd test.github.io
python3 -m http.server 8000
```

浏览器打开 `http://127.0.0.1:8000/`。

## 内容来源

页面文案与数字来自本工作区论文源文件 `main.tex`（ReSynth / AIR / SRVLM 与主结果表等）。
