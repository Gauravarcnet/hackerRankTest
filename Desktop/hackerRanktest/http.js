const express = require('express'),
        axios = require('axios'),
        http = require('https')
        app = express()
        axios

    //    const httpPromise  = () =>{
    //         return new Promise((resolve,reject) => {
    //             http.get('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02', (res)=>{
                  
    //                     return resolve(res)
    //             })
    //         })
    //    }
    //    httpPromise().then((res) => {
    //     console.log(res);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    //    console.log(httpPromise);
       
        

    let res = axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02')
    res.then((res)=> {
    console.log(res)
    })

    async function httpAsync() {
        let data = await axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London&appid=439d4b804bc8187953eb36d2a8c26a02')
        // console.log(data);
        return data
    } 
    console.log("after",httpAsync());
    

        
        app.listen('3005',()=>{
            console.log("gaurav");
            
        })
