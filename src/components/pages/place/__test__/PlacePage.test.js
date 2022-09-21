import { render, screen } from '@testing-library/react';
import PlacePage from './../PlacePage';
import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router} from 'react-router-dom';

describe('Place Page', () => {

  test('renders the image in place page', () => {
    const placepage = render(
      <Router>
          <PlacePage/>
      </Router>
    );
  const img = placepage.getByTestId("img-locale-pp");
  expect(img).toBeInTheDocument;
  expect(img).toHaveAttribute('src')
  });

  test('renders place name in place page', () => {
    const placepage = render(
      <Router>
          <PlacePage/>
      </Router>
  );
  const name = placepage.getByTestId("nome-locale-pp");
  expect(name).toBeInTheDocument;
  expect(name).not.toBeEmpty();
  });

  test('renders the location in place page', () => {
    const placepage = render(
      <Router>
          <PlacePage/>
      </Router>
  );
  const indirizzo = placepage.getByTestId("indirizzo-locale-pp");
  expect(indirizzo).toBeInTheDocument;
  expect(indirizzo).not.toBeEmpty();
  });

  test('renders the phone number in place page', () => {
    const placepage = render(
      <Router>
          <PlacePage/>
      </Router>
  );
  const tel = placepage.getByTestId("tel-locale-pp");
  expect(tel).toBeInTheDocument;
  expect(tel).not.toBeEmpty();
  });

  test('renders the web site in place page', () => {
    const placepage = render(
      <Router>
          <PlacePage/>
      </Router>
  );
  const sito = placepage.getByTestId("sito-locale-pp");
  expect(sito).toBeInTheDocument;
  expect(sito).not.toBeEmpty();
  expect(sito).toHaveAttribute('href')
  });



})