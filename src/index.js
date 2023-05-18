import React, {useEffect, useState, useRef} from "react";
const moment = require("moment");

const endURL = "http://localhost:3002";
// const endURL = "https://sign.easyly.com";


const ContractEditor = ({publishKey,subAccountSID,id,marketplaceTemplateId,color,type,fileURL,name,tags,onSave}) => {
    var url = endURL+"/editor/edit?PK="+publishKey+"&subAccountSID="+subAccountSID+"&id="+id+"&marketplaceTemplateId="+marketplaceTemplateId+"&color="+color+"&type="+type+"&fileURL="+encodeURIComponent(fileURL)+"&name="+name+"&tags="+encodeURIComponent(JSON.stringify(tags));

    // useEffect((e) => {
        window.addEventListener("message", (event)=>{
            try{
                var data = JSON.parse(event.data);
                if(data?.type == "onSave" && onSave){
                    onSave(data?.data);
                }
            }catch(e){

            }
        }, false);
    // },[])

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractSign = (props) => {
    var url = endURL+"/editor/sign/"+props?.contractKey+"/?PK="+props?.publishKey+"&tags="+encodeURIComponent(JSON.stringify(props?.tags));

    // useEffect((e)=>{
        window.addEventListener("message", (event)=>{
            try{
                var data = JSON.parse(event.data);
                if(data?.type == "onSubmit" && props?.onSubmit){
                    props?.onSubmit(data?.data);
                }
            }catch(e){

            }
        }, false);
    // },[])

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractView = (props) => {
    var url = endURL+"/editor/view?PK="+props?.publishKey+"&subAccountSID="+props?.subAccountSID+"&id="+props?.id+"&color="+props?.color+"&r="+moment().unix();

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};

export {ContractEditor,ContractSign,ContractView};