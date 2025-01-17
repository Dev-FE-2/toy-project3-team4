import { PlaylistProvider } from '@/provider';
import { PlayListForm } from '@/components';
import * as S from './UpsertPlaylistPage.styles';

const UpsertPlaylistPage = () => {
  return (
    <S.Container>
      <PlaylistProvider>
        <PlayListForm />
      </PlaylistProvider>
    </S.Container>
  );
};

export default UpsertPlaylistPage;
