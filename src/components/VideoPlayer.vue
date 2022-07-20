<script setup>
import { ref } from 'vue';
defineProps({
    src: String,
    poster: String
});
const video = ref(null);

</script>
<template>
    <div class="m-auto container flex flex-wrap mt-10">
        <!-- declare a ref to hold the element reference -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <video ref="video" :src="src" :poster="poster" width="620" loop muted playsinline>
                Sorry, your browser doesn't support embedded videos,
                but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
                and watch it with your favorite video player!
            </video>
            <div class="px-6 py-4" v-if="video">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mr-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" @click="video.play()">Play</button>
                <button
                    class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" @click="video.pause()">Pause</button>
            </div>
        </div>
    </div>
</template>
