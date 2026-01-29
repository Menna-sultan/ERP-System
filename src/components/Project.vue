<template>
<div>
  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8 -mt-8">
  
  <!-- <header class="fixed top-0 left-64 right-0 flex items-center justify-between bg-white py-4 border-b border-slate-200 z-10">
     
    
    <div class="flex items-center gap-2 text-sm ml-8">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-6 h-6 text-muted-foreground"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-6 h-6 text-muted-foreground"><path d="m9 18 6-6-6-6"></path>
    </svg>
    <span class="text-xl text-black font-medium">Projects</span>
    </div>
    <div class="flex items-center gap-3 mr-6">
    <button class="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 relative shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
    <span class="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
  </button>
  <button class="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>
    </svg>
  </button>
    
  </div>
    </header> -->

          <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 ">
      <div>
    <h1 class="text-2xl font-semibold text-slate-800 mt-4">Projects</h1>
    <p class="text-slate-500 mt-1">Manage and monitor all your projects</p>
  </div>

<div @click="$router.push({ name: 'Addproject' })" class="flex justify-end mt-8">
<button  class="flex items-center  gap-2 px-5 py-2.5 bg-[#193560] text-white rounded-xl hover:bg-[#193560] transition-all shadow-md shadow-blue-500/20 font-medium">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path>
  </svg>
  <span>New Action</span>
  
</button>
      </div>
    












</div>
<div class="border border-slate-100 shadow-sm rounded-2xl p-6 ">


<div class="animate-in fade-in slide-in-from-bottom-4 duration-500">
  <div class="flex items-center justify-between mt-8">
   <div class="flex items-center gap-4">
    <div class="relative"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
    </svg>
    <input placeholder="Search anything..." class="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64 shadow-sm" type="text">
  </div>

</div> 
  <div class="flex items-center gap-3">
    <div class="relative">
    <button class="p-2.5 rounded-xl border transition-all flex items-center gap-2 bg-white border-slate-200 text-slate-600 hover:bg-slate-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-funnel" aria-hidden="true"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
      </svg>
      <span class="text-sm font-medium hidden md:block">Filter Projects</span>
    </button></div><div class="relative">
      <button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-medium text-sm transition-all shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B7FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down text-indigo-500" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path>
      </svg>
      <span>Export</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
    </button>
  </div>
