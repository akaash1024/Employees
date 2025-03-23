import { useState } from "react";

export const Education = () => {
  const [details, setDetails] = useState({
    instituteName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
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
                        <label htmlFor="institute-name">Institute Name</label>
                        <br />
                        <input
                          type="text"
                          id="institute-name"
                          name="instituteName"
                          value={details.instituteName}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="degree">Degree</label>
                        <br />
                        <input
                          type="text"
                          id="degree"
                          name="degree"
                          value={details.degree}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex">
                        <div>
                          <label htmlFor="startDate">Start Date</label>
                          <br />
                          <input
                            name="startDate"
                            id="startDate"
                            type="date"
                            value={details.startDate}
                            onChange={handleChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="endDate">End Date</label>
                          <br />
                          <input
                            name="endDate"
                            id="endDate"
                            type="date"
                            value={details.endDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="location">Location</label>
                        <br />
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={details.location}
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
