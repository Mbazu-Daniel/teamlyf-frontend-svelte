<script>
  import TaskCard from "./TaskCard.svelte";
  export let status;
  export let count;
  export let tasks;
  export let bgColor;
</script>

<div
  class={`w-full min-h-screen p-4 ${bgColor} overflow-x-auto rounded-t-3xl`}
>
  <div
    class={`text-lg font-semibold mb-4 p-2 rounded-md text-white shadow-md capitalize ${bgColor}/50`}
  >
    {status} <span class="text-base bg-red-200 px-2 rounded">{count}</span>
  </div>
  <div class="space-y-4">
    {#each tasks as task}
      <TaskCard
        title={task.title}
        projectName={task.projectName}
        progress={task.progress}
        date={task.date}
        members={task.members}
        comments={task.comments}
        attachments={task.attachments}
        priority={task.priority}
        thumbnailImage={task.thumbnailImage}
        {bgColor}
      />
    {/each}
  </div>
</div>
