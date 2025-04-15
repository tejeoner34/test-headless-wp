import { Post } from '@/models/Post';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <CardDescription>{formatDate(post.date)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </CardContent>
        <CardFooter>
          <span className="text-sm text-muted-foreground">Read more →</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
