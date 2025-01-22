import { useContext } from 'react';
import { PlaylistContext } from '@/context';

const usePlaylistContext = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylistContext must be used within PlaylistProvider');
  }
  return context;
};

export default usePlaylistContext;
