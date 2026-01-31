
<template>
   <main class="min-h-screen transition-all duration-300 ease-in-out bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div class="p-8">
            <div class="space-y-6">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div class="space-y-1">
                        <div class="flex items-center gap-3">
                         
                            <div>
                                <h1 class="text-2xl font-semibold text-slate-800">Notifications</h1>
                                <div class="flex items-center gap-3 mt-1">
                                    <span class="text-sm text-slate-500">5 new today</span>
                                    <div class="inline-flex items-center rounded-full px-2.5 py-0.5 font-semibold bg-blue-100 text-blue-600 text-xs shadow-sm">
                                        3 unread
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button @click="$router.push({ name: 'ViewArchive' })"
                        class="inline-flex w-44 items-center justify-center px-4 py-2.5 gap-2 rounded-xl text-sm font-semibold bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:shadow-md transition-all">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-archive h-4 w-4 group-hover:scale-110 transition-transform">
                            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                            <path d="M10 12h4"></path>
                        </svg>View Archive</button>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
                    <div class="flex items-center gap-3 w-full sm:w-auto">
                        <div class="relative flex-1 sm:flex-none sm:w-64 group">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <input
                                class="flex h-10 w-full border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 rounded-xl border-slate-200 focus:border-blue-500 transition-colors shadow-sm"
                                placeholder="Search notifications...">
                        </div>
<div
  @click="toggleDropdown()"
  class="relative w-48 h-10 flex items-center
         border bg-white rounded-xl shadow-sm
         border-slate-200 hover:border-blue-500
         transition-colors cursor-pointer"
>

  <!-- Filter Icon -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="absolute left-3 top-1/2 -translate-y-1/2
           h-4 w-4 text-muted-foreground pointer-events-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>

  <!-- Selected Text -->
  <span id="selectedOption" class="pl-10 text-sm">
    All Notifications
  </span>

  <!-- Arrow -->
  <svg
    id="arrowIcon"
    @click="toggleDropdown()"
    xmlns="http://www.w3.org/2000/svg"
    class="absolute right-3 top-1/2 -translate-y-1/2
           h-4 w-4 opacity-50 cursor-pointer transition-transform"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>

  <!-- Dropdown -->
  <div
    id="dropdownMenu"
    class="absolute top-full left-0 mt-2 hidden w-full
           rounded-xl border border-border/50
           bg-white shadow-lg z-50"
  >
    <ul class="py-1 text-sm">
      <li @click="selectOption('All Notifications')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">All Notifications</li>
      <li @click="selectOption('Unread')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Unread</li>
      <li @click="selectOption('Tasks')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Tasks</li>
      <li @click="selectOption('Messages')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Messages</li>
      <li @click="selectOption('Payments')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Payments</li>
      <li @click="selectOption('Files')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Files</li>
      <li @click="selectOption('Team')" class="px-4 py-2 cursor-pointer hover:bg-slate-100">Team</li>
    </ul>
  </div>

