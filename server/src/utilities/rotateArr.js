const rotate = (items, k) => {
  k = k % items.length;
  for (let i = 0; i < k; i++) {
    const back = items.pop();
    items.unshift(back);
  }
  return items;
};

export default rotate;
