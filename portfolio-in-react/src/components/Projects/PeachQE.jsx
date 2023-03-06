const PeachQE = () => {
  return (
    <div className="peachqe">
      <h1 className="peachqe-title">PeachQE</h1>
      <h2>About This Project</h2>
      <p>
        Engineered a GraphQL developer tool / Query Explorer for visualizing and
        analyzing GraphQL queries to allow users to compare multiple queries and
        explore custom generated schemas and render results in order that
        provide users a simple and clean way to display query responses and
        visualize aspects of the Relay environment, our team also decided to add
        additional developer tools for those who choose to explore GraphQL with
        Relay. Implemented the Relay environment to take advantage of its
        opinionatedness and structure. The application displays aspects of
        Relay’s unique characteristics by dissecting its flow at runtime. This
        gives users greater clarity on their query flow in a visual environment.
        This visualization has been missing from the Relay client while other
        GraphQL clients already have them. Established an Electron base to build
        multi-platform desktop applications utilizing IPC communication protocol
        facilitating secure, asynchronous, and efficient data flow from server
        to client, providing optimized data interaction while bypassing a
        server-side infrastructure, reinforcing data protection, and maximizing
        desktop user capability. Constructed a React structure of reusable
        components for Front-End UI following the atomic design principles to
        ensure consistency and modularity across the application codebase
        achieving full site coverage and reducing overall component creation
        time and memory load. Leveraged React Hooks to manage state and use
        lifecycle methods within functional components to minimize the
        implementation of class-based components in favor of functional
        components to reduce file complexity and improve efficiency since the
        use of functional components greatly simplified the build process by
        bypassing the verbose amount of setting up class components required.
        Utilized React-bootstrap component library to access labor-intensive
        components and rapidly apply consistent styling for a clean and
        responsive UI that allowed for a smooth build process requiring less
        communication for styling between team members. Utilized ​Webpack​ with
        babel-loader to transpile Javascript E6+ and static code, bundling files
        and dependencies, minimizing and uglifying code. This reduced the file
        size and improved application load/render times as well as leveraged
        proxy-server configuration for hot module reloading. This implementation
        improved the development workflow by instantly updating the application
        when modifications are made in the source code, saving valuable
        development time. Structured asynchronous Axios API requests via
        re-usable middleware to offer downloadable schema files chosen by the
        user from diverse URL endpoints to allow for dynamic editing of said
        schema because quickly and easily loading a new set of schema has been a
        highly requested feature of the GraphQL community as most other GraphQL
        query explorers lack this functionality.
      </p>
    </div>
  );
};

export default PeachQE;
