import { getPosts, getTotalPosts } from '@/lib/wordpress';
import { PostCard } from '@/components/PostCard';

export default async function Home() {
  const posts = await getPosts();
  const totalPosts = await getTotalPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Showing {posts.length} of {totalPosts} posts
      </div>
    </main>
  );
}
