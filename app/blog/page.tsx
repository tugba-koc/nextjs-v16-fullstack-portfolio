import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function Blog() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3,
  });
  return (
    <main className='min-h-screen py-16 px-4'>
      <div className='max-w-3xl mx-auto'>
        <Button variant='ghost' asChild className='mb-8'>
          <Link href={'/'}>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Home
          </Link>
        </Button>
        <h1 className='text-3xl font-bold mb-8'>Blog</h1>
        {posts?.length > 0 ? (
          posts.map((post) => <CardComponent key={post.slug} {...post} />)
        ) : (
          <p className='text-muted-foreground'>No posts available.</p>
        )}
      </div>
    </main>
  );
}
