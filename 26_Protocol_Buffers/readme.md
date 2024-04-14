# Protocol Buffers

1. First came the **csv** to structure the data. it has some advantages and disadvantages. we cannot add list or array in it.
2. then came the JSON representation of data. it is good but not possible to do domentation,comments, can fall in indentation hell.
3. Protocol Buffers :- it is another representation of data. it is human redable and conveted to binary format . even having the overhead of converting it to binary it has follwing capabilities over XML and JSON.
![alt text](/images/img_1.png)

**Defination** :- **Protocol Buffers**, also known as Protobuf, is a method developed by Google for serializing structured data. It is a language-agnostic, platform-neutral, extensible mechanism for serializing structured data – think of it as a way to encode data in a compact binary format for transmission between systems.

## Main Features

1. **Schema Definition Language (SDL)**: Protocol Buffers use an Interface Definition Language (IDL) to define the structure of the data to be serialized. This schema defines the messages (the data structures) and their fields. The schema is written in a language-independent format.

2. **Binary Encoding**: Protocol Buffers encode data in a binary format, making it more compact and faster to serialize and deserialize compared to textual formats like JSON or XML.

3. **Language Support**: Google provides Protocol Buffers compilers for several programming languages including C++, Java, Python, Go, and others. These compilers generate code that allows developers to easily work with Protocol Buffers in their preferred language.

4. **Backward and Forward Compatibility**: Protocol Buffers support evolving schemas without breaking compatibility. New fields can be added to messages without affecting existing clients, and old fields can be ignored by newer clients.

# why protocol bufferes are used ?
![alt text](/images/img_2.png)
1. Protocol bufffers are used to share the data from one server written in differnt language to different sevrer written in different languages.

2. so the .prc file of protocol buffer can be converted to any language code and that code can ve used to make the binary data.

![alt text](/images/img_3.png)
1. here the android java client is sending teh proto request which is nothing but the binary format and the grpc server will desearialze it and understand it.

# Defaults in message.

 ```
 message MyMessage {
    int32 field1 = 1;
    string field2 = 2;
    bool field3 = 3 [default = true];
}
```

1. so if any server forgot to set the field1 then it will be empty and searlization binary code will not include field1. But at the time of deserization in grpc server , it will make the myMessage object as per the schema so it will make the field1 to set the default value.
By doing this the overhead of carrying the unset values is reduced.


