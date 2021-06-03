import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './container/Container';
import { routes } from './routing/routes';

function App() {
  return (
    <Switch>
      <Container>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              name={route.name}
              path={route.path}
              exact={route.exact}
              render={(props) => <route.component {...props} />}
            />
          );
        })}

        <Redirect from='/' to='/boxes' />
      </Container>
    </Switch>
  );
}

export default App;
