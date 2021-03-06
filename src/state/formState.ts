import { subscribe, unSubscribe, disconnectedCallback } from '@simple-html/core';
import { validateKey, stateContainer, stateResult } from '@simple-html/core';

/**
 * key and validate key, so we know we dont have duplicates
 */
export const STATE_KEY = 'FORM_STATE';
validateKey(STATE_KEY);

/**
 * connect state
 */
export function connectFormState(context: HTMLElement, callback: Function): void {
    // this register callback with simpleHtml elements disconnected callback
    disconnectedCallback(context, () => unSubscribe(STATE_KEY, context));

    // for following the event we just use the internal event handler
    subscribe(STATE_KEY, context, callback);
}

/**
 * function to get state/state setter
 */
export type state = { firstName: string; lastName: string };
export function formState(defaultValue = {} as state): stateResult<state> {
    return stateContainer<state>(STATE_KEY, defaultValue);
}
