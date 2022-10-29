import { TMDB_API_KEY } from '$env/static/private';

export const load = async ({ params }) => {
	const { search_params } = params;
	const fetchSearchedTvShows = async () => {
		const resp = await fetch(
			`https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&query=${search_params}&include_adult=false`
		);

		const data = await resp.json();
		return data.results;
	};

	return {
		searchResults: fetchSearchedTvShows()
	};
};
