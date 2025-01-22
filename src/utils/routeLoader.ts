import { URL as CONST_URL } from '@/constant';
import { getFetchPlayListOptions } from '@/hooks';
import type { QueryClient } from '@tanstack/react-query';
import { redirect } from 'react-router-dom';

export const loadPlaylist =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const playlistSn = new URL(request.url).searchParams.get('playlistSn');

    if (!playlistSn) return redirect(CONST_URL.HOME.link);

    // playlistSn 유효성 검증
    // const data = await getPlaylist(playlistSn);
    const query = getFetchPlayListOptions(playlistSn);
    const data = await queryClient.ensureQueryData(query);

    // 유효하지 않은 경우 홈페이지로 리다이렉트
    if (!data) return redirect(CONST_URL.HOME.link);

    return data;
  };
