import { MDXContent } from "@/components/mdx-content";
import { getAllSlugs, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { type Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllSlugs();
}

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (post == null) {
    return {};
  }

  const { title, description } = post;

  return {
    title,
    description,
  };
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (post == null) {
    notFound();
  }

  return (
    <div>
      <div className="py-8 text-5xl">{post.title}</div>
      <p className="text-zinc-600 mb-8">{post.description}</p>
      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <article className="mt-12">
        <div>
          <MDXContent code={post.body.code} />
        </div>
      </article>
    </div>
  );
}
