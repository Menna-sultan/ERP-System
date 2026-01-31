<template>






<div class="w-full min-h-screen ">
   <div class="p-8 ">
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
                  <button @click="openModal('viewInvoice', customer)" class="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                  <div class="h-3 border-l border-gray-300 mb-3 sm:mt-3"></div>

                  <button @click="openModal('downloadInvoice', customer)" class="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M12 18v-6"></path>
                      <path d="m9 15 3 3 3-3"></path>
                    </svg>
                  </button>
                  <div class="h-3 border-l border-gray-300 mb-3 sm:mt-3"></div>

                  <button @click="openModal('deleteInvoice', customer)" class="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
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
                    <button @click="openModal('viewExpense', expense)" class="p-2 text-slate-400 hover:text-blue-800 hover:bg-blue-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip">
                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                      </svg>
                    </button>
                    <button @click="openModal('deleteExpense', expense)" class="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
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

    <!-- View Invoice Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'viewInvoice' && selectedItem"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Invoice Details</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-6">
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Invoice Number</label>
                <p class="text-slate-900 font-bold text-lg">{{ selectedItem.code }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Status</label>
                <span
                  :class="[
                    'inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase',
                    selectedItem.Status === 'Paid' ? 'bg-green-100 text-green-700 border border-green-200' :
                    selectedItem.Status === 'Pending' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                    'bg-red-100 text-red-700 border border-red-200'
                  ]"
                >
                  {{ selectedItem.Status }}
                </span>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Client Name</label>
                <p class="text-slate-900 font-semibold">{{ selectedItem.name }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Amount</label>
                <p class="text-slate-900 font-bold text-xl">{{ selectedItem.Amount }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Issued Date</label>
                <p class="text-slate-700">{{ selectedItem.Issued }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Due Date</label>
                <p class="text-slate-700">{{ selectedItem.Due }}</p>
              </div>
            </div>
            <div class="border-t border-slate-200 pt-4">
              <h4 class="text-sm font-semibold text-slate-900 mb-3">Invoice Items</h4>
              <div class="space-y-2">
                <div class="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span class="text-slate-700">Service/Product</span>
                  <span class="text-slate-900 font-semibold">{{ selectedItem.Amount }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-6 border-t border-slate-200 flex justify-end gap-3">
            <button @click="closeModal" class="px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Close
            </button>
            <button @click="openModal('downloadInvoice', selectedItem)" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Download Invoice Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'downloadInvoice' && selectedItem"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Download Invoice</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <p class="text-slate-600">Choose download format for <strong>{{ selectedItem.code }}</strong></p>
            <div class="space-y-3">
              <button @click="downloadInvoice('pdf')" class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                Download as PDF
              </button>
              <button @click="downloadInvoice('excel')" class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="12" y1="18" x2="12" y2="12"></line>
                  <line x1="9" y1="15" x2="15" y2="15"></line>
                </svg>
                Download as Excel
              </button>
            </div>
          </div>
          <div class="p-6 border-t border-slate-200 flex justify-end gap-3">
            <button @click="closeModal" class="px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Delete Invoice Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'deleteInvoice' && selectedItem"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Delete Invoice</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to delete invoice <strong>{{ selectedItem.code }}</strong>? This action cannot be undone.
            </p>
            <div class="flex gap-3">
              <button @click="closeModal" class="flex-1 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmDeleteInvoice" class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- View Expense Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'viewExpense' && selectedItem"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Expense Details</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Transaction ID</label>
                <p class="text-slate-900 font-bold">{{ selectedItem.id }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Category</label>
                <span class="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase">
                  {{ selectedItem.category }}
                </span>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Vendor</label>
                <p class="text-slate-900 font-semibold">{{ selectedItem.vendor }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Amount</label>
                <p class="text-red-600 font-black text-xl">{{ selectedItem.amount }}</p>
              </div>
              <div class="col-span-2">
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Description</label>
                <p class="text-slate-700">{{ selectedItem.description }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Date</label>
                <p class="text-slate-700">{{ selectedItem.date }}</p>
              </div>
            </div>
            <div class="border-t border-slate-200 pt-4">
              <h4 class="text-sm font-semibold text-slate-900 mb-3">Attachments</h4>
              <div class="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                </svg>
                <span class="text-sm text-slate-600">Receipt_{{ selectedItem.id }}.pdf</span>
                <button class="ml-auto text-blue-600 hover:text-blue-800 text-sm font-semibold">Download</button>
              </div>
            </div>
          </div>
          <div class="p-6 border-t border-slate-200 flex justify-end gap-3">
            <button @click="closeModal" class="px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Delete Expense Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'deleteExpense' && selectedItem"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Delete Expense</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to delete expense <strong>{{ selectedItem.id }}</strong>? This action cannot be undone.
            </p>
            <div class="flex gap-3">
              <button @click="closeModal" class="flex-1 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmDeleteExpense" class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('invoices');
const modalType = ref(null);
const selectedItem = ref(null);

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

function openModal(type, item) {
  modalType.value = type;
  selectedItem.value = item;
}

function closeModal() {
  modalType.value = null;
  selectedItem.value = null;
}

function downloadInvoice(format) {
  alert(`Downloading invoice ${selectedItem.value.code} as ${format.toUpperCase()}...`);
  closeModal();
}

function confirmDeleteInvoice() {
  const index = customers.value.findIndex(c => c.code === selectedItem.value.code);
  if (index !== -1) {
    customers.value.splice(index, 1);
  }
  closeModal();
  alert('Invoice deleted successfully!');
}

function confirmDeleteExpense() {
  const index = expenses.value.findIndex(e => e.id === selectedItem.value.id);
  if (index !== -1) {
    expenses.value.splice(index, 1);
  }
  closeModal();
  alert('Expense deleted successfully!');
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