</div>
</div>
                    <button
                        class="inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl  shadow-sm bg-blue-50 border-blue-300 text-blue-600 transition-all"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-circle-check-big h-4 w-4 mr-1.5">
                            <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                            <path d="m9 11 3 3L22 4"></path>
                        </svg>Mark all as read</button>
                </div>
                <div class="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
                    <div class="divide-y divide-border/50">
                        
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in bg-gradient-to-r from-primary/5 to-transparent"
                            style="animation-delay: 0ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#D2EDE3] text-[#39B066] border border-[#39B066]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="text-black group-hover:text-primary transition-colors font-semibold">
                                            New task assigned to you</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#D2EDE3] text-[#39B066] hover:bg-[#39B066]/20">
                                            task</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><span
                                            class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></span><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1i:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Task 'Review Design' assigned in Company
                                    Website project</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>5 min
                                    ago</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in bg-gradient-to-r from-primary/5 to-transparent"
                            style="animation-delay: 50ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#E3F2FD] text-[#1976D2] border border-[#1976D2]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-message-square h-5 w-5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="text-card-foreground group-hover:text-primary transition-colors font-semibold">
                                            New message from John Smith</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#E3F2FD] text-[#1976D2] hover:bg-[#1976D2]/20">
                                            message</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><span
                                            class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></span><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1k:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">When is the next meeting?</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>30 min
                                    ago</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in bg-gradient-to-r from-primary/5 to-transparent"
                            style="animation-delay: 100ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#F3E5F5] text-[#7B1FA2] border border-[#7B1FA2]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-dollar-sign h-5 w-5">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="text-card-foreground group-hover:text-primary transition-colors font-semibold">
                                            New payment received</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#F3E5F5] text-[#7B1FA2] hover:bg-[#7B1FA2]/20">
                                            payment</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><span
                                            class="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse"></span><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1m:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Received $50,000 from Tech Solutions Inc.</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>1 hour
                                    ago</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in"
                            style="animation-delay: 150ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#FFF3E0] text-[#E65100] border border-[#E65100]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-file-text h-5 w-5">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M10 9H8"></path>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            New file uploaded</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#FFF3E0] text-[#E65100] hover:bg-[#E65100]/20">
                                            file</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1o:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Sarah uploaded 'Homepage Design.png'</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>2 hours
                                    ago</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in"
                            style="animation-delay: 200ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#FFEBEE] text-[#C62828] border border-[#C62828]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-users h-5 w-5">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            New team member</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#FFEBEE] text-[#C62828] hover:bg-[#C62828]/20">
                                            team</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1q:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Michael Brown joined E-commerce App project</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>3 hours
                                    ago</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in"
                            style="animation-delay: 250ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#F5F5F5] text-[#616161] border border-[#616161]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-settings h-5 w-5">
                                    <path
                                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                                    </path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            System update</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#F5F5F5] text-[#616161] hover:bg-[#616161]/20">
                                            system</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1s:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">System successfully updated to version 2.1</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>Yesterday
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in"
                            style="animation-delay: 300ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#E3F2FD] text-[#1976D2] border border-[#1976D2]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-message-square h-5 w-5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            Message from Sarah</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#E3F2FD] text-[#1976D2] hover:bg-[#1976D2]/20">
                                            message</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r1u:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Project files have been shared</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>Yesterday
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-5 transition-all duration-300 hover:bg-muted/30 cursor-pointer group animate-fade-in"
                            style="animation-delay: 350ms;">
                            <div
                                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 bg-[#F3E5F5] text-[#7B1FA2] border border-[#7B1FA2]/20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-dollar-sign h-5 w-5">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg></div>
                            <div class="flex-1 min-w-0 space-y-1">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <p
                                            class="font-medium text-card-foreground group-hover:text-primary transition-colors">
                                            Invoice paid</p>
                                        <div
                                            class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-xs capitalize bg-[#F3E5F5] text-[#7B1FA2] hover:bg-[#7B1FA2]/20">
                                            payment</div>
                                    </div>
                                    <div class="flex items-center gap-2 shrink-0"><button
                                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg hover:bg-muted"
                                            type="button" id="radix-:r20:" aria-haspopup="menu" aria-expanded="false"
                                            data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-ellipsis-vertical h-4 w-4">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg></button></div>
                                </div>
                                <p class="text-sm text-muted-foreground">Client ABC Corp paid invoice #1234</p>
                                <p class="text-xs text-muted-foreground/70 flex items-center gap-1"><span
                                        class="inline-block h-1 w-1 rounded-full bg-muted-foreground/50"></span>2 days
                                    ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
  methods: {
    toggleDropdown() {
      const menu = document.getElementById("dropdownMenu");
      const arrow = document.getElementById("arrowIcon");
      menu.classList.toggle("hidden");
      arrow.classList.toggle("rotate-180");
    },
    selectOption(value) {
      document.getElementById("selectedOption").innerText = value;
      document.getElementById("dropdownMenu").classList.add("hidden");
      document.getElementById("arrowIcon").classList.remove("rotate-180");
    }
  }
}
</script>
