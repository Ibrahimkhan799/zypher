# Serverifier

A library to use server functions inside a client application.

## Installation

To install the library, use npm:

```bash
npm install serverifier@latest
```

<hr/>

<h1>Usage</h1>

```js
const Serverifier = require("serverifier");
// initialize the server
Serverifier.init();

// Set a route with sample data
Serverifier.setRoute("/api/sample", { message: "Hello, world!" });
```

<hr/>

<h1>API</h1>
<br/>
<br/>
<h3>init(port, route)</h3>
<span>Initialize the server with an optional port (default is 3000) and an optional base route (default is '/').</span>

```js
Serverifier.init(4000, "/app");
```

<h3>setRoute(api, data)</h3>
<span>Set a route with the specified API endpoint and response data.</span>

```js
Serverifier.setRoute("/api/custom", { custom: "data" });
```

<hr/>

<h1>License</h1>
<br/>
<br/>
<h3>This project is licensed under the MIT License - see the <a href="#">LICENSE</a> file for details.</h3>
