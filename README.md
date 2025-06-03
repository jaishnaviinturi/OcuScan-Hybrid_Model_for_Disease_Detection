# 👁️ OcuScan: Smart Retinal Disease ClassificationAdd commentMore actions

An AI-powered tool for detecting ocular diseases from fundus images using a hybrid VGG-ResNet deep learning model. Designed for **early detection** and **educational purposes**, OcuScan offers a user-friendly interface to upload retinal images and get instant predictions.

> 🔍 Built to promote awareness and early screening of eye conditions like cataracts, glaucoma, and diabetic retinopathy.

---

## 📸 Project Preview

### Homepage
Upload a fundus image to start your eye health screening.  
![Homepage Screenshot](https://github.com/user-attachments/assets/dbffa429-1ddf-4855-bde0-746d9f81700c)
![Homepage Screenshot](https://github.com/user-attachments/assets/0ce90e31-abbd-49d7-bca9-e76e2a2273a5)


### Prediction Result
Get instant predictions on potential eye conditions.  
![Result Screenshot](https://github.com/user-attachments/assets/b0c6026d-3f86-4a4e-aea7-ca057dd1a87a)

---

## 🔑 Key Features

- 📤 **Image Upload Interface**: Drag-and-drop or file picker for uploading fundus images.
- ⚡ **Instant Predictions**: Real-time results using a pre-trained VGG-ResNet model.
- ℹ️ **Educational Insights**: Detailed information on detected conditions (e.g., symptoms, risks).
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices.
- 🌐 **API-Driven Backend**: Flask processes images and delivers predictions securely.

---

## 🌍 Real-World Impact

OcuScan empowers users to:  
- 👓 Detect potential eye diseases early.  
- 📚 Understand eye health with educational content.  
- 🩺 Take proactive steps by consulting professionals.  

> ⚠️ **Disclaimer**: This tool is for educational purposes only and not a substitute for professional medical advice. Always consult a qualified ophthalmologist for diagnosis and treatment.

---

## 💻 Tech Stack

| **Category**         | **Technologies**                     |
|----------------------|--------------------------------------|
| **Frontend** 🎨      | React.js, TypeScript, Tailwind CSS, Lucide-React (for icons) |
| **Backend** ⚙️       | Flask, Python                       |
| **Machine Learning** 🤖 | TensorFlow, VGG-ResNet model        |
| **Image Processing** 🖼️ | OpenCV, NumPy                      |
| **CORS Support** 🔒   | Flask-CORS for secure communication |
| **Development Tools** 📓 | Google Colab for model training     |

---

## 🧪 Model Experimentation and Results

I tested four deep learning models on the Ocular Disease dataset to classify retinal diseases. Here are the results:

| **Model**           | **Accuracy** | **Precision** | **Recall** | **F1 Score** | **AUC** |
|---------------------|--------------|---------------|------------|--------------|---------|
| CNN-RNN             | 0.647        | 0.668         | 0.622      | 0.644        | 0.911   |
| EfficientNetB0      | 0.975        | 0.976         | 0.974      | 0.975        | 0.998   |
| VGG16 with DenseNet | 0.984        | 0.984         | 0.983      | 0.984        | 0.999   |
| VGG with ResNet     | **0.988**    | **0.988**     | **0.988**  | **0.988**    | **0.999** |

The **VGG with ResNet** model outperformed others and was chosen for this project. The trained model is saved as `Trained_model_final.h5`.

---

## 🛠️ Setup Instructions

### Prerequisites
- **Node.js** (v18 or higher) for the frontend.
- **Python** (v3.9–3.11) for the Flask app.
- **Git** for cloning the repository.

### Step 1: Clone the Repository
```bash
git clone https://github.com/jaishnaviinturi/OcuScan-Hybrid_Model_for_Disease_Detection.git
```

### Step 2: Set Up the Flask App
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Ensure the model file is present:
   - `Trained_model_final.h5` should be in the `backend/` directory (tracked with Git LFS).
   - If not using Git LFS, download it from [this Google Drive link](https://drive.google.com/file/d/1ZqfCi9Mi8ACxI3Gnkgdr6IJOn4LsaYgf/view?usp=drive_link)  and place it in the `backend/` directory.
5. Run the Flask app:
   ```bash
   python app.py
   ```
   The Flask app will run on `http://localhost:5000`.

### Step 3: Set Up the Frontend
1. Navigate to the frontend directory :
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000` (or another port if specified by Vite).

### Step 4: Test the Application
- Open `http://localhost:3000` in your browser.
- Upload a fundus image to get a prediction (e.g., “Normal”, “Cataract”).
- Explore the educational content about eye conditions.

---

## 🧑‍💻 Contributors

- [I. Jaishnavi](https://github.com/jaishnaviinturi) 🌟

---

## 📧 Contact

For questions or collaboration, reach out via [jaishnaviinturi@gmail.com](mailto:jaishnaviinturi@gmail.com) or open an issue on GitHub.
