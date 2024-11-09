<script>
  import News from '$lib/News.svelte';
  import { onMount } from 'svelte';
  
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
  <p class="loading-message">Loading news...</p>
{:else if errorMessage}
  <p class="error-message">Error: {errorMessage}</p>
{:else}
  <div class="news-container">
    <News {articles} />
  </div>
{/if}
