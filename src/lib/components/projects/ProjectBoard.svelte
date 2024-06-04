<script>
  import ProjectColumn from './ProjectColumn.svelte';
  let projects = {
    new: [
      {
        title: "ByteVibez",
        tags: "Blockchain",
        progress: 42,
        date: "17 Aug 2023",
        members: ["member1.jpg", "member2.jpg"],
        comments: 45,
        attachments: 6,
        priority: "Low Priority",
        imageUrl: "image1.jpg"
      },
      // Add more projects here...
    ],
    inProgress: [
      // Projects for In Progress
    ],
    completed: [
      // Projects for Completed
    ],
    onHold: [
      // Projects for On Hold
    ]
  };
</script>

<div class="flex space-x-4 bg-slate-800 overflow-x-auto">
  <ProjectColumn title="New Project" count={projects.new.length} projects={projects.new} bgColor="bg-primary" />
  <ProjectColumn title="In Progress" count={projects.inProgress.length} projects={projects.inProgress} bgColor="bg-yellow-500" />
  <ProjectColumn title="Completed" count={projects.completed.length} projects={projects.completed} bgColor="bg-green-500" />
  <ProjectColumn title="On Hold" count={projects.onHold.length} projects={projects.onHold} bgColor="bg-red-500" />
</div>
