import { FormEvent, useState } from 'react';
import { RiDraggable, RiCloseLine } from 'react-icons/ri';
import { PageTitle, Switch } from '@/components';
import * as S from './UpsertPlaylistPage.styles';

interface Video {
  id: string;
  url: string;
  title: string;
  thumbnail: string;
}

const UpsertPlaylistPage = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: '1',
      url: 'example.com',
      title: '영상 제목1',
      thumbnail: '/src/assets/testThumbnail.png',
    },
    {
      id: '2',
      url: 'example.com',
      title: '영상 제목2',
      thumbnail: '/src/assets/testThumbnail.png',
    },
  ]);
  const [tags, setTags] = useState<string[]>(['강아지', '고양이', '귀여움']);

  const handleAddVideo = () => {
    console.log('영상 추가');
    setVideos([...videos]);
  };

  const handleRemoveVideo = () => {
    console.log('영상 제거');
    setVideos([]);
  };

  const handleAddTag = () => {
    console.log('태그 추가');
    setTags([...tags]);
  };

  const handleRemoveTag = () => {
    console.log('태그 제거');
    setTags([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('플레이리스트 생성/수정');
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.Section>
          <S.Header>
            <PageTitle>플레이리스트 생성/수정</PageTitle>
          </S.Header>

          <S.FormItem>
            <S.Label htmlFor="title">플레이리스트 제목</S.Label>
            <S.Input id="title" placeholder="제목을 입력하세요" />
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="description">플레이리스트 설명</S.Label>
            <S.Textarea id="description" placeholder="설명을 입력하세요" />
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="video">영상 URL</S.Label>
            <S.InputBtnGroup>
              <S.Input id="video" placeholder="영상 URL을 입력하세요" />
              <S.AddButton
                $bgColor="primary"
                $size="md"
                $width="5rem"
                $radius="default"
                onClick={handleAddVideo}
              >
                추가
              </S.AddButton>
            </S.InputBtnGroup>

            {videos.length > 0 && (
              <S.VideoList>
                {videos.map((video, idx) => (
                  <S.VideoItem key={idx}>
                    <S.GripButton>
                      <RiDraggable size="1.6rem" />
                    </S.GripButton>
                    <S.ThumbnailBox>
                      <img src={video.thumbnail} alt="thumbnail" />
                      <span>3:24</span>
                    </S.ThumbnailBox>
                    <S.VideoInfoBox>
                      <p>영상 제목</p>
                      <p>영상 설명....</p>
                    </S.VideoInfoBox>
                    <S.DeleteVideoButton onClick={() => handleRemoveVideo()}>
                      <RiCloseLine size="1.6rem" />
                    </S.DeleteVideoButton>
                  </S.VideoItem>
                ))}
              </S.VideoList>
            )}
          </S.FormItem>

          <S.FormItem>
            <S.Label htmlFor="tag">태그</S.Label>
            <S.InputBtnGroup>
              <S.Input id="tag" placeholder="태그 입력" />
              <S.AddButton
                $bgColor="primary"
                $size="md"
                $width="5rem"
                $radius="default"
                onClick={handleAddTag}
              >
                추가
              </S.AddButton>
            </S.InputBtnGroup>

            {tags.length > 0 && (
              <S.TagList>
                {tags.map((tag) => (
                  <S.Tag key={tag}>
                    #{tag}
                    <button onClick={() => handleRemoveTag()}>
                      <RiCloseLine size="1.2rem" />
                    </button>
                  </S.Tag>
                ))}
              </S.TagList>
            )}
          </S.FormItem>

          <S.FormItem>
            <S.Label>공개 여부</S.Label>
            <Switch id="isPublic" $bgColor="primary" $radius="round" />
          </S.FormItem>
        </S.Section>

        <S.Footer>
          <S.SaveButton
            type="submit"
            $bgColor="primary"
            $size="md"
            $width="100%"
            $radius="default"
          >
            플레이리스트 생성/수정
          </S.SaveButton>
        </S.Footer>
      </form>
    </S.Container>
  );
};

export default UpsertPlaylistPage;
