# Deployment Instructions for Render

## Steps to Deploy the Backend

1. **Create a New Service**:
   - Go to the Render dashboard.
   - Click on "New" and select "Web Service".

2. **Connect Your Repository**:
   - Choose the repository where your backend code is hosted.

3. **Set Build Command**:
   - Enter the following command:
     ```
     npm run build
     ```

4. **Set Start Command**:
   - Enter the following command:
     ```
     npm start
     ```

5. **Add Environment Variables**:
   - Ensure to add any necessary environment variables, such as:
     - `PORT`: (default is 3001)

6. **Deploy the Service**:
   - Click on "Create Web Service" to deploy your backend.

## Commands Summary
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
