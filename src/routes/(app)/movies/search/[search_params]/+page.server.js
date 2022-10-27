import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ params }) => {
	const { search_params } = params;
	const fetchSearchedMovies = async () => {
		const resp = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US&query=${search_params}&page=1&include_adult=false`
		);

		const data = await resp.json();
		return data.results;
	};

	return {
		searchResults: fetchSearchedMovies()
	};
};
