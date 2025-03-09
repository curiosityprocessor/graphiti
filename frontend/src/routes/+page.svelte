<script lang="ts">
  import GraphDisplay from '$lib/GraphDisplay.svelte';

  const dummyData = {
    elements: [
      { data: { id: 'n1' } },
      { data: { id: 'n2' } },
      { data: { id: 'n3' } },
      { data: { id: 'n4' } },
      {
        data: { id: 'e1', source: 'n1', target: 'n2' },
      },
      {
        data: { id: 'e2', source: 'n2', target: 'n3' },
      },
      {
        data: { id: 'e3', source: 'n3', target: 'n4' },
      },
      {
        data: { id: 'e4', source: 'n1', target: 'n4' },
      },
    ],
  };
</script>

<main>
  <h1>Graph Visualization with Cytoscape and Svelte</h1>
  <div style="height: 600px; width: 100%;">
    <GraphDisplay elements={dummyData.elements} />
  </div>
  <p>This is a simple graph visualization.</p>
</main>

<style>
  main {
    font-family: sans-serif;
    padding: 20px;
  }
</style>