</div>
</div>
<div class="bg-white rounded-2xl  overflow-hidden mt-8">
  <div class="overflow-x-auto">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-[#F2F4F7] text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
          <th class="px-6 py-4">Profile</th>
          <th class="px-6 py-4">Project Name</th>
          <th class="px-6 py-4">Client</th>
          <th class="px-6 py-4">Priority</th>
          <th class="px-6 py-4">Status</th>
          <th class="px-6 py-4">Progress</th>
          <th class="px-6 py-4">Timeline</th>
          <th class="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-[#939090]/20">
        <tr class="hover:bg-slate-50/80 transition-all group">
          <td class="px-6 py-4">
            <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg>                  

            </div>
          </td>
          <td class="px-6 py-4">
            <span class="text-sm font-bold text-slate-900">Web Dashboard</span>
          </td>
          <td class="px-6 py-4"><span class="text-sm text-slate-600 font-medium">Elevate Systems</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-rose-50 text-rose-600 border border-rose-100">High</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-blue-100 text-blue-700">Active</span></td>
          <td class="px-6 py-4 min-w-[140px]">
            <div class="flex flex-col gap-1.5">
              <div class="flex justify-between items-center text-[10px] font-bold text-slate-400"><span>75%</span></div>
              <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 75%;"></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-900">$12,000</span>
              <span class="text-[10px] text-slate-400 font-medium">Due: 2024-06-15</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button @click="openModal" class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </td>
        </tr>



        
        <tr class="hover:bg-slate-50/80 transition-all group">
          <td class="px-6 py-4">
            <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg> 
            </div>
          </td>
          <td class="px-6 py-4">
            <span class="text-sm font-bold text-slate-900">Mobile App V2</span>
          </td>
          <td class="px-6 py-4"><span class="text-sm text-slate-600 font-medium">Smart Tech</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-rose-50 text-rose-600 border border-rose-100">High</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-blue-100 text-blue-700">Active</span></td>
          <td class="px-6 py-4 min-w-[140px]">
            <div class="flex flex-col gap-1.5">
              <div class="flex justify-between items-center text-[10px] font-bold text-slate-400"><span>30%</span></div>
              <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 ease-out bg-[#5590E9]" style="width: 30%;"></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-900">$45,000</span>
              <span class="text-[10px] text-slate-400 font-medium">Due: 2024-07-01</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button @click="openModal" class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr class="hover:bg-slate-50/80 transition-all group">
          <td class="px-6 py-4">
            <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg> 
            </div>
          </td>
          <td class="px-6 py-4">
            <span class="text-sm font-bold text-slate-900">CRM Enhancement</span>
          </td>
          <td class="px-6 py-4"><span class="text-sm text-slate-600 font-medium">NovaSoft</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-amber-50 text-amber-600 border border-amber-100">Medium</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-emerald-100 text-emerald-700">Completed</span></td>
          <td class="px-6 py-4 min-w-[140px]">
            <div class="flex flex-col gap-1.5">
              <div class="flex justify-between items-center text-[10px] font-bold text-slate-400"><span>100%</span></div>
              <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 ease-out bg-emerald-500" style="width: 100%;"></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-900">$8,000</span>
              <span class="text-[10px] text-slate-400 font-medium">Due: 2024-05-10</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button @click="openModal" class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <tr class="hover:bg-slate-50/80 transition-all group">
         
<!-- <span class="text-sm font-bold text-slate-900">SEO Optimization</span>
            </div>
          </td>
          <td class="px-6 py-4"><span class="text-sm text-slate-600 font-medium">Peak Performance</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-slate-50 text-slate-600 border border-slate-100">Low</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-amber-100 text-amber-700">On Hold</span></td>
          <td class="px-6 py-4 min-w-[140px]">
            <div class="flex flex-col gap-1.5">
              <div class="flex justify-between items-center text-[10px] font-bold text-slate-400"><span>10%</span></div>
              <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 ease-out bg-indigo-500" style="width: 10%;"></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-900">$5,000</span>
              <span class="text-[10px] text-slate-400 font-medium">Due: 2024-08-20</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button @click="openModal" class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
         -->
          <td class="px-6 py-4">
      
                <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg> 
              </div>
       
          </td>
          <td class="px-6 py-4">
            <span class="text-sm font-bold text-slate-900">ERP System</span>
          </td>
          <td class="px-6 py-4"><span class="text-sm text-slate-600 font-medium">PrimeTech</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase bg-amber-50 text-amber-600 border border-amber-100">Medium</span></td>
          <td class="px-6 py-4"><span class="text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter bg-emerald-100 text-emerald-700">Completed</span></td>
          <td class="px-6 py-4 min-w-[140px]">
            <div class="flex flex-col gap-1.5">
              <div class="flex justify-between items-center text-[10px] font-bold text-slate-400"><span>100%</span></div>
              <div class="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full transition-all duration-1000 ease-out bg-emerald-500" style="width: 100%;"></div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex flex-col">
              <span class="text-sm font-bold text-slate-900">$8,000</span>
              <span class="text-[10px] text-slate-400 font-medium">Due: 2024-05-10</span>
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button @click="openModal" class="p-2 text-blue-500 hover:bg-indigo-50 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </button>
              <button class="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis" aria-hidden="true">
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
</div>
</div>
        </div>
  </main>

  <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
    <div class="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
      <div class="sticky top-0 z-10 bg-white/80 backdrop-blur-md px-8 py-6 border-b border-slate-100 flex items-center justify-between">
        <div class="flex items-center gap-4">
       
                <div class="w-12 h-12 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg> 
              </div>
          <div>
            <h3 class="text-2xl font-bold text-slate-900">Web Dashboard</h3>
            <p class="text-slate-500 text-sm">Elevate Systems</p>
          </div>
        </div>
        <button @click="closeModal" class="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-8 space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-4 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity" aria-hidden="true">
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
              </svg>
              <span class="text-xs font-bold uppercase tracking-widest">Progress</span>
            </div>
            <div class="flex items-end gap-2 mb-4">
              <span class="text-4xl font-bold text-slate-900">75%</span>
              <span class="text-sm text-slate-400 mb-1">completed</span>
            </div>
            <div class="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
              <div class="h-full transition-all duration-1000 bg-blue-500" style="width: 75%;"></div>
            </div>
          </div>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-4 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign" aria-hidden="true">
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span class="text-xs font-bold uppercase tracking-widest">Total Budget</span>
            </div>
            <div class="flex items-end gap-2">
              <span class="text-3xl font-bold text-slate-900">$12,000</span>
            </div>
            <p class="mt-4 text-xs text-slate-400">Allocated budget for Q2/Q3 2024</p>
          </div>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-4 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" aria-hidden="true">
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
                <span class="text-sm font-bold text-rose-600">2024-06-15</span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#193560" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers text-indigo-500" aria-hidden="true">
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
              </svg>
              Project Overview
            </h4>
            <div class="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
              <p>This project is aimed at delivering a top-tier digital experience for <strong>Elevate Systems</strong>. The primary objective is to streamline the current user journey while maintaining brand consistency and enhancing overall system performance.</p>
              <p>Current status is <strong>In Progress</strong>. Our team is focused on meeting the final delivery deadline of 2024-06-15. Regular syncs are being held weekly to ensure alignment between design and development phases.</p>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-900 mb-4">Internal Team</h4>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">S</div>
                <span class="text-sm font-medium text-slate-700">Sarah Ahmed (Lead)</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">M</div>
                <span class="text-sm font-medium text-slate-700">Menna Ahmed(Dev)</span>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">E</div>
                <span class="text-sm font-medium text-slate-700">Mohamed Khaled (Design)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
        <button @click="closeModal" class="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">Close Details</button>
        <button class="px-6 py-2.5 bg-blue-500 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-blue-500/20">Edit Project</button>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between px-4 py-3 text-sm mt-2 ml-4">
        <span class="text-gray-500">Page 1 | 6 of 12</span>
        <div class="flex items-center gap-2">
          <button class="px-3 py-1 border rounded-lg">Previous</button>
          <button class="px-3 py-1 rounded-lg bg-[#193560] text-white">1</button>
          <button class="px-3 py-1 border rounded-lg">Next</button>
        </div>
      </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const goToAddProject = () => {
  router.push('/Addproject')
}
</script>
