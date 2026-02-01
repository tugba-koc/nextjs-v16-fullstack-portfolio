import { Post } from '@/types';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

const CardComponent = (props: Post) => {
  const { slug, title, createdAt } = props;

  return (
    <div className='flex flex-col gap-4'>
      <Card
        key={slug}
        className='hover:bg-blue-200 transition-colors border border-gray-300 rounded-lg mb-6'
      >
        <Link href={`/blog/${slug}`} className='block p-6'>
          <CardContent className='p-4'>
            <h3 className='font-semibold'>{title}</h3>
            <p className='text-sm text-muted-foreground'>
              {new Date(createdAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default CardComponent;
