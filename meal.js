const vegMess = {
  Monday: {
    breakfast:
      "Idly, Vada, Sambar, Chutney B, B,J Tea, Coffee, Milk Fried Egg Masala",
    lunch:
      "Phulka, Dal Ajawin, White Rice,Sambar Rasam,  Curd,  Onion rings  Egg Masala,  Poriyal  Sweet:Rava Laddu/Boondhi laddu",
    snack: "Veg Cutlet   COLD COFFEE Tea",
    dinner:
      "Phulka,Dosa, Chutney,Dhal,White Rice  Rasam, Sambar,  Butter Milk  Green Veg Sabzhi,  Seasonal Fruits ",
  },
  Tuesday: {
    breakfast:
      "Idly, Sambar, Chutney, Kitchadi B,B,J Tea, Coffee, Milk French Toast",
    lunch:
      "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad Coconut Rice /. Lemon Rice, Thuvayal, Dingri Muttar",
    snack: "Veg Samosa Sauce Tea, Coffee, Milk",
    dinner:
      "Chapathi, Dhal, White Rice, Rasam Sambar, Butter Milk, Dhum Aloo Egg Thai Fried Rice, Garlic Sauce Fruits: Cut Fruits Mixed",
  },
  Wednesday: {
    breakfast: "Masala Uthappam, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Punjabi, White Rice, Sambar Rasam, Loose Curd, Fryums Panneer Do Piaza, Poriyal",
    snack: "Pani Poori ICE LEMON TEA",
    dinner:
      "Phulka, Dhal fry, White Rice Rasam, Sambar, Curd rice Meal maker peas & capsicum masala",
  },
  Thursday: {
    breakfast:
      "Gobi Paratha, Curd, Pongal, Chutney, Sambar B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Madka, White Rice, Sambar Rasam, Curd, Papad Green Veg Sabzhi, Avaraikai Poriyal",
    snack: "Raw Banana Bajji Tea, Coffee, Milk",
    dinner:
      "Poori, Channa Masala, White Rice Rasam, Sambar, Butter Milk Green Poriyal Fruits: Banana",
  },
  Friday: {
    breakfast: "Masala Dosa, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Curd, Masala Papad Panneer Tikka Masala, Keerai kootu Sweet: Gulab Jamun",
    snack: "Cake Cold Badam Milk Tea",
    dinner:
      "Phulka, Idly, Chutney, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Brinjal Drumstick Masala Fruits: Seasonal Fruits",
  },
  Saturday: {
    breakfast:
      "Aloo Paratha, Curd, Kitchadi, Chutney, Sambar B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada/Kadi Pakoda, Papad Capsicum Peas Masala, Sambar",
    snack: "Mysore Bonda Chutney Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Masala, White Rice Rasam, Sambar, Butter Milk Schezwan Fried Rice, Gobi Manchurian Fruits: Papaya",
  },
  Sunday: {
    breakfast: "Idly, Vada, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Rajma, White Rice, Sambar Rasam, Curd, Fryums Veg Biryani, Oil Brinjal, Onion Raitha Sweet: Ice Cream",
    snack: "Veg Puffs Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Thoor, White Rice Rasam, Sambar, Butter Milk, Lemon Rice Aloo Capsicum Muttar Masala Seasonal Fruits",
  },
};

