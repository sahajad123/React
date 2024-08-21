import React from 'react'
import Pankaj from '../assets/Error.jpg'
import { Link } from 'react-router-dom'
import './style.css'

const Cards = ({ data }) => {
    return (
        <div className='recepie-card'>
            {data?.extendedIngredients.map((ingredient) => {
                return <div className="card" style={{ width: "18rem" }} key={ingredient.id}>
                    <img src={data.image} className="card-img-top" alt="Pankaj" />
                    <div className="card-body">
                        <h5 className="card-title">{ingredient.aisle}</h5>
                        <p className="card-text">{ingredient.name}</p>
                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cards
