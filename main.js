const fs = require("fs");
//const final = {};
const JSON_OUTPUT_FILE_PATH = './data.json'

function todo(connection, sql, ) {

    connection.query(sql, [true], (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        fs.writeFile(JSON_OUTPUT_FILE_PATH, JSON.stringify(results), "utf8", err => {
            if (err) {
                console.error(err)
            }
            return results;
        })
    });
}


async function myfunction(connection) {
    let sql = `select * from Movie`
  let answer =  await todo(connection, sql)
  return answer
}

module.exports.myfunction = myfunction;