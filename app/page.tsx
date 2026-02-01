import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CardComponent from '@/components/Card';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  return (
    <main className='min-h-screen bg-indigo-500'>
      {/* HERO SECTION */}
      <section className='flex flex-col items-center justify-center py-20 px-4 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Hi I am Tugba Koc</h1>
        <p>
          A full-stack developer passionate about building web applications.
        </p>
        <div className='flex gap-4'>
          <Button>
            <Link href='/blog'>Read Blog</Link>
          </Button>
          <Button>
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
          </Button>
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
        

        <Button variant={'link'} asChild className='mt-4 px-0'>
          <Link href={'blog'}>
            View all posts <ArrowRight className='w-4 h-4 ml-1' />
          </Link>
        </Button>
      </section>
    </main>
  );
}
