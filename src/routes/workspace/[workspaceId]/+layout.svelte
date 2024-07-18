<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import LeftSideBar from "$lib/components/shared/LeftSideBar.svelte";
  
  import "../../../app.css";
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
 
   let isCollapsed = false;

injectSpeedInsights();
</script>

<div class="flex h-screen">
  <!-- Top Navbar -->
  <div class="fixed w-full z-20">
    <Navbar />
  </div>

  <!-- Sidebar and Main Content -->
  <div class="flex pt-16 w-full">
    <!-- Left Sidebar -->
    <div class="fixed h-full">
      <LeftSideBar />
    </div>

    <!-- Main Content -->
    <div class="flex-1 ml-[265px] transition-all duration-300  p-6  main-content">
    <div class={`${isCollapsed ? "pl-28": "pl-[281px]" } flex-1 py-8 pr-4 transition-all duration-300 overflow-hidden bg-white` }>
      <slot />

    </div>
  </div>
</div>