const nonVegMess = {
  Monday: {
    breakfast:
      "Idly, Vada, Sambar, Chutney B, B,J Tea, Coffee, Milk Fried Egg Masala",
    lunch:
      "Phulka, Dal Ajawin, White Rice,Sambar Rasam,  Curd,  Onion rings  Egg Masala,  Poriyal  Sweet:Rava Laddu/Boondhi laddu",
    snack: "Veg Cutlet   COLD COFFEE Tea",
    dinner:
      "Phulka,Dosa, Chutney,Dhal,White Rice  Rasam, Sambar,  Butter Milk  Green Veg Sabzhi,  Seasonal Fruits ",
  },
  Tuesday: {
    breakfast:
      "Idly, Sambar, Chutney, Kitchadi B,B,J Tea, Coffee, Milk French Toast",
    lunch:
      "Phulka, Dal Gujrati, White Rice, Rasam, Curd, Papad Coconut Rice /. Lemon Rice, Thuvayal, Dingri Muttar",
    snack: "Veg Samosa Sauce Tea, Coffee, Milk",
    dinner:
      "Chapathi, Dhal, White Rice, Rasam Sambar, Butter Milk, Dhum Aloo Egg Thai Fried Rice, Garlic Sauce Fruits: Cut Fruits Mixed",
  },
  Wednesday: {
    breakfast: "Masala Uthappam, Sambar, Chutney B,B,J Tea, Coffee, Milk",
    lunch:
      "Phulka, Dal Punjabi, White Rice, Sambar Rasam, Butter Milk, Fryums Chicken Masala, Poriyal",
    snack: "Pani Poori ICE LEMON TEA",
    dinner:
      "Phulka, Dhal fry, White Rice Rasam, Sambar, Curd rice Meal maker peas & capsicum masala",
  },
  Thursday: {
    breakfast:
      "Gobi Paratha, Curd, Pongal, Chutney B,B,J Tea, Coffee, Milk, Scrambeled Egg",
    lunch:
      "Phulka, Dal Madka, White Rice, Sambar Rasam, Curd, Papad Aloo Palak, Avaraikai Poriyal",
    snack: "Raw Banana Bajji Tea, Coffee, Milk",
    dinner:
      "Poori, Channa Masala, White Rice Rasam, Sambar, Butter Milk Green Poriyal Fruits: Banana",
  },
  Friday: {
    breakfast: "Plain Dosa, Sambar, Chutney B,B,J Tea, Coffee, Milk Fried Egg",
    lunch:
      "Phulka, Dal Rajasthani, White Rice, Sambar, Rasam, Butter Milk, Masala Papad Chicken 65, Keerai Kootu Sweet: Gulab Jamun",
    snack: "Cake Cold Badam Milk Tea",
    dinner:
      "Phulka, Idly, Chutney, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Brinjal Drumstick Masala Fruits: Seasonal Fruits",
  },
  Saturday: {
    breakfast:
      "Aloo Paratha, Curd, Pongal, Chutney, Sambar B,B,J Tea, Coffee, Milk Egg Burji",
    lunch:
      "Phulka, Dal Thadka, White Rice, Rasam, Dahi vada/Kadi Pakoda, Papad Capsicum Peas Masala, Sambar",
    snack: "Mysore Bonda Chutney Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal Masala, White Rice Rasam, Sambar, Butter Milk Schezwan Egg Fried Rice, Gobi Manchurian Fruits: Papaya",
  },
  Sunday: {
    breakfast:
      "Vada Paav/ Paav Bhaji, Pongal, Chutney Sambar B,B,J Tea, Coffee, Milk, Masala Omelette",
    lunch:
      "Phulka, Dal Rajma, White Rice, Sambar Rasam, Curd, Papad, Onion Raitha Chicken Biryani, Banaras Baigan, Sweet: Ice Cream",
    snack: "Veg Puffs Tea, Coffee, Milk",
    dinner:
      "Phulka, Dhal, White Rice Rasam, Sambar, Butter Milk Aloo Gobi Capsicum Masala, Fruit Salad",
  },
};

const messTypesData = {
  nonVegMess: nonVegMess,
  vegMess: vegMess,
};

const dayButtons = document.querySelectorAll(".daybtn");
const mealContainers = {
  breakfast: document.getElementById("breakfast"),
  lunch: document.getElementById("lunch"),
  snack: document.getElementById("snack"),
  dinner: document.getElementById("dinner"),
};

