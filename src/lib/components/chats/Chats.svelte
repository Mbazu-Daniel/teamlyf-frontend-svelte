<script>
  let read = false;
</script>

<div class="w-[276px] pt-3 top-[199px] left-6 gap-[10px]">
  <div class="gap-2 w-[276px] h-[110px] px-2 py-4">
    <div class="flex flex-row items-center justify-between mt-2 w-[260px] h-10">
      <img
        src="/images/profile-1.jpg"
        alt="profile logo"
        class="flex rounded-full w-10 h-10"
      />
      <div
        class="flex flex-row items-center pl-2 justify-between w-full cursor-pointer"
      >
        <div class="flex flex-col">
          <h2 class="text-[#4F4F4F] font-medium text-sm w-[71px] h-[21px]">
            Marcus
          </h2>
          <div class="w-[68px]">
            <h3 class="text-[#828282] font-light text-[8px] leading-3 h-3">
              Hi
            </h3>
          </div>
        </div>
        <div class="flex flex-col justify-end place-items-end w-[42px]">
          <div
            class="w-[42px] h-[21px] text-purple font-normal text-[10px] leading-[15px] text-right"
          >
            . 10.21
          </div>
          <div>
            {#if read === true}
              <img class="" src="../../chats/check_icon.svg" alt="check icon" />
            {:else}
              <p
                class="rounded-full bg-purple text-white text-center text-sm p-[2px]"
              >
                21
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row items-center pl-1 pb-6 pt-4 w-[260px] h-[30px] gap-2 border-b-2 border-gray-300 mt-2"
    >
      <p
        class="text-[10px] pl-7 pt-[8px] leading-5 w-[248px] h-[30px] text-[#828282]"
      >
        lorem sghflk hghrguv jlaghunlkc adkflhanjdmfbvln lorem
      </p>
    </div>
  </div>
  <div class="gap-2 w-[276px] h-[110px] px-2 py-4">
    <div class="flex flex-row items-center justify-between mt-2 w-[260px] h-10">
      <img
        src="/images/profile-1.jpg"
        alt="profile logo"
        class="flex rounded-full w-10 h-10"
      />
      <div
        class="flex flex-row items-center pl-2 justify-between w-full cursor-pointer"
      >
        <div class="flex flex-col">
          <h2 class="text-[#4F4F4F] font-medium text-sm w-[71px] h-[21px]">
            Marcus
          </h2>
          <div class="w-[68px]">
            <h3 class="text-[#828282] font-light text-[8px] leading-3 h-3">
              Hi
            </h3>
          </div>
        </div>
        <div class="flex flex-col justify-end place-items-end w-[42px]">
          <div
            class="w-[42px] h-[21px] text-purple font-normal text-[10px] leading-[15px] text-right"
          >
            . 10.21
          </div>
          <div>
            {#if read === true}
              <img class="" src="../../chats/check_icon.svg" alt="check icon" />
            {:else}
              <p
                class="rounded-full bg-purple text-white text-center text-sm p-[2px]"
              >
                21
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row items-center pl-1 pb-6 pt-4 w-[260px] h-[30px] gap-2 border-b-2 border-gray-300 mt-2"
    >
      <p
        class="text-[10px] pl-7 pt-[8px] leading-5 w-[248px] h-[30px] text-[#828282]"
      >
        lorem sghflk hghrguv jlaghunlkc adkflhanjdmfbvln lorem
      </p>
    </div>
  </div>
</div>

<style>
  /* Import Tailwind CSS here */
</style>
