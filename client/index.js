import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={browserHistory}>
                <Route path='/' component={App} >
                    
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
