import { TMDB_API_KEY } from '$env/static/private';

export const load = async () => {
	const fetchTopRatedMovies = async () => {
		try {
			const resp = await fetch(
				`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
			);

			if (resp.status === 200) {
				const data = await resp.json();
				return data.results;
			}
		} catch (error) {
			return error.message;
		}
	};

	return {
		topRatedMovies: fetchTopRatedMovies()
	};
};
