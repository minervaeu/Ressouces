/* =============
!     Apply or remove classes on elements
            ============= */
export default function ToggleClassOnElement(name,element,doRemove){
    if(typeof element.valueOf() == "string"){
        element = document.getElementById(element);
    }
    if(!element) return;
    if(doRemove){
        element.className = element.className.replace(new RegExp("\\b" + name + "\\b","g"));
    }else{      
        element.className = element.className + " " + name;
    }
};
                