<script>
  import Message from "./Message.svelte";
  import { writable } from "svelte/store";

  export let direct
  // export let updateState;

  // function handleChange(event) {
  //   updateState(event.target.value);
  // }

  // let message;
  // if (direct === false) {
  //   message = 'false'
  // } else {
  //   message = 'true'
  // }

  let msg = writable("");

  const handleMsgChange = (event) => {
    msg.set(event.target.value);
  };
</script>

<div class="flex-50 mr-4 h-[849px] pt-7 bg-white w-[600px] rounded-[6px]">
  {#if direct === false }
    <div class="flex flex-row justify-between m-5">
      <div class="flex flex-row gap-1 items-center">
        <img
          src="/images/profile-1.jpg"
          alt="profile logo"
          class="rounded-full w-20 h-20"
        />
        <div>
          <h2 class="text-xs font-medium leading-7">Adura O.</h2>
          <p class="font-light text-xs pb-2 leading-[12px] text-[#6e5454]">
            @AduraOgunlana
          </p>
        </div>
      </div>
  
      <div class="flex flex-row justify-center gap-4 my-2 py-3">
        <div
          class="flex justify-between items-center gap-4 rounded-lg px-4 ring-2 ring-stone-300 h-12 bg-purple-light"
        >
          <div
            class="bg-stone-300 text-stone-500 font-semibold px-[4px] py-[1px] text-center rounded-[4px]"
          >
            +
          </div>
          <div class="text-stone-500">Add to a team</div>
        </div>
        <div
          class="flex justify-center flex-center py-[4px] px-[4px] ring-2 bg-purple-light ring-stone-300 h-12 rounded-lg text-center"
        >
          <img
            class="w-9 h-9 items-center text-stone-300"
            src="../../chats/search_icon.svg"
            alt="search icon"
          />
        </div>
        <div class="py-2 h-12">
          <img
            class="items-center justify-center py-[7px] rotate-90"
            src="../../chats/threedot_icon.svg"
            alt="more icon"
          />
        </div>
      </div>
    </div> 
    <div>
      <div class="mx-4 mt-6 mb-2">
        <div class="flex flex-row gap-1 items-center">
          <img
            src="/images/profile-1.jpg"
            alt="profile logo"
            class="rounded-full w-12 h-12 mb-3"
          />
          <div>
            <h2 class="text-lg font-medium leading-7">Adura O.</h2>
            <p class="font-light text-sm pb-2 leading-[12px] text-[#828282]">
              @AduraOgunlana
            </p>
          </div>
        </div>
        <p class="font-md text-[10px] leading-4">
          This is the beginning of your direct message history with <span
            class="bg-[#EDC4E7] rounded-[10px] py-2 px-4 ml-2 w-[50px] h-[12px] text-purple"
            >@AduraOgunlana</span
          >
        </p>
      </div>
      <span class="mx-4 text-[10px] font-md text-[#828282] leading-4 mb-3"
        >20/06/2023 .10:16 AM</span
      >
    </div>
    {:else}
    <div class="flex flex-row justify-between m-5">
      <div class="flex flex-row gap-1 items-center">
        <div class="flex flex-row gap-2 items-center">
          <div class="rounded-md w-10 h-10 items-center text-center bg-yellow-200 text-4xl mb-3">
            D
          </div>
          <div>
            <p class="text-xl font-semibold leading-7">UI/UX Team</p>
            <p class="font-light text-medium pb-2 leading-[12px] text-gray-light">
              8 members
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center gap-4 my-2 py-3">
        <div
        class="flex justify-center flex-center py-[4px] px-[4px] ring-2 bg-purple-light ring-stone-300 h-12 rounded-lg text-center"
      >
        <img
          class="w-9 h-9 items-center text-stone-300"
          src="../../chats/search_icon.svg"
          alt="search icon"
        />
      </div>
      <div class="py-2 h-12">
        <img
          class="items-center justify-center py-[7px] rotate-90"
          src="../../chats/threedot_icon.svg"
          alt="more icon"
        />
      </div>
      </div>
    </div>
  {/if}

  <div class="h-[79%] p-7 overflow-y-auto bg-scroll w-full">
    <Message dest="send" msg="Hi" time="10.20" />
    <Message
      dest="recieve"
      msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, soluta temporibus quibusdam, modi quo illo suscipit nostrum ad quae dicta nemo blanditiis, vel praesentium quia. Odio at quaerat minus?"
      time="10.22"
    />
    <Message dest="send" msg="Hi my beloved programmer" time="10.20" />
    <Message
      dest="recieve"
      msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, soluta temporibus quibusdam, modi quo illo suscipit nostrum ad quae dicta nemo blanditiis, vel praesentium quia. Odio at quaerat minus?"
      time="10.22"
    />
    <Message
      dest="send"
      msg="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda, soluta temporibus quibusdam, modi quo illo suscipit nostrum ad quae dicta nemo blanditiis, vel praesentium quia. Odio at quaerat minus?"
      time="10.20"
    />
    <Message dest="recieve" msg="Hello" time="10.22" />
    <Message dest="send" msg="Hi" time="10.20" />
    <Message dest="recieve" msg="Hello" time="10.22" />
    <Message dest="recieve" msg="Hello world" time="10.22" />
  </div>

  <div class="bg-white h-[129px] rounded-[10px] p-2">
    <div class="border-2 border-gray-400 rounded-[10px] p-3">
      <div>
        <input
          class="outline-none border-none w-full h-[57px] text-[#4F4F4F] font-normal leading-[21px] text-[14px]"
          bind:value={$msg}
          on:input={handleMsgChange}
        />
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center gap-3">
          <img
            class="cursor-pointer"
            src="../../chats/camera_icon.svg"
            alt="camera icon"
          />
          <img
            class="w-10 h-10"
            src="../../chats/smiley_icon.svg"
            alt="smiley icon"
          />
          <img
            class="cursor-pointer"
            src="../../chats/clipboard_icon.svg"
            alt="clipboard icon"
          />
        </div>
        <div class="flex flex-row items-center gap-3">
          {#if $msg.length > 0}
            <img
              class="cursor-pointer"
              src="../../chats/microphone_icon.svg"
              alt="microphone icon"
            />
          {:else}
            <img
              src="../../chats/send_icon.svg"
              class="cursor-pointer"
              alt="send icon"
            />
          {/if}
          <div class="font-medium text-[18px] text-gray-300">|</div>
          <img
            class="cursor-pointer"
            src="../../chats/threedot_icon.svg"
            alt="more icon"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Import Tailwind CSS here */
</style>
