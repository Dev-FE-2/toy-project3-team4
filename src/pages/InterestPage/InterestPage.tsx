import { RiPlayCircleLine } from 'react-icons/ri';
import { useUser, useUserActions } from '@/store';
import { useInterestSelection } from '@/hooks';
import { updateUser } from '@/api';
import { INTERESTS } from '@/constant';
import { PageTitle } from '@/components';
import type { IUser } from '@/types';
import * as S from './InterestPage.styles';

const InterestPage = () => {
  const { userSn, interests } = useUser() as IUser;
  const { setUser } = useUserActions();
  const { selectedInterests, toggleInterest, validateInterests } =
    useInterestSelection(interests);

  // 관심사 저장 핸들러, 추후 커스텀훅으로 리팩토링 예정
  const handleSave = async () => {
    try {
      // 추후 tanstack-query 사용 시 isPending 상태로 중복 요청 방지 필요
      if (!validateInterests()) return;

      const interestParam = { interests: selectedInterests };
      await updateUser(userSn, interestParam);
      setUser(interestParam);
      alert('관심사가 저장되었습니다.');
    } catch (error) {
      console.error('관심사 업데이트 오류: ', error);
      alert('관심사 저장 중 문제가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <PageTitle>관심사 선택</PageTitle>
        <p>관심있는 주제를 선택해주세요</p>
        <p>선택하신 관심사를 바탕으로 맞춤 플레이리스트를 제공해드려요.</p>
      </S.Header>

      <S.Section>
        <S.SectionHeader>
          <RiPlayCircleLine size="2rem" />
          <h2>나의 관심사</h2>
        </S.SectionHeader>

        <S.ButtonGrid>
          {INTERESTS.map((interest) => (
            <S.InterestButton
              key={interest.id}
              $bgColor="white"
              $size="sm"
              $radius="default"
              $borderColor="primary"
              selected={selectedInterests.includes(interest.id)}
              onClick={() => toggleInterest(interest.id)}
            >
              {interest.name}
            </S.InterestButton>
          ))}
        </S.ButtonGrid>

        <S.SectionFooter>
          <p>관심사는 언제든지 변경할 수 있어요.</p>
        </S.SectionFooter>
      </S.Section>

      <S.Footer>
        <S.SaveButton
          $bgColor="primary"
          $size="md"
          $width="100%"
          $radius="default"
          onClick={handleSave}
        >
          관심사 저장하기
        </S.SaveButton>
      </S.Footer>
    </S.Container>
  );
};

export default InterestPage;
