<!-- <template>
<div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div class="max-w-4xl w-full bg-white rounded-3xl shadow-2xl flex overflow-hidden min-h-[550px]">
    
    <div class="w-1/2 bg-[#1e293b] p-12 flex flex-col justify-between text-white relative">
      <div>
        <h2 class="text-2xl font-bold tracking-tight mb-2">Enterprise Resource Portal</h2>
        <p class="text-slate-400 text-sm">Manage your workflow with precision.</p>
      </div>

      <div class="flex justify-center items-center">
        <div class="relative">
          <svg class="w-32 h-32 text-blue-500 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
          </svg>
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-lg animate-pulse opacity-50"></div>
          <div class="absolute -bottom-2 -left-6 w-12 h-1 bg-slate-500 rounded-full opacity-30"></div>
        </div>
      </div>

      <div class="text-xs text-slate-500 border-t border-slate-700 pt-4">
        <span class="flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          System Status: Online
        </span>
      </div>
    </div>

    <div class="w-1/2 p-12 flex flex-col justify-center">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Client Login</h1>
      </div>

      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input type="text" placeholder="Enter your username" 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200">
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <input type="password" placeholder="••••••••" 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200">
        </div>

        <div class="flex items-center">
          <input type="checkbox" id="remember" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
          <label for="remember" class="ml-2 block text-sm text-gray-600">Remember me</label>
        </div>

        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg shadow-blue-200">
          Log In
        </button>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-200"></div></div>
          <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-400">Or Sign In With</span></div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <button type="button" class="flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <span class="text-xs font-medium text-gray-600">Azure AD</span>
          </button>
          <button type="button" class="flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
            <span class="text-xs font-medium text-gray-600">Okta</span>
          </button>
        </div>
      </form>

      <div class="mt-8 flex justify-center space-x-4 text-xs text-gray-400">
        <a href="#" class="hover:text-gray-600">Terms of Service</a>
        <a href="#" class="hover:text-gray-600">Privacy Policy</a>
        <a href="#" class="hover:text-gray-600">Contact Admin</a>
      </div>
    </div>

  </div>
</div>


</template>

<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BrandingPanel from './BrandingPanel.vue'

const router = useRouter()
const route = useRoute()

const form = reactive({ email: '', password: '', remember: false, captcha: false })
const errors = reactive({ email: '', password: '', captcha: '', auth: '' })

const DEMO_EMAIL = 'demo@websoft.sa'
const DEMO_PASSWORD = 'demo123'

function validate() {
  errors.email = ''
  errors.password = ''
  errors.captcha = ''
  errors.auth = ''
  let ok = true
  if (!form.email) { errors.email = 'Email is required'; ok = false }
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) { errors.email = 'Invalid email'; ok = false }
  if (!form.password) { errors.password = 'Password is required'; ok = false }
  if (!form.captcha) { errors.captcha = "Please confirm you're not a robot"; ok = false }
  return ok
}

async function onSubmit() {
  if (!validate()) return

  // simple static auth check for demo
  if (form.email === DEMO_EMAIL && form.password === DEMO_PASSWORD) {
    localStorage.setItem('auth', 'true')
    // redirect to original target if present
    const redirect = route.query.redirect || { name: 'home' }
    await router.push(redirect).catch(()=>{})
    return
  }

  errors.auth = 'Invalid email or password.'
}
</script>

<style scoped>
.clipped-panel {
  /* polygon creates the cut/corner shape on the right side */
  clip-path: polygon(0% 0%, 82% 0%, 100% 50%, 82% 100%, 0% 100%);
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  overflow: hidden;
  /* gradient close to the attached design */
background: linear-gradient(135deg, #124477 0%, #5984C6 50%, #F37D21 100%);


}

@media (max-width: 1024px) {
  .clipped-panel {
    clip-path: none;
    border-radius: 20px;
  }
}
</style> -->
<template>
  
</template>