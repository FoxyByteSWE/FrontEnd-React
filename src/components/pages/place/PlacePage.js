import React, { useEffect } from "react";
import "../../../style/Placepage.css";
import { GoLocation } from 'react-icons/go';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbBrandInstagram, TbWorld } from 'react-icons/tb';
import { useLocation } from "react-router-dom";

function PlacePage() {
    const arrayRest= useLocation();
    const data= arrayRest.state.restaurant;
    return (
            <div className="container mb-5 py-5">
                <h2 className="mb-3 text-center" data-testid="nome-locale-pp">{data.Nome}</h2>
                    <div className="container-img m-auto">
                        <img data-testid="img-locale-pp" src={data.Immagine} crossOrigin='*' className="img-restaurant d-block w-100 h-100" alt="..."/>
                    </div>
                        

                    <div className="info-ristorante">
                        <p className="indirizzo" data-testid="indirizzo-locale-pp"><GoLocation className="font-nav mr" size="20"/>{data.Indirizzo}</p>
                        <p className="tel" data-testid="tel-locale-pp"><BsTelephoneFill className="font-nav mr" size="20"/>{data.Telefono}</p>
                        <a href={data.Sito} className="tel" data-testid="sito-locale-pp" target="_blank" rel="noopener noreferrer"><TbWorld className="font-nav mr" size="20"/>{data.Sito}</a>
                        
                    </div>  

                <div className="pb-4 review-container">
                    <h3 className="text-center">Punteggio e recensioni</h3>
                    <h5 className="review-count text-center" data-testid="ranking-locale-pp">{data.Ranking}/10</h5>
                    {
                        data.Commento_1_testo !== null &&
                        <div className="text-justify comment mt-4 bg-light">
                            <h4>{data.Commento_1_testo}</h4>
                            <br/>
                            <p>Clicca sotto per andare al commento: </p>
                            <a href={data.Commento_1_URL} className="tel" target="_blank" rel="noopener noreferrer">Link del commento <TbBrandInstagram className="font-nav mr" size="20"/></a>
                        </div>   
                    }
                    {
                        data.Commento_2_testo !== null &&
                        <div className="text-justify comment mt-4 bg-light">
                        <h4>{data.Commento_2_testo}</h4>
                        <br/>
                        <p>Clicca sotto per andare al commento: </p>
                        <a href={data.Commento_2_URL} className="tel" target="_blank" rel="noopener noreferrer">Link del commento <TbBrandInstagram className="font-nav mr" size="20"/></a>
                        </div>
                    }
                </div>   
            </div>
    );
}

export default PlacePage;