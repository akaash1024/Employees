import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API base URL
const API_URL = "http://localhost:3000/api/employee";

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
});

// ASYNC ACTIONS

// Fetch all employees
export const fetchEmployees = createAsyncThunk("employees/fetch", async () => {
    try {
        const response = await api.get("/");
        return response.data.employees;
    } catch (error) {
        throw error.response?.data?.message || "Failed to fetch employees";
    }
});

// Add a new employee
export const addEmployee = createAsyncThunk("employees/add", async (employee) => {
    try {
        const formData = new FormData();
        Object.entries(employee).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
            }
        });
        const response = await api.post("/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.employee;
    } catch (error) {
        throw error.response?.data?.message || "Failed to add employee";
    }
});

// Get an employee by ID
export const getEmployeeById = createAsyncThunk("employees/getById", async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Failed to get employee";
    }
});

// Update an employee
export const updateEmployee = createAsyncThunk(
    "employees/update",
    async ({ id, updatedData }) => {
        try {
            const formData = new FormData();
            Object.entries(updatedData).forEach(([key, value]) => {
                if (value !== null && value !== undefined) {
                    formData.append(key, value);
                }
            });

            const response = await api.patch(`/update/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response.data.employee;
        } catch (error) {
            throw error.response?.data?.message || "Failed to update employee";
        }
    }
);

// Delete an employee
export const deleteEmployee = createAsyncThunk("employees/delete", async (id) => {
    try {
        await api.delete(`/delete/${id}`);
        return id;
    } catch (error) {
        throw error.response?.data?.message || "Failed to delete employee";
    }
});

// EMPLOYEE SLICE

const initialState = {
    employees: [],
    isLoading: false,
    error: null,
};

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.isLoading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(addEmployee.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addEmployee.fulfilled, (state, action) => {
                state.isLoading = false;
                state.employees.push(action.payload);
            })
            .addCase(addEmployee.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                const index = state.employees.findIndex(emp => emp._id === action.payload._id);
                if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter(emp => emp._id !== action.payload);
            });
    },
});

export const store = configureStore({
    reducer: { employees: employeeSlice.reducer },
});
