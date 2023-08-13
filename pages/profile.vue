<template>
  <NuxtLayout name="profile-layout">
    <div class="flex">
      <div class="xl:w-3/4 lg:w-4/5 mt-5 mx-auto">
        <div class="flex space-x-10 lg:space-x-5">
          <div class="w-1/6 lg:w-1/4 mt-5">
            <Navigation :menus_a="menus_a" :menus_b="menus_b" />
          </div>
          <div class="w-5/6 lg:w-3/4">
            <div class="bg-white shadow-sm rounded-md px-4 pt-4">
              <div class="flex space-x-2 h-5 items-start justify-end -mb-3">
                <input type="checkbox" class="border-gray-400 rounded-sm ring-0" />
                <p class="text-xs text-gray-500">Don't remind me again</p>
                <span class="i-mdi-close text-red-500"></span>
              </div>
              <div class="flex mb-4">
                <div>
                  <h1 class="font-semibold">Welcome, Reyven!</h1>
                  <p class="text-xs">
                    <span class="text-green-400">You are almost done!</span> To further strengthen your profile, it is
                    highly recommended for you to complete the 4 sections of your application.
                  </p>
                </div>
              </div>
              <div class="border-t">
                <div class="flex flex-wrap justify-between my-3">
                  <Status
                    v-for="status in statuses"
                    :key="status"
                    :icon="status.icon"
                    :title="status.title"
                    :percent="status.percent"
                    :color="status.color"
                  />
                </div>
              </div>
            </div>
            <div class="flex gap-x-3 mt-3">
              <div class="w-3/4 bg-white rounded-md shadow-sm">
                <div class="flex">
                  <div class="xl:w-2/5 lg:w-2/5 border-r-2 p-7">
                    <img src="/image/noimage.png" class="w-24 h-24 mx-auto rounded-full border border-gray-300" />
                  </div>
                  <div class="w-full p-5 space-y-2">
                    <div class="flex justify-between">
                      <h1 class="font-semibold text-xl">Reyven S. Biloy</h1>
                      <span class="i-lucide-edit-2 my-auto text-gray-400"></span>
                    </div>
                    <p>UI/UX Designer</p>
                    <div class="flex">
                      <span class="i-mdi-school text-gray-600 mt-1 mr-2"></span>
                      <p class="text-sm">Bachelor of Science in Computer Science</p>
                    </div>
                    <div class="grid grid-cols-3 justify-between">
                      <div class="flex">
                        <span class="i-mdi-briefcase-variant text-gray-600 mt-1 mr-2"></span>
                        <p class="text-sm">12 years</p>
                      </div>
                      <div class="flex">
                        <span class="i-mdi-calendar-check text-gray-600 mt-1 mr-2"></span>
                        <p class="text-sm">immediately</p>
                      </div>
                      <div class="flex">
                        <span class="i-lucide-circle-dollar-sign text-gray-600 mt-1 mr-2"></span>
                        <p class="text-sm text-green-500">Php 35,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t-2 p-5">
                  <div class="flex justify-between">
                    <h1 class="text-lg font-semibold">General details</h1>
                    <span class="i-lucide-edit-2 my-auto text-gray-400"></span>
                  </div>
                  <div class="grid grid-cols-1 mt-4">
                    <div class="w-3/4 space-y-4">
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Date of Birth</p>
                        <p>07 July 1986</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Gender</p>
                        <p>Male</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Civil Status</p>
                        <p>Married</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Nationality</p>
                        <p>Filipino</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t-2 p-5">
                  <div class="flex justify-between">
                    <h1 class="text-lg font-semibold">Professional Status</h1>
                    <span class="i-lucide-edit-2 my-auto text-gray-400"></span>
                  </div>
                  <div class="grid grid-cols-1 mt-4">
                    <div class="w-3/4 space-y-4">
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Recent Job Title</p>
                        <p>Web Designer and Developer</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Interview Availability</p>
                        <p>-</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Allowance (Non-Taxable)</p>
                        <p>-</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Pre-employement Leaves</p>
                        <p>07 July - Birthday</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Where can you work?</p>
                        <p>Office and Home</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Estimate Travel Time to Office</p>
                        <p>15 mins</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Connection Type</p>
                        <p>Globe Broadband</p>
                      </div>
                      <div class="grid grid-cols-2">
                        <p class="text-gray-500">Website / Portfolio</p>
                        <p>-</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t-2 p-5">
                  <div class="w-3/4 space-y-4">
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Day Shift</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Mid Shift</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Night Shift</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">English Only Policy (EOP)</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Where did you hear us?</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Marketing Permission</p>
                      <p>-</p>
                    </div>
                    <div class="grid grid-cols-2">
                      <p class="text-gray-500">Referral</p>
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/4 h-min space-y-5">
                <div class="bg-white rounded-lg shadow-md">
                  <h1 class="p-3 font-semibold">Video Introduction</h1>
                  <iframe
                    class="aspect-video rounded-b-lg h-52 w-full"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
                <div class="bg-white rounded-lg shadow-md p-3">
                  <h1 class="font-semibold">Profile Completion</h1>
                  <div class="-mt-4">
                    <p class="text-green-500 text-sm text-right">100%</p>
                    <div class="bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div class="h-2 rounded-full bg-green-500" style="width: 100%"></div>
                    </div>
                  </div>
                  <div class="text-center text-green-500">Well done, Reyven!</div>
                  <img src="/image/badge.png" class="w-12 h-17 mx-auto mt-3" />
                  <p class="pt-5 text-sm">
                    You have one of the strongest professional profile in our talent pool Expect. progress on your
                    application at any time soon.
                  </p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-3">
                  <h1 class="font-semibold">Profile Completion</h1>
                  <div class="-mt-4">
                    <p class="text-amber-500 text-sm text-right">50%</p>
                    <div class="bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                      <div class="h-2 rounded-full bg-amber-500" style="width: 50%"></div>
                    </div>
                  </div>
                  <div class="grid grid-cols-1">
                    <div class="flex">
                      <span class="i-mdi-chevron-up text-gray-600 text-lg"></span>
                      <p class="text-sm text-gray-600">Hide recommendations</p>
                    </div>
                    <div class="pl-4 pt-2">
                      <p class="text-sm text-gray-600">
                        Fill-up the following items to strengthen your profile. This can help us matching your profile
                        and increase your chances of landing into your desire role.
                      </p>
                    </div>
                  </div>
                  <div class="pt-5 pl-4">
                    <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400 text-sm">
                      <li class="flex items-center">
                        <span
                          class="i-mdi-circle-outline w-3.5 h-3.5 mr-2 text-gray-600 dark:text-green-400 flex-shrink-0 mb-auto mt-1"
                        ></span>
                        <p class="text-gray-600">Share <span class="text-blue-600">Date of Birth</span></p>
                      </li>
                      <li class="flex items-center">
                        <span
                          class="i-mdi-circle-outline w-3.5 h-3.5 mr-2 text-gray-600 dark:text-green-400 flex-shrink-0 mb-auto mt-1"
                        ></span>
                        <p class="text-gray-600">Specify <span class="text-blue-600">Currency Monthly Salary</span></p>
                      </li>
                      <li class="flex items-center">
                        <span
                          class="i-mdi-circle-outline w-3.5 h-3.5 mr-2 text-gray-600 dark:text-green-400 flex-shrink-0 mb-auto mt-1"
                        ></span>
                        <p class="text-gray-600">Add one(1) <span class="text-blue-600">Character Reference</span></p>
                      </li>
                      <li class="flex items-center">
                        <span
                          class="i-mdi-circle-outline w-3.5 h-3.5 mr-2 text-gray-600 dark:text-green-400 flex-shrink-0 mb-auto mt-1"
                        ></span>
                        <p class="text-gray-600">Add <span class="text-blue-600">Current Address</span></p>
                      </li>
                      <li class="flex items-center">
                        <span
                          class="i-mdi-circle-outline w-3.5 h-3.5 mr-2 text-gray-600 dark:text-green-400 flex-shrink-0 mb-auto mt-1"
                        ></span>
                        <p class="text-gray-600">
                          Add atleast five (5 ) items in <span class="text-blue-600">Other skills</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'

