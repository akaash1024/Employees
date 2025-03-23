import { useState } from "react";

export const Project = () => {
  const [details, setDetails] = useState({
    projectTitle: "",
    githubUrl: "",
    deployedUrl: "",
    startDate: "",
    endDate: "",
    features: "",
    techstack: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <section>
        <div className="container">
          <pre>{JSON.stringify(details, null, 2)}</pre>
          <div className="flex">
            <div className="container-right-preview">
              <form onSubmit={handleSubmit}>
                <div className="resumeDataform">
                  <section className="projectDetails common--Format">
                    <h1>Project Details</h1>
                    <div className="grid grid-two--cols">
                      <div>
                        <label htmlFor="projectTitle">Project Title</label>
                        <br />
                        <input
                          type="text"
                          id="projectTitle"
                          name="projectTitle"
                          value={details.projectTitle}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="githubUrl">GitHub URL</label>
                        <br />
                        <input
                          type="url"
                          id="githubUrl"
                          name="githubUrl"
                          value={details.githubUrl}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="deployedUrl">Deployed URL</label>
                        <br />
                        <input
                          type="url"
                          id="deployedUrl"
                          name="deployedUrl"
                          value={details.deployedUrl}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="startDate">Start Date</label>
                        <br />
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={details.startDate}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="endDate">End Date</label>
                        <br />
                        <input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={details.endDate}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="features">Project Features</label>
                        <br />
                        <textarea
                          id="features"
                          name="features"
                          value={details.features}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="techstack">Tech Stack</label>
                        <br />
                        <input
                          type="text"
                          id="techstack"
                          name="techstack"
                          value={details.techstack}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <button type="submit">Save</button>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
