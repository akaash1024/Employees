import { useState } from "react";

export const PersonalDetails = () => {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    professionalSummary: "",
    phoneNumber: "",
    linkedIn: "",
    githubUsername: "",
    portfolioLink: "",
    enterLocation: "",
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
                        <label htmlFor="fName">Full Name</label>
                        <br />
                        <input
                          type="text"
                          id="fName"
                          name="fullName"
                          value={details.fullName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="professionalSummary">
                          Professional Summary
                        </label>
                        <br />
                        <textarea
                          name="professionalSummary"
                          id="professionalSummary"
                          value={details.professionalSummary}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div>
                        <label htmlFor="phone">Phone Number</label>
                        <br />
                        <input
                          name="phoneNumber"
                          id="phone"
                          type="number"
                          value={details.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="githubUsername">Github</label>
                        <br />
                        <input
                          name="githubUsername"
                          id="github"
                          type="url"
                          value={details.githubUsername}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <br />
                        <input
                          name="linkedIn"
                          id="linkedIn"
                          type="url"
                          value={details.linkedIn}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="enterLocation">Location</label>
                        <br />
                        <input
                          name="enterLocation"
                          id="location"
                          type="text"
                          value={details.enterLocation}
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
