/* =============
!     Creator-Function
                ============= */
export default function CreateDOMElement(options, arrayOne, arrayTwo) {
    // console.log("Entered Creator function.");
    
    // Define the possible Parameter-List with the associated variables declared
    const _parentID = options.ParentID,
    _element = options.Element,
    _type = options.Type,
    _id = options.ID,
    _class = options.Class,
    _text = options.Text,
    _for = options.For,
    _title = options.Title,
    _alt = options.Alt,
    _src = options.Src,
    _width = options.Width,
    _height = options.Height,
    _aspectRatio = options.AspectRatio,
    _min = options.Min,
    _max = options.Max,
    _value = options.Value,
    _placeholder = options.Placeholder,
    _attribute = options.Attribute;
    _attribute_value = options.AttributeValue;
    _optionsArray = arrayOne,
    _valuesArray = arrayTwo;
    
    const element = document.createElement(_element);
    
    // Properties 
    if (_id !== undefined) element.id = _id;
    if (_class !== undefined) element.classList.add(_class);
    if (_text !== undefined) element.innerText = _text;
    if (_for !== undefined) element.for = _for;
    if (_title !== undefined) element.title = _text;
    if (_alt !== undefined) element.alt = _alt;
    
    // Properties for Image-DOM-Elements
    if (_src !== undefined) element.src = _src;
    if (_width !== undefined) element.width = _width;
    if (_height !== undefined) element.height = _height;
    if (_aspectRatio != undefined) element.aspectRatio = _aspectRatio;
    
    // Properties for Input-DOM-Elements
    if (_type !== undefined) element.type = _type;
    if (_min !== undefined) element.min = _min;
    if (_max !== undefined) element.max = _max;
    if (_value !== undefined) element.min = _value;
    if (_placeholder !== undefined) element.min = _placeholder;
    
    // Attribute
    if(_attribute !== undefined) element.setAttribute(`${_attribute}`, `${_attribute_value}`);
    
    // Dropdown-Menu Generator
    // Proof if both needed Arrays were passed
    if (
    Array.isArray(_optionsArray) === true &&
    Array.isArray(_valuesArray) === true
    ) {
    let elementsPointer = 0;
    // For every value in ther first/option Array, create a dropdown option and set the correct value from the second/values Array for it
    for (let el of _optionsArray) {
        element.options.add(
        new Option(`${el}`, `${_valuesArray}`[elementsPointer])
        );
        elementsPointer++;
    }
    }
    
    // Finally, push the complete dynamically created, finished object to the DOM with appendChild!
    document.getElementById(_parentID).appendChild(element);
    
    /*
    Creator-Functions Informations:
    All types of Elements possible which you can create "the normal way" too!
    !Important: For correct functionality pass at least the ParentID (to defined where the element should appear in the DOM) & 
    the Element argument (tor define which kind of element it is)! 
    
    I recommend the following method for invoking:
    Create_DOM_Element({ParentID: "anyId", Element: "div"});
    
    Possible arguments:
    parentID, Element-Type, Input-Type, ID, Class, Text, For, Title, Alt, Src, Width, Height, AspectRatio, Min, Max, Value, Placeholder, arrayOne, arrayTwo
    
    */
    
    // console.log("New DOM-Element created.");
    };