import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/data/blog-posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-white">
      <header className="bg-navy-950 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-sm text-navy-300 mb-3">
            <Link href="/blog" className="hover:text-build-green transition-colors">
              Blog
            </Link>
            <span className="mx-2 text-navy-600">/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          {post.subtitle ? (
            <p className="mt-4 text-lg text-navy-200 leading-relaxed">
              {post.subtitle}
            </p>
          ) : null}
          <p className="mt-6 text-sm text-navy-400">By {post.author}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-5 text-navy-800 text-lg leading-relaxed">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-navy-100 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="text-sm font-semibold text-navy-700 hover:text-build-green-dark transition-colors"
          >
            ← All posts
          </Link>
          <Link
            href="/toolkit"
            className="inline-flex justify-center rounded-lg bg-build-green px-5 py-2.5 text-sm font-semibold text-navy-950 hover:bg-build-green-light transition-colors"
          >
            Write a representation
          </Link>
        </div>
      </div>
    </article>
  );
}
