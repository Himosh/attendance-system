FROM openjdk:21

EXPOSE 8080

ADD target/attendance-system-server.jar attendance-system-server.jar

ENTRYPOINT ["java", "-jar", "/attendance-system-server.jar"]