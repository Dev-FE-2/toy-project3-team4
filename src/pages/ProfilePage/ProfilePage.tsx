import { ExplorePlayListCard, ProfileCard } from '@/components/card';
import * as S from './ProfilePage.styles';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { bookmarkPlaylist, getUser, userPlaylist } from '@/api';
import { useUser } from '@/store';
import { LoaderWrapper } from '@/components';
import { Tab } from '@/components/core/Tab';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const user = useUser();
  const [tab, setTab] = useState('myPlaylist');
  const { userSn } = useParams();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.resetQueries({ queryKey: ['bookmarkPlaylist', userSn] });
    queryClient.resetQueries({ queryKey: ['userPlaylist', userSn] });
    queryClient.resetQueries({ queryKey: ['getUser', userSn] });
  }, [queryClient, userSn]);

  const {
    data: myPlaylists,
    isSuccess: mySuccess,
    isLoading: myLoading,
  } = useQuery({
    queryKey: ['userPlaylist', userSn],
    queryFn: () => userPlaylist(userSn),
    refetchOnWindowFocus: false,
  });

  const {
    data: bookmarks,
    isSuccess: bookmarkSuccess,
    isLoading: bookmarkLoading,
  } = useQuery({
    queryKey: ['bookmarkPlaylist', userSn],
    queryFn: () => bookmarkPlaylist(userSn),
    refetchOnWindowFocus: false,
  });

  const { data: profile, isLoading } = useQuery({
    queryKey: ['getUser', userSn],
    queryFn: () => getUser(userSn || ''),
  });

  if (isLoading && myLoading && bookmarkLoading)
    return <LoaderWrapper isLoading={true} />;
  if (!profile) return <div>잘못된 접근입니다.</div>;

  return (
    <S.ProfileContainer>
      <ProfileCard profile={profile} />
      {user?.userSn === userSn && (
        <Tab
          items={[
            { label: 'myPlaylist', title: '플레이리스트' },
            { label: 'bookmarks', title: '구독 플레이리스트' },
          ]}
          selected={tab}
          setSelected={setTab}
        />
      )}
      {tab === 'myPlaylist'
        ? mySuccess &&
          myPlaylists.map((playlist, i) => (
            <ExplorePlayListCard key={i} data={playlist} />
          ))
        : bookmarkSuccess &&
          bookmarks.map((playlist, i) => (
            <ExplorePlayListCard key={i} data={playlist} />
          ))}
    </S.ProfileContainer>
  );
};

export default ProfilePage;
