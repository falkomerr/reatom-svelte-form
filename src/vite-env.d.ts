/// <reference types="svelte" />
/// <reference types="vite/client" />
declare module "@reatom/npm-svelte"  {
  import { Atom, AtomState, Ctx, CtxParams, Fn, Unsubscribe } from '@reatom/core';
  export declare const setupCtx: (ctx?: Ctx) => Ctx;
  export declare const withSvelte: <T extends Atom<any> & {
      subscribe?: Fn<[Fn<[any], any>], Unsubscribe> | undefined;
      set?: Fn<[any], any> | undefined;
  }>(anAtom: T) => T & {
      subscribe: Fn<[Fn<[AtomState<T>], any>], Unsubscribe>;
      set: T extends Fn<any[], any> ? Fn<CtxParams<T, never>, ReturnType<T>> : never;
  };
}