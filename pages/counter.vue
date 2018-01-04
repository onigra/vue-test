<template>
  <div>
    <div id="app">
      <button @click="$store.commit('counter/increment')">++</button>
      <button @click="$store.commit('counter/decrement')">--</button>
      {{ $store.state.counter.current }}
    </div>
  </div>
</template>
