

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
    display: flex;
  }

  .column {
    flex: 50%;
    /* border: 1px dotted #ff8d8d; */
    position: relative;
  }
</style>