<template>
  <div>
    <div class="w-screen bg-white rounded-b-2xl  overflow-hidden mb-6  -mt-4 -ml-7 ">
<div class="relative h-48 sm:h-64 w-full bg-gradient-to-r from-blue-50 via-blue-200 to-blue-500 ">
                    
    <button
  class="absolute right-80 top-5 p-2 bg-black/20 hover:bg-black/30 backdrop-blur-md rounded-full text-white transition-colors">
  <svg
    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
    class="lucide lucide-pencil" aria-hidden="true">
    <path
      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
    </path>
    <path d="m15 5 4 4"></path>
  </svg>
</button>

                    
                    </div>
                <div class="relative px-0 pb-6 pt-16 sm:pt-20">
                    
                    <div class="absolute -mt-20 left-20 sm:-top-20">
                        <div class="relative">
                            <img alt="Menna Ahmed"
                                class="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 bg-gray-100 border-white object-cover shadow-lg"
                               src="/Rectangle2.png"></div>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 ml-16 -mt-16">
                        <div>
                            <div class="flex items-center gap-2 ">
                                <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">Menna Ahmed</h1>
                                <!-- <span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-200">Pro</span> -->
                            </div>
                            <p class="text-gray-500 mt-1">mennaahmed21@gmail.com</p>
                        </div>
                        <div class="flex items-center gap-3"><button
                                class="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm"><span>Share</span><svg
                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2"
                                    aria-hidden="true">
                                    <circle cx="18" cy="5" r="3"></circle>
                                    <circle cx="6" cy="12" r="3"></circle>
                                    <circle cx="18" cy="19" r="3"></circle>
                                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                </svg></button>
