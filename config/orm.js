const con = require('./connection');

var orm = {
    getAll: (cb) => {
        var query = `select * from burgers`;
        con.query(query, (err, data)=>{
            if(err) throw err;
            //console.log(data)
            cb(data);
        })
    },
    add: (name) => {
        var query = `insert into burgers(name,eaten) values(?,0);`
        con.query(query,[name],(err, data)=>{
            if(err) throw err;
            console.log(data)
        })
    },
    update: (id,eaten) => {
        var query = `update burgers set eaten = ? where id = ?`;
        con.query(query, [id,eaten], (err, data)=>{
            if(err) throw err;
            console.log(data)
        })
    }
}

module.exports = orm;

// orm.getAll();

// orm.add('sweet potato');