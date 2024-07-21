<script lang="ts">
	import ProjectColumn from './ProjectColumn.svelte';
	let projects = {
		new: [
			{
				title: 'ByteVibez',
				tags: 'Blockchain',
				progress: 42,
				date: '17 Aug 2023',
				members: [
					'../../images/profile-1.jpg',
					'../../images/profile-3.jpg',
					'../../images/profile-2.jpg',
					'../../images/profile-2.jpg',
					'../../images/profile-1.jpg',
					'../../images/profile-3.jpg'
				],
				comments: 45,
				attachments: 6,
				priority: 'Low Priority',
				thumbnailImage: '../../images/project-image.svg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 25,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'High Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 42,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'High Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'ByteVibez',
				tags: 'Blockchain',
				progress: 42,
				date: '17 Aug 2023',
				members: [
					'../../images/profile-1.jpg',
					'../../images/profile-3.jpg',
					'../../images/profile-2.jpg',
					'../../images/profile-2.jpg',
					'../../images/profile-1.jpg',
					'../../images/profile-3.jpg'
				],
				comments: 45,
				attachments: 6,
				priority: 'Low Priority',
				thumbnailImage: '../../images/project-image.svg'
			}
		],
		inProgress: [
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 70,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'High Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			}
		],
		completed: [
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 100,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'High Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			}
		],
		inReview: [
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 42,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			}
		],
		blocked: [
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 0,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 0,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 0,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 42,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			},
			{
				title: 'Grandida',
				tags: 'Solidity',
				progress: 42,
				date: '17 Aug 2023',
				members: ['../../images/profile-3.jpg', '../../images/profile-4.jpg'],
				comments: 11,
				attachments: 8,
				priority: 'Medium Priority',
				thumbnailImage: '../../images/profile-1.jpg'
			}
		]
	};
</script>

<div class="w-full gap-4 h-screen">
	<div class="overflow-x-scroll flex gap-4">
		<ProjectColumn
			title="New Projects"
			count={projects.new.length}
			projects={projects.new}
			bgColor="#fff"
		/>
		<ProjectColumn
			title="In Progress"
			count={projects.inProgress.length}
			projects={projects.inProgress}
			bgColor="#fff"
		/>
		<ProjectColumn
			title="Completed"
			count={projects.completed.length}
			projects={projects.completed}
			bgColor="#fff"
		/>
		<ProjectColumn
			title="In Review"
			count={projects.inReview.length}
			projects={projects.inReview}
			bgColor="#fff"
		/>
		<ProjectColumn
			title="Blocked"
			count={projects.blocked.length}
			projects={projects.blocked}
			bgColor="#fff"
		/>
	</div>
</div>
