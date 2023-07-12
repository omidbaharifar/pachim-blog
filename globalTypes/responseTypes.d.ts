interface TBlogItem {
  title: string;
  image: string;
  slug: string;
  date: string;
  short: string;
  content: string;
  author: TAuthor;
}

interface TAuthor {
  name: string;
  image: string;
}
