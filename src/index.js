import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { ApolloProvider } from "react-apollo"
import ApolloClient, { gql } from "apollo-boost"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import reducer from './reducers'
import './assets/css/index.css'

const middleware = [thunk]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

const client = new ApolloClient({
    uri: "http://localhost:3200/"
});

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root'));

//serviceWorker.register();

