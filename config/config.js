const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
      process.env.MONGO_HOST ||
      "mongodb://react:react123@ds151943.mlab.com:51943/react"
  }
  
  export default config