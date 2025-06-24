import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

export default function BlogCard({ title, desc, img, href }: BlogCardProps) {
  return (
    <Link href={href} className="no-underline">
      <div className="bg-[var(--background)] border border-black/[.08] dark:border-white/[.145] rounded-xl shadow-sm overflow-hidden transition hover:shadow-lg cursor-pointer hover:scale-[1.02] h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl font-semibold mb-3 text-center">{title}</h2>
          <p className="text-base text-center text-[var(--foreground)] opacity-80 flex-1">{desc}</p>
          <div className="flex justify-end mt-4">
            <span className="text-sm text-blue-600 hover:underline font-medium">阅读更多...</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 