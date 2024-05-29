<script lang="ts">
  import { get } from "svelte/store";
    import { formData } from "../../../../stores/stepFormData";

  export let prevStep: () => void;
  export let nextStep: () => void;

  let data = get(formData);
  let { country, state, city } = data;

  $: formData.update((currentData) => ({
    ...currentData,
    country,
    state,
    city,
  }));

  const countries = ["Nigeria", "Ghana", "Kenya"];
  const states = ["Lagos", "Abuja", "Kano"];
  const cities = ["Ikeja", "Yaba", "Victoria Island"];
</script>

<form on:submit|preventDefault={nextStep}>
  <h2 class="block text-gray-700 text-4xl font-bold mb-2">
    Where is your Workspace located?
  </h2>
  <p class="text-gray-700 text-xl mb-12">
    <span class="font-bold">Teamlyf</span> tailors your experience to resonate with
    your business
  </p>

  <div class="mb-4">
    <label class="block text-gray-700 text-xl font-bold mb-2" for="country"
      >Country</label
    >
    <select
      id="country"
      class="block appearance-none w-full bg-white border border-solid rounded-xl border-gray-700 hover:border-gray-500 px-4 py-4 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={country}
    >
      <option value="" disabled selected>Select your Country</option>
      {#each countries as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-xl font-bold mb-2" for="state"
      >State</label
    >
    <select
      id="state"
      class="block appearance-none w-full bg-white border border-solid rounded-xl border-gray-700 hover:border-gray-500 px-4 py-4 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={state}
    >
      <option value="" disabled selected>Select your state</option>
      {#each states as state}
        <option value={state}>{state}</option>
      {/each}
    </select>
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-xl font-bold mb-2" for="city"
      >City</label
    >
    <select
      id="city"
      class="block appearance-none w-full bg-white border border-solid rounded-xl border-gray-700 hover:border-gray-500 px-4 py-4 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={city}
    >
      <option value="" disabled selected>Select your City</option>
      {#each cities as city}
        <option value={city}>{city}</option>
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
      Next
    </button>
  </div>
</form>
