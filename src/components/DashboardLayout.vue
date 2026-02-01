<template>
  <div>
    <div class="flex">
      <Sidebar :mobileOpen="showMobileSidebar" @close-mobile="showMobileSidebar = false" />
    </div>
    <header
      class="fixed top-0 left-0 lg:left-64 right-0 h-16 lg:h-20 bg-white border-b border-gray-100 flex items-center justify-between lg:justify-end px-4 lg:px-8 xl:px-20 shadow-md z-40 transition-all duration-300"
      :class="sidebarCollapsed ? 'lg:left-16' : 'lg:left-64'">

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMobileMenu" class="lg:hidden p-2 mr-2" aria-label="Toggle menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-menu h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      <!-- Left side: Dashboard / Router Name -->
      <div class="hidden sm:flex items-center gap-2 ml-2 lg:absolute lg:left-8">
        <span class="text-sm lg:text-lg font-semibold text-black/40">Dashboard /</span>
        <span class="text-sm lg:text-lg text-black truncate max-w-[150px] lg:max-w-none">{{ pageTitle }}</span>
      </div>

      <!-- Mobile Title (Centered) -->
      <div class="sm:hidden flex-1 text-center">
        <span class="text-lg font-medium text-black truncate">{{ pageTitle }}</span>
      </div>

      <!-- Desktop Search -->
      <div class="hidden lg:block relative mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
        <input placeholder="Search anything..."
          class="pl-10 pr-4 py-2 bg-[#F5F5F5] border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64 shadow-sm"
          type="text">
      </div>

      <!-- Mobile Search Toggle -->
      <button @click="toggleMobileSearch" class="lg:hidden p-2 mr-2" aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-search text-slate-600">
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
      </button>

      <!-- Mobile Search Bar -->
      <div v-if="showMobileSearch" class="lg:hidden absolute top-full left-0 right-0 bg-white p-3 shadow-md border-t z-50">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
          </svg>
          <input placeholder="Search anything..."
            class="w-full pl-10 pr-4 py-2 bg-[#F5F5F5] border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" v-model="searchQuery" @keyup.enter="performSearch" ref="mobileSearchInput">
          <button @click="toggleMobileSearch" class="absolute right-3 top-1/2 -translate-y-1/2 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden lg:flex items-center gap-3">
        <!-- Action Icons -->
        <div class="flex items-center gap-3">
          <button class="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Calendar">
            <i class="fa-regular fa-calendar h-5 w-5 text-muted-foreground"></i>
          </button>

          <button class="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Messages">
            <i class="fa-solid fa-envelope text-muted-foreground"></i>
          </button>

          <button class="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Send">
            <i class="fa-regular fa-paper-plane h-5 w-5 text-muted-foreground"></i>
          </button>
          
          <button class="p-2 hover:bg-muted rounded-lg transition-colors relative" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-bell h-5 w-5">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            <div
              class="rounded-full font-semibold absolute -top-1 -right-1 h-4.5 w-4.5 p-0 flex items-center justify-center text-xs bg-red-500 text-white border-0">
              3</div>
          </button>
        </div>

        <div class="h-5 border-l border-gray-300 mx-2 mr-4"></div>

        <!-- Language -->
        <div class="flex items-center gap-1 text-muted-foreground mr-4">
          <span class="text-sm">العربية</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-chevron-down h-3 w-3 hidden sm:block mt-1">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>

        <!-- Profile -->
        <div class="flex items-center gap-1">
          <button
            class="justify-center rounded-md text-sm font-medium shrink-0 hover:text-accent-foreground h-10 py-2 flex items-center gap-2 text-header-foreground hover:bg-header-hover px-2"
            type="button" aria-label="Profile menu">
            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
              <img src="/Rectangle2.png" alt="Profile" class="w-9 h-9 rounded-full">
            </div>
            <div class="hidden xl:flex flex-col items-start">
              <span class="text-sm font-medium">Menna Ahmed</span>
              <span class="text-xs">Admin</span>
            </div>
            <div class="ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-down h-4 w-4 hidden xl:block">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Action Icons -->
      <div class="lg:hidden flex items-center gap-1">
        <!-- Mobile Notifications -->
        <button class="p-2 relative" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-bell">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <div class="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
            3
          </div>
        </button>

        <!-- Mobile Profile -->
        <button class="p-2" aria-label="Profile">
          <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-gray-200">
            <img src="/Rectangle2.png" alt="Profile" class="w-7 h-7 rounded-full">
          </div>
        </button>
      </div>
    </header>

    <!-- Mobile Sidebar Overlay -->
    <div v-if="showMobileSidebar" @click="showMobileSidebar = false" 
      class="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"></div>

    <main
      :class="`flex-1 p-4 lg:p-8 transition-all duration-300 overflow-x-hidden pt-16 lg:pt-24 ${
        sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
      } ${showMobileSidebar ? 'ml-64' : 'ml-0'}`">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed, ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from './Sidebar.vue'

const route = useRoute()
const sidebarCollapsed = ref(false)
const showMobileSidebar = ref(false)
const showMobileSearch = ref(false)
const searchQuery = ref('')
const mobileSearchInput = ref(null)

const pageTitle = computed(() => {
  const routeName = route.name
  const titleMap = {
    'home': 'Main',
    'taskes': 'Tasks',
    'Accounting': 'Accounting',
    'Project': 'Projects',
    'Addproject': 'Add Project',
    'Finance': 'Finance',
    'Addcustomer': 'Add Customer',
    'Message': 'Messages',
    'CustomerTable': 'Clients',
    'Members': 'Members',
    'AccountSettings': 'Account Settings'
  }
  return titleMap[routeName] || 'Dashboard'
})

const handleSidebarToggle = (collapsed) => {
  sidebarCollapsed.value = collapsed
}

const toggleMobileMenu = () => {
  showMobileSidebar.value = !showMobileSidebar.value
  // You might want to emit an event to the Sidebar component here
  // or use a store to manage the mobile sidebar state
}

const toggleMobileSearch = () => {
  showMobileSearch.value = !showMobileSearch.value
  if (showMobileSearch.value) {
    nextTick(() => {
      mobileSearchInput.value?.focus()
    })
  }
}

const performSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value)
  showMobileSearch.value = false
  searchQuery.value = ''
}

// Close mobile search when clicking outside (handled by overlay)
// Close mobile sidebar when route changes
watch(() => route.path, () => {
  showMobileSidebar.value = false
  showMobileSearch.value = false
})
</script>

<style scoped>
/* Smooth transitions */
header, main {
  transition: all 0.3s ease;
}

/* Improve touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
  }
  
  input, select, textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}
</style>