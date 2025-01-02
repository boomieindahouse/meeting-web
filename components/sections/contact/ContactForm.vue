<template>
    <section class="bg-primarybg text-white py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Title -->
        <h1
          class="h1-section sm:h3-res text-transparent bg-clip-text bg-grad-text"
        >
          Drop Us a Line
        </h1>
        <p class="sm:p-res mb-8 text-lg sm:text-xl text-white">
          ติดต่อเราได้โดยใช้แบบฟอร์มนี้และเราจะติดต่อกลับหาคุณในเร็ว ๆ นี้
        </p>
  
        <!-- Form -->
        <form class="mt-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Name -->
            <div>
              <label class="block text-left text-white mb-1">
                Your Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="w-full bg-secondbg text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
              />
            </div>
            <!-- Email -->
            <div>
              <label class="block text-left text-white mb-1">
                Your Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                class="w-full bg-secondbg text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
              />
            </div>
            <!-- Phone -->
            <div>
              <label class="block text-left text-white mb-1">
                Your Phone <span class="text-red-500">*</span>
              </label>
              <input
                type="tel"
                class="w-full bg-secondbg text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
              />
            </div>
          </div>
  
          <!-- Message -->
          <div>
            <label class="block text-left text-white mb-1">
              Your Message
            </label>
            <textarea
              rows="5"
              class="w-full bg-secondbg text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-turqoise focus:outline-none"
            ></textarea>
          </div>
  
          <!-- Submit Button -->
          <button
            type="submit"
            class="bg-turqoise hover:bg-cyan-600 text-white font-semibold py-2 px-8 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </template>
  