import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, deleteEmployee, fetchEmployees } from "../src/store";
import { useAuth } from "../AuthContextStore";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { employees, isLoading, error } = useSelector(
    (state) => state.employees
  );

  const navigate = useNavigate();

  const { isLoggedIn, user, token } = useAuth();

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    emp_id: "",
    department: "",
    position: "",
    salary: "",
    phone: "",
    address: "",
    isActive: true,
    avatar: null,
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [employeeToUpdate, setEmployeeToUpdate] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) {
        toast.error("Please log in first!");
        navigate("/login", { replace: true });
    } else {
        dispatch(fetchEmployees(token));
    }
}, [isLoggedIn, user, navigate, dispatch, token]);


  // useEffect(() => {
  //   dispatch(fetchEmployees());
  // }, [ dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      avatar: e.target.files[0],
    });
  };

  const handleSubmitEmployee = (e) => {
    e.preventDefault();

    if (isUpdateMode && employeeToUpdate) {
      dispatch(
        updateEmployee({
          id: employeeToUpdate._id,
          updatedData: newEmployee,
        })
      );
      setIsUpdateMode(false);
      setEmployeeToUpdate(null);
    } else {
      dispatch(addEmployee(newEmployee));
    }

    setNewEmployee({
      name: "",
      email: "",
      emp_id: "",
      department: "",
      position: "",
      salary: "",
      phone: "",
      address: "",
      isActive: true,
      avatar: null,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      dispatch(deleteEmployee(id));
    }
  };

  const handleUpdate = (id) => {
    const employee = employees.find((emp) => emp._id === id);
    if (employee) {
      setNewEmployee({ ...employee });
      setIsUpdateMode(true);
      setEmployeeToUpdate(employee);
    }
  };

  const handleCancelUpdate = () => {
    setNewEmployee({
      name: "",
      email: "",
      emp_id: "",
      department: "",
      position: "",
      salary: "",
      phone: "",
      address: "",
      isActive: true,
      avatar: null,
    });
    setIsUpdateMode(false);
    setEmployeeToUpdate(null);
  };
  isLoading && <p className="loading-message">Loading employees...</p>;
  error && <p className="error-message">Error: {error}</p>;
  return (
    <div className="employee-dashboard container">
      <h1 className="dashboard-title">Employee Dashboard</h1>

      <div className="grid grid-two--cols">
        <div className="form-section">
          <h2 className="form-title">
            {isUpdateMode ? "Update Employee" : "Add New Employee"}
          </h2>
          <form
            onSubmit={handleSubmitEmployee}
            className="employee-form"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={newEmployee.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Employee ID:</label>
              <input
                type="text"
                name="emp_id"
                value={newEmployee.emp_id}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={newEmployee.department}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={newEmployee.position}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Salary:</label>
              <input
                type="number"
                name="salary"
                value={newEmployee.salary}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={newEmployee.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                name="address"
                value={newEmployee.address}
                onChange={handleInputChange}
                rows="2"
              />
            </div>
            <div className="form-group">
              <label>Active:</label>
              <input
                type="checkbox"
                name="isActive"
                checked={newEmployee.isActive}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Upload Avatar:</label>
              <input
                type="file"
                name="avatar"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            <div className="form-actions">
              <button
                type="submit"
                disabled={isLoading}
                className="submit-button"
              >
                {isUpdateMode ? "Update Employee" : "Add Employee"}
              </button>
              {isUpdateMode && (
                <button
                  type="button"
                  onClick={handleCancelUpdate}
                  className="cancel-button"
                >
                  Cancel Update
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="employee-list-section">
          <h2 className="list-title">Employee List</h2>
          {employees.length === 0 ? (
            <p className="no-employees">
              No employees found. Add some employees to see them here.
            </p>
          ) : (
            <ul className="employee-list">
              {employees.map((emp) => (
                <li key={emp._id} className="employee-item">
                  {emp.avatar && (
                    <img
                      src={emp.avatar}
                      alt={emp.name}
                      className="employee-avatar"
                    />
                  )}
                  <div className="employee-details">
                    <h3 className="employee-name">{emp.name}</h3>
                    <p className="employee-position">
                      Position: {emp.position || "Not specified"}
                    </p>
                    <p className="employee-department">
                      Department: {emp.department || "Not specified"}
                    </p>
                    <p className="employee-id">ID: {emp.emp_id}</p>
                  </div>
                  <div className="employee-actions">
                    <button
                      onClick={() => handleUpdate(emp._id)}
                      className="update-button"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(emp._id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
