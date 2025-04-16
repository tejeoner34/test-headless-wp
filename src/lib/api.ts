import { Post } from '@/models/Post';
import { getPosts, getPost, getTotalPosts } from './wordpress';
import { getMockPosts, getMockPost, getMockTotalPosts } from './mock-wordpress';

const USE_MOCK_DATA = false;

export async function fetchPosts(page = 1, perPage = 10): Promise<Post[]> {
  if (USE_MOCK_DATA) {
    return getMockPosts(page, perPage);
  }
  return getPosts(page, perPage);
}

export async function fetchPost(slug: string): Promise<Post | null> {
  if (USE_MOCK_DATA) {
    return getMockPost(slug);
  }
  return getPost(slug);
}

export async function fetchTotalPosts(): Promise<number> {
  if (USE_MOCK_DATA) {
    return getMockTotalPosts();
  }
  return getTotalPosts();
}
