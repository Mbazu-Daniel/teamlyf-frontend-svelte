<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<div class="flex items-center justify-between gap-16">
  <div class="flex bg-light w-20 h-8 rounded-2xl cursor-pointer">
    <!-- light and dark  -->
    <div class="flex bg-slate-50 w-20 h-8 rounded-md cursor-pointer">
      <img
        class="material-icons-sharp w-1/2 h-full flex items-center justify-center text-xl rounded-md bg-dark text-white"
        src="../../images/light.svg"
        alt="light icon"
      />
      <img
        class="material-icons-sharp w-1/2 h-full flex items-center justify-center text-xl active:rounded-md active:bg-dark active:text-white"
        src="../../images/dark.svg"
        alt="dark icon"
      />

    </div>
    <!-- end of light and dark  -->
  </div>
  <div class="flex gap-4 items-center">
    <div class="w-12 h-12 rounded-full overflow-hidden">
      <Avatar.Root>
        <Avatar.Image src="../../images/profile.svg" alt="profile picture" />
        <Avatar.Fallback>DM</Avatar.Fallback>
      </Avatar.Root>
      <!-- <img src="../../images/profile.svg" class="block w-16 h-12 rounded-[50%]" alt="profile" /> -->
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold">Daniel Mbazu</h3>
      <h4 class="font-medium">Backend Developer</h4>
    </div>
    <span class="material-icons-sharp">expand_more</span>
  </div>
  <button id="menu-btn" class="material-icons-sharp hidden">menu</button>
</div>
