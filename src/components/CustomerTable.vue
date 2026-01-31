<template>


  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8">

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
        <button class="w-44 flex items-center justify-center gap-2 px-4 py-2  text-sm  border border-gray-100 shadow-sm rounded-lg text-[#131313] bg-[#F9FBFA] ">Import Customers</button>
        
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
  <button @click="openModal('view', customer)" class="text-blue-600 hover:text-blue-800">
   <i class="fa-solid fa-user"></i>
  </button>
  <div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button @click="openModal('import', customer)" class="text-green-600 hover:text-green-800">
<img class="h-4 w-4"
src="/import-export (1).png"
>

  </button>
  <div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button @click="openModal('edit', customer)" class="text-orange-500 hover:text-orange-700">
    <i class="bi bi-pencil text-md"></i>
  </button>
<div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <button @click="openModal('delete', customer)" class="text-red-500 hover:text-gray-600">
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

    <!-- View Customer Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'view' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Customer Details</h3>
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
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Customer Code</label>
                <p class="text-slate-900 font-semibold">{{ selectedCustomer.code }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Name</label>
                <p class="text-slate-900 font-semibold">{{ selectedCustomer.name }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Phone</label>
                <p class="text-slate-700">{{ selectedCustomer.phone }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Email</label>
                <p class="text-slate-700">{{ selectedCustomer.email }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Tax Number</label>
                <p class="text-slate-700">{{ selectedCustomer.tax }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Commercial Register</label>
                <p class="text-slate-700">{{ selectedCustomer.reg }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">VAT Status</label>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                  {{ selectedCustomer.VATStatus }}
                </span>
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

    <!-- Import/Export Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'import' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Import/Export Customer Data</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <p class="text-slate-600">Choose an action for <strong>{{ selectedCustomer.name }}</strong></p>
            <div class="space-y-3">
              <button @click="exportCustomer" class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export Customer Data
              </button>
              <button @click="importCustomer" class="w-full flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Import Customer Data
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

    <!-- Edit Customer Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'edit' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Edit Customer</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <form @submit.prevent="saveCustomer" class="p-6 space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Name</label>
                <input v-model="editForm.name" type="text" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Phone</label>
                <input v-model="editForm.phone" type="text" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Email</label>
                <input v-model="editForm.email" type="email" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Tax Number</label>
                <input v-model="editForm.tax" type="text" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Commercial Register</label>
                <input v-model="editForm.reg" type="text" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">VAT Status</label>
                <select v-model="editForm.VATStatus" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Registered</option>
                  <option>Not Registered</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end gap-3 pt-4 border-t border-slate-200">
              <button type="button" @click="closeModal" class="px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>

    <!-- Delete Confirmation Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'delete' && selectedCustomer"
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
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Delete Customer</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to delete <strong>{{ selectedCustomer.name }}</strong>? This action cannot be undone.
            </p>
            <div class="flex gap-3">
              <button @click="closeModal" class="flex-1 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmDelete" class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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

const modalType = ref(null);
const selectedCustomer = ref(null);
const editForm = ref({
  name: '',
  phone: '',
  email: '',
  tax: '',
  reg: '',
  VATStatus: ''
});

function openModal(type, customer) {
  modalType.value = type;
  selectedCustomer.value = customer;
  if (type === 'edit') {
    editForm.value = {
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      tax: customer.tax,
      reg: customer.reg,
      VATStatus: customer.VATStatus
    };
  }
}

function closeModal() {
  modalType.value = null;
  selectedCustomer.value = null;
}

function saveCustomer() {
  // Update customer data
  const index = customers.value.findIndex(c => c.code === selectedCustomer.value.code);
  if (index !== -1) {
    customers.value[index] = { ...customers.value[index], ...editForm.value };
  }
  closeModal();
  alert('Customer updated successfully!');
}

function confirmDelete() {
  const index = customers.value.findIndex(c => c.code === selectedCustomer.value.code);
  if (index !== -1) {
    customers.value.splice(index, 1);
  }
  closeModal();
  alert('Customer deleted successfully!');
}

function exportCustomer() {
  alert(`Exporting data for ${selectedCustomer.value.name}...`);
  closeModal();
}

function importCustomer() {
  alert(`Importing data for ${selectedCustomer.value.name}...`);
  closeModal();
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
