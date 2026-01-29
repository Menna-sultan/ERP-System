<template>

  <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
    <!-- Top Actions Bar -->
    <div class="p-6 border-b border-gray-50 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-gray-50/50">
      <div class="flex flex-wrap gap-2">
        <button 
          @click="handleDeleteSelected"
          :disabled="selectedIds.size === 0"
          :class="[
            'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all',
            selectedIds.size > 0
              ? 'bg-rose-500 text-white hover:bg-rose-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          ]"
        >
          <Trash2Icon class="w-4 h-4" />
          حذف المختار
        </button>

        <button 
          @click="handleBulkAutoAssign"
          :disabled="selectedIds.size === 0 || isBulkProcessing"
          :class="[
            'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all',
            selectedIds.size > 0 && !isBulkProcessing
              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          ]"
        >
          <ZapIcon :class="isBulkProcessing ? 'animate-pulse' : ''" class="w-4 h-4" />
          {{ isBulkProcessing ? 'جاري التعيين...' : 'تعيين تلقائيا ' }}
        </button>

        <button 
          @click="handleSaveSelected"
          :disabled="selectedIds.size === 0"
          :class="[
            'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all',
            selectedIds.size > 0
              ? 'bg-primary text-white hover:opacity-90'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          ]"
        >
          <SaveIcon class="w-4 h-4" />
          حفظ الحسابات المختارة
        </button>
      </div>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
  <div class="relative flex-1 sm:w-64">
  <!-- Input -->
  <input 
    type="text"
    placeholder="بحث بالاسم..."
    v-model="searchTerm"
    class="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-200 
           focus:ring-2 focus:ring-primary/20 focus:border-primary 
           outline-none text-sm transition-all"
  />

  <!-- Search Icon -->
  <i class="bi bi-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
</div>

        
<div class="relative">
  <span class="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
    ▼
  </span>

  <select 
    v-model.number="pageSize"
    class="appearance-none pr-8 px-3 py-2.5 rounded-lg border border-gray-200 text-sm
           outline-none focus:ring-2 focus:ring-primary/20 transition-all"
  >
    <option :value="10">10</option>
    <option :value="25">25</option>
    <option :value="50">50</option>
  </select>
</div>

      </div>
    </div>



    <!-- Table Section -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
            <th class="p-4 w-12">
              <input
                type="checkbox"
                :checked="isAllSelected"
                @change="onSelectAll"
                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
            </th>
            <th class="p-4 font-bold text-xs text-left">#</th>
            <th class="p-4 font-bold text-xs text-left">العميل</th>
            <th class="p-4 font-bold text-xstext-left">الحالة المتعلقة</th>
            <th class="p-4 font-bold text-xstext-left">دليل الحساب</th>
            <th class="p-4 font-bold text-xs text-center">الإجراء</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-if="filteredCustomers.length === 0">
            <td colspan="6" class="p-10 text-center text-gray-400 italic">
              لا توجد بيانات متاحة حالياً
            </td>
          </tr>
          <tr v-for="customer in displayedCustomers" :key="customer.id"
              :class="[
                'hover:bg-primary/5 transition-colors group',
                selectedIds.has(customer.id) ? 'bg-primary/5' : ''
              ]"
          >
            <td class="p-4">
              <input 
                type="checkbox"
                :checked="selectedIds.has(customer.id)"
                @change="toggleSelect(customer.id)"
                class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              />
            </td>
            <td class="p-4 text-sm font-medium text-gray-500">{{ customer.number }}</td>
            <td class="p-4">
              <div class="font-semibold text-gray-800">{{ customer.name }}</div>
            </td>
            <td class="p-4">
              <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  فواتير المبيعات : {{ customer.salesInvoices }}
                </span>
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  عروض الأسعار : {{ customer.priceOffers }}
                </span>
              </div>
            </td>
            <td class="p-4 min-w-[300px]">
              <div class="relative">
             
                <select
                  v-model="customer.mappedAccountId"
                  @change="updateCustomer(customer.id, { mappedAccountId: customer.mappedAccountId })"
                  class="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-sm
                         outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                          transition-all"
                >
                  <!-- Placeholder -->
                  <option value="" disabled>
                    اختر حساب من الشجرة المحاسبية
                  </option>

                  <option v-for="acc in accounts" :key="acc.id" :value="acc.id">
                    {{ acc.code }} - {{ acc.name }}
                  </option>

                  <option
                    v-if="customer.mappedAccountId && !accounts.find(a => a.id === customer.mappedAccountId)"
                    :value="customer.mappedAccountId"
                  >
                    {{ customer.mappedAccountId }}
                  </option>
                </select>
                <span
                  v-if="!customer.mappedAccountId"
                  class="absolute inset-0 flex items-center px-3 py-1.5 text-sm text-gray-500 pointer-events-none"
                >
                  اختر حساب من الشجرة المحاسبية
                </span>
                
              </div>
            </td>
            <td class="p-4">
              <div class="flex items-center justify-center gap-2">
                <button
                  title="حفظ"
                  class="px-2 py-0 text-white bg-primary rounded-md hover:opacity-90 transition-all shadow-sm "
                >
                 <i class="fa-solid fa-check text-[12px]"></i>
                </button>