const menus_a = ref([
  {
    icon: 'i-mdi-account-outline',
    title: 'Profile',
    isSelected: true
  },
  {
    icon: 'i-mdi-file-document-outline',
    title: 'Resume / CV',
    isSelected: false
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Assessment',
    isSelected: false
  },
  {
    icon: 'i-lucide-monitor-play',
    title: 'Video Script',
    isSelected: false
  }
])

const menus_b = ref([
  {
    icon: 'i-lucide-briefcase',
    title: 'Application Tracking',
    isSelected: false,
    pending: false
  },
  {
    icon: 'i-lucide-bookmark',
    title: 'Bookmarked',
    isSelected: false,
    pending: false
  },
  {
    icon: 'i-mdi-bell-outline',
    title: 'Notications',
    isSelected: false,
    pending: true
  },
  {
    icon: 'i-lucide-activity',
    title: 'Activity',
    isSelected: false,
    pending: false
  },
  {
    icon: 'i-lucide-settings',
    title: 'Settings',
    isSelected: false,
    pending: false
  }
])

const statuses = ref([
  {
    icon: 'i-mdi-account-outline',
    title: 'Applicant Profile',
    percent: '75',
    color: 'amber-500'
  },
  {
    icon: 'i-mdi-file-document-outline',
    title: 'Resume / CV',
    percent: '50',
    color: 'red-400'
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Assesment Score',
    percent: '0',
    color: 'red-400'
  },
  {
    icon: 'i-lucide-monitor-play',
    title: 'Video Introduction',
    percent: '0',
    color: 'red-400'
  }
])
</script>

<style></style>
