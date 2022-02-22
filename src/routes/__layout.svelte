<!-- ~/src/routes/__layout.svelte -->

<script>
  import Nav from "./../lib/nav.svelte"
  import "./../styles/reset.css";
  import "./../styles/globals.css"
</script>

<div class="flex-layout">
  <header class="absolute">
    <Nav />
  </header>
  <slot></slot>
  <p class="footer">© Acme Corp, 1951</p>
</div>

<style>
  .absolute {
    position: absolute;
    width: 100%;
  }

  .footer {
    margin: 3rem 0;
    text-align: center;
  }

  .flex-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
