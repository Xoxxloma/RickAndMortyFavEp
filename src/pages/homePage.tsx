import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../store';
import axios from 'axios';
import { IEpisode, IAction } from '../interfaces';

const Cards = React.lazy<any>(() => import('../components/card'))

export const HomePage: React.FC = () => {

  const { state, dispatch } = useContext(StoreContext)

  useEffect(() => {
    if (state.favourites.length !== 0) {
      return
    }
    const url = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

    const fetchDataAction = async () => {
      const response = await axios.get(url)
      return dispatch({
        type: "FETCH_DATA",
        payload: response.data._embedded.episodes
      });

    };
    fetchDataAction()
  }, [dispatch, state.favourites.length]);

  const toggleFavHandler = (episode: IEpisode): IAction => {
    const episodeAddInFav = state.favourites.includes(episode);
    const delFromFav = state.favourites.filter((el: IEpisode) => el.id !== episode.id)

    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    }

    if (episodeAddInFav) {
      dispatchObj = {
        type: "DEL_FAV",
        payload: delFromFav
      }
    }
    return dispatch(dispatchObj)
  }

  const props = {
    episodes: state.episodes,
    toggleFavHandler,
    favourites: state.favourites
  }

  return (
    <div className="row">
      <React.Suspense fallback={<div>loading...</div>}>
        <Cards {...props} />
      </React.Suspense>
    </div>
  )
}