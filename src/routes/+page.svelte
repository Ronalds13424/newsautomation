<script>
    import News from '$lib/News.svelte';
    import { onMount } from 'svelte';
    import { error } from '@sveltejs/kit';
    
    let articles = [];
    let loading = true;
    let errorMessage = '';

    onMount(async () => {
        try {
            const res = await fetch('/api/news?category=technology&country=us&limit=5');
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error.message || 'Error fetching news');
            }

            articles = data.data;
        } catch (err) {
            errorMessage = err.message;
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <p>Loading news...</p>
{:else if errorMessage}
    <p>Error: {errorMessage}</p>
{:else}
    <News {articles} />
{/if}
