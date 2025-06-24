import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "../../../lib/data"; // 关键第一步：从正确的地方导入

// 关键第二步：定义一个简单的、正确的类型
type Props = {
  params: {
    slug: string;
  };
};

// 关键第三步：使用上面的类型，并且函数不是 async
export default function BlogDetailPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return notFound();
  }

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

// 这个函数也需要，它告诉 Next.js 提前构建哪些页面
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}