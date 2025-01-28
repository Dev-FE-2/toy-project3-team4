import { useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import {
  CommentSection,
  LoaderWrapper,
  PlaylistHeader,
  PlaylistSection,
  PlaylistStats,
  VideoInfo,
  VideoPlayer,
} from '@/components';
import { usePlaylistView } from '@/hooks';
import { useUserSn } from '@/store';
import type { IPlaylistAPISchema } from '@/types';
import * as S from './PlaylistViewPage.styles';

const PlaylistViewPage = () => {
  const {
    userSn: authorSn,
    playlistSn,
    links,
    thumbnailUrl,
    title,
    content,
    date,
    hashTags,
    comments: commentSns,
    hits,
  } = useLoaderData() as IPlaylistAPISchema;

  const userSn = useUserSn(); // 유저 로그인 여부로 사용

  const {
    videoInfos,
    author,
    isVideosLoading,
    videosError,
    commentData,
    isLoadingComments,
    hasErrorInComments,
  } = usePlaylistView(playlistSn, links, authorSn, commentSns);

  const [searchParams, setSearchParams] = useSearchParams();

  const [videoIdx, setVideoIdx] = useState(
    parseInt(searchParams.get('videoIndex') as string) || 0,
  );
  const [showPlaylist, setShowPlaylist] = useState(
    searchParams.get('comments') === null,
  );
  const [showComments, setShowComments] = useState(
    Boolean(searchParams.get('comments')) || false,
  );

  const currentVideo = videoInfos?.[videoIdx];

  const handleVideoClick = (idx: number) => {
    setVideoIdx(idx);
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      videoIndex: idx.toString(),
    });
  };

  const handleVideoEnd = () => {
    // 다음 영상이 있는 경우에만 재생
    if (videoInfos && videoIdx < videoInfos.length - 1) {
      const nextVideoIdx = videoIdx + 1;
      handleVideoClick(nextVideoIdx);
    }
  };

  if (videosError) {
    return <div>영상 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <S.Container>
      <S.ContentInner>
        <S.LeftColumn>
          {isVideosLoading ? (
            <LoaderWrapper isLoading={isVideosLoading} />
          ) : videoInfos?.length ? (
            <>
              {currentVideo && (
                <>
                  <VideoPlayer
                    video={currentVideo}
                    isFirstVideo={videoIdx === 0}
                    thumbnailUrl={thumbnailUrl}
                    onVideoEnd={handleVideoEnd}
                  />
                  <VideoInfo video={currentVideo} />
                </>
              )}
            </>
          ) : (
            <div>재생할 수 있는 영상이 없습니다.</div>
          )}
        </S.LeftColumn>

        <S.RightColumn>
          <PlaylistHeader
            author={author}
            playlistTitle={title}
            playlistSn={playlistSn}
            onToggleView={(type) => {
              setShowComments(type === 'comments');
              setShowPlaylist(type === 'playlist');
            }}
          />

          <PlaylistStats
            content={content}
            date={date}
            hashTags={hashTags}
            hits={hits}
          />

          {showComments && (
            <CommentSection
              userSn={userSn}
              playlistSn={playlistSn}
              comments={commentData}
              isLoading={isLoadingComments}
              hasError={hasErrorInComments}
            />
          )}

          {showPlaylist && videoInfos && (
            <PlaylistSection
              videos={videoInfos}
              onVideoClick={handleVideoClick}
            />
          )}
        </S.RightColumn>
      </S.ContentInner>
    </S.Container>
  );
};

export default PlaylistViewPage;
