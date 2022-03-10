Based on this:

https://betterprogramming.pub/testing-nodejs-apps-that-interact-with-external-apis-with-nock-97e1957e4130

had to make minor changes to this example:

first needed to use an older version of node-fetch, because newer version doesn't support commonJs module system:

```
npm install node-fetch@2
```

https://betterprogramming.pub/testing-nodejs-apps-that-interact-with-external-apis-with-nock-97e1957e4130



also replaced `jest` witch `mocha`

also used `chai` syntax.

Also split the app code into app.js and server.js, so that the listener code is in the server.js. Otherwise it causes the test to hang.