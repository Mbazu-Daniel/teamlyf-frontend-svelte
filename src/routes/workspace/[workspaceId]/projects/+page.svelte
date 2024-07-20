<script lang="ts">
	import ProjectBoard from '$lib/components/projects/ProjectBoard.svelte';
	import ProjectList from '$lib/components/projects/ProjectList.svelte';
	import ToggleButtons from '$lib/components/ToggleButtons.svelte';

	let addNew = 'Add new project';
	let isBoardActive = true;

	function toggleView(board: boolean) {
		isBoardActive = board;
	}

	function handleFilter() {
		// Implement filter functionality here
	}

	function handleAddNew() {
		// Implement add new project functionality here
	}
</script>

<section class="flex min-h-screen rounded-t-3xl border border-solid border-gray-200 p-5">
	<div class="flex-1 flex flex-col text-gray-200">
		<div class="p-4">
			<h1 class="text-[2.5rem] text-gray-600 font-semibold">Projects</h1>
			<p class="text-[1.8rem] text-gray-300">Manage all projects here</p>
			<ToggleButtons
				{isBoardActive}
				onToggleView={toggleView}
				onFilter={handleFilter}
				onAddNew={handleAddNew}
				{addNew}
			/>
		</div>

		<!--
 !   ╭───────────────────────────────────────────────────────╮
 !   │ TODO: use higher order component for the project      │
 !   │ board and list                                        │
 !   ╰───────────────────────────────────────────────────────╯
-->
		{#if isBoardActive}
			<ProjectBoard />
		{:else}
			<ProjectList />overflow-hidden
		{/if}
	</div>
</section>
