<script lang="ts">
  export let isCollapsed: boolean = false;

  let activeLink = "Dashboard";

  function setActiveLink(link) {
    activeLink = link.name;
    console.log("Active Link:", activeLink);
  }

  const links = [
    {
      page: "dashboard",
      name: "Dashboard",
      icon: "../../navbar/dashboard.svg",
    },
    {
      page: "projects",
      name: "Projects",
      icon: "../../navbar/projects.svg",
    },
    { page: "tasks", name: "Tasks", icon: "../../navbar/task.svg" },
    {
      page: "chats",
      name: "Chats",
      icon: "../../navbar/chats.svg",
    },
    { page: "drive", name: "Drive", icon: "../../navbar/folder.svg" },
    {
      page: "schedules",
      name: "Schedules",
      icon: "../../navbar/schedules.svg",
    },
  ];
</script>

<div class="mt-4">
  <h2 class={`text-lg font-bold ${isCollapsed ? "hidden" : "block"}`}>
    Overview
  </h2>
  <ul class="flex flex-col mt-4">
    {#each links as link}
      <li class="relative flex items-center justify-center  gap-5 h-14 px-2 cursor-pointer">
        <a
          href={link.page}
          class="flex items-center gap-5 h-14 w-full transition-colors duration-300 {activeLink ===
          link.name
            ? 'active-link'
            : 'inactive-link'}"
          on:click={() => setActiveLink(link)}
          tabindex="0"
        >
          <img class="w-8 h-8" alt={link.name} src={link.icon} />
          <h4 class={`${isCollapsed ? "hidden" : "block"}`}>{link.name}</h4>
        </a>
        {#if activeLink === link.name}
          <div class="absolute left-0 w-1.5 h-full bg-primary"></div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .active-link {
    background-color: #f2f2f2;
    color: #9747ff;
  }
  .inactive-link {
    color: #6b7280;
  }
  .active-indicator {
    background-color: rgb(71, 7, 234);
  }
</style>
