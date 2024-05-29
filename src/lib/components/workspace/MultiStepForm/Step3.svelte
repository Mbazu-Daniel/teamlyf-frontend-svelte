<script lang="ts">
  import { get } from "svelte/store";
  import { formData } from "../../../../stores/stepFormData";
  export let prevStep: () => void;
  export let nextStep: () => void;

  let data = get(formData);
  let { numberOfUsers, hearAboutUs } = data;

  $: formData.update((currentData) => ({
    ...currentData,
    numberOfUsers,
    hearAboutUs,
  }));

  const options = ["Online Ads", "Social Media", "Friends", "Other"];
  const users = [
    "1-10 employees",
    "11-30 employees",
    "30-50 employees",
    "50-100 employees",
    "Others",
  ];
</script>

<form on:submit|preventDefault={nextStep}>
  <h2 class="block text-gray-700 text-3xl font-bold mb-2">Number of users?</h2>

  <div class="mb-10">
    <select
      id="numberOfUsers"
      class="block appearance-none w-full border-solid bg-white border border-gray-600 hover:border-gray-500 px-4 py-4 pr-8 rounded-xl leading-tight focus:outline-none focus:shadow-outlin"
      bind:value={numberOfUsers}
    >
      <option value="" disabled selected>Select workspace size</option>
      {#each users as user}
        <option class="text-xl" value={user}>{user}</option>
      {/each}
    </select>
  </div>

  <h2 class="block text-gray-700 text-3xl font-bold mb-2 mt-12">
    How did you hear about us?
  </h2>
  <div class="mb-6">
    <!-- <label class="block text-gray-700 text-sm font-bold mb-2" for="hearAboutUs">How did you hear about us?</label> -->
    <select
      id="hearAboutUs"
      class="block appearance-none w-full border-solid bg-white border border-gray-600 hover:border-gray-500 px-4 py-4 pr-8 rounded-xl leading-tight focus:outline-none focus:shadow-outlin"
      bind:value={hearAboutUs}
    >
      <option value="" disabled selected>Select an option</option>
      {#each options as option}
        <option class="text-xl" value={option}>{option}</option>
      {/each}
    </select>
  </div>

  <div class="flex justify-between">
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
      Next
    </button>
  </div>
</form>
