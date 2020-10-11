from flask import request
from flask_restful import Resource
import torch
import pickle
import torchvision.transforms as transforms
import PIL.Image as Image
from io import BytesIO
import base64
import os

current_folder = "/app/resources/"
model_path = os.getcwd() + current_folder + "model"
model_dict = os.getcwd() + current_folder + "model_dict.pickle"

model = torch.load(model_path, map_location=torch.device('cpu'))
model.eval()
with open(model_dict, 'rb') as f:
    model_data = pickle.load(f)
classes = model_data['classes']
loader = model_data['loader']


class Car(Resource):

    def get(self):
        return "ok"

    def post(self):
        content = request.json['content']
        return self.recognize(content)

    @staticmethod
    def recognize(base64String):
        imageBase64 = Image.open(BytesIO(base64.b64decode(base64String)))
        loadedImage = loader(imageBase64).float()
        gradientImage = torch.autograd.Variable(loadedImage, requires_grad=True)
        res = gradientImage.unsqueeze(0)
        output = model(res)
        cars_conf_dict = {"probabilities": dict(zip(classes, output.data[0].tolist())) }
        return cars_conf_dict

    # def _to_base64(self, image):
    #     data = 'data:image/'
    #     image_64_encoded = (base64.b64encode(image.read())).decode("utf-8")
    #     extention = image.filename.rsplit('.', 1)[1].lower() + ';base64,'
    #     new_image = data + extention + image_64_encoded
    #     return new_image
