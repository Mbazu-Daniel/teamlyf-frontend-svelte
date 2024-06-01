<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import "../../../app.css";
  import LeftSideBar from "$lib/components/shared/LeftSideBar.svelte";
</script>

<div
  class="bg-red-500 grid grid-rows-[auto_1fr] grid-cols-[16rem_1fr] h-screen p-0 outline-0 border-0 appearance-none no-underline box-border"
>
  <!-- Top Navbar -->
  <div class="row-span-1 col-span-2 ">
    <Navbar />
  </div>
  <!-- Left Sidebar -->
  <div class="row-span-1">
    <LeftSideBar />
  </div>

  <!-- Main Content -->
  <div class="pl-4 row-span-1 col-span-1 grid grid-cols-[1fr_30rem]">
    <main class="col-span-1 overflow-auto">
      <slot />
    </main>
  </div>
</div>
