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
    <article>
      <div>
        <MDXContent code={post.body.code} />
      </div>
    </article>
  );
}
