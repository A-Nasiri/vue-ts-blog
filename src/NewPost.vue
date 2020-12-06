<template>
  <PostWriter :post="post" />
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent } from "vue";
import PostWriter from "./PostWriter.vue";
import { Post } from "./types";

export default defineComponent({
  name: "NewPost",
  components: {
    PostWriter
  },
  setup() {
    const post: Post = {
      id: -1,
      title: "New Post",
      markdown: "## New Post\nEnter your post here...",
      html: "",
      created: moment(),
      authorId: 0
    };

    return {
      post
    };
  }
});
</script>
