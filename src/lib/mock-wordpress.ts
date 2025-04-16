import { Post } from '@/models/Post';
import { mockPosts, totalPosts } from './mock-data';

export async function getMockPosts(page = 1, perPage = 10): Promise<Post[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Return paginated posts
  return mockPosts.slice(startIndex, endIndex);
}

export async function getMockPost(slug: string): Promise<Post | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Find post by slug
  const post = mockPosts.find((post) => post.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function getMockTotalPosts(): Promise<number> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return totalPosts;
}
