function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

delay(2000)
    .then(() => console.log('Promise resolved after 2 seconds'))
    .catch((error) => console.error(error));
