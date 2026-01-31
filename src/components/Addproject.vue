
<template>


  <main class="flex-1 transition-all duration-300 ease-in-out ">
        <div class="p-8 ">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-6 ">
      <div>
    <h1 class="text-2xl font-semibold text-slate-800 mt-2">Create new project </h1>
    <p class="text-slate-500 mt-1">Fill in the details below to add a new project to your workspace</p>
  </div>
          </div>

      <!-- Main card -->
      <div class="mx-auto max-w-7xl px-4  mt-12 ml-8">
      <main class="grid gap-16 lg:grid-cols-[minmax(0,3.5fr)_minmax(0,2fr)]">
        <!-- Left column: core form -->
        <section class="space-y-6">
          <!-- General information -->
          <div
            ref="basicInfoRef"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-[#131313]"
                >
                  Basic information
                </h2>
                <p class="mt-1 text-xs text-[#131313]">
                  High‑level overview of the project.
                </p>
              </div>
              <span class="text-xs font-medium text-slate-400">Step 1 / 3</span>
            </div>

            <div class="space-y-5">
              <div class="space-y-2">
                <label
                  class="flex items-center gap-1 text-xs font-semibold text-slate-600"
                >
                  Project name
                  <span class="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Website redesign for ACME Corp"
                  class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                />
              </div>

              <div class="space-y-2">
                <label class="text-xs font-semibold text-slate-600">
                  Project description &amp; scope
                </label>
                <textarea
                  rows="4"
                  placeholder="Short summary of goals, deliverables and business impact..."
                  class="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Team & relations -->
          <div
            ref="teamRelationsRef"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-[#131313]"
                >
                  Team &amp; relations
                </h2>
                <p class="mt-1 text-xs text-[#131313]">
                  Who owns this project and who is involved.
                </p>
              </div>
              <span class="text-xs font-medium text-slate-400">Step 2 / 3</span>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              <!-- PM card -->
              <div class="space-y-3">
                <label
                  class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                >
                  Project manager
                </label>

                <div
                  class="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3.5"
                >
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-[#193560] text-sm font-semibold text-white"
                  >
                    AK
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="truncate text-sm font-semibold text-slate-900">
                      Ahmed Khaled
                    </p>
                    <p
                      class="truncate text-[11px] font-medium text-slate-500"
                    >
                      Senior portfolio lead
                    </p>
                  </div>
                  <button
                    type="button"
                    class="text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF]"
                  >
                    Reassign
                  </button>
                </div>
              </div>

              <!-- Stakeholders -->
              <div class="space-y-3">
                <label
                  class="text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                >
                  Stakeholder access
                </label>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-[#E0ECFF] px-3 py-1 text-[11px] font-semibold text-[#1D4ED8]"
                  >
                    Eng. team
                  </span>
                  <span
                    class="inline-flex items-center gap-1.5 rounded-full bg-[#E0ECFF] px-3 py-1 text-[11px] font-semibold text-[#1D4ED8]"
                  >
                    Design ops
                  </span>
                  <button
                    type="button"
                    class="inline-flex items-center rounded-full border border-dashed border-slate-300 px-3 py-1 text-[11px] font-semibold text-slate-400 hover:bg-slate-50"
                  >
                    + Add group
                  </button>
                </div>
              </div>
            </div>

            <!-- External / internal relations -->
            <div class="mt-6 grid gap-6 md:grid-cols-2">
              <div class="space-y-4">
                <div class="flex items-center justify-between gap-2">
                  <h3
                    class="text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Engagement context
                  </h3>
                  <span class="text-[11px] text-slate-400">
                    {{
                      engagementContext === "INTERNAL"
                        ? "Internal initiative"
                        : "External client"
                    }}
                  </span>
                </div>

                <div
                  class="relative flex rounded-full bg-slate-100 p-1 text-[11px] font-semibold"
                >
                  <div
                    class="absolute inset-y-1 w-1/2 rounded-full bg-white shadow-sm transition-transform duration-200"
                    :class="
                      engagementContext === 'INTERNAL'
                        ? 'translate-x-0'
                        : 'translate-x-full'
                    "
                  ></div>
                  <button
                    type="button"
                    class="relative z-10 flex-1 rounded-full px-3 py-1.5 transition-colors"
                    :class="
                      engagementContext === 'INTERNAL'
                        ? 'text-slate-900'
                        : 'text-slate-400'
                    "
                    @click="engagementContext = 'INTERNAL'"
                  >
                    Internal
                  </button>
                  <button
                    type="button"
                    class="relative z-10 flex-1 rounded-full px-3 py-1.5 transition-colors"
                    :class="
                      engagementContext === 'EXTERNAL'
                        ? 'text-slate-900'
                        : 'text-slate-400'
                    "
                    @click="engagementContext = 'EXTERNAL'"
                  >
                    External
                  </button>
                </div>
              </div>

              <div class="space-y-4">
                <!-- External -->
                <div v-if="engagementContext === 'EXTERNAL'" class="space-y-3">
                  <div class="space-y-2">
                    <label class="text-[11px] font-semibold text-slate-600">
                      Corporate entity
                    </label>
                    <select
                      v-model="corporateEntity"
                      class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    >
                      <option value="">Choose existing client</option>
                      <option value="1">	Elevate Systems</option>
                      <option value="2">	Smart Tech</option>
                      <option value="3">	PrimeTech</option>
                    </select>
                  </div>

                  <div class="space-y-2">
                    <label class="text-[11px] font-semibold text-slate-600">
                      Administrative contact
                    </label>
                    <input
                      v-model="adminEmail"
                      type="email"
                      placeholder="primary@entity.com"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 outline-none ring-0 transition focus:bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    />
                  </div>
                </div>

                <!-- Internal -->
                <div v-else class="space-y-3">
                  <div class="space-y-2">
                    <label class="text-[11px] font-semibold text-slate-600">
                      Internal sponsor
                    </label>
                    <input
                      v-model="internalSponsor"
                      type="text"
                      placeholder="Stakeholder / executive name"
                      class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="text-[11px] font-semibold text-slate-600">
                      Target unit
                    </label>
                    <input
                      v-model="targetUnit"
                      type="text"
                      placeholder="Internal division / department"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 outline-none ring-0 transition focus:bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline & execution -->
          <div
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-[#131313]"
                >
                  Timeline &amp; execution
                </h2>
                <p class="mt-1 text-xs text-[#131313]">
                  When the work happens and how critical it is.
                </p>
              </div>
              <span class="text-xs font-medium text-slate-400">Step 3 / 3</span>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              <!-- Workflow -->
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Master workflow status
                  </label>
                  <select
                    class="w-full rounded-xl border border-slate-200  px-3.5 py-2.5 text-xs font-semibold text-[#193560] outline-none ring-0 transition focus:border-[#193560] focus:ring-2 focus:ring-slate-900/40"
                  >
                    <option>ST_01 · Planned</option>
                    <option>ST_02 · In progress</option>
                    <option>ST_03 · On hold</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Business criticality
                  </label>
                  <div
                    class="grid grid-cols-2 gap-2 text-[11px] font-semibold"
                  >
                    <button
                      type="button"
                      class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-500 hover:border-slate-300"
                    >
                      Standard
                    </button>
                    <button
                      type="button"
                      class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-500 hover:border-slate-300"
                    >
                      Medium
                    </button>
                    <button
                      type="button"
                      class="rounded-xl border border-indigo-200 bg-[#E0ECFF] px-3 py-2 text-[#1D4ED8] shadow-sm"
                    >
                      Elevated
                    </button>
                    <button
                      type="button"
                      class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-500 hover:border-slate-300"
                    >
                      Critical
                    </button>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Complexity index
                  </label>
                  <div
                    class="flex gap-1 rounded-full bg-slate-100 p-1 text-[11px] font-semibold"
                  >
                    <button
                      type="button"
                      class="flex-1 rounded-full px-2.5 py-1 text-slate-500 hover:text-slate-700"
                    >
                      Low
                    </button>
                    <button
                      type="button"
                      class="flex-1 rounded-full px-2.5 py-1 text-slate-500 hover:text-slate-700"
                    >
                      Mid
                    </button>
                    <button
                      type="button"
                      class="flex-1 rounded-full px-2.5 py-1 text-slate-500 hover:text-slate-700"
                    >
                      High
                    </button>
                    <button
                      type="button"
                      class="flex-1 rounded-full px-2.5 py-1 text-slate-500 hover:text-slate-700"
                    >
                      Elite
                    </button>
                  </div>
                </div>
              </div>

              <!-- Dates -->
              <div class="space-y-4">
                <div class="space-y-2">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Commencement
                  </label>
                  <div class="relative">
                    <input
                      type="date"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none ring-0 transition focus:bg-white focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Termination
                  </label>
                  <div class="relative">
                    <input
                      type="date"
                      class="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-800 outline-none ring-0 transition focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between pt-1">
                  <span
                    class="text-[11px] font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Estimated duration
                  </span>
                  <span
                    class="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    45 days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Right column: financials & privacy -->
        <aside class="space-y-6">
          <!-- Financials -->
          <div
            ref="financialFrameworkRef"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 "
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-[#131313]"
                >
                  Financial framework
                </h2>
                <p class="mt-1 text-xs text-[#131313]">
                  Capture the basic budget and billing model.
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="grid gap-4 sm:grid-cols-[1.2fr_minmax(0,1fr)]">
                <div class="space-y-1.5">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Primary budget
                  </label>
                  <div class="relative">
                    <span
                      class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs font-semibold text-slate-400"
                    >
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="0,000"
                      class="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-7 pr-3 text-sm font-semibold text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-[11px] font-semibold text-slate-600">
                    Currency
                  </label>
                  <select
                    class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-800 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="SAR">SAR (﷼)</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-[11px] font-semibold text-slate-600">
                  Billing model
                </label>
                <div
                  class="flex gap-1 rounded-full bg-slate-100 p-1 text-[11px] font-semibold"
                >
                  <button
                    type="button"
                    class="flex-1 rounded-full bg-white px-3 py-1.5 text-[#1D4ED8] shadow-sm"
                  >
                    Fixed
                  </button>
                  <button
                    type="button"
                    class="flex-1 rounded-full px-3 py-1.5 text-slate-500 hover:text-slate-700"
                  >
                    Hourly
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy & attachments -->
          <div
            ref="privacyDocumentationRef"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 w-full "
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-[#131313]"
                >
                  Privacy &amp; documentation
                </h2>
                <p class="mt-1 text-xs text-[#131313]">
                  Who can see this project and attach supporting files.
                </p>
              </div>
            </div>

            <div class="space-y-5">
              <div class="space-y-2">
                <label class="text-[11px] font-semibold text-slate-600">
                  Visibility
                </label>
                <div class="flex gap-2 rounded-2xl bg-slate-100 p-1">
                  <button
                    type="button"
                    class="flex-1 rounded-xl bg-white px-3 py-2 text-[11px] font-semibold text-[#1D4ED8] shadow-sm"
                  >
                    Organization
                  </button>
                  <button
                    type="button"
                    class="flex-1 rounded-xl px-3 py-2 text-[11px] font-semibold text-slate-500 hover:bg-white/60"
                  >
                    Team only
                  </button>
                </div>
              </div>

              <div class="space-y-3 border-t border-slate-100 pt-4">
                <label class="text-[11px] font-semibold text-slate-600">
                  Strategic documentation
                </label>
                <button
                  type="button"
                  class="flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center text-xs text-slate-500 transition hover:border-slate-400 hover:bg-slate-50/80"
                >
                  <span
                    class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#afacac" stroke-linecap="square" stroke-width="2" d="m20.506 12.313l-7.778 7.778a6 6 0 0 1-8.485-8.485l7.778-7.778a4 4 0 1 1 5.657 5.657L9.9 17.263a2 2 0 1 1-2.829-2.829l7.071-7.07"/></svg>
                  </span>
                  <span class="text-[11px] font-semibold text-slate-600">
                    Attach project charter
                  </span>
                  <span class="text-[10px] text-slate-400">
                    PDF, XLSX, DOCX — up to 25 MB
                  </span>
                </button>
              </div>
            </div>
          </div>

      

          <!-- Milestones & Deliverables -->
          

          <!-- Risk & Dependencies -->
          <!-- <div
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div class="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2
                  class="text-sm font-semibold uppercase tracking-wide text-slate-500"
                >
                  Risk Assessment & Dependencies
                </h2>
                <p class="mt-1 text-xs text-slate-400">
                  Identify potential risks and project dependencies.
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="space-y-2">
                <label class="text-[11px] font-semibold text-slate-600">
                  Risk Level
                </label>
                <div
                  class="flex gap-1 rounded-full bg-slate-100 p-1 text-[11px] font-semibold"
                >
                  <button
                    type="button"
                    @click="riskLevel = 'low'"
                    :class="[
                      'flex-1 rounded-full px-2.5 py-1.5 transition-colors',
                      riskLevel === 'low' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    ]"
                  >
                    Low
                  </button>
                  <button
                    type="button"
                    @click="riskLevel = 'medium'"
                    :class="[
                      'flex-1 rounded-full px-2.5 py-1.5 transition-colors',
                      riskLevel === 'medium' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    ]"
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    @click="riskLevel = 'high'"
                    :class="[
                      'flex-1 rounded-full px-2.5 py-1.5 transition-colors',
                      riskLevel === 'high' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    ]"
                  >
                    High
                  </button>
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[11px] font-semibold text-slate-600">
                  Identified Risks
                </label>
                <textarea
                  v-model="identifiedRisks"
                  rows="3"
                  placeholder="List potential risks and mitigation strategies..."
                  class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 resize-none"
                ></textarea>
              </div>

              <div class="space-y-2">
                <label class="text-[11px] font-semibold text-slate-600">
                  Dependencies
                </label>
                <textarea
                  v-model="dependencies"
                  rows="3"
                  placeholder="List external dependencies, third-party services, or other projects this depends on..."
                  class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-900 outline-none ring-0 transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/5 resize-none"
                ></textarea>
              </div>
            </div> -->
           
      
        </aside>
      </main>

      <!-- Actions -->
      <footer
        class="flex flex-col justify-between gap-3 border-t border-slate-200 pt-4 text-sm sm:flex-row sm:items-center mt-8"
      >
        <p class="text-xs text-[#131313]">
          You can edit all of these details later from the project page.
        </p>
        <div class="flex justify-end gap-3">
          <button
            type="button"
            class="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700"
            @click="router.push('/projects')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="rounded-lg bg-[#193560] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#102244]"
            @click="handleCreate"
          >
            Create project
          </button>
        </div>
      </footer>
    </div>
  </div>

    </main>


</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRouter, RouterLink } from "vue-router";
import {
  Upload,
  Users,
  Calendar,
  FolderKanban,
  ArrowRight,
  Sparkles,
} from "lucide-vue-next";

const router = useRouter();

const step = ref(1);
const selectedMembers = ref<string[]>([]);
const engagementContext = ref("INTERNAL");

const basicInfoRef = ref();
const teamRelationsRef = ref();
const financialFrameworkRef = ref();
const privacyDocumentationRef = ref();

const corporateEntity = ref("");
const adminEmail = ref("");

const internalSponsor = ref("");
const targetUnit = ref("");
const projectCategory = ref("");
const projectTags = ref<string[]>([]);
const newProjectTag = ref("");
const riskLevel = ref("medium");
const identifiedRisks = ref("");
const dependencies = ref("");
const milestones = ref([
  { name: "", description: "", dueDate: "", deliverable: "" }
]);



function toggleMember(id: string) {
  selectedMembers.value.includes(id)
    ? (selectedMembers.value = selectedMembers.value.filter(m => m !== id))
    : selectedMembers.value.push(id);
}

function addProjectTag() {
  if (newProjectTag.value && !projectTags.value.includes(newProjectTag.value)) {
    projectTags.value.push(newProjectTag.value.trim());
    newProjectTag.value = "";
  }
}

function removeProjectTag(tag: string) {
  projectTags.value = projectTags.value.filter(t => t !== tag);
}



function handleCreate() {
  router.push("/projects");
}

onMounted(() => {
  nextTick(() => {
    if (basicInfoRef.value && financialFrameworkRef.value) {
      financialFrameworkRef.value.style.minHeight = `${basicInfoRef.value.offsetHeight}px`;
    }
    if (teamRelationsRef.value && privacyDocumentationRef.value) {
      privacyDocumentationRef.value.style.minHeight = `${teamRelationsRef.value.offsetHeight}px`;
    }
  });
});
</script>
