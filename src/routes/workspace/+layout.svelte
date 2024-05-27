<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import "../../app.css";
  import Main from "$lib/components/shared/Main.svelte";
</script>

<!-- text-decoration: none;
    list-style: none;
    box-sizing: border-box; -->
<div class="m-0 p-0 outline-0 border-0 appearance-none no-underline box-border">
  <Navbar />
  <Main />
  <main>
    <slot />
  </main>
</div>
