<script lang="ts">
  import { get } from "svelte/store";
  import { formData } from "../../../../stores/stepFormData";

  export let nextStep: () => void;

  let data = get(formData);
  let { workspaceName } = data;

  $: formData.update((currentData) => ({ ...currentData, workspaceName }));
</script>

<form on:submit|preventDefault={nextStep}>
  <div class="mb-16">
    <div class=" mb-16">
      <label
        class="block text-gray-700 text-4xl font-bold mb-2"
        for="workspace"
      >
        What's your Workspace Name?
      </label>

      <p class="text-gray-700 text-xl mb-12">
        Just a bit more info to enhance your <span class="font-bold"
          >Teamlyf</span
        > experience.
      </p>
    </div>
  </div>
  <div class="mt-16 mb-8">
    <label class="block text-gray-700 text-xl font-bold mb-2" for="name"
      >Workspace Name</label
    >
    <input
      class="block appearance-none w-full border-solid bg-white border border-gray-600 hover:border-gray-500 px-4 py-4 pr-8 rounded-xl leading-tight focus:outline-none focus:shadow-outline"
      bind:value={workspaceName}
      id="workspace"
      type="text"
      placeholder="Workspace Name"
    />
  </div>
  <div class="flex flex-col items-end mb-6">
    <button
      class="bg-primary hover:bg-purple-700 text-white font-bold text-xl py-4 px-12 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Next
    </button>
  </div>
</form>
