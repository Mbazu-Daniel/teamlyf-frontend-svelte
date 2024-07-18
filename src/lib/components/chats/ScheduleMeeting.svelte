<script>
    export let isOpen = true;
    let active = false
    let isChecked = true;

    function toggleSwitch() {
      isChecked = !isChecked;
    }
    
    function handleClose() {
      isOpen = false;
    }
  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div class="bg-white relative p-6 w-[600px] rounded-3xl shadow-lg z-10 border-2 border-purple-300">
        <div class="flex justify-between items-center my-4">
          <div class="flex justify-between gap-4 w-96">
            <div class="flex gap-2  items-center text-primary">
             <img src="../../chats/meeting_icon.svg" alt="meeting icon">
              <span class="text-lg font-normal text-center">Meetings</span>
            </div>
            <div class="flex gap-2 items-center text-gray-400">
              <img src="../../chats/calender_icon.svg" alt="calender icon">
              <span class="text-lg font-normal text-center">Events</span>
            </div>
            <div class="flex gap-1 items-center text-gray-400">
              <img src="../../chats/beach_icon.svg" alt="beach icon">
              <span class="text-lg font-normal text-center">Holiday</span>
            </div>
          </div>
          <button on:click={handleClose} class="text-gray-500 hover:text-gray-700 font-extralight text-6xl">
            &times;
          </button>
        </div>
        <div class="mb-4">
          <input type="text" class="w-full px-4 py-2 border border-gray-300 text-4xl rounded-lg" placeholder="Enter meeting title..." />
        </div>
        <div class="flex space-x-2 mb-4">
          <button class="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-lg text-gray-light">
            <img src="../../chats/dateandtime_icon.svg" class="w-10 h-10" alt="date and time icon">
            Date and time
          </button>
          <button class="flex items-center gap-1 px-4 py-2 text-gray-light bg-gray-200 rounded-lg">
            <img src="../../chats/profile_icon.svg" alt="profile icon" class="w-10 h-10">
            Attendee
          </button>
          <button class="flex items-center gap-1 px-4 py-2 text-gray-light bg-gray-200 rounded-lg">
            <img src="../../chats/tag_icon.svg" alt="tag icon" class="w-10 h-10">
            Tag project
          </button>
        </div>
        <div class="flex items-center justify-between pt-4 mb-2">
            <div class="flex items-center justify-between mb-4">
              <div class="flex gap-2 items-center space-x-2 text-gray-light">
                Automatically start a meeting room
                <div class="flex items-center">
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" bind:checked={isChecked} on:change={toggleSwitch}>
                    <div class="w-12 h-6 bg-gray-200 rounded-full transition-colors duration-300 peer-checked:bg-purple-500">
                      <div class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-6"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <button class="bg-purple-600 text-xl text-white h-12 pl-5 py-2 rounded-lg flex items-center">
                Schedule meeting
                <span class="rounded-r-lg bg-purple-800 text-white ml-3 p-3 flex items-center justify-center">
                  <img src="../../chats/warrowdown_icon.svg" alt="arrow down icon" class="w-5 h-5"/>
                </span>
              </button>
            </div>
        </div>
      </div>
    </div>
  {/if}
  
  <style>
   .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  :global(.is-checked) {
  background-color: #a855f7;
}
  </style>
  