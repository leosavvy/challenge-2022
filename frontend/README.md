# panqueque-naranja-front

This project was generated with [superplate](https://github.com/pankod/superplate).

## Getting Started

superplate is a Next.js all-in-one project generator. Create your project with the tools you need without spending hours on setting them up.

Every plugin comes with an example to give you a brief knowledge about their usage.

## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

### Linting & formatting your code.

```bash
    npm run lint
```

### Running your tests.

```bash
    npm run test
```

## Deployment Panqueque Web App

### Requirements

Create terraform.tfvars file

1.- Change directory
```
$ cd terraform\webapp
```

2.- Terraform tfvars strcuture
```
project = "PROJECT NAME"
environment = "ENVIRONMENT"
location = "LOCATION"
resource_group = "RESOURCE GROUP NAME"
docker_image = "PACKAGE NAME/DOCKE IMAGE NAME"
docker_image_tag = "DOCKER IMAGE VERSION"

azurecr_domain = "URL AZURE CONTAINER REGISTRY.azurecr.io"
azurecr_username = "USERNAME"
azurecr_password = "PASSWORD"
```

### Deploy Web app with basic infrastructure

1.- Change directory
```
$ cd terraform\webapp
```

2.- Execute Terraform commands
```
$ terraform init
$ terraform plan
$ terraform apply -auto-approve
```

### Destroy basic web app
```
$ terraform destroy -auto-approve
```

### Healtcheck Web App
```
Browser to http://desarrollo-dockerapp.azurewebsites.net
```



## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).

### **CSS / styled-jsx**

Next.js comes with built-in support for CSS and styled-jsx. Styled-jsx is full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).

[Go To Documentation](https://github.com/vercel/styled-jsx)

### **Axios**

Promise based HTTP client for the browser and node.js.

[Go To Documentation](https://github.com/axios/axios)

### **Storybook**

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Go To Documentation](https://storybook.js.org/docs/react/get-started/introduction)

### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)

### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)

### **lint-staged**

The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)

### **Testing Library**

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils.

[Go To Documentation](https://testing-library.com/docs/)

### **Docker**

Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

[Go To Documentation](https://www.docker.com/get-started)

### **Azure Pipelines**

Azure Pipelines automatically builds and tests code projects to make them available to others. It works with just about any language or project type. Azure Pipelines combines continuous integration (CI) and continuous delivery (CD) to constantly and consistently test and build your code and ship it to any target.

[Go To Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)

## License

MIT
