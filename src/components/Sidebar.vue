<template>
  <div>
    <!-- Overlay for mobile -->
    <div v-if="mobileOpen" @click="$emit('close-mobile')" class="fixed inset-0 bg-black/50 z-40 md:hidden"></div>

    <aside :class="[
    'fixed left-0 top-0 h-screen bg-[#1a2a3a] text-white transition-all duration-300 z-50 flex flex-col',
    isCollapsed ? 'w-16' : 'w-64',
    mobileOpen ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'
  ]">
    <div class="p-6 flex items-center justify-between">
    <div class="flex items-center gap-3 overflow-hidden false">
    <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
  <span class="font-bold text-xl bg-gradient-to-r from-[#2092D8] via-[#2092D8] to-[#1858A1] bg-clip-text text-transparent">
  M
</span>

      </div>
      <span v-if="!isCollapsed" class="text-xl font-bold tracking-tight">MADAR</span>
      </div>
      <button @click="toggleSidebar" class="p-1.5 hover:bg-slate-700 rounded-md transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
                </svg>
        </button>
        </div>
        

          
<!-- Moved search input directly below branding for better accessibility and visual hierarchy -->
<div v-if="!isCollapsed" class="px-4 mt-4">
  <div class="relative">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
    </svg>
    <input placeholder="Search anything..." class="pl-10 pr-4 py-3 bg-[#2D3A4F] rounded-lg shadow-md transition-all w-full text-sm text-white placeholder-slate-400" type="text">
  </div>
</div>


        <nav class="flex-1 px-4 mt-8 space-y-2">
     
<router-link
  to="/"
  :class="[
    'w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group',
    $route.path === '/'
      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
      : 'text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500'
  ]"
>

          <div class="flex items-center gap-4">
            <div class="min-w-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house router-link-active:text-blue-400 router-link-exact-active:text-blue-400" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            </div>
            <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">
              Main
              </span>
          </div>
          <div v-if="!isCollapsed">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
            </svg> -->
          </div>
          </router-link>

          
            
<router-link
  to="/Project"
  :class="[
    'w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group',
    $route.path === '/Project' || $route.path === '/Addproject'
      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
      : 'text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500'
  ]"
>
  <div class="flex items-center gap-4">
    <div class="min-w-[20px]">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6 1a1.75 1.75 0 0 0-1.75 1.75V4H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.25V2.75A1.75 1.75 0 0 0 10 1zm4.25 3V2.75A.25.25 0 0 0 10 2.5H6a.25.25 0 0 0-.25.25V4zM3 5.5h10a.5.5 0 0 1 .5.5v1h-11V6a.5.5 0 0 1 .5-.5m-.5 3V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5H9V10H7V8.5z" clip-rule="evenodd"/></svg>
      
    </div>

    <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">
      Projects
    </span>
  </div>

  <div v-if="!isCollapsed">
    <svg class="w-4 h-4 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m9 18 6-6-6-6" />
    </svg>
  </div>
</router-link>


            <router-link
            to="/taskes"
        :class="[
    'w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group',
    $route.path === '/taskes'
      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
      : 'text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500'
  ]">
          <div class="flex items-center gap-4">
            <div class="min-w-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big h-5 w-5 shrink-0 router-link-active:text-blue-400 router-link-exact-active:text-blue-400"><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path><path d="m9 11 3 3L22 4"></path></svg>
          </div><span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap"> Tasks</span>
        </div>

        <div v-if="!isCollapsed">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
          </svg>
        </div>
            </router-link>
            <router-link
            to="/CustomerTable"
   :class="[
    'w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group',
    $route.path === '/CustomerTable'
      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
      : 'text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500'
  ]">
        <div class="flex items-center gap-4">
          <div class="min-w-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users router-link-active:text-blue-400 router-link-exact-active:text-blue-400" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle>
          </svg>
        </div>
        <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">Clients </span>
      </div>
      <div v-if="!isCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
        </svg>
      </div>
            </router-link>

    <router-link
    to="/Finance"
     
            :class="[
    'w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group',
    $route.path === '/Finance'
      ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500'
      : 'text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500'
  ]">
        <div class="flex items-center gap-4">
          <div class="min-w-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet h-5 w-5 shrink-0 router-link-active:text-blue-400 router-link-exact-active:text-blue-400"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>
        </div>

        <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">Finance</span>
      </div>
      <div v-if="!isCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </router-link>

    <router-link
    to="/Accounting"
 
            class="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500">
        <div class="flex items-center gap-4">
          <div class="min-w-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator router-link-active:text-blue-400 router-link-exact-active:text-blue-400" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
        </div>

        <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">Accounting</span>
      </div>
      <div v-if="!isCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </router-link>
    
   
   <router-link
   to="/Message"

        class="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500">
        <div class="flex items-center gap-4">
          <div class="min-w-[20px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square h-5 w-5 shrink-0 router-link-active:text-blue-400 router-link-exact-active:text-blue-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">Messages</span>
        </div>
        <div v-if="!isCollapsed">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
          </svg>
        </div>
   </router-link>
      <router-link
        to="/Reports"
    
        class="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all group text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-l-4 hover:border-blue-500">
        <div class="flex items-center gap-4">
          <div class="min-w-[20px]">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column h-5 w-5 shrink-0 router-link-active:text-blue-400 router-link-exact-active:text-blue-400"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
          </div>
          <span v-if="!isCollapsed" class="text-sm font-medium whitespace-nowrap">Reports</span>
        </div>
        <div v-if="!isCollapsed">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
          </svg>
          </div>
      </router-link>
      
</nav>
<div class="p-4 border-t border-slate-700/50 space-y-4">
 <router-link
 to="/AccountSettings"
  class="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white transition-colors">
    <div class="flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings router-link-active:text-white router-link-exact-active:text-white" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle>
      </svg>
      <span v-if="!isCollapsed" class="text-sm">Account Settings</span>
    </div>
    <div v-if="!isCollapsed">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
      </svg> -->
    </div>
 </router-link>
<router-link
to="/Members"
 active-class="text-white"
 exact-active-class="text-white"
 class="w-full flex items-center justify-between px-3 py-2 text-slate-400 hover:text-white transition-colors">
  <div class="flex items-center gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle>
    </svg>
    <span v-if="!isCollapsed" class="text-sm">Madar Members</span>
  </div>
  <div v-if="!isCollapsed">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6" />
    </svg> -->
  </div>
</router-link>
<div class="mt-4 flex items-center gap-3 p-2 rounded-xl bg-slate-800/50 false">
  <img class="w-10 h-10 rounded-full border-2 border-blue-500" alt="Profile" src="/Rectangle2.png">
  <div class="flex-1 overflow-hidden"><p v-if="!isCollapsed" class="text-sm font-semibold truncate">Menna Ahmed</p><p v-if="!isCollapsed" class="text-xs text-slate-400 truncate">Admin</p>
  </div>
  <button @click="logout" class="text-slate-400 hover:text-red-400">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    </svg>
  </button>
</div>
</div>
</aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  mobileOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close-mobile'])

const router = useRouter()
const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const logout = () => {
  localStorage.setItem("auth", "false")
  router.push({ name: 'login' })
}
</script>
