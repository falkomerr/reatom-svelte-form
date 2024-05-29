import * as z from 'zod';
import { reatomForm, type FormFieldOptions } from './reatom-form';


export const form = reatomForm(
  {
    text: {
      initState: '' as string | null,
      contract: z
        .string()
        .min(1, 'Text is required').parse,
      validateOnChange: true,
    } satisfies FormFieldOptions<string | null>
  },
  {
    name: 'form',
    onSubmit: async (ctx, state) => {
      console.log(state)
    },
  },
);
