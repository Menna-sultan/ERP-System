<template>
  <div class="relative w-full flex flex-col items-center text-center space-y-12 animate-in slide-in-from-right duration-700">
    <!-- Decorative backgrounds -->
         <div class="absolute bottom-[-10%] left-[10%] w-[300px] h-[300px] bg-indigo-900/40 rounded-full blur-[80px] pointer-events-none"></div>

    <div class="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

    <!-- Header -->
<div class="max-w-md relative z-10 flex flex-col items-center text-center">
  <h2 class="text-3xl lg:text-7xl font-black mb-4 leading-tight tracking-tighter drop-shadow-md whitespace-nowrap">
    .Welcome Back
  </h2>

  <p class="text-indigo-50/70 text-sm lg:text-base leading-relaxed font-medium px-8">
 .When efficiency and innovation collide, all visions materialize!
  </p>
</div>


    <!-- Illustration -->
    <!-- <div class="relative z-10 w-full max-w-[460px] drop-shadow-[0_35px_70px_rgba(0,0,0,0.4)] transition-transform hover:scale-[1.02] duration-500"> -->
      <!-- <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <rect x="20" y="20" width="460" height="360" rx="40" fill="white" fill-opacity="0.08" stroke="white" stroke-width="2" stroke-opacity="0.2" />

        <rect x="60" y="60" width="380" height="24" rx="12" fill="white" fill-opacity="0.1" />
        <circle cx="85" cy="72" r="5" fill="#f43f5e" />
        <circle cx="105" cy="72" r="5" fill="#fbbf24" />
        <circle cx="125" cy="72" r="5" fill="#10b981" />

        <rect x="60" y="110" width="220" height="140" rx="28" fill="white" fill-opacity="0.98" />
        <text x="85" y="145" class="fill-slate-400" style="font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.16em;">Global Analytics</text>
        <path d="M85 210 Q 120 160, 160 200 T 235 155" stroke="#6366f1" stroke-width="7" fill="none" stroke-linecap="round" />
        <circle cx="235" cy="155" r="7" fill="#6366f1" stroke="white" stroke-width="2" />

        <rect x="300" y="110" width="140" height="60" rx="20" fill="#fbbf24" />
        <rect x="320" y="135" width="100" height="10" rx="5" fill="white" fill-opacity="0.4" />

        <rect x="300" y="190" width="140" height="60" rx="20" fill="white" fill-opacity="0.1" stroke="white" stroke-width="1" stroke-opacity="0.3" />
        <rect x="320" y="215" width="80" height="10" rx="5" fill="white" fill-opacity="0.5" />

        <rect x="60" y="270" width="380" height="80" rx="24" fill="white" fill-opacity="0.05" stroke="white" stroke-width="1.5" stroke-opacity="0.2" />
        <rect x="90" y="300" width="150" height="8" rx="4" fill="white" fill-opacity="0.2" />
        <rect x="90" y="320" width="100" height="8" rx="4" fill="white" fill-opacity="0.1" />
        <rect x="340" y="295" width="70" height="30" rx="10" fill="#10b981" fill-opacity="0.8" />

        <circle cx="470" cy="80" r="35" fill="#6366f1" class="animate-pulse" />
        <path d="M460 80 L 480 80 M 470 70 L 470 90" stroke="white" stroke-width="4" stroke-linecap="round" />
      </svg> -->


    <!-- Feature Pills -->
    <div class="relative z-10 flex flex-wrap justify-center gap-4">
      <span v-for="tag in tags" :key="tag" class="px-6 py-3 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-xl">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>
