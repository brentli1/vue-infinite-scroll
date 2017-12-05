<template>
    <div class="container">
        <div class="row" style="flex-direction: column;">
            <div v-if="articles.length > 0" class="col-md-8 col-md-offset-2">
                <article-item v-for="article in articles" :article=article :key="article.id"></article-item>
            </div>
            <div v-show="!isLoading && canLoadMore" class="col-md-8 col-md-offset-2" style="text-align: center; padding: 20px;">
                <button class="btn btn-primary" @click="fetchMoreArticles">Load More</button>
            </div>
            <div v-show="isLoading && canLoadMore" class="col-md-8 col-md-offset-2" style="text-align: center; padding: 20px;">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size: 4rem;"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { throttle } from 'underscore';
    export default {
        data() {
            return {
                isLoading: false,
                canLoadMore: true,
                isSavingScrollPosition: false
            }
        },
        created() {
            // Fetch articles unless articles already are present
            if (Object.keys(this.articles).length === 0) {
                this.fetchArticles();
            }
        },
        mounted() {
            // Set the scroll position of the page based on state
            window.scrollTo(0, this.scrollPosition);

            // Add scroll event listener to save scrollPosition state
            window.addEventListener('scroll', throttle(() => {
                if (!this.isSavingScrollPosition) {
                    this.isSavingScrollPosition = true;
                    this.setScrollPosition(document.documentElement.scrollTop).then(() => {
                        this.isSavingScrollPosition = false;
                    });
                }
            }, 2500));
        },
        methods: {
            ...mapActions([
                'fetchArticles',
                'setScrollPosition'
            ]),
            fetchMoreArticles() {
                this.isLoading = true;
                this.fetchArticles().then((payload) => {
                    this.isLoading = false;
                    this.canLoadMore = payload;
                });
            }
        },
        computed: {
            ...mapGetters([
                'articles',
                'scrollPosition'
            ])
        }
    }
</script>
