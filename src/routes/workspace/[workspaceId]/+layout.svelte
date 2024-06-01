<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import LeftSideBar from "$lib/components/shared/LeftSideBar.svelte";
  import "../../../app.css";
</script>

<div class="grid grid-rows-[auto_1fr] grid-cols-[auto_1fr] h-screen">
  <!-- Top Navbar -->
  <div class="row-span-1 col-span-2">
    <Navbar />
  </div>

  <!-- Left Sidebar -->
  <div class="row-span-1">
    <LeftSideBar />
  </div>

  <!-- Main Content -->
  <main class="row-span-1 col-span-1 p-6">
    <slot />
  </main>
</div>
