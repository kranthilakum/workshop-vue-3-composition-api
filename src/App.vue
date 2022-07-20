<template>
  <div id="app">
    <HelloWorld msg="Rick & Morty Characters" />
    <VideoPlayer src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
      poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
</script>
