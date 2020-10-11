from flask import Blueprint, Flask
from flask_restful import Api
from flask_cors import CORS
from .config import Config

from .resources.Cars import Car

#api
api_bp = Blueprint('api', __name__)
api = Api(api_bp)

#app
# template_dir = os.path.abspath('front_test')
app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(api_bp, url_prefix='/api')
CORS(app, resources={r"/*": {"origins": "*"}}, headers=['Content-Type'], expose_headers=['Access-Control-Allow-Origin'], supports_credentials=True)

# Routes
api.add_resource(Car, '/car-recognize')

