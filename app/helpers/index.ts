interface DelayedRequestInit extends RequestInit {
    delay: number;
}

// Delay API response by 2 seconds
export const delayFetch = (url: string, options: DelayedRequestInit) => new Promise ( (resolve) => {
    setTimeout ( () => {
    resolve (fetch (url, options));
    }, options.delay);
});