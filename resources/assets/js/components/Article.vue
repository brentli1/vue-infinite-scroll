<template>
    <div class="panel panel-default">
        <div class="panel-heading">{{ article.author }}</div>

        <div class="panel-body">
            {{ article.body }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'article': ''
    }
}
</script>

