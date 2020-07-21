(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{269:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),i=(t(0),t(281)),o={id:"lesson",title:"JavaScript Core I - 2",sidebar_label:"Lesson"},l={id:"js-core-1/week-2/lesson",title:"JavaScript Core I - 2",description:"Contents",source:"@site/docs/js-core-1/week-2/lesson.md",permalink:"/js-core-1/week-2/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-1/week-2/lesson.md",sidebar_label:"Lesson",sidebar:"JavaScriptCore1",previous:{title:"Instructor Notes",permalink:"/js-core-1/week-1/instructors"},next:{title:"Homework",permalink:"/js-core-1/week-2/homework"}},s=[{value:"Contents",id:"contents",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Expressions",id:"expressions",children:[{value:"Expression",id:"expression",children:[]},{value:"Statement",id:"statement",children:[]},{value:"Exercise (5 mins)",id:"exercise-5-mins",children:[]}]},{value:"Booleans",id:"booleans",children:[{value:"Exercise (10 mins)",id:"exercise-10-mins",children:[]}]},{value:"Comparison Operators",id:"comparison-operators",children:[{value:"Exercise (5 mins)",id:"exercise-5-mins-1",children:[]}]},{value:"Conditionals",id:"conditionals",children:[{value:"Exercise (5 mins)",id:"exercise-5-mins-2",children:[]},{value:"Exercise (10 mins)",id:"exercise-10-mins-1",children:[]}]},{value:"Logical Operators",id:"logical-operators",children:[{value:"Exercise (5 mins)",id:"exercise-5-mins-3",children:[]},{value:"Exercise (15 mins)",id:"exercise-15-mins",children:[]}]},{value:"Loops",id:"loops",children:[{value:"while loop",id:"while-loop",children:[]},{value:"Exercise (10 minutes)",id:"exercise-10-minutes",children:[]},{value:"for loop",id:"for-loop",children:[]},{value:"Exercise (10 minutes)",id:"exercise-10-minutes-1",children:[]}]},{value:"Arrays",id:"arrays",children:[{value:"Exercise (5 mins)",id:"exercise-5-mins-4",children:[]},{value:"Exercise (5 mins)",id:"exercise-5-mins-5",children:[]},{value:"Using for loops with arrays",id:"using-for-loops-with-arrays",children:[]},{value:"Exercise (10 mins)",id:"exercise-10-mins-2",children:[]},{value:"Exercise - extra credit (20 mins)",id:"exercise---extra-credit-20-mins",children:[]}]},{value:"Extra exercises",id:"extra-exercises",children:[{value:"Playing computer I",id:"playing-computer-i",children:[]},{value:"Playing computer II",id:"playing-computer-ii",children:[]},{value:"Playing computer III",id:"playing-computer-iii",children:[]}]},{value:"Glossary",id:"glossary",children:[]},{value:"Homework",id:"homework",children:[]}],c={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"contents"},"Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#expressions"}),"Expressions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#booleans"}),"Booleans")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#comparison-operators"}),"Comparison Operators")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#conditionals"}),"Conditionals")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#logical-operators"}),"Logical Operators")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#loops"}),"Loops")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#arrays"}),"Arrays")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#extra-exercises"}),"Extra exercises"))),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("p",null,"By the end of this class, you should be able to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What are expressions and statements (and what's the difference)?"),Object(i.b)("li",{parentName:"ul"},"Define what expressions and statements are and describe the difference"),Object(i.b)("li",{parentName:"ul"},"Define what was a conditional is"),Object(i.b)("li",{parentName:"ul"},"Define what ",Object(i.b)("inlineCode",{parentName:"li"},"for")," and ",Object(i.b)("inlineCode",{parentName:"li"},"while")," loops are and define the difference"),Object(i.b)("li",{parentName:"ul"},"Write an if statement using a conditional"),Object(i.b)("li",{parentName:"ul"},"Define comparator operators and list the different types"),Object(i.b)("li",{parentName:"ul"},"Use comparator operators in an ",Object(i.b)("inlineCode",{parentName:"li"},"if")," statement"),Object(i.b)("li",{parentName:"ul"},"Define what a logical operator is and give examples"),Object(i.b)("li",{parentName:"ul"},"Write functionality that uses the ",Object(i.b)("inlineCode",{parentName:"li"},"assert")," module"),Object(i.b)("li",{parentName:"ul"},"Describe what an array is and write code that interacts with them")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"expressions"},"Expressions"),Object(i.b)("p",null,"In JavaScript, there are ",Object(i.b)("strong",{parentName:"p"},"expressions")," and ",Object(i.b)("strong",{parentName:"p"},"statements"),". We will use these words frequently to describe code."),Object(i.b)("h3",{id:"expression"},"Expression"),Object(i.b)("p",null,"An expression returns a value. Sometimes we will say that an expression ",Object(i.b)("em",{parentName:"p"},"evaluates to")," a value."),Object(i.b)("p",null,"The following are all examples of expressions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'1 + 1; // returns 2\n("hello"); // returns "hello"\n2 * 4; // returns 8\n"Hello" + "World"; // returns "HelloWorld"\n')),Object(i.b)("p",null,"We can take the value produced by an expression and assign it to a variable. That line of code would be called a statement."),Object(i.b)("p",null,"Expressions can also contain variables."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetingPlanet() {\n  const planet = "Earth";\n  return `Hello ${planet}`; // returns Hello Earth\n}\n')),Object(i.b)("p",null,"You can also use expressions inside a string interpolation or as a ",Object(i.b)("inlineCode",{parentName:"p"},"return")," value."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"console.log(`2 + 4 is ${2 + 4}`); // 2 + 4 is 6\n\nfunction double(num) {\n  return num * 2; // expression being returned\n}\n")),Object(i.b)("h3",{id:"statement"},"Statement"),Object(i.b)("p",null,"A statement is some code that performs an action. Here are some examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const sum = 1 + 1; // action: assigns result of `1 + 1` to variable `sum`\nconst greeting = "hello"; // action: assigns result of the expression "hello" to variable `greeting`\nconsole.log(2 * 4); // action: logs the result of `2 * 4` to the console\nsayGreeting(greeting); // action: calls the function `sayGreeting` with the parameter `greeting`\n')),Object(i.b)("p",null,"There are some other different types of statements that we will learn in the coming weeks."),Object(i.b)("p",null,"You can run ",Object(i.b)("inlineCode",{parentName:"p"},"node")," by itself, which will open a ",Object(i.b)("em",{parentName:"p"},"node console"),", also called a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.tutorialspoint.com/nodejs/nodejs_repl_terminal.htm"}),"Read\u2013Eval\u2013Print Loop (REPL)"),"."),Object(i.b)("p",null,"This console allows you to run expressions in the console line by line and is a great way of testing bits of code before writing it in a script."),Object(i.b)("h3",{id:"exercise-5-mins"},"Exercise (5 mins)"),Object(i.b)("p",null,"In your VS Code terminal, run the command ",Object(i.b)("inlineCode",{parentName:"p"},"node")," and run the following expressions. What are their outputs? Is there anything you didn't expect? (To exit the node REPL, you have to click ",Object(i.b)("kbd",null,"Ctrl+d")," or ",Object(i.b)("kbd",null,"Cmd+D")," on Mac)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"1 + 2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"hello"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'let favouriteColour = "purple"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"favouriteColour")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console.log(favouriteColour)"))),Object(i.b)("h2",{id:"booleans"},"Booleans"),Object(i.b)("p",null,"There is another ",Object(i.b)("em",{parentName:"p"},"primitive type")," in JavaScript known as a ",Object(i.b)("strong",{parentName:"p"},"boolean")," value. A boolean is either ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", and it should be written without quotes."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let codeYourFutureIsGreat = true;\nlet thisIsATerribleClass = false;\n")),Object(i.b)("h3",{id:"exercise-10-mins"},"Exercise (10 mins)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In a node REPL, what is the ",Object(i.b)("inlineCode",{parentName:"li"},"typeof")," a ",Object(i.b)("inlineCode",{parentName:"li"},"true")," or ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"?"),Object(i.b)("li",{parentName:"ol"},"Pair up and correct the following function so that the output returns ",Object(i.b)("inlineCode",{parentName:"li"},'"You\'ve given me a bool, thanks!"'))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function boolChecker(bool) {\n  if (typeof bool === ) {\n    return "You\'ve given me a bool, thanks!";\n  }\n\n  return "No bool, not cool.";\n}\n\nboolChecker(true);\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"As a class, can you step through the function and explain what each line does?")),Object(i.b)("h2",{id:"comparison-operators"},"Comparison Operators"),Object(i.b)("p",null,"In the previous exercise, you used an ",Object(i.b)("strong",{parentName:"p"},"expression")," that returns a ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," value. This was possible because of the ",Object(i.b)("strong",{parentName:"p"},"comparison operator")," ",Object(i.b)("inlineCode",{parentName:"p"},"==="),". Using a comparison operator will always return a ",Object(i.b)("inlineCode",{parentName:"p"},"boolean")," value."),Object(i.b)("p",null,"###\xa0Assert\nWe will also be using a new keyword to make sure the comparisons we do below return ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". This is the ",Object(i.b)("inlineCode",{parentName:"p"},"assert"),"."),Object(i.b)("p",null,"When given ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", it does nothing. Nice. When given ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", it will error. It is very good for testing things you expect to be ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"Here's an expression that evaluates to a ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Can you work out what will happen with the code below?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"assert(1 > 2);\n// and...\nassert(2 < 1);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},">")," symbol in the expression is a ",Object(i.b)("strong",{parentName:"p"},"comparison operator"),". Comparison operators compare two values. This operator checks to see if the number on the left is bigger than the number on the right."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),">   greater than\n<   less than\n<=  less than or equal\n>=  greater than or equal\n=== same value and same type\n!== not the same value and type\n")),Object(i.b)("p",null,"You might see people use two other comparison operators. They are valid, but are the evil twins of ",Object(i.b)("inlineCode",{parentName:"p"},"===")," and ",Object(i.b)("inlineCode",{parentName:"p"},"!==")," and it is generally considered bad practice because of the bugs the can cause."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u2718"," - Do not use == and !=")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"== equal compares only value\n!= unequal compares only value\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u2714"," - Do use === and !==")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"=== equal compares both value and type\n!== unequal compares both value and type\n")),Object(i.b)("p",null,"If you see these, suggest people change them in pull requests."),Object(i.b)("h3",{id:"exercise-5-mins-1"},"Exercise (5 mins)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Modify the values below to have the compare function return the desired value:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const assert = require("assert");\n\nconst mentorCount = // TODO\nconst studentCount = // TODO\nassert(mentorCount < studentCount);\n\nconst capacity = 25\nconst people = // TODO\nassert(capacity > people);\n\nconst name1 = // TODO\nconst name2 = // TODO\nassert(name1 === name2);\n\nconst number1 = // TODO\nconst number2 = // TODO\nassert(number1 !== number2);\n\nconst thisNumber = // TODO\nconst thatNumber = // TODO\nassert(thisNumber === thatNumber);\n\nconst thisArray = [1, 2, 3, 4, 5];\nconst thatArray = [1, 2, 3, 4, 5];\nassert(thisArray === thatArray);\n')),Object(i.b)("p",null,"The array comparison doesn't work because JavaScript comparison only works as expected on ",Object(i.b)("inlineCode",{parentName:"p"},"number"),"s, ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"s, and ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"s."),Object(i.b)("p",null,"You need to be aware of this, and its possible for you to go deeper into array comparisons outside of the lesson, though generally remember that only ",Object(i.b)("inlineCode",{parentName:"p"},"number"),"s, ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"s, and ",Object(i.b)("inlineCode",{parentName:"p"},"boolean"),"s work with equality."),Object(i.b)("p",null,"MDN has some slightly in-depth documentation ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"}),"here"),"."),Object(i.b)("h2",{id:"conditionals"},"Conditionals"),Object(i.b)("p",null,"Like humans, computer programs make decisions based on the information given to them. ",Object(i.b)("strong",{parentName:"p"},"Conditionals")," are a way of representing these decisions in code (remember, you saw this in a previous exercise!)"),Object(i.b)("p",null,"For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In a game, if the player has 0 lives, then the game is over"),Object(i.b)("li",{parentName:"ul"},"In a weather app, if rain is forecast, a picture of rain clouds is shown")),Object(i.b)("p",null,"The most common type of conditional is the ",Object(i.b)("strong",{parentName:"p"},"if statement"),"."),Object(i.b)("p",null,"An if statement runs some code if a condition is met. If the condition is not met, then the code will be skipped."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let isHappy = true;\n\nif (isHappy) {\n  console.log("I am happy");\n}\n')),Object(i.b)("p",null,"The code in paratheses - e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"(isHappy)")," - is the condition. The condition can be ",Object(i.b)("em",{parentName:"p"},"any")," expression. The following are all valid conditions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// boolean value\nif (true) {\n  // do something\n}\n\n// variable assigned to boolean value\nlet isHappy = true;\nif (isHappy) {\n  // do something\n}\n\n// equality operator returns a boolean value\nif (1 + 1 === 2) {\n  // do something\n}\n\n// comparison operator returns a boolean value\nif (10 > 5) {\n  // do something\n}\n\n// function call returns boolean value\nif (greaterThan10(5)) {\n  // do something\n}\n")),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statement runs code when a condition is met. What if the condition is not met? Sometimes you want to run an alternative bit of code."),Object(i.b)("p",null,"An ",Object(i.b)("strong",{parentName:"p"},"if...else statement")," also runs code when the condition is ",Object(i.b)("em",{parentName:"p"},"not")," met."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let isHappy = true;\n\nif (isHappy) {\n  console.log("I am happy \ud83d\ude04");\n} else {\n  console.log("I am not happy \ud83d\ude22");\n}\n')),Object(i.b)("p",null,"What if there is more than one condition you want to handle in your function? For example, what if you can be confused as well? You can use ",Object(i.b)("strong",{parentName:"p"},"else if")," to handle multiple conditions."),Object(i.b)("h3",{id:"exercise-5-mins-2"},"Exercise (5 mins)"),Object(i.b)("p",null,"Can you explain what this function does line by line? What happens when you pass in a string?"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function numberChecker(num) {\n  if (num > 20) {\n    return `${num} is greater than 20`;\n  } else if (num === 20) {\n    return `${num} is equal to 20`;\n  } else if (num < 20) {\n    return `${num} is less than 20`;\n  } else {\n    return `${num} isn't even a number :(`;\n  }\n}\n")),Object(i.b)("h3",{id:"exercise-10-mins-1"},"Exercise (10 mins)"),Object(i.b)("p",null,"Create a function that gives you a message depending on your mood! It should:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"take one input"),Object(i.b)("li",{parentName:"ul"},'return "Good job, you\'re doing great!" if you pass in "happy"'),Object(i.b)("li",{parentName:"ul"},'return "Every cloud has a silver lining" if you pass in "sad"'),Object(i.b)("li",{parentName:"ul"},'return "Beep beep boop" if you pass in a number'),Object(i.b)("li",{parentName:"ul"},"return \"I'm sorry, I'm still learning about feelings!\" if you pass in anything else")),Object(i.b)("h2",{id:"logical-operators"},"Logical Operators"),Object(i.b)("p",null,"There are three logical operators in JavaScript: ",Object(i.b)("inlineCode",{parentName:"p"},"||")," (OR), ",Object(i.b)("inlineCode",{parentName:"p"},"&&")," (AND), ",Object(i.b)("inlineCode",{parentName:"p"},"!")," (NOT)."),Object(i.b)("p",null,"They let you write expressions that evaluate to a boolean value."),Object(i.b)("p",null,"Suppose you want to test if a number is bigger than 3 and smaller than 10. We can write this, using different logical operators."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let num = 10;\n\nfunction satisfiesRequirements(num) {\n  if (num > 3 && num < 10) {\n    return true;\n  }\n\n  return false;\n}\n")),Object(i.b)("p",null,"We can test expressions with logical operators in a node console too."),Object(i.b)("h3",{id:"exercise-5-mins-3"},"Exercise (5 mins)"),Object(i.b)("p",null,"Type the following expressions into your node REPL and note the output. Anything you didn't expect?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"let num = 10")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"num > 5 && num < 15")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"num < 10 || num === 10")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"false || true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"!true")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"let greaterThan5 = num > 5")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"!greaterThan5")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"!(num === 10)"))),Object(i.b)("h3",{id:"exercise-15-mins"},"Exercise (15 mins)"),Object(i.b)("p",null,"In pairs, write a function that checks a username is of an acceptable format for a user type. The function must:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"take two parameters: one for the username and one for the user type"),Object(i.b)("li",{parentName:"ul"},"if the username starts with a capital letter ",Object(i.b)("em",{parentName:"li"},"and")," has length between 5 and 10 characters long, it must return ",Object(i.b)("inlineCode",{parentName:"li"},'"Username valid"'),"; otherwise, it must return ",Object(i.b)("inlineCode",{parentName:"li"},'"Username invalid"')),Object(i.b)("li",{parentName:"ul"},"if the user type is an ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," ",Object(i.b)("em",{parentName:"li"},"or")," a ",Object(i.b)("inlineCode",{parentName:"li"},"manager"),", all usernames must return ",Object(i.b)("inlineCode",{parentName:"li"},'"Username valid"'))),Object(i.b)("h2",{id:"loops"},"Loops"),Object(i.b)("p",null,"When we're writing programs, we often find that we want to repeat a bit of code over and over, or repeat it but change something about it each time. To save ourselves from writing all that code, we can use a ",Object(i.b)("strong",{parentName:"p"},"loop"),". JavaScript has two kinds of loops, a ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop and a ",Object(i.b)("inlineCode",{parentName:"p"},"for")," loop."),Object(i.b)("h3",{id:"while-loop"},"while loop"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop is a way to repeat code until some condition is evaluated to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let i = 0;\nwhile (i < 20) {\n  someFunction(i);\n  i++;\n}\n")),Object(i.b)("p",null,"Notice the line ",Object(i.b)("strong",{parentName:"p"},"i++")," - this is the same as saying ",Object(i.b)("strong",{parentName:"p"},"i = i + 1")," It does exactly the same thing but it is just more convenient to write."),Object(i.b)("p",null,"It's important that the condition inside the parenthesis becomes false at some point - otherwise, we'll have what's known as an infinite loop!"),Object(i.b)("h3",{id:"exercise-10-minutes"},"Exercise (10 minutes)"),Object(i.b)("p",null,"Write a function that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Takes one number ",Object(i.b)("inlineCode",{parentName:"li"},"n")," as a parameter"),Object(i.b)("li",{parentName:"ul"},"Adds all numbers from ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to ",Object(i.b)("inlineCode",{parentName:"li"},"n"),". For example, if the input is ",Object(i.b)("inlineCode",{parentName:"li"},"3"),", the output should be ",Object(i.b)("inlineCode",{parentName:"li"},"0 + 1 + 2 + 3")),Object(i.b)("li",{parentName:"ul"},"You should use a while loop")),Object(i.b)("h3",{id:"for-loop"},"for loop"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"for")," loop is similar to a while loop, but with a more specialized syntax. Programmers invented the for loop when they realized they were always doing the same three things: creating loop counter variables (like ",Object(i.b)("inlineCode",{parentName:"p"},"i")," above), incrementing them by some amount, and checking that they're less than a value."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"for")," loop syntax has special places for each of those three things. Here's the same loop as the first while loop above, as a for loop:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/31692/75388870-9213a880-58dd-11ea-90e6-4e67eabf390b.png",alt:"For loop"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"for (let i = 0; i < 20; i++) {\n  someFunction(i);\n}\n")),Object(i.b)("h3",{id:"exercise-10-minutes-1"},"Exercise (10 minutes)"),Object(i.b)("p",null,"Write a function, similar to the last exercise, that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Takes one number ",Object(i.b)("inlineCode",{parentName:"li"},"n")," as a parameter"),Object(i.b)("li",{parentName:"ul"},"Adds all numbers from ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to ",Object(i.b)("inlineCode",{parentName:"li"},"n"),". For example, if the input is ",Object(i.b)("inlineCode",{parentName:"li"},"3"),", the output should be ",Object(i.b)("inlineCode",{parentName:"li"},"0 + 1 + 2 + 3")),Object(i.b)("li",{parentName:"ul"},"You should use an for loop")),Object(i.b)("h2",{id:"arrays"},"Arrays"),Object(i.b)("p",null,"If you ever find yourself writing code like this..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const mentor1 = "Daniel";\nconst mentor2 = "Irina";\nconst mentor3 = "Rares";\n')),Object(i.b)("p",null,"...then it's probably time to use an ",Object(i.b)("strong",{parentName:"p"},"array"),"!"),Object(i.b)("p",null,"Arrays are data structures that hold a list of values. We call these values the ",Object(i.b)("strong",{parentName:"p"},"elements")," of the array."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const mentors = ["Daniel", "Irina", "Rares"];\n')),Object(i.b)("p",null,"Arrays can hold any type of value (although almost always you only have one data type per array)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const testScores = [16, 49, 85];\nconst grades = ["F", "D", "A"];\nconst greetings = ["Hello, how are you?", "Hi! Nice to meet you!"];\n')),Object(i.b)("p",null,"You can access elements in an array using the ",Object(i.b)("strong",{parentName:"p"},"index")," of an element with ",Object(i.b)("strong",{parentName:"p"},"bracket notation")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\ud83d\udd14 Remember:")," All arrays start at position 0! To access the first element in an array, you need to access index ",Object(i.b)("inlineCode",{parentName:"p"},"0"),", the second element at ",Object(i.b)("inlineCode",{parentName:"p"},"1"),", the fifth at ",Object(i.b)("inlineCode",{parentName:"p"},"4")," and so forth. This is called zero-based indexed arrays. There are some ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html"}),"very intense reasons for this"),", but most people just accept it and move on."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];\n\nstudents[0]; // "Ahmed"\nstudents[3]; // "Nahidul"\n')),Object(i.b)("p",null,"You can also ",Object(i.b)("em",{parentName:"p"},"assign")," new values to parts of an array:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const students = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];\n\nstudents[2] = "Bianca";\n\nconsole.log(students); // ["Ahmed", "Maria", "Bianca", "Nahidul", "Jack"]\n')),Object(i.b)("h3",{id:"exercise-5-mins-4"},"Exercise (5 mins)"),Object(i.b)("p",null,"In the node REPL, enter the following array:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"> const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];\n")),Object(i.b)("p",null,"Now, using the correct indexes, get the following values from the array:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"strawberry"),Object(i.b)("li",{parentName:"ul"},"kiwi"),Object(i.b)("li",{parentName:"ul"},"orange"),Object(i.b)("li",{parentName:"ul"},"banana")),Object(i.b)("p",null,"Then, replace 'apple' with 'raspberry', and replace 'fig' with 'pineapple'."),Object(i.b)("h3",{id:"exercise-5-mins-5"},"Exercise (5 mins)"),Object(i.b)("p",null,'Complete this function so that, if the second index in the array contains the name "Amy", it returns ',Object(i.b)("inlineCode",{parentName:"p"},'"Second index matched!"')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function secondMatchesAmy(array) {\n  if ( ) {\n    return "Second index matched!";\n  }\n  return "Second index not matched";\n}\n')),Object(i.b)("h3",{id:"using-for-loops-with-arrays"},"Using for loops with arrays"),Object(i.b)("p",null,"We can use the power of loops to run some code for each element in our array."),Object(i.b)("p",null,"When we do this say we ",Object(i.b)("strong",{parentName:"p"},"iterate")," over an array."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const daysOfWeek = [\n  "Monday",\n  "Tuesday",\n  "Wednesday",\n  "Thursday",\n  "Friday",\n  "Saturday",\n  "Sunday",\n];\n\nfor (let i = 0; i < daysOfWeek.length; i++) {\n  const dayMessage = "day is: " + daysOfWeek[i];\n  const indexMessage = "index is: " + i;\n  console.log(indexMessage, dayMessage);\n}\n')),Object(i.b)("h3",{id:"exercise-10-mins-2"},"Exercise (10 mins)"),Object(i.b)("p",null,"Write a function which takes your ",Object(i.b)("strong",{parentName:"p"},"students")," array as an input. In the function, use a for loop to ",Object(i.b)("strong",{parentName:"p"},"iterate")," over the array and print the name of each student to the console."),Object(i.b)("h3",{id:"exercise---extra-credit-20-mins"},"Exercise - extra credit (20 mins)"),Object(i.b)("p",null,"In pairs, write a function which squares all numbers in an array and returns the array of squared numbers."),Object(i.b)("p",null,"Write a second function which takes an input of arrays and only returns an array of even numbers."),Object(i.b)("p",null,"How can you combine the two functions to return an array of even and squared numbers?"),Object(i.b)("h2",{id:"extra-exercises"},"Extra exercises"),Object(i.b)("h3",{id:"playing-computer-i"},"Playing computer I"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Working in pairs or groups, you have to predict the output of this program without executing it."),Object(i.b)("li",{parentName:"ol"},"What is printed to the console?"),Object(i.b)("li",{parentName:"ol"},"Have you learned anything new during this exercise?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const daysOfWeek = [\n  "Monday",\n  "Tuesday",\n  "Wednesday",\n  "Thursday",\n  "Friday",\n  "Saturday",\n  "Sunday",\n];\n\nfunction workingDay(day) {\n  return day + " is a working day";\n}\n\nfunction weekendDay(day) {\n  return day + " is at the weekend!";\n}\n\nfor (let i = 0; i < daysOfWeek.length; i++) {\n  if (i < 5) {\n    let day = workingDay(daysOfWeek[i]);\n    console.log(day);\n  } else {\n    let day = weekendDay(daysOfWeek[i]);\n    console.log(day);\n  }\n}\n')),Object(i.b)("h3",{id:"playing-computer-ii"},"Playing computer II"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Working in pairs or groups, you have to predict the output of this program without executing it."),Object(i.b)("li",{parentName:"ol"},"What is printed to the console?"),Object(i.b)("li",{parentName:"ol"},"Have you learned anything new during this exercise?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const a = 4;\nconst b = 8;\n\nconst multiplyNumbers = function (a, b) {\n  return a * b;\n};\n\nconst addNumbers = function (a, b, c) {\n  return a + b + c;\n};\n\nfor (let i = 0; i < 5; ++i) {\n  if (i < 3) {\n    const day = addNumbers(i, 2, a);\n    console.log(day);\n  } else {\n    const day = multiplyNumbers(i, 4);\n    console.log(day);\n  }\n}\n")),Object(i.b)("h3",{id:"playing-computer-iii"},"Playing computer III"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Again, working in pairs or groups, you have to predict the output of this program without executing it."),Object(i.b)("li",{parentName:"ol"},"What is printed to the console?"),Object(i.b)("li",{parentName:"ol"},"What was difficult about this exercise?"),Object(i.b)("li",{parentName:"ol"},"Have you learned anything new?")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let x = 2;\nlet y = 4;\nlet a = 2;\nlet b = 20;\n\nconst f1 = function (a, b) {\n  return a * b;\n};\n\nconst f2 = function (a, b, c) {\n  return a + b + c;\n};\n\nconsole.log(x);\nx = 3;\ny = f1(x, 2);\nconsole.log(y);\n\nfor (let i = 0; i < 10; ++i) {\n  a = a + 1;\n  if (i % 2 === 0) {\n    const d = f2(i, y, a);\n    console.log(d);\n  } else {\n    const e = f1(i, 2);\n    console.log(e);\n  }\n}\n")),Object(i.b)("h2",{id:"glossary"},"Glossary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Assert: to determine whether something is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," or not ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", more precisely ",Object(i.b)("inlineCode",{parentName:"li"},"false")),Object(i.b)("li",{parentName:"ul"},"Duplicate: exact copies of something (e.g. two or more files, numbers, directory can be exactly the same)"),Object(i.b)("li",{parentName:"ul"},"Index: numbers that let you know an item's position inside an array"),Object(i.b)("li",{parentName:"ul"},"Element: another name for an item in an array"),Object(i.b)("li",{parentName:"ul"},"Iterate: to repeat some code multiple times, as we do when we use a loop"),Object(i.b)("li",{parentName:"ul"},"REPL: (Read-Eval-Print-Loop) an interactive way to execute code you write inside the console"),Object(i.b)("li",{parentName:"ul"},"Zero-based Index: an ",Object(i.b)("inlineCode",{parentName:"li"},"array")," starting at ",Object(i.b)("inlineCode",{parentName:"li"},"0")," and not at ",Object(i.b)("inlineCode",{parentName:"li"},"1"))),Object(i.b)("p",null,"For words like ",Object(i.b)("strong",{parentName:"p"},"Terminal"),", ",Object(i.b)("strong",{parentName:"p"},"Primitive Types")," please see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-1/week-1/lesson#Glossary"}),"Glossary: JavaScript Core I - 2")),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."))}b.isMDXComponent=!0},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?r.a.createElement(d,l(l({ref:n},c),{},{components:t})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);