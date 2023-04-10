const getFromLocalStorage = () => {
  let appliedJobs = {};

  const localJobs = localStorage.getItem("applied-jobs");

  if (localJobs) {
    appliedJobs = JSON.parse(localJobs);
  }
  return appliedJobs;
};

const addToLocalDb = (id) => {
  let appliedJobs = getFromLocalStorage();

  appliedJobs[id] = 1;

  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

export { addToLocalDb, getFromLocalStorage };
