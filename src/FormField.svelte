<script lang="ts">
    import { withSvelte } from '@reatom/npm-svelte';
    import type { FieldAtom } from './lib/reatom-form';

    export let fieldAtom: FieldAtom<string | null, string | null>; 
    export let label: string;

    const field: any = fieldAtom?.pipe(withSvelte)


    function handleInput( event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
        $field = event.currentTarget.value
    }    
</script>

<label class="label">
    {label}
    <input value={$field} on:input={handleInput} />
</label>

<style>
    .label {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
</style>
