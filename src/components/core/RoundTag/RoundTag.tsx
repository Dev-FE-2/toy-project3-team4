import { RiCloseLine } from 'react-icons/ri';
import * as S from './RoundTag.styles';

interface IRoundTag {
  text: string;
  isEditable?: boolean;
}

const RoundTag = ({ text, isEditable = false }: IRoundTag) => {
  return (
    <S.RoundTag>
      #{text}
      {isEditable && (
        <button type="button">
          <RiCloseLine size="1.2rem" />
        </button>
      )}
    </S.RoundTag>
  );
};

export default RoundTag;
