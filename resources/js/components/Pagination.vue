<template>
  <nav
    class="bg-white px-4 py-2 flex items-center justify-between border border-x-black border-b-black sm:px-6"
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-xs text-gray-700">
        Menampilkan
        <span class="font-medium">{{ from ?? 0 }}</span>
        sampai
        <span class="font-medium">{{ to ?? 0 }}</span>
        dari
        <span class="font-medium">{{ total }}</span>
        hasil
      </p>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        class="relative inline-flex items-center px-4 py-1 border border-black text-xs font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInFirstPage }"
      >
        <ChevronDoubleLeftIcon class="mr-2 text-center h-4 w-4" aria-hidden="false" />
        Sebelumnya
      </button>
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        class="ml-3 relative inline-flex items-center px-4 py-1 border border-black text-xs font-medium rounded-md text-gray-400 bg-white hover:bg-gray-400 hover:text-white"
        :class="{ 'cursor-not-allowed': isInLastPage }"
      >
        Selanjutnya
        <ChevronDoubleRightIcon class="ml-2 text-center h-4 w-4" aria-hidden="false" />
      </button>
    </div>
  </nav>
</template>
<script setup>
import { computed, defineProps, defineEmits } from "vue";

import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  maxVisibleButtons: Number,
  totalPages: Number,
  from: Number,
  to: Number,
  total: Number,
  perPage: Number,
  currentPage: Number,
  nextPage: String,
  prevPage: String,
});

const emit = defineEmits(["pagechanged"]);

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const onClickPreviousPage = () => {
  emit("pagechanged", props.currentPage - 1);
};
const onClickNextPage = () => {
  emit("pagechanged", props.currentPage + 1);
};
</script>
