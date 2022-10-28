import { string } from "prop-types";
import { MODBMovieType, MODBMovieVideoType, MODBMoviewImageType, OmbdbMovieType } from "./types";

const videoAcc: { name: string, videoIframe: string} [] = []; 

interface ProcessedImagesType {
  poster: {
    filePath: string,
    width: number,
  }[],
  backdrops: {
    filePath: string,
    width: number,
  }[],
}

const processImages = (images: MODBMoviewImageType) => {
  const processedImages: ProcessedImagesType = {
    poster: [],
    backdrops: [],
  };
  if (images) {
    if (images.backdrops?.length) {
      images.backdrops.forEach(({ file_path: filePath, width}) => {
        processedImages.backdrops.push({
          filePath: `http://image.tmdb.org/t/p/w342/${filePath}`,
          width
        });
      });
    }
    if (images.posters?.length) {
      images.posters.forEach(({ file_path: filePath, width}) => {
        processedImages.poster.push({
          filePath: `http://image.tmdb.org/t/p/w342/${filePath}`,
          width
        });
      });
    }
  }
  return processedImages;
}


export const transformData = (
  movie: MODBMovieType, 
  videos: MODBMovieVideoType, 
  images: MODBMoviewImageType, 
  secondaryMovie: OmbdbMovieType
) => ({
  posterImage: `http://image.tmdb.org/t/p/w342/${movie.backdrop_path}`,
  imdbId: movie.imdb_id,
  language: movie.original_language,
  title: movie.original_title,
  posterSecondaryImage: `http://image.tmdb.org/t/p/w342/${movie.poster_path}`,
  plot: movie.overview,
  status: movie.status,
  year: secondaryMovie.Year,
  director: secondaryMovie.Director,
  actors: secondaryMovie.Actors,
  ratingsDesktop: (secondaryMovie.Ratings?.[0]) ? secondaryMovie.Ratings.filter(
    ( { Source }) => Source === 'Rotten Tomatoes'
  ) : [],
  ratings: (secondaryMovie.Ratings?.[0]) ? secondaryMovie.Ratings : [],
  videos: (videos && videos.results?.length) ? videos.results.reduce(
    (acc, { name, key, site } ) => {
      if (site === 'YouTube') {
        return ([
          ...acc,
          {
            name,
            videoIframe: `<iframe width="420" height="315" src="https://www.youtube.com/embed/${key}"></iframe>`
          }
        ]);
      }
      return acc;
    }, videoAcc
  ) : [],
  otherImages: processImages(images),
  rated: secondaryMovie.Rated || [],
  runtime: secondaryMovie.Runtime || `${movie.runtime || 0} min`,
  releaseDate: secondaryMovie.Released || movie.release_date,
});