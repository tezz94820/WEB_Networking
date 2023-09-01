# Serverless architecture 

## 1. EC2 
    1. In this be make a server and all the configurations from whatever Ram it would take what operating system it would run on and even the cores and the threads in the CPU this all configuration is done by us. 
    2. We are solely responsible for all the configurations and all EC2 instances run every time. 
    3. So if you start ec2 instance today it will run until you stop it. 
    4. The cost of ec2 instances is per hour. 
    5. As it is on every time you can make a single connection with whatever database we are using and reserve that connection. Let's say their comes 5 users and you made the connection with the mongo DB then you can use that connection for fetching the date of from database for the next hundred to 500 users as well. 
    6. Because of this reason you can use state architectures. That means you can save the states in the CPU of the ec2 instance and you do not need to use another red is server for it. 
    7. You can use stateful web sockets with easy to instances and not with serverless architectures lambda. 

## 2. Lambda serverless architecture 
    1. This are the machine where you just give the code and it will provide you with a URL. If you run that URL that code will run. 
    2. You do not have to take care of any configurations. All the configurations of the machine, RAM all is managed by aws. 
    3. Aws will be responsible for assigning the machine to that code and providing you with the URL. 
    4. Let say you want to scale up because the number of users on your website is increaseing. We do not have to do anything. Lambda functions will automatically copy that code to more and more machines and scale up automatically. 
    5. If no use is using your code then the lambda code will be in the sleep state and if any user comes he request for that URL then that code will run again. 
    6. The cost is very low when compared to ec2 instances. Because the code is not always running it is in the sleep state. So the cost of Lambda functions is per invocation. 
    7. Here you cannot use any state full designs. You cannot use the web socket connection because it is stateful.