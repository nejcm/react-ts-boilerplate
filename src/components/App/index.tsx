import {Global} from '@emotion/core';
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
import globalStyles from './styles';

// error handler
const onError = (error: Error, componentStack: string): void => {
  console.error(`${error.message}: ${componentStack}`);
};

const App: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={(): React.ReactElement => <h2>Error page!</h2>}
      onError={onError}
    >
      <Provider store={store}>
        <Global styles={globalStyles} />
        <BrowserRouter>
          <div className="App">
            <h1>Hello world!</h1>
          </div>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
};
export default App;
