<template>






<div class="w-full min-h-screen ">
   <div class="p-8 -mt-8">
    <!-- Header -->
   <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-semibold text-slate-800 mt-4">Accounting</h2>
        <p class="text-slate-500  mt-1">Manage invoices and expenses</p>
      </div>
      <div class="flex gap-3">
 
       <button
          class="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-xs hover:bg-slate-50 transition-all"><svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-download" aria-hidden="true">
            <path d="M12 15V3"></path>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="m7 10 5 5 5-5"></path>
          </svg> Export Statement</button>
        <button @click="$router.push({ name: 'Addcustomer' })"
          class="w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-md text-white bg-[#193560] ">
          <i class="fa-solid fa-plus text-xs "></i>
          <span>New Entry</span>
        </button>
      </div>
    </div>

    <!-- Table Card -->
    <div class="bg-white rounded-xl shadow">
      <!-- Controls -->
     


<div class="px-8 py-6 border-b border-slate-50 bg-slate-50/30 flex items-center justify-between gap-4">
    <div class="relative" >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true"
            data-v-inspector="src/components/Project.vue:62:27">
            <path d="m21 21-4.34-4.34" data-v-inspector="src/components/Project.vue:62:312"></path>
            <circle cx="11" cy="11" r="8" data-v-inspector="src/components/Project.vue:62:346"></circle>
          </svg>
          <input placeholder="Search anything..."
            class="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-64 shadow-sm"
            type="text" data-v-inspector="src/components/Project.vue:64:5">
        </div>

  <!-- 3 Buttons grouped here -->
    <div class="flex items-center gap-3 space-x-4 text-sm">
    <div class="flex p-1 bg-white  rounded-xl shadow-sm">


        
        <div class="flex items-center gap-3 space-x-4 text-sm">
    <button
      @click="activeTab = 'invoices'"
      :class="activeTab === 'invoices' ? 'bg-[#193560] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 bg-white'"
      class="flex items-center gap-2 px-5 py-2 text-xs font-bold transition-all rounded-lg"
    >

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 3h14v18l-1.032-.884a2 2 0 0 0-2.603 0L14.333 21l-1.031-.884a2 2 0 0 0-2.604 0L9.667 21l-1.032-.884a2 2 0 0 0-2.603 0L5 21zm10 4H9m6 4H9m6 4h-4" stroke-width="1"/></svg>Invoices</button>

              <button
              @click="activeTab = 'expenses'"
              :class="activeTab === 'expenses' ? 'bg-[#193560] text-white shadow-lg' : 'text-slate-400 hover:text-slate-600 bg-white'"
              class="flex items-center gap-2 px-5 py-2 text-xs font-bold transition-all rounded-lg"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-file-spreadsheet" aria-hidden="true">
                <path
                  d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z">
                </path>
                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                <path d="M8 13h2"></path>
                <path d="M14 13h2"></path>
                <path d="M8 17h2"></path>
                <path d="M14 17h2"></path>
              </svg>Expenses</button>
              
            </div>
            </div>
          <button class="w-28 flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 border border-slate-200 ">
             <i class="fa-solid fa-print"></i>
            <span>Print</span>
           
          </button>
        </div>



          </div>
 

      <!-- Invoices Table -->
      <div v-if="activeTab === 'invoices'" class="overflow-x-auto">
        <table class="w-full text-sm text-left mt-7">
          <thead class="bg-gray-50 text-gray-500">
            <tr>
              <th class="px-8 py-5">Invoice #</th>
              <th class="px-8 py-5">Client Name</th>
              <th class="px-8 py-5">Amount</th>
              <th class="px-8 py-5">Issued Date</th>
              <th class="px-8 py-5">Due Date</th>
              <th class="px-8 py-5">Status</th>
              <th class="px-8 py-5 text-right pr-16">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(customer, index) in customers"
              :key="index"
              class="border-b last:border-none hover:bg-gray-50 group"
            >
              <td class="px-4 py-3">
                <span class="px-3 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full">{{ customer.code }}</span>
              </td>
              <td class="px-4 py-3 font-medium text-gray-900">{{ customer.name }}</td>
              <td class="px-4 py-3">{{ customer.Amount }}</td>
              <td class="px-4 py-3">{{ customer.Issued }}</td>
              <td class="px-4 py-3">{{ customer.Due }}</td>
              <td class="px-4 py-3">
                <span
                  v-if="customer.Status === 'Paid'"
                  class="inline-flex px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-green-100 text-green-700 border border-green-200"
                >
                  Paid
                </span>
                <span
                  v-else-if="customer.Status === 'Pending'"
                  class="inline-flex px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-700 border border-yellow-200"
                >
                  Pending
                </span>
                <span
                  v-else-if="customer.Status === 'Overdue'"
                  class="inline-flex px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200"
                >
                  Overdue
                </span>
              </td>
              <td class="px-8 py-5 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <div class="h-3 border-l border-gray-300 mb-3 sm:mt-3"></div>

                  <button class="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M12 18v-6"></path>
                      <path d="m9 15 3 3 3-3"></path>
                    </svg>
                  </button>
                  <div class="h-3 border-l border-gray-300 mb-3 sm:mt-3"></div>

                  <button class="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Expenses Table -->
      <div v-if="activeTab === 'expenses'" class="overflow-x-auto">
        <div class="flex-1 overflow-x-auto">
       
                  <table class="w-full text-sm text-left mt-7">
          <thead class="bg-gray-50 text-gray-500">
        
              
              <tr>
                <th class="px-8 py-5">Transaction ID</th>
                <th class="px-8 py-5">Category</th>
                <th class="px-8 py-5">Vendor</th>
                <th class="px-8 py-5">Description</th>
                <th class="px-8 py-5">Amount</th>
                <th class="px-8 py-5">Date</th>
                <th class="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
              <tr
                v-for="(expense, index) in expenses"
                :key="index"
                class="hover:bg-slate-50/50 transition-colors group"
              >
                <td class="px-8 py-5">
              
                <span class="px-3 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full">{{ expense.id }}</span>

                </td>
                <td class="px-8 py-5">
                  <span class="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase">{{ expense.category }}</span>
                </td>
                <td class="px-8 py-5">
                  <span class="text-sm font-bold text-slate-900">{{ expense.vendor }}</span>
                </td>
                <td class="px-8 py-5">
                  <span class="text-xs text-slate-500 font-medium truncate max-w-xs block">{{ expense.description }}</span>
                </td>
                <td class="px-8 py-5">
                  <span class="text-sm font-black text-rose-600">{{ expense.amount }}</span>
                </td>
                <td class="px-8 py-5">
                  <span class="text-xs text-slate-500 font-medium">{{ expense.date }}</span>
                </td>
                <td class="px-8 py-5 text-right">
                  <div class="flex items-center justify-end gap-2 ">
                    <button class="p-2 text-slate-400 hover:text-blue-800 hover:bg-blue-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip">
                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                      </svg>
                    </button>
                    <button class="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 lucide-trash-2">
                        <path d="M10 11v6"></path>
                        <path d="M14 11v6"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M3 6h18"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
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

    <!-- Pagination -->
    <div class="flex items-center justify-between px-4 py-3 text-sm mt-2">
      <span class="text-gray-500">Page 1 | 6 of 12</span>
      <div class="flex items-center gap-2">
        <button class="px-3 py-1 border rounded-lg">Previous</button>
        <button class="px-3 py-1 rounded-lg bg-[#193560] text-white">1</button>
        <button class="px-3 py-1 border rounded-lg">Next</button>
      </div>
    </div>
    </div>
    </div>


