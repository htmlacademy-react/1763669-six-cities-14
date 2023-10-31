export const SUGGESTIONS_AMOUNT = 312;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  FavouritesEmpty = '/favourites-empty',
  Offer = '/offer/',
  OfferNotLogged = '/offer-not-logged',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
