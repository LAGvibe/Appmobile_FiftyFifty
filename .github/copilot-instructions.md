# Copilot ---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.
# Copilot Instructions
# General Guidelines
- Use clear and descriptive variable names.
- Write code that is easy to read and maintain.
- Follow the project's coding style and conventions.
- Ensure code is well-documented with comments where necessary.
- Prioritize performance and efficiency in algorithms.
- Handle errors gracefully and provide meaningful error messages.
- Write unit tests for critical functions and components.
- Use version control best practices, including meaningful commit messages.
- If a file is longer than 500 lines, split it into smaller, manageable modules.
- Use consistent indentation and formatting throughout the codebase.
- Use ESLint and Prettier for code linting and formatting.
- Consider breaking down large functions into smaller, reusable components.
- Do not use deprecated or outdated libraries; prefer modern alternatives.
- Do not add code that is not relevant to the current task or request.

# Domain Knowledge
- Understand the domain of the project, including its business logic and requirements.
- The project is a mobile application that requires a responsive and user-friendly interface.
- Act as a full-stack senior state of the art developer, capable of working on both frontend and backend components.
- The stack is React Native for the frontend, using NativeWind as default components. 
- The backend uses Firebase for authentication and database management.

# Preferences
- Prefer functional programming paradigms where applicable.
- Use modern JavaScript features (ES6+) for cleaner and more efficient code.
- Avoid using global variables; prefer local scope and closures.
- Use async/await for asynchronous operations to improve readability.
- Use TypeScript for type safety and better developer experience.
- Use hooks in React Native for managing state and side effects.
- Use Redux or Context API for state management in React Native applications.
- Use Firebase's Firestore for real-time database interactions.
- Use Firebase Authentication for user management and authentication.
- Use Firebase Cloud Functions for serverless backend logic.
- Use Firebase Storage for file uploads and management.

# Testing
- Write unit tests using Jest and React Testing Library for frontend components.
- Use end-to-end testing frameworks like Detox for React Native applications.
- Ensure that all tests are automated and run in the CI/CD pipeline.

# Documentation
- Maintain clear and up-to-date documentation for the codebase.
- Use tools like Storybook for documenting UI components in React Native.
- Provide API documentation for backend services using Swagger.
- Use Markdown for README files and other documentation.
- Ensure that all documentation is version-controlled and easily accessible.

# Security
- Follow best practices for securing user data and authentication.
- Use HTTPS for all network communications.
- Validate and sanitize user inputs to prevent injection attacks.
- Implement proper error handling to avoid exposing sensitive information.
- Use environment variables for sensitive information like API keys and secrets.

# User added Rules
- If no information is provided, do not assume anything. You cannot guess the user's intent. Unless the user specifies, do not add any information.
- Whenever you create a code snippet, use default NativeWind.
- Do not create scripts that are not expected in production.
- If the user asks for a code snippet, provide a complete and functional code snippet.
- If the user asks for a code snippet, do not add any comments unless the user specifies.

# Other Rules
- More rules are available in the repository
- you can modify the meta rules of this repository
- You can add more rules to the repository if the user specifies, if so, follow the format in create-rules.mdc
- Whenever you add a file or a folder, update the architecture.instructions.mdc file

