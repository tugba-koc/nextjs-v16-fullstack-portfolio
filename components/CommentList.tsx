import { Comment } from '@/lib/generated/prisma/client';
import { Card, CardContent } from './ui/card';

const CommentList = ({ comments }: { comments: Comment[] }) => {
  if (comments.length === 0) {
    return (
      <p className='text-muted-foreground text-center py-8'>No comments yet.</p>
    );
  }
  return (
    <div className='flex flex-col gap-4'>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardContent>
            <span className='font-medium text-sm'>
                {comment.user.name || 'Anonymous'}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommentList;
