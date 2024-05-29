<script>
  import "../../../app.css";
  import AuthLayout from "$lib/components/auth/AuthLayout.svelte";
  import SignInForm from "$lib/components/auth/SignInForm.svelte";

  export let imageSectionProps = {
    title: "Productivity at its peak",
    description:
      "TeamLyf — where productivity meets collaboration at its peak. Elevate your work experience as TeamLyf seamlessly integrates tools and streamlines communication right at the core of your team's success.",
  };
</script>

<AuthLayout {imageSectionProps} authComponent={SignInForm} />
