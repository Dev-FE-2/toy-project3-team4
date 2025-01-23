import { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import {
  CommentList,
  CommentViewButton,
  IndexViewButton,
  LoaderWrapper,
  PlaylistInfo,
  PlaylistStats,
  ShareButton,
  VideoInfo,
  VideoList,
  VideoPlayer,
} from '@/components';
import type { ICommentAPISchema, IPlaylistAPISchema } from '@/types';
import { useFetchAuthor, useFetchVideos, useIncrementHits } from '@/hooks';
import * as S from './PlaylistViewPage.styles';
import { QUERY_PARAMS, URL } from '@/constant';
import useFetchComments from '@/hooks/playlist/useFetchComments';

const PlaylistViewPage = () => {
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

  const {
    userSn,
    playlistSn,
    links,
    thumbnailUrl,
    title,
    content,
    date,
    hashTags,
    comments,
    hits,
  } = useLoaderData() as IPlaylistAPISchema;
  const { data: videoInfos, isLoading, error } = useFetchVideos({ links });
  const { data: author } = useFetchAuthor(userSn);
  const commentQueries = useFetchComments(comments);
  const { mutate: updateHits } = useIncrementHits(playlistSn);

  const commentData = commentQueries
    .filter((query) => query.status === 'success' && query.data)
    .flatMap((query) => query.data || []) as ICommentAPISchema[];
  const isLoadingComments = commentQueries.some((query) => query.isLoading);
  const hasErrorInComments = commentQueries.some((query) => query.isError);

  const currentVideo = videoInfos?.[videoIdx];

  const detailViewLinks = {
    default:
      URL.VIEWPLI.link +
      `?${QUERY_PARAMS.PLAYLIST_SN}=${playlistSn}&${QUERY_PARAMS.VIDEO_INDEX}=0`,
  };

  const handleVideoClick = (idx: number) => {
    setVideoIdx(idx);
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      videoIndex: idx.toString(),
    });
  };

  const handleCommentSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log();
      alert(`${e.currentTarget.value} 댓글 기능 준비중.`);
    }
  };

  useEffect(() => {
    // 페이지 진입 시 3초 지연 후 조회수 증가
    const timer = setTimeout(() => {
      updateHits();
    }, 3000);

    return () => clearTimeout(timer);
  }, [updateHits]);

  if (error) {
    return <div>영상 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <S.Container>
      <S.ContentInner>
        <S.LeftColumn>
          {isLoading ? (
            <LoaderWrapper isLoading={isLoading} />
          ) : videoInfos?.length ? (
            <>
              {currentVideo && (
                <>
                  <VideoPlayer
                    video={currentVideo}
                    isFirstVideo={videoIdx === 0}
                    thumbnailUrl={thumbnailUrl}
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
          <PlaylistInfo author={author} playlistTitle={title} />
          <S.InteractionBar>
            {/* <LikeButton playlistSn={playlistSn} /> */}
            <IndexViewButton
              onIndexView={() => {
                setShowComments(false);
                setShowPlaylist(true);
              }}
            />
            <CommentViewButton
              onCommentView={() => {
                setShowPlaylist(false);
                setShowComments(true);
              }}
            />
            <ShareButton link={detailViewLinks.default} />
            {/* <div className="position-right">
              <BookmarkButton playlistSn={playlistSn} />
            </div> */}
          </S.InteractionBar>
          <PlaylistStats
            content={content}
            date={date}
            hashTags={hashTags}
            hits={hits}
          />

          {showComments && (
            <S.SectionWrapper>
              <S.SectionTitle>
                댓글 {new Intl.NumberFormat().format(commentData.length)}개
              </S.SectionTitle>

              <S.CommentInput
                placeholder="댓글을 입력해주세요."
                $isBorder={true}
                onKeyUp={handleCommentSubmit}
              />

              {isLoadingComments ? (
                <div>댓글을 불러오는 중입니다...</div>
              ) : hasErrorInComments ? (
                <div>댓글 정보를 가져오는 중 오류가 발생했습니다.</div>
              ) : commentData.length > 0 ? (
                <CommentList comments={commentData} />
              ) : (
                <div>댓글이 없습니다.</div>
              )}
            </S.SectionWrapper>
          )}

          {showPlaylist && videoInfos && (
            <S.SectionWrapper>
              <S.SectionTitle>플레이리스트 재생 목록</S.SectionTitle>

              <VideoList videos={videoInfos} onClickItem={handleVideoClick} />
            </S.SectionWrapper>
          )}
        </S.RightColumn>
      </S.ContentInner>
    </S.Container>
  );
};

export default PlaylistViewPage;
