import React from 'react'
import { RiCloseLine } from 'react-icons/ri'
import {useSelector } from 'react-redux';
import PlayPause from './PlayPause';

interface ModalProps {
    showModal?: boolean;
    setShowModal?: any
    onClose?: () => void
    activeSong?:any;
    song?: any
    onPlayClick?:(e:any)=> void;
    onPauseClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({showModal, onClose, song,onPlayClick,onPauseClick }) => {
    const {isPlaying, isActive,activeSong} = useSelector((state:any)=>state.songs) 
    let activeModalSong = isActive && activeSong?.trackId === song?.trackId ? song : activeSong
    
    return (
        <>
            <div className={`absolute top-0 h-screen w-full bg-gradient-to-tl backdrop-blur-lg z-10 p-6 smooth-transition ${showModal ? 'right-0' : '-right-full'}`}>
                <div className="absolute block top-16 right-6">
                    {
                        showModal && <RiCloseLine onClick={onClose} className="w-6 h-6 text-white mr-2 cursor-pointer" />
                    }
                </div>
                <div className="mt-8 p-8 rounded-md shadow-md z-50 border-2 border-cyan-800 w-full bg-black bg-opacity-60">
                    <div className="flex sm:flex-row ... justify-center items-center">
                        <div className="w-2/5 p-4">
                            <img alt="song_image" src={activeModalSong?.artworkUrl100.replace('100x100', '500x500')} className="w-300 h-300 rounded-lg" />
                        </div>
                        <div className="w-3/5 p-4 text-white ">
                        <p> Song: <span className="text-xl font-semibold mb-4 text-white truncate">{activeModalSong?.trackName}</span></p>
                        <p>Artist Name: {activeModalSong?.artistName}</p>
                        <p>Description: {activeModalSong?.shortDescription}</p>
                        <p>Collection Name: {activeModalSong?.collectionName}</p>
                        <p>Primary Genre Name: {activeModalSong?.primaryGenreName}</p>
                        <p>Country: {activeModalSong?.country}</p>
                        <div className='pt-5'>
                        <PlayPause
                            handlePause={onPauseClick}
                            handlePlay={onPlayClick}
                            activeSong={activeSong}
                            isPlaying={isPlaying}
                            id={activeModalSong?.trackId}
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal