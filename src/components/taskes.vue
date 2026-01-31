<template>
  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8 ">
 
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
      <div>
        <h1 class="text-2xl font-semibold text-slate-800 mt-4">

        Task Management
        </h1>
        <p class="text-slate-500 mt-1">
          Manage and track all your project tasks efficiently
        </p>
      </div>

      <div class="flex items-center gap-8">
        <button
          @click="showFilters = !showFilters"
          class="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-700 rounded-xl
                 font-semibold shadow-sm border border-slate-200
                 hover:bg-slate-50 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          Filters
        </button>
        <button
          @click="showNewTaskModal = true"
          class="flex items-center gap-2 px-5 py-2.5 bg-[#193560] text-white rounded-xl hover:bg-[#193560] transition-all shadow-md shadow-blue-500/20 font-medium hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Task
        </button>
      </div>
    </div>

    <!-- Filter Bar -->
    <transition name="slide-down">
      <div v-if="showFilters" class="mb-6 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search tasks..."
              class="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <select
            v-model="statusFilter"
            class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
            <option value="">All Status</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="review">In Review</option>
            <option value="done">Completed</option>
          </select>
          <select
            v-model="priorityFilter"
            class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
          <select
            v-model="projectFilter"
            class="px-4 py-2.5 border border-slate-200 rounded-xl text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white">
            <option value="">All Projects</option>
            <option value="website">Website Redesign</option>
            <option value="mobile">Mobile App</option>
            <option value="backend">Backend Services</option>
          </select>
        </div>
      </div>
    </transition>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Total Tasks -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 11l3 3L22 4"></path>
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
            </svg>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">+12%</span>
        </div>
        <div class="text-3xl font-bold text-slate-900 mb-1">{{ filteredTasks.length }}</div>
        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Tasks</div>
      </div>

      <!-- In Progress -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">
            {{ tasks.filter(t => t.status === 'in-progress').length }}
          </span>
        </div>
        <div class="text-3xl font-bold text-slate-900 mb-1">{{ tasks.filter(t => t.status === 'in-progress').length }}</div>
        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">In Progress</div>
      </div>

      <!-- Pending Review -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600">
            {{ tasks.filter(t => t.status === 'review').length }}
          </span>
        </div>
        <div class="text-3xl font-bold text-slate-900 mb-1">{{ tasks.filter(t => t.status === 'review').length }}</div>
        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">In Review</div>
      </div>

      <!-- Urgent -->
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 animate-pulse">
            {{ tasks.filter(t => t.priority === 'urgent').length }}
          </span>
        </div>
        <div class="text-3xl font-bold text-slate-900 mb-1">{{ tasks.filter(t => t.priority === 'urgent').length }}</div>
        <div class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Urgent Items</div>
      </div>
    </div>

    <!-- Tasks Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <!-- To Do Column -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
            <h2 class="text-lg font-bold text-slate-900">To Do</h2>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {{ tasks.filter(t => t.status === 'todo').length }}
          </span>
        </div>
        <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          <div
            v-for="task in tasks.filter(t => t.status === 'todo')"
            :key="task.id"
            @click="selectTask(task)"
            class="p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer bg-white group"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{{ task.title }}</h3>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded-full font-semibold',
                  task.priority === 'urgent' ? 'bg-red-100 text-red-600' :
                  task.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                ]"
              >
                {{ task.priority }}
              </span>
            </div>
            <p class="text-sm text-slate-500 mb-3 line-clamp-2">{{ task.description }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#193560] to-[#1E4DB7] text-white text-xs font-bold flex items-center justify-center">
                  {{ task.assignee.charAt(0) }}
                </div>
                <span class="text-xs text-slate-600">{{ task.assignee }}</span>
              </div>
              <span class="text-xs text-slate-400">{{ task.dueDate }}</span>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600">{{ task.project }}</span>
              <span v-if="task.tags" class="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600">{{ task.tags }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress Column -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <h2 class="text-lg font-bold text-slate-900">In Progress</h2>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-600">
            {{ tasks.filter(t => t.status === 'in-progress').length }}
          </span>
        </div>
        <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          <div
            v-for="task in tasks.filter(t => t.status === 'in-progress')"
            :key="task.id"
            @click="selectTask(task)"
            class="p-4 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer bg-blue-50/30 group"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{{ task.title }}</h3>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded-full font-semibold',
                  task.priority === 'urgent' ? 'bg-red-100 text-red-600' :
                  task.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                ]"
              >
                {{ task.priority }}
              </span>
            </div>
            <p class="text-sm text-slate-500 mb-3 line-clamp-2">{{ task.description }}</p>
            <div class="mb-3">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs text-slate-600">Progress</span>
                <span class="text-xs font-semibold text-slate-700">{{ task.progress }}%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div
                  :class="[
                    'h-2 rounded-full transition-all',
                    task.progress > 75 ? 'bg-emerald-500' :
                    task.progress > 50 ? 'bg-blue-500' :
                    task.progress > 25 ? 'bg-yellow-500' :
                    'bg-red-500'
                  ]"
                  :style="{ width: task.progress + '%' }"
                ></div>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#193560] to-[#1E4DB7] text-white text-xs font-bold flex items-center justify-center">
                  {{ task.assignee.charAt(0) }}
                </div>
                <span class="text-xs text-slate-600">{{ task.assignee }}</span>
              </div>
              <span class="text-xs text-slate-400">{{ task.dueDate }}</span>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600">{{ task.project }}</span>
              <span v-if="task.tags" class="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-600">{{ task.tags }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Completed Column -->
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <h2 class="text-lg font-bold text-slate-900">Completed</h2>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-600">
            {{ tasks.filter(t => t.status === 'done').length }}
          </span>
        </div>
        <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
          <div
            v-for="task in tasks.filter(t => t.status === 'done')"
            :key="task.id"
            @click="selectTask(task)"
            class="p-4 rounded-xl border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer bg-emerald-50/30 group opacity-90"
          >
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-slate-700 line-through group-hover:text-emerald-600 transition-colors">{{ task.title }}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p class="text-sm text-slate-500 mb-3 line-clamp-2">{{ task.description }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#193560] to-[#1E4DB7] text-white text-xs font-bold flex items-center justify-center">
                  {{ task.assignee.charAt(0) }}
                </div>
                <span class="text-xs text-slate-600">{{ task.assignee }}</span>
              </div>
              <span class="text-xs text-slate-400">{{ task.completedDate }}</span>
            </div>
            <div class="mt-3 flex items-center gap-2">
              <span class="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600">{{ task.project }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Detail Modal -->
    <transition name="fade">
      <div
        v-if="selectedTask"
        @click.self="selectedTask = null"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-6 border-b border-slate-200 flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">{{ selectedTask.title }}</h3>
            <button
              @click="selectedTask = null"
              class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="p-6 space-y-4">
            <div>
              <label class="text-xs font-semibold text-slate-500 uppercase mb-2 block">Description</label>
              <p class="text-slate-700">{{ selectedTask.description }}</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-2 block">Priority</label>
                <span
                  :class="[
                    'inline-block px-3 py-1 rounded-full text-xs font-semibold',
                    selectedTask.priority === 'urgent' ? 'bg-red-100 text-red-600' :
                    selectedTask.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                    selectedTask.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-blue-100 text-blue-600'
                  ]"
                >
                  {{ selectedTask.priority }}
                </span>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-2 block">Status</label>
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                  {{ selectedTask.status }}
                </span>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-2 block">Assignee</label>
                <p class="text-slate-700">{{ selectedTask.assignee }}</p>
              </div>
              <div>
                <label class="text-xs font-semibold text-slate-500 uppercase mb-2 block">Due Date</label>
                <p class="text-slate-700">{{ selectedTask.dueDate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';

const showFilters = ref(false);
const showNewTaskModal = ref(false);
const searchQuery = ref('');
const statusFilter = ref('');
const priorityFilter = ref('');
const projectFilter = ref('');
const selectedTask = ref(null);

const tasks = ref([
  {
    id: 1,
    title: 'Review homepage design',
    description: 'Review the new homepage design mockups and provide feedback on UX improvements',
    status: 'todo',
    priority: 'high',
    assignee: 'Ahmed Khaled',
    project: 'Company Website',
    dueDate: 'Jan 15, 2026',
    tags: 'Design',
    progress: 0
  },
  {
    id: 2,
    title: 'Meeting with dev team',
    description: 'Discuss sprint planning and technical architecture for the new feature',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Hana Ahmed',
    project: 'E-commerce App',
    dueDate: 'Feb 1, 2026',
    tags: 'Development',
    progress: 65
  },
  {
    id: 3,
    title: 'Setup development environment',
    description: 'Configure local development environment with Docker and required dependencies',
    status: 'done',
    priority: 'low',
    assignee: 'Rami Hossam',
    project: 'E-learning Platform',
    dueDate: 'Jan 10, 2026',
    completedDate: 'Jan 8, 2026',
    tags: 'DevOps',
    progress: 100
  },
  {
    id: 4,
    title: 'Design database schema',
    description: 'Create ERD and design database schema for user management module',
    status: 'done',
    priority: 'medium',
    assignee: 'Sara Fouad',
    project: 'Inventory Management',
    dueDate: 'Jan 12, 2026',
    completedDate: 'Jan 11, 2026',
    tags: 'Database',
    progress: 100
  },
  {
    id: 5,
    title: 'API integration testing',
    description: 'Write and execute integration tests for payment gateway API',
    status: 'in-progress',
    priority: 'urgent',
    assignee: 'Youssef Khaled',
    project: 'Backend Services',
    dueDate: 'Jan 20, 2026',
    tags: 'Testing',
    progress: 45
  },
  {
    id: 6,
    title: 'User authentication flow',
    description: 'Implement OAuth2 authentication flow with social media providers',
    status: 'todo',
    priority: 'high',
    assignee: 'Noor Karim',
    project: 'Mobile App',
    dueDate: 'Feb 5, 2026',
    tags: 'Security',
    progress: 0
  }
]);

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    const matchesSearch = !searchQuery.value || 
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = !statusFilter.value || task.status === statusFilter.value;
    const matchesPriority = !priorityFilter.value || task.priority === priorityFilter.value;
    const matchesProject = !projectFilter.value || task.project.toLowerCase().includes(projectFilter.value.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesPriority && matchesProject;
  });
});

function selectTask(task) {
  selectedTask.value = task;
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
