<template>
  <div class="px-8 pt-8 shrink-0">

    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-slate-900 mb-1">Project Tasks</h1>
        <p class="text-sm text-slate-500 font-medium">
          Platform Infrastructure & Backend Services
        </p>
      </div>

      <button
        class="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl
               font-semibold shadow-lg shadow-indigo-600/20
               hover:bg-indigo-700 transition-all hover:-translate-y-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        New Task
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      <!-- Total -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
          ⏱️
        </div>
        <div>
          <div class="text-2xl font-bold text-slate-900">4</div>
          <div class="text-xs font-semibold text-slate-500 uppercase">Total Tasks</div>
        </div>
      </div>

      <!-- In Progress -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          📂
        </div>
        <div>
          <div class="text-2xl font-bold text-slate-900">3</div>
          <div class="text-xs font-semibold text-slate-500 uppercase">In Progress</div>
        </div>
      </div>

      <!-- Urgent -->
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
          ⚠️
        </div>
        <div>
          <div class="text-2xl font-bold text-slate-900">1</div>
          <div class="text-xs font-semibold text-slate-500 uppercase">Urgent Items</div>
        </div>
      </div>

    </div>

    <!-- Active + Completed -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

      <!-- Active Tasks -->
      <div class="rounded-2xl bg-card p-6 shadow-card border border-border/30">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold flex items-center gap-2">
            <span class="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            Active Tasks
          </h2>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100">4</span>
        </div>

        <div class="space-y-2">
          <div class="p-4 rounded-xl hover:bg-slate-50 flex justify-between items-center">
            <div>
              <p class="font-medium">Review homepage design</p>
              <p class="text-sm text-slate-500">Company Website</p>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">High</span>
          </div>

          <div class="p-4 rounded-xl hover:bg-slate-50 flex justify-between items-center">
            <div>
              <p class="font-medium">Meeting with dev team</p>
              <p class="text-sm text-slate-500">E-commerce App</p>
            </div>
            <span class="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600">Medium</span>
          </div>
        </div>
      </div>

      <!-- Completed -->
      <div class="rounded-2xl bg-card p-6 shadow-card border border-border/30">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold flex items-center gap-2 text-emerald-600">
            ✓ Completed
          </h2>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600">
            2
          </span>
        </div>

        <div class="space-y-2 opacity-70">
          <div class="p-4 rounded-xl flex justify-between items-center line-through">
            <div>
              <p class="font-medium">Setup development environment</p>
              <p class="text-sm text-slate-500">E-learning Platform</p>
            </div>
          </div>

          <div class="p-4 rounded-xl flex justify-between items-center line-through">
            <div>
              <p class="font-medium">Design database schema</p>
              <p class="text-sm text-slate-500">Inventory Management</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>
