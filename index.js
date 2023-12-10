import { getMovieRatingsAndReview } from './api.js';
import  express  from 'express';

const app = express();
const port =  3000;
app.get('/:movieName', async (req,res) => {
    try {
        const movieDetails = await getMovieRatingsAndReview(req.params.movieName);
        const { Title, imdbRating, Review } = movieDetails;
        const responseString = `Title: ${Title}\nRating: ${imdbRating}\nReview:\n ${Review}`;
        res.send(responseString);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`running `);
 });

