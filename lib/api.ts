import { allPosts } from "contentlayer/generated";

export function listAllPosts() {
  return allPosts;
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post._raw.flattenedPath === slug);
}

export function getAllSlugs() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}
