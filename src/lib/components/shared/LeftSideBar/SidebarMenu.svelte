<script>
  // Default active link set to "Dashboard"
  let activeLink = "Dashboard";

  function setActiveLink(link) {
    activeLink = link.name;
    console.log("Active Link:", activeLink);
  }

  // Links array
  const links = [
    { page: "workspace", name: "Dashboard", icon: "home" },
    { page: "workspace", name: "Revenue", icon: "bar_chart" },
    { page: "workspace", name: "Notifications", icon: "notifications" },
    { page: "workspace", name: "Analytics", icon: "pie_chart" },
    { page: "workspace", name: "Likes", icon: "favorite" },
    { page: "workspace", name: "Wallets", icon: "account_balance_wallet" },
  ];
</script>

<div class="mt-4">
  <h2 class="text-2xl font-bold">Overview</h2>
  <ul class="flex flex-col mt-4">
    {#each links as link}
      <li class="relative flex items-center gap-5 h-16 px-4 cursor-pointer">
        <a
          href={link.page}
          class="flex items-center gap-5 h-16 w-full transition-colors duration-300 {activeLink ===
          link.name
            ? 'active-link'
            : 'inactive-link'}"
          on:click={() => setActiveLink(link)}
          tabindex="0"
        >
          <span class="material-icons-sharp">{link.icon}</span>
          <h4>{link.name}</h4>
        </a>
        {#if activeLink === link.name}
          <div class="absolute left-0 w-1.5 h-full active-indicator"></div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .active-link {
    background-color: white;
    color: rgb(71, 7, 234); /* Primary color */
  }
  .inactive-link {
    color: #6b7280; /* Gray-500 color */
  }
  .active-indicator {
    background-color: rgb(71, 7, 234); /* Primary color */
  }
</style>
