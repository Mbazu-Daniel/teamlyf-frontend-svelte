<script lang="ts">
  import TaskModal from "./TaskModal.svelte";
  import { onMount } from "svelte";
  let tasks = [
    {
      taskId: "byt00001",
      taskName: "Task management dashboard design",
      project: "ByteVibez",
      description:
        "Design the dashboard for task management for users, this should include categories like to-do task, in progress, on hold and completed tasks",
      assignees: [
        "../../images/profile-1.jpg",
        "../../images/profile-3.jpg",
        "../../images/profile-2.jpg",
      ],
      date: "17 Aug 2023",
      comments: 5,
      attachments: 3,
      priority: "Low Priority",
      status: "In Review",
    },
    {
      taskId: "byt00002",
      taskName: "Create 3 layout examples for the desktop homepage",
      project: "Grandida",
      description:
        "Design the dashboard for task management for users, this should include categories like to-do task, in progress, on hold and completed tasks",
      assignees: [
        "../../images/profile-1.jpg",
        "../../images/profile-3.jpg",
        "../../images/profile-2.jpg",
      ],
      date: "17 Aug 2023",
      comments: 5,
      attachments: 3,
      priority: "Low Priority",
      status: "In Review",
    },
    {
      taskId: "byt00003",
      taskName: "Create 3 layout examples for the desktop homepage",
      project: "ByteVibez",
      description:
        "Design the dashboard for task management for users, this should include categories like to-do task, in progress, on hold and completed tasks",
      assignees: [
        "../../images/profile-1.jpg",
        "../../images/profile-3.jpg",
        "../../images/profile-2.jpg",
        "../../images/profile-2.jpg",
        "../../images/profile-2.jpg",
      ],
      date: "17 Aug 2023",
      comments: 5,
      attachments: 3,
      priority: "Low Priority",
      status: "In Review",
    },
    // Add more task objects as needed
  ];

  let selectedTask = null;

  function openTaskModal(task) {
    selectedTask = task;
  }

  function closeTaskModal() {
    selectedTask = null;
  }
</script>

<table class="min-w-full bg-white">
  <thead>
    <tr class="bg-gray-100">
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Task Name</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Project</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Assignee</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Priority</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Status</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
        >Due Date</th
      >
      <th
        class="py-2 px-4 border-b-2 border-gray-200 text-left text-base font-semibold text-gray-600"
      ></th>
    </tr>
  </thead>
  <tbody>
    {#each tasks as task}
      <tr
        class="border-b border-gray-200 cursor-pointer"
        on:click={() => openTaskModal(task)}
      >
        <td class="py-4 px-4 text-sm text-gray-800">{task.taskName}</td>
        <td class="py-4 px-4 text-sm text-gray-800">{task.project}</td>
        <td class="py-4 px-4 text-sm text-gray-800">
          <div class="flex items-center">
            {#each task.assignees.slice(0, 3) as assignee}
              <img
                src={assignee}
                alt="Assignee"
                class="w-6 h-6 rounded-full border-2 border-white -ml-2"
              />
            {/each}
            {#if task.assignees.length > 3}
              <span class="ml-2 text-gray-500"
                >+{task.assignees.length - 3}</span
              >
            {/if}
          </div>
        </td>
        <td class="py-4 px-4 text-sm text-gray-800">{task.priority}</td>
        <td class="py-4 px-4 text-sm text-gray-800">{task.status}</td>
        <td class="py-4 px-4 text-sm text-gray-800 w-[125px]">
          <div class="flex items-center bg-blue-100 py-1 px-2 rounded-3xl">
            <img
              src="../../images/clock.svg"
              alt="Due date"
              class="w-6 h-6 mr-2"
            />
            <span>{task.date}</span>
          </div>
        </td>
        <td class="py-4 px-4 text-sm text-gray-800">
          <div class="flex space-x-2">
            <span class="flex items-center bg-gray-300 rounded-3xl p-1">
              <img
                src="../../images/subtasks.svg"
                alt="Subtasks"
                class="w-6 h-6"
              />
            </span>
            <span class="flex items-center">
              <img
                src="../../images/comments.svg"
                alt="Comments"
                class="w-7 h-7"
              />
              {task.comments}
            </span>
            <span class="flex items-center">
              <img
                src="../../images/attachments.svg"
                alt="Attachments"
                class="w-6 h-6"
              />
              {task.attachments}
            </span>
            <button class="px-2 py-1 bg-primary text-white rounded-md">✓</button
            >

            <button>
              <img src="../../images/elipsis.svg" alt="More" class="w-7 h-7" />
            </button>
          </div>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

{#if selectedTask}
  <TaskModal task={selectedTask} on:close={closeTaskModal} />
{/if}
