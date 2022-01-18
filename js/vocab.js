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
    { term:'External Stylesheet', definition:' A separate CSS file that can be accessed by creating a link within the head section of the webpage', language:'html' },
    { term:'Comments', definition:'Section of text within the editor that do not affect the code. Can be used to give developers specific information', language:'html' },
    { term:'Basic Selectors', definition:'Select elements based on name, id or class', language:'html' },
    { term:'Multiple Selectors', definition:' When you apply the same styles to several different elements without repeating the styles in your stylesheet.', language:'html' },
    { term:'Descendent Selector', definition:'A way to select elements that are located somewhere underneath other elements', language:'html' },
    { term:'Direct-Child Selector', definition:'', language:'html' },
    { term:'Specificity', definition:'the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied', language:'html' },
    { term:'Inheriting Styles', definition:'A CSS keyword that causes the element for which it is specified to take the computed value of the property from its parent element', language:'html' },
    { term:'Box Model', definition:'A box that wraps around every HTML element', language:'html' },
    { term:'Floating Elements', definition:'Applies to the elements that generate boxes that are not absolutely positioned', language:'html' },
    { term:'Relative Positioning', definition:'A point defined with reference to another position, either fixed or moving', language:'html' },
    { term:'Absolute Positioning', definition:'When the element is taken completely out of the normal flow of the page layout', language:'html' },
    { term:'Fixed Positioning', definition:' the position of a given box relative to the window and remains in its specified location even as the content scrolls underneath it', language:'html' },

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

    { term:'Java', definition: 'A general-purpose computer programming language designed to produce programs that will run on any computer system', language:'java' },
    { term:'Components of Java', definition:'What makes up the Java architecture such as Java Virtual Machine (JVM), Java Runtime Environment (JRE) and Java Development Kit (JDK)', language:'java' },
    { term:'Statement', definition:'instructions that tell the programming language what to do', language:'java' },
    { term:'Data Types', definition:' a set of values and a set of operations defined on those values', language:'java' },
    { term:'Casting', definition:'A method or process that converts a data type into another data type in both ways manually and automatically', language:'java' },
    { term:'Methods', definition:'a set of instructions that can be called for execution using the given name', language:'java' },
    { term:'Method Overloading', definition:'A concept of Java in which we can create multiple methods of the same name in the same class, and all methods work in different ways', language:'java' },
    { term:'Recursion', definition:'The technique of making a function call itself', language:'java' },
    { term:'Class', definition:'A template used to create objects and to define object data types and methods', language:'java' },
    { term:'Field', definition:'A variable inside a class', language:'java' },
    { term:'Object', definition:'a member (also called an instance) of a Java class. Each __ has an identity, a behavior and a state. The state of an __ is stored in fields (variables), while methods (functions) display the __ behavior', language:'' },
    { term:'Instance Field', definition:'A variable that is bound to the object itself. It can be used in the object without the need to use accessors, and any method contained within the object may use it', language:'java' },
    { term:'Static Field', definition:'The declaration for a variable (field) that will be held in common by all instances of a class', language:'java' },
    { term:'Constructor', definition:'A special method that is called when an object is instantiated', language:'java' },
    { term:'Visibility', definition:'Public, protected, (default), private. The four levels of Java __', language:'java' },
    { term:'Inheritance', definition:'A concept that acquires the properties from one class to other classes; for example, the relationship between father and son', language:'java' },
    { term:'Polymorphism', definition:'The ability of an object to take many forms. Simply put, __ in java allows us to perform the same action in many different ways', language:'java' },
    { term:'Overriding', definition:'a feature that allows a subclass or child class to provide a specific implementation of a method that is already provided by one of its super-classes or parent classes', language:'java' },
    { term:'Final Keyword', definition:'a non-access specifier that is used to restrict a class, variable, and method', language:'java' },
    { term:'Abstract Class', definition:'A class which cannot be instantiated, meaning you cannot create new instances of this class', language:'java' },
    { term:'Abstract Method', definition:'A method that has just the method definition but does not contain implementation. A method without a body', language:'java' },
    { term:'Interface', definition:'A reference type in Java similar to class. The collection of abstract methods', language:'java' },
    { term:'Collection', definition:'An object that can hold references to other objects', language:'java' },
    { term:'ArrayList', definition:'A resizable array, which is present in the java. util package', language:'java' },
    { term:'HashMap', definition:'a non-synchronized class of the Java Collection Framework that contains null values and keys. Used when unique keys are available for the data we want to store', language:'java' },
    { term:'Annotations', definition:'A form of syntactic metadata that can be added to Java source code', language:'java' },
    { term:'Exceptions', definition:'An event, which occurs during the execution of a program, that disrupts the normal flow of the program\'s instructions. When an error occurs within a method, the method creates an object and hands it off to the runtime system', language:'java' },
    { term:'File', definition: 'A Java class -- is a -- (with the . class filename extension) containing Java bytecode that can be executed on the Java Virtual Machine (JVM)', language:'java' },
    { term:'Path', definition:'An absolute __ contains the full __ from the root of the file system down to the file or directory it points to', language:'java' },
    { term:'JAR File', definition:'', language:'java' },
    { term:'Dependencies', definition:'The concept in which objects get other required objects from outside', language:'java' },
    { term:'Maven', definition:'A build automation tool used primarily for Java projects', language:'java' },
    { term:'JUnit', definition:'A Java unit testing framework that\'s one of the best test methods for regression testing', language:'java' },
    { term:'Servlets', definition:'', language:'java' },
    { term:'Tomcat', definition:'An application server from the Apache Software Foundation that executes Java servlets and renders Web pages that include Java Server Page coding', language:'java' },
    { term:'JSP', definition:'a Java document used to dynamically generate a webpage using Jakarta Server Pages functions', language:'java' },
    { term:'JSTL', definition:'JavaServer Pages Standard Tag Library. A collection of custom JSP tag libraries that provide common Web development functionality', language:'java' },
    { term:'MVC', definition:'A software design pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements.The Model The View and The Controller', language:'java' },
    { term:'Data Access Object (DAO)', definition:'A object/interface, which is used to access data from database of data storage', language:'java' },
    { term:'Cookies', definition:'A small amount information sent by a web server to a web client', language:'java' },
    { term:'Session', definition:'A state consisting of several requests and response between the client and the server', language:'java' },
    { term:'JDBC (Java Database Connectivity)', definition:'An application programming interface for the programming language Java, which defines how a client may access a database', language:'java' },
    { term:'Hashing', definition:' Applying an irreversible mathematical function to an input string to produce an output string', language:'java' },
    { term:'Encryption', definition:' applying a reversible function to an input to produce an output that can later be decoded', language:'java' },

    { term:'MySQL', definition:'', language:'mysql' },
    { term:'Query', definition:'', language:'mysql' },
    { term:'Database', definition:'', language:'mysql' },
    { term:'Schema', definition:'', language:'mysql' },
    { term:'Primary Keys', definition:'', language:'mysql' },
    { term:'Foreign Keys', definition:'', language:'mysql' },
    { term:'Join', definition:'', language:'mysql' },
    { term:'Inner Join', definition:'', language:'mysql' },
    { term:'Left Join', definition:'', language:'mysql' },
    { term:'Right Join', definition:'', language:'mysql' },
    { term:'Subqueries', definition:'', language:'mysql' },
    { term:'One-to-Many', definition:'', language:'mysql' },
    { term:'Many-to-Many', definition:'', language:'mysql' },
    { term:'Spring', definition:'', language:'mysql' },

    { term:'Controllers', definition:'', language:'spring' },
    { term:'Views', definition:'', language:'spring' },
    { term:'Repository', definition:'', language:'spring' },
    { term:'JPA', definition:'', language:'spring' },
    { term:'Dependency Injection', definition:'', language:'spring' },
    { term:'Relationships', definition:'', language:'spring' },
    { term:'Form Model Binding', definition:'', language:'spring' },
    { term:'Services', definition:'', language:'spring' },
    { term:'Security', definition:'', language:'spring' },
    { term:'Integration Tests', definition:'', language:'spring' },
    { term:'CRUD', definition:'', language:'spring' },
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


vocabulary.forEach((item, i) => {
    item.id = i + 1;
});

// const url = "https://codeupvocabulary-default-rtdb.firebaseio.com/vocabulary.json";
//     async function postVocab() {
//         for (let i = 0; i < vocabulary.length; i++) {
//          let id = [];
//          id.unshift
//             await fetch(url, {
//                 method: "post",
//                 body: JSON.stringify(vocabulary[i])
//             });
//             console.log(vocabulary[i]);
//         }
//     }

    // postVocab().then(()=> console.log("all data has been posted"))

// const deleteUrl = https://codeupvocabulary-default-rtdb.firebaseio.com/vocabulary/-MtEbvqMNPrWB-orTTQU.json



