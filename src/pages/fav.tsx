import React, { useContext } from 'react';
import { StoreContext } from '../store';
import { IEpisode } from '../interfaces';

export const FavPage: React.FC = () => {
  const { state } = useContext(StoreContext)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Season/Episode</th>
            <th>Name</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {state.favourites.map((ep: IEpisode, idx: number) => (
            <tr key={ep.id}>
              <td>{idx + 1}</td>
              <td>{ep.season} / {ep.number}</td>
              <td>{ep.name}</td>
              <td>{ep.summary.slice(3, 100)}...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}