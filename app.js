fetch("/fakedata.json")
  .then((res) => res.json())
  .then((data) => console.log(data.todos));

// another fetch
fetch("https://dummyjson.com/carts")
  .then((res) => res.json())
  .then((data) => console.log(data.cartsd));
