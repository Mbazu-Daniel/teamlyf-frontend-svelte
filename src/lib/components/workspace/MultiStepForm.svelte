<script lang="ts">
  import { progressStep, totalSteps } from "../../../stores/progressStore";
  import ProgressBar from "$lib/components/workspace/ProgressBar.svelte";

  import Step1 from "./MultiStepForm/Step1.svelte";
  import Step2 from "./MultiStepForm/Step2.svelte";
  import Step3 from "./MultiStepForm/Step3.svelte";
  import Step4 from "./MultiStepForm/Step4.svelte";

  const nextStep = () => {
    progressStep.update((n) => (n < totalSteps ? n + 1 : n));
  };
  const prevStep = () => progressStep.update((n) => (n > 1 ? n - 1 : n));
</script>

<div class="flex flex-col -mt-16">
   <ProgressBar/>
  {#if $progressStep === 1}
    <Step1 {nextStep} />
  {/if}
  {#if $progressStep === 2}
    <Step2 {prevStep} {nextStep} />
  {/if}
  {#if $progressStep === 3}
    <Step3 {prevStep} {nextStep} />
  {/if}
  {#if $progressStep === 4}
    <Step4 {prevStep} />
  {/if}
</div>
