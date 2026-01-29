
<template>

<main class="flex-1 transition-all duration-300 ease-in-out  ">
        <div class="p-8 -mt-8">

      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 mt-2 gap-4">
      <div>
    <h1 class="text-2xl font-semibold text-slate-800 mt-2">Main Dashboard</h1>
    <p class="text-slate-500 mt-1">Let's check for your updates today</p>
  </div>
  <!-- <div class="flex items-center gap-4">
    <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-[#1E293B]" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
    </svg>
    <input placeholder="Search anything..." class="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64 shadow-sm" type="text">
  </div>

</div> -->
      </div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div
            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-55">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 640 512">
                  <path fill="currentColor"
                    d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32M192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32" />
                </svg>              
                </div>
                <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Projects</h3>
              </div><button class="text-slate-300 hover:text-slate-600 transition-colors"><svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg></button>
            </div>
            <div class="mb-4">
              <div class="flex items-end gap-2"><span class="text-3xl font-bold text-slate-900">24</span>
                <div class="flex items-center gap-1 mb-1.5">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#48BB78" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
</svg>                  
                  <span class="text-[11px] font-bold text-[#48BB78]">+12% since last month</span></div>
              </div>
              <!-- <p class="text-[11px] text-[#1E293B] font-medium uppercase">Workflow Distribution</p> -->
            </div>
            <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
              <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 58.3333%;"></div>
              <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 33.3333%;"></div>
              <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 8.33333%;"></div>
            </div>
            <div class="mt-4 flex gap-y-3 gap-x-4">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                <div class="flex items-center gap-2"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none">Active</span><span
                    class="text-[12px] font-semibold text-slate-700 leading-none">14</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none">Completed</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">8</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none">Pending</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">2</span></div>
              </div>
            </div>
          </div>
          
          <div
            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-55">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg text-blue-600 bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big"
                    aria-hidden="true">
                    <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg></div>
                <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Tasks</h3>
              </div><button class="text-slate-300 hover:text-slate-600 transition-colors"><svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg></button>
            </div>
            <div class="mb-4">
              <div class="flex items-end gap-2"><span class="text-3xl font-bold text-slate-900">120</span>
                <div class="flex items-center gap-1 mb-1.5">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#48BB78" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
</svg>  <span class="text-[11px] font-bold text-[#48BB78]">+10% since last month</span></div>
              </div>
              <!-- <p class="text-[11px] text-[#1E293B] font-medium uppercase">Efficiency Pipeline</p> -->
            </div>
            <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
               <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 58.3333%;"></div>
              <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 29.1667%;"></div>
             
              <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 12.5%;"></div>
            </div>
            <div class="mt-4 flex gap-y-3 gap-x-4">
              <div class="flex items-center gap-2">
           
                <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
                   <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Done</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">35</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Pending</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">70</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Overdue</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">15</span></div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-55">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg text-blue-600 bg-blue-50"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg></div>
                <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Clients</h3>
              </div><button class="text-slate-300 hover:text-slate-600 transition-colors"><svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg></button>
            </div>
            <div class="mb-4">
              <div class="flex items-end gap-2"><span class="text-3xl font-bold text-slate-900">79</span>
                <div class="flex items-center gap-1 mb-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#48BB78" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
</svg>  
                  <span class="text-[11px] font-bold text-[#48BB78]">+6% since last month </span></div>
              </div>
              <!-- <p class="text-[11px] text-[#1E293B] font-medium uppercase">Portfolio Growth</p> -->
            </div>
            <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
              <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 82.2785%;"></div>
              <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 17.7215%;"></div>
            </div>
                <div class="mt-4 flex gap-y-3 gap-x-4">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Active</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">65</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Inactive</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">14</span></div>
              </div>
            </div>
          </div>
          <div
            class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-55">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center gap-3">
                <div class="p-2 rounded-lg text-blue-600 bg-blue-50"><svg xmlns="http://www.w3.org/2000/svg" width="20"
                    height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet" aria-hidden="true">
                    <path
                      d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1">
                    </path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg></div>
                <h3 class="text-slate-800 font-semibold text-xs uppercase tracking-wider">Finance</h3>
              </div><button class="text-slate-300 hover:text-slate-600 transition-colors"><svg
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="#64748B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg></button>
            </div>
            <div class="mb-4">
              <div class="flex items-end gap-2"><span class="text-3xl font-bold text-slate-900">$120k</span>
                <div class="flex items-center gap-1 mb-1.5">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#48BB78" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
</svg>  
        
                  <span class="text-[11px] font-bold text-[#48BB78]">+6% since last month</span></div>
              </div>
              <!-- <p class="text-[11px] text-[#1E293B] font-medium uppercase">Revenue Snapshot</p> -->
            </div>
            <div class="w-full h-1.5 flex rounded-full overflow-hidden mb-4 bg-slate-100">
              <div class="bg-[#3B82F6] transition-all duration-500 ease-out" style="width: 50%;"></div>
              <div class="bg-[#1A2A3A] transition-all duration-500 ease-out" style="width: 35.4167%;"></div>
              <div class="bg-[#CBD5E1] transition-all duration-500 ease-out" style="width: 14.5833%;"></div>
            </div>
              <div class="mt-4 flex gap-y-3 gap-x-4">
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Income</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">120</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#1E293B]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Expenses</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">85</span></div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]"></div>
                <div class="flex items-center gap-1"><span
                    class="text-[12px] text-[#1E293B] uppercase leading-none ">Profit</span><span
                    class="text-[12px] font-bold text-slate-700 leading-none">35</span></div>
              </div>
            </div>
          </div>
        













  <!-- <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-[#1E293B] group-hover:text-blue-600" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
    <span class="text-[#1E293B] font-medium">Clients</span>
    </div>
    <button class="text-slate-300 hover:text-slate-500">
      
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
    </svg>
    
  </button>
  
</div>
<div class="flex items-end justify-between"><div>
<h3 class="text-3xl font-bold text-slate-800">316</h3>
<div class="flex items-center gap-1.5 mt-2 text-emerald-500 text-sm font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
</svg>
<span>10% last month</span>
</div>
</div>

</div>
</div>
<div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-[#1E293B] group-hover:text-blue-600" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
    <span class="text-[#1E293B] font-medium">Clients</span>
    </div>
    <button class="text-slate-300 hover:text-slate-500">
      
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
    </svg>
    
  </button>
</div>
<div class="flex items-end justify-between"><div>
<h3 class="text-3xl font-bold text-slate-800">316</h3>
<div class="flex items-center gap-1.5 mt-2 text-emerald-500 text-sm font-semibold">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
  </svg>
  <span>10% last month</span>
</div>
</div>

</div>
</div>

<div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-[#1E293B] group-hover:text-blue-600" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
    <span class="text-[#1E293B] font-medium">Clients</span>
    </div>
    <button class="text-slate-300 hover:text-slate-500">
      
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
    </svg>
    
  </button>
</div>
<div class="flex items-end justify-between"><div>
<h3 class="text-3xl font-bold text-slate-800">316</h3>
<div class="flex items-center gap-1.5 mt-2 text-emerald-500 text-sm font-semibold">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
  </svg>
  <span>10% last month</span>
</div>
</div>

</div>
</div>

<div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-[#1E293B] group-hover:text-blue-600" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
    <span class="text-[#1E293B] font-medium">Clients</span>
    </div>
    <button class="text-slate-300 hover:text-slate-500">
      
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-vertical" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
    </svg>
    
  </button>
</div>
<div class="flex items-end justify-between"><div>
<h3 class="text-3xl font-bold text-slate-800">316</h3>
<div class="flex items-center gap-1.5 mt-2 text-emerald-500 text-sm font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
</svg>
<span>10% last month</span>
</div>
</div>

</div> -->
</div>

  

<!-- Application Types -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
  
<div class="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
  <div class="flex items-center justify-between mb-8">
    <h3 class="text-lg font-bold text-slate-800">Monthly Trends</h3>
    <div class="flex gap-2">
      <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">Last 3 months 
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">All
         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
  </div>
   <div class="flex items-center justify-center gap-8 mt-4">
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full" style="background-color: rgb(34, 197, 94)"></div>
        <span class="text-sm text-gray-600">Revenue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-3 h-3 rounded-full" style="background-color: rgb(220, 38, 38)"></div>
        <span class="text-sm text-gray-600">Expenses</span>
      </div>
    </div>
  <!-- Chart -->
    <div ref="chartRef" style="width: 100%; max-width: 1200px; height: 400px;"></div>

    <!-- Custom legend -->
   
  </div>
  <!-- <div class="h-[300px] w-full relative">
  <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;"><div style="width: 0px; height: 0px; overflow: visible;">
  <div width="800" height="300" class="recharts-wrapper" style="position: relative; cursor: default; width: 800px; height: 300px;"><div xmlns="http://www.w3.org/1999/xhtml" tabindex="-1" class="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style="visibility: hidden; pointer-events: none; position: absolute; top: 0px; left: 0px; transform: translate(141.75px, 216px);">
  <div class="recharts-default-tooltip" role="status" aria-live="assertive" style="margin: 0px; padding: 12px; background-color: rgb(255, 255, 255); border: none; white-space: nowrap; border-radius: 16px; box-shadow: rgba(0, 0, 0, 0.1) 0px 12px 15px -3px; font-size: 12px;"><p class="recharts-tooltip-label" style="margin: 0px;"></p></div>
</div>
<svg role="application" tabindex="0" class="recharts-surface" width="800" height="300" viewBox="0 0 800 300" style="width: 100%; height: 100%; display: block;"><title></title><desc></desc>
  <g tabindex="-1">
    <g class="recharts-cartesian-grid">
  <g class="recharts-cartesian-grid-horizontal">
  <line stroke-dasharray="3 3" stroke="#f1f5f9" fill="none" x="60" y="20" width="740" height="250" x1="60" y1="270" x2="800" y2="270"></line>
  <line stroke-dasharray="3 3" stroke="#f1f5f9" fill="none" x="60" y="20" width="740" height="250" x1="60" y1="207.5" x2="800" y2="207.5"></line><line stroke-dasharray="3 3" stroke="#f1f5f9" fill="none" x="60" y="20" width="740" height="250" x1="60" y1="145" x2="800" y2="145"></line><line stroke-dasharray="3 3" stroke="#f1f5f9" fill="none" x="60" y="20" width="740" height="250" x1="60" y1="82.5" x2="800" y2="82.5"></line><line stroke-dasharray="3 3" stroke="#f1f5f9" fill="none" x="60" y="20" width="740" height="250" x1="60" y1="20" x2="800" y2="20"></line></g></g></g><g tabindex="-1"></g><defs><clipPath id="recharts1-clip"><rect x="60" y="20" height="250" width="740"></rect></clipPath></defs><defs><linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stop-color="#10b981" stop-opacity="0.1"></stop><stop offset="95%" stop-color="#10b981" stop-opacity="0"></stop></linearGradient></defs><g tabindex="-1"></g><g tabindex="-1"></g><g tabindex="-1"></g><g tabindex="-1"><g class="recharts-layer recharts-line"><path stroke="#10b981" stroke-width="3" fill="none" id="recharts-line-_r_0_" height="250" width="574" class="recharts-curve recharts-line-curve" stroke-dasharray="659.8093px 0.000026171874992542143px" d="M60,195C83.917,165.833,107.833,136.667,131.75,136.667C155.667,136.667,179.583,153.333,203.5,153.333C227.417,153.333,251.333,95,275.25,95C299.167,95,323.083,120,347,120C370.917,120,394.833,70,418.75,70C442.667,70,466.583,107.5,490.5,107.5C514.417,107.5,538.333,95,562.25,95C586.167,95,610.083,103.333,634,111.667"></path></g><g class="recharts-layer recharts-line"><path stroke="#dc2626" stroke-width="3" fill="none" id="recharts-line-_r_1_" height="250" width="574" class="recharts-curve recharts-line-curve" stroke-dasharray="610.6939px 0.000008691406264915713px" d="M60,224.167C83.917,213.75,107.833,203.333,131.75,203.333C155.667,203.333,179.583,215.833,203.5,215.833C227.417,215.833,251.333,170,275.25,170C299.167,170,323.083,195,347,195C370.917,195,394.833,182.5,418.75,182.5C442.667,182.5,466.583,203.333,490.5,203.333C514.417,203.333,538.333,174.167,562.25,174.167C586.167,174.167,610.083,176.25,634,178.333"></path></g></g><g tabindex="-1">
       <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"> <line orientation="bottom" width="748" height="30" dy="10" :x="chartLeft" y="260" class="recharts-cartesian-axis-line" stroke="#e5e7eb" fill="none" :x1="chartLeft" y1="260" :x2="chartLeft + chartWidth" y2="260"></line> <g class="recharts-cartesian-axis-ticks"> <g v-for="(m, i) in months" :key="m" class="recharts-layer recharts-cartesian-axis-tick"> <text orientation="bottom" width="748" height="30" stroke="none" font-size="12" :x="xPositions[i]" y="278" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="middle" fill="#6b7280"><tspan :x="xPositions[i]" dy="0.71em">{{ m }}</tspan></text> </g> </g> </g>
     
     
      <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"> -->
        <!-- vertical axis line bound to chartTop/chartHeight -->
        <!-- <line orientation="left" :x="chartLeft" class="recharts-cartesian-axis-line" stroke="#e5e7eb" fill="none" :y1="chartTop" :y2="chartTop + chartHeight"></line>
        
        <g class="recharts-cartesian-axis-ticks recharts-yAxis-ticks">
          
          <g class="recharts-cartesian-axis-tick-lines recharts-yAxis-tick-lines"><g class="recharts-layer recharts-cartesian-axis-tick"></g><g class="recharts-layer recharts-cartesian-axis-tick"></g><g class="recharts-layer recharts-cartesian-axis-tick"></g><g class="recharts-layer recharts-cartesian-axis-tick"></g><g class="recharts-layer recharts-cartesian-axis-tick"></g></g></g></g></g>
          <g tabindex="-1"><g class="recharts-layer recharts-line-dots"><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="60" cy="195" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="131.75" cy="136.66666666666666" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="203.5" cy="153.33333333333334" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="275.25" cy="95.00000000000001" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="347" cy="120" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="418.75" cy="69.99999999999999" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="490.5" cy="107.5" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="562.25" cy="95.00000000000001" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#10b981" height="250" width="574" cx="634" cy="111.66666666666669" class="recharts-dot recharts-line-dot"></circle></g><g class="recharts-layer recharts-line-dots"><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="60" cy="224.16666666666666" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="131.75" cy="203.33333333333337" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="203.5" cy="215.83333333333334" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="275.25" cy="170" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="347" cy="195" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="418.75" cy="182.5" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="490.5" cy="203.33333333333337" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="562.25" cy="174.16666666666666" class="recharts-dot recharts-line-dot"></circle><circle r="4" stroke="#fff" stroke-width="2" fill="#dc2626" height="250" width="574" cx="634" cy="178.33333333333334" class="recharts-dot recharts-line-dot"></circle></g></g><g tabindex="-1"></g>
  
  <g class="recharts-cartesian-axis-tick-labels recharts-yAxis-tick-labels">
  <g class="recharts-layer recharts-cartesian-axis-tick-label"><text orientation="left" width="60" height="250" stroke="none" font-size="12" x="52" y="270" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#94a3b8"><tspan x="52" dy="0.355em">0</tspan></text></g>
  <g class="recharts-layer recharts-cartesian-axis-tick-label"><text orientation="left" width="60" height="250" stroke="none" font-size="12" x="52" y="207.5" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#94a3b8"><tspan x="52" dy="0.355em">150</tspan></text></g>
  <g class="recharts-layer recharts-cartesian-axis-tick-label"><text orientation="left" width="60" height="250" stroke="none" font-size="12" x="52" y="145" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#94a3b8"><tspan x="52" dy="0.355em">300</tspan></text></g>
  <g class="recharts-layer recharts-cartesian-axis-tick-label"><text orientation="left" width="60" height="250" stroke="none" font-size="12" x="52" y="82.5" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#94a3b8"><tspan x="52" dy="0.355em">450</tspan></text></g>
  <g class="recharts-layer recharts-cartesian-axis-tick-label"><text orientation="left" width="60" height="250" stroke="none" font-size="12" x="52" y="20" class="recharts-text recharts-cartesian-axis-tick-value" text-anchor="end" fill="#94a3b8"><tspan x="52" dy="0.355em">600</tspan></text></g>
</g>

</svg> -->
    
  <!-- Application Status -->

<div class="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
<div class="flex items-center justify-between mb-8">
<h3 class="text-lg font-bold text-slate-800" title="Application Status: Overview of project statuses">Project Status</h3>
<div class="flex gap-2">
<button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">Last 3 months 
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
  </svg>
</button>
<button class="text-xs px-3 py-1.5 bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 border border-slate-200">Cases 
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down" aria-hidden="true"><path d="m6 9 6 6 6-6"></path>
  </svg>
</button>
</div>
</div>

   <div class="flex flex-col  items-center gap-8">
    <div class="relative w-64 h-64"> 
  <div class="recharts-responsive-container" style="width: 100%; height: 100%; min-width: 0px;">
    <div class="recharts-wrapper" style="position: relative; cursor: default; width: 100%; height: 100%; max-height: 256px; max-width: 256px;">
                 <svg cx="50%" cy="50%" class="recharts-surface" width="256" height="256" viewBox="0 0 192 192"
                    style="width: 100%; height: 100%;">
                    <title></title>
                    <desc></desc>
                    <defs>
                      <clipPath id="recharts1-clip">
                        <rect x="5" y="5" height="182" width="182"></rect>
                      </clipPath>
                    </defs>
                    <g class="recharts-layer recharts-pie" tabindex="0">
                      <g class="recharts-layer">
                        <g class="recharts-layer recharts-pie-sector" tabindex="-1">
                          <path cx="96" cy="96" name="Pending Assignment" stroke="#fff" fill="#64748B"
                            stroke-width="0" color="#64748B" tabindex="-1" class="recharts-sector" d="M 176,96
    A 80,80,0,
    0,0,
    20.399934502826525,69.83456293460625
  L 44.02495497069324,78.0112620175418
            A 55,55,0,
            0,1,
            151,96 Z" role="img"></path>
                        </g>
                        <g class="recharts-layer recharts-pie-sector" tabindex="-1">
                          <path cx="96" cy="96" name="Closed" stroke="#fff" fill="#3B82F6" stroke-width="0"
                            color="#3B82F6" tabindex="-1" class="recharts-sector" d="M 19.532827435498803,72.48890644842751
    A 80,80,0,
    0,0,
    103.73083211306908,175.6255878147191
  L 101.314947077735,150.74259162261936
            A 55,55,0,
            0,1,
            43.42881886190542,79.83612318329392 Z" role="img"></path>
                        </g>
                        <g class="recharts-layer recharts-pie-sector" tabindex="-1">
                          <path cx="96" cy="96" name="Cancelled" stroke="#fff" fill="#CBD5E1" stroke-width="0"
                            color="#CBD5E1" tabindex="-1" class="recharts-sector" d="M 106.50501563840044,175.30727990819608
    A 80,80,0,
    0,0,
    175.95126616152766,98.79195973620007
  L 150.96649548605026,97.91947231863755
            A 55,55,0,
            0,1,
            103.2221982514003,150.5237549368848 Z" role="img"></path>
                        </g>

                        <g class="recharts-layer recharts-pie-sector" tabindex="-1">
                          <path cx="96" cy="96" fill="#1E293B" stroke="#fff" stroke-width="2" d="
      M 96,16
      A 80,80 0 0,1 176,96
      L 151,96
      A 55,55 0 0,0 96,41
      Z
    " role="img"></path>
                        </g>


                      </g>
                    </g>
                  </svg>
      
        </div>
      </div>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
      <span class="text-3xl font-bold text-foreground">22</span>
      <span class="text-sm text-muted-foreground">Total Projects</span>
    </div>
  </div>


<div class="grid grid-cols-2 gap-x-6 gap-y-4">
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
      
      
      
        
      <!-- My Active Projects -->
    <!-- <div class="lg:col-span-8 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col">
              
      <div class="mb-8 text-left"><h3 class="text-2xl font-black text-slate-800">My Active Projects</h3>
                <p class="text-sm text-[#1E293B] font-semibold mt-1">General overview of current initiatives</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> -->

              <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> -->

                <!-- <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group"><div class="flex justify-between items-start mb-4"><div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#1E293B] group-hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-sm font-bold text-slate-800">Atlas Project</p><p class="text-[12px] text-[#1E293B]">Due Dec 31, 2024</p></div></div><div class="mb-2"><div class="flex justify-between text-[12px] font-bold mb-1.5"><span class="text-[#1E293B]">Progress</span><span class="text-slate-800">75%</span></div><div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: 75%;"></div></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">AS</div><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[8px] font-bold">MA</div></div><button class="px-4 py-1.5 bg-[#0f172a] text-white text-[12px] font-bold rounded-lg hover:bg-slate-800 transition-colors">View Details</button></div></div>
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group"><div class="flex justify-between items-start mb-4"><div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#1E293B] group-hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-sm font-bold text-slate-800">Design System</p><p class="text-[12px] text-[#1E293B]">Due Jan 15, 2025</p></div></div><div class="mb-2"><div class="flex justify-between text-[12px] font-bold mb-1.5"><span class="text-[#1E293B]">Progress</span><span class="text-slate-800">45%</span></div><div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: 45%;"></div></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">AS</div><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[8px] font-bold">MA</div></div><button class="px-4 py-1.5 bg-[#0f172a] text-white text-[12px] font-bold rounded-lg hover:bg-slate-800 transition-colors">View Details</button></div></div>
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group"><div class="flex justify-between items-start mb-4"><div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#1E293B] group-hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-sm font-bold text-slate-800">Design System</p><p class="text-[12px] text-[#1E293B]">Due Jan 15, 2025</p></div></div><div class="mb-2"><div class="flex justify-between text-[12px] font-bold mb-1.5"><span class="text-[#1E293B]">Progress</span><span class="text-slate-800">45%</span></div><div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: 45%;"></div></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">AS</div><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[8px] font-bold">MA</div></div><button class="px-4 py-1.5 bg-[#0f172a] text-white text-[12px] font-bold rounded-lg hover:bg-slate-800 transition-colors">View Details</button></div></div>
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group"><div class="flex justify-between items-start mb-4"><div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#1E293B] group-hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-sm font-bold text-slate-800">Design System</p><p class="text-[12px] text-[#1E293B]">Due Jan 15, 2025</p></div></div><div class="mb-2"><div class="flex justify-between text-[12px] font-bold mb-1.5"><span class="text-[#1E293B]">Progress</span><span class="text-slate-800">45%</span></div><div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: 45%;"></div></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">AS</div><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[8px] font-bold">MA</div></div><button class="px-4 py-1.5 bg-[#0f172a] text-white text-[12px] font-bold rounded-lg hover:bg-slate-800 transition-colors">View Details</button></div></div>
                <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm group"><div class="flex justify-between items-start mb-4"><div class="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[#1E293B] group-hover:bg-blue-50 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-sm font-bold text-slate-800">Design System</p><p class="text-[12px] text-[#1E293B]">Due Jan 15, 2025</p></div></div><div class="mb-2"><div class="flex justify-between text-[12px] font-bold mb-1.5"><span class="text-[#1E293B]">Progress</span><span class="text-slate-800">45%</span></div><div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000" style="width: 45%;"></div></div></div><div class="flex items-center justify-between"><div class="flex -space-x-2"><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold">AS</div><div class="w-6 h-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[8px] font-bold">MA</div></div><button class="px-4 py-1.5 bg-[#0f172a] text-white text-[12px] font-bold rounded-lg hover:bg-slate-800 transition-colors">View Details</button></div></div> -->
                
   
   
   
   
   
   
                <!-- My Active Projects -->
           <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

<div class="lg:col-span-8">
  
<div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
<div class="p-6 flex items-center justify-between border-b border-slate-100"><div>
  <h3 class="text-slate-900 font-bold text-lg">Active Project Stream</h3>
  <p class="text-slate-500 text-xs mt-1">Real-time status of current development pipelines</p></div>
  <button class="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors flex items-center gap-1">View All
  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
  </svg>
</button>
</div>
<div class="overflow-x-auto">
  <table class="w-full text-left">
  <thead><tr class="bg-slate-50/50">
  <th class="px-6 py-4 text-slate-500 font-semibold text-[12px] uppercase tracking-widest">Project Name</th>
  <th class="px-6 py-4 text-slate-500 font-semibold text-[12px] uppercase tracking-widest">Team Composition</th>
  <th class="px-6 py-4 text-slate-500 font-semibold text-[12px] uppercase tracking-widest text-center">Completion</th>
  <th class="px-6 py-4 text-slate-500 font-semibold text-[12px] uppercase tracking-widest">Target Date</th>
  <!-- <th class="px-6 py-4 text-slate-500 font-semibold text-[12px] uppercase tracking-widest text-left">Health</th> -->
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
  <tr class="group hover:bg-slate-50/50 transition-all">
  <td class="px-6 py-5">
  <div class="flex items-center gap-3">
 
  <span class="text-slate-900 font-bold block">CRM System</span>
</div>
</td>
<td class="px-6 py-5">
  <div class="flex items-center gap-2">
    <div class="flex -space-x-2 overflow-hidden">
<div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 
            items-center justify-center text-[12px] font-bold text-slate-600 
            cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm">
  SC
</div>
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center leading-none text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="Mike Ross">MR</div>
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="Jessica P.">JP</div>
    </div>
    <!-- <button class="p-1.5 rounded-full hover:bg-slate-200 text-[#1E293B] hover:text-slate-600 transition-colors bg-slate-100" title="Manage Team">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button> -->
  </div>
</td>

<td class="px-6 py-5">
  <div class="flex items-center justify-center gap-3 max-w-[180px] mx-auto">
    <div class="flex-grow bg-slate-100 rounded-full h-1.5 overflow-hidden">
    <div class="h-full rounded-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 75%; "></div>
  </div>
  <span class="text-xs font-black text-slate-900 tabular-nums">75%</span>
</div>
</td>
<td class="px-6 py-5">
<span class="text-slate-600 text-sm font-semibold">May 20</span>
</td>
<td class="px-6 py-5 text-left">
<div class="flex ">
<!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-rose-50 text-rose-600 border-rose-100">At Risk</span> -->

<button class="text-[#1E293B] hover:text-slate-600 p-1">
  <img
    src="/public/Foreign.png"
    alt="View"
    class="w-4 h-4"
  />
</button>

</div>
</td>
</tr>



<tr class="group hover:bg-slate-50/50 transition-all">
  <td class="px-6 py-5">
    <div class="flex items-center gap-3">
 
    <span class="text-slate-900 font-bold block">E-Commerce App</span>
  </div>
</td>
<td class="px-6 py-5">
  <div class="flex items-center gap-2">
    <div class="flex -space-x-2 overflow-hidden">
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="David Kim">DK</div>
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="Emma Watson">EW</div>
    </div>
    <!-- <button class="p-1.5 rounded-full hover:bg-slate-200 text-[#1E293B] hover:text-slate-600 transition-colors bg-slate-100" title="Manage Team">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button> -->
    </div>
  </td>
  <td class="px-6 py-5">
    <div class="flex items-center justify-center gap-3 max-w-[180px] mx-auto">
      <div class="flex-grow bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div class="h-full rounded-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 50%"></div>
      </div><span class="text-xs font-black text-slate-900 tabular-nums">50%</span>
    </div>
  </td>
  <td class="px-6 py-5">
    <span class="text-slate-600 text-sm font-semibold">Jun 5</span>
  </td>
<td class="px-6 py-5 text-left">
<div class="flex ">
<!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-rose-50 text-rose-600 border-rose-100">At Risk</span> -->

<button class="text-[#1E293B] hover:text-slate-600 p-1">
  <img
    src="/public/Foreign.png"
    alt="View"
    class="w-4 h-4"
  />
</button>
    <!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-emerald-50 text-emerald-600 border-emerald-100">Normal</span> -->
  </div></td>
</tr>



<tr class="group hover:bg-slate-50/50 transition-all">
  <td class="px-6 py-5">
    <div class="flex items-center gap-3">

    <span class="text-slate-900 font-bold block">E-Commerce App</span>
  </div>
</td>
<td class="px-6 py-5">
  <div class="flex items-center gap-2">
    <div class="flex -space-x-2 overflow-hidden">
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="David Kim">DK</div>
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="Emma Watson">EW</div>
    </div>
    <!-- <button class="p-1.5 rounded-full hover:bg-slate-200 text-[#1E293B] hover:text-slate-600 transition-colors bg-slate-100" title="Manage Team">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button> -->
    </div>
  </td>
  <td class="px-6 py-5">
    <div class="flex items-center justify-center gap-3 max-w-[180px] mx-auto">
      <div class="flex-grow bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div class="h-full rounded-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 20%;"></div>
      </div><span class="text-xs font-black text-slate-900 tabular-nums">20%</span>
    </div>
  </td>
  <td class="px-6 py-5">
    <span class="text-slate-600 text-sm font-semibold">Jun 5</span>
  </td>
  <td class="px-6 py-5 text-left">
<div class="flex ">
<!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-rose-50 text-rose-600 border-rose-100">At Risk</span> -->

<button class="text-[#1E293B] hover:text-slate-600 p-1">
  <img
    src="/public/Foreign.png"
    alt="View"
    class="w-4 h-4"
  />
</button>
    <!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-emerald-50 text-emerald-600 border-emerald-100">Normal</span> -->
  </div></td>
</tr>





<tr class="group hover:bg-slate-50/50 transition-all">
  <td class="px-6 py-5">
    <div class="flex items-center gap-3">

    <span class="text-slate-900 font-bold block">E-Commerce App</span>
  </div>
</td>
<td class="px-6 py-5">
  <div class="flex items-center gap-2">
    <div class="flex -space-x-2 overflow-hidden">
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="David Kim">DK</div>
      <div class="inline-flex h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600 cursor-default hover:z-10 transition-transform hover:-translate-y-1 shadow-sm" title="Emma Watson">EW</div>
    </div>
    <!-- <button class="p-1.5 rounded-full hover:bg-slate-200 text-[#1E293B] hover:text-slate-600 transition-colors bg-slate-100" title="Manage Team">
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button> -->
    </div>
  </td>
  <td class="px-6 py-5">
    <div class="flex items-center justify-center gap-3 max-w-[180px] mx-auto">
      <div class="flex-grow bg-slate-100 rounded-full h-1.5 overflow-hidden">
        <div class="h-full rounded-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 12%;"></div>
      </div><span class="text-xs font-black text-slate-900 tabular-nums">12%</span>
    </div>
  </td>
  <td class="px-6 py-5">
    <span class="text-slate-600 text-sm font-semibold">Jun 5</span>
  </td>
  <td class="px-6 py-5 text-left">
<div class="flex ">
<!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-rose-50 text-rose-600 border-rose-100">At Risk</span> -->

<button class="text-[#1E293B] hover:text-slate-600 p-1">
  <img
    src="/public/Foreign.png"
    alt="View"
    class="w-4 h-4"
  />
</button>
    <!-- <span class="text-[12px] font-black px-2.5 py-1 rounded-md uppercase tracking-tighter border bg-emerald-50 text-emerald-600 border-emerald-100">Normal</span> -->
     
  </div></td>
</tr>









</tbody>
</table>
</div>
</div>
</div>







                
                <!-- another style  -->
                
                <!-- <div class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all group border-b-4 border-b-blue-500">
                  <div class="flex justify-between items-start mb-2 flex-row-reverse">
                   
                    <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:rotate-12 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                      </svg>
                    </div>
                    <div class="text-left">
                    <p class="text-lg font-black text-slate-800">Atlas Project</p>
                    <p class="text-[12px] text-[#1E293B] font-bold uppercase tracking-wide mt-1">Due on 
                      <span class="text-blue-500">31 December 2024</span></p>
                    </div></div>
                    <div class="mb-8">
                      
                      <div class="flex justify-between text-[11px] font-black mb-2 flex-row-reverse">
                      <span class="text-[#1E293B]">Current Progress</span>
                      <span class="text-blue-600">75%</span>
                    </div> -->


                    <!-- <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div class="bg-blue-600 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]" style="width: 75%;"></div></div></div>
                      <div class="flex items-center justify-between flex-row-reverse">
                        <div class="flex -space-x-2 flex-row-reverse"> -->
                          <!-- <div class="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[12px] font-black shadow-sm">AS</div><div class="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[12px] font-black text-white shadow-sm">MA</div></div><button class="px-6 py-2.5 bg-slate-900 text-white text-[11px] font-black rounded-xl hover:bg-blue-600 transition-all">View Details</button></div></div><div class="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-lg transition-all group border-b-4 border-b-blue-500"><div class="flex justify-between items-start mb-2 flex-row-reverse"><div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:rotate-12 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div><div class="text-left"><p class="text-lg font-black text-slate-800">Design System</p><p class="text-[12px] text-[#1E293B] font-bold uppercase tracking-wide mt-1">Due on <span class="text-blue-500">15 January 2025</span></p></div></div><div class="mb-8"><div class="flex justify-between text-[11px] font-black mb-2 flex-row-reverse"><span class="text-[#1E293B]">Current Progress</span><span class="text-blue-600">45%</span></div><div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden"><div class="bg-blue-600 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(59,130,246,0.5)]" style="width: 45%;"></div></div></div><div class="flex items-center justify-between flex-row-reverse"><div class="flex -space-x-2 flex-row-reverse"><div class="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[12px] font-black shadow-sm">AS</div><div class="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[12px] font-black text-white shadow-sm">MA</div></div><button class="px-6 py-2.5 bg-slate-900 text-white text-[11px] font-black rounded-xl hover:bg-blue-600 transition-all">View Details</button> -->
             
             
                   
            
            
          
        
     
     
         <!-- Last Activity -->
        <div class="lg:col-span-4 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col">
        <div class="flex items-center justify-between mb-8">


          <h3 class="text-slate-900 font-bold text-lg">Last Activity</h3>
                    <button class="text-sm text-blue-600 font-bold hover:underline">View All </button>

         
        </div>
   
        <!-- <div class="space-y-6">
          
          <div class="flex gap-5 p-2 rounded-2xl hover:bg-slate-50 transition-colors ">
            <div class="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center text-xs font-black shrink-0 border-2 border-white shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">AS</div>
            <div class="flex-1 min-w-0 text-left">
              <p class="text-sm text-slate-600 font-semibold mb-2 leading-snug">Updated landing page design for Ayman</p>
              <div class="flex items-center gap-3  text-left">
              <span class="px-3 py-1 rounded-lg text-[12px] font-black uppercase tracking-wider bg-blue-600 text-white">In Progress</span>
              <span class="text-[12px] text-[#1E293B] font-bold uppercase">High</span>
            </div>
          </div>
        </div>

        <div class="flex gap-5 p-2 rounded-2xl hover:bg-slate-50 transition-colors group ">
          <div class="w-12 h-12 rounded-full bg-[#3B82F6] text-white flex items-center justify-center text-xs font-black shrink-0 border-2 border-white shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">AS</div>
          <div class="flex-1 min-w-0 text-left">
            <p class="text-sm text-slate-600 font-semibold mb-2 leading-snug">Updated landing page design for Ayman</p>
            <div class="flex items-center gap-3 "><span class="px-3 py-1 rounded-lg text-[12px] font-black uppercase tracking-wider bg-emerald-500 text-white">Completed</span>
              <span class="text-[12px] text-[#1E293B] font-bold uppercase">Medium</span>
            </div>
          </div>
        </div>

        <div class="flex gap-5 p-2 rounded-2xl hover:bg-slate-50 transition-colors group ">
          <div class="w-12 h-12 rounded-full bg-[#93C5FD] text-white flex items-center justify-center text-xs font-black shrink-0 border-2 border-white shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">AS</div>
          <div class="flex-1 min-w-0 text-left">
            <p class="text-sm text-slate-600 font-semibold mb-2 leading-snug">Updated landing page design for Ayman</p>
            <div class="flex items-center gap-3 ">
              <span class="px-3 py-1 rounded-lg text-[12px] font-black uppercase tracking-wider bg-blue-400 text-white">In Progress</span>
              <span class="text-[12px] text-[#1E293B] font-bold uppercase">High</span>
            </div>
          </div>
        </div>
        <div class="flex gap-5 p-2 rounded-2xl hover:bg-slate-50 transition-colors group ">
          <div class="w-12 h-12 rounded-full bg-[#7D84A0] text-white flex items-center justify-center text-xs font-black shrink-0 border-2 border-white shadow-sm group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">AS</div>
          <div class="flex-1 min-w-0 text-left">
            <p class="text-sm text-slate-600 font-semibold mb-2 leading-snug">Updated landing page design for Ayman</p>
            <div class="flex items-center gap-3 ">
              <span class="px-3 py-1 rounded-lg text-[12px] font-black uppercase tracking-wider bg-orange-400 text-white">Pending</span>
              <span class="text-[12px] text-[#1E293B] font-bold uppercase">High</span>
            </div></div></div>-->
           
<div class="space-y-4">
  <div class="flex items-start gap-4 animate-slide-in-right" style="animation-delay: 0ms;">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E7F5EC] text-[#49B671]">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
        <p class="font-medium text-card-foreground">Task Completed</p>
        <p class="text-sm text-muted-foreground truncate">Designing the user interface for the home page</p>
      </div>
      <span class="text-xs text-muted-foreground shrink-0">5 minutes ago</span>
    </div>




    <div class="flex items-start gap-4 animate-slide-in-right mt-4" style="animation-delay: 100ms;">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F5FC] text-[#2AADEA]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-5 w-5"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <div class="flex-1 min-w-0 ">
        <p class="font-medium text-card-foreground">New Payment</p>
        <p class="text-sm text-muted-foreground truncate">Receipt of 15,000 SAR from Technology Company</p>
      </div>
      <span class="text-xs text-muted-foreground shrink-0">30 minutes ago</span>
    </div>


    
    <div class="flex items-start gap-4 animate-slide-in-right mt-4" style="animation-delay: 200ms;">
      <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDF5E6] text-[#F7B747]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus h-5 w-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      </div>
       <div class="flex-1 min-w-0">
      <p class="font-medium text-card-foreground">New Client</p>
      <p class="text-sm text-muted-foreground truncate">Innovation Company added to the list</p>
    </div>
    <span class="text-xs text-muted-foreground shrink-0">an hour ago</span>
  </div>



  <div class="flex items-start gap-4 animate-slide-in-right mt-4" style="animation-delay: 300ms;">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-message-square h-5 w-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-card-foreground">New Message</p>
                <p class="text-sm text-muted-foreground truncate">Muhammad sent an update about the project</p>
              </div><span class="text-xs text-muted-foreground shrink-0">2 hours ago</span>
            </div>
            <div class="flex items-start gap-4 animate-slide-in-right mt-4" style="animation-delay: 400ms;">
              <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-file-text h-5 w-5">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg></div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-card-foreground">New File</p>
                <p class="text-sm text-muted-foreground truncate">Application project contract uploaded</p>
              </div><span class="text-xs text-muted-foreground shrink-0">3 hours ago</span>

          
</div></div>

        </div>

         
       
        

</div>

      </div>
</main>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let chartInstance = null

const data = [
  { name: 'Page A', revenue: 4000, expenses: 2400 },
  { name: 'Page B', revenue: 3000, expenses: 1398 },
  { name: 'Page C', revenue: 9800, expenses: 2000 },
  { name: 'Page D', revenue: 2780, expenses: 3908 },
  { name: 'Page E', revenue: 1890, expenses: 4800 },
  { name: 'Page F', revenue: 2390, expenses: 3800 },
  { name: 'Page G', revenue: 3490, expenses: 4300 },
]

const option = {
  tooltip: { trigger: 'axis' },
  grid: { left: '10%', right: '10%', bottom: '15%' },
  xAxis: {
    type: 'category',
    data: data.map(item => item.name),
    boundaryGap: false,
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Revenue',
      type: 'line',
      data: data.map(item => item.revenue),
      smooth: true,
      lineStyle: { color: '#22c55e' },  // Tailwind green-500
      itemStyle: { color: '#22c55e' },
      symbolSize: 8,
    },
    {
      name: 'Expenses',
      type: 'line',
      data: data.map(item => item.expenses),
      smooth: true,
      lineStyle: { color: '#dc2626' },  // Tailwind red-600
      itemStyle: { color: '#dc2626' },
      symbolSize: 8,
    },
  ],
}

const resizeChart = () => {
  if (chartInstance) chartInstance.resize()
}

onMounted(() => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value)
    chartInstance.setOption(option)
    window.addEventListener('resize', resizeChart)
  }
})

onBeforeUnmount(() => {
  if (chartInstance) {
    window.removeEventListener('resize', resizeChart)
    chartInstance.dispose()
  }
})
</script>

