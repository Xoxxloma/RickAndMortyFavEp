import React from 'react';
import { IEpisode } from '../interfaces';

const cutter = (str: string) => {
  return str.slice(3, str.length - 4)
}

const Cards = (props:any) => {
  const {episodes, favourites, toggleFavHandler } = props

  return (
    episodes.map((episode: IEpisode) => (
      <div className="col s10 m6 l6 xl4" key={episode.id}>
        <div className="card">
          <div className="card-image">
            <img src={episode.image.medium} alt="rick" />
            <button onClick={() => toggleFavHandler(episode)} className="halfway-fab btn-floating pink pulse">
              {favourites.includes(episode) ? <i className="material-icons">-</i> : <i className="material-icons">+</i>}
            </button>
          </div>
          <div className="card-content">
            <span className="card-title">Season {episode.season} episode {episode.number} {episode.name}</span>
            <p>{cutter(episode.summary)}</p>
          </div>
        </div>
      </div>
    ))
  )
}

export default Cards;