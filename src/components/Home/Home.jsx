import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => { 
    const tshiets = useLoaderData();
    return (
        <div>
            <h1>Home :{ tshiets.length}</h1>
        </div>
    );
};

export default Home;