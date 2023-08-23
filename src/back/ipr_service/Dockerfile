FROM maven:3.8-openjdk-17 as maven
WORKDIR /app
COPY . /app
RUN mvn install

FROM openjdk:17.0.2-jdk
WORKDIR /app
COPY --from=maven /app/target/ipr-1.0.jar app.jar
EXPOSE 8002
CMD java -jar app.jar