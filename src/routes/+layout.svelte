<script>
  import "@fontsource/fira-sans";
  import Header from "./Header.svelte";
  import "./styles.css";
  //@ts-ignore
  import { PUBLIC_VERSION } from "$env/static/public";
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>

  <footer>
    <p>
      created by noah mercedes in one night. <span>v{PUBLIC_VERSION}</span>
    </p>
    <p>
      email <a href="mailto: 4806848800@students.ocps.net"
        >4806848800@students.ocps.net</a
      > for inquiries or update requests
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  p {
    text-align: center;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }

  span {
    font-weight: bold;
  }
</style>
