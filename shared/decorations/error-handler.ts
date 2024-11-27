export function errorHandler<T extends (...args: any[]) => any>(
    fn: T
): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
        try {
            const result = fn(...args);
            if (result instanceof Promise) {
                return result.catch((error: unknown) => {
                    console.error(error);
                    throw error;
                }) as ReturnType<T>;
            }
            return result;
        } catch (error: unknown) {
            console.error(error);
            throw error;
        }
    };
}
