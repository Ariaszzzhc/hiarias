import { PostInfo } from "@/components/post-info";
import { listAllPosts } from "@/lib/api";
import { type Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Arias's Blog",
  };
}

export default function Home() {
  const posts = listAllPosts();

  return (
    <>
      {posts.map((post, index) => (
        <PostInfo key={index} post={post} />
      ))}
    </>
  );
}
