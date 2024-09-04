/** Whether or not touch gestures are supported by the browser. */
export let touch: boolean;
touch = 'ontouchstart' in window ||
    (!!navigator.maxTouchPoints) ||
    false;