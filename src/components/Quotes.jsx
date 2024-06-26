import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);
    const [err, seterr] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("https://api.quotable.io/quotes/random")
            .then((response) => {
                setQuotes(response.data);
            })
            .catch((error) => {
                seterr("try agin");
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        fetchData(); 
    }

    return (
        <div style={{
            display:'flex', flexDirection:"column", alignItems:"center"
        }}>
            Quotes
            <div className='container' >
                { quotes.map(quote => (
                    <div key={quote._id}>
                    <h2 >{quote.content && quote.content}</h2>
                    <h2 >{quote.authorSlug && quote.authorSlug}</h2>
                    </div>
                ))}
                <span>{err &&  err}</span>
            </div>
                <button type="submit" onClick={handleSubmit}>Get New Quote</button>
        </div>
    );
}


