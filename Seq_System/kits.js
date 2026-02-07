/*

    THIS FILE IS USED TO DEFINE THE KITS (ELEMENTS)

    Version: 0.0.1;

 */



const KITS_general_properties = {
    visible:true,
    color: "black",

}

const kit = {
    label: {
        defaultProperties:{
            ...KITS_general_properties,
            text:"New Label"
        },
        render(kitProperties){
            const el = document.createElement("p");
            el.textContent=kitProperties.text;
            return el;
        }
    }
}