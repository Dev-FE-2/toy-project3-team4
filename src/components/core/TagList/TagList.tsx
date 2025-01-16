import { RoundTag, TextTag } from '..';
import * as S from './TagList.styles';

interface ITagList {
  tags: string[];
  tagType: 'text' | 'round';
  gap: string;
  isEditable?: boolean;
}

const TagList = ({ tags, tagType, gap, isEditable = false }: ITagList) => {
  return (
    <S.TagList $gap={gap}>
      {tags.map((tag) =>
        tagType === 'round' ? (
          <RoundTag key={tag} text={tag} isEditable={isEditable} />
        ) : (
          <TextTag key={tag} text={tag} />
        ),
      )}
    </S.TagList>
  );
};

export default TagList;
