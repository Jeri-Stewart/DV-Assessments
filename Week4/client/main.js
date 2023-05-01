const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const inspirationBtn = document.getElementById("inspirationButton")
const affirmationBtn = document.getElementById("affirmationButton");
const getGoalBtn =  document.getElementById("viewGoalsButton")
const form = document.querySelector('#form1')
const formTwo = document.querySelector('#form2')
const formThree = document.querySelector('#form3')

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getInspiration = () => {
  axios.get("http://localhost:4000/api/inspiration/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getAffirmations = () => {
  axios.get("http://localhost:4000/api/affirmations/")
    .then((res) => {
    const affirmations = res.data;
    for (let i = 0; i < affirmations.length; i++) {
      // loop through affirmations array
      let affirmation = affirmations[i];
      let affirmationArea = document.getElementById("affirmationArea");
      let newHeading = document.createElement("h4"); // create h4 element to insert
      newHeading.textContent = affirmation; // define the text of the h4 element to be the name extracted
      affirmationArea.appendChild(newHeading); // post the h4 tag into the body
    }
  });
};

const getGoals = () => {
    axios.get("http://localhost:4000/api/goals/")
        .then((res) => {
            let goalsList = res.data
            for(let i = 0; i<goalsList.length;i++){
                let {goal} = goalsList[i]
                let {status} = goalsList[i]
                let {id} = goalsList[i]
                let goalItem = document.createElement("li")
                let textNode = document.createTextNode("Goal ID #: " + id + " || " + goal + " // " + status)
                goalItem.appendChild(textNode)
                document.getElementById("goalList").appendChild(goalItem)
            }
            console.log(res)
        })
}


const createGoal = (body) => {
    axios.post("http://localhost:4000/api/goals/", body)
        .then(res => {
           console.log(res) 
        })
}


function submitHandler() {
    let newGoal = {
        goal: String(document.querySelector('#goal').value)
    }
    createGoal(newGoal)
}


const updateGoal = (id, status) => {
  axios.put(`http://localhost:4000/api/goals/${id}`, {status})
    .the(res => {
      console.log(res)
      alert("Your goal has been updated successfully. Click 'View Goals' to see updated goal list")
    })
      
}

function submitHandlerTwo() {
  let id = String(document.querySelector('#goalId').value)
  let status = String(document.querySelector('#status').value)
  
  updateGoal(id, status)
}

const deleteGoal = id => {
  axios.delete(`http://localhost:4000/api/goals/${id}`)
    .then(res => {
      console.log(res)
      alert("Your goal has been deleted. Click 'View Goals' to see updated goal list")
    })

}

function submitHandlerThree() {
  let id = String(document.querySelector('#goalId2').value)
  deleteGoal(id)
}
  

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
inspirationBtn.addEventListener("mouseover", getInspiration);
affirmationBtn.addEventListener("click", getAffirmations);
getGoalBtn.addEventListener("click", getGoals)
form.addEventListener("submit", submitHandler)
formTwo.addEventListener("submit", submitHandlerTwo)
formThree.addEventListener("submit", submitHandlerThree)


