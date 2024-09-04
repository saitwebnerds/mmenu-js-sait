/** Whether or not touch gestures are supported by the browser. */
export let touch;
touch = 'ontouchstart' in window ||
    (!!navigator.maxTouchPoints) ||
    false;
