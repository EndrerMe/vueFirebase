<template>
    <div class="newArticleComponent">
        <h2>Create New Article:</h2>
        <div class="newArticle">
            <input type="file">
            <label for="title">Title:</label>
            <input type="text" id="title">
            <label for="brief">Brief:</label>
            <textarea id="brief"></textarea>
            <label for="description">Description:</label>
            <textarea id="descritpion"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newArticleComponent'
}
</script>

<style scoped lang='scss'>
    .newArticleComponent {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;

        .newArticle {
            display: flex;
            flex-direction: column;
        }
    }
</style>