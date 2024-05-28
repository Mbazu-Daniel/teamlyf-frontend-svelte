<script>
  import SignUpForm from "./SignUpForm.svelte";

  export let signUpFormProps = {
    title: "Create account",
  };
</script>

<div
  class="md:w-1/2  p-8 rounded-lg shadow-md flex flex-col items-center justify-center"
>
  <SignUpForm {...signUpFormProps} />
</div>
