# Fitness QA Chatbot using T5

##  Project Overview

This repository presents a Fitness Question-Answering generative (QA) Chatbot built using the T5 Transformer model. It leverages a curated dataset of fitness-related QA pairs and applies natural language generation techniques to generate informative and relevant answers. The chatbot is designed for health-conscious individuals, fitness enthusiasts, and those seeking quick guidance about exercise, nutrition, motivation, and more.

---

## 📁 Dataset

* **Source**: [HuggingFace Dataset - its-myrto/fitness-question-answers](https://huggingface.co/datasets/its-myrto/fitness-question-answers)
* **Size**: 965 QA pairs (English)
* **Format**: CSV with two main columns: `Question`, `Answer`

### Preprocessing

* Lowercasing, whitespace normalization
* Special character removal
* Filtering fitness-related content using keywords (e.g., "exercise", "nutrition")
* Optional paraphrasing to augment the data (if < 1000 examples)

---

##  Model Training

### Model: `t5-small`

### ⚙ Hyperparameters

| Parameter                   | Value                 |
| --------------------------- | --------------------- |
| Model                       | t5-small              |
| Epochs                      | 15                    |
| Batch size                  | 256 (train), 2 (eval) |
| Learning rate               | 5e-5                  |
| Weight decay                | 0.01                  |
| Warmup steps                | 200                   |
| Gradient Accumulation Steps | 4                     |
| Max Input Length            | 256                   |
| Max Target Length           | 64                    |

### Training Pipeline

* Data tokenization with prompt formatting ("Answer this fitness question: ...")
* Supervised fine-tuning using `Trainer` API
* Early stopping (patience: 3 eval steps)
* Logging and loss visualization

---

## 📊 Performance Metrics

| Metric                 | Score   |
| ---------------------- | ------- |
| BLEU                   | \~0.32  |
| F1 Score (token-level) | \~0.68  |
| Perplexity             | \~15.42 |

Metrics computed on a 100-sample validation set.

---

## 💬 Chatbot Interaction

Example Queries:

```
Q: How can I improve my running endurance?
A: Running endurance can be improved with consistent cardio training, proper hydration, and interval workouts.

Q: What are effective core exercises?
A: Effective core exercises include planks, Russian twists, crunches, and mountain climbers.

Q: What should I eat before exercising?
A: Eat a light meal rich in carbs and moderate protein 30-60 minutes before exercising.
```

---

## 🛠️ How to Run

### Setup

```bash
pip install -r requirements.txt
```

### Training

```bash
python train_fitness_qa.py
```

### Evaluation

```bash
python evaluate_fitness_qa.py
```

### Interaction

```bash
python chatbot_interface.py
```

---

##  Demo Video

\[Insert Link to YouTube or Google Drive Demo Here]

---

## 📚 References

1. Raffel, C., et al. "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer." arXiv preprint arXiv:1910.10683 (2020).
2. HuggingFace Transformers: [https://huggingface.co/transformers/](https://huggingface.co/transformers/)
3. its-myrto/fitness-question-answers Dataset: [https://huggingface.co/datasets/its-myrto/fitness-question-answers](https://huggingface.co/datasets/its-myrto/fitness-question-answers)
4. BLEU Score: Papineni et al., "BLEU: a Method for Automatic Evaluation of Machine Translation." ACL (2002)

---

## ✅ Deliverables Checklist

* [x] Jupyter/Python scripts for data preprocessing, training, and evaluation
* [x] Cleaned dataset (CSV)
* [x] Trained model and tokenizer saved to `model/final`
* [x] Evaluation script with BLEU, F1, and Perplexity
* [x] README file (this)
* [ ] Demo video (to be added)
* [x] Full report (`Fitness_QA_Report.pdf`)

---
---

##  Contact

**Author**: Jules Gatete
**Email**: [j.gatete@alustudent.com](mailto:j.gatete@alustudent.com)
**GitHub**: [github.com/Jules-gatete](https://github.com/Jules-gatete)
