import { useEffect } from 'react';

export default function GraphQLPage() {
  useEffect(() => {
    // Prevent redirect loop
    if (!window.location.pathname.endsWith('index.html')) {
      window.location.replace('/graphql/index.html');
    }
  }, []);

  return <p>Redirecting to GraphQL docs...</p>;
}
