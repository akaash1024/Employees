import { useState } from "react";

export const Achievement = () => {
  const [details, setDetails] = useState({
    achievementTitle: "",
    instituteName: "",
    achievementUrl: "",
    achievementDescription: "",
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
                  <section className="achievementDetails common--Format">
                    <h1>Achievement Details</h1>
                    <div className="grid grid-two--cols">
                      <div>
                        <label htmlFor="achievementTitle">
                          Achievement Title
                        </label>
                        <br />
                        <input
                          type="text"
                          id="achievementTitle"
                          name="achievementTitle"
                          value={details.achievementTitle}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="instituteName">Institute Name</label>
                        <br />
                        <input
                          type="text"
                          id="instituteName"
                          name="instituteName"
                          value={details.instituteName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="achievementUrl">Achievement URL</label>
                        <br />
                        <input
                          type="url"
                          id="achievementUrl"
                          name="achievementUrl"
                          value={details.achievementUrl}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="achievementDescription">
                          Description
                        </label>
                        <br />
                        <textarea
                          id="achievementDescription"
                          name="achievementDescription"
                          value={details.achievementDescription}
                          onChange={handleChange}
                        ></textarea>
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
