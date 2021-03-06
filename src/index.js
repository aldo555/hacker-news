import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Navbar'
import Loading from './components/Loading'
import NoMatch from './components/NoMatch'

const Stories = React.lazy(() => import('./components/Stories'))
const User = React.lazy(() => import('./components/User'))
const Post = React.lazy(() => import('./components/Post'))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="grain fixed top-0 left-0 w-full h-full pointer-events-none"></div>
      <Nav />
      <main className="max-w-7xl mx-auto font-sans xl:border-l-4 xl:border-r-4 border-black">
        <React.Suspense fallback={<Loading text="Loading" />}>
          <Switch>
            <Route exact path="/" render={() => <Stories key="top" type="top" />} />
            <Route path="/new" render={() => <Stories key="new" type="new" />} />
            <Route path="/user" component={User} />
            <Route path="/post" component={Post} />
            <Route component={NoMatch} />
          </Switch>
        </React.Suspense>
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
