import { RoundTag, TextTag } from '..';
import * as S from './TagList.styles';

interface ITagList {
  tags: string[];
  tagType: 'text' | 'round';
  gap?: number;
  isDeletable?: boolean;
}

const TagList = ({ tags, tagType, gap, isDeletable = false }: ITagList) => {
  return (
    <S.TagList $gap={gap}>
      {tags.map((tag) =>
        tagType === 'round' ? (
          <RoundTag key={tag} text={tag} isDeletable={isDeletable} />
        ) : (
          <TextTag key={tag} text={tag} />
        ),
      )}
    </S.TagList>
  );
};

export default TagList;
