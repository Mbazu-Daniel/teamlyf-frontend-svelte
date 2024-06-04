<script>
  export let isCollapsed;
  let generalItems = [
    { name: "Support", icon: "../../navbar/support.svg" },
    { name: "Settings", icon: "../../navbar/settings.svg" },
    { name: "Tutorials", icon: "../../navbar/tutorial.svg" },
  ];
</script>

<div class="p-4 mb-12">
  <div class="mb-4">
    <h2 class={`text-lg font-semibold ${isCollapsed ? "hidden" : "block"}`}>
      General
    </h2>
    <ul>
      {#each generalItems as item}
        <li class="flex items-center ${isCollapsed ? "justify-center" : ""} mb-4">
          <img src={item.icon} alt={item.name} class="w-6 h-6" />
          <span class={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>{item.name}</span>
        </li>
      {/each}
      <li class="flex items-center text-red-500 cursor-pointer ${isCollapsed ? "justify-center" : ""}">
        <img src="../../navbar/logout.svg" alt="Logout" class="w-6 h-6" />
        <span class={`ml-4 ${isCollapsed ? "hidden" : "block"}`}>Logout</span>
      </li>
    </ul>
  </div>
  <button
    class={`w-full bg-primary text-white py-2 rounded-lg flex items-center justify-evenly mt-4 ${isCollapsed ? "hidden" : "block"}`}
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
        fill="#fff"
      />
      <path
        d="M12 8V16M16 12H8"
        stroke="#828282"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    Invite new member
  </button>
</div>
