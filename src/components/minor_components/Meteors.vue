<template>
    <div class="meteors-container">
        <span
        v-for="index in count"
        :key="'meteor ' + index"
        :class="
            cn(
            'animate-meteor absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff50] rotate-[215deg]',
            `before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-white before:to-transparent`,
            $props.class,
            )
        "
        :style="{
            top: Math.floor(Math.random() * 100) + '%',
            left: Math.floor(Math.random() * 100) + '%',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
        }"
        ></span>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { cn } from '../../lib/utils';
  
  defineProps({
    count: {
      type: Number,
      default: 20,
    },
    class: String,
  });
  </script>
  
  <style scoped>
  .meteors-container {
    background-color:black;
    position: fixed;
    top: 0;
    left: -50;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
    }
  
  @keyframes meteor {
    0% {
      transform: rotate(215deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(215deg) translateX(-500px);
      opacity: 0;
    }
  }
  
  .animate-meteor {
    animation: meteor 5s linear infinite;
  }
  </style>