const { MongoClient } = require("mongodb");

const CONN_STR = 'mongodb+srv://burlandodiego:Nys6T5RwDmJKpyKS@cluster0.y4xlwb2.mongodb.net/admin?retryWrites=true&replicaSet=atlas-135mbb-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1'

const client = new MongoClient(CONN_STR);

const database = client.db('diego');

const zaini = database.collection('zaino');

const query = {colore: 'blu'};

zaini.findOne(query)
.then( element => console.log(element))
.catch( err => console.log(err))
.finally(() => client.close());





