<!-- DirectMessage.svelte -->
<script>
    import ChatLeftSide from "./ChatLeftSide.svelte";
    import ChatMiddleSide from "./ChatMiddleSide.svelte"
    import ChatRightSide from "./ChatRightSide.svelte"
    
    export let direct = false;
    function updateState(newValue) {
      direct = newValue
    }

  </script>
  
  <div class='flex flex-row justify-center my-8 z-10 w-full'>
    <ChatLeftSide {direct} {updateState}/>
    <ChatMiddleSide {direct} />
    <ChatRightSide />
  </div>