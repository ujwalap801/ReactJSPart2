# React Hook Form
 npm i react-hook-form


# In your React component, you're using the useForm hook from the react-hook-form library. The line:

const { register, handleSubmit } = useForm();

# register: This function is used to register an input or select element, allowing React Hook Form to track its value and validation.

# handleSubmit: This function is used to handle the form submission. It takes a callback function (handleFormSubmit in your case) which will be executed if the form is valid.

This hook simplifies managing form inputs, handling validation, and managing form submission in React applications.

# Validations rules by HTML
# requied, minLength, maxLength, min, max, pattern