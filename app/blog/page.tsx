import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles from Build On on housing, planning, and how ordinary people can support the homes Britain needs.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-build-green font-semibold tracking-wide text-sm uppercase mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Notes on homes, planning and action
          </h1>
          <p className="mt-4 text-navy-200 text-lg leading-relaxed">
            Short pieces on the housing shortage, the planning system, and how
            people can support well-designed schemes — without needing a
            campaign office.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {posts.length === 0 ? (
          <p className="text-navy-600">Posts coming soon.</p>
        ) : (
          <ul className="divide-y divide-navy-100">
            {posts.map((post) => (
              <li key={post.slug} className="py-8 first:pt-0">
                <article>
                  <time
                    dateTime={post.date}
                    className="text-sm text-navy-500"
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-2xl font-bold text-navy-950 tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-build-green-dark transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {post.subtitle ? (
                    <p className="mt-1 text-navy-600 font-medium">
                      {post.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 text-navy-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-build-green-dark hover:text-build-green transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
