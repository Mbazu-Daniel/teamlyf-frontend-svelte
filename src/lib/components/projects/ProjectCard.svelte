<script>
  export let title;
  export let tags;
  export let progress;
  export let date;
  export let members;
  export let comments;
  export let attachments;
  export let priority;
  export let imageUrl;
</script>

<div class="bg-white rounded-lg shadow-md p-4 mb-4">
  <!-- <img src={imageUrl} alt="Project image" class="w-full rounded-md mb-4" /> -->
  <h3 class="text-lg font-semibold mb-2">{title}</h3>
  <div class="flex justify-between items-center mb-4">
    <span class="bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded">{priority}</span>
    <span class="text-gray-500 text-sm">{tags}</span>
  </div>
  <div class="mb-4">
    <div class="text-sm text-gray-500">Progress</div>
    <div class="bg-gray-200 rounded-full h-2.5">
      <div class="bg-blue-600 h-2.5 rounded-full" style="width: {progress}%"></div>
    </div>
  </div>
  <div class="flex justify-between items-center mb-4">
    <span class="text-sm text-gray-500">{date}</span>
    <div class="flex items-center">
      {#each members as member}
        <img src={member} alt="Member" class="w-6 h-6 rounded-full border-2 border-white -ml-2" />
      {/each}
    </div>
  </div>
  <div class="flex justify-between text-sm text-gray-500">
    <span>{comments} Comments</span>
    <span>{attachments} Attachments</span>
  </div>
</div>
