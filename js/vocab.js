const vocabulary = [
    { term:'HTML', definition:'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.', language:'html' },
    { term:'Block-Level Element', definition:'occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents,', language:'html' },
    { term:'Inline Element', definition:' those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content', language:'html' },
    { term:'Void Element', definition:'An element whose content model never allows it to have contents under any circumstances', language:'html' },
    { term:'Attributes', definition:'A modifier of an HTML element type', language:'html' },
    { term:'Nesting Element', definition:'The children of their parent container', language:'html' },
    { term:'List', definition:'A method of storing information in ordered, unordered or numbered variations', language:'html' },
    { term:'Anchor', definition:'A piece of text which marks the beginning and/or the end of a hypertext link', language:'html' },
    { term:'Image', definition:'A common tag for presenting pictures on the front end', language:'html' },
    { term:'Forms', definition:'A section of a document which contains controls such as text fields, password fields, checkboxes, radio buttons, submit button, menus etc.', language:'html' },
    { term:'Method', definition:'used to specify the HTTP method used to send data while submitting the form ie GET and POST', language:'html' },
    { term:'Action', definition:'An attribute defines what should happen to data when a form is submitted on a web page', language:'html' },
    { term:'Query String', definition:'A set of characters input to a computer or Web browser and sent to a query program to recover specific information from a database', language:'html' },
    { term:'Submitting', definition:'The characteristic if an input where it receives all given information', language:'html' },
    { term:'Inputs', definition:'An HTML element is used to create interactive controls for web-based forms in order to accept data from the user', language:'html' },
    { term:'Text Inputs', definition:'The input tag specifies a field where the user can enter data.', language:'html' },
    { term:'Text Areas', definition:'A tag that defines a multi-line text input that can hold an unlimited number of characters', language:'html' },
    { term:'Checkboxes and Radio Buttons', definition:'A graphical control element(s) that allows the user to choose only one of a predefined set of mutually exclusive options', language:'html' },
    { term:'Selects', definition:'A dropdown list of values that a user can choose from', language:'html' },
    { term:'Hidden Inputs', definition:'The action that defines an input so that selected elements cannot be seen', language:'html' },
    { term:'Name and Value', definition:'descriptors used for inputs and divs. Used refernce elements in Java and JavaScript', language:'html' },
    { term:'Disabled', definition:'A setting for an attribute that can be used to keep a user from using the element until some other condition has been met ', language:'html' },
    { term:'Labels', definition:'A tag that defines a text for the input tag', language:'html' },
    { term:'CSS', definition:'Cascading Style Sheets', language:'html' },
    { term:'Element Style Attribute', definition:'The style attribute specifies an inline style for an element', language:'html' },
    { term:'Inline/Embedded Stylesheet', definition:'A term that refers to style sheet information being applied to the current element', language:'html' },
    { term:'External Stylesheet', definition:'', language:'html' },
    { term:'Comments', definition:'', language:'html' },
    { term:'Basic Selectors', definition:'', language:'html' },
    { term:'Multiple Selectors', definition:'', language:'html' },
    { term:'Descendent Selector', definition:'', language:'html' },
    { term:'Direct-Child Selector', definition:'', language:'html' },
    { term:'Specificity', definition:'', language:'html' },
    { term:'Inheriting Styles', definition:'', language:'html' },
    { term:'Box Model', definition:'', language:'html' },
    { term:'Floating Elements', definition:'', language:'html' },
    { term:'Relative Positioning', definition:'', language:'html' },
    { term:'Absolute Positioning', definition:'', language:'html' },
    { term:'Fixed Positioning', definition:'', language:'html' },

    { term:'JavaScript', definition:'', language:'' },
    { term:'Boolean', definition:'', language:'' },
    { term:'Strings', definition:'', language:'' },
    { term:'Operator', definition:'', language:'' },
    { term:'Logical', definition:'', language:'' },
    { term:'Boolean', definition:'', language:'' },
    { term:'Comparison', definition:'', language:'' },
    { term:'Variable', definition:'', language:'' },
    { term:'Constant', definition:'', language:'' },
    { term:'Use Strict', definition:'', language:'' },
    { term:'Function', definition:'', language:'' },
    { term:'Argument', definition:'', language:'' },
    { term:'Parameter', definition:'', language:'' },
    { term:'Function Scope', definition:'', language:'' },
    { term:'Global Variables', definition:'', language:'' },
    { term:'Local Variables', definition:'', language:'' },
    { term:'Immediately-Invoked Function Expression (IIFE)', definition:'', language:'' },
    { term:'Conditionals', definition:'', language:'' },
    { term:'Unit Test', definition:'', language:'' },
    { term:'Loops', definition:'', language:'' },
    { term:'Arrays', definition:'', language:'' },
    { term:'Objects', definition:'', language:'' },
    { term:'Browser Object Model', definition:'', language:'' },
    { term:'Document Object Model', definition:'', language:'' },
    { term:'jQuery', definition:'', language:'' },
    { term:'Ajax Request', definition:'', language:'' },
    { term:'JavaScript Object Notation (JSON)', definition:'', language:'' },
    { term:'Promises', definition:'', language:'' },
    { term:'RESTful API Requests', definition:'', language:'' },
    { term:'Java', definition:'', language:'' },
    { term:'Components of Java', definition:'', language:'' },
    { term:'Statement', definition:'', language:'' },
    { term:'Data Types', definition:'', language:'' },
    { term:'Casting', definition:'', language:'' },
    { term:'Methods', definition:'', language:'' },
    { term:'Method Overloading', definition:'', language:'' },
    { term:'Recursion', definition:'', language:'' },
    { term:'Class', definition:'', language:'' },
    { term:'Field', definition:'', language:'' },
    { term:'Object', definition:'', language:'' },
    { term:'Instance Field', definition:'', language:'' },
    { term:'Static Field', definition:'', language:'' },
    { term:'Constructor', definition:'', language:'' },
    { term:'Visibility', definition:'', language:'' },
    { term:'Inheritance', definition:'', language:'' },
    { term:'Polymorphism', definition:'', language:'' },
    { term:'Overriding', definition:'', language:'' },
    { term:'Final Keyword', definition:'', language:'' },
    { term:'Abstract Class', definition:'', language:'' },
    { term:'Abstract Method', definition:'', language:'' },
    { term:'Interface', definition:'', language:'' },
    { term:'Collection', definition:'', language:'' },
    { term:'ArrayList', definition:'', language:'' },
    { term:'HashMap', definition:'', language:'' },
    { term:'Annotations', definition:'', language:'' },
    { term:'Exceptions', definition:'', language:'' },
    { term:'File', definition:'', language:'' },
    { term:'Path', definition:'', language:'' },
    { term:'JAR File', definition:'', language:'' },
    { term:'Dependencies', definition:'', language:'' },
    { term:'Maven', definition:'', language:'' },
    { term:'JUnit', definition:'', language:'' },
    { term:'Servlets', definition:'', language:'' },
    { term:'Tomcat', definition:'', language:'' },
    { term:'JSP', definition:'', language:'' },
    { term:'JSTL', definition:'', language:'' },
    { term:'MVC', definition:'', language:'' },
    { term:'Data Access Object (DAO)', definition:'', language:'' },
    { term:'Cookies', definition:'', language:'' },
    { term:'Session', definition:'', language:'' },
    { term:'JDBC', definition:'', language:'' },
    { term:'Hashing', definition:'', language:'' },
    { term:'Encryption', definition:'', language:'' },
    { term:'MySQL', definition:'', language:'' },
    { term:'Query', definition:'', language:'' },
    { term:'Database', definition:'', language:'' },
    { term:'Schema', definition:'', language:'' },
    { term:'Primary Keys', definition:'', language:'' },
    { term:'Foreign Keys', definition:'', language:'' },
    { term:'Join', definition:'', language:'' },
    { term:'Inner Join', definition:'', language:'' },
    { term:'Left Join', definition:'', language:'' },
    { term:'Right Join', definition:'', language:'' },
    { term:'Subqueries', definition:'', language:'' },
    { term:'One-to-Many', definition:'', language:'' },
    { term:'Many-to-Many', definition:'', language:'' },
    { term:'Spring', definition:'', language:'' },
    { term:'Controllers', definition:'', language:'' },
    { term:'Views', definition:'', language:'' },
    { term:'Repository', definition:'', language:'' },
    { term:'JPA', definition:'', language:'' },
    { term:'Dependency Injection', definition:'', language:'' },
    { term:'Relationships', definition:'', language:'' },
    { term:'Form Model Binding', definition:'', language:'' },
    { term:'Services', definition:'', language:'' },
    { term:'Security', definition:'', language:'' },
    { term:'Integration Tests', definition:'', language:'' },
    { term:'CRUD', definition:'', language:'' },
];

function showVocabulary(){
        let html = "";
    vocabulary.forEach((word) => {
        html += '<h3>'+ word.term + '</h3>' +
            '<p>'+ word.definition + '</p>' +
            '<em>'+ word.language + '</em>'

    })
    $('#term').append(html);
}

showVocabulary(vocabulary);


// const url = "https://codeupvocabulary-default-rtdb.firebaseio.com/vocabulary.json";
//     async function postVocab() {
//         for (let i = 0; i < vocabulary.length; i++) {
//             await fetch(url, {
//                 method: "post",
//                 body: JSON.stringify(vocabulary[i])
//             });
//             console.log(vocabulary[i]);
//         }
//     }

    // postVocab().then(()=> console.log("all data has been posted"))

// const deleteUrl = https://codeupvocabulary-default-rtdb.firebaseio.com/vocabulary/-MtEbvqMNPrWB-orTTQU.json



