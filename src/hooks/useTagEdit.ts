import { useState } from 'react';
import { usePlaylistContext } from '@/context';
import { PLAYLIST_LIMITS } from '@/constant';

const useTagEdit = () => {
  const {
    tagInput,
    setTagInput,
    tags,
    setTags,
    tagValidError,
    setTagValidError,
  } = usePlaylistContext();

  const [tagError, setTagError] = useState('');

  // 태그 추가
  const addTag = () => {
    setTagError('');
    setTagValidError('');
    const trimmedTag = tagInput.trim();

    if (!trimmedTag) {
      setTagError('태그를 입력해주세요.');
      return;
    }

    if (trimmedTag.length > PLAYLIST_LIMITS.MAX_TAG_LENGTH) {
      setTagError(
        `태그는 ${PLAYLIST_LIMITS.MAX_TAG_LENGTH}자 이내로 입력해주세요.`,
      );
      return;
    }

    if (tags.length >= PLAYLIST_LIMITS.MAX_TAGS) {
      setTagError(
        `태그는 최대 ${PLAYLIST_LIMITS.MAX_TAGS}개까지 추가할 수 있습니다.`,
      );
      return;
    }

    if (tags.includes(trimmedTag)) {
      setTagError('이미 존재하는 태그입니다.');
      return;
    }

    setTags((prev) => [...prev, trimmedTag]);
    setTagInput('');
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const validate = () => {
    if (tags.length < PLAYLIST_LIMITS.MIN_TAGS) {
      setTagValidError('최소 1개 이상의 태그를 추가해주세요.');
      return false;
    }
    setTagValidError('');
    return true;
  };

  return {
    tagInput,
    setTagInput,
    tagError,
    tags,
    setTags,
    tagValidError,
    addTag,
    removeTag,
    validate,
  };
};

export default useTagEdit;
