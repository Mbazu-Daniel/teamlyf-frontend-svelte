<script>
  import WorkspaceCard from "./LeftSideBar/WorkspaceCard.svelte";
  import SidebarMenu from "./LeftSideBar/SidebarMenu.svelte";
  import SidebarBottom from "./LeftSideBar/SidebarBottom.svelte";
  import SidebarRoom from "./LeftSideBar/SidebarRoom.svelte";
</script>

<div class="bg-white pl-4 grid grid-cols-[16rem_auto] h-full fixed">
  <div class="w-full h-full">
    <WorkspaceCard />
    <SidebarMenu />
    <SidebarRoom />
    <SidebarBottom />
  </div>
</div>
