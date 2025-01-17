import { RiCloseLine } from 'react-icons/ri';
import * as S from './RoundTag.styles';
import { useTagEdit } from '@/hooks';

interface IRoundTag {
  text: string;
  isDeletable?: boolean;
}

const RoundTag = ({ text, isDeletable = false }: IRoundTag) => {
  const { removeTag } = useTagEdit();
  return (
    <S.RoundTag>
      #{text}
      {isDeletable && (
        <button type="button" onClick={() => removeTag(text)}>
          <RiCloseLine size="1.2rem" />
        </button>
      )}
    </S.RoundTag>
  );
};

export default RoundTag;
