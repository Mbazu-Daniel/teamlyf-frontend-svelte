<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { createEventDispatcher } from "svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import { onMount } from "svelte";


  const dispatch = createEventDispatcher();
  export let task = null;

  let editingDescription = false;
  let expandedDescription = false;
  let updatedDescription = task.description;
  let descriptionElement;

  const statuses = [
    { label: "To-do", color: "bg-purple-500", icon: "../../icons/check.svg" },
    {
      label: "In progress",
      color: "bg-yellow-500",
      icon: "../../icons/check.svg",
    },
    { label: "On hold", color: "bg-red-500", icon: "../../icons/check.svg" },
    {
      label: "Completed",
      color: "bg-green-500",
      icon: "../../icons/check.svg",
    },
  ];

  function closeModal() {
    dispatch("close");
  }

  function startEditing() {
    editingDescription = true;
    updatedDescription = task.description;
    setTimeout(() => {
      if (descriptionElement) {
        descriptionElement.focus();
      }
    }, 0);
  }

  function saveDescription() {
    task.description = updatedDescription;
    editingDescription = false;
  }

  function toggleDescription() {
    expandedDescription = !expandedDescription;
  }

  function handleClickOutside(event) {
    if (descriptionElement && !descriptionElement.contains(event.target)) {
      saveDescription();
    }
  }

  function updateStatus(status) {
    task.status = status.label;
  }

  onMount(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });
</script>

<div
  class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
>
  <div
    class="bg-white rounded-3xl shadow-lg w-[1440px] overflow-hidden h-[750px]"
  >
    <div class="flex justify-between shadow-inner border border-solid">
      <div class="bg-green-300">
        <!-- Optional: Add something here if needed -->
      </div>
      <div class="flex items-center p-6 space-x-8">
        <span class="text-gray-800 text-xl">Created on {task.date}</span>
        <button>
          <img src="../../tasks/edit-pen.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img src="../../tasks/file.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img src="../../tasks/refresh.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img
            src="../../tasks/reminder-clock.svg"
            alt="see tasks"
            class="w-6 h-6"
          />
        </button>
        <button>
          <img src="../../tasks/pin.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img src="../../tasks/copy.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img src="../../tasks/undo.svg" alt="see tasks" class="w-6 h-6" />
        </button>
        <button>
          <img
            src="../../tasks/trash-icon.svg"
            alt="see tasks"
            class="w-6 h-6"
          />
        </button>
        <button on:click={closeModal} class="text-gray-600 hover:text-gray-800">
          <img src="../../tasks/close.svg" alt="Close" class="w-8 h-8" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2">
      <div class="p-8 m-6">
        <div class="flex items-center">
          <span class="flex items-center bg-gray-100 py-2 px-2 rounded-l-3xl">
            <img
              src="../../tasks/file.svg"
              alt="project"
              class="w-8 h-8 mr-2"
            />
            <h3 class="text-xl font-bold text-gray-500 pr-4">{task.project}</h3>
          </span>
          <h3
            class="text-xl font-bold text-gray-500 bg-purple-100 py-2.5 px-2 rounded-r-3xl"
          >
            {task.taskId}
          </h3>
        </div>
        <div class="flex justify-between items-center py-4 border-b">
          <h2 class="text-primary text-4xl font-bold">{task.taskName}</h2>
        </div>

        <div class="bg-purple-100 border border-solid p-2 rounded-xl mt-4">
          {#if editingDescription}
            <textarea
              bind:this={descriptionElement}
              class="w-full p-2 border rounded"
              bind:value={updatedDescription}
            />
          {:else}
            <div class="flex items-center">
              <p
                class="text-base text-gray-600 cursor-pointer flex-1"
                on:click={startEditing}
              >
                {expandedDescription
                  ? task.description
                  : task.description.split("\n")[0]}
              </p>
              <button on:click={toggleDescription} class="ml-2">
                <img
                  src="../../navbar/dropdown.svg"
                  alt="Toggle description"
                  class="w-6 h-6"
                />
              </button>
            </div>
          {/if}
        </div>

        <div class="py-4">
          <div class="mb-4">
            <p class="text-base text-gray-600">Status:</p>
            <DropdownMenu.Root>
            </DropdownMenu.Root>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-600">Assignee:</p>
            <div class="flex items-center">
              {#each task.assignees as assignee}
                <img
                  src={assignee}
                  alt="Assignee"
                  class="w-8 h-8 rounded-full border-2 border-white -ml-2"
                />
              {/each}
            </div>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-600">Due Date:</p>
            <div class="flex items-center bg-blue-100 py-1 px-2 rounded-3xl">
              <img
                src="../../images/clock.svg"
                alt="Due date"
                class="w-6 h-6 mr-2"
              />
              <span>{task.date}</span>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-sm text-gray-600">Priority:</p>
            <p class="font-medium">{task.priority}</p>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Subtasks</h3>
          <ul>
            <li class="flex items-center mb-2">
              <input type="checkbox" class="mr-2" />
              <span>Light mode</span>
            </li>
            <li class="flex items-center mb-2">
              <input type="checkbox" class="mr-2" />
              <span>Dark mode</span>
            </li>
          </ul>
          <h3 class="text-lg font-semibold mb-2">Attachments</h3>
          <ul>
            <li class="flex items-center mb-2">
              <input type="checkbox" class="mr-2" />
              <span>Design System</span>
            </li>
          </ul>
        </div>

        <div class="p-4 border-t">
          <button
            on:click={closeModal}
            class="bg-blue-500 text-white px-4 py-2 rounded-md">Close</button
          >
        </div>
      </div>

      <div class="bg-purple-100"></div>
    </div>
  </div>
</div>

<style>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }
</style>
