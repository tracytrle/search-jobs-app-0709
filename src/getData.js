import jobs from "./jobs.json";

const getJobs = async (page, searchInput = null) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  if (searchInput) {
    console.log(`---------> notempty.getData: ${searchInput}`);
    let collectedJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        job.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        job.city.toLowerCase().includes(searchInput.toLowerCase()) ||
        job.skills.some((each) =>
          each.toLowerCase().includes(searchInput.toLowerCase())
        )
    );
    console.log(`----> collectedJobs: ${collectedJobs}`);
    let size = Math.ceil(collectedJobs.length / 5);
    console.log(`---------> NONempty.getsize: ${size}`);
    // return { jobs: collectedJobs, totalPage: size };
    return {
      jobs: collectedJobs.slice((page - 1) * 6, page * 6 - 1),
      totalPage: size,
    };
  } else {
    let size = Math.ceil(jobs.length / 5);
    console.log(`---------> empty.getsize: ${size}`);
    return { jobs: jobs.slice((page - 1) * 6, page * 6 - 1), totalPage: size };
  }
};

const getDetailJob = async (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
  await promise;

  return jobs.find((job) => job.id === id);
};
const data = {
  getJobs,
  getDetailJob,
};

export default data;
