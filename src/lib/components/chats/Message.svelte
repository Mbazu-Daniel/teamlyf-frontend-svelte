<script>

    export let dest;
    export let msg;
    export let time;
  </script>
  
  <div>
    <div class={dest === 'send' ? 'flex flex-row-reverse px-4 py-2 mb-3 gap-2' : 'flex flex-row-reverse rounded-[6px] ml-3  p-1 mb-3 gap-2 text-left'}>
      <div class='flex flex-col gap-1 text-left w-full'>
        <div >
          <div class="flex flex-row items-center gap-2">
            {#if dest=="send"}
              <div class="text-primary font-bold">You</div>
              <div class='text-[8px] leading-[15px] font-medium items-start text-[#828282]'>.{time}PM</div>
            {:else}
              <div class="text-danger font-bold">@AduraOgunlana</div>
              <div class='text-[8px] leading-[15px] font-medium items-start text-[#828282]'>.{time}PM</div>
            {/if}
          </div>
        </div>
        <div class={dest === 'send' ? 'rounded-[9px] font-normal  text-normal py-[6px] w-full' : 'rounded-[9px] text-[#4F4F4F] font-normal p-[6px] text-normal py-2 w-full'}>{msg}</div>
      </div>
      <img src="/images/profile-1.jpg" alt="profile logo" class="flex rounded-full w-10 h-10 "/>
    </div>
  </div>
  
  <style>
   
  </style>
  











	



















