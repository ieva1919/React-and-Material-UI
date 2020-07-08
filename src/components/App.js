import React, { Fragment } from 'react';
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'


function App() {
  return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  );
}

export default App;
