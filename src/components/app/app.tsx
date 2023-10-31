import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../const';
import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import Favourites from '../../pages/favourites/favourites';
import FavouritesEmpty from '../../pages/favourites-empty/favourites-empty';
import Offer from '../../pages/offer/offer';
import OfferNotLogged from '../../pages/offer-not-logged/offer-not-logged';
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
          element={<MainPage suggestionsAmount= {suggestionsAmount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favourites}
          element={<Favourites />}
        />
        <Route
          path={AppRoute.FavouritesEmpty}
          element={<FavouritesEmpty />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoute.OfferNotLogged}
          element={<OfferNotLogged />}
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
