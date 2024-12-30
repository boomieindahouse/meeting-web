<template>
    <section class="bg-secondbg py-16">
      <div class="container mx-auto px-4">
        <div class="overflow-hidden">
          <!-- Grid Section -->
          <div class="grid grid-cols-1 md:grid-cols-2">
            <!-- Contact Details (อยู่ด้านบนใน mobile) -->
            <div class="bg-white p-8 lg:p-12 md:rounded-r-lg md:rounded-none" style="border:0; border-top-left-radius: 10px; border-bottom-left-radius: 10px;">
              <div class="max-w-md">
                <!-- Logo -->
                <img src="/assets/img/logo2.png" alt="Meeting Creative" class="h-10 mb-8" />
  
                <!-- Address -->
                <div class="flex items-start gap-6 mb-8">
                  <div class="text-turqoise flex-shrink-0">
                    <Icon icon="basil:location-outline" class="text-4xl" />
                  </div>
                  <p class="text-gray-700 text-lg">
                    555/126 ศุภาลัย เบลล่า หมู่ 4 ต.จอหอ อ.เมือง จ.นครราชสีมา 30310
                  </p>
                </div>
  
                <!-- Facebook -->
                <div class="flex items-center gap-6 mb-8">
                  <div class="text-turqoise flex-shrink-0">
                    <Icon icon="mdi:facebook" class="text-4xl" />
                  </div>
                  <a href="https://facebook.com/MeetingCreative" class="text-gray-700 text-lg hover:text-teal-600 transition-colors">
                    Meeting Creative
                  </a>
                </div>
  
                <!-- Line -->
                <div class="flex items-center gap-6 mb-8">
                  <div class="text-turqoise flex-shrink-0">
                    <Icon icon="ri:line-fill" class="text-4xl" />
                  </div>
                  <a href="#" class="text-gray-700 text-lg hover:text-teal-600 transition-colors">
                    Line
                  </a>
                </div>
  
                <!-- Phone -->
                <div class="flex items-center gap-6 mb-8">
                  <div class="text-turqoise flex-shrink-0">
                    <Icon icon="line-md:phone" class="text-4xl" />
                  </div>
                  <a href="tel:044-002221" class="text-gray-700 text-lg hover:text-teal-600 transition-colors">
                    044-002221
                  </a>
                </div>
  
                <!-- Email -->
                <div class="flex items-center gap-6">
                  <div class="text-turqoise flex-shrink-0">
                    <Icon icon="material-symbols:mail" class="text-4xl" />
                  </div>
                  <a href="mailto:contact@meeting.co.th" class="text-gray-700 text-lg hover:text-teal-600 transition-colors">
                    contact@meeting.co.th
                  </a>
                </div>
              </div>
            </div>
  
            <!-- Map Section (อยู่ด้านล่างใน mobile) -->
            <div class="h-[400px] w-full relative md:rounded-l-lg md:rounded-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.170148301632!2d102.14998617577089!3d15.03870226619935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311eb350870116fd%3A0x62cde3bdef665fb4!2zTWVldGluZyBDcmVhdGl2ZSBDby4sIEx0ZC4gLSDguJrguKPguLTguKnguLHguJcg4Lih4Li14LiV4LiV4Li04LmJ4LiHIOC4hOC4o-C4teC5gOC4reC4l-C4teC4nyDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sth!4v1735582867281!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style="border:0; border-top-right-radius: 10px; border-bottom-right-radius: 10px;"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  