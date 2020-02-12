<template>
    <div class="fullArticle">
        <div class="atricle" v-if='article'>
            <img :src="article.image">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
        </div>
    </div>
</template>

<script>
// Services
import articlesService from '@/shared/services/articles.service';

export default {
    name: 'fullArticle',
    data() {
        return {
            article: undefined,
            articleId: undefined,
        }
    },
    beforeCreate () {
        this.articleId = this.$route.params.id;
        articlesService.getArticleById(this.articleId).then((doc) => {
            this.article = doc.data();
            console.log(this.article)
        })
    },
    created () {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped lang='scss'>
    .fullArticle {
        display: flex;
        justify-content: center;
        width: 100%;
        padding-bottom: 150px;

        .atricle {
            display: flex;
            flex-direction: column;
            margin-top: 125px;
            width: 80%;

            img {
                width: 100%;
            }

            h2 {
                font-family: "BebasNeue Regular";
                margin-top: 25px;
            }

            p {
                width: 100%;
                margin-top: 15px;
                word-wrap: break-word;
            }
        }
    }
</style>