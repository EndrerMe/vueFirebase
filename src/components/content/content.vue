<template>
    <div class="content">
        <div class="articles">
            <div class="article" v-for='(article, index) of articles' :key='index'>
                <img class="articleImage" :src="article.image" alt="">
                <h3 class="articleTitle">{{ article.title }}</h3>
                <p class="articleDesc">{{ article.brief }}</p>


                <div class="articleButtons">
                    <button class="readMore" @click='goToFullArticle(article.id)'>Read More</button>
                    
                    <div class="articleSocial">
                        <img v-if='article.isLike' src="@/assets/icons/heartFill.svg" @click='toggleLike(article)'>
                        <img v-else src="@/assets/icons/heart.svg" @click='toggleLike(article)'>
                        <img src="@/assets/icons/share.svg" alt="share" @click='shareArticle(article)'>
                    </div>
                </div>

            </div>

            <socialShareComponent @closeSocialComponent='closeSocialComponent'
            :currentArticle='currentArticle' v-if='isShowShareComponent'></socialShareComponent>
        </div>

        <paginationComponent></paginationComponent>

    </div>
</template>

<script>
// Vendors
import { mapActions } from "vuex";

// Components
import socialShareComponent from '@/components/chooseSocialShare/chooseSocialShare';
import paginationComponent from '@/components/pagination/pagination';
// Services
import articlesService from '@/shared/services/articles.service';

export default {
    name: 'contentComponent',
    components: {
        socialShareComponent,
        paginationComponent,
    },
    data() {
        return {
            isShowShareComponent: false,
            currentArticle: null,
            file: '',
            imaga: '',
            articles: []
        }
    },
    created() {
        this.getArticles();
    },
    methods: {
        ...mapActions(["toggleLoader"]),

        getArticles() {
            articlesService.getArticles('1').then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const article = doc.data();
                    article.id = doc.id;
                    this.articles.unshift(article)
                });
            });
        },

        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },

        submitFile() {
            const blob = this.file.slice(0, this.file.size, this.file.type); 
            const file = new File([blob], this.makeImageName(15), {type: this.file.type});
            const data = {
                title: this.makeImageName(15),
                description: this.makeImageName(1550),
                brief: this.makeImageName(150),
                image: file.name,
                date: new Date(),
            }

            this.toggleLoader(true);

            articlesService.testSave(data, file).then(() => {
                this.toggleLoader(false);
            });
        },

        goToFullArticle(id) {
            this.$router.push({ path: `/main/fullArticle/${id}` });
            // articlesSerivce.testSave();
        },

        toggleLike(article) {
            article.isLike = !article.isLike;
        },

        shareArticle(article) {
            this.isShowShareComponent = true;
            this.currentArticle = article;

        },

        closeSocialComponent() {
            this.isShowShareComponent = false;
            this.currentArticle = null;
        },

        makeImageName(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }
}
</script>

<style scoped lang='scss'>
    .content {
        width: 100%;
        height: 100%;
        padding-bottom: 150px;

        .noArticle {
            height: 100%;
        }

        .articles {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 125px;
            width: 100%;

            .article {
                position: relative;
                width: 65%;
                margin-top: 75px;

                .articleImage {
                    width: 100%;
                }

                .articleTitle {
                    font-family: "BebasNeue Regular";
                    margin-top: 25px;
                }

                .articleDesc {
                    width: 100%;
                    margin-top: 15px;
                    word-wrap: break-word;
                }

                .articleButtons {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    .readMore {
                        background-color: black;
                        border: none;
                        outline: none;
                        color: white;
                        padding: 5px 10px;
                    }

                    .articleSocial {
                        margin-right: -15px;
                        img {
                            width: 25px;
                            cursor: pointer;
                            margin-right: 25px;
                        }
                    }
                }
            }
        }
    }
</style>