import React from 'react';

export default function AsyncApiPage() {
  return (
    <iframe
      src="/async-api/index.html"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
      }}
      title="Async API Docs"
    />
  );
}