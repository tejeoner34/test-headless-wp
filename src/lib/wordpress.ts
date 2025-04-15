import { Post } from '@/models/Post';

const WORDPRESS_API_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'http://temporal/wp-json/wp/v2';

export async function getPosts(page = 1, perPage = 10): Promise<Post[]> {
  const response = await fetch(
    `${WORDPRESS_API_URL}/posts?page=${page}&per_page=${perPage}&_embed`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export async function getPost(slug: string): Promise<Post> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const posts = await response.json();
  return posts[0];
}

export async function getTotalPosts(): Promise<number> {
  const response = await fetch(`${WORDPRESS_API_URL}/posts`);

  if (!response.ok) {
    throw new Error('Failed to fetch total posts count');
  }

  return parseInt(response.headers.get('X-WP-Total') || '0', 10);
}
