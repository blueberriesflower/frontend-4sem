<template>
    <button class="button">
      <slot />
    </button>
  </template>
  
  <style scoped lang="scss">
  .button {
    background-color: lightgreen;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: darkgreen;
      color: white;
    }
  }
  </style>