function displayCals(query) {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/nutrition?query=" + query.value,
    headers: { "X-Api-Key": " Api Key eg. VxG72FjYQzLwTtPqNA==7roujWV" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      const resDiv = document.getElementById("calorieResult");
      resDiv.innerHTML = "";
      var total_calories = 0,
        total_fat_total_g = 0,
        total_protein_g = 0,
        total_carbohydrates_total_g = 0;
      result.forEach((dish) => {
        var dishDiv = document.createElement("div");
        dishDiv.classList.add("dish-info");
        dishDiv.innerHTML = `<h3>${dish.name} </h3>
          <p>Calories: ${dish.calories}</p>
          <p>Fat: ${dish.fat_total_g} g</p>
          <p>Protein: ${dish.protein_g} g</p>
          <p>Carbohydrates: ${dish.carbohydrates_total_g} g</p>`;
        resDiv.appendChild(dishDiv);
        total_calories += dish.calories;
        total_fat_total_g += dish.fat_total_g;
        total_protein_g += dish.protein_g;
        total_carbohydrates_total_g += dish.carbohydrates_total_g;
      });
      var dishDiv = document.createElement("div");
      dishDiv.classList.add("dish-info");
      dishDiv.innerHTML = `<p><b>Total calories:</b> ${total_calories.toFixed(
        2
      )} </p>
      <p><b>Total fats:</b> ${total_fat_total_g.toFixed(2)} </p>
      <p><b>Total protein:</b> ${total_protein_g.toFixed(2)} </p>
      <p><b>Total carbs:</b> ${total_carbohydrates_total_g.toFixed(2)} </p>`;
      resDiv.appendChild(dishDiv);
      query.value = "";
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
      const resDiv = document.getElementById("calorieResult");
      resDiv.innerHTML =
        "<p>Error fetching calorie data. Please try again.</p>";
    },
  });
}

function displayMeals(day, messType) {
  dayButtons.forEach((btn) => btn.classList.remove("active"));

  const selectedButton = document.querySelector(`.daybtn[value="${day}"]`);
  selectedButton.classList.add("active");

  const meals = messTypesData[messType][day];
  for (const mealType in meals) {
    mealContainers[mealType].textContent = meals[mealType];
  }
}

dayButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const day = btn.value;
    const selctedMess = localStorage.getItem("messType");
    displayMeals(day, selctedMess);
  });
});

const curdate = new Date();
const curdayindx = curdate.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const curday = dayNames[curdayindx];
const selctedMess = localStorage.getItem("messType");
displayMeals(curday, selctedMess);

var query = document.getElementById("dishes");
const calbtn = document.getElementById("calcCalbtn");
calbtn.addEventListener("click", () => {
  if (query.value) {
    displayCals(query);
  }
});

// Chatbot UI elements
const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWindow = document.getElementById("chatbot-window");
const closeChatbot = document.getElementById("close-chatbot");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const sendChatbot = document.getElementById("send-chatbot");

// Toggle chatbot window
chatbotIcon.addEventListener("click", () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === "flex" ? "none" : "flex";
});

closeChatbot.addEventListener("click", () => {
  chatbotWindow.style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "Hello! I'm your nutrition assistant. Ask me anything about diet, nutrition"
  );
});

function addMessage(content, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", isUser ? "user" : "bot");
  messageDiv.textContent = content;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Autoscroll to bottom
}

function showLoading() {
  const loadingDiv = document.createElement("div");
  loadingDiv.classList.add("message", "bot", "loading");
  loadingDiv.textContent = "Thinking...";
  loadingDiv.id = "loading-message";
  chatbotMessages.appendChild(loadingDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Remove loading indicator
function hideLoading() {
  const loadingDiv = document.getElementById("loading-message");
  if (loadingDiv) {
    loadingDiv.remove();
  }
}

// Query
async function getChatbotResponse(query) {
  try {
    showLoading();

    //ngrok URL including /chatbot endpoint (change after deployed)
    const response = await fetch(
      "https://35c1-34-90-30-194.ngrok-free.app/chatbot",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: query }),
      }
    );

    hideLoading();

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${
          response.status
        }, Message: ${await response.text()}`
      );
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data.response || "Sorry, I couldn't process that request.";
  } catch (error) {
    hideLoading();
    console.error("Error fetching response:", error);
    return `Error: ${error.message}. Please check if the chatbot server is running or try again later.`;
  }
}

// Send message handler
sendChatbot.addEventListener("click", async () => {
  const query = chatbotInput.value.trim();
  if (query) {
    addMessage(query, true);
    chatbotInput.value = "";

    chatbotInput.disabled = true;
    sendChatbot.disabled = true;

    const response = await getChatbotResponse(query); // Fetch response
    addMessage(response);

    chatbotInput.disabled = false;
    sendChatbot.disabled = false;
    chatbotInput.focus();
  }
});

chatbotInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    sendChatbot.click();
  }
});
