import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6" id="about">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About This Project</h1>

      <div className="bg-white shadow-2xl rounded-2xl max-w-4xl p-6 flex flex-col gap-4">
        <p className="text-lg text-gray-800">
          This project is a <span className="font-semibold text-blue-800">simple CI/CD pipeline</span> designed to automate the process of testing, building, and deploying applications whenever code changes occur.
        </p>

        <p className="text-lg text-gray-800">
          The pipeline works as follows:
        </p>

        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>
            Whenever code is <span className="font-semibold">pushed</span> or <span className="font-semibold">merged into the main branch</span>, the pipeline is triggered automatically.
          </li>
          <li>
            It first runs <span className="font-semibold">unit tests</span> to ensure the new code does not break the application.
          </li>
          <li>
            If all tests pass, the application is <span className="font-semibold">containerized using Docker</span>.
          </li>
          <li>
            The Docker image is then <span className="font-semibold">pushed to a Docker registry</span> for storage and versioning.
          </li>
         <li>
  Finally, the pipeline uses <span className="font-semibold">gcloud and kubectl</span> to update the
  <span className="font-semibold"> GKE deployment</span> with the new Docker image,
  ensuring the latest version is live in the Kubernetes cluster.
</li>

        </ul>

        <p className="text-lg text-gray-800 mt-4">
          This automated CI/CD pipeline ensures that code changes are tested, packaged, and deployed efficiently without manual intervention, improving development speed and reducing human errors.
        </p>
      </div>
    </div>
  );
};

export default About;
