import React, {useEffect, useRef} from "react";
const moment = require("moment");

// const endURL = "http://localhost:3002";
const endURL = "https://sign.easyly.com";


const ContractEditor = ({publishKey,subAccountSID,id,marketplaceTemplateId,color,type,fileURL,name,tags,onSave}) => {
    const iframeRef = useRef(null);

    var url = endURL+"/editor/edit?PK="+publishKey+"&subAccountSID="+subAccountSID+"&id="+id+"&marketplaceTemplateId="+marketplaceTemplateId+"&color="+color+"&type="+type+"&fileURL="+encodeURIComponent(fileURL)+"&name="+name; // +"&tags="+encodeURIComponent(JSON.stringify(tags))

    useEffect(() => {
        const handleMessage = (event) => {
            try {
                var data = JSON.parse(event.data);

                // When iframe signals it's ready, send the tags
                if (data?.type == "ready") {
                    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ type: "tags", data: tags }),"*");
                }
                if (data?.type == "onSave" && onSave) {
                    onSave(data?.data);
                }
            } catch (e) {
                console.error(e);
            }
        };
        
        window.addEventListener("message", handleMessage, false);
        return () => window.removeEventListener("message", handleMessage, false);
    }, [tags, onSave]);

    return <iframe ref={iframeRef} src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractSign = (props) => {
    const iframeRef = useRef(null);

    var url = endURL+"/editor/sign/"+props?.contractKey+"/?PK="+props?.publishKey; // +"&tags="+encodeURIComponent(JSON.stringify(props?.tags))

    useEffect(() => {
        const handleMessage = (event) => {
            try {
                var data = JSON.parse(event.data);

                // When iframe signals it's ready, send the tags
                if (data?.type == "ready") {
                    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ type: "tags", data: props?.tags || [] }),"*");
                }
                if (data?.type == "onSubmit" && props?.onSubmit) {
                    props?.onSubmit(data?.data);
                }
            } catch (e) {
                console.error(e);
            }
        };
        
        window.addEventListener("message", handleMessage, false);
        return () => window.removeEventListener("message", handleMessage, false);
    }, [props]);

    return <iframe ref={iframeRef} src={url} style={{width: "100%", height: "100%", border: "1"}} />
};
const ContractView = (props) => {
    var url = endURL+"/editor/view?PK="+props?.publishKey+"&subAccountSID="+props?.subAccountSID+"&id="+props?.id+"&color="+props?.color+"&r="+moment().unix();

    return <iframe src={url} style={{width: "100%", height: "100%", border: "1"}} />
};

export {ContractEditor,ContractSign,ContractView};