import { render, screen } from '@testing-library/react';
import RestaurantCard from './../RestaurantCard';
import React, { useMemo, useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom';

const restaurant = {
  Categoria: "Steakhouse",
  Codice_pk: "5608297",
  Immagine: "https://www.google.com/maps/vt/pb=!1m5!1m4!1i8!2i272!3i189!4…8782!23i1368785!23i47025228!23i4592408!23i1375050!23i4536287",
  Indirizzo: "Stazione Termini, Piazzale Sisto V, Esquilino, Municipio Roma I, Roma, Roma Capitale, Lazio, 00100, Italia",
  Latitudine: 41.9017,
  Longitudine: 12.5029,
  Nome: "Roadhouse Restaurant",
  Ranking: 5,
  Sito: "http://www.roadhouse.it/it/ristorante-roadhouse-roma-termini",
  Telefono: "+390648907344"
}

describe('Restaurant Card', () => { 

  test('renders the image in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard restaurant={restaurant} />
      </Router>
  );
  const img = card.getByTestId("img-locale-rc");
  expect(img).toBeInTheDocument;
  expect(img).toHaveAttribute('src')
  });

  test('renders place name in restaurant card', () => {
    const card = render(
        <Router>
            <RestaurantCard restaurant={restaurant}/>
        </Router>
    );
    const name = card.getByTestId("nome-locale-rc");
    expect(name).toBeInTheDocument;
    expect(name).not.toBeEmpty();
  });

  test('renders the location in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard restaurant={restaurant}/>
      </Router>
  );
  const indirizzo = card.getByTestId("indirizzo-locale-rc");
  expect(indirizzo).toBeInTheDocument;
  expect(indirizzo).not.toBeEmpty();
  });

  test('renders the category in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard restaurant={restaurant}/>
      </Router>
  );
  const categoria = card.getByTestId("categoria-locale-rc");
  expect(categoria).toBeInTheDocument;
  expect(categoria).not.toBeEmpty();
  });

})