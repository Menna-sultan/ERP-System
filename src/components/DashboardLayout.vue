<template>
  <div>
    <div class="flex">
      <Sidebar />
    </div>
    <header class="fixed top-0 left-64 right-0 h-20 bg-white border-b border-gray-100 flex items-center justify-end px-20 shadow-md z-40">

  <!-- Left side: Dashboard / Router Name -->
<div class="absolute left-8 flex items-center gap-2">
  <span class="text-lg font-semibold text-black/40">Dashboard /</span>
  <span class="text-lg font-semibold text-black">{{ pageTitle }}</span>
</div>

    <div class="relative">

        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
            data-v-inspector="src/components/Project.vue:62:27">
            <path d="m21 21-4.34-4.34" data-v-inspector="src/components/Project.vue:62:312"></path>
            <circle cx="11" cy="11" r="8" data-v-inspector="src/components/Project.vue:62:346"></circle>
          </svg>
          <input placeholder="Search anything..."
            class="pl-10 pr-4 py-2 bg-[#F5F5F5] border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64 shadow-sm"
            type="text" data-v-inspector="src/components/Project.vue:64:5">
        </div>
  

  <!-- Left side: Actions + Language -->
   <div class="flex items-center gap-3"> 
    <!-- Language -->
     <div class="flex items-center gap-1 text-muted-foreground">
     
    </div>


    <!-- Action Icons -->
     <div class="flex items-center gap-3">

  <button class="p-2 hover:bg-muted rounded-lg transition-colors">
        <i class="fa-regular fa-calendar h-5 w-5 text-muted-foreground"></i>
      </button>



 <button class="p-2 hover:bg-muted rounded-lg transition-colors">
    <i class="fa-solid fa-envelope text-muted-foreground"></i>
      </button>
      

          <!-- 
      <button class="p-2 hover:bg-muted rounded-lg transition-colors">
        <i class="fa-brands fa-whatsapp h-5 w-5 text-green-500"></i>
      </button> -->

    
      <button class="p-2 hover:bg-muted rounded-lg transition-colors">
        <i class="fa-regular fa-paper-plane h-5 w-5 text-muted-foreground"></i>
      </button>
         <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap mr-5 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 relative text-header-foreground hover:bg-header-hover"
            type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-bell h-5 w-5">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <div
              class="rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute -top-1 -right-1 h-4.5 w-4.5 p-0 flex items-center justify-center text-xs bg-red-500 text-white border-0">
              3</div>
          </button>




    </div>
    
  </div>



     <div class="h-5 border-l border-gray-300 mx-2 mr-4"></div> 

<!-- Language -->
     <div class="flex items-center gap-1 text-muted-foreground mr-4">
      <span class="text-sm">العربية</span>
      <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-3 w-3 hidden sm:block mt-1">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
    </div>

  <!-- Right side: Profile -->
   <div class="flex items-center gap-1 -mr-16 ">
       <button
          class="justify-center  rounded-md text-sm font-medium shrink-0 hover:text-accent-foreground h-10 py-2 flex items-center gap-2 text-header-foreground hover:bg-header-hover px-2"
          type="button" id="radix-:r2:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
         
          <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
<img src="/Rectangle2.png" alt="Profile" class="w-9 h-9 rounded-full ">
          </div>
          
          <div class="hidden sm:flex flex-col items-start ">
            <span class="text-sm font-medium">Menna Ahmed</span><span
              class="text-xs ">Admin</span></div>
             <div class="ml-4"> 
            <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 hidden sm:block">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
             </div>
        </button>
        
      </div> 


      
</header>
    <main :class="`flex-1 p-8 transition-all duration-300 overflow-x-hidden pt-24 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './Sidebar.vue'

const route = useRoute()
const sidebarCollapsed = ref(false)

const pageTitle = computed(() => {
  const routeName = route.name
  const titleMap = {
    'home': 'Main',
    'taskes': 'taskes',
    'Accounting': 'Accounting',
    'Project': 'Projects',
    'Addproject': 'Add Project',
    'Finance': 'Finance',
    'Addcustomer': 'Add Customer',
    'Message':'Message',
    'CustomerTable':'Clients',
    'Members':'Members',
    'AccountSettings':'Account Settings'

  }
  return titleMap[routeName] || 'Dashboard'
})

const handleSidebarToggle = (collapsed) => {
  sidebarCollapsed.value = collapsed
}
</script>
