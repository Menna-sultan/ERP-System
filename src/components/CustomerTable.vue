<template>
  <main class="flex-1 transition-all duration-300 ease-in-out">
    <div class="p-4 sm:p-6 lg:p-8">
      <!-- Header -->
      <div class="mb-6 lg:mb-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 class="text-xl sm:text-2xl font-semibold text-slate-800">Customer Management</h2>
          <div class="flex flex-col sm:flex-row gap-3">
            <button class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm border border-gray-100 shadow-sm rounded-lg text-[#131313] bg-[#F9FBFA] hover:bg-gray-50 transition-colors whitespace-nowrap">
              Import Customers
            </button>
            <button @click="$router.push({ name: 'Addcustomer' })"
              class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm sm:text-base text-white bg-[#193560] hover:bg-[#14284d] transition-colors whitespace-nowrap">
              <i class="fa-solid fa-plus text-xs"></i>
              <span>Add Customer</span>
            </button>
          </div>
        </div>
        <p class="text-sm sm:text-base text-slate-500 mt-1">Manage customer data and information</p>
      </div>

      <!-- Table Card -->
      <div class="bg-white rounded-xl shadow">
        <!-- Controls -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-4">
          <div class="relative w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <input placeholder="Search customers..."
              class="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              type="text">
          </div>

          <div class="flex flex-wrap items-center gap-3 text-sm w-full sm:w-auto">
            <div class="flex items-center gap-2">
              <span class="text-gray-500 whitespace-nowrap">Show</span>
              <div class="relative">
                <select class="appearance-none border border-gray-100 shadow-sm rounded-lg px-3 py-2 pr-8 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
                  ▼
                </span>
              </div>
            </div>
            <div class="flex gap-2 flex-1 sm:flex-none">
              <button class="flex-1 sm:w-28 flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                <i class="fa-solid fa-file-export text-sm"></i>
                <span>Export</span>
              </button>
              <button class="flex-1 sm:w-28 flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-100 shadow-sm rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                <i class="fa-solid fa-print text-sm"></i>
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Desktop Table -->
        <div class="hidden lg:block overflow-x-auto">
          <div class="min-w-full">
            <table class="w-full text-sm text-left">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-6 py-3 text-left whitespace-nowrap">#</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">Name</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">Phone</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">Email</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">Tax Number</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">Commercial Register</th>
                  <th class="px-6 py-3 text-left whitespace-nowrap">VAT Status</th>
                  <th class="px-6 py-3 text-center whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(customer, index) in customers" :key="index"
                  class="border-b last:border-none hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4">
                    <span class="px-3 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full whitespace-nowrap">
                      {{ customer.code }}
                    </span>
                  </td>
                  <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ customer.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ customer.phone }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ customer.email }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ customer.tax }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ customer.reg }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="customer.VATStatus === 'Registered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                      {{ customer.VATStatus }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center justify-center gap-3">
                      <button @click="openModal('view', customer)" 
                        class="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors"
                        aria-label="View customer">
                        <i class="fa-solid fa-user text-sm"></i>
                      </button>
                      <button @click="openModal('import', customer)"
                        class="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                        aria-label="Import/Export">
                        <img class="h-4 w-4" src="/import-export (1).png" alt="Import Export">
                      </button>
                      <button @click="openModal('edit', customer)"
                        class="p-2 text-orange-500 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors"
                        aria-label="Edit customer">
                        <i class="bi bi-pencil text-sm"></i>
                      </button>
                      <button @click="openModal('delete', customer)"
                        class="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Delete customer">
                        <i class="bi bi-trash text-sm"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Tablet Table (Medium Screens) -->
        <div class="hidden md:block lg:hidden overflow-x-auto">
          <div class="min-w-[768px]">
            <table class="w-full text-sm text-left">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-left">#</th>
                  <th class="px-4 py-3 text-left">Name</th>
                  <th class="px-4 py-3 text-left">Email</th>
                  <th class="px-4 py-3 text-left">VAT Status</th>
                  <th class="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(customer, index) in customers" :key="index"
                  class="border-b last:border-none hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <span class="px-2 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full">
                      {{ customer.code }}
                    </span>
                  </td>
                  <td class="px-4 py-3 font-medium text-gray-900">{{ customer.name }}</td>
                  <td class="px-4 py-3 text-sm">{{ customer.email }}</td>
                  <td class="px-4 py-3">
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium"
                      :class="customer.VATStatus === 'Registered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                      {{ customer.VATStatus }}
                    </span>
                  </td>
                  <td class="px-4 py-3">
                    <div class="flex items-center justify-center gap-2">
                      <button @click="openModal('view', customer)" 
                        class="p-1.5 text-blue-600 hover:text-blue-800"
                        aria-label="View">
                        <i class="fa-solid fa-user text-sm"></i>
                      </button>
                      <button @click="openModal('edit', customer)"
                        class="p-1.5 text-orange-500 hover:text-orange-700"
                        aria-label="Edit">
                        <i class="bi bi-pencil text-sm"></i>
                      </button>
                      <button @click="openModal('delete', customer)"
                        class="p-1.5 text-red-500 hover:text-red-700"
                        aria-label="Delete">
                        <i class="bi bi-trash text-sm"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Mobile Card Layout -->
        <div class="md:hidden space-y-4 p-4">
          <div v-for="(customer, index) in customers" :key="index"
            class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div class="flex items-start justify-between mb-3">
              <div>
                <span class="px-2 py-1 text-xs font-medium text-[#0346AB] bg-[#4A7FD0]/20 rounded-full mb-2 inline-block">
                  {{ customer.code }}
                </span>
                <h3 class="text-sm font-semibold text-gray-900">{{ customer.name }}</h3>
                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium mt-1"
                  :class="customer.VATStatus === 'Registered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                  {{ customer.VATStatus }}
                </span>
              </div>
              <div class="flex gap-1">
                <button @click="openModal('view', customer)" 
                  class="p-2 text-blue-600 hover:text-blue-800"
                  aria-label="View">
                  <i class="fa-solid fa-user text-sm"></i>
                </button>
                <button @click="openModal('edit', customer)"
                  class="p-2 text-orange-500 hover:text-orange-700"
                  aria-label="Edit">
                  <i class="bi bi-pencil text-sm"></i>
                </button>
                <button @click="openModal('delete', customer)"
                  class="p-2 text-red-500 hover:text-red-700"
                  aria-label="Delete">
                  <i class="bi bi-trash text-sm"></i>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 text-sm">
              <div>
                <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Email</label>
                <p class="text-gray-700 truncate">{{ customer.email }}</p>
              </div>
              <div>
                <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Phone</label>
                <p class="text-gray-700">{{ customer.phone }}</p>
              </div>
              <div>
                <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Tax Number</label>
                <p class="text-gray-700 text-xs truncate">{{ customer.tax }}</p>
              </div>
              <div>
                <label class="text-xs font-medium text-gray-500 uppercase block mb-1">Commercial Register</label>
                <p class="text-gray-700 text-xs">{{ customer.reg }}</p>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-gray-100">
              <button @click="openModal('import', customer)"
                class="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-green-600 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                <img class="h-3.5 w-3.5" src="/import-export (1).png" alt="Import Export">
                <span>Import/Export</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex flex-col sm:flex-row items-center justify-between px-4 py-3 text-sm border-t border-gray-100 gap-4">
          <span class="text-gray-500">Page 1 | 6 of 12</span>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              Previous
            </button>
            <button class="px-3 py-1.5 rounded-lg bg-[#193560] text-white whitespace-nowrap">1</button>
            <button class="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View Customer Modal -->
    <transition name="fade">
      <div v-if="modalType === 'view' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div class="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900">Customer Details</h3>
            <button @click="closeModal" 
              class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
              aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div class="sm:col-span-2">
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">VAT Status</label>
                <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                  {{ selectedCustomer.VATStatus }}
                </span>
              </div>
            </div>
          </div>
          <div class="p-4 sm:p-6 border-t border-slate-200 flex justify-end">
            <button @click="closeModal" 
              class="px-4 py-2.5 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
              Close
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit Customer Modal -->
    <transition name="fade">
      <div v-if="modalType === 'edit' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div class="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900">Edit Customer</h3>
            <button @click="closeModal"
              class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
              aria-label="Close modal">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <form @submit.prevent="saveCustomer" class="p-4 sm:p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Name</label>
                <input v-model="editForm.name" type="text" 
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Phone</label>
                <input v-model="editForm.phone" type="text"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Email</label>
                <input v-model="editForm.email" type="email"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Tax Number</label>
                <input v-model="editForm.tax" type="text"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Commercial Register</label>
                <input v-model="editForm.reg" type="text"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">VAT Status</label>
                <select v-model="editForm.VATStatus"
                  class="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                  <option>Registered</option>
                  <option>Not Registered</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-200 mt-6">
              <button type="button" @click="closeModal"
                class="px-4 py-2.5 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors w-full sm:w-auto order-2 sm:order-1">
                Cancel
              </button>
              <button type="submit"
                class="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto order-1 sm:order-2">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>

    <!-- Delete Confirmation Modal -->
    <transition name="fade">
      <div v-if="modalType === 'delete' && selectedCustomer"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 text-center mb-2">Delete Customer</h3>
            <p class="text-slate-600 text-center mb-6 text-sm sm:text-base">
              Are you sure you want to delete <strong>{{ selectedCustomer.name }}</strong>? This action cannot be undone.
            </p>
            <div class="flex flex-col sm:flex-row gap-3">
              <button @click="closeModal"
                class="flex-1 px-4 py-2.5 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmDelete"
                class="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
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

const customers = ref(Array.from({ length: 8 }).map(() => ({
  code: '#CUST001',
  name: 'Test Company',
  phone: '0502069121',
  email: 'Ahmed@gmail.com',
  tax: '345610584789',
  reg: 'CR-458796',
  VATStatus: 'Registered'
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

/* Better touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
  }
  
  input, select, textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}

/* Hide scrollbar but keep functionality */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>