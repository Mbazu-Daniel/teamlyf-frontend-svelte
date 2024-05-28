<div
  class="flex flex-col justify-center bg-white w-[592px] md:w-3/4 h-[690px] p-8 rounded-lg shadow-md"
>
  <h2 class="text-gray-700 text-2xl font-bold mb-4">Create account</h2>
  <form>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email Address
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="text"
        placeholder="E.g Nigeria"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Your password"
      />
    </div>

    <div class="flex flex-col items-end mb-4">
      <a
        class="inline-block align-baseline font-bold text-sm text-primary hover:text-primary mb-12"
        href="/auth/forgot-password"
      >
        Forgot password?
      </a>
      <button
        class="bg-primary hover:bg-primary text-white font-bold w-[204px] h-[56px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign up
      </button>
    </div>

    <div class="flex space-x-4 mb-4">
      <button
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        <span class="flex items-center justify-center">
          <img src="../images/google.svg" alt="Google" class="w-6 h-6 mr-2" />
          Continue with Google
        </span>
      </button>

      <button
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        <span class="flex items-center justify-center">
          <img src="../images/github.svg" alt="GitHub" class="w-6 h-6 mr-2" />
          Continue with GitHub
        </span>
      </button>
    </div>

    <div class="text-center">
      <p class="text-gray-600">
        Already have an account? <a
          class="text-primary hover:text-primary"
          href="/auth/login">Log In</a
        >
      </p>
    </div>
  </form>
</div>
