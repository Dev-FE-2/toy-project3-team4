import { useMutation } from '@tanstack/react-query';
import { updateComment } from '@/api';
import type { ICommentAPISchema } from '@/types';

const useUpdateComment = () => {
  return useMutation<
    void,
    Error,
    { commentSn: string; updates: Partial<ICommentAPISchema> }
  >({
    mutationFn: async ({ commentSn, updates }) => {
      if (!commentSn || !updates) throw new Error('Invalid update data');
      await updateComment(commentSn, updates);
    },
    onSuccess: () => {
      console.log('댓글 업데이트 성공!');
    },
    onError: (error: Error) => {
      console.error('댓글 업데이트 실패:', error.message);
    },
  });
};

export default useUpdateComment;
