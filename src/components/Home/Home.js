
import MovieList from '../MovieList/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {


    const [data, setData] = useState([]);



    const getAllMovie = async () => {

        return await axios.get(`https://ghaenm-movie.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovie();
            setData(data);
        })();
    }, []);

    return (
        <>
            <MovieList data={data} />
        </>
    );
}



export default Home;



