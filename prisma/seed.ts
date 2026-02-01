import prisma from '@/lib/db';

async function main() {
  const blogPosts = [
    {
      slug: 'second-post',
      title: 'My Second Post',
      content: `# Hello
                This is my second blog post written in markdown format.
                I am excited to share my thoughts and experiences with you all!`,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log('created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
