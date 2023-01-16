/* tslint:disable */
/* eslint-disable */
/**
*
* * 加密数据
* 
* @param {string} text
* @returns {string}
*/
export function encrypt(text: string): string;
/**
*
* * 解密数据
* 
* @param {string} text
* @returns {string}
*/
export function decrypt(text: string): string;
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @param {string} name
* @returns {string}
*/
export function format(name: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly encrypt: (a: number, b: number, c: number) => void;
  readonly decrypt: (a: number, b: number, c: number) => void;
  readonly greet: (a: number, b: number) => void;
  readonly format: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
