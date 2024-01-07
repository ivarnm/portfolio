

<div class="row">
  <div class="column">
    <slot name="column1">
        Column 1
    </slot>
  </div>
  <div class="column">
    <slot name="column2">
      Column 2
  </slot>
  </div>
</div>

<style>
  .row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .column {
    /* border: 1px dotted #ff8d8d; */
    position: relative;
  }
</style>
