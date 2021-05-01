import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Pages } from 'pages/Pages';

function App() {
  return (
    <SWRConfig
      value={{
        suspense: true,
        dedupingInterval: 0,
      }}
    >
      <Router>
        <Pages />
      </Router>
    </SWRConfig>
  );
}

export default App;
