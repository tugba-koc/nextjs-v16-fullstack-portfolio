import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../types';
import Card from '@/components/Card';

export default function Home() {
  const posts: Post[] = [
    {
      slug: 'first-post',
      title: 'My First Post',
      content: `# Hello World
                This is my first blog post written in markdown format.
                I am excited to share my thoughts and experiences with you all!`,
    },
  ];

  return (
    <main className='min-h-screen bg-indigo-500'>
      {/* HERO SECTION */}
      <section className='flex flex-col items-center justify-center py-20 px-4 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Hi I am Tugba Koc</h1>
        <p>
          A full-stack developer passionate about building web applications.
        </p>
        <div className='flex gap-4'>
          <button>
            <Link href='/blog'>Read Blog</Link>
          </button>
          <button>
            <Link href='/comments'>
              <Image
                src='/comments-icon.png'
                alt='Comments Icon'
                className='inline-block w-5 h-5 mr-2'
                width={20}
                height={20}
              />
              Contact Me
            </Link>
          </button>
        </div>
      </section>
      {/* ABOUT ME SECTION */}
      <section className='py-16 px-4 text-center max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>About Me</h2>
        <p className='text-muted-foreground'>
          I am a dedicated full-stack developer with experience in building
          scalable web applications using modern technologies. I love solving
          complex problems and continuously learning new skills to enhance my
          craft.
        </p>
      </section>
      {/* RECENT POST SECTION */}
      <section className='py-16 px-4 text-center max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Recent Posts</h2>
        {posts?.length > 0 ? (
          posts.map((post) => <Card key={post.slug} {...post} />)
        ) : (
          <p className='text-muted-foreground'>No posts available.</p>
        )}
      </section>
    </main>
  );
}
