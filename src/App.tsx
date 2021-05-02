import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';

import { Layout } from 'components/Layout';
import { Pages } from 'pages/Pages';

function App() {
  return (
    <SWRConfig
      value={{
        suspense: true,
        dedupingInterval: 0,
        revalidateOnMount: false,
      }}
    >
      <Router>
        <Layout>
          <Pages />
        </Layout>
      </Router>
    </SWRConfig>
  );
}

export default App;
