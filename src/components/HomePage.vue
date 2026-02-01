<template>
  <main class="flex-1 transition-all duration-300 ease-in-out">
    <div class="p-4 sm:p-6 md:p-8">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 mt-2 gap-4">
        <div>
          <h1 class="text-xl sm:text-2xl font-semibold text-slate-800 mt-2">Main Dashboard</h1>
          <p class="text-sm sm:text-base text-slate-500 mt-1">Let's check for your updates today</p>
        </div>
        <!-- Mobile Search Button -->
        <button @click="toggleMobileSearch" class="md:hidden self-end p-2 text-slate-600 hover:text-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Search Bar -->
      <div v-if="showMobileSearch" class="md:hidden mb-6">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input placeholder="Search anything..."
            class="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text">
        </div>
      </div>

      <!-- Stats Cards Grid -->
      <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 md:mb-8">
        <!-- Project Card -->
        <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 640 512">
                  <path fill="currentColor"
                    d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32M192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32" />
                </svg>
              </div>
              <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Projects</h3>
            </div>
            <button class="text-slate-300 hover:text-slate-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-2xl sm:text-3xl font-bold text-slate-900">24</span>
              <div class="flex items-center gap-1 mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#48BB78"
                    d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
                </svg>
                <span class="text-[10px] sm:text-[11px] font-bold text-[#48BB78]">+12%</span>
              </div>
            </div>
          </div>
          <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
            <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 58.3333%;"></div>
            <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 33.3333%;"></div>
            <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 8.33333%;"></div>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
              <div class="flex items-center gap-2">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Active</span>
                <span class="text-[11px] font-semibold text-slate-700 leading-none">14</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Completed</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">8</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Pending</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">2</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tasks Card -->
        <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-square-check-big">
                  <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Tasks</h3>
            </div>
            <button class="text-slate-300 hover:text-slate-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-2xl sm:text-3xl font-bold text-slate-900">120</span>
              <div class="flex items-center gap-1 mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#48BB78"
                    d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
                </svg>
                <span class="text-[10px] sm:text-[11px] font-bold text-[#48BB78]">+10%</span>
              </div>
            </div>
          </div>
          <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
            <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 58.3333%;"></div>
            <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 29.1667%;"></div>
            <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 12.5%;"></div>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Done</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">35</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Pending</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">70</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Overdue</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">15</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Clients Card -->
        <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-users">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Clients</h3>
            </div>
            <button class="text-slate-300 hover:text-slate-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-2xl sm:text-3xl font-bold text-slate-900">79</span>
              <div class="flex items-center gap-1 mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#48BB78"
                    d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
                </svg>
                <span class="text-[10px] sm:text-[11px] font-bold text-[#48BB78]">+6%</span>
              </div>
            </div>
          </div>
          <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
            <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 82.2785%;"></div>
            <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 17.7215%;"></div>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Active</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">65</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Inactive</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">14</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Finance Card -->
        <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-wallet">
                  <path
                    d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
                  </path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Finance</h3>
            </div>
            <button class="text-slate-300 hover:text-slate-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-ellipsis-vertical">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
          <div class="mb-4">
            <div class="flex items-end gap-2">
              <span class="text-2xl sm:text-3xl font-bold text-slate-900">$120k</span>
              <div class="flex items-center gap-1 mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#48BB78"
                    d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
                </svg>
                <span class="text-[10px] sm:text-[11px] font-bold text-[#48BB78]">+6%</span>
              </div>
            </div>
          </div>
          <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
            <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 50%;"></div>
            <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 35.4167%;"></div>
            <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 14.5833%;"></div>
          </div>
          <div class="flex flex-wrap gap-x-4 gap-y-2">
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Income</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">120</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Expenses</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">85</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
              <div class="flex items-center gap-1">
                <span class="text-[11px] text-[#1E293B] uppercase leading-none">Profit</span>
                <span class="text-[11px] font-bold text-slate-700 leading-none">35</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 md:mb-8">
        <!-- Monthly Trends Chart -->
        <div class="lg:col-span-8 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h3 class="text-lg font-bold text-slate-800">Monthly Trends</h3>
            <div class="flex gap-2">
              <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200 whitespace-nowrap">
                Last 3 months
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">
                All
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center gap-4 sm:gap-8 mb-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full" style="background-color: rgb(34, 197, 94)"></div>
              <span class="text-sm text-gray-600">Revenue</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full" style="background-color: rgb(220, 38, 38)"></div>
              <span class="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
          <div ref="chartRef" style="width: 100%; height: 300px; min-height: 250px;"></div>
        </div>

        <!-- Project Status Chart -->
        <div class="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h3 class="text-lg font-bold text-slate-800">Project Status</h3>
            <div class="flex gap-2">
              <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200 whitespace-nowrap">
                Last 3 months
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">
                Cases
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-col items-center gap-6">
            <div class="relative w-48 h-48 sm:w-64 sm:h-64">
              <svg cx="50%" cy="50%" class="recharts-surface w-full h-full" viewBox="0 0 192 192">
                <defs>
                  <clipPath id="recharts1-clip">
                    <rect x="5" y="5" height="182" width="182"></rect>
                  </clipPath>
                </defs>
                <g class="recharts-layer recharts-pie">
                  <g class="recharts-layer">
                    <g class="recharts-layer recharts-pie-sector">
                      <path cx="96" cy="96" stroke="#fff" fill="#64748B" stroke-width="0" class="recharts-sector"
                        d="M 176,96 A 80,80,0, 0,0, 20.399934502826525,69.83456293460625 L 44.02495497069324,78.0112620175418 A 55,55,0, 0,1, 151,96 Z"></path>
                    </g>
                    <g class="recharts-layer recharts-pie-sector">
                      <path cx="96" cy="96" stroke="#fff" fill="#3B82F6" stroke-width="0" class="recharts-sector"
                        d="M 19.532827435498803,72.48890644842751 A 80,80,0, 0,0, 103.73083211306908,175.6255878147191 L 101.314947077735,150.74259162261936 A 55,55,0, 0,1, 43.42881886190542,79.83612318329392 Z"></path>
                    </g>
                    <g class="recharts-layer recharts-pie-sector">
                      <path cx="96" cy="96" stroke="#fff" fill="#CBD5E1" stroke-width="0" class="recharts-sector"
                        d="M 106.50501563840044,175.30727990819608 A 80,80,0, 0,0, 175.95126616152766,98.79195973620007 L 150.96649548605026,97.91947231863755 A 55,55,0, 0,1, 103.2221982514003,150.5237549368848 Z"></path>
                    </g>
                    <g class="recharts-layer recharts-pie-sector">
                      <path cx="96" cy="96" fill="#1E293B" stroke="#fff" stroke-width="2" d="
            M 96,16
            A 80,80 0 0,1 176,96
            L 151,96
            A 55,55 0 0,0 96,41
            Z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-2xl sm:text-3xl font-bold text-foreground">22</span>
                <span class="text-sm text-muted-foreground">Total Projects</span>
              </div>
            </div>

           <div class="grid grid-cols-2 gap-x-6 sm:gap-4 gap-y-4">
  <div class="bg-[#F8F8F8] h-7 w-40 flex items-center justify-center rounded-lg">
    <div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
