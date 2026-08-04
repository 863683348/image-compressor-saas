"use client";

export default function ZhArticle() {
  return (
    <article>
      <h1>如何将 JPG 压缩到 100KB 以下（免费在线，无需注册）</h1>
      <p className="meta">最后更新：2026 年 8 月 4 日 &nbsp;|&nbsp; 7 分钟阅读</p>

      <p>
        100KB 是在线上传的"黄金门槛"：政府网站、签证申请、求职系统、邮件附件……几乎所有平台都在这个大小附近设置限制。而要把 JPG 压缩到 100KB 以下<strong>又不明显损失画质</strong>，过去需要熟练的 Photoshop 技巧——现在，浏览器本地压缩工具 30 秒就能搞定。
      </p>

      <p>
        这篇指南会教你压缩 JPG 到 100KB 以下的最快方法，按易用度排出三种方案，并拆解 JPG 压缩的原理，让你面对任何目标大小都心里有数。马上试试：{" "}
        <a href="https://image-compressor-saas.shop">我们的免费 JPG 压缩工具</a> 100% 在浏览器内运行——不上传、不注册。
      </p>

      <h2>为什么要把 JPG 压到 100KB 以下？</h2>
      <ul>
        <li><strong>邮件附件</strong>——Gmail 单个附件上限 25MB，但大多数企业邮件服务器对超过 1–2MB 的图片会降速甚至退回。100KB 的照片可以顺利通过任何过滤。</li>
        <li><strong>政府与签证表单</strong>——官方证照上传系统普遍强制 100KB / 200KB 的限制。</li>
        <li><strong>求职申请</strong>——Workday、Greenhouse 等招聘系统会二次压缩你上传的文件，先压到 100KB 反而能保住最终记录里的清晰度。</li>
        <li><strong>页面速度与 SEO</strong>——根据 HTTP Archive 数据，图片约占网页平均体重的 50%。Hero 图片每省 1KB，都能直接改善 LCP 指标和谷歌排名。</li>
      </ul>

      <h2>三种把 JPG 压到 100KB 以下的方法（按易用度排序）</h2>

      <h3>方法一（推荐）：浏览器工具——免安装、不上传</h3>
      <p>
        打开 <a href="https://image-compressor-saas.shop">Image Compressor 工具</a>，全程在浏览器本地处理：拖入 JPG，选择 <strong>目标大小 → 100（KB）</strong>，点击压缩，下载结果。因为没有上传环节，证件照、合同、产品原图都绝对安全。
      </p>

      <h3>方法二：Photoshop / GIMP——精细控制</h3>
      <p>
        导出 &gt; Save for Web（旧版）&gt; 选 JPG &gt; 把质量滑块拖到 60–80 &gt; 查看预估文件大小。如果还超 100KB，就缩小图片尺寸。这个方法能像素级控制，但为单张上传开一次软件确实杀鸡用牛刀。
      </p>

      <h3>方法三：命令行——jpegoptim</h3>
      <p>
        进阶用户可以运行 <code>jpegoptim --size=100k photo.jpg</code> 或 <code>cjpeg -quality 75 -outfile out.jpg in.jpg</code>。批量处理时这是最快的方式，但对大多数人有学习门槛。
      </p>

      <h2>分步教程：用我们的免费工具把 JPG 压到 100KB 以下</h2>

      <h3>第 1 步：打开工具</h3>
      <p>
        访问 <a href="https://image-compressor-saas.shop">image-compressor-saas.shop</a>。工具完全在浏览器中运行——没有后端服务器、没有文件上传、文件不会离开你的设备。
      </p>

      <h3>第 2 步：拖入你的 JPG</h3>
      <p>把图片拖到拖放区，或点击选择文件。支持 JPG、PNG、WebP、AVIF。</p>

      <h3>第 3 步：设置目标大小</h3>
      <p>
        勾选 <strong>目标大小</strong> 选项，输入 <code>100</code>（KB）。压缩器会自动调整质量参数，把结果控制在 95–105KB 的目标区间。
      </p>

      <h3>第 4 步：压缩并预览</h3>
      <p>
        点击 <strong>压缩</strong>，几秒钟内你会看到前后对比：原始大小 vs 压缩后大小，并带质量预览滑块，可以确认关键细节没有丢失。
      </p>

      <h3>第 5 步：下载</h3>
      <p>点击下载，压缩后的 JPG 就可以直接用于附件、上传或发送。典型结果：一张 5MB 照片变成 60–100KB——体积减少 80–95%。</p>

      <h2>JPG 压缩的原理是什么？</h2>
      <p>
        JPG 是<strong>有损</strong>格式：它丢弃人类肉眼几乎察觉不到的视觉数据。三个杠杆决定取舍：
      </p>
      <ul>
        <li><strong>质量系数</strong>——60–80 是最佳区间。低于 60 会出现色带和块状伪影；高于 90 体积暴增却看不出收益。</li>
        <li><strong>色度抽样</strong>——人眼对亮度远比对颜色敏感，所以 4:2:0 用一半分辨率存储色彩信息。这也是 JPG 比 PNG 小 10–20 倍的原因。</li>
        <li><strong>分辨率</strong>——长宽减半，像素数变为四分之一。一张 4000px 的照片只用在 800px 宽的展示位，先缩放是最大的收益来源。</li>
      </ul>
      <p>
        "目标大小"模式本质上是对质量系数做二分搜索，直到输出落在你的限制之下——这就是我们的工具能稳定压到 100KB 的原因。深入了解：{" "}
        <a href="/blog/compress-to-target-size">如何把图片压缩到任意目标大小（200KB/100KB/50KB）</a>。
      </p>

      <h2>JPG、JPEG、JFIF 有什么区别？</h2>
      <p>
        基本不用操心。JPG 是旧 8.3 文件名的简写，JPEG 是官方规范名称，JFIF 是两者遵循的封装标准。它们压缩行为完全一致，任何工具——包括我们——都把它们当作同一种格式处理。
      </p>

      <h2>常见问题</h2>

      <h3>把 JPG 压到 100KB 以下会变模糊吗？</h3>
      <p>
        对照片来说不会。质量 70–80 时，屏幕上几乎看不出差别。例外是文字密集的图形和 Logo，边缘会出现伪影——这类内容建议保留 PNG。格式选择可以看我们的{" "}
        <a href="/blog/webp-avif-jpeg-comparison">WebP vs AVIF vs JPEG 对比</a>。
      </p>

      <h3>能把 JPG 精确压缩到 100KB 吗？</h3>
      <p>
        可以非常接近。目标大小模式会把结果控制在目标值的几 KB 之内——100KB 目标通常落在 95–105KB。任何压缩器都无法保证精确字节数，因为质量等级是离散的。
      </p>

      <h3>在线压缩 JPG 安全吗？</h3>
      <p>
        取决于工具。任何要求你把文件上传到服务器的工具，都会保留一份你的图片副本。我们的工具 100% 在浏览器中处理——文件从不离开你的设备，不存在存储、采集或泄露的可能。
      </p>

      <h3>"压缩"和"缩放"有什么区别？</h3>
      <p>
        压缩是在像素尺寸不变的前提下减小文件体积（通过降低质量）。缩放是直接减小像素尺寸。两者都能缩小文件；对网页图片，先缩放再压缩效果最好。
      </p>

      <h3>能一次压缩多张 JPG 吗？</h3>
      <p>
        可以——批量压缩在 <a href="https://image-compressor-saas.shop/pricing">Pro 套餐</a>中提供，还包括 ZIP 导出和 AVIF 支持。
      </p>

      <h2>相关阅读</h2>
      <ul>
        <li><a href="/blog/compress-to-target-size">如何把图片压缩到任意目标大小（200KB/100KB/50KB）</a></li>
        <li><a href="/blog/webp-avif-jpeg-comparison">WebP vs AVIF vs JPEG：你应该用哪种格式？</a></li>
        <li><a href="https://image-compressor-saas.shop/pricing">升级 Pro——无限压缩与批量模式</a></li>
      </ul>

      <h2>马上试试</h2>
      <p>
        30 秒把 JPG 压到 100KB 以下——免费、无需注册，照片永不离开你的设备。{" "}
        <a href="https://image-compressor-saas.shop"><strong>立即压缩 JPG</strong></a>
      </p>
    </article>
  );
}
