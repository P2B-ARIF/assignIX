import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Footer from '../layout/Footer/Footer';
import SingleQuiz from '../../SingleQuiz/SingleQuiz';


const Quiz = () => {
    const { data } = useLoaderData()
    const { id, name, questions } = data;

    return (
        <>
            <div className=''>
               
                <h2 className='text-2xl font-bold mb-5'  >Quiz of {name}</h2>
                {
                    questions.map(question => <SingleQuiz
                        key={id}
                        quiz={question}
                    />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Quiz;