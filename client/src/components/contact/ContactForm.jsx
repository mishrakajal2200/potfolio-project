
import { useState } from "react";
import { FiCheck, FiLoader, FiSend } from "react-icons/fi";
import { submitContact } from "../../services/contactService";

const initialFormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const projectTypes = [
  "Website",
  "E-commerce",
  "SaaS / Dashboard",
  "API / Backend",
  "Bug Fixing / Improvements",
  "Other",
];

const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove the error as soon as the user starts correcting the field.
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell me a little about your project.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message =
        "Please provide at least 20 characters about your project.";
    }

    return newErrors;
  };


const handleSubmit = async (event) => {
  event.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setStatus("loading");
  setErrors({});

  try {
    await submitContact({
      name: formData.name.trim(),
      email: formData.email.trim(),
      projectType: formData.projectType,
      budget: formData.budget,
      message: formData.message.trim(),
    });

    setStatus("success");
    setFormData(initialFormData);
  } catch (error) {
    console.error(
      "Contact form submission failed:",
      error.response?.data || error.message
    );

    setStatus("error");
  }
};


  const inputClasses = (fieldName) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-neutral-700 ${
      errors[fieldName]
        ? "border-red-500/50 focus:border-red-500"
        : "border-white/10 focus:border-white/30 focus:bg-white/[0.05]"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Name <span className="text-neutral-600">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          autoComplete="name"
          className={inputClasses("name")}
        />

        {errors.name && (
          <p className="mt-2 text-xs text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Email <span className="text-neutral-600">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          className={inputClasses("email")}
        />

        {errors.email && (
          <p className="mt-2 text-xs text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          What do you need?
          <span className="text-neutral-600"> *</span>
        </label>

        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className={`${inputClasses("projectType")} appearance-none`}
        >
          <option value="" disabled>
            Select project type
          </option>

          {projectTypes.map((type) => (
            <option
              key={type}
              value={type}
              className="bg-neutral-900 text-white"
            >
              {type}
            </option>
          ))}
        </select>

        {errors.projectType && (
          <p className="mt-2 text-xs text-red-400">
            {errors.projectType}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Estimated budget
          <span className="text-neutral-600"> (optional)</span>
        </label>

        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={`${inputClasses("budget")} appearance-none`}
        >
          <option value="" className="bg-neutral-900 text-white">
            Select budget range
          </option>

          {budgetOptions.map((budget) => (
            <option
              key={budget}
              value={budget}
              className="bg-neutral-900 text-white"
            >
              {budget}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-neutral-300"
        >
          Tell me about your project
          <span className="text-neutral-600"> *</span>
        </label>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you looking to build? Include any important features, requirements, or timeline."
          rows={6}
          className={`${inputClasses(
            "message"
          )} resize-none leading-6`}
        />

        <div className="mt-2 flex items-center justify-between gap-4">
          {errors.message ? (
            <p className="text-xs text-red-400">
              {errors.message}
            </p>
          ) : (
            <p className="text-xs text-neutral-700">
              A few details will help me understand your requirements.
            </p>
          )}

          <span className="shrink-0 text-xs text-neutral-700">
            {formData.message.length}/1000
          </span>
        </div>
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4">
          <FiCheck
            size={18}
            className="mt-0.5 shrink-0 text-emerald-400"
          />

          <div>
            <p className="text-sm font-medium text-emerald-300">
              Message sent successfully.
            </p>

            <p className="mt-1 text-xs leading-5 text-emerald-400/70">
              Thanks for reaching out. I'll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.05] p-4 text-sm text-red-400">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <FiLoader
              size={17}
              className="animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            Send Project Inquiry
            <FiSend
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>

      <p className="text-center text-xs leading-5 text-neutral-700">
        Your information will only be used to respond to your project
        inquiry.
      </p>
    </form>
  );
}

export default ContactForm;

