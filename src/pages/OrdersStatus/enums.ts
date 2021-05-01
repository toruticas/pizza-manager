enum StatusOptions {
  Accepted,
  Transit,
  Completed,
  Canceled,
  Started,
}

const getStatus = (order: any) => {
  if (order.accepted) {
    return StatusOptions.Accepted;
  } else if (order.transit) {
    return StatusOptions.Transit;
  } else if (order.completed) {
    return StatusOptions.Completed;
  } else if (order.canceled) {
    return StatusOptions.Canceled;
  }

  return StatusOptions.Started;
};

export { StatusOptions, getStatus };
