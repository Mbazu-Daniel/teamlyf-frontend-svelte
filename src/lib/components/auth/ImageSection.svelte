<script>
  export let backgroundImage;
  export let logoImage;
  export let iconImage;
  export let title;
  export let description;
</script>

<div class=" md:w-1/2 flex flex-col justify-center items-center relative">
  <img
    src={backgroundImage}
    alt="form design"
    class="absolute inset-0 w-full h-full object-cover"
  />

  <div class="relative z-10 flex flex-col h-full w-full p-4">
    <div class="flex justify-start w-48 h-48 -mt-12">
      <img src={logoImage} alt="TeamLyf Logo" class=" object-contain" />
    </div>
    <div class=" flex justify-center items-center -mt-12">
      <img src={iconImage} alt="teamlyf briefcase icon" class="w-3/4" />
    </div>
    <div class="flex flex-col items-center justify-center -mt-16 text-center">
      <h3 class="text-gray-600 text-[40px] font-bold">
        {title}
      </h3>
      <p class=" text-gray-600 text-[24px] mt-2 m- w-[640px]">
        {description}
      </p>
    </div>
  </div>
</div>
