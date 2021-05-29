// callback
const fetchData = callback => {
  setTimeout(() => {
    callback("Data fetch");
  });
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData(text => {
    console.log(text);
  });
}, 2000);

console.log("Hello");
console.log("Hi");

// promises
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 1500);
  });

  return promise;
};

fetchPromise()
  .then(text => {
    return fetchPromise();
  })
  .then(text => console.log("Promise", text));

// async / await
