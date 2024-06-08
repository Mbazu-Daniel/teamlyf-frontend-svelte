<script lang="ts">
  import TaskBoard from "$lib/components/tasks/TaskBoard.svelte";
  import TaskList from "$lib/components/tasks/TaskList.svelte";
  import ToggleButtons from "$lib/components/ToggleButtons.svelte";

  let addNew = "Add new task"
  let isBoardActive = true;

  function toggleView(view) {
    isBoardActive = view === "board";
  }

  function handleFilter() {
    // Implement filter functionality here
  }

  function handleAddNew() {
    // Implement add new task functionality here
  }
</script>

<div class="flex h-screen py-4 ">
  <div class="flex-1 flex flex-col rounded-t-3xl border border-solid border-t-1 border-b-0 text-gray-200">
    <div class="p-4">
      <h1 class="text-2xl text-black font-semibold mb-4">Tasks</h1>
      <p class="text-gray-500 mb-6">Manage all tasks here</p>
      <ToggleButtons 
        {isBoardActive}
        onToggleView={toggleView}
        onFilter={handleFilter}
        onAddNew={handleAddNew}
        addNew={addNew}
      />
    </div>
    {#if isBoardActive}
      <TaskBoard />
    {:else}
      <TaskList />
    {/if}
  </div>
</div>
