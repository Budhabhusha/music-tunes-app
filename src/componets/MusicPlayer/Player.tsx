import React, { useEffect } from 'react'
import { useRef } from 'react';
interface PlayerProps {
  activeSong:any;
  volume?:any;
  isPlaying?:boolean;
  onEnded?:()=>void;
  onTimeUpdate?:()=>void
  onLoadedData?:()=>void
}
const Player: React.FC <PlayerProps> = (props) => {
  const {activeSong, volume, isPlaying,onEnded,onTimeUpdate,onLoadedData} = props
  const songRef = useRef<HTMLAudioElement | null>(null)
  
  if(songRef.current) {
    if(isPlaying) {
      songRef.current.play();
    } else {
      songRef.current.pause();
    }
  }
  
  useEffect(()=>{
    if(songRef.current) {
      songRef.current.volume = volume;
    } 
  },[volume])

  return (
    <audio
      src={activeSong?.songUrl}
      ref={songRef}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player