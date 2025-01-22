import { useState, useCallback } from 'react';

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState('');

  const copyToClipboard = useCallback((text: string) => {
    if (!text) {
      setError('복사할 텍스트가 제공되지 않았습니다.');
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true); // 성공 시 상태 업데이트
        setError('');
        setTimeout(() => setIsCopied(false), 2000); // 2초 후 복사 상태 초기화
        alert('클립보드에 복사되었습니다.');
      })
      .catch((err) => {
        setError('복사에 실패했습니다. 다시 시도해주세요.');
        console.error('Clipboard error:', err);
      });
  }, []);

  return { isCopied, error, copyToClipboard };
}

export default useCopyToClipboard;
