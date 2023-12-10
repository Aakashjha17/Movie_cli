import chalk from 'chalk';
import { getMovieRatingsAndReview } from './api.js';
import  express  from 'express';

const app = express();
const port =  3000;
app.get('/:movieName', async (req,res) => {
    try {
        const movieDetails = await getMovieRatingsAndReview(req.params.movieName);
        const { Title, imdbRating, Review } = movieDetails;
        res.send(chalk.green(`\n${Title} (${imdbRating}/10)\n`))
        res.send(chalk.yellow(`Review `), Review)
    } catch (error) {
        res.status(500).send(chalk.red(`Error: ${error.message}`));
    }
});

app.listen(port, () => {
    console.log(chalk.green(`Server is running on http://localhost:${port}`));
 });

