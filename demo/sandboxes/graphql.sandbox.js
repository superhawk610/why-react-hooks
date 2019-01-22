import React from 'react';

import Card from '../presentational/Card';
import Spinner from '../presentational/Spinner';

import client from '../configureApollo';
import { ApolloProvider, Query } from 'react-apollo';
import { POKEMONS } from '../graphql/queries';

function Sandbox() {
  return (
    <Card>
      <Query query={POKEMONS}>
        {({ loading, data: { pokemons }, error }) =>
          loading ? (
            <Spinner />
          ) : error ? (
            error.toString()
          ) : (
            pokemons.map(pokemon => (
              <div key={pokemon.id}>
                {pokemon.number} - {pokemon.name}
              </div>
            ))
          )
        }
      </Query>
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

export default Sandbox;
