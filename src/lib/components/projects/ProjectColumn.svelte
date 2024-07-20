<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	export let title;
	export let count;
	export let projects;
	export let bgColor;
</script>

<div class={`min-w-[30%] shrink-0 grow-0 basis-1 ${bgColor} p-4 rounded-t-3xl`}>
	<div class={`flex justify-between mb-4 p-2 capitalize`}>
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
	<div class="space-y-4">
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
