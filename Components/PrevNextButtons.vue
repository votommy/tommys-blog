<script setup lang="ts">
import { useRouter, withBase } from "vitepress";

type Props = {
  prev?: {
    path: string;
    title: string;
    description: string;
  };
  next?: {
    path: string;
    title: string;
    description: string;
  };
};

const { prev, next } = defineProps<Props>();
const router = useRouter();

function goToLink(path?: string) {
  if (path) {
    router.go(withBase(path));
  }
}
</script>

<template>
  <div>
    <hr />

    <div class="prev-next-container">
      <div v-show="prev" class="prev-next-btn" @click="goToLink(prev?.path)">
        <div class="prev-next-label">Previous post</div>
        <div class="item-title">{{ prev?.title }}</div>
        <div class="item-description">{{ prev?.description }}</div>
      </div>
      <div
        v-show="next"
        class="prev-next-btn next-btn"
        @click="goToLink(next?.path)"
      >
        <div class="prev-next-label">Next post</div>
        <div class="item-title">{{ next?.title }}</div>
        <div class="item-description">{{ next?.description }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prev-next-container {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;

  .prev-next-btn {
    display: flex;
    flex-direction: column;
    background-color: var(--vp-c-bg-soft);
    border-radius: 1rem;
    border: 1px solid var(--vp-c-bg-soft);
    padding: 1rem;
    margin-top: 0.25rem;
    cursor: pointer;

    .item-title {
      font-weight: 700;
    }
    .item-description {
      color: var(--vp-c-text-2);
      font-size: 0.75rem;
    }

    .prev-next-label {
      color: var(--vp-c-brand-1);
    }
    &:hover {
      border-color: var(--vp-c-brand-1);

      .prev-next-label {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }

    &.next-btn {
      margin-left: auto;
      align-items: flex-end;
    }
  }
}
</style>
