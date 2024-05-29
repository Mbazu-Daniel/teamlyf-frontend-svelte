<script lang="ts">
  import { progressStep, totalSteps } from "../../../stores/progressStore";

  $: progress = ($progressStep / totalSteps) * 100;
</script>

<div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
  <div
    class="bg-primary h-2.5 rounded-full"
    style="width: {progress}%"
  ></div>
</div>
