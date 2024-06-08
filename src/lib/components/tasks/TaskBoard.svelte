<script>
  import TaskColumn from "./TaskColumn.svelte";
  let tasks = {
    new: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Low Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Low Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Low Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    inProgress: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-4.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Low Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    completed: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Grandida",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-2.jpg",
          "../../images/profile-3.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Low Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    inReview: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Medium Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    onHold: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Medium Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    onHold: [
      {
        title: "Create 3 layout examples for the desktop homepage",
        projectName: "Axie Infinity",
        progress: 42,
        date: "17 Aug 2023",
        members: [
          "../../images/profile-1.jpg",
          "../../images/profile-3.jpg",
          "../../images/profile-2.jpg",
        ],
        comments: 5,
        attachments: 1,
        priority: "Medium Priority",
        thumbnailImage: "../../images/task-image.svg",
      },
      {
        title: "Create an high fidelity design for the dashboard",
        projectName: "Axie Infinity",
        progress: 70,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
  };
</script>

<div class="flex space-x-4 overflow-x-auto p-4 min-h-screen ">
  <TaskColumn
    status="To-do Task"
    count={tasks.new.length}
    tasks={tasks.new}
    bgColor="bg-blue-500"
  />
  <TaskColumn
    status="Completed Task"
    count={tasks.completed.length}
    tasks={tasks.completed}
    bgColor="bg-green-500"
  />
  <TaskColumn
    status="In Review"
    count={tasks.inReview.length}
    tasks={tasks.inReview}
    bgColor="bg-red-500"
  />
  <TaskColumn
    status="Due Task"
    count={tasks.onHold.length}
    tasks={tasks.onHold}
    bgColor="bg-pink-500"
  />
  <TaskColumn
    status="In Progress"
    count={tasks.inProgress.length}
    tasks={tasks.inProgress}
    bgColor="bg-yellow-500"
  />
</div>
