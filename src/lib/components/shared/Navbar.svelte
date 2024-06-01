<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import SearchBar from "./SearchBar.svelte";
  import ProfileArea from "./ProfileArea.svelte";
</script>

<nav class="w-full bg-white py-4">
  <div class="flex justify-between items-center px-4 relative">
    <Avatar.Root>
      <Avatar.Image src="../../images/logo-icon.svg" alt="teamlyf logo" />
      <Avatar.Fallback class="bg-primary text-white text-xl font-bold rounded-xl">T</Avatar.Fallback>
    </Avatar.Root>
    <SearchBar />
    <ProfileArea />
  </div>
</nav>
