
import { reatomForm, type FormFieldOptions } from './reatom-form';

export const form = reatomForm(
  {
    title: '' as string | null,
    name: '' as string | null,
  },
  {
    name: 'FunnelSettings.endPageForm',
    onSubmit: async (ctx, state) => {
      console.log(state)
    },
  },
);
