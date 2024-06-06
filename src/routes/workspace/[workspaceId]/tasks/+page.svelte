<script lang="ts">
  import TaskBoard from "$lib/components/tasks/TaskBoard.svelte";
  import TaskList from "$lib/components/tasks/TaskList.svelte";
  let isBoardActive = true;

  function toggleView(view) {
    isBoardActive = view === 'board';
  }
</script>

<div class="flex h-screen py-4 bg-gray-100">
  <div class="flex-1 flex flex-col rounded-t-3xl border border-solid border-t-1 border-b-0 text-gray-200">
    <div class="p-4">
      <h1 class="text-2xl text-black font-semibold mb-4">Tasks</h1>
      <p class="text-gray-500 mb-6">Manage all tasks here</p>
      <div class="flex justify-between items-center">
        <div class="mb-4 flex space-x-4 items-center">
          <button 
            class="flex items-center px-4 py-2 rounded-md 
                    {isBoardActive ? 'text-primary' : 'bg-gray-200 text-gray-700'}"
            on:click={() => toggleView('board')}
          >
            <svg 
              width="20" 
              height="22" 
              viewBox="0 0 20 22" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path 
                d="M14 6C16.357 6 17.5355 6 18.2678 6.73223C19 7.46447 19 8.64298 19 11C19 13.357 19 14.5355 18.2678 15.2678C17.5355 16 16.357 16 14 16H6C3.64298 16 2.46447 16 1.73223 15.2678C1 14.5355 1 13.357 1 11C1 8.64298 1 7.46447 1.73223 6.73223C2.46447 6 3.64298 6 6 6L14 6Z" 
                fill={isBoardActive ? "#BE8CFF" : "#D9D9D9"} 
                stroke={isBoardActive ? "#BE8CFF" : "#D9D9D9"} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
              <path 
                d="M15 1C14.8955 1.54697 14.7107 1.94952 14.3838 2.26777C13.6316 3 12.4211 3 10 3C7.5789 3 6.36835 3 5.61621 2.26777C5.28931 1.94952 5.10449 1.54697 5 1" 
                stroke={isBoardActive ? "#9747FF" : "#828282"} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
              <path 
                d="M15 21C14.8955 20.453 14.7107 20.0505 14.3838 19.7322C13.6316 19 12.4211 19 10 19C7.5789 19 6.36835 19 5.61621 19.7322C5.28931 20.0505 5.10449 20.453 5 21" 
                stroke={isBoardActive ? "#9747FF" : "#828282"} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              />
            </svg>
            Board
          </button>
          <button 
            class="flex items-center px-4 py-2 rounded-md 
                    {isBoardActive ? 'bg-gray-200 text-gray-700' : 'text-primary'}"
            on:click={() => toggleView('list')}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path 
                d="M4.5 10.5C3.11929 10.5 2 9.38071 2 8C2 6.61929 3.11929 5.5 4.5 5.5C5.88071 5.5 7 6.61929 7 8C7 9.38071 5.88071 10.5 4.5 10.5Z" 
                fill={isBoardActive ? "#828282" : "#BE8CFF"}
              />
              <path 
                d="M4.5 18.5C3.11929 18.5 2 17.3807 2 16C2 14.6193 3.11929 13.5 4.5 13.5C5.88071 13.5 7 14.6193 7 16C7 17.3807 5.88071 18.5 4.5 18.5Z" 
                fill={isBoardActive ? "#D9D9D9" : "#BE8CFF"}
              />
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.25 6.25C9.25 5.83579 9.58579 5.5 10 5.5L16 5.5C16.4142 5.5 16.75 5.83579 16.75 6.25C16.75 6.66421 16.4142 7 16 7L10 7C9.58579 7 9.25 6.66421 9.25 6.25Z" 
                fill={isBoardActive ? "#D9D9D9" : "#BE8CFF"}
              />
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.25 14.25C9.25 13.8358 9.58579 13.5 10 13.5H16C16.4142 13.5 16.75 13.8358 16.75 14.25C16.75 14.6642 16.4142 15 16 15H10C9.58579 15 9.25 14.6642 9.25 14.25Z" 
                fill={isBoardActive ? "#828282" : "#BE8CFF"}
              />
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.25 9.75C9.25 9.33579 9.58579 9 10 9L22 9C22.4142 9 22.75 9.33579 22.75 9.75C22.75 10.1642 22.4142 10.5 22 10.5L10 10.5C9.58579 10.5 9.25 10.1642 9.25 9.75Z" 
                fill={isBoardActive ? "#D9D9D9" : "#BE8CFF"}
              />
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M9.25 17.75C9.25 17.3358 9.58579 17 10 17H22C22.4142 17 22.75 17.3358 22.75 17.75C22.75 18.1642 22.4142 18.5 22 18.5H10C9.58579 18.5 9.25 18.1642 9.25 17.75Z" 
                fill={isBoardActive ? "#828282" : "#BE8CFF"}
              />
            </svg>
            List
          </button>
        </div>

        <div>
          <button class="ml-auto px-4 py-2 bg-purple-500 text-white rounded-md">
            Filter
          </button>
          <button class="ml-auto px-4 py-2 bg-purple-500 text-white rounded-md">
            Add new task
          </button>
        </div>
      </div>
    </div>
      {#if isBoardActive}
      <TaskBoard  />
    {:else}
      <TaskList />
    {/if}
  </div>
</div>
