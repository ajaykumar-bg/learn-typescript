function orderError(error) {
    throw new Error(error);
    // This function is never going to return a value!
}
orderError('Oops.. Something went wrong');
