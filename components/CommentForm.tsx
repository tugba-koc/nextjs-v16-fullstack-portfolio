'use client';

import { useRouter } from 'next/navigation';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { Button } from './ui/button';
import { Loader2, Send } from 'lucide-react';

const CommentForm = () => {
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('checked...');

    if (!content.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (res.ok) {
        setContent('');
        router.refresh();
      }
    } catch (error) {
      console.error('comment post failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder='Write your comment...'
        rows={3}
      />
      <Button
        type='submit'
        disabled={isSubmitting || !content.trim()}
        className='self-end'
      >
        {isSubmitting ? (
          <Loader2 className='w-4 h-4 mr-2 animate-spin' />
        ) : (
          <Send className='m-4 h-4 mr-2' />
        )}
        {isSubmitting ? 'Posting...' : 'Post comment'}
      </Button>
    </form>
  );
};

export default CommentForm;
