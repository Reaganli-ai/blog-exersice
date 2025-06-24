import Image from "next/image";
import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { blogs } from "../../lib/data";

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center gap-12 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-8">博客列表</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            title={blog.title}
            desc={blog.desc}
            img={blog.img}
            href={`/blog/${blog.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
