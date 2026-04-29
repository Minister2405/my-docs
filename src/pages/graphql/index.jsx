import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

export default function GraphQLRedirect() {
  useEffect(() => {
    window.location.href = '/graphql/index.html';
  }, []);

  return (
    <Layout title="GraphQL API">
      <main>
        <p>Redirecting to GraphQL API documentation...</p>
      </main>
    </Layout>
  );
}
