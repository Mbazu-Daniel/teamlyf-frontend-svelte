<script>
  let activeLink = "Dashboard";

  const links = [
    { page: "/", name: "Dashboard", icon: "home" },
    { page: "/", name: "Revenue", icon: "bar_chart" },
    { page: "/", name: "Notifications", icon: "notifications" },
    { page: "/", name: "Analytics", icon: "pie_chart" },
    { page: "/", name: "Likes", icon: "favorite" },
    { page: "/", name: "Wallets", icon: "account_balance_wallet" },
  ];
</script>

<div class="mt-4">
   <h2 class="text-2xl font-bold">Overview</h2>
  <ul class="flex flex-col mt-4">
    {#each links as link}
      <a
        href={link.page}
        class="sidebar-link"
        on:click={() => (activeLink = link.name)}
      >
        <span class="material-icons-sharp sidebar-link-icon">{link.icon}</span>
        <h4>{link.name}</h4>
      </a>
    {/each}
  </ul>
</div>
