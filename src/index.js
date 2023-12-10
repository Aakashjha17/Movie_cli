import chalk from 'chalk';
import { getMovieRatingsAndReview } from './api.js';
import { displayMovieDetails, displayMovieReviews }from './cli.js';

const fetchMovieDetails = async (movieName) => {
    try {
        const movieDetails = await getMovieRatingsAndReview(movieName);

        displayMovieDetails(movieDetails);
        displayMovieReviews(movieDetails);
    } catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
    }
};
const movieName = process.argv[2];
if(movieName){
    fetchMovieDetails(movieName);
}


