export interface PostInfo {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    isoDate: string;
    tags?: string[];
    description?: string;
    category?: string;
    banner?: string;
  };
}
