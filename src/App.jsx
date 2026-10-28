
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollment: "",
    course: "",
    semester: "",
    gender: "",
    address: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      enrollment: "",
      course: "",
      semester: "",
      gender: "",
      address: "",
    });

    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            Student Registration Form
          </h1>
          <p className="mt-2 text-gray-600">
            Enter your details to register
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        >
          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Enrollment Number
            </label>
            <input
              type="text"
              name="enrollment"
              value={formData.enrollment}
              onChange={handleChange}
              placeholder="Enter enrollment number"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Semester
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Gender
            </label>
            <div className="flex gap-6">
              {["Male", "Female", "Other"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={item}
                    checked={formData.gender === item}
                    onChange={handleChange}
                    required
                    className="accent-blue-600"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              rows="3"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Register Student
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </form>

        {submittedData && (
          <div className="mt-8 rounded-2xl border border-green-200 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="mb-5 text-2xl font-bold text-green-700">
              Registration Successful!
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Full Name", submittedData.name],
                ["Email", submittedData.email],
                ["Enrollment Number", submittedData.enrollment],
                ["Course", submittedData.course],
                ["Semester", submittedData.semester],
                ["Gender", submittedData.gender],
                ["Address", submittedData.address],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg bg-gray-50 p-4"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {label}
                  </p>
                  <p className="mt-1 break-words font-semibold text-gray-800">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