<button
 
  class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600"
>

  

  <!-- Plus -->
  <i
   
    class="fa-solid fa-plus text-[14px]"
  ></i>

  إنشاء تلقائيا
</button>


                <button
                  @click="() => onDelete(customer.id)"
                  title="حذف"
                  class="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                >
                   <i class="bi bi-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Table Footer -->
    <div class="p-4 bg-gray-50 flex justify-between items-center text-sm text-gray-500">
      <div>عرض 1 إلى {{ Math.min(filteredCustomers.length, pageSize) }} من أصل {{ filteredCustomers.length }} عميل</div>
      <div class="flex gap-1">
        <button disabled class="px-3 py-1 border rounded hover:bg-white disabled:opacity-50">السابق</button>
        <button class="px-3 py-1 bg-primary text-white rounded">1</button>
        <button class="px-3 py-1 border rounded hover:bg-white">التالي</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// البيانات (نفس البيانات كمثال)
interface Customer {
  id: string;
  number: number;
  name: string;
  salesInvoices: number;
  priceOffers: number;
  mappedAccountId?: string;
  isProcessing?: boolean;
}

interface ChartAccount {
  id: string;
  code: string;
  name: string;
}

const MOCK_ACCOUNTS: ChartAccount[] = [
  { id: '101', code: '12101', name: 'ذمم مدينون - تجاري' },
  { id: '102', code: '12102', name: 'ذمم مدينون - شركات' },
  { id: '103', code: '12103', name: 'أوراق قبض' },
  { id: '104', code: '12104', name: 'تأمينات لدى الغير' },
];

const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'c1', number: 1, name: 'ممممم', salesInvoices: 0, priceOffers: 1 },
  { id: 'c2', number: 2, name: 'ويب سوفت للتقنية', salesInvoices: 0, priceOffers: 1 },
  { id: 'c3', number: 3, name: 'المثنى محمد البشري', salesInvoices: 0, priceOffers: 1 },
  { id: 'c4', number: 4, name: 'إيلاف بسام', salesInvoices: 0, priceOffers: 0 },
  { id: 'c5', number: 5, name: 'ZXCXZC', salesInvoices: 0, priceOffers: 0 },
];

// الستايل الأساسي من Tailwind
const searchTerm = ref('');
const pageSize = ref(10);
const customers = ref<Customer[]>([...INITIAL_CUSTOMERS]);
const selectedIds = ref(new Set<string>());
const isBulkProcessing = ref(false);
const accounts = ref<ChartAccount[]>([...MOCK_ACCOUNTS]);

