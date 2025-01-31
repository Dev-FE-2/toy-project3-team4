import { useQuery } from '@tanstack/react-query';
import { getVideoInfo } from '@/utils';
import { CONTENT_STALE_TIME } from '@/constant';
import type { Video } from '@/types';

const useFetchVideos = ({ links }: { links: string[] }) => {
  return useQuery({
    queryKey: ['playlist-videos', links],
    queryFn: async () => {
      const promises = links.map(getVideoInfo);
      const results = await Promise.all(promises);
      return results.filter((info): info is Video => info !== null);
    },
    enabled: links.length > 0,
    staleTime: CONTENT_STALE_TIME,
  });
};

export default useFetchVideos;
