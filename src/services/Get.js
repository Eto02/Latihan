import axios from 'axios';
import{OnlineRoot,RootPath} from './Config'

const Get =(path,root,data)=>{
    const promise = new Promise((resolve,reject)=>{
        axios.get(`${root?OnlineRoot:RootPath}/${path}`,{params:data})
        .then((res)=>{
            resolve(res.data)
        },(err)=>{
            reject(err)
        })
    })
    return promise;
}

export default Get;