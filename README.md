# ASP.NET Core 6.0 + React Native + MongoDB

This is an example implementation of an ASP.NET Core 6.0 webserver with React Native with Expo serving as the frontend and MongoDB as the database.

The `ASP.NET_ReactNative/` directory contains the project, and `Tests/` includes tests for the project.

#### Install required dependencies:

```
dotnet restore
```

#### Run webserver:

```
dotnet run
```

#### React Native Frontend

React Native project is in `ClientApp/`

I'm using Google Maps API to render the map, you will need to create your own API key and add it `.env` in `ClientApp/`.

#### .env:
```
GOOGLE_MAPS_API_KEY=[Your API Key here]
```

##### Install Dependencies:
```
npm install
```

##### Start Server:

```
npm start
```