<!--                                
                                <button
                                class="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-sm"><span>View
                                    Profile</span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"
                                    aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg></button>  -->
                            
                            </div>
                    </div>
                </div>
        </div>

       
  <!-- <div class="w-full max-w-5xl mx-auto mb-8 px-4 sm:px-0">
            <div class="flex space-x-1 bg-gray-100 p-1 rounded-xl">
              <button @click="setActiveTab('Profile')" :class="[
                'flex flex-1 items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                activeTab === 'Profile' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-user" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg><span class="hidden sm:inline">Profile</span>
              </button>
              <button @click="setActiveTab('Security')" :class="[
                'flex flex-1 items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                activeTab === 'Security' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shield" aria-hidden="true">
                        <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                        </path>
                    </svg><span class="hidden sm:inline">Security</span>
              </button>
              <button @click="setActiveTab('Preferences')" :class="[
                'flex flex-1 items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                activeTab === 'Preferences' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-settings2 lucide-settings-2" aria-hidden="true">
                        <path d="M14 17H5"></path>
                        <path d="M19 7h-9"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                    </svg><span class="hidden sm:inline">Preferences</span>
              </button>
              <button @click="setActiveTab('Notifications')" :class="[
                'flex flex-1 items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all',
                activeTab === 'Notifications' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              ]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-bell" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path
                            d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326">
                        </path>
                    </svg><span class="hidden sm:inline">Notifications</span>
              </button>
            </div>
        </div> -->
       <main class="px-4">
            <div class="transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-2">
                <div class="w-full max-w-5xl mx-auto space-y-6" v-if="activeTab === 'Profile'">
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Profile Photo</h2>
                        <div class="flex items-center gap-6">
                            <div class="relative group"><img alt="Avatar preview"
                                    class="w-20 h-20 rounded-full object-cover ring-2 ring-gray-100"
                                    src="/Rectangle2.png">
                                <div
                                    class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-camera text-white"
                                        aria-hidden="true">
                                        <path
                                            d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z">
                                        </path>
                                        <circle cx="12" cy="13" r="3"></circle>
                                    </svg></div>
                            </div>
                            <div class="space-y-2"><label
                                    class="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors inline-block">Upload
                                    New Photo<input class="hidden" accept="image/*" type="file"></label>
                                <p class="text-xs text-gray-400">JPG, GIF or PNG. Max size 2MB</p>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Personal Information</h2>
                        <form class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-2"><label for="firstName"
                                        class="text-sm font-medium text-gray-700">First Name</label><input
                                        id="firstName"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#2B7FFF] transition-all"
                                        placeholder="First Name" type="text" value="Menna" name="firstName"></div>
                                <div class="space-y-2"><label for="lastName"
                                        class="text-sm font-medium text-gray-700">Last Name</label><input id="lastName"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#2B7FFF] transition-all"
                                        placeholder="Last Name" type="text" value="Ahmed" name="lastName"></div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-2"><label for="email"
                                        class="flex items-center gap-2 text-sm font-medium text-gray-700"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-mail text-gray-400" aria-hidden="true">
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                        </svg>Email Address</label><input id="email"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#2B7FFF] transition-all"
                                        placeholder="Email Address" type="email" value="mennaahmed@gmail.com"
                                        name="email"></div>
                                <div class="space-y-2"><label for="phone"
                                        class="flex items-center gap-2 text-sm font-medium text-gray-700"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-phone text-gray-400" aria-hidden="true">
                                            <path
                                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                            </path>
                                        </svg>Phone Number</label><input id="phone"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#2B7FFF] transition-all"
                                        placeholder="Phone Number" type="text" value="01123456789" name="phone">
                                </div>
                            </div>
                            <div class="space-y-2"><label for="address"
                                    class="flex items-center gap-2 text-sm font-medium text-gray-700"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-map-pin text-gray-400"
                                        aria-hidden="true">
                                        <path
                                            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                        </path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>Address</label><input id="address"
                                    class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#2B7FFF] transition-all"
                                    placeholder="Address" type="text" value="Giza, Egypt" name="address">
                            </div>
                            
                     
                        </form>
                    </section>



                    
                        <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-2 bg-indigo-50 text-[#2B7FFF] rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key" aria-hidden="true">
                                    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                                    <path d="m21 2-9.6 9.6"></path>
                                    <circle cx="7.5" cy="15.5" r="5.5"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Change Password</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="text-xs font-medium text-gray-500 uppercase tracking-wider">Current Password</label>
                                <div class="relative">
                                    <input v-model="currentPassword" :type="showCurrentPassword ? 'text' : 'password'" placeholder="" class="w-full px-4 py-2.5 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all">
                                    <button @click="showCurrentPassword = !showCurrentPassword" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg v-if="showCurrentPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off text-gray-400 hover:text-gray-600">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye text-gray-400 hover:text-gray-600">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label class="text-xs font-medium text-gray-500 uppercase tracking-wider">New Password</label>
                                <div class="relative">
                                    <input v-model="newPassword" :type="showNewPassword ? 'text' : 'password'" placeholder="" class="w-full px-4 py-2.5 pr-10 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all">
                                    <button @click="showNewPassword = !showNewPassword" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <svg v-if="showNewPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off text-gray-400 hover:text-gray-600">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                            <line x1="2" x2="22" y1="2" y2="22"></line>
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye text-gray-400 hover:text-gray-600">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button class="mt-6 px-4 py-2 bg-[#193560] text-white rounded-lg text-sm font-medium hover:bg-[#193560] transition-colors">Update Password</button>
                    </section>

 <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
    <h2 class="text-lg font-semibold text-gray-900 mb-6">Theme Settings</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-gray-100 hover:border-gray-200
              "><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun text-gray-400" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><span class="font-medium text-gray-600">Light</span></div></button><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-gray-100 hover:border-gray-200
              "><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon text-gray-400" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg><span class="font-medium text-gray-600">Dark</span></div></button><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-[#2B7FFF] bg-indigo-50/50">
                               <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-monitor text-[#2B7FFF]" aria-hidden="true">
                                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                        <line x1="8" x2="16" y1="21" y2="21"></line>
                                        <line x1="12" x2="12" y1="17" y2="21"></line>
                                    </svg><span class="font-medium text-indigo-900">System</span></div><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-check text-[#2B7FFF]"
                                    aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </button></div>
                    </section>

                  <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Notification Channels</h2>
                        <div class="space-y-6">
                            <div class="flex items-center justify-between">
                                <div class="flex gap-4">
                                    <div
                                        class="p-2 bg-blue-50 text-blue-600 rounded-lg h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"
                                            aria-hidden="true">
                                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                        </svg></div>
                                    <div>
                                        <p class="font-medium text-gray-900">Email Notifications</p>
                                        <p class="text-sm text-gray-500">Weekly summaries and security alerts.</p>
                                    </div>
                                </div><button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2B7FFF]"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span></button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex gap-4">
                                    <div
                                        class="p-2 bg-purple-50 text-purple-600 rounded-lg h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-app-window" aria-hidden="true">
                                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                            <path d="M10 4v4"></path>
                                            <path d="M2 8h20"></path>
                                            <path d="M6 4v4"></path>
                                        </svg></div>
                                    <div>
                                        <p class="font-medium text-gray-900">In-App Notifications</p>
                                        <p class="text-sm text-gray-500">Live updates and collaboration alerts.</p>
                                    </div>
                                </div><button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2B7FFF]"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span></button>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex gap-4">
                                    <div
                                        class="p-2 bg-pink-50 text-pink-600 rounded-lg h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-smartphone" aria-hidden="true">
                                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                            <path d="M12 18h.01"></path>
                                        </svg></div>
                                    <div>
                                        <p class="font-medium text-gray-900">SMS Alerts <span
                                                class="text-[10px] bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded ml-2 uppercase font-bold">Optional</span>
                                        </p>
                                        <p class="text-sm text-gray-500">Critical system failure notifications.</p>
                                    </div>
                                </div><button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-200"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-1"></span></button>
                            </div>
                        </div>
                    </section>
                   <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 -ml-48">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Reports &amp; Controls</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                        height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-file-text text-gray-400" aria-hidden="true">
                                        <path
                                            d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
                                        </path>
                                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg><span class="text-sm font-medium text-gray-700">Reports &amp; Alerts</span>
                                </div><button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2B7FFF]"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span></button>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                        height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-volume2 lucide-volume-2 text-gray-400" aria-hidden="true">
                                        <path
                                            d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z">
                                        </path>
                                        <path d="M16 9a5 5 0 0 1 0 6"></path>
                                        <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
                                    </svg><span class="text-sm font-medium text-gray-700">Sound Notifications</span>
                                </div><button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2B7FFF]"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span></button>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18"
                                        height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-bell text-gray-400" aria-hidden="true">
                                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                        <path
                                            d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326">
                                        </path>
                                    </svg><span class="text-sm font-medium text-gray-700">Popup Control</span></div>
                                <button
                                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#2B7FFF]"><span
                                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span></button>
                            </div>
                        </div>
                    </section>
                    <div class="flex justify-end pt-4"><button type="submit" class="
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all
                bg-[#193560] hover:bg-[#193560] active:scale-95
                
              "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true">
                                        <path d="M20 6 9 17l-5-5"></path>
                                    </svg>Save Changes</button></div>






                </div>
                <!-- <div class="w-full max-w-5xl mx-auto space-y-6" v-if="activeTab === 'Security'">
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key" aria-hidden="true">
                                    <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path>
                                    <path d="m21 2-9.6 9.6"></path>
                                    <circle cx="7.5" cy="15.5" r="5.5"></circle>
                                </svg>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Change Password</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="space-y-1">
                                <label class="text-xs font-medium text-gray-500 uppercase tracking-wider">Current Password</label>
                                <input placeholder="••••••••" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="password">
                            </div>
                            <div class="space-y-1">
                                <label class="text-xs font-medium text-gray-500 uppercase tracking-wider">New Password</label>
                                <input placeholder="••••••••" class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="password">
                            </div>
                        </div>
                        <button class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">Update Password</button>
                    </section>












                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div class="flex gap-4">
                                <div class="p-2 bg-green-50 text-green-600 rounded-lg h-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" aria-hidden="true">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                        <path d="m9 12 2 2 4-4"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h2 class="text-lg font-semibold text-gray-900">Two-Factor Authentication (2FA)</h2>
                                    <p class="text-sm text-gray-500 mt-1">Enhance your account security with an extra verification step.</p>
                                </div>
                            </div>
                            <button class="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Configure</button>
                        </div>
                    </section>
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div class="flex items-center justify-between mb-6">
                            <div class="flex items-center gap-3">
                                <div class="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor" aria-hidden="true">
                                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                        <line x1="8" x2="16" y1="21" y2="21"></line>
                                        <line x1="12" x2="12" y1="17" y2="21"></line>
                                    </svg>
                                </div>
                                <h2 class="text-lg font-semibold text-gray-900">Active Sessions</h2>
                            </div>
                            <button class="text-sm text-red-600 font-medium hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out" aria-hidden="true">
                                    <path d="m16 17 5-5-5-5"></path>
                                    <path d="M21 12H9"></path>
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                </svg>
                                Logout from others
                            </button>
                        </div>
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div class="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor text-gray-400" aria-hidden="true">
                                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                        <line x1="8" x2="16" y1="21" y2="21"></line>
                                        <line x1="12" x2="12" y1="17" y2="21"></line>
                                    </svg>
                                    <div>
                                        <p class="font-medium text-gray-900">Chrome on macOS</p>
                                        <p class="text-xs text-gray-500">London, UK • Active Now</p>
                                    </div>
                                </div>
                                <span class="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full uppercase">Current</span>
                            </div>
                            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                <div class="flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone text-gray-400" aria-hidden="true">
                                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                        <path d="M12 18h.01"></path>
                                    </svg>
                                    <div>
                                        <p class="font-medium text-gray-900">iPhone 14 Pro</p>
                                        <p class="text-xs text-gray-500">Paris, FR • 2 hours ago</p>
                                    </div>
                                </div>
                                <button class="text-xs text-gray-400 hover:text-red-500 font-medium">Revoke</button>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-2 bg-orange-50 text-orange-600 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history" aria-hidden="true">
                                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                                    <path d="M3 3v5h5"></path>
                                    <path d="M12 7v5l4 2"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg font-semibold text-gray-900">Login History & Alerts</h2>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert text-yellow-500" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" x2="12" y1="8" y2="12"></line>
                                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                </svg>
                                <div class="flex-1">
                                    <p class="text-sm text-gray-800">New login from unrecognized device</p>
                                    <p class="text-xs text-gray-400">Oct 24, 2023 • 14:22</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-300" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </div>
                            <div class="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-blue-500" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <div class="flex-1">
                                    <p class="text-sm text-gray-800">Password successfully updated</p>
                                    <p class="text-xs text-gray-400">Sep 12, 2023 • 09:15</p>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right text-gray-300" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="w-full max-w-5xl mx-auto space-y-6" v-if="activeTab === 'Preferences'">
            <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"><h2 class="text-lg font-semibold text-gray-900 mb-6">Theme Settings</h2><div class="grid grid-cols-1 sm:grid-cols-3 gap-4"><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-gray-100 hover:border-gray-200
              "><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun text-gray-400" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><span class="font-medium text-gray-600">Light</span></div></button><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-gray-100 hover:border-gray-200
              "><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon text-gray-400" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg><span class="font-medium text-gray-600">Dark</span></div></button><button class="
                flex items-center justify-between p-4 rounded-xl border-2 transition-all
                border-indigo-600 bg-indigo-50/50">
                               <div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                                        height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-monitor text-indigo-600" aria-hidden="true">
                                        <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                        <line x1="8" x2="16" y1="21" y2="21"></line>
                                        <line x1="12" x2="12" y1="17" y2="21"></line>
                                    </svg><span class="font-medium text-indigo-900">System</span></div><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-check text-indigo-600"
                                    aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </button></div>
                    </section>
                   <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Regional &amp; Dashboard</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div class="space-y-4">
                                <div class="space-y-1.5"><label
                                        class="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-panels-top-left" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="M3 9h18"></path>
                                            <path d="M9 21V9"></path>
                                        </svg>Default Dashboard</label><select
                                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none">
                                        <option>Overview</option>
                                        <option>Analytics</option>
                                        <option>Projects</option>
                                    </select></div>
                                <div class="space-y-1.5"><label
                                        class="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-calendar" aria-hidden="true">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>Date Format</label><select
                                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none">
                                        <option>MM/DD/YYYY</option>
                                        <option>DD/MM/YYYY</option>
                                        <option>YYYY-MM-DD</option>
                                    </select></div>
                            </div>
                            <div class="space-y-4">
                                <div class="space-y-1.5"><label
                                        class="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-circle-dollar-sign" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                                            <path d="M12 18V6"></path>
                                        </svg>Currency</label><select
                                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none">
                                        <option>USD ($)</option>
                                        <option>EUR (€)</option>
                                        <option>GBP (£)</option>
                                        <option>JPY (¥)</option>
                                    </select></div>
                                <div class="space-y-1.5"><label
                                        class="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">Number
                                        Format</label><select
                                        class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none">
                                        <option>1,234.56</option>
                                        <option>1.234,56</option>
                                        <option>1 234,56</option>
                                    </select></div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="w-full max-w-5xl mx-auto space-y-6" v-if="activeTab === 'Notifications'">
                    <section class="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 class="text-lg font-semibold text-gray-900 mb-6">Notifications</h2>
                        <p class="text-gray-600">Notification settings will be implemented here.</p>
                    </section>
                </div>
            </div> -->
             </div>
        </main>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'Profile',
      currentPassword: '',
      newPassword: '',
      showCurrentPassword: false,
      showNewPassword: false
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
