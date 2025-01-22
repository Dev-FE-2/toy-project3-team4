import { RoundTag, TextTag } from '..';
import * as S from './TagList.styles';

interface ITagList {
  tags: string[];
  tagType: 'text' | 'round';
  gap?: number;
  removeTag?: (text: string) => void;
}

const TagList = ({ tags, tagType, gap, removeTag }: ITagList) => {
  return (
    <S.TagList $gap={gap}>
      {tags.map((tag) =>
        tagType === 'round' ? (
          <RoundTag key={tag} text={tag} removeTag={removeTag} />
        ) : (
          <TextTag key={tag} text={tag} />
        ),
      )}
    </S.TagList>
  );
};

export default TagList;
