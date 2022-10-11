import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ params }) => {
	const fetchMovieDetails = async () => {
		try {
			const resp = await fetch(
				`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${TMDB_API_KEY}&language=en-US`
			);

			if (resp.status !== 200) throw new Error('Something went wrong');

			if (resp.status === 200) {
				const data = await resp.json();
				return data;
			}
		} catch (error) {
			return error.message;
		}
	};

	return {
		movieDetail: fetchMovieDetails()
	};
};
