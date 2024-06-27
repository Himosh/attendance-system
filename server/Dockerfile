FROM openjdk:21

EXPOSE 8080

COPY server/target/attendance-system-server.jar attendance-system-server.jar

ENTRYPOINT ["java", "-jar", "/attendance-system-server.jar"]