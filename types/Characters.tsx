export enum StatusCharacters {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown'
}

export enum GenderCharacters {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  unknown = 'unknown'

}

export interface ICharacters {
  id: number,
  name: string,
  status: StatusCharacters,
  species: string,
  type: string,
  gender: GenderCharacters,
  origin: object,
  location: object,
  image: string,
  episode: Array<string>,
  url: string,
  created: string,
  error?: React.ReactNode
}