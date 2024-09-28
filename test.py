import torch
import torch.nn as nn
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.preprocessing import LabelEncoder
import pandas as pd

# Load dataset for vectorizer and label encoder
df = pd.read_csv(r"D:\Documents\archive\Cleaned_Indian_Food_Dataset.csv")

# Preprocess data for inference
vectorizer = CountVectorizer(tokenizer=lambda x: x.split(','), token_pattern=None)
vectorizer.fit(df['Cleaned-Ingredients'])
label_encoder = LabelEncoder()
label_encoder.fit(df['TranslatedRecipeName'])

# Define the model architecture
class RecipeModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(RecipeModel, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, num_classes)
        self.relu = nn.ReLU()

    def forward(self, x):
        return self.fc2(self.relu(self.fc1(x)))

# Load the model
input_size = len(vectorizer.get_feature_names_out())
hidden_size = 128
num_classes = len(label_encoder.classes_)
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

model = RecipeModel(input_size, hidden_size, num_classes).to(device)
model.load_state_dict(torch.load('recipe_model.pth', map_location=device, weights_only=True))
model.eval()  # Set model to evaluation mode

# Function to predict recipes
def predict_recipe(ingredients_str):
    ingredients_vec = vectorizer.transform([ingredients_str]).toarray()
    ingredients_tensor = torch.tensor(ingredients_vec, dtype=torch.float32).to(device)

    with torch.no_grad():
        output = model(ingredients_tensor)
        _, predicted = torch.max(output, 1)
    
    return label_encoder.inverse_transform(predicted.cpu().numpy())[0]

# Receive user input and predict recipe
new_ingredients = input("Enter ingredients separated by commas: ")
predicted_recipe = predict_recipe(new_ingredients)
print(f'Predicted Recipe: {predicted_recipe}')
