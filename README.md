# 🏋️‍♂ **FitCoachBot**: A Transformer-Based Fitness Q\&A Chatbot

##  Project Overview

**FitCoachBot** is a domain-specific chatbot trained on fitness-related questions using the `T5-small` Transformer model. It generates natural-language answers to queries about workouts, healthy eating, endurance, motivation, and general fitness.
---

##  Dataset

* **Source**: [its-myrto/fitness-question-answers](https://huggingface.co/datasets/its-myrto/fitness-question-answers)
* **Original Size**: 965 Q\&A pairs
* **Final Cleaned Dataset**: 902 fitness-related pairs (93.5% retention)

### Preprocessing

* Lowercased text, removed punctuation and extra whitespaces
* Tokenization with Hugging Face `AutoTokenizer`
* Max token lengths: 512 (input), 64 (target)
* Filtered with fitness-specific keywords

---

##  Model Architecture & Training

* **Model**: `t5-small`
* **Activation Function**: ReLU
* **Approach**: Instruction-style fine-tuning
* **Frameworks**: Hugging Face Transformers + PyTorch

###  Hyperparameters

| Parameter               | Value        |
| ----------------------- | ------------ |
| Model                   | `t5-small`   |
| Epochs                  | 15           |
| Learning Rate           | 5e-5         |
| Batch Size (Train/Eval) | 2 / 2        |
| Max Input Length        | 512          |
| Max Target Length       | 64           |
| Warmup Steps            | 200          |
| Weight Decay            | 0.01         |
| Gradient Accumulation   | 4            |
| Optimizer               | AdamW        |
| Loss Function           | CrossEntropy |
| Early Stopping          | ✅ Enabled    |
| Gradient Checkpointing  | ✅ Enabled    |

---

## Evaluation Metrics

| Metric         | Model 3 | ✅ **Model 4 (Best)** |
| -------------- | ------- | -------------------- |
| **BLEU**       | 0.0132  | **0.0361**           |
| **F1 Score**   | 18.68%  | 17.03%               |
| **Perplexity** | 9669.28 | **10819.09**         |

> **Note**: Model 4 was selected for deployment based on BLEU performance.

---
##  Deployment

* **API Repository**: [github.com/Jules-gatete/apifiteness](https://github.com/Jules-gatete/apifiteness)
* **Frontend (Vercel)**: [ml-techniques-i-chatbot.vercel.app](https://ml-techniques-i-chatbot.vercel.app)
* **Demo Video**: [Watch on YouTube](https://youtu.be/_4hFlLHi1m0)

---

##  Run Locally

###  Backend Setup (FastAPI)

```bash
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
```

* Backend runs at: `http://localhost:8000`
* Swagger docs available at: `http://localhost:8000/docs`

###  Frontend Setup (React + Vite)

```bash
cd client  # if your frontend is inside a "client" folder
npm install
npm run dev
```

* Frontend runs at: `http://localhost:5173`

---

## Challenges Faced

* Small dataset (under 1,000 Q\&A pairs)
* Limited compute resources (GPU RAM constraints)
* Performance drop on vague or short questions
* API deployment on Render fails due to **large model size (\~245MB)**

---

##  Deliverables

*  [Demo Video](https://youtu.be/_4hFlLHi1m0)

---

##  Author

**Jules Gatete**
[j.gatete@alustudent.com](mailto:j.gatete@alustudent.com)
