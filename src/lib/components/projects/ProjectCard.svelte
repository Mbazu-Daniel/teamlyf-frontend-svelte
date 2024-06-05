<script lang="ts">
  export let title;
  export let tags;
  export let progress;
  export let date;
  export let members;
  export let comments;
  export let attachments;
  export let priority;
  export let thumbnailImage;
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
        ? "bg-red-100"
        : priority === "Medium Priority"
          ? "bg-yellow-100"
          : "bg-green-100";
    bgColorOpacity = `${bgColor} bg-opacity-40`; // Set opacity to 20%
  }
</script>

<div
  class="flex flex-col w-[265px] rounded-3xl shadow-lg mb-4 relative"
  style="background-color: {bgColorOpacity};"
>
  <div class="flex justify-center w-full">
    <img
      src={thumbnailImage}
      alt=""
      class="w-[233px] h-[150px] object-cover rounded-t-lg mt-4"
    />
  </div>
  <div class="p-4 bg-white w-[265px] rounded-3xl -mt-16">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-medium font-satoshi mb-2">{title}</h3>
      <span
        class={`text-sm px-2 py-1 rounded flex items-center ${priorityBgColor}`}
        style="color: {priorityColor};"
      >
        <span class="mr-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.33203 3.33398C1.33203 2.80355 1.54274 2.29484 1.91782 1.91977C2.29289 1.5447 2.8016 1.33398 3.33203 1.33398H7.4467C7.97686 1.33427 8.48521 1.54505 8.86003 1.91998L14.1934 7.25332C14.5683 7.62837 14.7789 8.13699 14.7789 8.66732C14.7789 9.19765 14.5683 9.70626 14.1934 10.0813L10.08 14.196C9.89431 14.3817 9.67382 14.5291 9.43114 14.6296C9.18847 14.7301 8.92837 14.7819 8.6657 14.7819C8.40303 14.7819 8.14293 14.7301 7.90025 14.6296C7.65758 14.5291 7.43709 14.3817 7.25136 14.196L1.91803 8.86265C1.54293 8.48767 1.33214 7.97904 1.33203 7.44865V3.33398ZM4.66536 4.00065C4.48855 4.00065 4.31898 4.07089 4.19396 4.19591C4.06894 4.32094 3.9987 4.49051 3.9987 4.66732C3.9987 4.84413 4.06894 5.0137 4.19396 5.13872C4.31898 5.26375 4.48855 5.33398 4.66536 5.33398C4.84218 5.33398 5.01241 5.26375 5.13744 5.13872C5.26246 5.0137 5.3327 4.84413 5.3327 4.66732C5.3327 4.49051 5.26246 4.32094 5.13744 4.19591C5.01241 4.07089 4.84218 4.00065 4.66536 4.00065Z"
              fill={priorityColor}
            />
          </svg>
        </span>{priority}
      </span>
    </div>
    <h4 class="capitalize text-sm text-gray-500 py-2 -mt-2">tags</h4>
    <span class="text-gray-500 px-2 rounded-md border border-solid text-sm"
      >{tags}</span
    >
    <div class=" mt-4">
      <div class="text-base text-gray-500">Progress</div>
      <div class="bg-gray-200 rounded-full h-2.5">
        <div
          class="h-2.5 rounded-full"
          style="width: {progress}%; background: linear-gradient(90deg, rgba(235,19,6,1) 33%, rgba(255,244,15,1) 66%, rgba(0,255,102,0.989233193277311) 100%);"
        ></div>
      </div>

      <div class="text-sm text-gray-500 mt-1 text-right">{progress}%</div>
    </div>
    <div class="flex justify-between items-center mb-4 -mt-1">
      <span
        class="text-sm text-gray-500 flex items-center bg-blue-100 py-1 px-2 rounded-3xl"
      >
        <span class="mr-2">
          <img src="../../images/clock.svg" alt="" class="w-6 h-6" />
        </span>{date}
      </span>
    </div>
    <div class="flex justify-between text-sm text-gray-500">
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
    </div>
  </div>
</div>
