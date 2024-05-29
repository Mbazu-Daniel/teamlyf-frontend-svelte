<script lang="ts">
  import "../../../app.css";
  import MultiStepForm from "$lib/components/workspace/MultiStepForm.svelte";
  import AuthLayout from "$lib/components/auth/AuthLayout.svelte";


  let imageSectionProps = {
    title: "Productivity at its peak",
    description:
      "Teamlyf — where productivity meets collaboration at its peak. Elevate your work experience as Teamlyf seamlessly integrates tools and streamlines communication right at the core of your team's success.",
  };
</script>

<main class="flex flex-col items-center justify-center min-h-screen p-4">

  <AuthLayout {imageSectionProps} authComponent={MultiStepForm} />
</main>
