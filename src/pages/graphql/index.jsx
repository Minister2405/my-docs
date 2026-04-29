import React, {useEffect} from 'react';

export default function GraphQLPage() {
  useEffect(() => {
    window.location.href = '/graphql/index.html';
  }, []);

  return <p>Redirecting to GraphQL docs...</p>;
}
