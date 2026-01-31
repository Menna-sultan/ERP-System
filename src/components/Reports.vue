<template>
  <main class="min-h-screen transition-all duration-300 ease-in-out bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
    <div class="p-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <h1 class="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
          </div>
          <p class="text-slate-500 ml-15">Comprehensive insights and analytics for your business</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 rounded-xl font-semibold shadow-sm border border-slate-200 hover:bg-slate-50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export
          </button>
          <button class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:from-blue-700 hover:to-indigo-700 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Generate Report
          </button>
        </div>
      </div>

      <!-- Filter Bar -->
      <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm mb-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="relative">
            <label class="text-xs font-semibold text-slate-600 mb-1 block">Date Range</label>
            <select class="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>Custom range</option>
            </select>
          </div>
          <div class="relative">
            <label class="text-xs font-semibold text-slate-600 mb-1 block">Report Type</label>
            <select class="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
              <option>All Reports</option>
              <option>Financial</option>
              <option>Sales</option>
              <option>Projects</option>
              <option>Customers</option>
              <option>Team Performance</option>
            </select>
          </div>
          <div class="relative">
            <label class="text-xs font-semibold text-slate-600 mb-1 block">Status</label>
            <select class="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
              <option>All Status</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Draft</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="w-full px-4 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-600">+12%</span>
          </div>
          <div class="text-3xl font-bold text-slate-900 mb-1">$125,430</div>
          <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Revenue</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">+8%</span>
          </div>
          <div class="text-3xl font-bold text-slate-900 mb-1">1,234</div>
          <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Customers</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">+15%</span>
          </div>
          <div class="text-3xl font-bold text-slate-900 mb-1">89</div>
          <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed Projects</div>
        </div>

        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-600">+5%</span>
          </div>
          <div class="text-3xl font-bold text-slate-900 mb-1">156</div>
          <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Reports</div>
        </div>
      </div>

      <!-- Reports List -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Recent Reports -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-bold text-slate-900">Recent Reports</h2>
            <button class="text-sm text-blue-600 hover:text-blue-700 font-semibold">View All</button>
          </div>
          <div class="space-y-4">
            <div v-for="report in recentReports" :key="report.id" class="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', report.iconBg]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="report.iconColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path :d="report.iconPath"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{{ report.title }}</h3>
                    <p class="text-xs text-slate-500">{{ report.type }}</p>
                  </div>
                </div>
                <span :class="['text-xs px-2 py-1 rounded-full font-semibold', report.statusClass]">
                  {{ report.status }}
                </span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-slate-600">{{ report.date }}</span>
                <button class="text-blue-600 hover:text-blue-700 font-semibold">View →</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-lg font-bold text-slate-900">Quick Actions</h2>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <button v-for="action in quickActions" :key="action.id" class="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group text-left">
              <div :class="['w-10 h-10 rounded-lg flex items-center justify-center mb-3', action.iconBg]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" :class="action.iconColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path :d="action.iconPath"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{{ action.title }}</h3>
              <p class="text-xs text-slate-500">{{ action.description }}</p>
            </button>
          </div>
        </div>
      </div>

      <!-- Report Templates -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-lg font-bold text-slate-900">Report Templates</h2>
          <button class="text-sm text-blue-600 hover:text-blue-700 font-semibold">View All Templates</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="template in templates" :key="template.id" class="p-5 rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer group">
            <div :class="['w-12 h-12 rounded-xl flex items-center justify-center mb-4', template.iconBg]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" :class="template.iconColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path :d="template.iconPath"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{{ template.title }}</h3>
            <p class="text-sm text-slate-500 mb-4">{{ template.description }}</p>
            <button class="text-sm text-blue-600 hover:text-blue-700 font-semibold">Use Template →</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const recentReports = ref([
  {
    id: 1,
    title: 'Monthly Financial Summary',
    type: 'Financial Report',
    date: 'Jan 28, 2026',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    id: 2,
    title: 'Q4 Sales Performance',
    type: 'Sales Report',
    date: 'Jan 25, 2026',
    status: 'Completed',
    statusClass: 'bg-green-100 text-green-700',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconPath: 'M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3'
  },
  {
    id: 3,
    title: 'Customer Acquisition Report',
    type: 'Customer Report',
    date: 'Jan 22, 2026',
    status: 'Pending',
    statusClass: 'bg-yellow-100 text-yellow-700',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 1 8 0'
  },
  {
    id: 4,
    title: 'Project Status Overview',
    type: 'Project Report',
    date: 'Jan 20, 2026',
    status: 'Draft',
    statusClass: 'bg-slate-100 text-slate-700',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    iconPath: 'M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5M9 11l3 3L22 4'
  }
]);

const quickActions = ref([
  {
    id: 1,
    title: 'Financial Report',
    description: 'Generate financial summary',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    id: 2,
    title: 'Sales Report',
    description: 'View sales analytics',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconPath: 'M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3'
  },
  {
    id: 3,
    title: 'Customer Report',
    description: 'Customer insights',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 1 8 0'
  },
  {
    id: 4,
    title: 'Project Report',
    description: 'Project status',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    iconPath: 'M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5M9 11l3 3L22 4'
  }
]);

const templates = ref([
  {
    id: 1,
    title: 'Monthly Financial',
    description: 'Comprehensive monthly financial overview',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    id: 2,
    title: 'Sales Performance',
    description: 'Track sales metrics and KPIs',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconPath: 'M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3'
  },
  {
    id: 3,
    title: 'Customer Analysis',
    description: 'Deep dive into customer data',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 1 8 0'
  }
]);
</script>
