import axios from 'axios'

async function getMovieRatingsAndReview(movieName) {

    const findOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/find',
        params: {
            q: movieName
        },
        headers: {
            'X-RapidAPI-Key': '0c31a675e1mshc0259baef27e2b9p13fbfejsn24a37e39ee69',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const findResponse = await axios.request(findOptions);

        // Find the first result with titleType "movie"
        const movieResult = findResponse.data.results.find(result => result.titleType === "movie");

        if (!movieResult) {
            return (`No movie found with the name: ${movieName}`);
        }

        const movieId = movieResult.id.split("/title/")[1];
        const ratingsOptions = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-ratings',
            params: {
                tconst: movieId
            },
            headers: {
                'X-RapidAPI-Key': '0c31a675e1mshc0259baef27e2b9p13fbfejsn24a37e39ee69',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        };

        const ratingsResponse = await axios.request(ratingsOptions);

        const reviewOptions = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-user-reviews',
            params: {
                tconst: movieId
            },
            headers: {
                'X-RapidAPI-Key': '0c31a675e1mshc0259baef27e2b9p13fbfejsn24a37e39ee69',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        }
        const reviewResponse = await axios.request(reviewOptions)
        const Top3review = reviewResponse.data.reviews.slice(0, 3).map(review => review.reviewText)
        return ({'Title':movieName,'imdbRating': ratingsResponse.data.rating,"Review":Top3review})
    } catch (error) {
        throw new Error(`Error fetching movie details: ${error.message}`);
    }
}

export {getMovieRatingsAndReview} 