const filteredCustomers = computed(() => {
  return customers.value.filter(c =>
    c.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const displayedCustomers = computed(() => {
  return filteredCustomers.value.slice(0, pageSize.value);
});

const isAllSelected = computed(() => {
  return filteredCustomers.value.length > 0 && selectedIds.value.size === filteredCustomers.value.length;
});

function toggleSelect(id: string) {
  if (selectedIds.value.has(id)) {
    selectedIds.value.delete(id);
  } else {
    selectedIds.value.add(id);
  }
}

function onSelectAll(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    selectedIds.value = new Set(filteredCustomers.value.map(c => c.id));
  } else {
    selectedIds.value.clear();
  }
}

async function handleAutoCreate(id: string) {
  const idx = customers.value.findIndex(c => c.id === id);
  if (idx === -1) return;
  
  customers.value[idx].isProcessing = true;

  // استدعاء API وهمي - هنا حطي منطقك الحقيقي
  const suggested = await fakeSuggestAccountMapping(customers.value[idx].name);
  
  customers.value[idx].mappedAccountId = suggested;
  customers.value[idx].isProcessing = false;
}

async function handleBulkAutoAssign() {
  if (selectedIds.value.size === 0) {
    window.alert("يرجى اختيار عملاء أولاً");
    return;
  }

  isBulkProcessing.value = true;
  const selectedCustomers = customers.value.filter(c => selectedIds.value.has(c.id));
  const names = selectedCustomers.map(c => c.name);

  // استدعاء API وهمي
  const mappings = await fakeAutoGenerateBulkAccounts(names);

  customers.value = customers.value.map(c => {
    if (selectedIds.value.has(c.id) && mappings[c.name]) {
      return { ...c, mappedAccountId: mappings[c.name] };
    }
    return c;
  });

  isBulkProcessing.value = false;
}

function handleDeleteSelected() {
  if (selectedIds.value.size === 0) return;
  if (confirm(`هل أنت متأكد من حذف ${selectedIds.value.size} من المحددات؟`)) {
    customers.value = customers.value.filter(c => !selectedIds.value.has(c.id));
    selectedIds.value.clear();
  }
}

function handleSaveSelected() {
  window.alert(`تم حفظ ${selectedIds.value.size} من التعديلات بنجاح`);
  selectedIds.value.clear();
}

function updateCustomer(id: string, updates: Partial<Customer>) {
  const idx = customers.value.findIndex(c => c.id === id);
  if (idx !== -1) {
    customers.value[idx] = { ...customers.value[idx], ...updates };
  }
}

function onDelete(id: string) {
  if (confirm('هل تريد حذف هذا العميل؟')) {
    customers.value = customers.value.filter(c => c.id !== id);
    selectedIds.value.delete(id);
  }
}

// مكونات الأيقونات (تقدر تستخدم أي مكتبة أيقونات Vue تناسبك، هنا مجرد مثال بسيط)
// import { Trash2Icon, PlusIcon, CheckIcon, Loader2Icon, ZapIcon, SaveIcon, SearchIcon } from '@heroicons/vue/24/solid';

// Temporary icons as placeholders
const Trash2Icon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>' };
const PlusIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>' };
const CheckIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' };
const Loader2Icon = { template: '<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>' };
const ZapIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>' };
const SaveIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>' };
const SearchIcon = { template: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>' };

// ===
// دوال وهمية تحاكي الـ API
function fakeSuggestAccountMapping(name: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('101'); // ترجع id حساب مثلا
    }, 1500);
  });
}

function fakeAutoGenerateBulkAccounts(names: string[]): Promise<Record<string, string>> {
  return new Promise(resolve => {
    setTimeout(() => {
      const result: Record<string, string> = {};
      names.forEach((n, i) => {
        result[n] = MOCK_ACCOUNTS[i % MOCK_ACCOUNTS.length].id;
      });
      resolve(result);
    }, 3000);
  });
}
</script>

<style scoped>
/* تخصيصات بسيطة لو حبيتي */
</style>
