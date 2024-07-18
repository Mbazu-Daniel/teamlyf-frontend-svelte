<script>
    export let isOpen = true;
    
    function handleClose() {
      isOpen = false;
    }
  </script>
  
  {#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div class="bg-white relative p-6 w-[400px] h-72 rounded-2xl shadow-lg z-10 border border-primary">
        <div class="flex justify-between items-center mb-14">
          <p class="text-2xl font-semibold leading-7">Create a new meeting</p>
          <button on:click={handleClose} class="text-gray-600 text-xl rounded-md bg-gray-200 px-2 ">×</button>
        </div>
        
        <div class="flex items-center bg-purple-100 p-3 py-5 rounded-lg mb-14">
          <span class="text-purple-500 flex-grow">teamlyf.marx-technology.com/fxx-syud-euc</span>
          <img src="../../chats/colorduplicate_icon.svg" alt="duplicate con" class="w-6 h-6 text-purple-500">
        </div>
        
        <div class="flex justify-between">
          <div class="ring-2 ring-purple-500 text-purple-500 rounded-lg text-center w-64 px-4 py-2">
            Schedule meeting
          </div>
          <div class="bg-purple-500 text-center text-white rounded-lg px-4 py-2 w-48">
            Join meeting
          </div>
        </div>
      </div>
    </div>
  {/if}
  