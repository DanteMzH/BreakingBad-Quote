import { useEffect, useState } from "react";
import React from 'react'
import { breakBadApi } from "../api/breakBadApi";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import '../assets/css/styles.css'

const arrayImages = [
    'src/assets/img/jwpro.png',
    'src/assets/img/w.png',
    'src/assets/img/j.png',
    'src/assets/img/jw.png',
]

export const MainPage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [quote, setQuote] = useState({ author: '', quoteData: '' });

    useEffect(() => {
        const getQuote = async () => {
            const { data } = await breakBadApi.get();
            const quoteResponse = data[0]; 
            setQuote({ quoteData: quoteResponse.quote, author: quoteResponse.author });
        }
        getQuote();
    }, [imageIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % arrayImages.length);
        }, 2000);

        return () => clearTimeout(timer);
    }, [imageIndex]);

    return (
        <section className="relative max-w-screen-xl mx-auto py-4 px-4 md:px-8 mt-0">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="grid-row relative z-10 gap-5 items-center lg:flex">
           

                
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <div className="text-indigo-600 h-15 text-4xl">{quote.quoteData}</div>
                <SwitchTransition>
                <CSSTransition classNames='fade' key={quote.quoteData}>
                    <p className="text-gray-500 leading-relaxed mt-3 text-lg">{quote.author}</p>
                    </CSSTransition>
                </SwitchTransition>
                </div>

                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto ml-10">
                <SwitchTransition>
                    <CSSTransition classNames='fade' key={arrayImages[imageIndex]}>

                    <img src={arrayImages[imageIndex]} alt={`Image ${imageIndex}`}  />
                
                    </CSSTransition>
                </SwitchTransition>

                </div>
            </div>
        </section>
    );
}
