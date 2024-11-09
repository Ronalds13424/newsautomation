<script>
  import { onMount } from 'svelte';

  let theme = 'light';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme = savedTheme;
      document.documentElement.setAttribute('data-theme', theme);
    }
  });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="/main.css">
</svelte:head>

<main>
  <button class="theme-toggle-button" on:click={toggleTheme}>
    Toggle Theme
  </button>

  <slot></slot>
</main>
