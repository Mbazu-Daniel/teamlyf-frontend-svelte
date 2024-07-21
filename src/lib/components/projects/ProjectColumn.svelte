<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	export let title;
	export let count;
	export let projects;
	export let bgColor;
</script>

<div class={`min-w-[24%] shrink-0 grow-0 bg-gray-50 py-4 px-2 mx-auto rounded-t-3xl shadow-md`}>
	<div class={`flex justify-between mb-4 p-2 capitalize items-center`}>
		<h5 class="text-[1.6rem] font-bold text-[#282828]">
			{title}<span class="text-base text-[#828282] bg-[#D5D5D5] px-3 py-1 rounded ml-4"
				>{count}</span
			>
		</h5>
		<!--
 !   ╭───────────────────────────────────────────────────────╮
 !   │ TODO: style the actions and add dropdown func         │
 !   ╰───────────────────────────────────────────────────────╯
-->
		<div>action</div>
	</div>
	<div class="relative">
		<div class="flex flex-col h-[23rem] gap-y-4 overflow-y-scroll">
			{#each projects as project}
				<ProjectCard
					title={project.title}
					tags={project.tags}
					progress={project.progress}
					date={project.date}
					members={project.members}
					comments={project.comments}
					attachments={project.attachments}
					priority={project.priority}
					thumbnailImage={project.thumbnailImage}
					{bgColor}
				/>
			{/each}
		</div>
	</div>
</div>
