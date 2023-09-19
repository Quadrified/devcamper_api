# Devcamper API
<hr />

### Steps to create and connect MongoDB:
- Log in to MongoDB
- Click Database > Create a cluster > Shared Cluster
- After creating cluster
  - Under Security 
    - Database Access > Add a user
      - Built-in Role > Read and Write from any DB
    - Network Access
      - Under IP Access List > Edit > Select Current IP Address > Confirm
- Download MongoDB Compass and install
- After installing Compass
  - Inside MongoDB Atlas > Click Connect > Connect with Compass > Copy Connection String
  - Paste Connection String in Compass > Save and Connect
- Install mongoose
  - Connect via ```db.js```

`Note: From the Mongoose 6.0 onwards: useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. Please remove these options from your code.`

<hr />

### Add colors to console
- Install ```colors.js``` and configure on ```server.js```

<hr />

### Add Geocoder API
- Go to [Geocoder](https://developer.mapquest.com/user/me/profile)
- Create a new account
- Got to Edit Keys
- Select "My Application" > copy "Consumer Key"
- Add to env file 
  - GEOCODER_PROVIDER=mapquest
  - GEOCODER_API_KEY=<Copied Consumer Key>
- Create `geocoder` utility file 
- Import `geocoder` in Models and use 

<hr />

### API variations
- Get `bootcamps` data can have
  - select
  - filter
  - sort
  - paginate
  - limits