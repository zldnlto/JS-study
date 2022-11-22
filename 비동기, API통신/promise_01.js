const promise = new Promise((resolve, reject) => {
  const read = Math.floor(Math.random() * 2);
  console.log(read);
  if (read === 0) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("something went wrong");
  });
