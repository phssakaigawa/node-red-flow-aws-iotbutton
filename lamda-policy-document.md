# AWS LambdaへのPolicy Document 設定

### Policy Document全体

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "arn:aws:logs:*:*:*"
    },
    {
      "Effect": "Allow",
      "Action": [
            "iot:Publish"
      ],
            "Resource": "arn:aws:lamda:*:*:*"
    }
  ]
}
```

### 今回追加した差分
```
    {
      "Effect": "Allow",
      "Action": [
            "iot:Publish"
      ],
            "Resource": "arn:aws:lamda:*:*:*"
    }
```