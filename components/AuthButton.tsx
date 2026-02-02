'use client';
import { Github, Loader2, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { signIn, useSession } from '@/lib/auth-client';
import { signOut } from 'better-auth/api';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function AuthButton() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className='flex items-center gap-2 text-muted-foreground'>
        <Loader2 className='w-4 h-4 animate-spin' />
        Loading...
      </div>
    );
  }

  const signInBtn = async () => {
    await signIn.social({
      provider: 'github',
    });
  };

  if (session?.user) {
    return (
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Avatar className='w-8 h-8'>
            <AvatarImage
              src={session.user.image || ''}
              alt={session.user.name || 'user image'}
            />
            <AvatarFallback>{session?.user?.name || 'U'}</AvatarFallback>
          </Avatar>
          <span className='text-sm'>
            {session?.user?.email || session?.user?.name}
          </span>
        </div>
        <Button onClick={() => signOut()} variant={'outline'} size={'sm'}>
          <LogOut className='w-4 h-4 mr-2' />
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={signInBtn}>
      <Github className='w-4 h-4 mr-2' />
      Sign in Github
    </Button>
  );
}
