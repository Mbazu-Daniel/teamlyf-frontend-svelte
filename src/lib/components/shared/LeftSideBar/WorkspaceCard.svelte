<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
</script>

<header class="flex items-center justify-between relative">
  <div class="flex items-center">
    <span class="flex items-center justify-center min-w-[60px]">
      <Avatar.Root>
        <Avatar.Image src="../../images/other-logo.svg" alt="profile picture" />
        <Avatar.Fallback class="bg-primary text-white rounded-md"
          >DM</Avatar.Fallback
        >
      </Avatar.Root>
    </span>
    <div class="flex flex-col ml-2">
      <span class="mt-1 text-2xl font-bold">Teamlyf</span>
      <span class="block text-lg -mt-[2px]">Employee: 17</span>
    </div>
  </div>

  <div class="w-10">
    <img
      src="../../navbar/right-arrow.svg"
      alt="close sidebar"
      class="w-full cursor-pointer bg-primary rounded-full transform transition-transform duration-300 hover:rotate-180"
    />
  </div>
</header>
