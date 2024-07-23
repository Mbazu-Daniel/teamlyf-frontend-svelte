<script>
  import ChatLeftSide from "./ChatLeftSide.svelte";
  import ChatMiddleSide from "./ChatMiddleSide.svelte";
  import ChatRightSide from "./ChatRightSide.svelte";
  

  export let direct = false;
  function updateState(newValue) {
    direct = newValue;
  }
</script>
<!-- add w-full to all sides -->
<div class="flex flex-row w-full h-full">
  <ChatLeftSide {direct} {updateState} />
  <ChatMiddleSide {direct} />
  <!-- <ChatRightSide {direct} /> -->
</div>
