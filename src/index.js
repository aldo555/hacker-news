import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'

import Nav from './components/Navbar'
import Loading from './components/Loading'
import NoMatch from './components/NoMatch'

const Stories = React.lazy(() => import('./components/Stories'))
const User = React.lazy(() => import('./components/User'))
const Post = React.lazy(() => import('./components/Post'))

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <ThemeProvider value={this.state}>
            <div className={`${this.state.theme}`}>
              <div className="min-h-screen dark:bg-gray-800">
                <div className="grain fixed top-0 left-0 w-full h-full pointer-events-none"></div>
                <Nav />
                <main className="max-w-7xl mx-auto font-sans xl:border-l-4 xl:border-r-4 border-black dark:border-gray-100 dark:bg-gray-800">
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
              </div>
            </div>
          </ThemeProvider>
        </Router>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
