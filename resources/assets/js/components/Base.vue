<template>
    <div class="container">
        <div class="row" style="flex-direction: column;">
            <div v-if="articles.length > 0" class="col-md-8 col-md-offset-2">
                <article-item v-for="article in articles" :article=article :key="article.id"></article-item>
            </div>
            <div v-show="isLoading && canLoadMore" class="col-md-8 col-md-offset-2" style="text-align: center; padding: 20px;">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw" style="font-size: 4rem;"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        data() {
            return {
                isLoading: false,
                canLoadMore: true
            }
        },
        created() {
            this.$store.dispatch('fetchArticles');

            window.onscroll = (ev) => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
                    this.isLoading = true;
                    this.$store.dispatch('fetchArticles').then((payload) => {
                        this.isLoading = false;
                        this.canLoadMore = payload;
                    });
                }
            };
        },
        methods: {

        },
        computed: {
            ...mapGetters([
                'articles'
            ])
        }
    }
</script>
