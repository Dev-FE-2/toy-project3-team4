import { RiCloseLine } from 'react-icons/ri';
import * as S from './RoundTag.styles';

interface IRoundTag {
  text: string;
  isDeletable?: boolean;
}

const RoundTag = ({ text, isDeletable = false }: IRoundTag) => {
  return (
    <S.RoundTag>
      #{text}
      {isDeletable && (
        <button type="button">
          <RiCloseLine size="1.2rem" />
        </button>
      )}
    </S.RoundTag>
  );
};

export default RoundTag;
