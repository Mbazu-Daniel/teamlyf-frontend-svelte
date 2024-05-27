<script>
  import WorspaceCard from "./LeftSideBar/WorspaceCard.svelte";
  import SidebarMenu from "./LeftSideBar/SidebarMenu.svelte";
  import SidebarBottom from "./LeftSideBar/SidebarBottom.svelte";
  import SidebarRoom from "./LeftSideBar/SidebarRoom.svelte";
</script>

<div class=" h-full fixed w-64">
  <WorspaceCard />
  <SidebarMenu/>
  <SidebarRoom/>
  <SidebarBottom/>
</div>
