<template>
  <div>
    <header>
      <div class="px-10 h-38 pb-4 pt-4 bg-white flex justify-between drop-shadow-sm">
        <div class="flex space-x-14">
          <img src="/image/goteam-logo.png" class="h-10 my-auto" />
          <a href="" class="my-auto text-center text-gray-500 hover:underline">Careers</a>
          <a href="" class="my-auto text-center text-gray-500 hover:underline">Find your role</a>
        </div>
        <div>
          <form class="w-96">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
              <input
                type="search"
                id="default-search"
                class="block w-full pl-5 pr-28 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-0 focus:border-gray-300 placeholder-gray-400 py-2.5"
                placeholder="Type for job title or role"
                required
              />
              <button
                type="submit"
                class="text-white absolute right-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm h-8 pl-3.5 pr-5 pb-0.5"
              >
                <span class="i-mdi-search text-2xl -mb-2"></span>
                Search
              </button>
            </div>
          </form>
        </div>
        <div class="flex justify-end space-x-2">
          <div class="text-right text-sm">
            <p class="font-bold">Rayven Biloy</p>
            <p class="text-blue-500 hover:underline">reyvenb@gmail.com</p>
          </div>
          <div class="my-auto">
            <img src="/image/noimage.png" class="h-10 w-10 rounded-full" />
          </div>
          <div class="my-auto text-gray-400">
            <span class="i-mdi-chevron-down text-xl"></span>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
