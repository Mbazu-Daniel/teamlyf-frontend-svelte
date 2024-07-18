<script>
    export let dest;
    export let msg;
    export let time;
  </script>
  
  <div>
    <div class={dest === 'send' ? 'flex flex-row ml-auto w-min px-4 py-2 mb-3 gap-2' : 'flex flex-row-reverse rounded-[6px] ml-3 w-min p-1 mb-3 gap-2 text-left'}>
      <div class='flex flex-col gap-1 text-left w-full'>
        <div class={dest === 'send' ? 'rounded-[9px] bg-primary font-normal text-white text-sm py-[6px] px-3 w-max max-w-sm' : 'rounded-[9px] bg-gray-200 text-[#4F4F4F] font-normal p-[6px] text-sm px-3 py-2 w-max max-w-sm'}>{msg}</div>
        <div class='text-[10px] leading-[15px] font-medium items-start text-[#828282]'>{time}</div>
      </div>
      <img src="/images/profile-1.jpg" alt="profile logo" class="flex rounded-full w-10 h-10 "/>
    </div>
  </div>
  
  <style>
    /* Import Tailwind CSS here */
  </style>
  