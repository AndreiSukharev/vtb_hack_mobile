from flask import request
import base64
from flask_restful import Resource

class Car(Resource):

    def get(self):
        return "sad"
        # return posts

    def post(self):
        req_params = dict(request.form)
        # req_params['picture'] = self._to_base64(req_params['picture'])
        return "ok"


    def _to_base64(self, image):
        data = 'data:image/'
        image_64_encoded = (base64.b64encode(image.read())).decode("utf-8")
        extention = image.filename.rsplit('.', 1)[1].lower() + ';base64,'
        new_image = data + extention + image_64_encoded
        return new_image