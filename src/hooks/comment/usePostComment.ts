import { useMutation } from '@tanstack/react-query';
import { addComment } from '@/api';
import type { ICommentAPISchema } from '@/types';

const usePostComment = () => {
  return useMutation<
    void,
    Error,
    { playlistSn: string; commentData: ICommentAPISchema }
  >({
    mutationFn: async ({ playlistSn, commentData }) => {
      if (!playlistSn || !commentData) throw new Error('Invalid Comment data');
      await addComment(playlistSn, commentData);
    },
    onSuccess: () => {
      console.log('댓글 추가 성공!');
    },
    onError: (error: Error) => {
      console.error('댓글 추가 실패:', error.message);
    },
  });
};

export default usePostComment;
