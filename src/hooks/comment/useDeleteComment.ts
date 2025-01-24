import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '@/api';

const useUpdateComment = () => {
  return useMutation<void, Error, { playlistSn: string; commentSn: string }>({
    mutationFn: async ({ playlistSn, commentSn }) => {
      if (!commentSn || !playlistSn) throw new Error('Invalid delete data');
      await deleteComment(playlistSn, commentSn);
    },
    onSuccess: () => {
      console.log('댓글 삭제 성공!');
    },
    onError: (error: Error) => {
      console.error('댓글 삭제 실패:', error.message);
    },
  });
};

export default useUpdateComment;
