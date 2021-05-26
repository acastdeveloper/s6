import React from 'react';
import Biblio from './db/Biblio.json'

export default () => {

const biblio = Biblio.map(e=>{
    return (
        <>
        <h4>{e.title}</h4>
        <p>{e.author}</p>
        </>
    )
});

    return(
        <>
            {biblio}
        </>
    );
}
