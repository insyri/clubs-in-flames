<script lang="ts">
  //@ts-ignore
  import { PUBLIC_TOC } from "$env/static/public"; // Time Of Compilation

  import { dev } from "$app/environment";

  let toc: number = Number(PUBLIC_TOC);
  if (dev) toc = Date.now();

  const date = new Date(toc).toLocaleString("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  });
</script>

<div class="container">
  <h2>Welcome</h2>
  <div class="content">
    <p>
      This is a temporary website set up for the potential clubs of Cypress
      Creek High School to publicize information and clear up misunderstandings,
      like who is president for which club, or if it is undecided between 2 or
      more people.
    </p>

    <h3>How to use:</h3>
    <ul>
      <li>Find a specific club below and view the information.</li>
      <li>
        If an update needs to be made, use the email at the bottom of the page
        and <a class="cc" href="https://www.grammarly.com/blog/cc-in-email/"
          >copy club staff/sponsor to your email</a
        >
        to verify the integrity.
        <ul>
          <li>You can also approach me in person.</li>
        </ul>
      </li>
      <li>Repeat until you don't need to use this site anymore.</li>
    </ul>
  </div>

  <p class="lu">Last updated on {date}</p>
</div>

<style>
  .container * {
    max-width: 40rem;
  }

  .container {
    box-shadow: 7px 7px 10px darkgray;
    padding: 1.5rem;
    border-radius: 15px;
    background-color: var(--color-theme-1);
    color: white;
    margin-bottom: 3rem;
  }

  h2 {
    font-weight: 600;
    text-align: center;
  }

  .content {
    padding-bottom: 0.7rem;
  }

  .lu {
    font-size: small;
  }

  .cc {
    color: white;
    text-decoration: underline;
  }
</style>
