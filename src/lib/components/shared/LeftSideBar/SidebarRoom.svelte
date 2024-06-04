<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  export let isCollapsed;

  let rooms = [
    { name: "UI/UX Team", color: "bg-yellow-400", initial: "D" },
    { name: "Backend Team", color: "bg-green-400", initial: "B" },
    { name: "Frontend Team", color: "bg-blue-400", initial: "F" },
    { name: "Common Room", color: "bg-red-400", initial: "C" },
  ];
</script>

<div class="p-4 mt-12">
  <div class="flex justify-between items-center mb-4">
    <h2 class={`text-lg font-semibold ${isCollapsed ? "hidden" : "block"}`}>Rooms</h2>
    <a href="groups" class={`text-purple-500 text-sm ${isCollapsed ? "hidden" : "block"}`}>View all teams</a>
  </div>
  <ul>
    {#each rooms as room}
      <li class="flex items-center mb-4">
        <Avatar.Root
          class={`w-8 h-8 flex items-center justify-center rounded-full text-white ${room.color}`}
        >
          <Avatar.Fallback>{room.initial}</Avatar.Fallback>
        </Avatar.Root>
        <span class={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>{room.name}</span>
      </li>
    {/each}
    <button
      class={`border border-solid border-primary p-2 rounded-lg flex justify-evenly items-center w-full ${isCollapsed ? "hidden" : "block"}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
          fill="#D9D9D9"
        />
        <path
          d="M12 8V16M16 12H8"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      Create new team
    </button>
  </ul>
</div>
