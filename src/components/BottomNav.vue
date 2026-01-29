<template>
  <!-- <div
    :class="[
      'fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
      activeId ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
    ]"
  > -->
    <!-- <div class="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem]"> -->
      <!-- زر الرجوع للشبكة الرئيسية -->
      <!-- <button
        @click="setActiveId(null)"
        class="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl"
      >
            <i class="bi bi-grid text-white"></i>

      </button> -->

      <!-- فاصل أنيق -->
      <!-- <div class="w-[1px] h-8 bg-slate-300 mx-1" /> -->

      <!-- أيقونات الكروت الأربعة -->
      <!-- <div class="flex items-center gap-3">
        <button
          v-for="card in navigationCards"
          :key="card.id"
          @click="setActiveId(card.id)"
          :class="[
            'group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500',
            activeId === card.id ? 'bg-sidebar-accent text-white shadow-xl scale-110' : 'bg-white text-slate-400 hover:bg-indigo-50 hover:text-sidebar-accent shadow-sm'
          ]"
        > -->
          <i :class="`fa-solid ${card.icon}`"></i>

          <!-- Badge الإجمالي الصغير -->
          <!-- <div
            :class="[
              'absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black border-2 border-white transition-all',
              activeId === card.id ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-white'
            ]"
          >
            {{ card.total }}
          </div> -->

          <!-- تلميح (Tooltip) يظهر عند الـ Hover -->
          <!-- <div class="absolute bottom-full mb-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 whitespace-nowrap shadow-2xl pointer-events-none">
            {{ card.title }}
          </div>
        </button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
// import { ref, computed } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
// import { cards } from '../data/cards.js'

// const router = useRouter()
// const route = useRoute()

// const activeId = computed(() => {
//   const id = route.params && route.params.id
//   return id ? parseInt(id) : null
// })

// const navigationCards = computed(() => cards.slice(0, 4)) // First 4 cards for navigation

// const setActiveId = (id) => {
//   if (id === null) {
//     router.push({ name: 'home' })
//   } else {
//     router.push({ name: 'card-detail', params: { id } })
//   }
// }
</script>
