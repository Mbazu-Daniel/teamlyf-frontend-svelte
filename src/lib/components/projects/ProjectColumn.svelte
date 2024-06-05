<script>
  import ProjectCard from "./ProjectCard.svelte";
  export let title;
  export let count;
  export let projects;
  export let bgColor;
</script>

<div class={`w-full min-h-screen ${bgColor} p-4 rounded-t-3xl overflow-x-auto`}>
  <div
    class={`text-lg font-semibold mb-4 p-2 rounded-md text-white shadow-md ${bgColor}/50`}
  >
    {title} <span class="text-base bg-red-200 px-2 rounded">{count}</span>
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
