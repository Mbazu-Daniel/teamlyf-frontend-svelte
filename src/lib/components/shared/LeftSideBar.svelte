<script lang="ts">
  import SidebarMenu from "./LeftSideBar/SidebarMenu.svelte";
  import SidebarBottom from "./LeftSideBar/SidebarBottom.svelte";
  import SidebarRoom from "./LeftSideBar/SidebarRoom.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import { onMount } from "svelte";

  let isCollapsed = false;

  function toggleSidebar() {
    isCollapsed = !isCollapsed;
    adjustMainMargin();
  }

  function adjustMainMargin() {
    const mainContent = document.querySelector(".main-content") as HTMLElement;
    if (mainContent) {
      mainContent.style.marginLeft = isCollapsed ? "48px" : "265px";
    }
  }

  onMount(() => {
    adjustMainMargin();
  });
</script>

<div
  class={`bg-sidebar py-2 px-6 h-full ${isCollapsed ? "w-24" : "w-[265px]"} transition-all duration-300`}
>
  <div class="relative h-full flex flex-col">
    <header class="flex items-center justify-between py-4 pr-6">
      <div class="flex items-center">
        <span class="flex items-center justify-center">
          <Avatar.Root>
            <Avatar.Image
              src="../../images/other-logo.png"
              alt="workspace logo"
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

    <SidebarMenu {isCollapsed} />
    <SidebarRoom {isCollapsed} />
    <div class="mt-auto">
      <SidebarBottom {isCollapsed} />
    </div>

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