<span class="text-sm text-muted-foreground">Completed </span>
  <span class="text-sm font-semibold text-gray-700 ml-4">60%</span>

</div>
</div>
<div class="bg-[#F8F8F8] h-7 w-40 flex items-center justify-center rounded-lg">
  <div class="flex items-center gap-3">
    <div class="w-3 h-3 rounded-full bg-[#64748B]"></div>
    <span class="text-sm text-muted-foreground">Pending</span>
    <span class="text-sm font-semibold text-gray-700 ">25%</span>
  </div>
</div>
<div class="bg-[#F8F8F8] h-7 w-40 flex items-center justify-center rounded-lg">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-[#1E293B]">

</div>
<span class="text-sm text-muted-foreground">In Progress</span>
  <span class="text-sm font-semibold text-gray-700 ml-4">10%</span>
</div>
</div>
<div class="bg-[#F8F8F8] h-7 w-40 flex items-center justify-center rounded-lg">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-[#CBD5E1]"></div>
<span class="text-sm text-muted-foreground">Cancelled</span>
<span class="text-sm font-semibold text-gray-700 ml-7">5%</span>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects & Activity Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Active Projects Table -->
        <div class="lg:col-span-8">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <div class="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 gap-4">
              <div>
                <h3 class="text-slate-900 font-bold text-lg">Active Project Stream</h3>
                <p class="text-slate-500 text-xs mt-1">Real-time status of current development pipelines</p>
              </div>
              <button class="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors flex items-center gap-1 self-start sm:self-center">
                View All
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left min-w-[600px]">
                <thead>
                  <tr class="bg-slate-50/50">
                    <th class="px-4 sm:px-6 py-3 text-slate-500 font-semibold text-[11px] sm:text-[12px] uppercase tracking-widest">Project Name</th>
                    <th class="px-4 sm:px-6 py-3 text-slate-500 font-semibold text-[11px] sm:text-[12px] uppercase tracking-widest">Team</th>
                    <th class="px-4 sm:px-6 py-3 text-slate-500 font-semibold text-[11px] sm:text-[12px] uppercase tracking-widest text-center">Completion</th>
                    <th class="px-4 sm:px-6 py-3 text-slate-500 font-semibold text-[11px] sm:text-[12px] uppercase tracking-widest">Target Date</th>
                    <th class="px-4 sm:px-6 py-3 text-slate-500 font-semibold text-[11px] sm:text-[12px] uppercase tracking-widest text-left">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr v-for="(project, index) in projects" :key="index" class="group hover:bg-slate-50/50 transition-all">
                    <td class="px-4 sm:px-6 py-4">
                      <span class="text-slate-900 font-bold block">{{ project.name }}</span>
                    </td>
                    <td class="px-4 sm:px-6 py-4">
                      <div class="flex items-center gap-2">
                        <div class="flex -space-x-2 overflow-hidden">
                          <div v-for="(member, idx) in project.team" :key="idx"
                            class="inline-flex h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white bg-slate-100 items-center justify-center text-[11px] sm:text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm"
                            :title="member.name">
                            {{ member.initials }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 sm:px-6 py-4">
                      <div class="flex items-center justify-center gap-3 max-w-[120px] sm:max-w-[180px] mx-auto">
                        <div class="flex-grow bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div class="h-full rounded-full transition-all duration-1000 ease-out bg-[#5590E9]"
                            :style="{ width: project.progress + '%' }"></div>
                        </div>
                        <span class="text-xs font-black text-slate-900 tabular-nums">{{ project.progress }}%</span>
                      </div>
                    </td>
                    <td class="px-4 sm:px-6 py-4">
                      <span class="text-slate-600 text-sm font-semibold">{{ project.targetDate }}</span>
                    </td>
                    <td class="px-4 sm:px-6 py-4 text-left">
                      <button class="text-[#1E293B] hover:text-slate-600 p-1">
                        <img src="/public/Foreign.png" alt="View" class="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Last Activity -->
        <div class="lg:col-span-4 bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-6 sm:mb-8">
            <h3 class="text-slate-900 font-bold text-lg">Last Activity</h3>
            <button class="text-sm text-blue-600 font-bold hover:underline whitespace-nowrap">View All</button>
          </div>

          <div class="space-y-4">
            <div v-for="(activity, index) in activities" :key="index" class="flex items-start gap-3 sm:gap-4">
              <div class="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl"
                :class="activity.bgColor">
                <component :is="activity.icon" class="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-sm sm:text-base text-card-foreground">{{ activity.title }}</p>
                <p class="text-xs sm:text-sm text-muted-foreground truncate">{{ activity.description }}</p>
              </div>
              <span class="text-xs text-muted-foreground shrink-0 whitespace-nowrap">{{ activity.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

// Mobile search state
const showMobileSearch = ref(false)

// Projects data
const projects = ref([
  {
    name: 'CRM System',
    team: [
      { name: 'Sarah Chen', initials: 'SC' },
      { name: 'Mike Ross', initials: 'MR' },
      { name: 'Jessica P.', initials: 'JP' }
    ],
    progress: 75,
    targetDate: 'May 20'
  },
  {
    name: 'E-Commerce App',
    team: [
      { name: 'David Kim', initials: 'DK' },
      { name: 'Emma Watson', initials: 'EW' }
    ],
    progress: 50,
    targetDate: 'Jun 5'
  },
  {
    name: 'Mobile App',
    team: [
      { name: 'David Kim', initials: 'DK' },
      { name: 'Emma Watson', initials: 'EW' }
    ],
    progress: 20,
    targetDate: 'Jun 5'
  },
  {
    name: 'Website Redesign',
    team: [
      { name: 'David Kim', initials: 'DK' },
      { name: 'Emma Watson', initials: 'EW' }
    ],
    progress: 12,
    targetDate: 'Jun 5'
  }
])

// Activities data
const activities = ref([
  {
    title: 'Task Completed',
    description: 'Designing the user interface for the home page',
    time: '5 minutes ago',
    icon: 'CheckCircle',
    bgColor: 'bg-[#E7F5EC] text-[#49B671]'
  },
  {
    title: 'New Payment',
    description: 'Receipt of 15,000 SAR from Technology Company',
    time: '30 minutes ago',
    icon: 'DollarSign',
    bgColor: 'bg-[#E6F5FC] text-[#2AADEA]'
  },
  {
    title: 'New Client',
    description: 'Innovation Company added to the list',
    time: 'an hour ago',
    icon: 'UserPlus',
    bgColor: 'bg-[#FDF5E6] text-[#F7B747]'
  },
  {
    title: 'New Message',
    description: 'Muhammad sent an update about the project',
    time: '2 hours ago',
    icon: 'MessageSquare',
    bgColor: 'bg-purple-500/10 text-purple-500'
  },
  {
    title: 'New File',
    description: 'Application project contract uploaded',
    time: '3 hours ago',
    icon: 'FileText',
    bgColor: 'bg-blue-500/10 text-blue-500'
  }
])

// Chart setup
const chartRef = ref(null)
let chartInstance = null
let resizeObserver = null

const data = [
  { name: 'JAN', revenue: 4000, expenses: 2400 },
  { name: 'FEB', revenue: 3000, expenses: 1398 },
  { name: 'MAR', revenue: 9800, expenses: 2000 },
  { name: 'APR', revenue: 2780, expenses: 3908 },
  { name: 'MAY', revenue: 1890, expenses: 4800 },
  { name: 'JUN', revenue: 2390, expenses: 3800 },

]

const option = {
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      let result = params[0].name + '<br/>'
      params.forEach(function (item) {
        result += item.marker + ' ' + item.seriesName + ': ' + item.value + '<br/>'
      })
      return result
    }
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item.name),
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#e5e7eb'
      }
    },
    axisLabel: {
      color: '#6b7280',
      fontSize: 12
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#e5e7eb'
      }
    },
    axisLabel: {
      color: '#6b7280',
      fontSize: 12
    },
    splitLine: {
      lineStyle: {
        color: '#f3f4f6',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      name: 'Revenue',
      type: 'line',
      data: data.map(item => item.revenue),
      smooth: true,
      lineStyle: {
        color: '#22c55e',
        width: 3
      },
      itemStyle: {
        color: '#22c55e'
      },
      symbolSize: 6,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(34, 197, 94, 0.2)'
          },
          {
            offset: 1,
            color: 'rgba(34, 197, 94, 0)'
          }
        ])
      }
    },
    {
      name: 'Expenses',
      type: 'line',
      data: data.map(item => item.expenses),
      smooth: true,
      lineStyle: {
        color: '#dc2626',
        width: 3
      },
      itemStyle: {
        color: '#dc2626'
      },
      symbolSize: 6,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(220, 38, 38, 0.2)'
          },
          {
            offset: 1,
            color: 'rgba(220, 38, 38, 0)'
          }
        ])
      }
    }
  ]
}

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value
}

onMounted(() => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value)
    chartInstance.setOption(option)

    // Use ResizeObserver instead of window resize for better container-specific resizing
    resizeObserver = new ResizeObserver(() => {
      if (chartInstance) {
        chartInstance.resize()
      }
    })
    resizeObserver.observe(chartRef.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  if (chartInstance) {
    chartInstance.dispose()
  }
})
</script>

<style scoped>
/* Custom styles for better mobile experience */
@media (max-width: 640px) {
  .xs\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Hide scrollbar but keep functionality */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Improve touch targets */
button, 
input,
select,
textarea {
  font-size: 16px; /* Prevents zoom on iOS */
}

@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Smooth transitions */
* {
  transition: all 0.2s ease;
}
</style>

<!-- Define Lucide icons components -->
<script>
import { CheckCircle, DollarSign, UserPlus, MessageSquare, FileText } from 'lucide-vue-next'

export default {
  components: {
    CheckCircle,
    DollarSign,
    UserPlus,
    MessageSquare,
    FileText
  }
}
</script>