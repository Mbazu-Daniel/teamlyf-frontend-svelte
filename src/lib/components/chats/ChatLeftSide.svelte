<!-- ChatLeftSide.svelte -->
<script>
  import Team from "./Team.svelte";
  import Chats from "./Chats.svelte";

  export let direct
  export let updateState

  const handleClick = (check) => {
    updateState(check)
  };
</script>

<div class="bg-white p-4 w-[324px] rounded-[6px] mr-4 h-[849px] flex-25">
  <div class="h-9 w-[68px]">
    <p class="text-2xl font-bold leading-9">Chats</p>
  </div>
  <div class="w-[276px] h-5 pb-8">
    <p class="font-medium text-[14px] leading-[21px] text-[#828282]">
      Chats with your team mates here
    </p>
  </div>
  <div
    class="flex flex-row justify-between p-2 bg-purple-light h-[43px] w-[278px] rounded-[6px]"
  >
    <button
      class={`top-[6px] left-2 rounded-[3px] w-[50%] leading-[21px] text-sm cursor-pointer text-center ${!direct ? "bg-white font-bold" : ""}`}
      on:click={() => handleClick(false)}
      type="button"
    >
      Direct
    </button>
    <button
      class={`top-[6px] left-2 rounded-[3px] w-[50%] leading-[21px] text-sm cursor-pointer text-center ${direct ? "bg-white font-bold" : ""}`}
      on:click={() => handleClick(true)}
      type="button"
    >
      Team
    </button>
  </div>
  <div class="flex my-2 justify-between w-[276px] h-6 items-center">
    <div class="flex flex-row justify-between items-center">
      <img
        src="../../chats/usergroup_icon.svg"
        class="w-6 h-6"
        alt="group icon"
      />
      <p
        class="text-sm leading-[21px] font-medium w-[17px] h-[21px] px-2 mr-4 text-[#4F4F4F]"
      >
        All
      </p>
      <div
        class="bg-[#F2F2F2] text-purple w-6 h-5 text-center text-sm py-0 px-[4px] rounded-[3px] mr-1"
      >
        32
      </div>
    </div>
    <div class="flex flex-row p-2 h-6 items-center">
      <div class="cursor-pointer text-xl mr-2">
        <img
          class="w-6 h-6"
          src="../../chats/messagepanel_icon.svg"
          alt="Message panel icon"
        />
      </div>
      <p
        class="h-[21px] font-medium text-sm leading-[21px] w-11 text-[#4F4F4F]"
      >
        Latest
      </p>
      <img
        class="w-10 h-1o"
        src="../../chats/arrowdown_icon.svg"
        alt="dropdown icon"
      />
    </div>
  </div>
  <div class="overflow-y-auto h-[77%] bg-scroll">
    <!-- <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats />
      <Chats /> -->
    {#if direct === false}
      <Chats />
    {:else}
      <Team />
    {/if}
  </div>
  <div
    class="flex-end text-white bg-purple text-center w-[247px] h-[40px] left-10 p-2 rounded-[10px] mx-auto cursor-pointer place-items-center"
  >
    <span
      class="w-8 h-8 px-[4px] py-[2px] mr-2 font-bold text-[16px] fill-current bg-[#FFFFFF] rounded-[4px] text-purple"
      >+</span
    > Start new conversations
  </div>
</div>

<style>
  /* Ensure Tailwind CSS is imported in your main style file or in your project setup */
</style>
