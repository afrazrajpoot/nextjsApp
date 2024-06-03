export const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "e.g San Andreas",
    pc: "email",

    rules: {
      required: "Full name is required",
      minLength: {
        value: 3,
        message: "Full name must be at least 3 characters long",
      },
    },
  },
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];
export const loginFormData = [
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];

export const forgetForm = [
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
];
export const resetForm = [
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
  {
    label: "New password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];
