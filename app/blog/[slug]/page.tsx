import CardComponent from '@/components/Card';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  console.log('slug', slug);

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  console.log('post', post);

  if (!post) {
    return notFound();
  }

  return (
    <main className='min-h-screen py-16 px-4'>
      <article className='max-w-3xl mx-auto'>
        <Button asChild className='mb-8' variant='ghost'>
          <Link href='/blog'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Blog
          </Link>
        </Button>
        <h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
        <p className='text-muted-foreground mb-8'>
          {new Date(post?.createdAt).toLocaleDateString()}
        </p>

        <div className='prose prose-neutral dark:prose-invert max-w-none'>
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
