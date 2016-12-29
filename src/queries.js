const promise = require('bluebird');

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = 'postgres://postgres:ben@localhost:5432/childcare'
const db = pgp(connectionString)

function getAllRecords(req,res,next) {
  db.any('select * from family')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all records'
        })
    })
    .catch((err) => {
      return next(err)
    })
}

function getSingleRecord(req,res,next) {
  let recordID = parseInt(req.params.id)
  db.one('select * from family where id = $1', recordID)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved one record'
        })
    })
    .catch((err) => {
      return next(err)
    })
}

function getSingleRecordByTag(req,res,next) {
  db.any(("select * from family where nfctag = $1"), [req.params.id])
    .then((data) => {
      res.status(200)
        .json({
          status: (data == "" ? "no_match" : "success"),
          data: data,
          message: 'Retrieved by tag'
        })
    })
    .catch((err) => {
      return next(err)
    })
}

module.exports = {
  getAllRecords: getAllRecords,
  getSingleRecord: getSingleRecord,
  getSingleRecordByTag: getSingleRecordByTag
}
