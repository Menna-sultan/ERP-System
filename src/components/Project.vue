<template>
  <div>
    <main class="flex-1 transition-all duration-300 ease-in-out">
      <div class="p-4 sm:p-6 lg:p-8">
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 class="text-xl sm:text-2xl font-semibold text-slate-800">Project management</h1>
            <p class="text-sm sm:text-base text-slate-500 mt-1">Manage and monitor all your projects</p>
          </div>
          
          <div class="flex justify-end mt-2 sm:mt-0">
            <button @click="$router.push({ name: 'Addproject' })" 
              class="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#193560] text-white rounded-xl hover:bg-[#152a4d] transition-all shadow-md shadow-blue-500/20 font-medium w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span>New Action</span>
            </button>
          </div>
        </div>

        <!-- Table Card -->
        <div class="bg-white rounded-xl shadow">
          <!-- Controls -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4 ">
            <div class="relative w-full sm:w-auto mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input placeholder="Search anything..." 
                class="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm text-sm"
                type="text">
            </div>

            <div class="flex items-center gap-3 text-sm w-full sm:w-auto">
              <div class="flex gap-2 flex-1 sm:flex-none">
                <button class="flex-1 sm:w-auto flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border transition-all bg-white border-slate-200 text-slate-600 hover:bg-slate-50 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel">
                    <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
                  </svg>
                  <span class="text-sm font-medium hidden sm:block">Filter</span>
                </button>
                
                <button class="flex-1 sm:w-auto flex items-center justify-center gap-2 px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-all shadow-sm whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down text-indigo-500">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M12 18v-6"></path>
                    <path d="m9 15 3 3 3-3"></path>
                  </svg>
                  <span>Export</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Desktop Table -->
          <div class="hidden lg:block overflow-x-auto">
            <div class="min-w-full">
              <table class="w-full text-sm text-left border-collapse mt-7">
                <thead>
                  <tr class="bg-[#F2F4F7] text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-100 ">
                    <th class="px-6 py-4 whitespace-nowrap">Profile</th>
                    <th class="px-6 py-4 whitespace-nowrap">Project Name</th>
                    <th class="px-6 py-4 whitespace-nowrap">Client</th>
                    <th class="px-6 py-4 whitespace-nowrap">Priority</th>
                    <th class="px-6 py-4 whitespace-nowrap">Status</th>
                    <th class="px-6 py-4 whitespace-nowrap">Progress</th>
                    <th class="px-6 py-4 whitespace-nowrap">Timeline</th>
                    <th class="px-6 py-4 text-center whitespace-nowrap">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#939090]/20">
                  <tr v-for="(project, index) in projects" :key="index" class="hover:bg-slate-50/80 transition-all">
                    <td class="px-6 py-4">
                      <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/>
                        </svg>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-sm font-bold text-slate-900">{{ project.name }}</span>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-sm text-slate-600 font-medium">{{ project.client }}</span>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-xs font-bold px-2.5 py-1 rounded-lg uppercase" 
                        :class="project.priorityClass">
                        {{ project.priority }}
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <span class="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-tighter" 
                        :class="project.statusClass">
                        {{ project.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 min-w-[140px]">
                      <div class="flex flex-col gap-1.5">
                        <div class="flex justify-between items-center text-xs font-bold text-slate-400">
                          <span>{{ project.progress }}%</span>
                        </div>
                        <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div class="h-full transition-all duration-1000 ease-out" 
                            :class="project.progressBarClass" 
                            :style="{ width: project.progress + '%' }"></div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex flex-col">
                        <span class="text-sm font-bold text-slate-900">{{ project.budget }}</span>
                        <span class="text-xs text-slate-400 font-medium">Due: {{ project.dueDate }}</span>
                      </div>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center justify-center gap-2">
                        <button @click="openModal(project)" 
                          class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all"
                          aria-label="View details">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                        </button>
                        <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                          aria-label="More options">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Tablet Table (Medium Screens) -->
          <div class="hidden md:block lg:hidden overflow-x-auto">
            <div class="min-w-[768px]">
              <table class="w-full text-sm text-left border-collapse">
                <thead>
                  <tr class="bg-[#F2F4F7] text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-slate-100">
                    <th class="px-4 py-3">Project Name</th>
                    <th class="px-4 py-3">Client</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Progress</th>
                    <th class="px-4 py-3">Budget</th>
                    <th class="px-4 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#939090]/20">
                  <tr v-for="(project, index) in projects" :key="index" class="hover:bg-slate-50/80 transition-all">
                    <td class="px-4 py-3">
                      <div class="flex items-center gap-3">
                        <div class="w-6 h-6 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/>
                          </svg>
                        </div>
                        <span class="text-sm font-bold text-slate-900 truncate max-w-[120px]">{{ project.name }}</span>
                      </div>
                    </td>
                    <td class="px-4 py-3">
                      <span class="text-sm text-slate-600 font-medium truncate max-w-[100px]">{{ project.client }}</span>
                    </td>
                    <td class="px-4 py-3">
                      <span class="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-tighter" 
                        :class="project.statusClass">
                        {{ project.status }}
                      </span>
                    </td>
                    <td class="px-4 py-3">
                      <div class="flex items-center gap-2">
                        <div class="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div class="h-full" 
                            :class="project.progressBarClass" 
                            :style="{ width: project.progress + '%' }"></div>
                        </div>
                        <span class="text-xs font-bold text-slate-900">{{ project.progress }}%</span>
                      </div>
                    </td>
                    <td class="px-4 py-3">
                      <span class="text-sm font-bold text-slate-900">{{ project.budget }}</span>
                    </td>
                    <td class="px-4 py-3">
                      <div class="flex items-center justify-center gap-1">
                        <button @click="openModal(project)" 
                          class="p-1.5 text-blue-500 hover:bg-indigo-50 rounded-lg"
                          aria-label="View">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                        </button>
                        <button class="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                          aria-label="More">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Mobile Card Layout -->
          <div class="md:hidden space-y-4 p-4">
            <div v-for="(project, index) in projects" :key="index" 
              class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-bold text-slate-900">{{ project.name }}</h3>
                    <p class="text-xs text-slate-600">{{ project.client }}</p>
                  </div>
                </div>
                <div class="flex gap-1">
                  <button @click="openModal(project)" 
                    class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg"
                    aria-label="View">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </button>
                  <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"
                    aria-label="More">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                <div>
                  <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Priority</label>
                  <span class="text-xs font-bold px-2 py-1 rounded-lg uppercase" 
                    :class="project.priorityClass">
                    {{ project.priority }}
                  </span>
                </div>
                <div>
                  <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Status</label>
                  <span class="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-tighter" 
                    :class="project.statusClass">
                    {{ project.status }}
                  </span>
                </div>
                <div class="col-span-2">
                  <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Progress</label>
                  <div class="flex items-center gap-2">
                    <div class="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div class="h-full" 
                        :class="project.progressBarClass" 
                        :style="{ width: project.progress + '%' }"></div>
                    </div>
                    <span class="text-xs font-bold text-slate-900">{{ project.progress }}%</span>
                  </div>
                </div>
              </div>
              
              <div class="pt-3 border-t border-gray-100">
                <div class="flex items-center justify-between">
                  <div>
                    <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Budget</label>
                    <span class="text-sm font-bold text-slate-900">{{ project.budget }}</span>
                  </div>
                  <div class="text-right">
                    <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Due Date</label>
                    <span class="text-xs text-slate-400">{{ project.dueDate }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="flex flex-col sm:flex-row items-center justify-between px-4 py-3 text-sm border-t border-gray-100 gap-4">
            <span class="text-gray-500">Page 1 | 6 of 12</span>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap text-sm">
                Previous
              </button>
              <button class="px-3 py-1.5 rounded-lg bg-[#193560] text-white whitespace-nowrap text-sm">1</button>
              <button class="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal -->
    <div v-if="showModal && selectedProject" 
      @click.self="closeModal"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      <div class="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl lg:rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{{ selectedProject.name }}</h3>
              <p class="text-slate-500 text-xs sm:text-sm">{{ selectedProject.client }}</p>
            </div>
          </div>
          <button @click="closeModal" 
            class="p-1.5 sm:p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-4 sm:p-6 lg:p-8 space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div class="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <div class="flex items-center gap-2 mb-4 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
                <span class="text-xs font-bold uppercase tracking-widest">Progress</span>
              </div>
              <div class="flex items-end gap-2 mb-4">
                <span class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">{{ selectedProject.progress }}%</span>
                <span class="text-xs sm:text-sm text-slate-400 mb-1">completed</span>
              </div>
              <div class="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 bg-blue-500" :style="{ width: selectedProject.progress + '%' }"></div>
              </div>
            </div>
            
            <div class="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <div class="flex items-center gap-2 mb-4 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign">
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span class="text-xs font-bold uppercase tracking-widest">Total Budget</span>
              </div>
              <div class="flex items-end gap-2">
                <span class="text-2xl sm:text-3xl font-bold text-slate-900">{{ selectedProject.budget }}</span>
              </div>
              <p class="mt-4 text-xs text-slate-400">Allocated budget for Q2/Q3 2024</p>
            </div>
            
            <div class="p-4 sm:p-6 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
              <div class="flex items-center gap-2 mb-4 text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span class="text-xs font-bold uppercase tracking-widest">Timeline</span>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-500">Start Date:</span>
                  <span class="text-sm font-bold text-slate-700">2024-01-15</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-500">Due Date:</span>
                  <span class="text-sm font-bold text-rose-600">{{ selectedProject.dueDate }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#193560" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-indigo-500">
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg>
                Project Overview
              </h4>
              <div class="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>This project is aimed at delivering a top-tier digital experience for <strong>{{ selectedProject.client }}</strong>. The primary objective is to streamline the current user journey while maintaining brand consistency and enhancing overall system performance.</p>
                <p>Current status is <strong>{{ selectedProject.status }}</strong>. Our team is focused on meeting the final delivery deadline of {{ selectedProject.dueDate }}. Regular syncs are being held weekly to ensure alignment between design and development phases.</p>
              </div>
            </div>
            
            <div>
              <h4 class="text-base sm:text-lg font-bold text-slate-900 mb-4">Internal Team</h4>
              <div class="space-y-3">
                <div v-for="(member, index) in teamMembers" :key="index" 
                  class="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                  <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                    {{ member.initials }}
                  </div>
                  <div>
                    <span class="text-sm font-medium text-slate-700">{{ member.name }}</span>
                    <p class="text-xs text-slate-500">{{ member.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-4 sm:p-6 lg:p-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3">
          <button @click="closeModal" 
            class="px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors w-full sm:w-auto">
            Close Details
          </button>
          <button class="px-4 py-2.5 bg-[#152a4d] text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-blue-500/20 w-full sm:w-auto">
            Edit Project
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showModal = ref(false)
const selectedProject = ref(null)

// Projects data
const projects = ref([
  {
    name: 'Web Dashboard',
    client: 'Elevate Systems',
    priority: 'High',
    priorityClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    status: 'Active',
    statusClass: 'bg-blue-100 text-blue-700',
    progress: 75,
    progressBarClass: 'bg-[#5590E9]',
    budget: '$12,000',
    dueDate: '2024-06-15'
  },
  {
    name: 'Mobile App V2',
    client: 'Smart Tech',
    priority: 'High',
    priorityClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    status: 'Active',
    statusClass: 'bg-blue-100 text-blue-700',
    progress: 30,
    progressBarClass: 'bg-[#5590E9]',
    budget: '$45,000',
    dueDate: '2024-07-01'
  },
  {
    name: 'CRM Enhancement',
    client: 'NovaSoft',
    priority: 'Medium',
    priorityClass: 'bg-amber-50 text-amber-600 border border-amber-100',
    status: 'Completed',
    statusClass: 'bg-emerald-100 text-emerald-700',
    progress: 100,
    progressBarClass: 'bg-emerald-500',
    budget: '$8,000',
    dueDate: '2024-05-10'
  },
  {
    name: 'ERP System',
    client: 'PrimeTech',
    priority: 'Medium',
    priorityClass: 'bg-amber-50 text-amber-600 border border-amber-100',
    status: 'Completed',
    statusClass: 'bg-emerald-100 text-emerald-700',
    progress: 100,
    progressBarClass: 'bg-emerald-500',
    budget: '$8,000',
    dueDate: '2024-05-10'
  },
    {
    name: 'Mobile App V2',
    client: 'Smart Tech',
    priority: 'High',
    priorityClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    status: 'Active',
    statusClass: 'bg-blue-100 text-blue-700',
    progress: 30,
    progressBarClass: 'bg-[#5590E9]',
    budget: '$45,000',
    dueDate: '2024-07-01'
  },
    {
    name: 'Mobile App V2',
    client: 'Smart Tech',
    priority: 'High',
    priorityClass: 'bg-rose-50 text-rose-600 border border-rose-100',
    status: 'Active',
    statusClass: 'bg-blue-100 text-blue-700',
    progress: 30,
    progressBarClass: 'bg-[#5590E9]',
    budget: '$45,000',
    dueDate: '2024-07-01'
  }

])

// Team members data
const teamMembers = ref([
  { name: 'Sarah Ahmed', role: 'Lead Developer', initials: 'S' },
  { name: 'Menna Ahmed', role: 'Developer', initials: 'M' },
  { name: 'Mohamed Khaled', role: 'Designer', initials: 'E' }
])

const openModal = (project) => {
  selectedProject.value = project
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedProject.value = null
}

const goToAddProject = () => {
  router.push('/Addproject')
}
</script>

<style scoped>
/* Hide scrollbar but keep functionality */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

/* Better touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
  }
  
  input, select, textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}

/* Animation classes */
.animate-in {
  animation-duration: 200ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in {
  animation-name: fadeIn;
}

.zoom-in-95 {
  animation-name: zoomIn95;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>