export default function debounce<T>(func: any, wait: number, context?: T) {
    let timeout: number | null;
    return function() {
        console.log(func)
        const args = Array.from(arguments);
        const later = ()=> {
            timeout = null;
            func.call(context, ...args);
        }
        if(timeout)
            clearTimeout(timeout);
        timeout = setTimeout(later, wait)
    }
}