import { useState } from 'react';
import * as S from './InterestPage.styles';
import { PageTitle } from '@/components';
import { RiPlayCircleLine } from 'react-icons/ri';
import { INTERESTS } from '@/constant';

const InterestPage = () => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);

  const toggleInterest = (id: number) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleSave = () => {
    if (selectedInterests.length === 0) {
      alert('관심사는 1개 이상 선택해주세요.');
      return;
    }

    console.log('Selected interests:', selectedInterests);
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
