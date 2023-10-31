import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import Favourites from '../../pages/favourites/favourites';
import Offer from '../../pages/offer/offer';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  suggestionsAmount: number;
}

function App({suggestionsAmount} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MainPage suggestionsAmount= {suggestionsAmount} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favourites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Offer />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
