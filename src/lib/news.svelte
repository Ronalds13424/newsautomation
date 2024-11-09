<!-- src/lib/News.svelte -->
<script>
    export let articles = [];
</script>

<section class="news-list">
    {#if articles.length > 0}
        {#each articles as article}
            <article>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <a href={article.url} target="_blank">Read more</a>
                <p><em>{article.source} | Published: {new Date(article.published_at).toLocaleString()}</em></p>
            </article>
        {/each}
    {:else}
        <p>No articles available.</p>
    {/if}
</section>

<style>
    .news-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    article {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>
