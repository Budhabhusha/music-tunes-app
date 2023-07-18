import { useSelector,useDispatch } from "react-redux";
import Player from "./Player";
import Controls from "./Controls";
import { useState } from "react";
import { playPause } from "../../store/features/songSlice";
const MusicPlayer = () => {
  const { activeSong, currentIndex, isActive, isPlaying } = useSelector((state) => state.songs);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [current, setCurrentTime] = useState(0);
  const dispatch = useDispatch()

  const handleNextSong = () => {};

  const handlePlayPauseClick = () => {
    if(!isActive) return
    if(isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  };

  return (
    <div className="relative sm:px-12 px-8 w-full flex item-center justify-between">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPauseClick}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          onEnded={handleNextSong}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onLoadedData={(e) => setDuration(e.target.duration)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
