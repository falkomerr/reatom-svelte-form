<script lang="ts">
  import { connectLogger } from '@reatom/framework';
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
    // @ts-expect-error bad keys interface
    return Object.keys(form.fields).map((field) => ({fieldAtom: form.fields[field], name: field}))
  }

  console.log(form);
  

  function handleSubmit() {
    const errors = form.fields.text.validation.trigger(ctx)
    if (!errors.error) {
      form.submit(ctx)
    }
  }
</script>
<form on:submit|preventDefault={handleSubmit}> 
  {#each renderFields() as field}
    <FormField fieldAtom={field.fieldAtom} label={field.name}/>
  {/each}

  <button type="submit">
    Submit
  </button>
</form>
