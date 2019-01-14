import JsonP from 'jsonp';
class Axios {
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function (err,response) {

                if(response.resultcode==='200'){
                    resolve(response.result);

                }else{
                    reject(response);
                }
            })
        })
    }

}

export default Axios;