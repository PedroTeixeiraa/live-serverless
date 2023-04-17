"use strict"

const AWS = require("aws-sdk")

const updateItem = async (event) => {

  const { itemStatus } = JSON.parse(event.body)
	const { id } = event.pathParameters

  const dynamodb = new AWS.DynamoDB.DocumentClient()

  const params = {
    TableName: "ItemTableNew",
    Key: { id },
    UpdateExpression: 'set itemStatus = :itemStatus',
    ExpressionAttributeValues: {
      ':itemStatus': itemStatus
    },
    ReturnValues: "ALL_NEW"
  }
    
  await dynamodb.update(params).promise()

  return {
    statusCode: 200,
    body: {
			message: 'Updated Item'
		}
  }

}

module.exports = {
    handler:updateItem
}