import numpy as np
import cv2
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend compatibility

# Define class labels based on the dataset
class_labels = ['cataract', 'normal fundus', 'pathological myopia','moderate non proliferative retinopathy' ,'dry age-related macular degeneration','glaucoma','mild nonproliferative retinopathy']  # Replace with your actual class labels
# Load the pre-trained VGG with ResNet model
model_path = r"E:\VScode\Eye_Single_Label\Trained model final.h5"  # Update with actual model path
model = load_model(model_path)

def preprocess_image(image_file, target_size=(128, 128)):
    """
    Preprocess an uploaded image for the VGG with ResNet model.
    
    Args:
        image_file: Uploaded image file
        target_size (tuple): Target size for resizing the image (128x128)
    
    Returns:
        numpy array: Preprocessed image
    """
    # Read image from file
    img_array = np.frombuffer(image_file.read(), np.uint8)
    img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
    img = cv2.resize(img, target_size)  # Resize to model input size (128x128)
    img = img_to_array(img) / 255.0  # Normalize to [0, 1]
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

@app.route('/api/predict', methods=['POST'])
def predict():
    """
    Endpoint to predict ocular disease from an uploaded image.
    
    Returns:
        JSON: Predicted class only
    """
    try:
        # Check if an image file is included in the request
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
        
        image_file = request.files['image']
        
        # Preprocess the image
        processed_image = preprocess_image(image_file)
        
        # Make prediction
        predictions = model.predict(processed_image)[0]
        predicted_class_idx = np.argmax(predictions)
        predicted_class = class_labels[predicted_class_idx]
        
        # Prepare response with only predicted class
        response = {
            'predicted_class': predicted_class
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)