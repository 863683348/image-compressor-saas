import fs from 'node:fs';

const TOKEN = process.env.GH_TOKEN;
const OWNER = '863683348';
const REPO = 'image-compressor-saas';
const BASE = 'C:\\Users\\l\'x\\WorkBuddy\\2026-08-04-13-14-21\\image-compressor-saas';
const BRANCH = 'main';

// 本次实际修改/新增的文件（相对仓库根）
const FILES = [
  'src/lib/blog/posts.ts',
  'src/app/blog/[slug]/page.tsx',
  'src/app/[lang]/blog/[slug]/page.tsx',
  'src/app/blog/page-client.tsx',
  'public/sitemap.xml',
  'scripts/sync-github.mjs',
];

const api = (method, p, body) =>
  fetch(`https://api.github.com${p}`, {
    method,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'workbuddy-push',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: body ? JSON.stringify(body) : undefined,
  }).then(async (r) => {
    const text = await r.text();
    if (!r.ok) throw new Error(`GitHub API ${method} ${p} -> ${r.status}: ${text.slice(0, 400)}`);
    return text ? JSON.parse(text) : {};
  });

console.log(`[1] 待更新文件: ${FILES.length}`);
const message = process.env.COMMIT_MSG || 'chore: update site files';

for (const f of FILES) {
  const full = `${BASE}\\${f.replace(/\//g, '\\')}`;
  const content = fs.readFileSync(full, 'utf8');
  let sha = null;
  try {
    const existing = await api('GET', `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(f)}?ref=${BRANCH}`);
    sha = existing.sha;
  } catch (e) {
    // 新文件 → 创建
  }
  const body = {
    message,
    branch: BRANCH,
    content: Buffer.from(content, 'utf8').toString('base64'),
  };
  if (sha) body.sha = sha;
  const res = await api('PUT', `/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(f)}`, body);
  console.log(`  ✓ ${f} (${sha ? 'updated' : 'created'}) -> ${res.commit?.sha?.slice(0, 8)}`);
}

console.log('[2] 全部更新完成');
