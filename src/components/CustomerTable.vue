<template>


  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8 -mt-8">

    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-semibold text-slate-800 mt-4">Customer Management</h2>
        <p class="text-slate-500  mt-1">Manage customer data and information</p>
      </div>
      <div class="flex gap-3">
        <!-- <button @click="$router.push({ name: 'setaccounts' })" class="w-44 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50 border border-[#939090]/50">
          Set Accounts (42)
        </button> -->
        <button class="w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm shadow-md text-[#131313] bg-[#F9FBFA] ">Import Customers</button>
        
        <button @click="$router.push({ name: 'Addcustomer' })" class="w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-md text-white bg-[#193560] ">
           <i class="fa-solid fa-plus text-xs "></i>
          <span>Add Customer</span>
         </button>
      </div>
    </div>

    <!-- Table Card -->
    <div class="bg-white rounded-xl shadow">
      <!-- Controls -->
      <div class="flex items-center justify-between p-4 ">
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


        
        <div class="flex items-center gap-3 space-x-4 text-sm">
          <span class="text-gray-500">Show</span>
                 <div class="relative">
  <select
    class="appearance-none border border-gray-100 shadow-sm rounded-lg px-3 py-2 pr-8"
  >
    <option>10</option>
    <option>25</option>
    <option>50</option>
  </select>

  <span class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
    ▼
  </span>
</div>


          <button class="w-28 flex items-center justify-center gap-2 px-3 py-2 border border-gray-100 shadow-sm rounded-lg hover:bg-gray-50">
             <i class="fa-solid fa-file-export"></i>
            <span>Export</span>
           
          </button>
          <button class="w-28 flex items-center justify-center gap-2 px-3 py-2 border border-gray-100 shadow-sm rounded-lg hover:bg-gray-50">
             <i class="fa-solid fa-print"></i>
            <span>Print</span>
           
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left mt-7">
          <thead class="bg-gray-50 text-gray-500  ">
            <tr>
           <th class="px-8 py-3 text-left w-64">#</th>
      <th class="px-4 py-3 text-left w-64 pl-8 ">Name</th>
      <th class="px-10 py-3 text-left pr-18 ">Phone</th>
      <th class="px-10 py-3 text-left w-64 pl-18">Email</th>
      <th class="px-9 py-3 text-left w-64">Tax Number</th>
      <th class="px-12 py-4 text-left w-70 pl-3">Commercial Register</th>
      <th class="px-10 py-3 text-left pl-5 ">VATStatus</th>
      <th class="px-10 py-3 text-center w-64">Actions</th>
      
            </tr>
          </thead>
          
       
         
            <tbody>
              <tr
                v-for="(customer, index) in customers"
                :key="index"
                class="border-b last:border-none hover:bg-gray-50"
              >
                <td class="px-4 py-3">
                <span class="px-3 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full"> {{ customer.code }} </span>
                </td>
                <td class="px-4 py-3 font-medium text-gray-900">{{ customer.name }}</td>
                <td class="px-4 py-3">{{ customer.phone }}</td>
                <td class="px-4 py-3">{{ customer.email }}</td>
                <td class="px-4 py-3">{{ customer.tax }}</td>
                <td class="px-4 py-3">{{ customer.reg }}</td>
                 <td class="px-4 py-3">{{ customer.VATStatus }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center justify-center gap-3">
  <button class="text-blue-600 hover:text-blue-800">
   <i class="fa-solid fa-user"></i>
  </button>
  <div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button class="text-green-600 hover:text-green-800">
<img class="h-4 w-4"
src="/import-export (1).png"
>

  </button>
  <div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button class="text-orange-500 hover:text-orange-700">
    <i class="bi bi-pencil text-md"></i>
  </button>
<div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button class="text-red-500 hover:text-gray-600">
    <i class="bi bi-trash"></i>
  </button>
</div>

                </td>
              </tr>
            </tbody>
          </table>
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
  </main>
</template>

<script setup>
import { ref } from 'vue';

const customers = ref(Array.from({ length: 10 }).map(() => ({
  code: '#CUST001',
  name: 'Test Company',
  phone: '0502069121',
  email: 'Ahmed@gmail.com',
  tax: '345610584789',
  reg: 'CR-458796',
  VATStatus:'Registered'
})));
</script>
