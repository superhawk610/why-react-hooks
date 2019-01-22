import React from 'react';

import Card from '../presentational/Card';
import Spinner from '../presentational/Spinner';

import client from '../configureApollo';
import { ApolloProvider, useQuery } from 'react-apollo-hooks';
import { POKEMONS } from '../graphql/queries';

function Sandbox() {
  const {
    data: { pokemons },
    error,
    loading,
  } = useQuery(POKEMONS, { suspend: false });

  return (
    <Card>
      {loading ? (
        <Spinner />
      ) : error ? (
        error.toString()
      ) : (
        pokemons.map(pokemon => (
          <div key={pokemon.id}>
            {pokemon.number} - {pokemon.name}
          </div>
        ))
      )}
    </Card>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Sandbox</h1>
      <Sandbox />
    </ApolloProvider>
  );
}

export default App;
