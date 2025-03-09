<script lang="ts">
  import cytoscape from 'cytoscape';
  import type { ElementDefinition } from 'cytoscape';
  import { onMount } from 'svelte';

  export let elements: ElementDefinition[] = []; // GraphDB input

  let graphContainer: HTMLDivElement;
  let cy: cytoscape.Core;

  onMount(() => {
    cy = cytoscape({
      container: graphContainer,
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center',
            'background-color': '#11479e',
          },
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'line-color': '#9dbaea',
            'target-arrow-color': '#9dbaea',
          },
        },
      ],
      zoom: 1,
      minZoom: 0.3,
      maxZoom: 5,
      wheelSensitivity: 0.1,
      motionBlur: true,
      layout: {
        name: 'random',
      },
    });
  });

  $: if (cy && elements) {
    cy.elements().remove(); // clear exisint elements
    cy.add(elements);
    console.log(`added ${elements.length} elements, re-running layout`);
    cy.layout({ name: 'random' }).run(); // re-run layout
  }
</script>

<div bind:this={graphContainer} id="cytoscape-graph" style="height: 100%; width: 100%; border: 1px solid #eee;"></div>

<style>
  #cytoscape-graph {
    background-color: #f0f0f0; /* Light background */
  }
</style>
