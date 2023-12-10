import chalk from 'chalk';

const displayMovieDetails = (movie) => {
    const { Title, imdbRating } = movie;

    console.log(chalk.green(`\n${Title} (${imdbRating}/10)\n`));
};

const displayMovieReviews = (movie) => {
    const { Review } = movie
    console.log(chalk.yellow(`Review `), Review);
}

export { displayMovieDetails, displayMovieReviews }