// App.js
import "./App.css";
import { Suspense, lazy } from 'react';
import Loading from "./components/Loading";

const Header = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./components/Header')), 500);
}));

const Footer = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./components/Footer')), 510);
}));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
