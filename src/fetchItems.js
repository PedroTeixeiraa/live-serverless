"use strict"

const AWS = require("aws-sdk")

const fetchItems = async (event) => {

	const dynamodb = new AWS.DynamoDB.DocumentClient()

	let items

	try {
		const params = {
			TableName: "ItemTableNew"
		}
		
		const results = await dynamodb.scan(params).promise()

		items = results.Items;

	} catch (error) {
		console.log(error)
	}

	return {
		statusCode: 200,
		body: JSON.stringify(items),
	}
}

module.exports = {
    handler:fetchItems
}