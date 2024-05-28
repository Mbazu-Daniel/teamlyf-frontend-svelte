<div class="">
  <h2 class="text-gray-700 text-4xl font-bold -mt-12 mb-2">Create account</h2>

  <div class="flex justify-between mb-10 w-[160px]">
    <span class="text-xl font-medium text-gray-700"> Sign up with </span>

    <img src="../images/teamlyf-logo.svg" alt="teamyf logo" class="w-[72px]" />
  </div>

  <form>
    <div class="mb-4">
      <label class="block text-gray-700 text-xl font-bold mb-2" for="email">
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
      <label class="block text-gray-700 text-xl font-bold mb-2" for="password">
        Password
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Your password"
      />
    </div>

    <div class="flex flex-col items-end mb-6">
      <button
        class="bg-primary hover:bg-primary text-white font-bold text-xl py-4 px-12 rounded focus:outline-none focus:shadow-outline mt-6"
        type="button"
      >
        Sign Up
      </button>
    </div>

    <div class="flex space-x-4 mb-4">
      <button
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-6 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        <span class="flex items-center justify-center">
          <img src="../images/google.svg" alt="Google" class="w-6 h-6 mr-2" />
          Continue with Google
        </span>
      </button>

      <button
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-6 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        <span class="flex items-center justify-center">
          <img src="../images/github.svg" alt="GitHub" class="w-6 h-6 mr-2" />
          Continue with GitHub
        </span>
      </button>
    </div>

    <div class="text-center px-6">
      <h3 class="text-gray-600">
        Already have an account? <a
          class="text-primary hover:text-primary"
          href="/auth/login">Log In</a
        >
      </h3>
    </div>
  </form>
</div>
