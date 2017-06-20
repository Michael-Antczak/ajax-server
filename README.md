#  Node.js server
Node.js server for the Ajax exercise for the Code Your Future students in Glasgow. It is supposed to mimic a basic chatroom functionality. 

## API

Server url: http://ajax-cyf.eu-west-1.elasticbeanstalk.com/

### Requests

##### POST 
/chatroom/?id=[ID]
where ID is of your choice

You can POST message with curl:
```
curl -d "Hello there" "http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=67"
```

##### GET 
/chatroom/?id=[ID]
where ID is of your choices, i.e.
```
curl -v http://ajax-cyf.eu-west-1.elasticbeanstalk.com/chatroom/?id=67
```
