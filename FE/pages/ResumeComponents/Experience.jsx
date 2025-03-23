import { useState } from "react";

export const Experience = () => {
  const [details, setDetails] = useState({
    projectTitle: "",
    description: "",
    features: "",
    techstack: "",
    githubUrl: "",
    deployedUrl: "",
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
          <pre>{JSON.stringify(details, null, 1)}</pre>
          <div className="flex">
            <div className="container-right-preview">
              <form onSubmit={handleSubmit}>
                <div className="resumeDataform">
                  <section className="personDetails common--Format">
                    <h1>Personal Details</h1>
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
                        <label htmlFor="description">Description</label>
                        <br />
                        <input
                          type="text"
                          id="description"
                          name="description"
                          value={details.description}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="features">Features</label>
                        <br />
                        
                        <input
                          name="features"
                          id="features"
                          value={details.features}
                          onChange={handleChange}
                        ></input>
                      </div>

                      <div>
                        <label htmlFor="techstack">Tech Stack</label>
                        <br />
                        <input
                          name="techstack"
                          id="techstack"
                          type="text"
                          value={details.techstack}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="githubUrl">Github</label>
                        <br />
                        <input
                          name="githubUrl"
                          id="githubUrl"
                          type="url"
                          value={details.githubUrl}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="deployedUrl">Deployment Link</label>
                        <br />
                        <input
                          name="deployedUrl"
                          id="deployedUrl"
                          type="url"
                          value={details.deployedUrl}
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
