import { ExplorePlayListCard, ProfileCard } from '@/components/card';
import * as S from './ProfilePage.styles';
import { useQuery } from '@tanstack/react-query';
import { bookmarkPlaylist, userPlaylist } from '@/api';
import { useUser } from '@/store';
import { LoaderWrapper } from '@/components';
import { Tab } from '@/components/core/Tab';
import { useState } from 'react';

const ProfilePage = () => {
  const user = useUser();
  const [tab, setTab] = useState('myPlaylist');

  const {
    data: myPlaylists,
    isSuccess: mySuccess,
    isLoading: myLoading,
  } = useQuery({
    queryKey: ['userPlaylist'],
    queryFn: () => userPlaylist(user?.userSn),
    enabled: !!user?.userSn,
    refetchOnWindowFocus: false,
  });

  const {
    data: bookmarks,
    isSuccess: bookmarkSuccess,
    isLoading: bookmarkLoading,
  } = useQuery({
    queryKey: ['bookmarkPlaylist'],
    queryFn: () => bookmarkPlaylist(user?.userSn),
    enabled: !!user?.userSn,
    refetchOnWindowFocus: false,
  });

  return (
    <S.ProfileContainer>
      <ProfileCard />
      <Tab
        items={[
          { label: 'myPlaylist', title: '플레이리스트' },
          { label: 'bookmarks', title: '구독 플레이리스트' },
        ]}
        selected={tab}
        setSelected={setTab}
      />
      {tab === 'myPlaylist' ? (
        <LoaderWrapper isLoading={myLoading}>
          {mySuccess &&
            myPlaylists.map((playlist, i) => (
              <ExplorePlayListCard key={i} data={playlist} />
            ))}
        </LoaderWrapper>
      ) : (
        <LoaderWrapper isLoading={bookmarkLoading}>
          {bookmarkSuccess &&
            bookmarks.map((playlist, i) => (
              <ExplorePlayListCard key={i} data={playlist} />
            ))}
        </LoaderWrapper>
      )}
    </S.ProfileContainer>
  );
};

export default ProfilePage;
