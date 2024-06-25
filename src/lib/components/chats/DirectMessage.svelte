<!-- DirectMessage.svelte -->
<script>
  import ChatLeftSide from "./ChatLeftSide.svelte";
  import ChatMiddleSide from "./ChatMiddleSide.svelte";
  import ChatRightSide from "./ChatRightSide.svelte";
  // import C from "./ScheduleMeeting.svelte"

  export let direct = false;
  function updateState(newValue) {
    direct = newValue;
  }
</script>

<div class="flex flex-row w-full">
  <ChatLeftSide {direct} {updateState} />
  <ChatMiddleSide {direct} />
  <ChatRightSide {direct} />
  <!-- <C /> -->
</div>
