# FatCat Coders Homework Task

This is a homework task as a part of the techincal interview at FatCat Coders.

## Brief implementation explanation

-   Transitioning the Project to TypeScript

    -   Initial Setup: I initiated the transition to TypeScript by adding tsconfig.json, tsconfig.node.json, and vite-env.d.ts files. I also renamed vite.config.js to vite.config.ts to integrate TypeScript settings.
    -   ESLint Configuration: I modified the .eslintrc.cjs file to ensure compatibility between ESLint and TypeScript, thus enabling effective linting for TypeScript files.
    -   Component Enhancement: I updated all the components in the project to include TypeScript types, enhancing the project's type safety and overall code reliability.

-   Creating a List Component

    -   Utility Method: I implemented a request utility function using the Fetch API for streamlined HTTP requests.
    -   User Data Handling: I defined a User type to represent user data and created a function for fetching user data from an API.
    -   Custom Hook: I developed the useUsers custom hook, leveraging the React Query library, to fetch user data.
    -   ListUsers Component: I created the ListUsers component, which uses the useUsers hook to fetch and display a list of users.

-   Form Generator Component

    -   Data Types and Fetching: I established a Post type and crafted a function for fetching post data.
    -   Custom Hook for Posts: I built the usePosts hook for efficient data fetching.
    -   Form Components: I developed various components such as Input, TextArea, ErrorMessage, and Alert for building forms.
    -   Form Generator Implementation: I created the CreateForm component, designed to dynamically generate forms with validation.
    -   Post Creation Form: Utilizing the CreateForm component, I assembled the CreatePostForm, specifically tailored for adding new posts.

-   Page Generator Component

    -   Component Renaming: For ease of import, I renamed component types to be more intuitive in the PageGenerator component.
    -   Dynamic Page Generator: I implemented the PageGenerator component, designed to accept a range of props for dynamic page layout and component rendering.
    -   Example Usage: I demonstrated the use of the PageGenerator component in an ExamplePage, showcasing its dynamic capabilities.

## Getting Started

To start using the application, follow the steps below:

1. Clone the project repository to your local machine:

```bash
git clone https://github.com/trujic1000/aleksandar-trujic-fatcat-task.git
```

2. Install the project dependencies by running the following command:

```bash
npm install
```

3. Start the development server:

```
npm run dev
```

The application will now be accessible locally at http://localhost:3000.
