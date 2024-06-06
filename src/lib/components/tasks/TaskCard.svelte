<script>
  export let title;
  export let projectName;
  export let progress;
  export let date;
  export let members;
  export let comments;
  export let attachments;
  export let priority;
  export let bgColor;

  let priorityColor;
  let priorityBgColor;
  let bgColorOpacity;

  $: {
    priorityColor =
      priority === "High Priority"
        ? "#EF4444"
        : priority === "Medium Priority"
          ? "#FBBF24"
          : "#10B981";
    priorityBgColor =
      priority === "High Priority"
        ? "rgba(239, 68, 68, 0.1)"
        : priority === "Medium Priority"
          ? "rgba(251, 191, 36, 0.1)"
          : "rgba(16, 185, 129, 0.1)";
    bgColorOpacity = `${bgColor} bg-opacity-40`; // Set opacity to 40%
  }
</script>

<div
  class="flex flex-col w-full rounded-3xl shadow-lg mb-4 relative bg-white cursor-pointer"
>
  <div class="p-4 w-full rounded-3xl">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-md font-medium text-gray-900 font-satoshi capitalize">
        {title}
      </h3>
    </div>
    <!-- <h4 class="capitalize text-sm text-gray-500 py-2 -mt-2">Project Name</h4> -->

    <h3 class="text-lg font-bold font-satoshi mb-3 text-gray-700">
      {projectName}
    </h3>

    <div class="flex justify-between items-center mb-4 -mt-1">
      <span
        class="text-sm flex items-center bg-blue-100 py-1 px-2 rounded-3xl text-[#315ebe]"
      >
        <span class="mr-2">
          <img src="../../images/clock.svg" alt="" class="w-6 h-6" />
        </span>{date}
      </span>
      <div class="flex items-center">
        {#each members.slice(0, 3) as member}
          <img
            src={member}
            alt=""
            class="w-6 h-6 rounded-full border-2 border-white -ml-2"
          />
        {/each}
        {#if members.length > 3}
          <span class="text-sm text-gray-500 ml-2">+{members.length - 3}</span>
        {/if}
      </div>
    </div>
    <!-- <div class="flex justify-between text-sm text-gray-500">
      <span class="flex items-center">
        <span class="mr-1">
          <img src="../../images/comments.svg" alt="" class="w-6 h-6" />
        </span>{comments}
      </span>
      <span class="flex items-center">
        <span class="mr-1">
          <img src="../../images/attachments.svg" alt="" class="w-6 h-6" />
        </span>{attachments}
      </span>
    </div> -->
    <div class="mt-4 flex justify-start">
      <button
        class="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-600 flex items-center"
      >
        <img src="../../images/subtasks.svg" alt="" class="w-6 h-6 mr-2" />
        Add subtask
      </button>
    </div>
  </div>
</div>
