<script lang="ts">
  import * as m from "$lib/paraglide/messages.js";
  import { setLocale } from "$lib/paraglide/runtime";
</script>

<div>pages: <a href="/">Home</a> | <a href="/about-us">About us</a></div>

<button on:click={() => setLocale("en")}>set locale to "en"</button>
<button on:click={() => setLocale("de")}>set locale to "de"</button>

<h1>{m.welcome_title()}</h1>
<p>{m.main_page_paragraph()}</p>
