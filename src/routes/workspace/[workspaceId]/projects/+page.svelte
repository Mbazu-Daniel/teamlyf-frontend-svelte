<script lang="ts">
  import ProjectBoard from "$lib/components/projects/ProjectBoard.svelte";
</script>

<div class="flex h-screen py-4">
  <div
    class="flex-1 flex flex-col rounded-t-3xl border border-solid border-t-1 border-b-0 text-gray-200"
  >
    <div class="p-4">
      <h1 class="text-2xl text-black font-semibold mb-4">Projects</h1>
      <p class="text-gray-500 mb-6">Manage all projects here</p>
      <div class="flex justify-between">
        <div class="mb-4 space-x-4">
          <button class="px-4 py-2 bg-blue-500 text-white rounded-md"
            >Board</button
          >
          <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >List</button
          >
        </div>

        <div>
          <button class="ml-auto px-4 py-2 bg-purple-500 text-white rounded-md"
            >Filter</button
          >
          <button class="ml-auto px-4 py-2 bg-purple-500 text-white rounded-md"
            >Add new project</button
          >
        </div>
      </div>
    </div>
    <ProjectBoard />
  </div>
</div>
