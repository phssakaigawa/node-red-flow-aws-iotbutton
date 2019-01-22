// AWS Lambda function
// need replace: {your AWS IoT Endpoint}
const AWS = require("aws-sdk");
const iotData = new AWS.IotData({
    endpoint: "{your AWS IoT Endpoint}"
});
const TOPIC_NAME = "/test";

exports.handler = async (event) => {
    console.log(JSON.stringify(event));

    try {
        const clickType = event["deviceEvent"]["buttonClicked"]["clickType"];
        const params = {
            topic: TOPIC_NAME,
            payload: JSON.stringify(
                {
                    "message": `Button Clicked ${clickType}`,
                    "event": event,
                }),
            qos: 0
        };
        await iotData.publish(params).promise();
        console.log("Success!!");
        return null;
    } catch (err) {
        console.error(err);
        throw err;
    }
};