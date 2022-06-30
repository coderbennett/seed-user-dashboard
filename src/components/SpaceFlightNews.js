import React, { useState } from 'react';

function SpaceFlightNews() {

    const [articleState, setArticleState] = useState([]);

    fetch("https://api.spaceflightnewsapi.net/v3/articles")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setArticleState([...data]);
        });


    return (
        <>
            <div className="flex flex-wrap justify-center">
                {articleState && articleState.map((article, i) => (
                <div key={i} className="card w-96 bg-base-100 shadow-xl mx-auto my-6">
                    <figure><img src={article.imageUrl} alt={article.title} /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{article.title}</h2>
                      <p>{article.summary}</p>
                      <div className="card-actions justify-end">
                        <a href={article.url} target="_blank" rel="noreferrer"><button className="btn btn-primary">View Article</button></a>
                      </div>
                    </div>
                </div>
                 ))}
            </div>
        </>
    )
}

export default SpaceFlightNews;