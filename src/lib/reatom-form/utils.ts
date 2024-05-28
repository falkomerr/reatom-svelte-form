// TODO remove this hardcode
import { z } from 'zod';

export const toError = (thing: unknown) => {
  return thing instanceof Error
    ? thing instanceof z.ZodError
      ? thing.issues[0]?.message
      : thing.message
    : String(thing ?? 'Unknown error');
};