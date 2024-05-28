<script lang="ts">
  import { connectLogger } from '@reatom/framework';
  // @ts-expect-error have @reatom/npm-svelte a types package?
  import { setupCtx } from '@reatom/npm-svelte';
  import FormField from './FormField.svelte';
  import { form } from './lib/model';
  import type { FieldAtom } from './lib/reatom-form';
  
  const ctx = setupCtx();

  connectLogger(ctx);

  interface IField {
    fieldAtom: FieldAtom<string | null, string | null>;
    name: string;
  }

  function renderFields(): IField[] {
    // @ts-expect-error
    return Object.keys(form.fields).map((field) => ({fieldAtom: form.fields[field], name: field}))
  }


</script>
<form on:submit|preventDefault={() => form.submit(ctx)}> 

  {#each renderFields() as field}
    <FormField fieldAtom={field.fieldAtom} label={field.name}/>
  {/each}

  <button type="submit">
    Submit
  </button>
</form>
