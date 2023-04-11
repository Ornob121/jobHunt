import { getFromLocalStorage } from "../localDb";

const getAppliedJobsData = async () => {
  const jobs = await fetch("/featuredJobs.json");
  const appliedJobsAllData = await jobs.json();

  const appliedJobsId = getFromLocalStorage();
  const appliedJobsData = [];
  for (const id in appliedJobsId) {
    const appliedJobsFind = appliedJobsAllData.find(
      (applied) => applied._id === id
    );
    if (appliedJobsFind) {
      appliedJobsData.push(appliedJobsFind);
    }
  }
  return appliedJobsData;
};

export default getAppliedJobsData;
