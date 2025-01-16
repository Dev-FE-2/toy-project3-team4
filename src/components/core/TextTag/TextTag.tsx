import * as S from './TextTag.styles';

const TextTag = ({ text }: { text: string }) => {
  return <S.TextTag>#{text}</S.TextTag>;
};

export default TextTag;
