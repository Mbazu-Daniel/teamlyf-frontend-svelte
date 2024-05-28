<script>
  import ImageSection from "./ImageSection.svelte";
  import AuthForm from "./AuthForm.svelte";

  export let imageSectionProps = {
    backgroundImage: "../images/form-design.svg",
    logoImage: "../images/teamlyf-logo.svg",
    iconImage: "../images/productivity.svg",
    title: "Productivity at its peak",
    description:
      "TeamLyf — where productivity meets collaboration at its peak. Elevate your work experience as TeamLyf seamlessly integrates tools and streamlines communication right at the core of your team's success.",
  };
</script>

<div
  class="relative p-6 rounded-lg h-screen w-screen flex flex-col md:flex-row"
>
  <ImageSection {...imageSectionProps} />
  <AuthForm />
</div>
