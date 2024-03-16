# Elastic Stack
1. The Elastic Stack, also known as ELK Stack, is a collection of open-source software tools used for 1.searching, analyzing, and visualizing large volumes of data in real-time. 
2. The stack is commonly used for log and event data analysis, but it can be applied to various types of data.

**This stack has 4 main components :**
1. **Elasticsearch**: This is a distributed, RESTful search and analytics engine. It is used for storing and indexing data, making it searchable and easily retrievable. Elasticsearch is particularly powerful for full-text search and complex queries. it is used to provide search functionality to the application. it can be used to implement auto completion, correcting typos, handling synonymns.
2. **Kibana**: Kibana is a web-based user interface for visualizing and exploring data stored in Elasticsearch. It provides a variety of tools for creating dashboards, charts, and graphs, allowing users to interactively analyze and understand their data. it is a dashboard for visualization.
3. **Logstash**: Logstash is a server-side data processing pipeline that ingests data from multiple sources, processes it, and sends it to the desired output, typically Elasticsearch. It can handle various inputs, such as logs, events, and other structured data, and transform them for easier analysis.
4. **Beats**: Beats are lightweight, data shippers that send data from different sources to Logstash or Elasticsearch. There are several types of Beats, each designed for specific purposes, such as Filebeat for log files, Metricbeat for system and service metrics, and Packetbeat for network data.
so we can install one beat at server and send it's relevent files or metrics to elastic search.