function randomGUID() {
  const randomHexString = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return (
    randomHexString() +
    randomHexString() +
    "-" +
    randomHexString() +
    "-" +
    randomHexString() +
    "-" +
    randomHexString() +
    "-" +
    randomHexString() +
    randomHexString() +
    randomHexString()
  );
}

export default randomGUID;
