import { Post } from '@/types';
import Link from 'next/link';
import { Card } from './ui/card';

const CardComponent = (props: Post) => {
  const { slug, title, content } = props;

  return (
    <Card
      key={slug}
      className='hover:bg-blue-200 transition-colors border border-gray-300 rounded-lg mb-6'
    >
      <Link href={`/blog/${slug}`} className='block p-6'>
        <div className='p-4'>
          <h3 className='font-semibold'>{title}</h3>
          {/* <p className='text-sm text-muted-foreground'>
            {new Date().toLocaleDateString()}
          </p> */}
        </div>
      </Link>
    </Card>
  );
};

export default CardComponent;
