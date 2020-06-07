const readingTime = (minutes) => {
  const time = Math.round(minutes / 5);
  let returned = undefined;

  if (time > 5) {
    returned = `${new Array(Math.round(time / Math.E))
      .fill(`☀︎`)
      .join(``)} ${minutes} min read`;
  } else {
    returned = `${new Array(time || 1)
      .fill(`☂︎`)
      .join(``)} ${minutes} min read`;
  }

  return returned;
};

export { readingTime };
