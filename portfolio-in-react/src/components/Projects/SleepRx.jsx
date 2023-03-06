const SleepRx = () => {
  return (
    <div className="sleeprx">
      <h1>Sleep Rx</h1>
      <h2>About This Project</h2>
      <p>
        Used ​PostgreSQL​ database to have customizable and relational data
        stored in order to persist user’s data, support sufficient CRUD
        operations based on client input, allowing efficient scalability while
        preventing data redundancy and conforming with the ACID standard.
        Configured an Express server to utilize its single-threaded to handle
        many concurrent requests and would allow users to query existing and new
        data from the main REST API. Configured custom Webpack to minimize
        dependencies in the application allowing for rapid build iteration using
        dev mode with hot-module reloading, transpilation of React / ES6+
        syntax, and reducing bundle size via uglification/minification so our
        application was allowed to quickly and simply update along with our
        changes, creating a smooth and responsive development process.
      </p>
    </div>
  );
};

export default SleepRx;
