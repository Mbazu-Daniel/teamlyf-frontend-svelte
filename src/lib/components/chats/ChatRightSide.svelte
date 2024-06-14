<script>
  export let direct 
</script>

{#if direct === false}
<div
  class="bg-white h-[849px] px-4 py-5 w-[335px] rounded-[6px] mr-4 mb-2 flex-25"
>
  <div class="flex flex-col items-center justify-center gap-2">
    <img
      src="/images/profile-1.jpg"
      alt="profile logo"
      class="flex rounded-full w-20 h-20"
    />
    <div class="text-[16px] text-[#4F4F4F] font-medium leading-7">
      Adrian O.
    </div>
    <div class="font-normal text-sm pb-2 leading-[18px] text-[#B8139D]">
      @AduraOgunlana
    </div>
    <div>
      <p
        class="font-[600] text-sm pb-2 pt-2 leading-[18px] text-[#4F4F4F] text-center"
      >
        Product Design Lead
      </p>
      <p
        class="font-normal text-xs pb-2 pt-2 leading-[18px] text-[#828282] text-center"
      >
        10AM in Lagos, Nigeria
      </p>
    </div>
  </div>

  <div class="flex flex-row items-center justify-center gap-12 my-4">
    <div class="flex flex-col gap-2">
      <img src="../../chats/phone_icon.svg" alt="pnone icon" />
      <p class="font-medium text-[14px] leading-[21px] text-[#828282]">Call</p>
    </div>
    <div class="flex flex-col gap-1">
      <img src="../../chats/video_icon.svg" alt="video icon" />
      <p class="font-medium text-[14px] leading-[21px] text-[#828282]">Video</p>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-4 py-4">
    <div
      class="flex justify-between items-center gap-20 ring-2 ring-stone-300 rounded-[7px] text-center p-2"
    >
      <div class="font-bold text-gray-500">Active Project</div>
      <div class="flex gap-1">
        <div
          class="rounded-[3px] bg-[#FFECB3] font-bold py-2 w-10 h-10 px-2 text-center"
        >
          D
        </div>
        <div
          class="font-bold rounded-[3px] bg-[#F1C0C3] py-2 px-2 w-10 h-10 text-center"
        >
          C
        </div>
      </div>
    </div>
    <div
      class="flex justify-between items-center gap-20 ring-2 ring-stone-300 rounded-lg text-center p-2"
    >
      <div class="font-bold text-gray-500">Rooms joined</div>
      <div class="flex gap-1">
        <div
          class="rounded-[3px] bg-[#FFECB3] font-bold py-2 px-2 w-10 h-10 text-center"
        >
          D
        </div>
        <div
          class="font-bold rounded-[3px] bg-[#F1C0C3] px-2 py-2 w-10 h-10 text-center"
        >
          C
        </div>
      </div>
    </div>
  </div>

  <div class="searchbar w-[279.24px] my-4 rounded-[7px] relative">
    <img
      src="../../chats/search_icon.svg"
      alt="search icon"
      class="w-10 h-10 absolute top-[50%] left-[30px] translate-x-[-50%] translate-y-[-50%] text-[30px] my-auto text-stone-500"
    />
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search for files..."
      class="rounded-[7px] border-none block outline-none w-full h-full ring-1 ring-inset ring-gray-300 shadow-md pointer-events-auto px-8 py-3 ps-[60px]"
    />
  </div>

  <div class="flex flex-col gap-1 my-3">
    <div
      class="flex flex-row justify-between items-center hover:border-b-2 text-[#4F4F4F] border-gray-200 my-1 p-2"
    >
      <div class="flex flex-row gap-2 items-center font-medium">
        <img src="../../chats/info_icon.svg" alt="info icon" />
        Information
      </div>
      <img
        class="w-5 h-5"
        src="../../chats/bigdropdown_icon.svg"
        alt="dropdown icon"
      />
    </div>
    <div
      class="flex flex-row justify-between items-center hover:border-b-2 text-[#4F4F4F] border-gray-200 my-1 p-2"
    >
      <div class="flex flex-row gap-2 items-center font-medium">
        <img src="../../chats/phone_icon.svg" alt="phone icon" />
        Phone
      </div>
      <p class="font-medium text-2 leading-5">+2349095437381</p>
    </div>
    <div
      class="flex flex-row justify-between items-center hover:border-b-2 text-[#4F4F4F] border-gray-200 my-1 p-2"
    >
      <div class="flex flex-row gap-2 items-center font-medium">
        <img src="../../chats/mail_icon.svg" alt="mail icon" />
        Email
      </div>
      <p class="text-xs">AduraOgunlana@gmail.com</p>
    </div>
  </div>

  <div class="flex flex-row justify-between items-center py-4 text-[#4F4F4F]">
    <div class="flex flex-row gap-4 px-2">
      <img class="w-8 h-9" src="../../chats/share_icon.svg" alt="share icon" />
      <p class="text-[13px]">Shared media, links and docs</p>
    </div>
    <div class="flex flex-row gap-1 justify-center items-center">
      <p class="text-sm">102</p>
      <img
        class="h-[10px] w-2"
        src="../../chats/arrowright_icon.svg"
        alt="arrow right icon"
      />
    </div>
  </div>
</div>
{:else}
<div
  class="bg-white h-[849px] px-4 py-5 w-[335px] rounded-[6px] mr-4 mb-2 flex-25"
>
  <div class="flex flex-col items-center justify-center gap-2">
    <div class="rounded-md w-24 h-24 items-center text-center bg-yellow-200 pt-3 text-7xl">
      D
    </div>
    <div class="text-[16px] text-[#4F4F4F] font-medium leading-7">
      UI/UX Team
    </div>
    <div class="font-normal text-sm pb-2 leading-[18px] text-gray-light">
     8 members
    </div>
    <div>
      <p
        class="font-normal text-xs pb-2 pt-2 leading-[18px] text-[#828282] text-center"
      >
        Room created 10:00AM 12/03/2024
      </p>
    </div>
  </div>

  <div class="flex flex-row items-center justify-center gap-12 my-4">
    <div class="flex flex-col gap-2">
      <img src="../../chats/phone_icon.svg" alt="pnone icon" />
      <p class="font-medium text-[14px] leading-[21px] text-[#828282]">Call</p>
    </div>
    <div class="flex flex-col gap-1">
      <img src="../../chats/video_icon.svg" alt="video icon" />
      <p class="font-medium text-[14px] leading-[21px] text-[#828282]">Video</p>
    </div>
  </div>

  <div class="flex gap-2 p-4 items-center w-64 mx-auto rounded-lg text-gray-dark ring-2 ring-inset ring-gray-200">
    Room Member
    <img src="../../chats/members_icon.svg" class="w-24" alt="members">
  </div>

  <div class="searchbar w-[279.24px] my-4 rounded-[7px] relative">
    <img
      src="../../chats/search_icon.svg"
      alt="search icon"
      class="w-10 h-10 absolute top-[50%] left-[30px] translate-x-[-50%] translate-y-[-50%] text-[30px] my-auto text-stone-500"
    />
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search for files..."
      class="rounded-[7px] border-none block outline-none w-full h-full ring-1 ring-inset ring-gray-300 shadow-md pointer-events-auto px-8 py-3 ps-[60px]"
    />
  </div>

 

  <div class="flex flex-row justify-between items-center py-4 text-[#4F4F4F]">
    <div class="px-2">
      <p class="text-[14px] font-medium text-gray-dark">Shared media, links and docs</p>
    </div>
  </div>
</div>
{/if}

<style>
  /* Import Tailwind CSS here */
</style>
