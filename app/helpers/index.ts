interface DelayedRequestInit extends RequestInit {
    delay: number;
}
    
export const delayFetch = (url: string, options: DelayedRequestInit) => new Promise ( (resolve) => {
    setTimeout ( () => {
    resolve (fetch (url, options));
    }, options.delay);
});