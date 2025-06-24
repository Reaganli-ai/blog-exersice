import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col items-center gap-6 w-full max-w-2xl bg-[var(--background)] border border-black/[.08] dark:border-white/[.145] rounded-xl shadow-sm p-8">
        <Image
          className="dark:invert"
          src="/logo/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold mb-2 text-center">关于 Next.js</h1>
        <p className="text-base text-center font-[family-name:var(--font-geist-mono)]">
          Next.js 是一个基于 React 的 Web 开发框架，致力于为开发者提供极致的开发体验和卓越的性能。它支持服务端渲染（SSR）、静态网站生成（SSG）、API 路由、图片优化等现代 Web 应用所需的核心功能。Next.js 由 Vercel 团队开发和维护，广泛应用于企业级和个人项目。
        </p>
        <ul className="list-disc list-inside mt-4 text-sm/6 text-left font-[family-name:var(--font-geist-mono)]">
          <li>支持服务端渲染和静态生成</li>
          <li>内置路由系统，基于文件结构</li>
          <li>自动代码分割与优化</li>
          <li>强大的图片优化能力</li>
          <li>API 路由，轻松构建后端接口</li>
          <li>丰富的社区和生态</li>
        </ul>
        <a
          className="mt-8 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-5 w-full sm:w-auto md:w-[180px]"
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          访问 Next.js 官网
        </a>
      </section>
      <section className="flex flex-col items-center gap-4 w-full max-w-2xl bg-[var(--background)] border border-black/[.08] dark:border-white/[.145] rounded-xl shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-2 text-center">Why Not Found?</h2>
        <p className="text-base text-center text-[var(--foreground)] opacity-80">
          当你访问一个不存在的页面或资源时，Next.js 会自动渲染"Not Found"页面。这是为了提升用户体验，避免用户看到空白或报错页面，并引导用户返回有效的站点内容。
        </p>
      </section>
    </div>
  );
} 