</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('invoices');

const expenses = ref([
  {
    id: 'EXP-1001',
    category: 'Infrastructure',
    vendor: 'Amazon Web Services',
    description: 'AWS Monthly Billing',
    amount: '-$1240.50',
    date: '2024-05-02'
  },
  {
    id: 'EXP-1002',
    category: 'Marketing',
    vendor: 'Google LLC',
    description: 'Google Ads Campaign',
    amount: '-$2500.00',
    date: '2024-05-08'
  },
  {
    id: 'EXP-1003',
    category: 'Software',
    vendor: 'Figma Inc',
    description: 'Figma Enterprise Seat',
    amount: '-$45.00',
    date: '2024-05-10'
  },
  {
    id: 'EXP-1004',
    category: 'Rent',
    vendor: 'Global Office Co.',
    description: 'Office Space Q2',
    amount: '-$5000.00',
    date: '2024-04-01'
  }
]);

const customers = ref([
  {
    code: 'INV-2024-001',
    name: 'Test Company A',
    Amount: '$4500.00',
    Issued: '2024-05-01',
    Due: '2024-05-15',
    Status: 'Paid'
  },
  {
    code: 'INV-2024-002',
    name: 'Test Company B',
    Amount: '$3200.00',
    Issued: '2024-05-02',
    Due: '2024-05-16',
    Status: 'Pending'
  },
  {
    code: 'INV-2024-003',
    name: 'Test Company C',
    Amount: '$6800.00',
    Issued: '2024-05-03',
    Due: '2024-05-17',
    Status: 'Overdue'
  },
  {
    code: 'INV-2024-004',
    name: 'Test Company D',
    Amount: '$2100.00',
    Issued: '2024-05-04',
    Due: '2024-05-18',
    Status: 'Paid'
  },
  {
    code: 'INV-2024-005',
    name: 'Test Company E',
    Amount: '$5900.00',
    Issued: '2024-05-05',
    Due: '2024-05-19',
    Status: 'Pending'
  },
  {
    code: 'INV-2024-006',
    name: 'Test Company F',
    Amount: '$4100.00',
    Issued: '2024-05-06',
    Due: '2024-05-20',
    Status: 'Overdue'
  },
  {
    code: 'INV-2024-007',
    name: 'Test Company G',
    Amount: '$7300.00',
    Issued: '2024-05-07',
    Due: '2024-05-21',
    Status: 'Paid'
  },
  {
    code: 'INV-2024-008',
    name: 'Test Company H',
    Amount: '$2800.00',
    Issued: '2024-05-08',
    Due: '2024-05-22',
    Status: 'Pending'
  },
  {
    code: 'INV-2024-009',
    name: 'Test Company I',
    Amount: '$5500.00',
    Issued: '2024-05-09',
    Due: '2024-05-23',
    Status: 'Overdue'
  },
  {
    code: 'INV-2024-010',
    name: 'Test Company J',
    Amount: '$3900.00',
    Issued: '2024-05-10',
    Due: '2024-05-24',
    Status: 'Paid'
  }
]);
</script>
