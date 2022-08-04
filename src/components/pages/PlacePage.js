import React from "react";
import "../../style/Placepage.css";
import { GoLocation } from 'react-icons/go';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { useLocation } from "react-router-dom";

function PlacePage() {
    const arrayRest= useLocation();
    const data= arrayRest.state.restaurant;
    return (
            <div className="container mb-5 py-5 ">
                <h2 className="mb-3 text-center">{data.Nome}</h2>
                    <div className="container-img m-auto">
                        <img src={data.Immagine} className="img-restaurant d-block w-100 h-100" alt="..."/>
                    </div>
                        

                    <div className="info-ristorante">
                        <p className="indirizzo"><GoLocation className="font-nav mr" size="20"/>{data.Indirizzo}</p>
                        <p className="tel"><BsTelephoneFill className="font-nav mr" size="20"/>{data.Telefono}</p>
                        <a href={data.Sito} className="tel" target="_blank"><TbWorld className="font-nav mr" size="20"/>{data.Sito}</a>
                        <p className="my-5 text-justify description">Descrizione Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                        aliquam voluptatem veniam, est atque cumque eum delectus sint!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                        molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                        aliquam voluptatem veniam, est atque cumque eum delectus sint</p>
                    </div>  

                <div className="pb-4 review-container">
                    <h3 className="text-center">Punteggio e recensioni</h3>
                    <h5 className="review-count text-center">{data.Ranking}/10</h5>
                    <div className="comment mt-4 text-justify bg-light">
                        <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                        <h4>Jhon Doe</h4>
                        <span>- 20 October, 2018</span>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>
                    <div className="text-justify comment mt-4 bg-light">
                        <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                        <h4>Rob Simpson</h4>
                        <span>- 20 October, 2018</span>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>
                    <div className="comment mt-4 text-justify bg-light">
                        <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                        <h4>Jhon Doe</h4>
                        <span>- 20 October, 2018</span>
                        <br/>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>
                    <div className="comment mt-4 text-justify bg-light">
                        <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width="40" height="40"/>
                        <h4>Rob Simpson</h4>
                        <span>- 20 October, 2018</span>
                        <br/>
                        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                    </div>
                </div>   
            </div>
    );
}

export default PlacePage;



/*
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={data.Immagine} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                */