<script lang="ts">
  import ProjectBoard from "$lib/components/projects/ProjectBoard.svelte";


</script>
<div class="flex h-screen">
  <div class="flex-1 flex flex-col ">
    <div class="p-6  flex-1 overflow-y-auto pt-20">
      <h1 class="text-2xl font-semibold mb-4">Projects</h1>
      <p class="text-gray-500 mb-6">Manage all projects here</p>
      <div class="mb-4 flex items-center space-x-4">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md">Board</button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">List</button>
        <button class="ml-auto px-4 py-2 bg-purple-500 text-white rounded-md">Add new project</button>
      </div>
      <ProjectBoard />
    </div>
  </div>
</div>vt