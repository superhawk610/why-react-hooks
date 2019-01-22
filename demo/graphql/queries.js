import { gql } from 'apollo-boost';

export const POKEMONS = gql`
  {
    pokemons(first: 25) {
      id
      name
      number
      image
      types
    }
  }
`;
