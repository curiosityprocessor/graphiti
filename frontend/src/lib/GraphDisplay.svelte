<script lang="ts">
  import cytoscape from 'cytoscape';
  import type { ElementDefinition } from 'cytoscape';
  import { onMount } from 'svelte';

  export let elements: ElementDefinition[] = []; // GraphDB input

  let graphContainer: HTMLDivElement;
  let cy: cytoscape.Core;

  let selectedNode: any = null;
  let nodeProperties = {};

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

    cy.on('click', 'node', (event) => {
      const node = event.target;
      selectedNode = node;
      nodeProperties = node.data();
    });
  });

  $: if (cy && elements) {
    cy.elements().remove(); // clear existing elements
    cy.add(elements);
    console.log(`added ${elements.length} elements, re-running layout`);
    cy.layout({ name: 'random' }).run(); // re-run layout
  }
</script>

<div bind:this={graphContainer} id="cytoscape-graph" style="height: 100%; width: 100%; border: 1px solid #eee;"></div>
{#if selectedNode}
  <div class="details">
    <h3>Node</h3>
    <div class="properties">
      <string>Properties:</string>
      <pre>{JSON.stringify(nodeProperties, null, 2)}</pre>
    </div>
  </div>
{/if}

<style>
  #cytoscape-graph {
    background-color: #f0f0f0; /* Light background */
  }

  .details {
    margin-top: 30px;
    padding: 15px;
    border: 1px solid #eee;
    background-color: #f9f9f9;
  }

  .properties {
    margin-bottom: 10px;
  }
</style>
