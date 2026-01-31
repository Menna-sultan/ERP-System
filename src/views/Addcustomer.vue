
<template>
  <div class="flex min-h-screen bg-slate-50 text-slate-900" dir="ltr">
    
    <!-- Main content -->
    <main class="flex-1 flex flex-col">
      <!-- Header -->
      <header
        class="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10"
      >
        <div class="flex items-center gap-4 text-sm font-medium">
          <span class="text-slate-400">Customers</span>
          <i class="fas fa-chevron-down text-slate-300 rotate-90"></i>
          <span class="text-slate-700">Add New Customer</span>
        </div>
    
    
      </header>

      <!-- Content -->
      <div class="flex-1 p-8 overflow-y-auto">
        <form @submit.prevent="handleSubmit" class="max-w-6xl mx-auto flex flex-col gap-8">
          <!-- Page Title Section -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1
                class="text-3xl font-extrabold text-slate-900 flex items-center gap-3"
              >
                Add Customer
                <div
                  class="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md font-bold uppercase tracking-wider"
                >
                  NEW
                </div>
              </h1>
              <p class="text-slate-500 mt-1">
                Fill in the customer details to add them to the database
              </p>
            </div>
            <div class="flex items-center gap-3">
              <button
                type="button"
                @click="resetForm"
                class="px-6 py-2.5 text-slate-600 bg-white border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <i class="fas fa-times"></i>
                Cancel
              </button>
              <button
                type="submit"
                class="px-8 py-2.5 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95"
              >
                <i class="fas fa-save"></i>
                Save Customer
              </button>
            </div>
          </div>

          <!-- Main Form Card -->
          <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              <!-- Section: Names -->
              <div
                class="md:col-span-2 lg:col-span-3 pb-4 border-b border-slate-100 mb-2 flex items-center gap-2"
              >
                <i class="fas fa-user text-blue-500 text-lg"></i>
                <h3 class="text-lg font-bold text-slate-800">Basic Information</h3>
              </div>

              <FormInput
                label="Name in Arabic"
                v-model="formData.nameAr"
                required
                :error="errors.nameAr"
                placeholder="Enter Full Name in Arabic"
                action-icon="fas fa-language"
                @actionClick="autoTranslate('ar')"
              />

              <FormInput
                label="Name in English"
                v-model="formData.nameEn"
                required
                :error="errors.nameEn"
                placeholder="Enter Full Name"
                action-icon="fas fa-language"
                @actionClick="autoTranslate('en')"
              />

              <FormSelect
                label="Type"
                v-model="formData.type"
                :options="[
                  { label: 'Personal / Individual', value: 'شخصي' },
                  { label: 'Institution', value: 'مؤسسة' },
                  { label: 'Company', value: 'شركة' }
                ]"
                required
              />

              <!-- Section: IDs -->
              <FormSelect
                label="ID Type"
                v-model="formData.idType"
                :options="[
                  { label: 'National ID', value: 'national_id' },
                  { label: 'Residence Visa', value: 'iqama' },
                  { label: 'Passport', value: 'passport' }
                ]"
              />

              <FormInput
                label="ID Number"
                v-model="formData.idNumber"
                icon="fas fa-id-card"
              />

              <FormInput
                label="ID Expiry Date"
                type="date"
                v-model="formData.idExpiryDate"
                icon="fas fa-calendar-alt"
              />

              <!-- Section: Personal Info -->
              <FormSelect
                label="Nationality"
                v-model="formData.nationality"
                :options="[
                  { label: 'Saudi', value: 'saudi' },
                  { label: 'Egyptian', value: 'egyptian' },
                  { label: 'Jordanian', value: 'jordanian' }
                ]"
              />

              <FormInput
                label="Date of Birth"
                type="date"
                v-model="formData.dob"
                icon="fas fa-calendar-alt"
              />

              <FormInput
                label="Email"
                type="email"
                v-model="formData.email"
                icon="fas fa-envelope"
                :error="errors.email"
                placeholder="example@domain.com"
              />

              <!-- Section: Contact -->
              <FormInput
                label="Mobile Number"
                v-model="formData.mobile"
                required
                :error="errors.mobile"
                icon="fas fa-mobile-alt"
                placeholder="05XXXXXXXX"
              />

              <FormInput
                label="Phone Number"
                v-model="formData.phone"
                icon="fas fa-phone"
              />

              <FormInput
                label="Job Title"
                v-model="formData.jobTitle"
                icon="fas fa-briefcase"
              />

              <FormInput
                label="Workplace"
                v-model="formData.workPlace"
                icon="fas fa-building"
              />

              <FormSelect
                label="Customer Account"
                v-model="formData.customerAccount"
                :options="[
                  { label: 'Cash Account', value: 'cash' },
                  { label: 'Credit Account', value: 'credit' }
                ]"
              />

              <!-- Toggle Account -->
              <div
                class="flex items-center justify-between p-4 bg-slate-50 rounded-xl lg:col-span-1 border border-dashed border-slate-200"
              >
                <span class="text-sm font-semibold text-slate-700"
                  >Auto-create account for customer?</span
                >
                <button
                  type="button"
                  @click="formData.autoCreateAccount = !formData.autoCreateAccount"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none',
                    formData.autoCreateAccount ? 'bg-blue-600' : 'bg-slate-300'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      formData.autoCreateAccount ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  ></span>
                </button>
              </div>

              <!-- Section: Social Media & Online Presence -->
              <div
                class="md:col-span-2 lg:col-span-3 pb-4 border-b border-slate-100 mb-2 mt-4 flex items-center gap-2"
              >
                <i class="fas fa-share-alt text-blue-500 text-lg"></i>
                <h3 class="text-lg font-bold text-slate-800">Social Media & Online Presence</h3>
              </div>

              <FormInput
                label="Website"
                v-model="formData.website"
                type="url"
                icon="fas fa-globe"
                placeholder="https://www.example.com"
              />

              <FormInput
                label="LinkedIn"
                v-model="formData.linkedin"
                icon="fab fa-linkedin"
                placeholder="linkedin.com/in/username"
              />

              <FormInput
                label="Twitter/X"
                v-model="formData.twitter"
                icon="fab fa-twitter"
                placeholder="@username"
              />

              <FormInput
                label="Facebook"
                v-model="formData.facebook"
                icon="fab fa-facebook"
                placeholder="facebook.com/username"
              />

              <FormInput
                label="Instagram"
                v-model="formData.instagram"
                icon="fab fa-instagram"
                placeholder="@username"
              />

              <FormInput
                label="WhatsApp"
                v-model="formData.whatsapp"
                icon="fab fa-whatsapp"
                placeholder="+966XXXXXXXXX"
              />

              <!-- Section: Preferences & Settings -->
              <div
                class="md:col-span-2 lg:col-span-3 pb-4 border-b border-slate-100 mb-2 mt-4 flex items-center gap-2"
              >
                <i class="fas fa-cog text-blue-500 text-lg"></i>
                <h3 class="text-lg font-bold text-slate-800">Preferences & Settings</h3>
              </div>

              <FormSelect
                label="Preferred Language"
                v-model="formData.preferredLanguage"
                :options="[
                  { label: 'Arabic', value: 'ar' },
                  { label: 'English', value: 'en' },
                  { label: 'Both', value: 'both' }
                ]"
              />

              <FormSelect
                label="Preferred Contact Method"
                v-model="formData.preferredContact"
                :options="[
                  { label: 'Email', value: 'email' },
                  { label: 'Phone', value: 'phone' },
                  { label: 'SMS', value: 'sms' },
                  { label: 'WhatsApp', value: 'whatsapp' }
                ]"
              />

              <FormSelect
                label="Communication Time"
                v-model="formData.communicationTime"
                :options="[
                  { label: 'Morning (9 AM - 12 PM)', value: 'morning' },
                  { label: 'Afternoon (12 PM - 5 PM)', value: 'afternoon' },
                  { label: 'Evening (5 PM - 9 PM)', value: 'evening' },
                  { label: 'Any Time', value: 'anytime' }
                ]"
              />

              <FormSelect
                label="Customer Segment"
                v-model="formData.customerSegment"
                :options="[
                  { label: 'VIP', value: 'vip' },
                  { label: 'Premium', value: 'premium' },
                  { label: 'Standard', value: 'standard' },
                  { label: 'New', value: 'new' }
                ]"
              />

              <FormInput
                label="Credit Limit"
                type="number"
                v-model="formData.creditLimit"
                icon="fas fa-dollar-sign"
                placeholder="0.00"
              />

              <FormInput
                label="Discount Percentage"
                type="number"
                v-model="formData.discountPercentage"
                icon="fas fa-percent"
                placeholder="0"
              />

              <!-- Section: Additional Information -->
              <div
                class="md:col-span-2 lg:col-span-3 pb-4 border-b border-slate-100 mb-2 mt-4 flex items-center gap-2"
              >
                <i class="fas fa-info-circle text-blue-500 text-lg"></i>
                <h3 class="text-lg font-bold text-slate-800">Additional Information</h3>
              </div>

              <div class="md:col-span-2 lg:col-span-3">
                <label class="text-sm font-semibold text-slate-700 flex items-center gap-1 mb-2">
                  Notes & Comments
                </label>
                <textarea
                  v-model="formData.notes"
                  rows="4"
                  placeholder="Add any additional notes or comments about this customer..."
                  class="w-full py-2.5 px-4 bg-white border border-slate-200 rounded-lg transition-all outline-none
                         focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50
                         placeholder:text-slate-400 text-slate-700 resize-none"
                ></textarea>
              </div>

              <div class="md:col-span-2 lg:col-span-3">
                <label class="text-sm font-semibold text-slate-700 flex items-center gap-1 mb-2">
                  Tags
                </label>
                <div class="flex flex-wrap gap-2 mb-2">
                  <span
                    v-for="tag in formData.tags"
                    :key="tag"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold"
                  >
                    {{ tag }}
                    <button
                      type="button"
                      @click="removeTag(tag)"
                      class="hover:text-blue-900"
                    >
                      <i class="fas fa-times text-xs"></i>
                    </button>
                  </span>
                </div>
                <div class="flex gap-2">
                  <input
                    v-model="newTag"
                    @keyup.enter="addTag"
                    type="text"
                    placeholder="Add tag and press Enter"
                    class="flex-1 py-2.5 px-4 bg-white border border-slate-200 rounded-lg transition-all outline-none
                           focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50
                           placeholder:text-slate-400 text-slate-700"
                  />
                  <button
                    type="button"
                    @click="addTag"
                    class="px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <FormInput
                label="Referral Source"
                v-model="formData.referralSource"
                icon="fas fa-user-friends"
                placeholder="How did they find us?"
              />

              <FormInput
                label="Tax ID / VAT Number"
                v-model="formData.taxId"
                icon="fas fa-receipt"
                placeholder="Enter tax identification number"
              />

              <FormInput
                label="Registration Number"
                v-model="formData.registrationNumber"
                icon="fas fa-certificate"
                placeholder="Commercial registration number"
              />

              <!-- Section: Emergency Contact -->
              <div
                class="md:col-span-2 lg:col-span-3 pb-4 border-b border-slate-100 mb-2 mt-4 flex items-center gap-2"
              >
                <i class="fas fa-phone-alt text-blue-500 text-lg"></i>
                <h3 class="text-lg font-bold text-slate-800">Emergency Contact</h3>
              </div>

              <FormInput
                label="Emergency Contact Name"
                v-model="formData.emergencyContact.name"
                icon="fas fa-user"
                placeholder="Full name"
              />

              <FormInput
                label="Emergency Contact Phone"
                v-model="formData.emergencyContact.phone"
                icon="fas fa-phone"
                placeholder="05XXXXXXXX"
              />

              <FormInput
                label="Emergency Contact Relationship"
                v-model="formData.emergencyContact.relationship"
                icon="fas fa-users"
                placeholder="e.g., Spouse, Parent, Sibling"
              />
            </div>
          </div>

          <!-- Collapsible Address Section -->
          <div
            class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
          >
            <button
              type="button"
              @click="isAddressOpen = !isAddressOpen"
              class="w-full px-8 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div class="flex items-center gap-3">
                <i class="fas fa-globe text-blue-500 text-lg"></i>
                <span class="text-lg font-bold text-slate-800">National Address</span>
              </div>
              <i
                :class="[
                  'text-slate-400',
                  isAddressOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
                ]"
              ></i>
            </button>

            <div
              :class="[
                'px-8 transition-all duration-500 overflow-hidden',
                isAddressOpen ? 'max-h-[500px] pb-8' : 'max-h-0'
              ]"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
                <FormInput
                  label="Building Number"
                  v-model="formData.nationalAddress.buildingNumber"
                  icon="fas fa-building"
                />

                <FormInput
                  label="Street"
                  v-model="formData.nationalAddress.street"
                  icon="fas fa-road"
                />

                <FormInput
                  label="District"
                  v-model="formData.nationalAddress.district"
                  icon="fas fa-map-marker-alt"
                />

                <FormInput
                  label="City"
                  v-model="formData.nationalAddress.city"
                  icon="fas fa-city"
                />

                <FormInput
                  label="Postal Code"
                  v-model="formData.nationalAddress.postalCode"
                  icon="fas fa-mail-bulk"
                />

                <FormInput
                  label="Additional Number"
                  v-model="formData.nationalAddress.additionalNumber"
                  icon="fas fa-hashtag"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>

    <!-- Success Toast -->
    <transition name="fade">
      <div
        v-if="showSuccess"
        class="fixed bottom-10 right-1/2 translate-x-1/2 z-50 animate-bounce"
      >
        <div
          class="bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border-2 border-green-400"
        >
          <i class="fas fa-check-circle fa-lg"></i>
          <div class="flex flex-col">
            <span class="font-bold">Success!</span>
            <span class="text-sm opacity-90">Customer data has been saved in the system</span>
          </div>
        </div>
      </div>
    </transition>

    <!-- Loading Overlay -->
    <transition name="fade">
      <div
        v-if="isTranslating"
        class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center"
      >
        <div class="bg-white p-6 rounded-2xl flex flex-col items-center gap-4 shadow-xl">
          <div
            class="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"
          ></div>
          <p class="font-bold text-slate-700">Processing with AI...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nameAr: '',
        nameEn: '',
        type: 'شخصي',
        idType: '',
        idNumber: '',
        idExpiryDate: '',
        nationality: '',
        dob: '',
        email: '',
        phone: '',
        mobile: '',
        jobTitle: '',
        workPlace: '',
        customerAccount: '',
        autoCreateAccount: false,
        website: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',
        whatsapp: '',
        preferredLanguage: '',
        preferredContact: '',
        communicationTime: '',
        customerSegment: '',
        creditLimit: '',
        discountPercentage: '',
        notes: '',
        tags: [],
        referralSource: '',
        taxId: '',
        registrationNumber: '',
        emergencyContact: {
          name: '',
          phone: '',
          relationship: ''
        },
        nationalAddress: {
          buildingNumber: '',
          street: '',
          district: '',
          city: '',
          postalCode: '',
          additionalNumber: '',
        },
      },
      newTag: '',
      isAddressOpen: false,
      isTranslating: false,
      showSuccess: false,
      errors: {},
    };
  },
  watch: {
    'formData.idNumber': function() {
      this.autoFillFields();
    }
  },
  methods: {
    resetForm() {
      this.formData = {
        nameAr: '',
        nameEn: '',
        type: 'شخصي',
        idType: '',
        idNumber: '',
        idExpiryDate: '',
        nationality: '',
        dob: '',
        email: '',
        phone: '',
        mobile: '',
        jobTitle: '',
        workPlace: '',
        customerAccount: '',
        autoCreateAccount: false,
        website: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        instagram: '',
        whatsapp: '',
        preferredLanguage: '',
        preferredContact: '',
        communicationTime: '',
        customerSegment: '',
        creditLimit: '',
        discountPercentage: '',
        notes: '',
        tags: [],
        referralSource: '',
        taxId: '',
        registrationNumber: '',
        emergencyContact: {
          name: '',
          phone: '',
          relationship: ''
        },
        nationalAddress: {
          buildingNumber: '',
          street: '',
          district: '',
          city: '',
          postalCode: '',
          additionalNumber: '',
        },
      };
      this.errors = {};
      this.newTag = '';
      this.newTag = '';
    },
    addTag() {
      if (this.newTag && !this.formData.tags.includes(this.newTag)) {
        this.formData.tags.push(this.newTag.trim());
        this.newTag = '';
      }
    },
    removeTag(tag) {
      this.formData.tags = this.formData.tags.filter(t => t !== tag);
    },
    autoFillFields() {
      // Auto-fill nationality based on ID number patterns
      if (this.formData.idNumber) {
        const id = this.formData.idNumber.toString();
        if (id.startsWith('1') || id.startsWith('2')) {
          this.formData.nationality = 'saudi';
        } else if (id.startsWith('3')) {
          this.formData.nationality = 'egyptian';
        } else if (id.startsWith('4')) {
          this.formData.nationality = 'jordanian';
        }
      }
    },
    validateForm() {
      const errors = {};
      if (!this.formData.nameAr) errors.nameAr = 'Arabic name is required';
      if (!this.formData.nameEn) errors.nameEn = 'English name is required';
      if (!this.formData.mobile) errors.mobile = 'Mobile number is required';
      if (
        this.formData.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)
      ) {
        errors.email = 'Invalid email address';
      }
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    handleSubmit() {
      if (this.validateForm()) {
        this.showSuccess = true;
        setTimeout(() => (this.showSuccess = false), 3000);
        console.log('Saved Customer:', this.formData);
      }
    },
    async autoTranslate(source) {
      const text = source === 'ar' ? this.formData.nameAr : this.formData.nameEn;
      if (!text) return;
      this.isTranslating = true;

      try {
        const response = await fetch('https://libretranslate.com/translate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: source === 'ar' ? 'ar' : 'en',
            target: source === 'ar' ? 'en' : 'ar',
            format: 'text',
          }),
        });

        if (!response.ok) {
          throw new Error('Translation failed');
        }

        const data = await response.json();
        const translatedText = data.translatedText;

        if (source === 'ar') {
          this.formData.nameEn = translatedText;
        } else {
          this.formData.nameAr = translatedText;
        }
      } catch (error) {
        console.error('Translation error:', error);
        // Fallback to dummy translation
        const translatedText =
          source === 'ar'
            ? 'Translated to English: ' + text
            : 'تم الترجمة للعربية: ' + text;

        if (source === 'ar') {
          this.formData.nameEn = translatedText;
        } else {
          this.formData.nameAr = translatedText;
        }
      }

      this.isTranslating = false;
    },
  },
  components: {
    FormInput: {
      props: {
        label: String,
        modelValue: [String, Number],
        placeholder: String,
        type: { type: String, default: 'text' },
        required: Boolean,
        icon: String,
        error: String,
        actionIcon: String,
      },
      emits: ['update:modelValue', 'actionClick'],
      methods: {
        onInput(e) {
          this.$emit('update:modelValue', e.target.value);
        },
        onActionClick() {
          this.$emit('actionClick');
        },
      },
      template: `
      <div class="flex flex-col gap-1.5 w-full">
        <label class="text-sm font-semibold text-slate-700 flex items-center gap-1">
          {{ label }}
          <span v-if="required" class="text-red-500">*</span>
        </label>
        <div class="relative">
          <i
            v-if="icon"
            :class="[icon, 'absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400']"
            style="font-size: 18px"
          ></i>
          <input
            :type="type"
            :value="modelValue"
            @input="onInput"
            :placeholder="placeholder"
            :class="[
              'w-full py-2.5 px-4 bg-white border rounded-lg transition-all outline-none',
              icon ? 'pr-10' : 'pr-4',
              actionIcon ? 'pl-10' : 'pl-4',
              error ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50',
              'placeholder:text-slate-400 text-slate-700'
            ]"
          />
          <button
            v-if="actionIcon"
            type="button"
            @click="onActionClick"
            class="absolute inset-y-0 left-2 flex items-center px-2 text-blue-500 hover:text-blue-600 transition-colors"
            title="Action"
          >
            <i :class="actionIcon" style="font-size: 18px"></i>
          </button>
        </div>
        <span v-if="error" class="text-xs text-red-500 mt-0.5">{{ error }}</span>
      </div>
      `,
    },
    FormSelect: {
      props: {
        label: String,
        modelValue: String,
        options: Array,
        required: Boolean,
        error: String,
      },
      emits: ['update:modelValue'],
      methods: {
        onChange(e) {
          this.$emit('update:modelValue', e.target.value);
        },
      },
      template: `
      <div class="flex flex-col gap-1.5 w-full">
        <label class="text-sm font-semibold text-slate-700 flex items-center gap-1">
          {{ label }}
          <span v-if="required" class="text-red-500">*</span>
        </label>
        <select
          :value="modelValue"
          @change="onChange"
          class="w-full py-2.5 px-4 bg-white border rounded-lg transition-all outline-none appearance-none cursor-pointer
            text-slate-700
            border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50
            "
          style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%2364748b\\' stroke-width=\\'2\\'%3E%3Cpath stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' d=\\'M19 9l-7 7-7-7\\' /%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px;"
        >
          <option value="" disabled>Choose...</option>
          <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
        </select>
        <span v-if="error" class="text-xs text-red-500 mt-0.5">{{ error }}</span>
      </div>
      `,
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
