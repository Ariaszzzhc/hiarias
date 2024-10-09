import { MDXContent } from "@/components/mdx-content";
import { getAllSlugs, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import dayjs from "dayjs";
import LocalizeFormat from "dayjs/plugin/localizedFormat";
import { Badge } from "@/components/ui/badge";

dayjs.extend(LocalizeFormat);

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
      <div className="mb-8 text-gray-500">
        <div>
          <time dateTime={post.date}>{dayjs(post.date).format("LL")}</time>
        </div>
        <div>
          {post.tags.map((t, i) => (
            <Badge key={i} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <div className="shrink-0 bg-border h-[1px] w-full"></div>
      <article className="mt-12">
        <div>
          <MDXContent code={post.body.code} />
        </div>
      </article>
    </div>
  );
}
