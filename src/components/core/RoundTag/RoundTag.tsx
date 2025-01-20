import { RiCloseLine } from 'react-icons/ri';
import * as S from './RoundTag.styles';

interface IRoundTag {
  text: string;
  removeTag?: (text: string) => void;
}

const RoundTag = ({ text, removeTag }: IRoundTag) => {
  return (
    <S.RoundTag>
      #{text}
      {removeTag && (
        <button type="button" onClick={() => removeTag(text)}>
          <RiCloseLine size="1.2rem" />
        </button>
      )}
    </S.RoundTag>
  );
};

export default RoundTag;
