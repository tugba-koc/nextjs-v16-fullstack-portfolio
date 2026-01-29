import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-amber-200'>
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
    </main>
  );
}
