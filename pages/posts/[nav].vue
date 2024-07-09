<template>
  <div class="mt-20">
    <div
      v-if="route.params.nav === 'Community'"
      class="mt-20 flex justify-center m-4"
    >
      <PostCard />
    </div>
    <div
      v-else-if="route.params.nav === 'My Space'"
      class="mt-20 flex justify-center m-4"
    >
      <PostCard />
    </div>
    <div
      v-if="openPostModal"
      class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
    >
      <div class="bg-white p-6 rounded-lg w-10/12 max-w-lg mx-auto shadow-lg">
        <h1 class="text-2xl font-semibold mb-4">Share Your Book Journal</h1>
        <form
          @submit.prevent="
            addPost(post, data?.user?.id, data?.user?.email, data?.user?.name)
          "
        >
          <label for="title" class="block text-lg font-medium mb-2"
            >Book Title</label
          >
          <input
            v-model="post.title"
            id="title"
            type="text"
            placeholder="Enter the book title"
            class="input input-bordered input-info w-full mb-4"
          />
          <label for="quotes" class="block text-lg font-medium mb-2"
            >Favorite Quotes</label
          >
          <textarea
            v-model="post.description"
            id="quotes"
            class="textarea textarea-info w-full mb-4"
            placeholder="Share your favorite quotes from the book"
            rows="5"
          ></textarea>
          <div class="flex justify-end mt-2">
            <button type="submit" class="btn btn-primary mr-2">Post</button>
            <button
              type="button"
              @click="openPostModal = !openPostModal"
              class="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    <button
      @click="openPostModal = !openPostModal"
      class="fixed bottom-4 right-4 rounded-full bg-white flex justify-center items-center shadow-lg hover:bg-gray-100 active:bg-gray-200 transition duration-200"
    >
      <img src="/icons/plus.svg" alt="post" class="size-14 p-2" />
    </button>
  </div>
</template>

<script setup>
definePageMeta({ auth: false });

const route = useRoute();
const { data: allPost } = useFetch("/api/post");
const { data } = useAuth();
const openPostModal = ref(false);

const post = ref({
  title: "",
  description: "",
});

const addPost = async (post, userId, userEmail, userName) => {
  try {
    const addedPost = await $fetch("/api/post", {
      method: "POST",
      body: {
        title: post.title,
        description: post.description,
        userId: userId,
        email: userEmail,
        name: userName,
      },
    });

    if (addedPost) {
      post.title = "";
      post.description = "";
      allPost.value = await $fetch("/api/post");
      openPostModal.value = false; // Close modal after successful post
    }
  } catch (error) {
    console.error("Error adding post:", error);
    // Handle error (e.g., show error message to user)
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50; /* Ensure it appears above other elements */
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  text-align: center;
}

.fixed {
  position: fixed;
}
</style>
