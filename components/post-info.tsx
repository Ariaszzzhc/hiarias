"use client";

import type { Post } from "@/.contentlayer/generated/types";
import Link from "next/link";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

export function PostInfo({ post }: { post: Post }) {
  return (
    <div className="py-16 grid sm:grid-cols-4 gap-4">
      <div className="w-full text-gray-500">
        <time dateTime={post.date}>{dayjs(post.date).format("LL")}</time>
        <div>
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <Link
        href={`/posts/${post._raw.flattenedPath}`}
        className="sm:col-span-3 sm:pl-8 sm:border-l sm:border-gray-300 flex flex-col gap-4"
      >
        <h3 className="text(2xl gray-800) sm:text-3xl font-bold leading-tight tracking-tight">
          {post.title}
        </h3>
        <div className="text-gray-800 italic">{post.description}</div>
      </Link>
    </div>
  );
}
