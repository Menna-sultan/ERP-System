<template>
  
  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8 ">
            <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 ">
                <div>
                    <h1 class="text-2xl font-semibold text-slate-800 mt-4">Financial Overview</h1>
                    <p class="text-slate-500 mt-1">Software Operations &amp; Billing Center</p>
                </div>
                <div class="flex gap-8">
                    <button
                        class="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition-all">Export
                        Report</button>
                    <button
                        class="flex items-center gap-2 px-5 py-2.5 bg-[#193560] text-white rounded-xl font-semibold  hover:bg-[#193560] transition-all hover:-translate-y-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>Generate Invoice</button>
                </div>
            </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mx-auto max-w-6xl mt-16">
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ">
                    <p class="text-[16px] font-bold text-[#131313]  mb-2">Monthly Revenue</p>
                    <div class="flex items-end justify-between">
                        <h3 class="text-2xl font-bold text-slate-900">$42,500.00</h3><span
                            class="text-xs font-bold text-emerald-600 flex items-center gap-1">+12.5%</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ">
                    <p class="6 font-bold text-[#131313]  mb-2">Total Expenses</p>
                    <div class="flex items-end justify-between">
                        <h3 class="text-2xl font-bold text-slate-900">$18,200.00</h3><span
                            class="text-xs font-bold text-rose-600 flex items-center gap-1">-2.4%</span>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ">
                    <p class="6 font-bold text-[#131313]  mb-2">Net Profit</p>
                    <div class="flex items-end justify-between">
                        <h3 class="text-2xl font-bold text-[#2B7FFF]">$24,300.00</h3>
                    </div>
                </div>
                <!-- <div
                    class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm bg-indigo-600 text-white border-transparent">
                    <p class="6 font-bold text-indigo-100  mb-2">Outstanding</p>
                    <div class="flex items-end justify-between">
                        <h3 class="text-2xl font-bold">$12,850.00</h3><span
                            class="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-lg uppercase">View All</span>
                    </div>
                </div> -->
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                <div class="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div class="flex items-center justify-between mb-8">
      <h4 class="font-bold text-slate-800">Income vs Expenses</h4>
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
        
      </div>
      </div>
    </div>

    <!-- Chart -->
    <div class="h-100 ">
      <canvas ref="stackedBarChart"></canvas>
    </div>
                </div>
                <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 class="font-bold text-slate-800 mb-6">Upcoming Costs</h4>
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg></div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-slate-800">Payroll - Dev Team</p>
                                <p class="text-xs text-[#131313]">Due in 5 days</p>
                            </div><span class="text-sm font-bold text-slate-700">-$12,400</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                                </svg></div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-slate-800">Cloud Hosting</p>
                                <p class="text-xs text-[#131313]">Due in 12 days</p>
                            </div><span class="text-sm font-bold text-slate-700">-$2,150</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <div
                                class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border border-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg></div>
                            <div class="flex-1">
                                <p class="text-sm font-bold text-slate-800">Client Retainer</p>
                                <p class="text-xs text-emerald-500 font-bold">Incoming</p>
                            </div><span class="text-sm font-bold text-emerald-600">+$15,000</span>
                        </div>
                    </div><button
                        class="w-full mt-10 py-3 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-[#131313] hover:border-[#2B7FFF] hover:text-[#2B7FFF] transition-all">View
                        Billing Calendar</button>
                </div>
            </div>
            <div class="mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h4 class="font-bold text-slate-800">Recent Transactions</h4><button
                        class="text-xs font-bold text-[#2B7FFF] hover:underline">View Ledger</button>
                </div>
                <!-- Loading -->
                <div v-if="loading" class="text-center py-6 text-gray-400 dark:text-gray-300">
                    Loading...
                </div>
                <table class="w-full text-left">
                    <thead>
                        <tr class="bg-slate-50/50">
                            <th class="px-6 py-4 text-[10px] font-bold text-[#131313] uppercase tracking-widest">Date
                            </th>
                            <th class="px-6 py-4 text-[10px] font-bold text-[#131313] uppercase tracking-widest">
                                Transaction</th>
                            <th class="px-6 py-4 text-[10px] font-bold text-[#131313] uppercase tracking-widest">
                                Category</th>
                            <th
                                class="px-6 py-4 text-[10px] font-bold text-[#131313] uppercase tracking-widest text-center">
                                Amount</th>
                            <th
                                class="px-6 py-4 text-[10px] font-bold text-[#131313] uppercase tracking-widest text-center">
                                Status</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-50">
                        <tr class="hover:bg-slate-50 transition-all cursor-default">
                            <td class="px-6 py-4 text-xs font-semibold text-slate-500">20 Oct 2025</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-emerald-500"></div><span
                                        class="text-sm font-bold text-slate-800">Stripe Payments</span>
                                </div>
                            </td>
                            <td class="px-6 py-4"><span
                                    class="text-xs px-2 py-1 bg-slate-50 rounded text-[#131313] border border-slate-100 font-medium shadow-sm">Revenue</span>
                           
                           
              
                           
                                </td>
                            <td class="px-6 py-4 text-center"><span
                                    class="text-sm font-bold text-emerald-600">+$12,500</span></td>
                            <td class="px-6 py-4 text-center"><span
                                    class="inline-flex px-2 py-0.5 rounded-lg text-[10px] font-bold border  bg-emerald-100 text-emerald-700 border-emerald-200">paid</span>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 transition-all cursor-default">
                            <td class="px-6 py-4 text-xs font-semibold text-slate-500">19 Oct 2025</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-emerald-500"></div><span
                                        class="text-sm font-bold text-slate-800">AWS Cloud Services</span>
                                </div>
                            </td>
                            <td class="px-6 py-4"><span
                                    class="text-xs px-2 py-1 bg-slate-50 rounded text-[#131313] border border-slate-100 font-medium shadow-sm">Infrastructure</span>
                            </td>
                            <td class="px-6 py-4 text-center"><span
                                    class="text-sm font-bold text-rose-600">-$2,400</span></td>
                            <td class="px-6 py-4 text-center"><span
                                    class="inline-flex px-2 py-0.5 rounded-lg text-[10px] font-bold border  bg-emerald-100 text-emerald-700 border-emerald-200">paid</span>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 transition-all cursor-default">
                            <td class="px-6 py-4 text-xs font-semibold text-slate-500">18 Oct 2025</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-slate-300"></div><span
                                        class="text-sm font-bold text-slate-800">Client: Nexus Tech</span>
                                </div>
                            </td>
                            <td class="px-6 py-4"><span
                                    class="text-xs px-2 py-1 bg-slate-50 rounded text-[#131313] border border-slate-100 font-medium shadow-sm">Service
                                    Fee</span></td>
                            <td class="px-6 py-4 text-center"><span
                                    class="text-sm font-bold text-emerald-600">+$8,900</span></td>
                            <td class="px-6 py-4 text-center"><span
                                    class="inline-flex px-2 py-0.5 rounded-lg text-[10px] font-bold border  bg-amber-100 text-amber-700 border-amber-200">pending</span>
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50 transition-all cursor-default">
                            <td class="px-6 py-4 text-xs font-semibold text-slate-500">15 Oct 2025</td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 rounded-full bg-emerald-500"></div><span
                                        class="text-sm font-bold text-slate-800">GitHub Enterprise</span>
                                </div>
                            </td>
                            <td class="px-6 py-4"><span
                                    class="text-xs px-2 py-1 bg-slate-50 rounded text-[#131313] border border-slate-100 font-medium shadow-sm">Software</span>
                            </td>
                            <td class="px-6 py-4 text-center"><span
                                    class="text-sm font-bold text-rose-600">-$450</span></td>
                            <td class="px-6 py-4 text-center"><span
                                    class="inline-flex px-2 py-0.5 rounded-lg text-[10px] font-bold border  bg-emerald-100 text-emerald-700 border-emerald-200">paid</span>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </main>


</template>


<script setup>
import { onMounted, ref } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const stackedBarChart = ref(null);

onMounted(() => {
  new Chart(stackedBarChart.value, {
    type: "bar",
    data: {
      labels: ["W1", "W2", "W3", "W4","W5","W6","W7"],
      datasets: [
        {
          label: "Income",
          data: [42000, 38000, 45000, 47000,25000,50000,35000],
          backgroundColor: "#193560", 
          borderRadius: 8,
                 barPercentage: 0.6,
    categoryPercentage: 0.7,
        },
        {
          label: "Expenses",
          data: [18000, 16000, 20000, 19000,12000,15000,17000],
          backgroundColor: "#e5e7eb", 
          borderRadius: 8,
            barPercentage: 0.6,
    categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `$${ctx.raw.toLocaleString()}`,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
            color: "#f1f5f9",
          },
          ticks: {
            callback: (value) => `$${value / 1000}k`,
          },
        },
      },
    },
  });
});
</script>


