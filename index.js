// Function: saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression: mondayWork
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function: wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("watch movies")); // Output: "This Saturday, I want to watch movies!"
  
  console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."
  
  const encouragingPrompt = wrapAdjective("!!!");
  console.log(encouragingPrompt("a hard worker")); // Output: "You are !!!a hard worker!!!"
  console.log(wrapAdjective("%")("a dedicated programmer")); // Output: "You are %a dedicated programmer%!"
  