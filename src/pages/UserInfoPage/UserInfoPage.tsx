import { RoundImage } from '@/components';
import defaultImage from '@/assets/avatar.svg';
import { useUser } from '@/store';
import * as S from './UserInfoPage.styles';
import { FormEvent, useRef, useState } from 'react';
import useFetchUserInfo from '@/hooks/useFetchUserInfo';
import { useNavigate } from 'react-router-dom';

const UserInfoPage = () => {
  const user = useUser();
  const userSn = user?.userSn || '';
  const [imgUrl, setImgUrl] = useState<string>(user?.imgUrl || defaultImage);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [name, setName] = useState(user?.name || '');
  const [description, setDescription] = useState(user?.description || '');
  const imgRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const desRef = useRef<HTMLTextAreaElement>(null);
  const navigation = useNavigate();
  const { mutate, isPending } = useFetchUserInfo(userSn);

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      setImgUrl(URL.createObjectURL(file));
      setImgFile(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate(
      { imgUrl, name, description, file: imgFile },
      { onSuccess: () => navigation('/profile') },
    );
  };

  return (
    <S.InfoContainer onSubmit={handleSubmit}>
      <S.Title>프로필 편집</S.Title>
      <S.ImageBox>
        <RoundImage size="100%" imgUrl={imgUrl} />
        <S.ImageOverlay />
        <S.ImageInputFile type="file" onChange={saveImgFile} ref={imgRef} />
      </S.ImageBox>
      <S.SubTitle>닉네임</S.SubTitle>
      <S.InputText
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={name}
        onChange={({ target }) => setName(target.value)}
        ref={nameRef}
      />
      <S.SubTitle>소개</S.SubTitle>
      <S.TextArea
        placeholder="자기소개를 입력해주세요"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        ref={desRef}
      />
      <S.UpdateButton
        $bgColor="primary"
        $width="100%"
        type="submit"
        $radius="default"
        disabled={isPending}
      >
        수정하기
      </S.UpdateButton>
    </S.InfoContainer>
  );
};

export default UserInfoPage;
