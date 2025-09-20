
# CI/CD Pipeline Project 

## How to Test / Contribute

Follow these steps to test and contribute to the project:

1. **Fork and Clone the Repository**  
   - Fork the repository to your GitHub account.  
   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/<your-github-username>/<repo-name>.git
     cd <repo-name>
     ```

2. **Create a Branch**  
   - Create a branch for your changes. Use the format:
     ```bash
     git checkout -b add/<your-name>
     ```

3. **Modify `data.txt`**  
   - Path: `src/asset/data.txt`  
   - Format: Each line should be like this:
     ```
     name,https://github.com/<github-username>
     ```
   - **Important:**  
     - Each line must follow the exact format above.  
     - Adding data in a wrong format will cause unit tests to fail.  
     - Modifying any other file will also fail the tests and your PR will not be accepted.

4. **Commit and Push Changes**  
   ```bash
   git add src/asset/data.txt
   git commit -m "Add my entry to data.txt"
   git push origin add/<your-name>
    ```
5. **Create a Pull Request (PR)**
   1. Go to your fork on GitHub.
   2. Create a PR to the main repository with:  
   - A descriptive title  
   - A message about yourself


## CI/CD Pipeline Workflow

Once a PR is accepted, the CI/CD pipeline executes the following workflow:

### 1. Pipeline Trigger
- Triggered automatically when a PR is merged into the `main` branch.

### 2. Environment Setup
- The pipeline creates an isolated environment to run the steps.

### 3. Install Dependencies
- **Command:** `npm install`  
- Installs all project dependencies required to build and test the application.

### 4. Unit Testing
- **Command:** `npm run test`  
- Validates the changes in `data.txt`.  
- If the test fails, the pipeline stops.

### 5. Dockerize Application
- Multi-stage Docker build:  
  1. Build the React app.  
  2. Use Nginx as the server for the React app.  
  3. Expose port 80.


### 6. Push Docker Image
- The Docker image is pushed to Docker Hub.
  ```bash
  https://hub.docker.com/repository/docker/arul8406/cicd-pipeline
  ```

### 7. Trigger Deployment
- A webhook triggers Render (or the deployment target) to deploy the new image.

**Note:** Only valid changes to `data.txt` are accepted. Any other modifications will fail the tests.

### Deployment Verification

After the pipeline completes successfully, you can verify your changes by checking the deployed application at [https://cicd-pipeline-9d09.onrender.com/](https://cicd-pipeline-9d09.onrender.com/).

```
https://cicd-pipeline-9d09.onrender.com/
```

