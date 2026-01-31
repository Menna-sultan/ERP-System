<template>

  <div class="w-full min-h-screen  p-6  rounded-2xl ">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>

        <h2 class="text-2xl font-semibold text-gray-800 mt-4">Member Management</h2>
        <p class=" text-gray-500  mt-1">Manage member data and information</p>
      </div>
      <div class="flex gap-3">
        <!-- <button @click="$router.push({ name: 'setaccounts' })" class="w-44 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50 border border-[#939090]/50">
          Set Accounts (42)
        </button> -->
        
        <button @click="$router.push({ name: 'Addcustomer' })" class="w-44 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-md font-semibold text-white bg-[#193560] ">
           <i class="fa fa-user-plus text-[15px]"></i>
          <span>Invite Member</span>
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
         <button
            class="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"><svg
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-funnel" aria-hidden="true">
              <path
                d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z">
              </path>
            </svg>Filters</button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left mt-7">
          <thead class="bg-gray-50 text-gray-500  ">
            <tr>
           <th class="px-6 py-3 text-left">Profile</th>
      <th class="px-6 py-3 text-left">Name</th>
      <th class="px-6 py-3 text-left">Phone</th>
      <th class="px-6 py-3 text-left">Email</th>
      <th class="px-6 py-3 text-left">Role</th>
      <th class="px-6 py-3 text-left">Status</th>
      <th class="px-6 py-3 text-left">Last Active</th>
      <th class="px-6 py-3 text-center">Actions</th>

            </tr>
          </thead>
          
       
         
            <tbody>
              <tr
                v-for="(customer, index) in customers"
                :key="index"
                class="border-b last:border-none hover:bg-gray-50"
              >
                <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-[#f4f7fc] flex items-center justify-center border border-gray-200 ">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bab8b8" d="M12 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 3c3.186 0 6.045.571 8 3.063V20H4v-1.937C5.955 15.57 8.814 15 12 15"/></svg>                  </div>
                </div>
                </td>
                <td class="px-4 py-3 font-medium text-gray-900">{{ customer.name }}</td>
                <td class="px-4 py-3">{{ customer.phone }}</td>
                <td class="px-4 py-3">{{ customer.email }}</td>
                <td class="px-4 py-3">{{ customer.role }}</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium rounded-full" :class="getStatusClass(customer.status)">{{ customer.status }}</span>
                </td>
                 <td class="px-4 py-3">{{ customer.lastActive }}</td>
                <td class="px-4 py-3">
                  <div class="flex items-center justify-center gap-3">
  <button @click="openModal('view', customer)" class="text-blue-600 hover:text-blue-800">
   <i class="fa-solid fa-user"></i>
  </button>
    <div class="h-3 border-l border-gray-500  mb-3 sm:mt-3"></div>
  <!-- Suspend -->
  <button
    v-if="customer.status !== 'Suspended'"
    @click="openModal('suspend', customer)"
    class="p-2 text-red-500 hover:bg-orange-100 rounded-lg"
    title="Suspend"
  >
    <i class="bi bi-slash-circle"></i>
  </button>

  <!-- Reactivate -->
  <button
    v-else
    @click="openModal('reactivate', customer)"
    class="p-2 text-green-500 hover:bg-green-100 rounded-lg"
    title="Reactivate"
  >
    <i class="bi bi-check-circle"></i>
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

    <!-- View Member Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'view' && selectedMember"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Member Details</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-2xl font-bold flex items-center justify-center">
                {{ selectedMember.name.charAt(0) }}
              </div>
              <div>
                <h4 class="text-xl font-bold text-slate-900">{{ selectedMember.name }}</h4>
                <p class="text-slate-500">{{ selectedMember.role }}</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Phone</label>
                <p class="text-slate-900 font-semibold">{{ selectedMember.phone }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Email</label>
                <p class="text-slate-700">{{ selectedMember.email }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Role</label>
                <p class="text-slate-700">{{ selectedMember.role }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Status</label>
                <span :class="['inline-block px-3 py-1 rounded-full text-xs font-semibold', getStatusClass(selectedMember.status)]">
                  {{ selectedMember.status }}
                </span>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-1 block">Last Active</label>
                <p class="text-slate-700">{{ selectedMember.lastActive }}</p>
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

    <!-- Suspend Member Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'suspend' && selectedMember"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Suspend Member</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to suspend <strong>{{ selectedMember.name }}</strong>? They will lose access to the system.
            </p>
            <div class="mb-4">
              <label class="text-xs font-semibold text-slate-600 mb-1 block">Reason (Optional)</label>
              <textarea
                v-model="suspendReason"
                rows="3"
                placeholder="Enter reason for suspension..."
                class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>
            <div class="flex gap-3">
              <button @click="closeModal" class="flex-1 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmSuspend" class="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                Suspend
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Reactivate Member Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'reactivate' && selectedMember"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div class="p-6">
            <div class="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Reactivate Member</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to reactivate <strong>{{ selectedMember.name }}</strong>? They will regain access to the system.
            </p>
            <div class="flex gap-3">
              <button @click="closeModal" class="flex-1 px-4 py-2 text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button @click="confirmReactivate" class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Reactivate
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit Member Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'edit' && selectedMember"
        @click.self="closeModal"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Edit Member</h3>
            <button @click="closeModal" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <form @submit.prevent="saveMember" class="p-6 space-y-4">
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
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Role</label>
                <select v-model="editForm.role" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>User</option>
                </select>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-600 mb-1 block">Status</label>
                <select v-model="editForm.status" class="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Active</option>
                  <option>Invited</option>
                  <option>Suspended</option>
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

    <!-- Delete Member Modal -->
    <transition name="fade">
      <div
        v-if="modalType === 'delete' && selectedMember"
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
            <h3 class="text-xl font-bold text-slate-900 text-center mb-2">Delete Member</h3>
            <p class="text-slate-600 text-center mb-6">
              Are you sure you want to delete <strong>{{ selectedMember.name }}</strong>? This action cannot be undone and all their data will be permanently removed.
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
</template>

<script setup>
import { ref } from 'vue';

const statuses = ['Active', 'Invited', 'Suspended'];
const modalType = ref(null);
const selectedMember = ref(null);
const suspendReason = ref('');
const editForm = ref({
  name: '',
  phone: '',
  email: '',
  role: '',
  status: ''
});

const getStatusClass = (status) => {
  if (status === 'Active') return 'bg-green-100 text-green-800';
  if (status === 'Invited') return 'bg-blue-100 text-blue-800';
  if (status === 'Suspended') return 'bg-red-100 text-red-800';
  return 'bg-gray-100 text-gray-800';
};

function openModal(action, customer) {
  modalType.value = action;
  selectedMember.value = customer;
  suspendReason.value = '';
  if (action === 'edit') {
    editForm.value = {
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      role: customer.role,
      status: customer.status
    };
  }
}

function closeModal() {
  modalType.value = null;
  selectedMember.value = null;
  suspendReason.value = '';
}

function confirmSuspend() {
  const index = customers.value.findIndex(c => c.name === selectedMember.value.name);
  if (index !== -1) {
    customers.value[index].status = 'Suspended';
  }
  closeModal();
  alert(`Member ${selectedMember.value.name} has been suspended.${suspendReason.value ? ` Reason: ${suspendReason.value}` : ''}`);
}

function confirmReactivate() {
  const index = customers.value.findIndex(c => c.name === selectedMember.value.name);
  if (index !== -1) {
    customers.value[index].status = 'Active';
  }
  closeModal();
  alert(`Member ${selectedMember.value.name} has been reactivated.`);
}

function saveMember() {
  const index = customers.value.findIndex(c => c.name === selectedMember.value.name);
  if (index !== -1) {
    customers.value[index] = { ...customers.value[index], ...editForm.value };
  }
  closeModal();
  alert('Member updated successfully!');
}

function confirmDelete() {
  const index = customers.value.findIndex(c => c.name === selectedMember.value.name);
  if (index !== -1) {
    customers.value.splice(index, 1);
  }
  closeModal();
  alert('Member deleted successfully!');
}

const customers = ref([
  {
    code: '#CUST001',
    name: 'Test Company 1',
    phone: '0502069121',
    email: 'ahmed1@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2023-10-01'
  },
  {
    code: '#CUST002',
    name: 'Test Company 2',
    phone: '0502069122',
    email: 'ahmed2@gmail.com',
    role: 'User',
    status: 'Invited',
    lastActive: '2023-09-15'
  },
  {
    code: '#CUST003',
    name: 'Test Company 3',
    phone: '0502069123',
    email: 'ahmed3@gmail.com',
    role: 'Manager',
    status: 'Suspended',
    lastActive: '2023-08-20'
  },
  {
    code: '#CUST004',
    name: 'Test Company 4',
    phone: '0502069124',
    email: 'ahmed4@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2023-10-05'
  },
  {
    code: '#CUST005',
    name: 'Test Company 5',
    phone: '0502069125',
    email: 'ahmed5@gmail.com',
    role: 'User',
    status: 'Invited',
    lastActive: '2023-09-28'
  },
  {
    code: '#CUST006',
    name: 'Test Company 6',
    phone: '0502069126',
    email: 'ahmed6@gmail.com',
    role: 'Manager',
    status: 'Suspended',
    lastActive: '2023-07-10'
  },
  {
    code: '#CUST007',
    name: 'Test Company 7',
    phone: '0502069127',
    email: 'ahmed7@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2023-10-03'
  },
  {
    code: '#CUST008',
    name: 'Test Company 8',
    phone: '0502069128',
    email: 'ahmed8@gmail.com',
    role: 'User',
    status: 'Invited',
    lastActive: '2023-09-22'
  },
  {
    code: '#CUST009',
    name: 'Test Company 9',
    phone: '0502069129',
    email: 'ahmed9@gmail.com',
    role: 'Manager',
    status: 'Suspended',
    lastActive: '2023-06-15'
  },
  {
    code: '#CUST010',
    name: 'Test Company 10',
    phone: '0502069130',
    email: 'ahmed10@gmail.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2023-10-02'
  }
]);
</script>
