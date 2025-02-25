// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(manyArray) {
    const stevenMovies = manyArray.filter(eachMovies => {
        return eachMovies.director === "Steven Spielberg" && eachMovies.genre.includes("Drama")

    })
    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }


    const { totalScore, validScore } = moviesArray.reduce((accumulator, movie) => {
        if (movie.score !== undefined && movie.score !== '') {
            accumulator.totalScore += parseFloat(movie.score);
            accumulator.validScore += 1;
        }
        return accumulator;
    }, { totalScore: 0, validScoreCount: 0 });


    const average = totalScore / moviesArray.length;
    return Math.round(average * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));

    if (dramaMovies.length === 0) {
        return 0;
    }


    const totalRating = dramaMovies.reduce((accumulator, movie) => {
        if (movie.score !== undefined && movie.score !== '') {
            accumulator += parseFloat(movie.score);
        }
        return accumulator;
    }, 0);


    const average = totalRating / dramaMovies.length;
    return Math.round(average * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyOfMovies = moviesArray.slice();


    copyOfMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {

            return a.title.localeCompare(b.title);
        }
    });


    return copyOfMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
