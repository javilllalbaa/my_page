import axios from 'axios'

export default class backendClass {
    constructor() {
        this.backend = axios.create({
            baseURL: `https://simplebackend-dmwjvq7ka.now.sh/`,
        })
        
        this.backend.defaults.headers.Accept = 'application/json'
        this.backend.defaults.headers['Content-Type'] = 'application/json'

        this.backend.interceptors.request.use((config) => {
            return config
        }, (error) => {
            console.log("Error interceptor backend", error)
            return Promise.reject(error);
        })

        this.updating = false        
        // Add a response interceptor
        this.backend.interceptors.response.use((response) => {
            return response
          }, (error) => {
            // debugger
            return Promise.reject(error)  
          })
      }

      setHandlerRefreshToken(callback) {
        this.callbackRefreshToken = callback
      }

  }