<script lang="ts">
  import type { AvailableLocale } from "$lib/paraglide/runtime";
  import {
    defineSetLocale,
    defineGetLocale,
    baseLocale,
    getLocale,
  } from "$lib/paraglide/runtime";

  const { children } = $props();

  let currentLocale = $state(getLocale());

  defineGetLocale(() => {
    if (import.meta.env.SSR) {
      return baseLocale;
    }
    return (localStorage.getItem("locale") as AvailableLocale) ?? baseLocale;
  });

  defineSetLocale((newLocale) => {
    localStorage.setItem("locale", newLocale);
    currentLocale = newLocale;
  });
</script>

{#key currentLocale}
  {@render children?.()}
{/key}
