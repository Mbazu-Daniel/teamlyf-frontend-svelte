<script>
  import LeftSidebar from "./LeftSideBar.svelte";
  import MiddleSide from "./MiddleSide.svelte";
  import RightSidebar from "./RightSidebar.svelte";
</script>

<main class="grid grid-cols-[16rem_auto_30rem] gap-8 w-[96%] my-4 mx-auto">
  <LeftSidebar />

  <div class="bg-gren-700"><LeftSidebar /></div>
  <div class="bg-blue-700">
    <MiddleSide />
  </div>
  <div class="bg-yellow-700">
    <RightSidebar />
  </div>
</main>
