import { render, screen } from '@testing-library/react';
import RestaurantCard from './../RestaurantCard';
import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

let restaurant = {
    Immagine: "Immagine",
    Nome: "Nome",
    Categoria: "Categoria",
    Indirizzo: "Indirizzo"
}

describe('Restaurant Card', () => { 

  test('renders the image in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard {...restaurant} />
      </Router>
  );
  const img = card.getByTestId("img-locale-rc");
  expect(img).toBeInTheDocument;
  expect(img).toHaveAttribute('src')
  });

  test('renders place name in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard/>
      </Router>
  );
  const name = card.getByTestId("nome-locale-rc");
  expect(name).toBeInTheDocument;
  expect(name).not.toBeEmpty();
  });

  test('renders the location in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard/>
      </Router>
  );
  const indirizzo = card.getByTestId("indirizzo-locale-rc");
  expect(indirizzo).toBeInTheDocument;
  expect(indirizzo).not.toBeEmpty();
  });

  test('renders the category in restaurant card', () => {
    const card = render(
      <Router>
          <RestaurantCard/>
      </Router>
  );
  const categoria = card.getByTestId("categoria-locale-rc");
  expect(categoria).toBeInTheDocument;
  expect(categoria).not.toBeEmpty();
  });

})