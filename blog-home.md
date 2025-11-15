---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Blogposts"
---

<script setup lang="ts">
import { ref } from 'vue'
import ItemsList from "/Components/ItemsList.vue"

import type { BlogpostObj} from "/Components/ItemsList.vue"

const blogposts = ref<BlogpostObj[]>([
  {
    title: "Earthrise",
    description: "Celebrating Earth Day's 50th Anniversity",
    date: "2020-04-22",
    link: "/blogposts/earthrise",
    tags: ["monologue", "space", "science"],
  },
  {
    title: "2020 Annual Net Worth Review",
    description: "First Job Out of College!",
    date: "2020-12-28",
    link: "/blogposts/2020-networth",
    tags: ["finance"],
  },
  {
    title: "2021 Annual Net Worth Review",
    description: "Bought New Car with DOGECOIN!",
    date: "2021-12-28",
    link: "/blogposts/2021-networth",
    tags: ["finance"],
  },
  {
    title: "2022 Annual Net Worth Review",
    description: "Moved to Las Vegas!",
    date: "2022-12-28",
    link: "/blogposts/2022-networth",
    tags: ["finance"],
  },
  {
    title: "I bought my favorite watch!",
    description: "The Over-Engineering of the Grand Seiko Spring Drive",
    date: "2023-04-24",
    link: "/blogposts/spring-drive",
    tags: ["horology", "engineering", "monologue"],
  },
  {
    title: "2023 Annual Net Worth Review",
    description: "Slow & Steady",
    date: "2023-12-28",
    link: "/blogposts/2023-networth",
    tags: ["finance"],
  },
  {
    title: "2024 Annual Net Worth Review",
    description: "$100k net worth! 800 credit score!",
    date: "2024-12-28",
    link: "/blogposts/2024-networth",
    tags: ["finance"],
  },
    tags: ["finance"],
  },
])
</script>

<ItemsList :blogposts="blogposts" />
