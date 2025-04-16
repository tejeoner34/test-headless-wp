import { fetchPost } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose prose-lg mx-auto">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div className="text-sm text-muted-foreground mb-8">
          Published on {formatDate(post.date)}
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}
