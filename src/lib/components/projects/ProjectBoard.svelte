<script>
  import ProjectColumn from "./ProjectColumn.svelte";
  let projects = {
    new: [
      {
        title: "ByteVibez",
        tags: "Blockchain",
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
        comments: 45,
        attachments: 6,
        priority: "Low Priority",
        thumbnailImage: "../../images/project-image.svg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 25,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 42,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "High Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
       {
        title: "ByteVibez",
        tags: "Blockchain",
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
        comments: 45,
        attachments: 6,
        priority: "Low Priority",
        thumbnailImage: "../../images/project-image.svg",
      },
    ],
    inProgress: [
      {
        title: "Grandida",
        tags: "Solidity",
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
        title: "Grandida",
        tags: "Solidity",
        progress: 100,
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
        title: "Grandida",
        tags: "Solidity",
        progress: 42,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
    blocked: [
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 0,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 0,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 0,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 42,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
      {
        title: "Grandida",
        tags: "Solidity",
        progress: 42,
        date: "17 Aug 2023",
        members: ["../../images/profile-3.jpg", "../../images/profile-4.jpg"],
        comments: 11,
        attachments: 8,
        priority: "Medium Priority",
        thumbnailImage: "../../images/profile-1.jpg",
      },
    ],
  };
</script>

<div class="flex space-x-4 overflow-x-auto p-4 min-h-screen">
  <ProjectColumn
    title="New Projects"
    count={projects.new.length}
    projects={projects.new}
    bgColor="bg-blue-500"
  />
  <ProjectColumn
    title="In Progress"
    count={projects.inProgress.length}
    projects={projects.inProgress}
    bgColor="bg-yellow-500"
  />
  <ProjectColumn
    title="Completed"
    count={projects.completed.length}
    projects={projects.completed}
    bgColor="bg-green-500"
  />
  <ProjectColumn
    title="In Review"
    count={projects.inReview.length}
    projects={projects.inReview}
    bgColor="bg-red-500"
  />
  <ProjectColumn
    title="Blocked"
    count={projects.blocked.length}
    projects={projects.blocked}
    bgColor="bg-black"
  />
</div>
