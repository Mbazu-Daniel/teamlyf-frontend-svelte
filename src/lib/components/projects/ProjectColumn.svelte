<script>
  import ProjectCard from "./ProjectCard.svelte";
  export let title;
  export let count;
  export let projects;
  export let bgColor;
</script>

<div class="bg-blue-800 w-full p-4">
  <div
    class={`text-lg font-semibold mb-4 ${bgColor} p-2 rounded-md text-white`}
  >
    {title} <span class="text-sm">({count})</span>
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
        imageUrl={project.imageUrl}
      />
    {/each}
  </div>
</div>
