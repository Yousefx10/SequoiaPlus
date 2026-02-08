/*

    THIS FILE IS USED TO DEFINE THE KITS (ELEMENTS)

    Version: 0.0.1;

 */



const KITS_general_properties = {
    visible:true,
    color: "black",

}


const Kits = {};


Kits.Label = {
    tag: "p",
    supportProperties:["visible","color","text"],
    defaultProperties: { ...KITS_general_properties, text: "New Label" },
    apply(el, props) { el.textContent = props.text; }
};

Kits.Button = {
    tag: "button",
    defaultProps: { ...CommonProps, text: "Button" },
    apply(el, props) { el.textContent = props.text; }
};