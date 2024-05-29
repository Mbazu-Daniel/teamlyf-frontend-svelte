<script lang="ts">
  import { formData } from "../../../../stores/stepFormData";
  import { get } from "svelte/store";
  export let prevStep: () => void;

  let data = get(formData);
  let { industry } = data;

  $: formData.update((currentData) => ({ ...currentData, industry }));
  const industries = ["Technology", "Education", "Finance", "Healthcare"];
</script>

<form on:submit|preventDefault={() => alert("Form submitted!")}>
  <h2 class="text-2xl font-bold mb-2">What is your Industry?</h2>

  <div class="mb-4">
    <select
      id="industry"
      class="block appearance-none w-full border-solid bg-white border border-gray-600 hover:border-gray-500 px-4 py-4 pr-8 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
      bind:value={industry}
    >
      <option  value="" disabled selected>Select an industry</option>
      {#each industries as industry}
        <option class="text-xl" value={industry}>{industry}</option>
      {/each}
    </select>
  </div>

  <div class="flex justify-between mt-8">
    <button
      class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold text-xl py-4 px-12 rounded focus:outline-none focus:shadow-outline"
      type="button"
      on:click={prevStep}
    >
      Back
    </button>
    <button
      class="bg-primary hover:bg-purple-700 text-white font-bold text-xl py-4 px-12 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>
