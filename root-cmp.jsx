import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";

import { AppHeader } from "./cmps/app-header.jsx";
import { UserMsg } from "./cmps/user-msg.jsx";

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function App() {
  return (
    <Router>
      <main className="book-app">
      <AppHeader />
        <Switch>
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home}></Route>
        </Switch>
        <UserMsg/>
      </main>
    </Router>
  );
}
