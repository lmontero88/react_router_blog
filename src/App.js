import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>
            Mi blog personal
         </h1>
          <nav>
            <Link to="/">Inicio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/acerca_mi">Acerca de </Link>
          </nav>
        </header>
        <main>
          <Switch> 
            <Route path='/' exact={true}>
              <div>
                <h2>
                  Pagina de Inicio
          </h2>
                <p> Esta es la pagina principal</p>
              </div>
            </Route>
            <Route path='/blog'>
              <div>
                <h2>
                  BLog
              </h2>
                <ul>
                  <li>Articulo 1 </li>
                  <li>Articulo 2</li>
                  <li>Articulo 3</li>
                </ul>
              </div>
            </Route>
            <Route path='/acerca_mi'>
              <div>
                <h2>
                  Acerca de
          </h2>
                <p> Este soy yo</p>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>


  );
}

export default App;
