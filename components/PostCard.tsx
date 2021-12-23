import React from "react";
import type { PostInfo } from "../types.d.ts";

export interface PostCardPorps {
  post: PostInfo;
}

export default function PostCard({ post }: PostCardPorps) {
  return (
    <div className="flex mx-auto mb-10">
      <article>
        <header className="text-left mb-4">
          <h2 className="text-2xl">
            <a href={`/blog/${post.slug}`}>{post.frontmatter.title}</a>
          </h2>
          <div className="mt-2 text-gray-500 flex items-center">
            <div className="mr-2 flex items-center">
              <i className="ri-calendar-2-line mr-1" />
              <time dateTime={post.frontmatter.isoDate}>
                {post.frontmatter.date}
              </time>
            </div>
            {post.frontmatter?.category
              ? (
                <div className="mr-2 flex items-center">
                  <i className="ri-function-line mr-1" />
                  {post.frontmatter.category}
                </div>
              )
              : null}
            {post.frontmatter?.tags
              ? (
                <div className="mr-2 flex items-center">
                  <i className="ri-price-tag-3-line mr-1" />
                  {post.frontmatter.tags}
                </div>
              )
              : null}
          </div>
        </header>

        {post.frontmatter?.banner
          ? (
            <div className="flex relative items-center mb-4">
              <img
                src={post.frontmatter?.banner}
                className="rounded-md shadow-md"
              />
            </div>
          )
          : null}

        <div>
          <p>{post.frontmatter.description}</p>
        </div>
      </article>
    </div>
  );
}
