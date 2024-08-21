import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Cards from './Cards'
import Axios from 'axios'
import Loading from './Loading'

const Home = () => {
    const [inputValue, setInputValue] = useState("football");
    const [searchTerm, setSearchTerm] = useState("football");
    const [datas, setData] = useState(null)
    const [Loading, setLoading] = useState(true);

    const handleSearch = () =>{
        setSearchTerm(inputValue)
    }
    // useEffect(() => {
    //     fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=a823b5b83f6440359df832060f490980`)
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error("Error fetching data")
    //         }
    //         return response.json()
    //     }).then((data) => {
    //         console.log(data.articles)
    //         setData(data.articles);
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [searchTerm])

    useEffect(()=>{
        Axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=a823b5b83f6440359df832060f490980`).then((response)=>{
            console.log(response.data.articles)
            setData(response.data.articles)
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
            setLoading(false);
        })
    },[searchTerm])

    if(Loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={handleSearch}>Get News</button>
            {datas && <Cards datas={datas}/>}
        </div>
    )
}

export default Home
