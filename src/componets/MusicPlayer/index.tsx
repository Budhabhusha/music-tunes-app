import { useSelector,useDispatch } from "react-redux";
import Player from "./Player";
import Controls from "./Controls";
import {useState } from "react";
import Volume from "./Volume";
import { setActiveSong,playPause } from "../../store/features/songSlice";
import Track from "./Track";
import SeekBar from "./SeekBar";

interface MusicPlayerProps {
  handlePrevSongClick?: () => void;
  handleNextSongClick?: () => void;
  handlePlayPauseClick?: () => void;
  activeSong?:any
  isActive?: boolean;
  isPlaying?:boolean
}
const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {
  const {handlePrevSongClick,handleNextSongClick,handlePlayPauseClick,activeSong,isActive,isPlaying} = props
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [seekTime, setSeekTime] = useState(0);
  const [repeat,setRepeat] = useState(false)
  const [shuffle,setShuffle] = useState(false)
  const [songcurrentTime, setSongcurrentTime] = useState(0);

  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong}/>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          activeSong={activeSong}
          repeat={repeat}
          shuffle={shuffle}
          setRepeat={setRepeat}
          setShuffle={setShuffle}
          handlePlayPause={handlePlayPauseClick}
          handleNextSong={handleNextSongClick}
          handlePrevSong={handlePrevSongClick}
        />
        <SeekBar 
          value={songcurrentTime} 
          min="0" 
          max={duration}
          onInput={(e)=>setSeekTime(e.target.value)}
          setSeekTime={setSeekTime}
          songcurrentTime={songcurrentTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          seekTime={seekTime}
          isPlaying={isPlaying}
          repeat={repeat}
          onEnded={handleNextSongClick}
          onTimeUpdate={(e) => setSongcurrentTime(e.target.currentTime)}
          onLoadedData={(e) => setDuration(e.target.duration)}
        />
      </div>
      <Volume value={volume} min="0" max="1" onChange={(e)=>setVolume(e.target.value)} setVolume={setVolume}/>
    </div>
  );
};

export default MusicPlayer;
