<script lang="ts">
  import Navbar from "$lib/components/shared/Navbar.svelte";
  import LeftSideBar from "$lib/components/shared/LeftSideBar.svelte";
  import Chat from '$lib/components/chats/DirectMessage.svelte'
  import "../../../app.css";
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
    <div class="flex-1 ml-[265px] transition-all duration-300 overflow-auto p-6  main-content">
      <slot />
      <Chat/>
    </div>
  </div>
</div>
