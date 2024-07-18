<script>
    export let isOpen = true;
    //export let onClose = () => {};
  
    let searchQuery = "";
    let groups = [
      { name: "UI/UX Team", color: "bg-yellow-400", initial: "D", active: true },
      { name: "Backend Team", color: "bg-green-400", initial: "B", active: false },
      { name: "Frontend Team", color: "bg-purple-400", initial: "F", active: false },
      { name: "Comms Team", color: "bg-red-400", initial: "C", active: false }
    ];
    let members = [
      { name: "Stanley M.", username: "@stanleym" },
      { name: "Stanley M.", username: "@stanleym" },
      { name: "Stanley M.", username: "@stanleym" },
      { name: "Stanley M.", username: "@stanleym" },
      { name: "Stanley M.", username: "@stanleym" },
    ];
  </script>
  
  
  
  {#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-3xl shadow-lg max-w-md w-full relative">
        <div class="searchbar w-full mt-4 mb-12 rounded-[7px] relative">
          <img
            src="../../chats/search_icon.svg"
            alt="search icon"
            class="w-10 h-10 absolute top-[50%] left-[30px] translate-x-[-50%] translate-y-[-50%] text-[30px] my-auto text-stone-300"
          />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for members..."
            class="rounded-[7px] border-none block outline-none w-full h-full ring-2 ring-inset ring-gray-light shadow-md pointer-events-auto px-9 py-6 ps-[60px]"
          />
        </div>
        <h2 class="text-gray-dark text-xl font-semibold mb-2">Groups</h2>
        <div class="flex items-center mb-4">
          <div class="flex space-x-2 overflow-x-auto">
            {#each groups as group}
              <div class="flex flex-col items-center">
                <div class={`w-10 h-10 rounded-full flex items-center justify-center ${group.color} ${group.active ? 'border-2 border-purple-500' : ''}`}>
                  <span class="text-white font-bold">{group.initial}</span>
                </div>
                <span class={`text-xs mt-1 ${group.active ? 'text-purple-500 font-semibold' : 'text-gray-500'}`}>{group.name}</span>
              </div>
            {/each}
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          {#each members as member}
            <div class="flex items-center p-2 bg-gray-50 rounded-lg">
              <img src="../../images/profile-1.jpg" alt="profile" class="w-10 h-10 rounded-full mr-2"/>
              <div class="flex-grow">
                <div class="text-gray-800 font-semibold">{member.name}</div>
                <div class="text-gray-500 text-sm">{member.username}</div>
              </div>
              <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 px-2 py-1 rounded-full ml-2">+</button>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
  