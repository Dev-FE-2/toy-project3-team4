export const formatISODurationToHHMMSS = (isoDuration: string) => {
  // ISO 8601 패턴 분석
  const regex =
    /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = isoDuration.match(regex);

  if (!matches) {
    throw new Error('유효하지 않은 ISO 8601 기간 형식입니다.');
  }

  // 결과 매핑 (null 값은 0으로 변환)
  const [, , , , hours, minutes, seconds] = matches.map(
    (x) => parseInt(x, 10) || 0,
  );

  // 초 계산
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // HH:MM:SS 포맷 변환
  return formatSecondsToHHMMSS(totalSeconds);
};

// 영상 duration을 HH:MM:SS 형식으로 변환하는 함수
export const formatSecondsToHHMMSS = (totalSeconds: number) => {
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');

  let durationString = `${m}:${s}`;

  const hours = Math.floor(totalSeconds / 3600);

  if (hours > 0) {
    const h = String(hours).padStart(2, '0');
    durationString = `${h}:${durationString}`;
  }

  return durationString;
};

// 시간을 현재 시간으로부터 얼마나 전인지 계산하는 함수
const formatTimeAgo = (date: string | Date) => {
  const now = new Date();
  const pastDate = new Date(date);
  const diff = now.getTime() - pastDate.getTime();

  // 시간 단위 계산 (밀리초 기준)
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // 년 단위
  if (years > 0) {
    return years === 1 ? '1년 전' : `${years}년 전`;
  }

  // 월 단위
  if (months > 0) {
    return months === 1 ? '1개월 전' : `${months}개월 전`;
  }

  // 주 단위
  if (weeks > 0) {
    return weeks === 1 ? '1주 전' : `${weeks}주 전`;
  }

  // 일 단위
  if (days > 0) {
    return days === 1 ? '1일 전' : `${days}일 전`;
  }

  // 시간 단위
  if (hours > 0) {
    return hours === 1 ? '1시간 전' : `${hours}시간 전`;
  }

  // 분 단위
  if (minutes > 0) {
    return minutes === 1 ? '1분 전' : `${minutes}분 전`;
  }

  // 초 단위
  if (seconds > 0) {
    return seconds === 1 ? '1초 전' : `${seconds}초 전`;
  }

  return '방금 전';
};

// 날짜가 유효한지 체크하는 함수
const isValidDate = (date: string | Date) => {
  const timestamp = Date.parse(date.toString());
  return !isNaN(timestamp);
};

// 메인 포맷 함수
export const formatDate = (date: string | Date) => {
  if (!date || !isValidDate(date)) {
    return '날짜 정보 없음';
  }

  return formatTimeAgo(date);
};
