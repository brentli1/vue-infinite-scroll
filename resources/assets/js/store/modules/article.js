const state = {
	'current_page': 0,
	'last_page': 1,
	'next_page_url': '',
	'articles': []
};

const getters = {
	articles: state => {
		return state.articles;
	}
};

const mutations = {
	fetchArticles: (state, payload) => {
		state.articles = state.articles.concat(payload.data);
		state.current_page = payload.current_page;
		state.next_page_url = payload.next_page_url;
		state.last_page = payload.last_page;
	}
};

const actions = {
	fetchArticles: ({ commit, state }) => {
		return new Promise((resolve, reject) => {
			if (state.current_page != state.last_page) {
				let url = '';
				if (state.current_page == 0) {
					url = '/articles?page=1';
				} else {
					url = state.next_page_url;
				}
	
				axios.get(url)
					.then(({ data }) => {
						commit('fetchArticles', data)
						resolve(true);
					});
			} else {
				resolve(false);
			}
		});
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
