import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import './index.css';
import App from "./views/app";
import configureStore from "./state/store";
import {ThemeProvider} from 'styled-components';

const reduxStore = configureStore();

const theme = {
  colors: {
    primary: '#334858',
    base: '#f1f1f1'
  }
};


const RootHtml = () => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={reduxStore}>
      <Router>
        <App/>
      </Router>
    </ReduxProvider>
  </ThemeProvider>
);

ReactDOM.render(<RootHtml/>, document.getElementById('root'));
