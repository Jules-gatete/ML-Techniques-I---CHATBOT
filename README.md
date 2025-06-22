# 🏋️‍♂ **FitCoachBot**: A Transformer-Based Fitness Q\&A Chatbot

## Project Overview

**FitCoachBot** is a domain-specific chatbot trained on fitness-related questions using the `T5-small` transformer model. It answers queries about fitness, nutrition, workouts, and healthy living using natural language generation.

##  Dataset

* **Source**: [its-myrto/fitness-question-answers](https://huggingface.co/datasets/its-myrto/fitness-question-answers)
* **Original Size**: 965 Q\&A pairs
* **Final Dataset**: 902 filtered fitness-related pairs (93.5% retained)

### Preprocessing Steps

* Lowercased and cleaned text (punctuation and whitespace)
* Tokenized using Hugging Face's `AutoTokenizer`
* Prompt format:
  `"Answer this fitness-related question: {question}"`
* Truncated input to 512 tokens; output to 64 tokens
* Filtered using fitness-related keywords

---

## Model Architecture & Training

* **Base Model**: `t5-small`
* **Activation**: ReLU
* **Training Strategy**: Instruction-style fine-tuning with Hugging Face `Trainer` API

###  Hyperparameters

| Parameter               | Value        |
| ----------------------- | ------------ |
| Model                   | t5-small     |
| Epochs                  | 15           |
| Learning Rate           | 3e-5         |
| Batch Size (Train/Eval) | 2 / 2        |
| Max Input Length        | 512          |
| Max Target Length       | 64           |
| Warmup Steps            | 200          |
| Weight Decay            | 0.01         |
| Gradient Accumulation   | 4            |
| Optimizer               | AdamW        |
| Loss Function           | CrossEntropy |
| Early Stopping          | ✅ Enabled    |
| Checkpointing           | ✅ Enabled    |

---

## 📊 Evaluation Results

| Metric         | Model 3 |  **Model 4 (Best)** |
| -------------- | ------- | -------------------- |
| **BLEU**       | 0.0132  | **0.0361**           |
| **F1**         | 18.68%  | 17.03%               |
| **Perplexity** | 9669.28 | **10819.09**         |

✅ *Model 4 selected as final version for deployment.*

---

##  Chatbot Interaction


---

##  Deployment

*  **API Repo**: [github.com/Jules-gatete/apifiteness](https://github.com/Jules-gatete/apifiteness)
*  **Frontend (Vercel)**: [ml-techniques-i-chatbot.vercel.app](https://ml-techniques-i-chatbot.vercel.app)
*  **Demo Video**: [YouTube - FitCoachBot](https://youtu.be/_4hFlLHi1m0)

---

##  Run Locally

###  Setup

```bash
pip install -r requirements.txt
```

###  Train the Model

```bash
python train_fitness_qa.py
```

### Evaluate

```bash
python evaluate_fitness_qa.py
```

###  Chatbot Interface

```bash
python chatbot_interface.py
```

---

## Challenges Faced

* Limited dataset (under 1,000 Q\&A pairs)
* GPU memory constraints
* Model underperformance on short or vague queries

---

## Deliverables

* [Frontend](https://ml-techniques-i-chatbot.vercel.app/)
* [Demo Video](https://youtu.be/_4hFlLHi1m0)
* Final Report (`Fitness_QA_Report.pdf`)


## Contact

**Author**: Jules Gatete
📧 Email: [j.gatete@alustudent.com](mailto:j.gatete@alustudent.com)
