<script>
  let read = false;
</script>

<div class="w-[276px] pt-6 top-[199px] left-6 gap-[10px]">
  <div class="w-[276px] hover:bg-stone-200 py-6 px-2">
    <div class="flex flex-row items-center justify-between mt-2 w-[260px] h-10">
      <div
        class="text-center text-2xl justify-middle font-bold rounded-lg pt-2 bg-orange-200 w-12 h-12"
      >
        B
      </div>
      <div
        class="flex flex-row items-center pl-2 justify-between w-full cursor-pointer"
      >
        <div class="flex flex-col">
          <h2 class="text-[#4F4F4F] font-semibold text-md h-[21px]">
            Backend Team
          </h2>
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
                class="rounded-full bg-stone-300 text-primary text-center text-sm py-1 px-2 mr-2"
              >
                9
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-[276px] px-2 hover:bg-stone-200 py-6">
    <div class="flex flex-row items-center justify-between  w-[260px] h-10">
      <div
        class="text-center text-2xl justify-middle font-bold rounded-lg pt-2 bg-orange-200 w-12 h-12"
      >
        D
      </div>
      <div
        class="flex flex-row items-center pl-2 justify-between w-full cursor-pointer"
      >
        <div class="flex">
          <h2 class="text-[#4F4F4F] font-bold text-normal h-[21px]">
            UI/UX Team
          </h2>
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
                class="rounded-full bg-stone-300 text-primary text-center text-sm py-1 px-2 mr-2"
              >
                9
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="flex flex-row items-center pl-1 pb-6 pt-4 w-[260px] h-[30px] gap-2 border-b-2 border-gray-300 mt-2"
    >
      <p
        class="text-[10px] pl-7 pt-[8px] leading-5 w-[248px] h-[30px] text-[#828282]"
      >
        lorem sghflk hghrguv jlaghunlkc adkflhanjdmfbvln lorem
      </p>
    </div> -->
  </div>
  <div class="w-[276px] px-2 hover:bg-stone-200 py-6">
    <div class="flex flex-row items-center justify-between  w-[260px] h-10">
      <div
        class="text-center text-2xl justify-middle font-bold rounded-lg pt-2 bg-orange-200 w-12 h-12"
      >
        D
      </div>
      <div
        class="flex flex-row items-center pl-2 justify-between w-full cursor-pointer"
      >
        <div class="flex">
          <h2 class="text-[#4F4F4F] font-bold text-normal h-[21px]">
            UI/UX Team
          </h2>
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
                class="rounded-full bg-stone-300 text-primary text-center text-sm py-1 px-2 mr-2"
              >
                9
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="flex flex-row items-center pl-1 pb-6 pt-4 w-[260px] h-[30px] gap-2 border-b-2 border-gray-300 mt-2"
    >
      <p
        class="text-[10px] pl-7 pt-[8px] leading-5 w-[248px] h-[30px] text-[#828282]"
      >
        lorem sghflk hghrguv jlaghunlkc adkflhanjdmfbvln lorem
      </p>
    </div> -->
  </div>
</div>

<style>
  /* Import Tailwind CSS here */
</style>
