export interface IState {
  episodes: Array<any>
  favourites: Array<any>
}

export interface IAction {
  type: string
  payload: any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: { medium: string, original: string }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
  toggleFavHandler: (state: IState, dispatch: any, episode: IEpisode | any) => IAction
}