<script>
  import SearchBar from "./SearchBar.svelte";
  import ProfileArea from "./ProfileArea.svelte";
</script>

<nav class="w-full bg-white py-4">
  <div class="flex justify-between items-center w-[96%] mx-auto relative">
    <img src="../images/logo-icon.svg" class="w-10" alt="logo" />
    <SearchBar />
    <ProfileArea />
  </div>
</nav>
