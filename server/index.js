require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PredictionModel = require("./models/schema");
const { urlencoded } = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const { format } = require("date-fns");
const port = process.env.PORT || 5000;

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

require("./db/connect");

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getData", async (req, res) => {
  try {
    const data = await PredictionModel.find();

    const formattedData = data.reduce((acc, prediction) => {
      prediction.conversations.forEach((conversation) => {
        conversation.exchanges.forEach((exchange) => {
          acc.push({
            id: prediction._id.toString(),
            input: exchange.user_input,
            output: exchange.ai_output,
            timestamp: format(new Date(exchange.timestamp), "h:mm a, ddMMM"),
          });
        });
      });
      return acc;
    }, []);

    res.send(formattedData);
    console.log(formattedData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/prompt", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    let responseContent = "";

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      stream: true,
    });

    for await (const chunk of completion) {
      responseContent += chunk.choices[0].delta.content;
      console.log(responseContent);
    }

    res.send(responseContent);

    const session_id = uuidv4();

    const timestamp = new Date();
    const formattedTimestamp = format(timestamp, "h:mm a, ddMMM");

    const conversationData = {
      session_id,
      timestamp_start: formattedTimestamp,
      timestamp_end: formattedTimestamp,
      exchanges: [
        {
          user_input: prompt,
          ai_output: responseContent,
          timestamp: formattedTimestamp,
        },
      ],
    };

    const newPrediction = new PredictionModel({
      conversations: [conversationData],
    });

    newPrediction
      .save()
      .then(() => {
        console.log("Prediction data saved successfully");
      })
      .catch((error) => {
        console.error("Error saving prediction data:", error);
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
