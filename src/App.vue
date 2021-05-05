<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  font-size: 14px;
}
@media(max-width: 700px){
  html{
    font-size: 10px;
  }
}

/* Reset */
h1, h2, h3{
  margin-top: 0;
}

/* Color */
.textColor-blue{
  color: #00A5F7;
}
.bgColor-blue{
  background-color: #00A5F7;
}

/* Scrollbar */
/* width */
::-webkit-scrollbar,
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track,
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(179, 179, 179);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb {
  background: rgb(50, 50, 50);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 64, 216);
}
</style>
