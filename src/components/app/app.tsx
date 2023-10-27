import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  suggestionsAmount: number;
}

function App({suggestionsAmount} : AppProps): JSX.Element {
  return (
    <MainPage suggestionsAmount= {suggestionsAmount}/>
  );
}

export default App;
