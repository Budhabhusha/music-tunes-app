import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongsCard from '../componets/SongsCard/SongsCard';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying,songs } = useSelector((state:any) => state.songs);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song:any, key:any) => (
          <SongsCard
            key={key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
        />
        ))}
      </div>
    </div>
  );
};

export default Search;
