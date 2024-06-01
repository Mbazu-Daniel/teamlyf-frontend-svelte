<script lang="ts">
  import SidebarMenu from "./LeftSideBar/SidebarMenu.svelte";
  import SidebarBottom from "./LeftSideBar/SidebarBottom.svelte";
  import SidebarRoom from "./LeftSideBar/SidebarRoom.svelte";
  import * as Avatar from "$lib/components/ui/avatar";

  let isCollapsed = false;

  function toggleSidebar() {
    isCollapsed = !isCollapsed;
  }
</script>

<div
  class={`bg-white  ml-0 pl-6 h-full fixed ${isCollapsed ? "w-24" : "w-64"} transition-all duration-300 ml-4`}
>
  <div class="relative h-full">
    <header class="flex items-center justify-between py-4 pr-6">
      <div class="flex items-center">
        <span class="flex items-center justify-center">
          <Avatar.Root>
            <Avatar.Image
              src="../../images/other-logo.png"
              alt="profile picture"
            />
            <Avatar.Fallback class="bg-primary text-white rounded-md"
              >DM</Avatar.Fallback
            >
          </Avatar.Root>
        </span>
        <div class={`flex flex-col ml-2 ${isCollapsed ? "hidden" : "block"}`}>
          <span class="mt-1 text-2xl font-bold">Teamlyf</span>
          <span class="block text-lg -mt-[2px]">Employee: 17</span>
        </div>
      </div>
    </header>

    <!-- <WorkspaceCard /> -->
    <SidebarMenu {isCollapsed} />
    <SidebarRoom />
    <SidebarBottom />

    <button
      class="absolute top-4 -right-4 w-10 bg-primary rounded-full transform transition-transform duration-300"
      on:click={toggleSidebar}
      aria-label="Toggle Sidebar"
    >
      <img
        src="../../navbar/right-arrow.svg"
        alt="toggle sidebar"
        class={`w-full ${isCollapsed ? "rotate-180" : "rotate-0"}`}
      />
    </button>
  </div>
</div>

<style>
  .transition-width {
    transition-property: width;
  }
</style>
