import { Button } from '@/components/ui/button';
import prisma from '@/lib/db';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function Comments() {
  const comments = await prisma.comment.findMany({
    include: { user: true, orderBy: { createdAt: 'desc' } },
  });
  return (
    <main className='min-h-screen py-16 px-4'>
      <div className='max-w-2xl mx-auto'>
        <Button variant={'ghost'} asChild className='mb-8'>
          <Link href='/'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to Home
          </Link>
        </Button>
        <h1 className='text-3xl font-bold mb-2'>Comments</h1>
        <p className='text-muted-foreground mb-8'>
          Sgn in with Github to leave a comment or message
        </p>
      </div>
    </main>
  );
}

export default Comments;
