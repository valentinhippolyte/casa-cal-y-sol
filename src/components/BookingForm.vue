<template>
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <form>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="firstName"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="departureDate"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="arrivalDate"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Arrival date
              </label>
              <input
                type="date"
                name="arrivalDate"
                id="arrivalDate"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="departureDate"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Departure date
              </label>
              <input
                type="date"
                name="departureDate"
                id="departureDate"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="adults"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Number of adults
              </label>
              <select
                name="adults"
                id="adults"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option v-for="n in 8" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label
                for="children"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Number of children
              </label>
              <select
                name="children"
                id="children"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option v-for="n in 8" :key="n" :value="n">{{ n - 1 }}</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>
