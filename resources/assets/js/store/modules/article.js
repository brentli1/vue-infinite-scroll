const state = {
	'current_page': 0,
	'last_page': 1,
	'next_page_url': '/articles?page=1',
	'articles': [],
	'scrollPosition': 0
};

const getters = {
	articles: state => {
		return state.articles;
	},
	scrollPosition: state => {
		return state.scrollPosition;
	}
};

const mutations = {
	fetchArticles: (state, payload) => {
		state.articles = state.articles.concat(payload.data);
		state.current_page = payload.current_page;
		state.next_page_url = payload.next_page_url;
		state.last_page = payload.last_page;
	},
	setScrollPosition: (state, payload) => {
		state.scrollPosition = payload;
	}
};

const actions = {
	fetchArticles: ({ commit, state }) => {
		return new Promise((resolve, reject) => {
			if (state.current_page != state.last_page) {
				axios.get(state.next_page_url)
					.then(({ data }) => {
						commit('fetchArticles', data)
						resolve(true);
					});
			} else {
				resolve(false);
			}
		});
	},
	setScrollPosition: ({ commit }, payload) => {
		return new Promise((resolve, reject) => {
			commit('setScrollPosition', payload);
			resolve(true);
		});
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
