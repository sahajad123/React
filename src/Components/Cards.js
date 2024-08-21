import React from 'react'
import { Link } from 'react-router-dom'


const Cards = ({datas}) => {
  return (
    <div className='cards-data'>
            {
                datas.map((news, index) => {
                    return <div className="card" style={{ width: "18rem" }} key={index}>
                        <img src={news.urlToImage} className="card-img-top" alt="news" />
                        <div className="card-body">
                            <h5 className="card-title">{news.title}</h5>
                            <p className="card-text">{news.description}</p>
                            <Link to="About" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                })
            }
            </div>
  )
}

export default Cards
