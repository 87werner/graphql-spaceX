const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema.js')
const cors = require('cors')
const path = require('path')

const app = express()

//Allow cross-origin;
app.use(cors());

app.use('/graphql',
  graphqlHTTP({
    schema,   
    graphiql: true, 
  }),
);

// has to be below GraphQL route
app,use(express.static('public'));

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));