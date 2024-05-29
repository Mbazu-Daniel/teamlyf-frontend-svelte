<script>
  import ImageSection from "./ImageSection.svelte";
  import AuthCard from "./AuthCard.svelte";
  import ProgressBar from "$lib/components/workspace/ProgressBar.svelte";
  export let authComponent;
  export let imageSectionProps;
</script>

<div class="relative rounded-lg h-screen w-screen flex flex-col md:flex-row">
  <ImageSection {...imageSectionProps} />

  <AuthCard>
  
    <svelte:component this={authComponent} />
  </AuthCard>
</div>
