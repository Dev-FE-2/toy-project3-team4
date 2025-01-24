import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/provider';
import { updateHits } from '@/api';

const useIncrementHits = (playlistSn: string) => {
  return useMutation({
    mutationFn: () => updateHits(playlistSn),
    onSuccess: () => {
      // 조회수 증가 후 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['hits', playlistSn],
      });
    },
  });
};

export default useIncrementHits;
