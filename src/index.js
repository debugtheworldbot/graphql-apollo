import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
}); // connect ApolloClient instance with the GraphQL API.

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
}); // instantiate ApolloClient
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
