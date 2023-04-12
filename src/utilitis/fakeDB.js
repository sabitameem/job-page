function setJobToLocalStorage(job) {
  // Get existing job data from local storage
  const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];

  // Add new job to existing job data
  existingJobs.push(job);

  // Save updated job data back to local storage
  localStorage.setItem('jobs', JSON.stringify(existingJobs));
}
export default setJobToLocalStorage;