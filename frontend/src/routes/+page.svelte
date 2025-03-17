<script lang="ts">
  import GraphDisplay from '$lib/GraphDisplay.svelte';
  import { dummyEdges, dummyNodes } from './dummyData';
</script>

<main>
  <h1>Graph Visualization with Cytoscape and Svelte</h1>
  <div style="height: 600px; width: 100%;">
    <GraphDisplay elements={[...dummyNodes, ...dummyEdges]} />
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
    padding: 20px;
  }
</style>
