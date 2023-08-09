import React, { useEffect } from 'react'
import { useRef } from 'react';
interface PlayerProps {
  activeSong?:any;
  volume?:any;
  isPlaying?:boolean;
  seekTime?:any;
  repeat?:any
  onEnded?:()=>void;
  onTimeUpdate?:(e:any)=>void
  onLoadedData?:(e:any)=>void
}
const Player: React.FC <PlayerProps> = (props) => {
  const {activeSong, volume, isPlaying,onEnded,onTimeUpdate,onLoadedData,seekTime,repeat} = props
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

  useEffect(()=>{
    if(songRef.current) {
      songRef.current.currentTime = seekTime;
    }
  },[seekTime])

  return (
    <audio
      src={activeSong?.previewUrl}
      ref={songRef}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player