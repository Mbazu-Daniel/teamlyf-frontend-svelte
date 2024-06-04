<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import SearchBar from "./SearchBar.svelte";
  import ProfileArea from "./ProfileArea.svelte";
</script>

<nav class="w-full bg-sidebar py-4 shadow-md">
  <div class="flex justify-between items-center px-4 relative">
    <Avatar.Root>
      <Avatar.Image src="../../images/logo-icon.svg" alt="teamlyf logo" />
      <Avatar.Fallback class="bg-primary text-white text-md font-bold rounded-xl">logo</Avatar.Fallback>
    </Avatar.Root>
    <SearchBar />
    <ProfileArea />
  </div>
</nav>
