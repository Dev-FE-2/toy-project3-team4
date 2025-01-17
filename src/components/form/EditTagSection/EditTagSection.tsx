import { useTagEdit } from '@/hooks';
import { Input, TagList } from '@/components';
import { PLAYLIST_LIMITS } from '@/constant';
import * as S from '../FormItem/FormItem.styles';

const EditTagSection = () => {
  const { tagInput, setTagInput, tagError, tags, addTag, tagValidError } =
    useTagEdit();

  return (
    <S.FormItemSet>
      <S.Label htmlFor="tag">태그</S.Label>
      <S.InputBtnGroup>
        <Input
          id="tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          placeholder="태그 입력"
          maxLength={PLAYLIST_LIMITS.MAX_TAG_LENGTH}
          $isBorder={true}
        />
        <S.AddButton
          type="button"
          $bgColor="primary"
          $size="md"
          $width="5rem"
          $radius="default"
          onClick={addTag}
        >
          추가
        </S.AddButton>
      </S.InputBtnGroup>
      {tagError && <S.ErrorMessage>{tagError}</S.ErrorMessage>}
      {tagValidError && <S.ErrorMessage>{tagValidError}</S.ErrorMessage>}

      {tags.length > 0 && (
        <TagList tags={tags} gap={0.8} tagType="round" isDeletable={true} />
      )}
    </S.FormItemSet>
  );
};

export default EditTagSection;
