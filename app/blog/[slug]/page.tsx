import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "../page";

// 正确的 Next.js App Router 页面参数类型
export interface PageProps {
  params: {
    slug: string;
  };
}

// 加上这个函数是关键
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <div className="min-h-screen p-8 flex flex-col items-center gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-4 text-center">{blog.title}</h1>
      <Image
        src={blog.img}
        alt={blog.title}
        width={96}
        height={96}
        className="mb-4 dark:invert"
      />
      <p className="text-lg text-center text-[var(--foreground)] opacity-80 max-w-2xl mb-6">{blog.desc}</p>
      <article className="prose prose-neutral dark:prose-invert max-w-2xl text-base leading-relaxed">
        {blog.content}
      </article>
    </div>
  );
}