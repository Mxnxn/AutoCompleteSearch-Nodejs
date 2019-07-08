# Auto Complete Search :

This Project has built with Express.js and Jquey AJAX by getting data from directly Mongodb in Node.js Environment.

### About Front-End :

I've used handlebars but if you want to go with html then you can.

just by removing lines mensioned below :

```javascript
const exphbs = require("express-handlebars");
```
```javascript
app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");
```

### Few steps to run this :

You'll need nodemon for restarting file after save or by typing rs in terminal

```console
sudo npm install -g nodemon
```

After that,

```console
npm install
```

and Atlast,

```console
npm run dev or nodemon server.js or node server.js
```



